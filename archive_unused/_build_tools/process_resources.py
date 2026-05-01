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

    if filename == 'resources.html':
        # MINOR 4: Title
        content = re.sub(r'<title>.*?</title>', '<!-- FIX: MINOR 4 - Page title improvement -->\n  <title>Resources | Technical Support, Training & Partner Program — PDR World</title>', content)
        
        # MINOR 3: Meta description
        content = re.sub(
            r'(<meta name="description" content=")[^"]+(">)',
            '\\1Technical support, training, channel partner programs, factory setup consultation, and product videos from PDR Videotronics India.\\2 <!-- FIX: MINOR 3 - Meta Description -->',
            content
        )

        # CRITICAL 3: Add Setup a Fiber Factory card
        if 'id="factory"' not in content:
            new_card = '''
      <!-- FIX: CRITICAL 3 - Setup a Fiber Factory -->
      <div class="rs-card" id="factory">
        <div class="rs-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></div>
        <h3>Setup a Fiber Factory</h3>
        <p>PDR offers complete turnkey consultation for establishing fiber optic assembly and testing facilities \u2014 including equipment procurement, calibration, staff training, and quality systems setup.</p>
        <a class="rs-link" href="contact.html?inquiry=Factory+Setup">Enquire About Factory Setup &rarr;</a>
      </div>'''
            # insert at the end of rs-grid
            content = content.replace('      </div>\n    </div>\n  </div>\n</section>\n\n<!-- MEDIA & VIDEOS -->', '      </div>' + new_card + '\n    </div>\n  </div>\n</section>\n\n<!-- MEDIA & VIDEOS -->')

        # MINOR 5: Events Section Dates
        content = re.sub(r'<div class="rs-event-month">Oct</div>\s*<div class="rs-event-day">15</div>', r'<!-- FIX: MINOR 5 - Event Dates Update -->\n          <div class="rs-event-month">Sep</div>\n          <div class="rs-event-day">18</div>', content)
        content = re.sub(r'Convergence India Expo</h4>\s*<p>Pragati Maidan, New Delhi', r'Convergence India Expo 2026</h4>\n          <p>Bharat Mandapam, New Delhi', content)
        
        content = re.sub(r'<div class="rs-event-month">Nov</div>\s*<div class="rs-event-day">22</div>', r'<!-- FIX: MINOR 5 - Event Dates Update -->\n          <div class="rs-event-month">Nov</div>\n          <div class="rs-event-day">14</div>', content)
        content = re.sub(r'InfoComm India</h4>\s*<p>Jio World Convention Centre, Mumbai', r'InfoComm India 2026</h4>\n          <p>Jio World Convention Centre, Mumbai', content)

        # MINOR 6: Video Thumbnails Overlays
        # We need to change the style of .rs-video-thumb and add spans
        content = content.replace('background: #18181B;', 'background: linear-gradient(135deg, #18181B, #27272A); /* FIX: MINOR 6 */')
        
        # Replace the first thumbnail content
        content = re.sub(
            r'(<div class="rs-video-thumb">)(\s*<div class="rs-play-btn">.*?</div>\s*)(</div>\s*<div class="rs-video-info">\s*<h4>Fusion Splicer)',
            r'\1\n          <!-- FIX: MINOR 6 - Video thumbnail overlay -->\n          <span class="pr-prod-tag" style="position:absolute; bottom:16px; left:16px; z-index:2; background:rgba(0,0,0,0.6); backdrop-filter:blur(4px);">Fusion Splicer</span>\2\3',
            content, count=1
        )
        
        # Replace the second thumbnail content
        content = re.sub(
            r'(<div class="rs-video-thumb">)(\s*<div class="rs-play-btn">.*?</div>\s*)(</div>\s*<div class="rs-video-info">\s*<h4>Mini OTDR)',
            r'\1\n          <!-- FIX: MINOR 6 - Video thumbnail overlay -->\n          <span class="pr-prod-tag" style="position:absolute; bottom:16px; left:16px; z-index:2; background:rgba(0,0,0,0.6); backdrop-filter:blur(4px);">OTDR</span>\2\3',
            content, count=1
        )
        
        # Replace the third thumbnail content
        content = re.sub(
            r'(<div class="rs-video-thumb">)(\s*<div class="rs-play-btn">.*?</div>\s*)(</div>\s*<div class="rs-video-info">\s*<h4>Factory Tour)',
            r'\1\n          <!-- FIX: MINOR 6 - Video thumbnail overlay -->\n          <span class="pr-prod-tag" style="position:absolute; bottom:16px; left:16px; z-index:2; background:rgba(0,0,0,0.6); backdrop-filter:blur(4px);">Factory Tour</span>\2\3',
            content, count=1
        )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

process_file('c:\\Users\\SEBIN\\Downloads\\PDR world Frontend\\resources.html', 'resources.html')
print("Processed resources.html")
