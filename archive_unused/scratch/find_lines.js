const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf-8');
const lines = content.split('\n');

const searchTerms = [
  'const PRODUCTS',
  'function renderProducts',
  '<select name="category">',
  '<!-- ===================== ABOUT US ===================== -->',
  'Patchcords · Splitters · WDM',
  '<!-- ===================== VIDEO GALLERY ===================== -->',
  '<!-- ===================== INDUSTRIES ===================== -->',
  '<!-- ===================== STATS ===================== -->',
  'class="chips" id="prodChips"'
];

searchTerms.forEach(term => {
  const lineIdx = lines.findIndex(l => l.includes(term));
  console.log(`"${term}" found at line ${lineIdx + 1}`);
});
