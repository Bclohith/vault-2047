const fs = require('fs');
const path = require('path');

// This script scans all source files for /assets/ paths that are used in:
// 1. Raw <img src="/assets/..."> tags (need prefix since assetPrefix doesn't apply to raw img)
// 2. CSS url('/assets/...') (also not handled by assetPrefix)
// 3. Next.js <Image src="/assets/..."> - handled by basePath/assetPrefix automatically

// After adding assetPrefix to next.config.mjs, Next.js <Image> components 
// will automatically prefix their paths. But raw <img> tags and dynamic CSS 
// background-image still need explicit /Vault-2047 prefix in source.

// This script ONLY checks for problematic patterns that won't be fixed by assetPrefix.

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
            results.push(file);
        }
    });
    return results;
}

const srcDir = path.join(__dirname, '../src');
const files = walk(srcDir);

let issues = [];
files.forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, i) => {
        // Check for raw <img src="/assets/... (not already prefixed with /Vault-2047)
        if (/<img[^>]+src=["']\/assets\//.test(line)) {
            issues.push({ file: f, line: i+1, type: 'raw-img', content: line.trim() });
        }
        // Check for dynamic src with template literal /assets/
        if (/src=\{`\/assets\//.test(line)) {
            issues.push({ file: f, line: i+1, type: 'dynamic-img', content: line.trim() });
        }
        // Check for backgroundImage url('/assets/
        if (/backgroundImage.*url\(.*\/assets\//.test(line)) {
            issues.push({ file: f, line: i+1, type: 'bg-url', content: line.trim() });
        }
    });
});

if (issues.length === 0) {
    console.log('No issues found - all raw asset paths appear to be correctly prefixed.');
} else {
    issues.forEach(i => {
        console.log(`[${i.type}] ${path.relative(srcDir, i.file)}:${i.line}`);
        console.log('  ' + i.content.substring(0, 120));
        console.log();
    });
    console.log(`Total: ${issues.length} issues`);
}
