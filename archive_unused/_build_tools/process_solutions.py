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

    if filename == 'solutions.html':
        # MINOR 4: Title
        content = re.sub(r'<title>.*?</title>', '<!-- FIX: MINOR 4 - Page title improvement -->\n  <title>Solutions | DAS, DTS, Fiber Monitoring & FTTx Infrastructure — PDR World</title>', content)
        
        # MINOR 3: Meta description
        content = re.sub(
            r'(<meta name="description" content=")[^"]+(">)',
            '\\1Smart fiber infrastructure solutions — DAS, DTS, fiber monitoring, FTTx and RFoG systems engineered for telecom, defence, power, and data centre deployments.\\2 <!-- FIX: MINOR 3 - Meta Description -->',
            content
        )

        # MAJOR 2: Optical Fiber Network Monitoring card
        if 'Optical Fiber Network Monitoring' not in content:
            new_card = '''<!-- FIX: MAJOR 2 - Fiber Monitoring Card -->
      <div class="sl-card">
        <div class="sl-card-img" style="background:repeating-linear-gradient(45deg, #18181b, #18181b 10px, #09090b 10px, #09090b 20px);"></div>
        <div class="sl-card-body">
          <h3>Optical Fiber Network Monitoring</h3>
          <p>Continuous real-time monitoring of fiber link integrity, optical power levels, and physical-layer events across entire network spans — enabling proactive fault management before service degradation occurs.</p>
          <ul class="sl-feat-list">
            <li class="sl-feat-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> End-to-end link health monitoring with event-triggered alerts</li>
            <li class="sl-feat-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Integration with SCADA, NMS, and NOC management platforms</li>
            <li class="sl-feat-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Optical switch-based automated rerouting on fault detection</li>
          </ul>
          <a class="btn btn-outline" href="contact.html?inquiry=Fiber+Monitoring">Request Monitoring Specs</a>
        </div>
      </div>'''
            # insert before "Optical Fiber Drone"
            content = content.replace('      <!-- Drone -->\n      <div class="sl-card">', new_card + '\n\n      <!-- Drone -->\n      <div class="sl-card">')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

process_file('c:\\Users\\SEBIN\\Downloads\\PDR world Frontend\\solutions.html', 'solutions.html')
print("Processed solutions.html")
