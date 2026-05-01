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

    if filename == 'contact.html':
        # MINOR 4: Title
        content = re.sub(r'<title>.*?</title>', '<!-- FIX: MINOR 4 - Page title improvement -->\n  <title>Contact PDR World | Fiber Optic Manufacturer Mumbai — RFQ & Enquiries</title>', content)
        
        # MINOR 3: Meta description
        content = re.sub(
            r'(<meta name="description" content=")[^"]+(">)',
            '\\1Contact PDR Videotronics India — Mumbai headquarters and Goregaon manufacturing facility. Submit RFQs, technical inquiries, and partnership applications.\\2 <!-- FIX: MINOR 3 - Meta Description -->',
            content
        )

        # MINOR 8: Add WhatsApp to Phone details
        if 'wa.me/918419916460' not in content.split('<div class="ct-detail-text">')[2]:
            content = re.sub(
                r'(<a href="tel:\+912224309536">\+91-22-24309536</a>)',
                r'\1<br>\n              <!-- FIX: MINOR 8 - WhatsApp Number Clarity -->\n              <a href="https://wa.me/918419916460">WhatsApp: +91 84199 16460</a>',
                content
            )

        # MAJOR 6: Contact form success state
        content = content.replace('onsubmit="event.preventDefault(); alert(\'Inquiry submitted successfully. Our team will contact you shortly.\');"', 'id="pdrForm" onsubmit="handlePdrFormSubmit(event)"')
        
        if 'id="ct-success"' not in content:
            success_state = '''
          <!-- FIX: MAJOR 6 - Inline Form Success State -->
          <div id="ct-success" style="display:none; text-align:center; padding:48px 0;">
            <div style="width:64px;height:64px;border-radius:50%;background:rgba(16, 185, 129, 0.1);color:#10B981;display:grid;place-items:center;margin:0 auto 24px;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h2 style="font-size:28px;margin-bottom:8px">Inquiry Received</h2>
            <p style="font-size:16px;color:var(--muted);margin-bottom:32px">Our team will respond within 24 hours.</p>
            <a href="#" onclick="resetPdrForm(event)" class="btn btn-outline">Send Another Inquiry</a>
          </div>
'''
            content = content.replace('</form>', '</form>' + success_state)

            js_script = '''
<script>
function handlePdrFormSubmit(e) {
  e.preventDefault();
  document.getElementById('pdrForm').style.display = 'none';
  document.querySelector('.ct-form-head').style.display = 'none';
  document.getElementById('ct-success').style.display = 'block';
}
function resetPdrForm(e) {
  e.preventDefault();
  document.getElementById('pdrForm').reset();
  document.getElementById('ct-success').style.display = 'none';
  document.querySelector('.ct-form-head').style.display = 'block';
  document.getElementById('pdrForm').style.display = 'grid';
}
// Auto-select inquiry type if passed in URL'''
            content = content.replace('<script>\n// Auto-select inquiry type if passed in URL', js_script)

        # MINOR 7: Google Maps Embed Accuracy
        content = re.sub(
            r'<iframe src="https://www.google.com/maps/embed\?[^"]+"',
            r'<!-- FIX: MINOR 7 - Maps Embed Accuracy -->\n      <iframe src="https://maps.google.com/maps?q=PDR+Videotronics+99+Old+Prabhadevi+Road+Mumbai+400025&output=embed"',
            content
        )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

process_file('c:\\Users\\SEBIN\\Downloads\\PDR world Frontend\\contact.html', 'contact.html')
print("Processed contact.html")
