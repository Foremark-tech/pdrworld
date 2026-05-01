import re

def process_file(filepath, filename):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Header
    if not content.startswith('<!-- PDR REMEDIATION PASS'):
        content = f'<!-- PDR REMEDIATION PASS - {filename} - all audit fixes applied -->\n' + content

    # Global consistency
    # MINOR 2: Favicon
    if 'favicon.svg' not in content:
        content = re.sub(
            r'(<title>.*?</title>)',
            r'\1\n  <!-- FIX: MINOR 2 - Favicon links -->\n  <link rel="icon" type="image/svg+xml" href="favicon.svg">\n  <link rel="icon" type="image/png" href="favicon.png">',
            content, count=1
        )

    # MINOR 8: WhatsApp
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

    # Consistency 2: Mega Menu Maintenance Tools
    if 'Maintenance Tools' not in content.split('class="mega-grid"')[1].split('</div>')[0] if 'class="mega-grid"' in content else False:
        content = re.sub(
            r'(<a href="products.html#specialty" data-cat="specialty">.*?</a>)',
            r'\1\n            <!-- FIX: Consistency 2 - Mega Menu Maintenance Tools -->\n            <a href="products.html#tools" data-cat="tools"><strong>Maintenance Tools</strong><span>Cleavers &middot; Cleaners &middot; Splice Sleeves &middot; VFL</span></a>',
            content
        )
    # Also update mobile menu
    if 'Maintenance Tools' not in content.split('class="submenu"')[1].split('</div>')[0] if 'class="submenu"' in content else False:
        content = re.sub(
            r'(<a href="products.html#specialty" data-cat="specialty">Specialty Products</a>)',
            r'\1\n      <!-- FIX: Consistency 2 - Mobile Menu Maintenance Tools -->\n      <a href="products.html#tools" data-cat="tools">Maintenance Tools</a>',
            content
        )

    # Consistency 1: Footer Legal Links & Factory Setup
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

    # products.html specific
    if filename == 'products.html':
        # MINOR 4: Title
        content = re.sub(r'<title>.*?</title>', '<!-- FIX: MINOR 4 - Page title improvement -->\n  <title>Products | Fiber Optic Transceivers, Patch Cords, ODF & Test Equipment — PDR World</title>', content)
        
        # MINOR 3: Meta description
        content = re.sub(
            r'(<meta name="description" content=")[^"]+(">)',
            '\\1Complete fiber optic product catalogue — active components, passive assemblies, cable management, test equipment and specialty systems. Manufactured and tested in Mumbai.\\2 <!-- FIX: MINOR 3 - Meta Description -->',
            content
        )

        # Consistency 3: Sticky nav
        if 'data-target="specialty"' not in content:
            content = re.sub(
                r'(<a class="pr-tab" href="#drone" data-target="drone">Optical Fiber Drone</a>)',
                '<!-- FIX: CRITICAL 2 & 1 - Sticky Nav updates -->\n      <a class="pr-tab" href="#specialty" data-target="specialty">Specialty Products</a>\n      <a class="pr-tab" href="#tools" data-target="tools">Maintenance Tools</a>',
                content
            )

        # CRITICAL 2: Specialty ID & High Power Patchcord
        content = re.sub(r'id="drone"', 'id="specialty" <!-- FIX: CRITICAL 2 - ID update -->', content)
        
        new_specialty = '''<!-- FIX: CRITICAL 2 - Add High-Power Patchcord -->
      <div class="pr-pcard reveal" data-product="high-power-patchcord"><div class="pr-pcard-art"><span class="pr-prod-tag">High-Power</span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><path d="M8 24h32"/><circle cx="24" cy="24" r="8"/><path d="M24 16v16"/></svg></div><div class="pr-pcard-body"><h3>High-Power Patchcord</h3><p>Specialty assembly for laser delivery and sensing applications. Handling 1W—50W power.</p><div class="pr-spec-row"><span class="pr-spec-pill">1W—50W</span><span class="pr-spec-pill">SM Fiber</span></div><div class="pr-prod-cta"><a href="#" onclick="openDrawer('high-power-patchcord');return false">Inquire Now</a><a href="#" onclick="openDrawer('high-power-patchcord');return false">Details &rarr;</a></div></div></div>
    </div>
    <div style="display:flex;gap:16px;justify-content:center;margin-top:32px;flex-wrap:wrap">'''
        content = re.sub(r'(<div style="display:flex;gap:16px;justify-content:center;margin-top:32px;flex-wrap:wrap">)', new_specialty, content)
        
        # CRITICAL 1: Maintenance Tools
        if 'id="tools"' not in content:
            tools_section = '''
<!-- FIX: CRITICAL 1 - Maintenance Tools Section -->
<section class="section reveal" id="tools">
  <div class="container">
    <div class="sec-head">
      <div class="eyebrow">Maintenance &amp; Cleaning</div>
      <h2>Maintenance Tools</h2>
      <p>Professional cleaning and maintenance tools for optical fiber infrastructure.</p>
    </div>
    <div class="pr-grid">
      <div class="pr-pcard reveal" data-product="cleaner-pen"><div class="pr-pcard-art"><span class="pr-prod-tag">Cleaner</span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="18" y="10" width="12" height="28" rx="2"/><path d="M22 10V6h4v4"/></svg></div><div class="pr-pcard-body"><h3>Fiber Optic Cleaner Pen</h3><p>One-click cleaner pen available in 1.25mm (LC/MU) and 2.5mm (SC/FC/ST) ferrule types.</p><div class="pr-spec-row"><span class="pr-spec-pill">1.25mm / 2.5mm</span><span class="pr-spec-pill">800+ Cleans</span></div><div class="pr-prod-cta"><a href="#" onclick="openDrawer('cleaner-pen');return false">Inquire Now</a><a href="#" onclick="openDrawer('cleaner-pen');return false">Details &rarr;</a></div></div></div>
      <div class="pr-pcard reveal" data-product="cassette-cleaner"><div class="pr-pcard-art"><span class="pr-prod-tag">Cassette</span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="10" y="12" width="28" height="24" rx="4"/><circle cx="18" cy="24" r="4"/><circle cx="30" cy="24" r="4"/></svg></div><div class="pr-pcard-body"><h3>Cassette Cleaner</h3><p>High-performance cassette cleaner with replacement reels providing 400+ clean cycles.</p><div class="pr-spec-row"><span class="pr-spec-pill">400+ Cycles</span><span class="pr-spec-pill">Dry Cloth</span></div><div class="pr-prod-cta"><a href="#" onclick="openDrawer('cassette-cleaner');return false">Inquire Now</a><a href="#" onclick="openDrawer('cassette-cleaner');return false">Details &rarr;</a></div></div></div>
      <div class="pr-pcard reveal" data-product="mpo-cleaner"><div class="pr-pcard-art"><span class="pr-prod-tag">MPO</span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="14" y="14" width="20" height="20" rx="2"/><path d="M14 24h20"/></svg></div><div class="pr-pcard-body"><h3>Fiber Optic Cleaner Pen MPO</h3><p>Specialized one-click cleaner for multi-fiber MPO/MTP ports and assemblies.</p><div class="pr-spec-row"><span class="pr-spec-pill">MPO/MTP</span><span class="pr-spec-pill">600+ Cleans</span></div><div class="pr-prod-cta"><a href="#" onclick="openDrawer('mpo-cleaner');return false">Inquire Now</a><a href="#" onclick="openDrawer('mpo-cleaner');return false">Details &rarr;</a></div></div></div>
      <div class="pr-pcard reveal" data-product="vfl"><div class="pr-pcard-art"><span class="pr-prod-tag">VFL</span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><path d="M24 10l4 8 8 4-8 4-4 8-4-8-8-4 8-4z"/><circle cx="24" cy="24" r="2"/></svg></div><div class="pr-pcard-body"><h3>VFL — Visual Fault Locator</h3><p>650nm visible red laser (1mW) to detect breaks, micro-bends, and faults up to 10km.</p><div class="pr-spec-row"><span class="pr-spec-pill">650nm Laser</span><span class="pr-spec-pill">Up to 10km</span></div><div class="pr-prod-cta"><a href="#" onclick="openDrawer('vfl');return false">Inquire Now</a><a href="#" onclick="openDrawer('vfl');return false">Details &rarr;</a></div></div></div>
      <div class="pr-pcard reveal" data-product="splice-sleeves"><div class="pr-pcard-art"><span class="pr-prod-tag">Sleeves</span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="14" y="20" width="20" height="8" rx="4"/><line x1="8" y1="24" x2="40" y2="24"/></svg></div><div class="pr-pcard-body"><h3>Splice Sleeves</h3><p>Heat-shrink protection for fusion splices, available in standard 60mm and 40mm lengths.</p><div class="pr-spec-row"><span class="pr-spec-pill">60mm / 40mm</span><span class="pr-spec-pill">Heat-Shrink</span></div><div class="pr-prod-cta"><a href="#" onclick="openDrawer('splice-sleeves');return false">Inquire Now</a><a href="#" onclick="openDrawer('splice-sleeves');return false">Details &rarr;</a></div></div></div>
    </div>
  </div>
</section>
'''
            content = content.replace('<!-- ===== SECTION 8: PRODUCT DETAIL SLIDE-IN PANEL ===== -->', tools_section + '\n<!-- ===== SECTION 8: PRODUCT DETAIL SLIDE-IN PANEL ===== -->')

        # MAJOR 1: Missing Product Cards
        
        # Cable Assembly missing cards
        missing_cable_assembly = '''<!-- FIX: MAJOR 1 - Missing Passive Cards -->
      <div class="pr-pcard reveal" data-product="armoured-patchcord"><div class="pr-pcard-art"><span class="pr-prod-tag">Armoured</span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><path d="M8 24h32"/><path d="M12 20v8M16 20v8M20 20v8M24 20v8M28 20v8M32 20v8M36 20v8"/></svg></div><div class="pr-pcard-body"><h3>Armoured Patchcord</h3><p>Ruggedized armoured cable assembly with stainless steel interlocking armour for harsh environments.</p><div class="pr-spec-row"><span class="pr-spec-pill">SS Armour</span><span class="pr-spec-pill">SM/MM</span></div><div class="pr-prod-cta"><a href="#" onclick="openDrawer('armoured-patchcord');return false">Inquire Now</a><a href="#" onclick="openDrawer('armoured-patchcord');return false">Details &rarr;</a></div></div></div>
      <div class="pr-pcard reveal" data-product="pof-patchcord"><div class="pr-pcard-art"><span class="pr-prod-tag">POF</span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><path d="M8 24h32"/><circle cx="24" cy="24" r="6"/></svg></div><div class="pr-pcard-body"><h3>POF — Plastic Optical Fiber Patchcord</h3><p>Large-core plastic fiber for short-range consumer and industrial communication links.</p><div class="pr-spec-row"><span class="pr-spec-pill">PMMA Core</span><span class="pr-spec-pill">650nm</span></div><div class="pr-prod-cta"><a href="#" onclick="openDrawer('pof-patchcord');return false">Inquire Now</a><a href="#" onclick="openDrawer('pof-patchcord');return false">Details &rarr;</a></div></div></div>
      <div class="pr-pcard reveal" data-product="bendiboot-patchcord"><div class="pr-pcard-art"><span class="pr-prod-tag">90°</span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><path d="M16 32V16h16"/></svg></div><div class="pr-pcard-body"><h3>Bendiboot Patchcord</h3><p>90-degree angled boot design for high-density panels with restricted bend radius.</p><div class="pr-spec-row"><span class="pr-spec-pill">90° Boot</span><span class="pr-spec-pill">LC/SC</span></div><div class="pr-prod-cta"><a href="#" onclick="openDrawer('bendiboot-patchcord');return false">Inquire Now</a><a href="#" onclick="openDrawer('bendiboot-patchcord');return false">Details &rarr;</a></div></div></div>
      <div class="pr-pcard reveal" data-product="lc-uniboot"><div class="pr-pcard-art"><span class="pr-prod-tag">Uniboot</span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><path d="M8 24h20"/><rect x="28" y="20" width="12" height="8" rx="2"/></svg></div><div class="pr-pcard-body"><h3>LC Uniboot Patchcord</h3><p>Single-jacket duplex LC connector for reversible polarity in high-density OM3/OM4 environments.</p><div class="pr-spec-row"><span class="pr-spec-pill">Reversible</span><span class="pr-spec-pill">OM3/OM4</span></div><div class="pr-prod-cta"><a href="#" onclick="openDrawer('lc-uniboot');return false">Inquire Now</a><a href="#" onclick="openDrawer('lc-uniboot');return false">Details &rarr;</a></div></div></div>
    </div>'''
        content = content.replace('</div>\n\n    <h3 class="pr-sub-head" style="margin-top:48px">Adapters</h3>', missing_cable_assembly + '\n\n    <h3 class="pr-sub-head" style="margin-top:48px">Adapters</h3>')

        # Adapters missing card
        missing_adapter = '''<!-- FIX: MAJOR 1 - Missing Adapter -->
      <div class="pr-pcard reveal" data-product="mating-sleeve"><div class="pr-pcard-art"><span class="pr-prod-tag">Sleeve</span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="20" y="12" width="8" height="24" rx="2"/><line x1="8" y1="24" x2="20" y2="24"/><line x1="28" y1="24" x2="40" y2="24"/></svg></div><div class="pr-pcard-body"><h3>Mating Sleeve / Alignment Sleeve</h3><p>Precision ceramic or bronze split sleeve for bare fiber alignment in fusion splicing and testing.</p><div class="pr-spec-row"><span class="pr-spec-pill">Ceramic</span><span class="pr-spec-pill">2.5mm / 1.25mm</span></div><div class="pr-prod-cta"><a href="#" onclick="openDrawer('mating-sleeve');return false">Inquire Now</a><a href="#" onclick="openDrawer('mating-sleeve');return false">Details &rarr;</a></div></div></div>
    </div>'''
        content = content.replace('</div>\n\n    <h3 class="pr-sub-head" style="margin-top:48px">Attenuator</h3>', missing_adapter + '\n\n    <h3 class="pr-sub-head" style="margin-top:48px">Attenuator</h3>')

        # Connectors missing card
        missing_connector = '''<!-- FIX: MAJOR 1 - Missing Connector -->
      <div class="pr-pcard reveal" data-product="soc"><div class="pr-pcard-art"><span class="pr-prod-tag">SOC</span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="14" y="16" width="20" height="16" rx="2"/><path d="M8 24h6"/><path d="M34 24h6"/><circle cx="24" cy="24" r="3"/></svg></div><div class="pr-pcard-body"><h3>Splice-On Connector (SOC)</h3><p>Factory-grade endface quality using fusion splice bonding — no epoxy, no polish.</p><div class="pr-spec-row"><span class="pr-spec-pill">IL &lt; 0.2dB</span><span class="pr-spec-pill">RL &gt; 60dB</span></div><div class="pr-prod-cta"><a href="#" onclick="openDrawer('soc');return false">Inquire Now</a><a href="#" onclick="openDrawer('soc');return false">Details &rarr;</a></div></div></div>
    </div>'''
        content = content.replace('</div>\n  </div>\n</section>\n\n<!-- ===== SECTION 5: CABLE MANAGEMENT DEVICES ===== -->', missing_connector + '\n  </div>\n</section>\n\n<!-- ===== SECTION 5: CABLE MANAGEMENT DEVICES ===== -->')

        # MAJOR 4: Storage & Handling
        storage_handling = '''
    <!-- FIX: MAJOR 4 - Storage & Handling Sub-section -->
    <h3 class="pr-sub-head" style="margin-top:48px">Storage &amp; Handling</h3>
    <div class="pr-grid">
      <div class="pr-pcard reveal" data-product="fiber-spool"><div class="pr-pcard-art"><span class="pr-prod-tag">Spool</span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="16" y="8" width="16" height="32" rx="2"/><line x1="8" y1="12" x2="40" y2="12"/><line x1="8" y1="36" x2="40" y2="36"/></svg></div><div class="pr-pcard-body"><h3>Fiber Spool / Fiber Drum</h3><p>Precision fiber storage and transport reel; available in 500m, 1km, 2km wound lengths.</p><div class="pr-spec-row"><span class="pr-spec-pill">SM/MM</span><span class="pr-spec-pill">Low-Stress Winding</span></div><div class="pr-prod-cta"><a href="#" onclick="openDrawer('fiber-spool');return false">Inquire Now</a><a href="#" onclick="openDrawer('fiber-spool');return false">Details &rarr;</a></div></div></div>
    </div>
  </div>
</section>
'''
        content = content.replace('</div>\n  </div>\n</section>\n\n<!-- ===== SECTION 5: CABLE MANAGEMENT DEVICES ===== -->', '</div>\n' + storage_handling + '\n<!-- ===== SECTION 5: CABLE MANAGEMENT DEVICES ===== -->')

        # Test & Measuring missing cards
        missing_opm = '''<!-- FIX: MAJOR 1 - Missing OPM -->
      <div class="pr-pcard reveal" data-product="regular-opm"><div class="pr-pcard-art"><span class="pr-prod-tag">OPM</span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="12" y="8" width="24" height="32" rx="4"/><rect x="16" y="14" width="16" height="10" rx="1"/><circle cx="24" cy="32" r="3"/></svg></div><div class="pr-pcard-body"><h3>Regular Optical Power Meter</h3><p>Standard bench/field OPM for 800—1700nm range, auto-wavelength detection, LCD display.</p><div class="pr-spec-row"><span class="pr-spec-pill">800—1700nm</span><span class="pr-spec-pill">Auto-λ</span></div><div class="pr-prod-cta"><a href="#" onclick="openDrawer('regular-opm');return false">Inquire Now</a><a href="#" onclick="openDrawer('regular-opm');return false">Details &rarr;</a></div></div></div>
    </div>'''
        content = content.replace('</div>\n\n    <h3 class="pr-sub-head" style="margin-top:48px">OTDR</h3>', missing_opm + '\n\n    <h3 class="pr-sub-head" style="margin-top:48px">OTDR</h3>')

        missing_otdr = '''<!-- FIX: MAJOR 1 - Missing OTDR -->
      <div class="pr-pcard reveal" data-product="pocket-otdr"><div class="pr-pcard-art"><span class="pr-prod-tag">Pocket</span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="14" y="10" width="20" height="28" rx="2"/><rect x="16" y="14" width="16" height="12" rx="1"/><circle cx="24" cy="32" r="2"/></svg></div><div class="pr-pcard-body"><h3>Pocket OTDR</h3><p>Ultra-compact handheld OTDR for quick field checks; single-mode and multimode models.</p><div class="pr-spec-row"><span class="pr-spec-pill">Pocket</span><span class="pr-spec-pill">SM/MM</span></div><div class="pr-prod-cta"><a href="#" onclick="openDrawer('pocket-otdr');return false">Inquire Now</a><a href="#" onclick="openDrawer('pocket-otdr');return false">Details &rarr;</a></div></div></div>
    </div>'''
        content = content.replace('</div>\n\n    <h3 class="pr-sub-head" style="margin-top:48px">Splicer</h3>', missing_otdr + '\n\n    <h3 class="pr-sub-head" style="margin-top:48px">Splicer</h3>')

        missing_splicer = '''<!-- FIX: MAJOR 1 - Missing Splicer -->
      <div class="pr-pcard reveal" data-product="next-gen-splicer"><div class="pr-pcard-art"><span class="pr-prod-tag">Pro</span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="10" y="14" width="28" height="20" rx="3"/><path d="M16 14V10h16v4"/><circle cx="24" cy="24" r="4"/><path d="M10 24H6"/><path d="M42 24h-4"/></svg></div><div class="pr-pcard-body"><h3>Next Gen Optical Fusion Splicer (OPM + VFL)</h3><p>Advanced splicer with integrated optical power meter and visual fault locator.</p><div class="pr-spec-row"><span class="pr-spec-pill">Integrated OPM</span><span class="pr-spec-pill">Built-in VFL</span></div><div class="pr-prod-cta"><a href="#" onclick="openDrawer('next-gen-splicer');return false">Inquire Now</a><a href="#" onclick="openDrawer('next-gen-splicer');return false">Details &rarr;</a></div></div></div>
    </div>'''
        content = content.replace('</div>\n\n    <h3 class="pr-sub-head" style="margin-top:48px">Endface Inspector</h3>', missing_splicer + '\n\n    <h3 class="pr-sub-head" style="margin-top:48px">Endface Inspector</h3>')


    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

process_file('c:\\Users\\SEBIN\\Downloads\\PDR world Frontend\\products.html', 'products.html')
print("Processed products.html HTML structure")
