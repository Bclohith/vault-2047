const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    try {
        const list = fs.readdirSync(dir);
        list.forEach(file => {
            const fullPath = path.resolve(dir, file);
            const stat = fs.statSync(fullPath);
            if (stat && stat.isDirectory()) {
                results = results.concat(walk(fullPath));
            } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx') || fullPath.endsWith('.css')) {
                results.push(fullPath);
            }
        });
    } catch(e) {}
    return results;
}

const srcDir = path.join(__dirname, '../src');
const files = walk(srcDir);

const issues = [];
files.forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, i) => {
        // Find any /assets/ reference that is NOT already prefixed with /Vault-2047
        if (line.includes('/assets/') && !line.includes('/Vault-2047/assets/') && !line.includes("'production'") && !line.includes('"production"')) {
            issues.push({ file: path.relative(srcDir, f), line: i+1, content: line.trim() });
        }
    });
});

if (issues.length === 0) {
    console.log('✅ All /assets/ paths are correctly prefixed!');
} else {
    console.log(`Found ${issues.length} lines with un-prefixed /assets/ paths:\n`);
    issues.forEach(i => {
        console.log(`  ${i.file}:${i.line}`);
        console.log(`    ${i.content.substring(0, 150)}`);
    });
}
