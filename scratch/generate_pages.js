const fs = require('fs');

const productData = require('./productData.js');
const productsStyles = fs.readFileSync('scratch/products_styles.css', 'utf-8');
const productsHtml = fs.readFileSync('products.html', 'utf-8');

const headerEndIndex = productsHtml.indexOf('<main');
const headerTemplate = productsHtml.substring(0, headerEndIndex) + '<main>';

const footerStartIndex = productsHtml.indexOf('<footer');
const footerTemplate = '</main>\n\n' + productsHtml.substring(footerStartIndex);

// Extract SVGs from products.html
const svgMap = {};
for (const slug in productData) {
    const regex = new RegExp(`data-product="${slug}"[\\s\\S]*?(<svg[\\s\\S]*?</svg>)`);
    const match = productsHtml.match(regex);
    if (match) {
        svgMap[slug] = match[1].replace(/stroke="#fff"/g, 'stroke="currentColor"');
    }
}

// Generate pages
const slugs = Object.keys(productData);

for (const slug in productData) {
    const p = productData[slug];
    let icon = p.icon || svgMap[slug] || '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>';
    
    // Resize SVG for Hero
    const heroIcon = icon.replace(/width="[0-9]+"/, 'width="120"').replace(/height="[0-9]+"/, 'height="120"');

    const desc = p.desc || (p.feats && p.feats.length > 0 ? p.feats[0] : 'High-performance fiber optic solution engineered for enterprise and industrial networks.');

    let specsHtml = '';
    if (p.specs) {
        specsHtml = '<table style="width: 100%; border-collapse: collapse; text-align: left;"><tbody>';
        let i = 0;
        for (const [key, val] of Object.entries(p.specs)) {
            const bg = i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent';
            specsHtml += `<tr style="background: ${bg}; border-bottom: 1px solid rgba(255,255,255,0.1);">
                <th style="padding: 16px; color: #A1A1AA; font-weight: 500; width: 40%; text-align: left;">${key}</th>
                <td style="padding: 16px; color: #E4E4E7;">${val}</td>
            </tr>`;
            i++;
        }
        specsHtml += '</tbody></table>';
    } else {
        specsHtml = '<div style="padding: 16px; color: #A1A1AA;">Specifications pending verification.</div>';
    }

    const featsHtml = p.feats ? p.feats.map(f => `<li style="display: flex; gap: 12px; margin-bottom: 16px; color: #E4E4E7;"><svg style="flex-shrink:0; color:#E11D48; margin-top: 2px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${f}</span></li>`).join('') : '';
    const appsHtml = p.apps ? p.apps.map(a => `<li style="display: flex; gap: 12px; margin-bottom: 16px; color: #A1A1AA;"><svg style="flex-shrink:0; color: #52525B; margin-top: 2px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 12 12 8 12"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg> <span>${a}</span></li>`).join('') : '';

    // Related Products Logic
    const relatedProducts = slugs
        .filter(s => s !== slug && productData[s].cat === p.cat)
        .slice(0, 3)
        .map(s => {
            const rp = productData[s];
            const rIcon = (svgMap[s] || '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>').replace(/width="[0-9]+"/, 'width="32"').replace(/height="[0-9]+"/, 'height="32"');
            return `
            <a href="${s}.html" style="background: #18181B; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px; text-decoration: none; display: block; transition: all 0.3s ease;">
              <div style="color: #E11D48; margin-bottom: 16px;">${rIcon}</div>
              <h4 style="color: #fff; margin-bottom: 8px;">${rp.name}</h4>
              <p style="color: #A1A1AA; font-size: 13px;">View Details &rarr;</p>
            </a>
            `;
        }).join('');

    let head = headerTemplate
        .replace(/<title>.*?<\/title>/, `<title>${p.name} | PDR World</title>`)
        .replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${desc}">`)
        .replace(/<link rel="canonical" href=".*?">/, `<link rel="canonical" href="https://pdrworld.com/${slug}.html">`)
        .replace('</head>', `
<style>
  ${productsStyles}
  body { background: #09090B !important; color: #fff !important; }
  .section { background: #09090B !important; color: #fff !important; }
  .sec-muted { background: #18181B !important; }
  .breadcrumb a { color: #A1A1AA !important; text-decoration: none; transition: color 0.2s; }
  .breadcrumb a:hover { color: #E11D48 !important; }
  .float-cta{display:none;position:fixed;bottom:16px;left:16px;right:16px;z-index:998;border-radius:99px;background:#E11D48;color:#fff;padding:14px 24px;box-shadow:0 16px 40px -8px rgba(225,29,72,.55);font-family:'Manrope',sans-serif;font-weight:700;font-size:15px;align-items:center;justify-content:center;gap:8px;text-decoration:none}
  @media (max-width: 768px) {
    .float-cta{display:inline-flex}
    body{padding-bottom:96px}
  }
</style>
</head>`);

    const pageContent = `
<a class="float-cta" href="contact.html?inquiry=Quote+for+${slug}">Get Product Quote &rarr;</a>

<section class="section" style="padding-top: 160px; padding-bottom: 80px; background: #09090B !important;">
  <div class="container">
    <div class="breadcrumb" style="margin-bottom: 48px; font-size: 14px; color: #71717A; display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
      <a href="index.html">Home</a> 
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      <a href="products.html">Products</a> 
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      <span>${p.cat}</span> 
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      <span style="color: #E11D48; font-weight: 600;">${p.name}</span>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 80px; align-items: center;">
      <div style="background: #18181B; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; aspect-ratio: 1; display: flex; justify-content: center; align-items: center; color: #E11D48;">
        ${heroIcon}
      </div>

      <div>
        <h1 style="font-size: clamp(32px, 5vw, 48px); line-height: 1.1; margin-bottom: 24px; letter-spacing: -1px; color: #fff; font-family: 'Manrope', sans-serif;">${p.name}</h1>
        <p style="color: #A1A1AA; font-size: 20px; line-height: 1.6; margin-bottom: 40px;">
          ${desc}
        </p>

        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <a href="contact.html?inquiry=Quote+for+${slug}" class="btn btn-primary" style="padding: 16px 32px; font-size: 16px;">Request Quote</a>
          <a href="#" class="btn btn-ghost" style="padding: 16px 32px; font-size: 16px; display: flex; align-items: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            Datasheet (PDF)
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section sec-muted" style="padding-top: 80px; padding-bottom: 120px; background: #18181B !important;">
  <div class="container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 80px;">
    <div>
      <h3 style="margin-bottom: 32px; font-size: 28px; font-family: 'Manrope', sans-serif; color: #fff;">Key Features</h3>
      <ul style="list-style: none; padding: 0; margin-bottom: 56px; font-size: 16px;">
        ${featsHtml}
      </ul>

      <h3 style="margin-bottom: 32px; font-size: 28px; font-family: 'Manrope', sans-serif; color: #fff;">Applications</h3>
      <ul style="list-style: none; padding: 0; font-size: 16px;">
        ${appsHtml}
      </ul>
    </div>

    <div>
      <h3 style="margin-bottom: 32px; font-size: 28px; font-family: 'Manrope', sans-serif; color: #fff;">Technical Specifications</h3>
      <div style="background: #09090B; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; overflow: hidden; font-size: 15px;">
        ${specsHtml}
      </div>
    </div>
  </div>
</section>

<section class="section" style="padding-top: 80px; padding-bottom: 120px; border-top: 1px solid rgba(255,255,255,0.1); background: #09090B !important;">
  <div class="container">
    <h3 style="margin-bottom: 48px; text-align: center; font-family: 'Manrope', sans-serif; color: #fff;">Related Products from ${p.cat}</h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px;">
      ${relatedProducts}
    </div>
    <div style="text-align: center; margin-top: 64px;">
      <a href="products.html" class="btn btn-ghost">View Full Catalogue &rarr;</a>
    </div>
  </div>
</section>
    `;

    fs.writeFileSync(`${slug}.html`, head + pageContent + footerTemplate);
}
console.log('Successfully generated updated product pages with forced dark theme.');
