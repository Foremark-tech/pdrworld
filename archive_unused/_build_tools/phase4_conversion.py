import os, re, glob

def apply_phase4(filepath, filename):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # =============================================
    # GLOBAL: Improve floating mobile CTA (all pages)
    # =============================================
    # Make mobile float CTA smarter per page
    if filename == 'products.html':
        content = content.replace(
            '<a class="float-cta" href="contact.html">Get a Quote &rarr;</a>',
            '<a class="float-cta" href="contact.html?inquiry=Product+Quote">Get Product Quote &rarr;</a>'
        )
    elif filename == 'solutions.html':
        content = content.replace(
            '<a class="float-cta" href="contact.html">Get a Quote &rarr;</a>',
            '<a class="float-cta" href="contact.html?inquiry=Solution+Consultation">Request Consultation &rarr;</a>'
        )
    elif filename == 'resources.html':
        content = content.replace(
            '<a class="float-cta" href="contact.html">Get a Quote &rarr;</a>',
            '<a class="float-cta" href="contact.html?inquiry=Partnership">Become a Partner &rarr;</a>'
        )
    elif filename == 'contact.html':
        # Hide float CTA on contact page (user is already here)
        content = content.replace(
            '<a class="float-cta" href="contact.html">Get a Quote &rarr;</a>',
            '<a class="float-cta" href="https://wa.me/918419916460" target="_blank" rel="noopener"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right:6px"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.5-4.1-3.5-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.5.7.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.2-.2-.5-.3zM12 0a12 12 0 0 0-10.4 18l-1.6 6 6.1-1.6A12 12 0 1 0 12 0zm0 22a10 10 0 0 1-5.4-1.6l-.4-.2-3.7 1 1-3.6-.2-.4A10 10 0 1 1 12 22z"/></svg> WhatsApp Sales &rarr;</a>'
        )

    # =============================================
    # GLOBAL: Add footer quick-action row before legal
    # =============================================
    if 'footer-quick-actions' not in content:
        footer_actions = '''
    <!-- PHASE 4: Footer Quick Actions -->
    <div class="footer-quick-actions" style="display:flex;gap:12px;flex-wrap:wrap;margin-top:24px;padding-top:24px;border-top:1px solid rgba(255,255,255,.06)">
      <a href="contact.html" style="display:inline-flex;align-items:center;gap:8px;background:var(--accent);color:#fff;padding:10px 20px;border-radius:99px;font-size:13px;font-weight:700;text-decoration:none;transition:all .2s;font-family:'Manrope',sans-serif">Submit RFQ &rarr;</a>
      <a href="https://wa.me/918419916460" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.06);color:#fff;padding:10px 20px;border-radius:99px;font-size:13px;font-weight:600;text-decoration:none;border:1px solid rgba(255,255,255,.1);transition:all .2s;font-family:'Manrope',sans-serif"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.5-4.1-3.5-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.5.7.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.2-.2-.5-.3zM12 0a12 12 0 0 0-10.4 18l-1.6 6 6.1-1.6A12 12 0 1 0 12 0zm0 22a10 10 0 0 1-5.4-1.6l-.4-.2-3.7 1 1-3.6-.2-.4A10 10 0 1 1 12 22z"/></svg> WhatsApp</a>
      <a href="mailto:sales@pdrworld.com" style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.06);color:#fff;padding:10px 20px;border-radius:99px;font-size:13px;font-weight:600;text-decoration:none;border:1px solid rgba(255,255,255,.1);transition:all .2s;font-family:'Manrope',sans-serif"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> sales@pdrworld.com</a>
    </div>
'''
        content = content.replace('</div>\n\n    <div class="footer-brand">', footer_actions + '    </div>\n\n    <div class="footer-brand">')
        # fallback: inject before footer-bottom
        if 'footer-quick-actions' not in content:
            content = content.replace('<div class="container footer-bottom">', footer_actions + '\n  <div class="container footer-bottom">')

    # =============================================
    # PAGE-SPECIFIC FIXES
    # =============================================

    if filename == 'products.html':
        # --- Drawer: improve CTA area with WhatsApp, trust line, dynamic datasheet ---
        old_drawer_cta = '''  <div class="pr-drawer-cta">
    <a class="btn btn-primary" id="drawInquire" href="contact.html" style="flex:1;text-align:center;justify-content:center">Inquire Now</a>
    <a class="btn btn-ghost" id="drawData" href="#" style="flex:1;text-align:center;justify-content:center">Download Datasheet</a>
  </div>'''
        new_drawer_cta = '''  <div class="pr-drawer-cta" style="flex-direction:column;gap:12px">
    <div style="display:flex;gap:8px">
      <a class="btn btn-primary" id="drawInquire" href="contact.html" style="flex:1;text-align:center;justify-content:center">Request Quote</a>
      <a class="btn btn-ghost" id="drawData" href="#" style="flex:1;text-align:center;justify-content:center">Request Datasheet</a>
    </div>
    <div style="display:flex;gap:8px">
      <a class="btn btn-ghost" id="drawWhatsApp" href="https://wa.me/918419916460" target="_blank" rel="noopener" style="flex:1;text-align:center;justify-content:center;font-size:12px"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="margin-right:6px"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.5-4.1-3.5-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.5.7.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.2-.2-.5-.3zM12 0a12 12 0 0 0-10.4 18l-1.6 6 6.1-1.6A12 12 0 1 0 12 0zm0 22a10 10 0 0 1-5.4-1.6l-.4-.2-3.7 1 1-3.6-.2-.4A10 10 0 1 1 12 22z"/></svg>WhatsApp Sales</a>
      <a class="btn btn-ghost" id="drawEngineer" href="contact.html?inquiry=Technical+Support" style="flex:1;text-align:center;justify-content:center;font-size:12px"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:6px"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>Talk to Engineer</a>
    </div>
    <div style="display:flex;align-items:center;gap:8px;font-size:11px;color:#71717A;justify-content:center;padding-top:4px">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      RFQ response within 24 hours &middot; ISO 9001:2015 certified
    </div>
  </div>'''
        content = content.replace(old_drawer_cta, new_drawer_cta)

        # --- Drawer JS: add WhatsApp prefill and datasheet mailto ---
        old_drawer_js = "  // Contact Link\n  document.getElementById('drawInquire').href = `contact.html?product=${encodeURIComponent(d.name)}`;"
        new_drawer_js = """  // Contact Link with prefilled context
  document.getElementById('drawInquire').href = `contact.html?product=${encodeURIComponent(d.name)}&inquiry=${encodeURIComponent(d.cat)}`;
  
  // Datasheet request via mailto
  document.getElementById('drawData').href = `mailto:info@pdrworld.com?subject=Datasheet Request — ${encodeURIComponent(d.name)}&body=Please send the datasheet and specifications for: ${encodeURIComponent(d.name)} (${encodeURIComponent(d.cat)})%0A%0ACompany:%0AContact Name:%0APhone:`;
  
  // WhatsApp prefill with product context
  document.getElementById('drawWhatsApp').href = `https://wa.me/918419916460?text=Hi PDR Sales, I am interested in: ${encodeURIComponent(d.name)} (${encodeURIComponent(d.cat)}). Please share specifications and pricing.`;
  
  // Engineer link with product context
  document.getElementById('drawEngineer').href = `contact.html?product=${encodeURIComponent(d.name)}&inquiry=Technical+Support`;"""
        content = content.replace(old_drawer_js, new_drawer_js)

        # --- Products CTA Band: strengthen with trust and multiple paths ---
        old_cta_band = '''<section class="section">
  <div class="container">
    <div style="text-align:center;max-width:700px;margin:0 auto">
      <div class="eyebrow" style="justify-content:center">Need a Custom Configuration?</div>
      <h2>We manufacture to spec.</h2>
      <p style="font-size:18px;color:var(--muted);margin-top:16px;margin-bottom:36px">Non-standard lengths, connector types, armour configurations, and private-label assemblies &mdash; quoted within 24 hours.</p>
      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
        <a class="btn btn-primary" href="contact.html">Submit Your RFQ</a>
        <a class="btn btn-outline" href="contact.html">Talk to an Engineer</a>
      </div>
    </div>
  </div>
</section>'''
        new_cta_band = '''<section class="section">
  <div class="container">
    <div style="text-align:center;max-width:760px;margin:0 auto">
      <div class="eyebrow" style="justify-content:center">Need a Custom Configuration?</div>
      <h2>We manufacture to spec.</h2>
      <p style="font-size:18px;color:var(--muted);margin-top:16px;margin-bottom:36px">Non-standard lengths, connector types, armour configurations, and private-label assemblies &mdash; quoted within 24 hours.</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <a class="btn btn-primary" href="contact.html?inquiry=Custom+Manufacturing">Submit Your RFQ &rarr;</a>
        <a class="btn btn-outline" href="contact.html?inquiry=Technical+Support">Talk to an Engineer</a>
        <a class="btn btn-outline" href="https://wa.me/918419916460?text=Hi, I need a custom fiber optic product quote." target="_blank" rel="noopener" style="gap:8px"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.5-4.1-3.5-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.5.7.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.2-.2-.5-.3zM12 0a12 12 0 0 0-10.4 18l-1.6 6 6.1-1.6A12 12 0 1 0 12 0zm0 22a10 10 0 0 1-5.4-1.6l-.4-.2-3.7 1 1-3.6-.2-.4A10 10 0 1 1 12 22z"/></svg> WhatsApp</a>
      </div>
      <div style="display:flex;align-items:center;gap:24px;justify-content:center;margin-top:28px;font-size:13px;color:var(--muted)">
        <span style="display:flex;align-items:center;gap:6px"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> 24-hour RFQ turnaround</span>
        <span style="display:flex;align-items:center;gap:6px"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> ISO 9001:2015</span>
        <span style="display:flex;align-items:center;gap:6px"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Made in India</span>
      </div>
    </div>
  </div>
</section>'''
        content = content.replace(old_cta_band, new_cta_band)

    elif filename == 'contact.html':
        # --- Add response time expectation and alternative contact paths below form ---
        old_success = '''            <h2 style="font-size:28px;margin-bottom:8px">Inquiry Received</h2>
            <p style="font-size:16px;color:var(--muted);margin-bottom:32px">Our team will respond within 24 hours.</p>
            <a href="#" onclick="resetPdrForm(event)" class="btn btn-outline">Send Another Inquiry</a>'''
        new_success = '''            <h2 style="font-size:28px;margin-bottom:8px">Inquiry Received</h2>
            <p style="font-size:16px;color:var(--muted);margin-bottom:24px">Our sales or engineering team will respond within 24 hours via email or phone.</p>
            <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:24px">
              <a href="#" onclick="resetPdrForm(event)" class="btn btn-primary">Send Another Inquiry</a>
              <a href="https://wa.me/918419916460?text=Hi, I just submitted an inquiry on pdrworld.com and wanted to follow up." target="_blank" rel="noopener" class="btn btn-outline" style="gap:8px"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.5-4.1-3.5-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.5.7.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.2-.2-.5-.3zM12 0a12 12 0 0 0-10.4 18l-1.6 6 6.1-1.6A12 12 0 1 0 12 0zm0 22a10 10 0 0 1-5.4-1.6l-.4-.2-3.7 1 1-3.6-.2-.4A10 10 0 1 1 12 22z"/></svg> Follow Up on WhatsApp</a>
            </div>
            <p style="font-size:13px;color:var(--muted)">For urgent orders, call directly: <a href="tel:+912224306494" style="color:var(--accent);font-weight:600">+91-22-24306494</a></p>'''
        content = content.replace(old_success, new_success)

        # --- Add trust indicators below the submit button ---
        old_submit = '''<button type="submit" class="btn btn-primary" style="width:100%; justify-content:center; padding: 16px; font-size: 16px; margin-top: 8px;">Submit Inquiry</button>'''
        new_submit = '''<button type="submit" class="btn btn-primary" style="width:100%; justify-content:center; padding: 16px; font-size: 16px; margin-top: 8px;">Submit Inquiry &rarr;</button>
            <div style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--muted);margin-top:12px;justify-content:center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Your data is secure &middot; Response within 24 hours &middot; No spam
            </div>'''
        content = content.replace(old_submit, new_submit)

    elif filename == 'about.html':
        # --- Strengthen About CTA section ---
        old_about_cta = '''    <a class="btn btn-primary" href="contact.html">Contact Our Team</a>'''
        new_about_cta = '''    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
      <a class="btn btn-primary" href="contact.html?inquiry=Technical+Support">Request Technical Consultation</a>
      <a class="btn btn-outline" href="contact.html?inquiry=Distributorship">Become a Distributor</a>
    </div>'''
        content = content.replace(old_about_cta, new_about_cta)

    elif filename == 'solutions.html':
        # --- Improve Solutions CTA band ---
        old_sol_cta = '''    <a class="btn btn-primary" href="contact.html">Schedule Consultation</a>'''
        new_sol_cta = '''    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
      <a class="btn btn-primary" href="contact.html?inquiry=Smart+Systems">Schedule Project Consultation &rarr;</a>
      <a class="btn btn-outline" href="https://wa.me/918419916460?text=Hi, I would like to discuss a fiber infrastructure project." target="_blank" rel="noopener" style="gap:8px"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.5-4.1-3.5-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.5.7.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.2-.2-.5-.3zM12 0a12 12 0 0 0-10.4 18l-1.6 6 6.1-1.6A12 12 0 1 0 12 0zm0 22a10 10 0 0 1-5.4-1.6l-.4-.2-3.7 1 1-3.6-.2-.4A10 10 0 1 1 12 22z"/></svg> Discuss on WhatsApp</a>
    </div>'''
        content = content.replace(old_sol_cta, new_sol_cta)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Phase 4 applied: {filename}")
    else:
        print(f"No changes needed: {filename}")


# Process all main pages
pages = ['index.html', 'products.html', 'about.html', 'solutions.html', 'resources.html', 'contact.html']
base = r'c:\Users\SEBIN\Downloads\PDR world Frontend'

for page in pages:
    filepath = os.path.join(base, page)
    if os.path.exists(filepath):
        apply_phase4(filepath, page)
    else:
        print(f"File not found: {page}")

print("\nPhase 4 conversion optimization complete.")
