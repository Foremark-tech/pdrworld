import re

def process_file(filepath, filename):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Header
    if not content.startswith('<!-- PDR REMEDIATION PASS'):
        content = f'<!-- PDR REMEDIATION PASS - {filename} - all audit fixes applied -->\n' + content

    # Global consistency
    if 'favicon.svg' not in content:
        content = re.sub(
            r'(<title>.*?</title>)',
            r'\1\n  <!-- FIX: MINOR 2 - Favicon links -->\n  <link rel="icon" type="image/svg+xml" href="favicon.svg">\n  <link rel="icon" type="image/png" href="favicon.png">',
            content, count=1
        )

    content = re.sub(
        r'(<a class="icon-btn" href="https://wa.me/918419916460"[^>]+title=")[^"]+(")',
        r'\1WhatsApp: +91 84199 16460 (Sales & Support)\2 <!-- FIX: MINOR 8 - WhatsApp tooltip -->',
        content
    )
    if '<!-- FIX: MINOR 8' not in content:
        content = re.sub(
            r'(<a class="icon-btn" href="https://wa.me/918419916460" target="_blank" rel="noopener" aria-label="WhatsApp")',
            r'\1 title="WhatsApp: +91 84199 16460 (Sales & Support)" <!-- FIX: MINOR 8 - WhatsApp tooltip -->',
            content
        )

    if 'Maintenance Tools' not in content.split('class="mega-grid"')[1].split('</div>')[0] if 'class="mega-grid"' in content else False:
        content = re.sub(
            r'(<a href="products.html#specialty" data-cat="specialty">.*?</a>)',
            r'\1\n            <!-- FIX: Consistency 2 - Mega Menu Maintenance Tools -->\n            <a href="products.html#tools" data-cat="tools"><strong>Maintenance Tools</strong><span>Cleavers &middot; Cleaners &middot; Splice Sleeves &middot; VFL</span></a>',
            content
        )
    if 'Maintenance Tools' not in content.split('class="submenu"')[1].split('</div>')[0] if 'class="submenu"' in content else False:
        content = re.sub(
            r'(<a href="products.html#specialty" data-cat="specialty">Specialty Products</a>)',
            r'\1\n      <!-- FIX: Consistency 2 - Mobile Menu Maintenance Tools -->\n      <a href="products.html#tools" data-cat="tools">Maintenance Tools</a>',
            content
        )

    content = re.sub(r'<a href="#">Terms of Sale</a>', r'<!-- TODO: Replace with real policy page URL before launch. --><!-- FIX: MINOR 1 - Footer Legal Links --><a href="mailto:info@pdrworld.com?subject=Legal%20—%20Terms%20of%20Sale%20Request">Terms of Sale</a>', content)
    content = re.sub(r'<a href="#">Terms of Use</a>', r'<!-- TODO: Replace with real policy page URL before launch. --><!-- FIX: MINOR 1 - Footer Legal Links --><a href="mailto:info@pdrworld.com?subject=Legal%20—%20Terms%20of%20Use%20Request">Terms of Use</a>', content)
    content = re.sub(r'<a href="#">Privacy Policy</a>', r'<!-- TODO: Replace with real policy page URL before launch. --><!-- FIX: MINOR 1 - Footer Legal Links --><a href="mailto:info@pdrworld.com?subject=Legal%20—%20Privacy%20Policy%20Request">Privacy Policy</a>', content)
    content = re.sub(r'<a href="#">Disclaimer</a>', r'<!-- TODO: Replace with real policy page URL before launch. --><!-- FIX: MINOR 1 - Footer Legal Links --><a href="mailto:info@pdrworld.com?subject=Legal%20—%20Disclaimer%20Request">Disclaimer</a>', content)
    content = re.sub(r'<a href="#">Subscriptions</a>', r'<!-- TODO: Replace with real policy page URL before launch. --><!-- FIX: MINOR 1 - Footer Legal Links --><a href="mailto:info@pdrworld.com?subject=Legal%20—%20Subscriptions%20Request">Subscriptions</a>', content)
    
    if 'Setup a Factory' not in content:
        content = re.sub(
            r'(<li><a href="resources.html#partners">Channel Partner Program</a></li>)',
            r'\1\n        <!-- FIX: MAJOR 5 - Factory Setup footer link -->\n        <li><a href="resources.html#factory">Setup a Factory</a></li>',
            content
        )
    if 'Careers at PDR' not in content:
         content = re.sub(
            r'(<li><a href="about.html#careers">Careers</a></li>)',
            r'<!-- FIX: Consistency 6 - Footer Careers Anchor -->\n        \1',
            content
        )

    if filename == 'about.html':
        # MINOR 4: Title
        content = re.sub(r'<title>.*?</title>', '<!-- FIX: MINOR 4 - Page title improvement -->\n  <title>About PDR Videotronics | ISO Certified Fiber Optic Manufacturer Since 1985</title>', content)
        
        # MINOR 3: Meta description
        content = re.sub(
            r'(<meta name="description" content=")[^"]+(">)',
            '\\1PDR Videotronics India — ISO 9001:2015 certified fiber optic manufacturer since 1985. Vertically integrated production in Mumbai supplying telecom, defence, ISPs and data centres.\\2 <!-- FIX: MINOR 3 - Meta Description -->',
            content
        )

        # MAJOR 3: 38 Years
        content = re.sub(r'<div class="ab-stat-num">38</div>\s*<div class="ab-stat-label">Years of Excellence</div>', r'<!-- FIX: MAJOR 3 - 40+ Years stats inconsistency -->\n      <div class="ab-stat-num">40+</div>\n      <div class="ab-stat-label">Years of Excellence</div>', content)

        # CRITICAL 4: Careers Section
        if 'id="careers"' not in content:
            careers_section = '''
<!-- FIX: CRITICAL 4 - Careers at PDR Section -->
<section class="section reveal" id="careers" style="border-top: 1px solid var(--line-dark);">
  <div class="container" style="text-align:center;max-width:700px;margin:0 auto">
    <h2>Careers at PDR</h2>
    <p style="font-size:16px;color:#A1A1AA;margin:16px 0 24px">PDR Videotronics is always looking for engineers, technicians, and sales professionals passionate about fiber optic technology.</p>
    <a class="btn btn-outline" href="mailto:careers@pdrworld.com">Send your CV to careers@pdrworld.com</a>
  </div>
</section>

<!-- CTA -->'''
            content = content.replace('<!-- CTA -->', careers_section)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

process_file('c:\\Users\\SEBIN\\Downloads\\PDR world Frontend\\about.html', 'about.html')
print("Processed about.html")
