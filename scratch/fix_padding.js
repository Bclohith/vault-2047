const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.js') || file.endsWith('.jsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('src/app');
files.push('src/components/CTASection.js');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Pattern 1: attend/page.js (wrapper)
  content = content.replace(/px-4 md:px-20 py-20/g, 'px-4 md:px-20 py-[10px]');
  
  // Pattern 2: apply-to-exhibit, apply-to-sponsor, be-an-association-partner, etc
  content = content.replace(/py-16 md:py-20 lg:p-20/g, 'p-[10px]');
  
  // Pattern 3: CTASection.js
  content = content.replace(/py-20 lg:py-\[120px\]/g, 'py-[10px]');

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});

console.log('Padding updated.');
