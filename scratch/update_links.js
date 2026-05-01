const fs = require('fs');
let html = fs.readFileSync('products.html', 'utf-8');

// Replace standard onclicks
html = html.replace(/<a href="#" onclick="openDrawer\('([^']+)'\);return false">/g, '<a href="$1.html">');

// Replace any remaining button/CTA clicks for drone or other special sections
html = html.replace(/onclick="openDrawer\('([^']+)'\);return false"/g, 'href="$1.html"');

fs.writeFileSync('products.html', html);
console.log('Updated links in products.html');
