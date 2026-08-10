const fs = require('fs');
const path = require('path');

const BASE = '/Vault-2047';

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

let totalFixed = 0;

files.forEach(f => {
    // skip the assetUrl helper itself
    if (f.includes('assetUrl.js') || f.includes('scan_all_assets') || f.includes('fix_dynamic_assets')) return;
    
    let content = fs.readFileSync(f, 'utf8');
    let changed = false;

    // 1. Fix static string paths: src="/assets/...  -> src="/Vault-2047/assets/...
    //    But don't double-prefix things already having /Vault-2047
    const before = content;

    // Replace all occurrences of "/assets/ that are NOT already preceded by /Vault-2047
    content = content.replace(/(?<!\/Vault-2047)(["'`])\/assets\//g, (match, quote) => {
        return `${quote}${BASE}/assets/`;
    });

    // Also fix object key values like: src: "/assets/... -> src: "/Vault-2047/assets/
    // (already handled above since it matches `"/assets/`)

    // Also fix inline style backgroundImage
    // url('/assets/  -> url('/Vault-2047/assets/
    // (already handled above)

    if (content !== before) {
        changed = true;
        fs.writeFileSync(f, content);
        const relPath = path.relative(srcDir, f);
        console.log('Fixed:', relPath);
        totalFixed++;
    }
});

console.log(`\nDone! Fixed ${totalFixed} files.`);
