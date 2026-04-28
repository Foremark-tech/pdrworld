const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../index.html');
let html = fs.readFileSync(file, 'utf8');

// Footer Contact update
html = html.replace(
  /<li><strong style="color:#fff;font-weight:600">Headquarters<\/strong><br>99, Old Prabhadevi Road<br>Mumbai 400025, India<\/li>/,
  '<li><strong style="color:#fff;font-weight:600">Headquarters</strong><br>PDR Videotronics India Pvt. Ltd.<br>99 Old Prabhadevi Road<br>Mumbai 400025, Maharashtra, India</li>'
);

html = html.replace(
  /<li><strong style="color:#fff;font-weight:600">Manufacturing<\/strong><br>Filmcity Complex, Goregaon East<br>Mumbai 400065, India<\/li>/,
  '<li><strong style="color:#fff;font-weight:600">Manufacturing</strong><br>Filmcity Complex, Gen. A.K. Vaidya Marg<br>Goregaon East<br>Mumbai 400065, India</li>'
);

// Contact Section updates
html = html.replace(
  /99, Old Prabhadevi Road,<br>Mumbai – 400025, Maharashtra, India/,
  '99 Old Prabhadevi Road,<br>Mumbai 400025, Maharashtra, India'
);

html = html.replace(
  /Filmcity Complex,<br>Gen. A.K. Vaidya Road, Goregaon East,<br>Mumbai – 400065, India/,
  'Filmcity Complex,<br>Gen. A.K. Vaidya Marg, Goregaon East,<br>Mumbai 400065, India'
);

fs.writeFileSync(file, html, 'utf8');
console.log('Contact info updated to exact instructions.');
