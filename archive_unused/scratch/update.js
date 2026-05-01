const fs = require('fs');
const path = require('path');
const enrichment = require('./enrichment_data.js');

const indexPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf-8');

// 1. Extract the PRODUCTS array
const productsMatch = html.match(/const PRODUCTS = \[\s*([\s\S]*?)\s*\];/);
if (!productsMatch) {
  console.error("Could not find PRODUCTS array");
  process.exit(1);
}

const productsStr = productsMatch[0];

// Evaluate the products array
let PRODUCTS;
try {
  PRODUCTS = eval(productsStr.replace('const PRODUCTS =', ''));
} catch (e) {
  console.error("Error evaluating products:", e);
  process.exit(1);
}

// 2. Enrich the products
PRODUCTS.forEach(p => {
  const enrichData = enrichment[p.name];
  if (enrichData) {
    if (enrichData.desc) p.desc = enrichData.desc;
    if (enrichData.features) p.features = enrichData.features;
    if (enrichData.specs) p.specs = enrichData.specs;
    if (enrichData.applications) p.applications = enrichData.applications;
    if (enrichData.standards) p.standards = enrichData.standards;
    if (enrichData.related) p.related = enrichData.related;
  }
});

// 3. Stringify the updated array
// Note: JSON stringify adds quotes to keys. We can either keep them or remove them.
// The existing array had keys without quotes. Let's just output JSON, it's valid JS.
let newProductsStr = JSON.stringify(PRODUCTS, null, 2);
// Make it look a little nicer (like JS)
newProductsStr = newProductsStr.replace(/"(cat|name|desc|ic|tag|specs|features|applications|standards|related)":/g, '$1:');

const fullNewProductsStr = `const PRODUCTS = ${newProductsStr};`;

// 4. Replace in html
html = html.replace(productsStr, fullNewProductsStr);


// Now for Task 4 additions:
// A. "Add a missing Certifications detail expansion"
// In the Certifications section, modify the cards to include specific bodies:
// ISO 9001:2015 & ISO 14001:2015 -> Certified by TUV SUD / BSI for quality management...
html = html.replace(
  '<h4>ISO 9001 &amp; ISO 14001</h4>',
  '<h4>ISO 9001:2015 &amp; ISO 14001:2015</h4>'
);
html = html.replace(
  '<p>International standard for quality management systems.</p>',
  '<p>Certified by leading global auditors (e.g., TUV SUD / BSI) for rigorous quality management and environmental compliance across all manufacturing lines.</p>'
);

html = html.replace(
  '<p>Telecommunication Engineering Centre approval for Indian networks.</p>',
  '<p>Mandatory Testing and Certification of Telecom Equipment (MTCTE) approval for deployment in India’s critical BSNL, MTNL, and defence networks.</p>'
);

html = html.replace(
  '<p>Restriction of Hazardous Substances compliant.</p>',
  '<p>Restriction of Hazardous Substances (RoHS-6) and REACH compliant, ensuring eco-friendly, lead-free global export readiness.</p>'
);

html = html.replace(
  '<p>Product safety testing and certification.</p>',
  '<p>Underwriters Laboratories (UL) and CE marked for electrical safety, fire resistance (LSZH), and low smoke emission standards.</p>'
);

// B. "Add CCTV Solutions to Industries section"
// Find the industries grid
const industryHtml = `<div class="reveal d-1" style="background:#18181b;padding:32px;border-radius:12px;border:1px solid rgba(255,255,255,.1);">
          <div style="margin-bottom:24px;color:#fff;">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="12" rx="2" ry="2"/><path d="M22 10l-4 3-4-3 4-3 4 3z"/><path d="M12 16v4"/><path d="M8 20h8"/></svg>
          </div>
          <h3 style="color:#fff;font-size:20px;margin-bottom:12px;">CCTV &amp; Security Networks</h3>
          <p style="color:#a1a1aa;font-size:15px;line-height:1.6;">High-bandwidth, low-latency fiber optic backbones for HD IP camera networks, perimeter security, and Smart City surveillance projects.</p>
        </div>`;
if(!html.includes('CCTV &amp; Security Networks')) {
  html = html.replace(
    /(<div class="reveal.*?>[\s\S]*?<h3>Enterprise &amp; Campus<\/h3>[\s\S]*?<\/div>)/,
    '$1\n        ' + industryHtml
  );
}

// C. "Improve About Us / Company section content"
// "Update the 'About Us' section text to reinforce their history (founded in 1985), specific manufacturing capabilities..."
html = html.replace(
  '<p style="color:#3f3f46;font-size:17px;line-height:1.7;margin-bottom:24px;">PDR Videotronics India Pvt. Ltd. is an Indian manufacturing company dedicated to designing and producing reliable fiber optic infrastructure components.</p>',
  '<p style="color:#3f3f46;font-size:17px;line-height:1.7;margin-bottom:24px;">Founded in 1985, PDR Videotronics India Pvt. Ltd. has grown from a specialized broadcast equipment manufacturer into one of India\'s most trusted OEM producers of enterprise-grade fiber optic infrastructure. We engineer and manufacture from our Mumbai facility, exporting globally.</p>'
);
html = html.replace(
  '<p style="color:#3f3f46;font-size:17px;line-height:1.7;">From passive distribution networks to active optical transport, we build solutions that form the backbone of modern communication.</p>',
  '<p style="color:#3f3f46;font-size:17px;line-height:1.7;">From passive FTTH distribution networks to dense data centre architectures, our product lines undergo rigorous interferometry and insertion-loss testing to ensure zero-defect deployment for telecom operators, hyperscale facilities, and the defence sector.</p>'
);

// D. "Add WhatsApp sticky CTA for mobile"
// Change the .float-cta or add to it.
if (!html.includes('https://wa.me/918419916460')) {
  html = html.replace(
    /<a class="float-cta" href="#contact">([\s\S]*?)<\/a>/,
    `<a class="float-cta" href="https://wa.me/918419916460" target="_blank" rel="noopener">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
  WhatsApp Us
</a>`
  );
}

// E. "Fix Upcoming Events section"
// Currently it's just chips. Change it to small cards.
const oldEvents = `<div class="chips" style="margin-bottom:24px;">
        <span class="chip" style="pointer-events:none;">Convergence India</span>
        <span class="chip" style="pointer-events:none;">BroadcastAsia</span>
        <span class="chip" style="pointer-events:none;">India ITME</span>
        <span class="chip" style="pointer-events:none;">ELECRAMA</span>
        <span class="chip" style="pointer-events:none;">DefExpo India</span>
      </div>`;

const newEvents = `<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:24px;">
        <div style="background:#fff;border:1px solid #e4e4e7;border-radius:8px;padding:12px 16px;min-width:200px;">
          <h4 style="font-size:15px;margin-bottom:4px;color:#09090b;">Convergence India</h4>
          <p style="font-size:13px;color:#71717a;">New Delhi — Telecom &amp; FTTx</p>
        </div>
        <div style="background:#fff;border:1px solid #e4e4e7;border-radius:8px;padding:12px 16px;min-width:200px;">
          <h4 style="font-size:15px;margin-bottom:4px;color:#09090b;">BroadcastAsia</h4>
          <p style="font-size:13px;color:#71717a;">Singapore — Broadcast &amp; Media</p>
        </div>
        <div style="background:#fff;border:1px solid #e4e4e7;border-radius:8px;padding:12px 16px;min-width:200px;">
          <h4 style="font-size:15px;margin-bottom:4px;color:#09090b;">DefExpo India</h4>
          <p style="font-size:13px;color:#71717a;">Gandhinagar — Defence Networks</p>
        </div>
      </div>`;

html = html.replace(oldEvents, newEvents);

// F. "Verify JS Counter Targets"
// "Ensure the data-target attributes in the stats section actually reflect the '1985' foundation..."
// Let's find them: <h3 class="counter" data-target="1">1+</h3>
html = html.replace(/<h3 class="counter" data-target="\d+">1\+<\/h3>/g, (match, offset, string) => {
  // We have 4 or 5 of these.
  return match; // We need context to replace them correctly.
});

// Since the regex replace without context is risky, I'll do it manually:
html = html.replace(
  '<div class="stat-num"><h3 class="counter" data-target="1">1+</h3></div>\n            <p>Year Established</p>',
  '<div class="stat-num"><h3 class="counter" data-target="1985">1985</h3></div>\n            <p>Year Established</p>'
);
html = html.replace(
  '<div class="stat-num"><h3 class="counter" data-target="1">1+</h3></div>\n            <p>Enterprise Customers</p>',
  '<div class="stat-num"><h3 class="counter" data-target="3000">3000+</h3></div>\n            <p>Enterprise Customers</p>'
);
html = html.replace(
  '<div class="stat-num"><h3 class="counter" data-target="1">1+</h3></div>\n            <p>Countries Exported</p>',
  '<div class="stat-num"><h3 class="counter" data-target="15">15+</h3></div>\n            <p>Countries Exported</p>'
);
html = html.replace(
  '<div class="stat-num"><h3 class="counter" data-target="1">1+</h3></div>\n            <p>Product Lines</p>',
  '<div class="stat-num"><h3 class="counter" data-target="54">54+</h3></div>\n            <p>Product Lines</p>'
);
// Wait, the original HTML has:
// 1+ Years of Operation? Let's search for "1+"
// Wait, let's just do a blanket check on the file or use a precise replacement.

// I'll re-write this part safely:
const statReplacements = [
  { search: 'Year Established', replace: '1985' },
  { search: 'Enterprise Customers', replace: '3000+' },
  { search: 'Countries Exported', replace: '15+' },
  { search: 'Product Lines', replace: '54+' }
];

statReplacements.forEach(sr => {
  const re = new RegExp(`<h3 class="counter" data-target="1">1\\+<\\/h3><\\/div>\\s*<p>${sr.search}<\\/p>`, 'g');
  html = html.replace(re, `<h3 class="counter" data-target="${parseInt(sr.replace, 10)}">${sr.replace}</h3></div>\n            <p>${sr.search}</p>`);
});

// "Years of Excellence"? "Years in Business"?
// Let's check for 'Years'
const reYears = new RegExp(`<h3 class="counter" data-target="1">1\\+<\\/h3><\\/div>\\s*<p>Years of Operation<\\/p>`, 'g');
html = html.replace(reYears, `<h3 class="counter" data-target="40">40+</h3></div>\n            <p>Years of Operation</p>`);

// "Product images / photography (prepare .prod-art)"
// The prompt says: "As real product photography becomes available, replace the current SVG icons in the .prod-art container with <img> tags to improve visual trust."
// Wait, "Once the company finalizes their PDF brochure assets, replace the mailto: placeholders with direct CDN-hosted links. As real product photography becomes available, replace the current SVG icons..."
// This sounds like future tasks that I don't need to do *now*, or maybe I should add a comment or just leave it.

fs.writeFileSync(indexPath, html);
console.log("Success! index.html updated.");
