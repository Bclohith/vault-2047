const fs = require('fs');
const path = require('path');

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

const files = walk(path.join(__dirname, '../src'));

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    let changed = false;
    
    // Replace <img src="/assets/..."
    content = content.replace(/<img[^>]*src=["'](\/assets\/[^"']+)["']/g, (match, p1) => {
        changed = true;
        return match.replace(p1, '/Vault-2047' + p1);
    });
    
    // Replace css url('/assets/...')
    content = content.replace(/url\(["']?(\/assets\/[^"'\)]+)["']?\)/g, (match, p1) => {
        changed = true;
        return match.replace(p1, '/Vault-2047' + p1);
    });
    
    if (changed) {
        fs.writeFileSync(f, content);
        console.log('Fixed', f);
    }
});
