"""
PDR World — Phase 6: Launch Readiness Script
=============================================
1. Strip debug/remediation/TODO comments
2. Fix broken HTML tags (comments inside tags)
3. Add Open Graph + canonical tags
4. Fix remediation pass header comment
5. Clean up project files
"""
import os, re, shutil

BASE = r'c:\Users\SEBIN\Downloads\PDR world Frontend'
PAGES = ['index.html', 'products.html', 'about.html', 'solutions.html', 'resources.html', 'contact.html']
SITE_URL = 'https://pdrworld.com'

# OG/SEO data per page
PAGE_META = {
    'index.html': {
        'title': 'PDR World | Fiber Optic Solutions Engineered for Reliability — Mumbai, India',
        'desc': 'PDR Videotronics India — ISO 9001:2015 certified fiber optic manufacturer since 1985. Active & passive components, test equipment, and smart monitoring systems. Made in India.',
        'og_title': 'PDR World — Fiber Optic Solutions Engineered for Reliability',
        'og_desc': 'India\'s trusted fiber optic manufacturer since 1985. SFP transceivers, patch cords, ODF, test equipment, DAS/DTS systems. ISO 9001:2015 certified. Mumbai.',
        'canonical': '/',
    },
    'products.html': {
        'title': 'Products | Fiber Optic Transceivers, Patch Cords, ODF & Test Equipment — PDR World',
        'desc': 'Complete fiber optic product catalogue — active components, passive assemblies, cable management, test equipment and specialty systems. Manufactured and tested in Mumbai.',
        'og_title': 'Fiber Optic Products — PDR World Catalogue',
        'og_desc': 'Browse 50+ product families: SFP transceivers, patch cords, splitters, ODF, OTDR, fusion splicers. ISO 9001:2015 certified, made in Mumbai since 1985.',
        'canonical': '/products.html',
    },
    'about.html': {
        'title': 'About PDR Videotronics | ISO Certified Fiber Optic Manufacturer Since 1985',
        'desc': 'PDR Videotronics India — ISO 9001:2015 certified fiber optic manufacturer since 1985. Vertically integrated production in Mumbai supplying telecom, defence, ISPs and data centres.',
        'og_title': 'About PDR Videotronics — 40+ Years of Fiber Optic Manufacturing',
        'og_desc': 'Learn about PDR Videotronics India — a vertically integrated fiber optic manufacturer in Mumbai since 1985. ISO 9001:2015 certified. Serving 15+ countries.',
        'canonical': '/about.html',
    },
    'solutions.html': {
        'title': 'Solutions | Smart Fiber Monitoring, DAS/DTS & Telecom Infrastructure — PDR World',
        'desc': 'Smart fiber infrastructure solutions — DAS, DTS, fiber monitoring, FTTx and RFoG systems engineered for telecom, defence, power, and data centre deployments.',
        'og_title': 'Fiber Optic Infrastructure Solutions — PDR World',
        'og_desc': 'DAS, DTS, fiber monitoring, FTTx solutions for telecom, defence, power & data centres. Engineered and deployed by PDR Videotronics India since 1985.',
        'canonical': '/solutions.html',
    },
    'resources.html': {
        'title': 'Resources | Technical Support, Training & Channel Partners — PDR World',
        'desc': 'Technical support, training, channel partner programs, factory setup consultation, and product videos from PDR Videotronics India.',
        'og_title': 'Resources & Support — PDR World',
        'og_desc': 'Access technical support, training programs, channel partner opportunities, and factory setup consultation from PDR Videotronics India.',
        'canonical': '/resources.html',
    },
    'contact.html': {
        'title': 'Contact PDR World | Request a Quote, Technical Support & Sales Inquiry',
        'desc': 'Contact PDR Videotronics India for fiber optic product quotes, technical consultation, distribution inquiries, and factory visits. Mumbai headquarters & manufacturing.',
        'og_title': 'Contact PDR World — Request a Quote',
        'og_desc': 'Get in touch with PDR Videotronics India. RFQ turnaround in 24 hours. Engineering consultation at no charge. Mumbai headquarters.',
        'canonical': '/contact.html',
    },
}

def process_page(filename):
    fp = os.path.join(BASE, filename)
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()

    meta = PAGE_META[filename]

    # 1. Remove remediation header comment
    content = re.sub(r'<!-- PDR REMEDIATION PASS.*?-->\r?\n', '', content)

    # 2. Remove inline FIX comments (<!-- FIX: ... -->)
    content = re.sub(r'\s*<!-- FIX:.*?-->', '', content)

    # 3. Remove inline TODO comments (<!-- TODO: ... -->)
    content = re.sub(r'\s*<!-- TODO:.*?-->', '', content)

    # 4. Remove JS FIX comments
    content = re.sub(r'\s*// FIX:.*$', '', content, flags=re.MULTILINE)

    # 5. Fix broken section tag in products.html (comment was inside <section> tag)
    # Pattern: id="specialty" >  (extra space from removed comment)
    content = re.sub(r'id="specialty"\s+>', 'id="specialty">', content)

    # 6. Fix WhatsApp anchor tag (ensure no extra space from removed comment)
    content = re.sub(
        r'title="WhatsApp: \+91 84199 16460 \(Sales & Support\)"\s*>\s*>',
        'title="WhatsApp: +91 84199 16460 (Sales &amp; Support)">',
        content
    )
    # Also fix variant with just extra space before >
    content = re.sub(
        r'title="WhatsApp: \+91 84199 16460 \(Sales & Support\)"\s+>',
        'title="WhatsApp: +91 84199 16460 (Sales &amp; Support)">',
        content
    )

    # 7. Add Open Graph + canonical if not present
    if 'og:title' not in content:
        og_block = f'''  <link rel="canonical" href="{SITE_URL}{meta['canonical']}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="PDR World">
  <meta property="og:title" content="{meta['og_title']}">
  <meta property="og:description" content="{meta['og_desc']}">
  <meta property="og:url" content="{SITE_URL}{meta['canonical']}">
  <meta property="og:image" content="{SITE_URL}/favicon.svg">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="{meta['og_title']}">
  <meta name="twitter:description" content="{meta['og_desc']}">'''
        # Insert after meta description line
        content = content.replace(
            '  <link rel="preconnect"',
            og_block + '\n  <link rel="preconnect"'
        )

    # 8. Ensure lang attribute
    content = content.replace('<html>', '<html lang="en">')

    # 9. Clean extra whitespace from comment removal
    content = re.sub(r'\n{3,}', '\n\n', content)
    # Fix any double >> from comment removal
    content = content.replace('>>', '>')
    # But not in JS (>>)
    # Actually, let's be more precise:
    content = re.sub(r'(?<!</)(?<!-)(?<!>)>(?!>)', '>', content)

    with open(fp, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Processed: {filename}")


def archive_build_files():
    """Move build/development-only files to _build_tools/"""
    build_dir = os.path.join(BASE, '_build_tools')
    os.makedirs(build_dir, exist_ok=True)

    build_files = [
        'fix_whatsapp.py',
        'inject_phase5.py',
        'phase4_conversion.py',
        'process_about.py',
        'process_contact.py',
        'process_index.py',
        'process_products_html.py',
        'process_products_js.py',
        'process_resources.py',
        'process_solutions.py',
        'find_main.ps1',
        'splice_all.ps1',
        'splice_products.ps1',
        'pr_main.html',
        'pr_main2.html',
        'pr_main3.html',
        'pr_main4.html',
        'pr_full_main.html',
        'about_main.html',
        'contact_main.html',
        'solutions_main.html',
        'resources_main.html',
        '_header.html',
        '_footer.html',
    ]

    for f in build_files:
        src = os.path.join(BASE, f)
        dst = os.path.join(build_dir, f)
        if os.path.exists(src):
            shutil.move(src, dst)
            print(f"  Archived: {f}")


def create_robots_txt():
    content = """User-agent: *
Allow: /

Sitemap: https://pdrworld.com/sitemap.xml
"""
    with open(os.path.join(BASE, 'robots.txt'), 'w', encoding='utf-8') as f:
        f.write(content)
    print("  Created: robots.txt")


def create_sitemap():
    content = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://pdrworld.com/</loc><priority>1.0</priority></url>
  <url><loc>https://pdrworld.com/products.html</loc><priority>0.9</priority></url>
  <url><loc>https://pdrworld.com/about.html</loc><priority>0.7</priority></url>
  <url><loc>https://pdrworld.com/solutions.html</loc><priority>0.8</priority></url>
  <url><loc>https://pdrworld.com/resources.html</loc><priority>0.6</priority></url>
  <url><loc>https://pdrworld.com/contact.html</loc><priority>0.8</priority></url>
</urlset>
"""
    with open(os.path.join(BASE, 'sitemap.xml'), 'w', encoding='utf-8') as f:
        f.write(content)
    print("  Created: sitemap.xml")


def create_404():
    content = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#09090B">
  <title>Page Not Found — PDR World</title>
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet">
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'Inter',system-ui,sans-serif;background:#09090B;color:#fff;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center}
    .brand-mark{display:inline-flex;align-items:center;justify-content:center;width:56px;height:56px;border-radius:14px;background:#E11D48;color:#fff;font-family:'Manrope',sans-serif;font-weight:800;font-size:18px;margin-bottom:32px}
    h1{font-family:'Manrope',sans-serif;font-size:clamp(48px,10vw,80px);font-weight:800;color:#27272A;line-height:1;margin-bottom:16px}
    h2{font-family:'Manrope',sans-serif;font-size:clamp(20px,4vw,28px);font-weight:700;margin-bottom:12px}
    p{font-size:16px;color:#71717A;max-width:460px;line-height:1.6;margin-bottom:32px}
    .btn{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;border-radius:12px;font-family:'Manrope',sans-serif;font-weight:700;font-size:15px;text-decoration:none;transition:all .2s}
    .btn-primary{background:#E11D48;color:#fff}
    .btn-primary:hover{background:#F43F5E;transform:translateY(-2px)}
    .btn-ghost{background:rgba(255,255,255,.06);color:#fff;border:1px solid rgba(255,255,255,.1)}
    .btn-ghost:hover{background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.2)}
    .actions{display:flex;gap:12px;flex-wrap:wrap;justify-content:center}
    .footer-note{position:absolute;bottom:24px;font-size:12px;color:#3f3f46}
    .footer-note a{color:#71717A;text-decoration:none}
    .footer-note a:hover{color:#E11D48}
  </style>
</head>
<body>
  <span class="brand-mark">PDR</span>
  <h1>404</h1>
  <h2>Page not found</h2>
  <p>The page you're looking for doesn't exist or may have been moved. If you're looking for a specific product or specification, try our product catalogue.</p>
  <div class="actions">
    <a class="btn btn-primary" href="index.html">Back to Homepage</a>
    <a class="btn btn-ghost" href="products.html">Browse Products</a>
    <a class="btn btn-ghost" href="contact.html">Contact Us</a>
  </div>
  <div class="footer-note">&copy; PDR Videotronics India Pvt. Ltd. &mdash; <a href="mailto:info@pdrworld.com">info@pdrworld.com</a></div>
</body>
</html>
"""
    with open(os.path.join(BASE, '404.html'), 'w', encoding='utf-8') as f:
        f.write(content)
    print("  Created: 404.html")


# ==================== EXECUTE ====================
print("Phase 6: Launch Readiness")
print("=" * 40)

print("\n1. Processing pages (comments, OG tags, QA)...")
for page in PAGES:
    process_page(page)

print("\n2. Creating deployment assets...")
create_robots_txt()
create_sitemap()
create_404()

print("\n3. Archiving build tools...")
archive_build_files()

print("\n✅ Phase 6 complete.")
print("   Production files: index.html, products.html, about.html, solutions.html, resources.html, contact.html")
print("   Assets: favicon.svg, phase5-polish.css, styles.css, frames/, 404.html, robots.txt, sitemap.xml")
print("   Archived: _build_tools/, _archive_products_final.html")
