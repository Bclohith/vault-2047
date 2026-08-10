const fs = require('fs');
const path = require('path');

// Map of file (relative to src/) => array of {find, replace}
const fixes = [
  // EventFocusSection.js - dynamic src
  {
    file: 'components/EventFocusSection.js',
    find: "src={`/assets/focus-${index + 1}.png`}",
    replace: "src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/focus-${index + 1}.png`}"
  },
  // SpeakersSection.js - dynamic src
  {
    file: 'components/SpeakersSection.js',
    find: "src={`/assets/speaker-${(index % 4) + 1}.png`}",
    replace: "src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/speaker-${(index % 4) + 1}.png`}"
  },
  // agenda/page.js - dynamic src
  {
    file: 'app/agenda/page.js',
    find: "src={`/assets/agenda/${exp.img}`}",
    replace: "src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/agenda/${exp.img}`}"
  },
  // apply-to-exhibit/page.js
  {
    file: 'app/apply-to-exhibit/page.js',
    find: "src={`/assets/${benefit.img}`}",
    replace: "src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/${benefit.img}`}"
  },
  // apply-to-sponsor/page.js
  {
    file: 'app/apply-to-sponsor/page.js',
    find: "src={`/assets/${benefit.img}`}",
    replace: "src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/${benefit.img}`}"
  },
  // be-an-association-partner/page.js
  {
    file: 'app/be-an-association-partner/page.js',
    find: "src={`/assets/${benefit.img}`}",
    replace: "src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/${benefit.img}`}"
  },
  // association-partners/page.js
  {
    file: 'app/association-partners/page.js',
    find: "src={`/assets/brands/brand-${num}.png`}",
    replace: "src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/brands/brand-${num}.png`}"
  },
  // exhibitors/page.js
  {
    file: 'app/exhibitors/page.js',
    find: "src={`/assets/brands/brand-${num}.png`}",
    replace: "src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/brands/brand-${num}.png`}"
  },
  // media-partners/page.js
  {
    file: 'app/media-partners/page.js',
    find: "src={`/assets/brands/brand-${num}.png`}",
    replace: "src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/brands/brand-${num}.png`}"
  },
  // vault-themes/page.js
  {
    file: 'app/vault-themes/page.js',
    find: "src={`/assets/vault-themes/${theme.icon}`}",
    replace: "src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/vault-themes/${theme.icon}`}"
  },
];

// sponsors and ecosystem have multiple occurrences of the same pattern, handle separately
const multiFileFixes = [
  {
    file: 'app/ecosystem/page.js',
    find: "src={`/assets/brands/brand-${num}.png`}",
    replace: "src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/brands/brand-${num}.png`}",
    replaceAll: true
  },
  {
    file: 'app/sponsors/page.js',
    find: "src={`/assets/brands/brand-${num}.png`}",
    replace: "src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/brands/brand-${num}.png`}",
    replaceAll: true
  },
];

const srcDir = path.join(__dirname, '../src');

[...fixes, ...multiFileFixes].forEach(({ file, find, replace, replaceAll }) => {
  const filePath = path.join(srcDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (replaceAll) {
    const newContent = content.split(find).join(replace);
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed (all): ${file}`);
    } else {
      console.log(`No match found in: ${file} for pattern: ${find.substring(0, 50)}`);
    }
  } else {
    if (content.includes(find)) {
      const newContent = content.replace(find, replace);
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${file}`);
    } else {
      console.log(`No match found in: ${file} for pattern: ${find.substring(0, 50)}`);
    }
  }
});

console.log('\nDone! Run: node scratch/check_assets.js to verify');
