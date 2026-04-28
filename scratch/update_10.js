const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf-8');

// --- 10.1 ADD 11 Products & 10.6 Fix PoE ---
const productsMatch = html.match(/const PRODUCTS = \[\s*([\s\S]*?)\s*\];/);
if (!productsMatch) {
  console.error("Could not find PRODUCTS array");
  process.exit(1);
}

let productsStr = productsMatch[0];
let PRODUCTS;
try {
  PRODUCTS = eval(productsStr.replace('const PRODUCTS =', ''));
} catch (e) {
  console.error("Error evaluating products:", e);
  process.exit(1);
}

// 10.6 Fix PoE Injector
const poe = PRODUCTS.find(p => p.name === 'PoE Injector');
if (poe) {
    poe.desc = "PDR PoE (Power over Ethernet) Injector delivers 802.3af/at standard IEEE PoE power over standard Cat5e/6 cables to power IP cameras, VoIP phones, wireless access points and other PoE devices. Eliminates the need for a separate power cable and wall outlet at the powered device location.";
}

// 10.1 Add 11 products
const newProducts = [
  { cat: 'passive', name: 'Attenuator', desc: 'PDR buildout attenuators provide superior performance for all single-mode in-line attenuation requirements. Available in fixed and variable models across standard dB values for signal-level management in telecom and datacom installations.', ic: 'adapt', tag: '', features: ['Fixed-value attenuation (1dB to 30dB)', 'SC/FC/LC/ST connector styles', 'Single-mode 9/125 fiber', 'Male-to-female in-line form factor', 'Compact plug-in design', 'Gold-plated contacts for long-term reliability'], applications: ['Optical power level management', 'CATV system balancing', 'Test & measurement setups', 'WDM channel equalization', 'Receiver overload protection'], specs: { 'Attenuation Values': '1/2/3/5/7/10/15/20/25/30dB', 'Wavelength': '1310/1550nm', 'Connector': 'SC/FC/LC/ST', 'Fiber': 'SM 9/125', 'Return Loss': '>50dB', 'PDL': '<0.2dB' }, standards: ['IEC 61754', 'IEC 61300-3-4', 'RoHS'], related: ['Variable Fiber Attenuator', 'Laser Source', 'Fiber Optic Patch Cords & Pigtails'] },
  { cat: 'passive', name: 'Bare Fiber Adapter', desc: 'PDR Bare Fiber Adapter is used as a medium to link the bare optical fiber directly to fiber optic equipment without terminating a connector. Essential for laboratory measurements, fiber characterisation, and emergency field connections.', ic: 'adapt', tag: '', features: ['Direct bare fiber to FC/SC/LC equipment port coupling', '125um bare fiber acceptance', 'Precision ceramic sleeve alignment', 'No epoxy or polish required', 'Compact single-port body', 'SM and MM fiber compatible'], applications: ['Laboratory fiber measurement setups', 'OTDR bare-fiber testing', 'Splicing pre-check measurements', 'Fiber characterisation R&D', 'Emergency field testing without connectorised fiber'], specs: { 'Fiber Diameter': '125um (bare)', 'Coupling': 'Bare fiber to SC/FC/LC port', 'Fiber Type': 'SM and MM', 'Alignment': 'Ceramic sleeve' }, standards: ['IEC 61754', 'RoHS'], related: ['Fiber Optic Patch Cords & Pigtails', 'Field-Installable Connector', 'Mini Optical Power Meter'] },
  { cat: 'passive', name: 'CAT 6 Patch Cord', desc: 'PDR CAT 6 UTP/FTP Patch Cords are manufactured to ISO/IEC 11801 and ANSI/TIA-568-C.2 standards for high-speed Gigabit Ethernet and 10 Gigabit Ethernet network patching. Available in standard lengths and custom lengths with RJ45 connectors.', ic: 'cable', tag: '', features: ['CAT 6 performance to 250MHz', 'UTP and FTP (screened) variants', 'Stranded copper for flexibility', 'Moulded strain relief boot', '568A and 568B wiring options', 'PVC and LSZH jacket variants', 'Colour-coded for identification'], applications: ['Data centre server patching', 'Enterprise LAN patch panels', 'Campus network structured cabling', 'Telecommunications equipment rooms', 'IP telephony and PoE connections'], specs: { 'Standard': 'ISO/IEC 11801, TIA-568-C.2', 'Bandwidth': '250MHz', 'Speed': 'Gigabit/10G Ethernet', 'Connector': 'RJ45', 'Cable': 'CAT6 UTP/FTP stranded', 'Jacket': 'PVC or LSZH', 'Lengths': '0.5m to 10m (custom)' }, standards: ['ISO/IEC 11801', 'TIA-568-C.2', 'IEC 60332 (LSZH)', 'RoHS'], related: ['CAT 6 Patch Panel', 'Fiber Optic Patch Cords & Pigtails', 'Optical Distribution Frame (ODF)'] },
  { cat: 'passive', name: 'CAT 6 Patch Panel', desc: 'PDR CAT 6 24-Port Distribution Panel is designed for high-speed network applications. Its performance conforms to ISO/IEC 11801 Category 6 standards. The 19-inch 1U rack-mount panel provides organised termination for structured cabling in data centres and enterprise environments.', ic: 'rack', tag: '', features: ['24-port or 48-port RJ45 configuration', '19-inch 1U rack-mount', 'Individual port labeling system', '110 IDC or Keystone module termination', 'Cable management ring included', 'ISO/IEC 11801 Category 6 compliant', 'Steel body with powder coat finish'], applications: ['Data centre structured cabling termination', 'Enterprise network patch rooms', 'Telecommunications rack organisation', 'Campus LAN aggregation points', 'Horizontal cabling termination'], specs: { 'Ports': '24 or 48 × RJ45', 'Standard': 'ISO/IEC 11801 CAT6', 'Format': '19-inch 1U rack', 'Bandwidth': '250MHz', 'Termination': '110 IDC', 'Material': 'Steel' }, standards: ['ISO/IEC 11801', 'TIA-568-C.2', 'RoHS'], related: ['CAT 6 Patch Cord', 'Optical Distribution Frame (ODF)', 'Rack-Mount Fiber Management'] },
  { cat: 'passive', name: 'Loop Back Patch Cord', desc: 'PDR Loop Back Patch Cords (also called Loopback Plugs or LB Patch Cables) are used in fiber optic networks and beyond for diagnostic loopback testing — reflecting the optical signal back from the far-end port to the near end for BERT and continuity testing. Available in SC, FC, LC, ST styles.', ic: 'loop', tag: '', features: ['Precision loopback configuration', 'SC/FC/LC/ST connector types', 'SM and MM fiber options', 'Low insertion loss (<0.3dB)', 'UPC and APC polish options', 'Compact design for port-density environments', '100% factory tested'], applications: ['BERT loopback testing', 'Optical network equipment diagnostic testing', 'Transceiver self-test', 'Ring topology network testing', 'Factory quality assurance for transceivers', 'Optical module burn-in testing'], specs: { 'Connector': 'SC/FC/LC/ST', 'Fiber': 'SM OS2 or MM OM3/OM4', 'Polish': 'UPC or APC', 'IL': '<0.3dB', 'Return Loss': '>50dB (UPC)' }, standards: ['IEC 61754', 'IEC 61300-3-35', 'RoHS'], related: ['Fiber Optic Patch Cords & Pigtails', 'Fiber Optic Transceivers (SFP)', 'Mini Optical Power Meter'] },
  { cat: 'passive', name: 'Mode Conditioning Patchcord (MCP)', desc: 'PDR Mode Conditioning Patchcord (MCP), also known as Gigabit Launch Patchcord, is used in longwave/long haul Gigabit Ethernet and 10GbE links over legacy multimode fiber. It enables compliant launching from single-mode transceivers onto OM1/OM2 multimode fiber to eliminate differential modal delay (DMD) penalties.', ic: 'patch', tag: '', features: ['SM-to-MM offset launch design per IEEE 802.3z', 'Supports 1000BASE-LX and 10GBASE-LW', 'Offset launch point precisely aligned to standard', 'SC-SC, LC-LC and mixed connector options', 'LSZH or PVC jacket', 'Available in standard lengths 1m/2m/3m/5m'], applications: ['Gigabit Ethernet over legacy OM1/OM2 multimode fiber', 'Long haul 1000BASE-LX with multimode infrastructure', '10GbE over extended multimode spans', 'Enterprise backbone upgrades using existing fiber plant'], specs: { 'Launch Type': 'Offset SMF launch onto MMF', 'Ethernet': '1000BASE-LX, 10GBASE-LW', 'Connector': 'SC-SC / LC-LC (SM to MM)', 'Fiber': 'SM 9/125 + MM 62.5/125 or 50/125', 'Standard': 'IEEE 802.3z' }, standards: ['IEEE 802.3z', 'IEC 61754', 'RoHS'], related: ['Fiber Optic Patch Cords & Pigtails', 'Fiber Optic Transceivers (SFP)', 'MPO Cable Assembly'] },
  { cat: 'passive', name: 'SC/APC Female to SC/UPC Male Adapter Converter', desc: 'PDR SC/APC Female to SC/UPC Male Adapter Converter is a zero-loss hybrid fixed adapter that allows direct connection between SC/APC and SC/UPC terminated cables — eliminating the need for re-termination in mixed-polish networks. Single Mode 9/125. 0dB conversion with no optical penalty.', ic: 'adapt', tag: '', features: ['Hybrid APC-to-UPC conversion in fixed form', 'Zero loss (0dB) design', 'Single Mode 9/125 fiber', 'Precision ceramic sleeve alignment', 'Compact inline body', 'Allows connection of mixed polish systems without re-termination'], applications: ['Connecting SC/APC drop cables to SC/UPC ODF ports', 'Migrating legacy UPC networks to APC infrastructure', 'Field adaptation in mixed-standard deployments', 'ISP FTTH last-mile APC-to-UPC connection points'], specs: { 'Type': 'SC/APC Female to SC/UPC Male', 'Fiber': 'SM 9/125', 'Insertion Loss': '0dB nominal', 'Return Loss': '>55dB (APC side)' }, standards: ['IEC 61754-4', 'RoHS'], related: ['Fiber Optic Patch Cords & Pigtails', 'Field-Installable Connector', 'PLC Splitter'] },
  { cat: 'specialty', name: 'SMPTE Cable Assembly', desc: 'PDR SMPTE Cable Assembly offers the broadest range of cabling options for HDTV broadcast infrastructure. Provides ruggedised and dirt-protected fiber optic cable assemblies designed for broadcast, live event, and studio environments where combined optical/electrical signals are required.', ic: 'cable', tag: '', features: ['SMPTE 311M compliant hybrid fiber/copper cable', 'Ruggedised hybrid connector (optical + power)', 'Dirt and dust protected connector design', 'Broadcast-grade optical performance', 'PVC and LSZH jacket options', 'Available in broadcast standard lengths', 'Triax adapter option available'], applications: ['HDTV studio infrastructure connections', 'Broadcast live event camera links', 'OB (outside broadcast) van to camera connections', 'Studio-to-control room hybrid fiber links', 'Sports broadcasting field production'], specs: { 'Standard': 'SMPTE 311M', 'Cable': 'Hybrid fiber + power conductors', 'Connector': 'SMPTE 304M triax-style', 'IL': '<0.5dB per connector' }, standards: ['SMPTE 311M', 'IEC 60332 (LSZH)', 'RoHS'], related: ['HD-SDI Optical Transceiver', 'Armoured Patchcord', 'Fiber Optic Patch Cords & Pigtails'] },
  { cat: 'specialty', name: 'High Power Patch Cord', desc: 'PDR High Power Patch Cord adopts 200 to 1000 core customised ferrule and utilises air-gap-ferrule technology to achieve the optimal transmission with high laser power. Designed for fiber lasers, laser material processing, medical laser delivery, and industrial high-power optical systems.', ic: 'patch', tag: '', features: ['Air-gap ferrule technology for high laser power handling', '200-1000 core customised ferrule options', 'Ultra-low back reflection design', 'High power handling capacity', 'Available in SM and large-core fiber options', 'All standard connector types: FC/PC, FC/APC, SMA 905/906'], applications: ['Fiber laser delivery systems', 'Laser material processing (cutting/welding/marking)', 'Medical laser delivery fibers', 'Illumination and imaging optical fibers', 'High-power optical sensing systems', 'Industrial optical measurement'], specs: { 'Ferrule Core': '200um to 1000um (customised)', 'Technology': 'Air-gap ferrule', 'Connectors': 'FC/PC, FC/APC, SMA 905, SMA 906', 'Max Power Handling': 'Application-dependent (consult engineering)' }, standards: ['RoHS', 'CE'], related: ['Fiber Optic Patch Cords & Pigtails', 'Laser Source', 'Custom Cable Assembly'] },
  { cat: 'test', name: 'EasyGet Wifi Wireless Fiber Endface Microscope', desc: 'PDR EasyGet Wifi is a wireless fiber endface inspection microscope that transmits live connector endface images to a smartphone or tablet via Wi-Fi. The dirt and damage on fiber endfaces directly cause attenuation and network faults — EasyGet enables hands-free, real-time endface inspection without a display module, ideal for technicians working in confined spaces or overhead installations.', ic: 'scope', tag: '', features: ['Wi-Fi transmission to iOS/Android smartphone or tablet', '200x magnification', 'Live video streaming to device', 'Tip-loc interchangeable probe tip system', 'Compatible with SC/LC/FC/ST and MPO connectors', 'USB rechargeable battery', 'Lightweight handheld body'], applications: ['Fiber endface inspection in confined spaces', 'Overhead cable tray and ceiling installations', 'FTTx drop cable connector inspection', 'Data centre high-density port inspection', 'ISP field commissioning verification'], specs: { 'Magnification': '200x', 'Connectivity': 'Wi-Fi to iOS/Android', 'Probe Tips': 'SC/LC/FC/ST (PC+APC)', 'Battery': 'USB rechargeable' }, standards: ['IEC 61300-3-35 (visual inspection reference)', 'RoHS'], related: ['AutoGet Wifi Endface Microscope', '5-in-1 Optical Power Meter', 'Fiber Optic Cleaner Pen'] },
  { cat: 'test', name: 'EasyCheck V2 Digital Fiber Endface Inspector', desc: 'PDR EasyCheck V2 is a digital fiber endface inspection microscope with an integrated LCD display. The dirt and damage on fiber endfaces directly cause attenuation. EasyCheck V2 provides standalone digital magnification for on-the-spot endface inspection without a smartphone or separate display — the ideal all-in-one inspector for single technicians working in the field.', ic: 'scope', tag: '', features: ['Integrated LCD display — no smartphone required', '200x digital magnification', 'Tip-loc interchangeable probe tips for SC/LC/FC/ST', 'PC and APC tip variants', 'USB rechargeable battery', 'Freeze-frame and image review capability'], applications: ['FTTx contractor field connector inspection', 'Data centre port acceptance testing', 'Standalone use in environments without smartphone access', 'Field QA without a separate display unit', 'Polished connector end-face quality verification'], specs: { 'Display': 'Integrated LCD', 'Magnification': '200x', 'Probe Tips': 'SC/LC/FC/ST (PC+APC)', 'Battery': 'USB rechargeable' }, standards: ['IEC 61300-3-35 (visual inspection reference)', 'RoHS'], related: ['AutoGet Wifi Endface Microscope', 'EasyGet Wifi Wireless Fiber Endface Microscope', 'Fiber Optic Cleaner Pen'] }
];

const namesToAdd = newProducts.map(p => p.name);
const filteredProducts = PRODUCTS.filter(p => !namesToAdd.includes(p.name));

for (let i = filteredProducts.length - 1; i >= 0; i--) {
  if (filteredProducts[i].name === 'Mode Conditioning Patchcord' ||
      filteredProducts[i].name === 'SC/APC ↔ SC/UPC Adapter Converter' ||
      filteredProducts[i].name === 'EasyGet Wifi Endface Microscope' ||
      filteredProducts[i].name === 'AutoGet Wifi Endface Microscope' ||
      filteredProducts[i].name === 'SMPTE Cable Assembly' ||
      filteredProducts[i].name === 'High Power Patch Cord' ||
      filteredProducts[i].name === 'CAT 6 Patch Cord' ||
      filteredProducts[i].name === 'CAT 6 Patch Panel' ||
      filteredProducts[i].name === 'Loop Back Patch cord' ||
      filteredProducts[i].name === 'Attenuator' ||
      filteredProducts[i].name === 'Bare Fiber Adapter') {
        filteredProducts.splice(i, 1);
  }
}

const finalProducts = [...filteredProducts, ...newProducts];

let newProductsStr = JSON.stringify(finalProducts, null, 2);
newProductsStr = newProductsStr.replace(/"(cat|name|desc|ic|tag|specs|features|applications|standards|related)":/g, '$1:');
const fullNewProductsStr = `const PRODUCTS = ${newProductsStr};`;

html = html.replace(productsStr, fullNewProductsStr);


// --- 10.2 Add R&D Solutions Industry Card ---
const rndCard = `<div class="reveal d-1" style="background:#18181b;padding:32px;border-radius:12px;border:1px solid rgba(255,255,255,.1);">
          <div style="margin-bottom:24px;color:#fff;">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31M14 9.3V1.99M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0M5.52 16h12.96"/></svg>
          </div>
          <h3 style="color:#fff;font-size:20px;margin-bottom:12px;">R&amp;D Solutions</h3>
          <p style="color:#a1a1aa;font-size:15px;line-height:1.6;margin-bottom:24px;">Fibre optic components and test equipment for university labs, research institutes, DRDO programmes, photonics R&amp;D, and optical communications research. Custom fibre assemblies, specialty connectors, bare fibre adapters, and precision measurement instruments available for academic and government research procurement.</p>
          <a href="#contact" class="btn-link" style="font-size:14px;">Contact Engineering →</a>
        </div>`;

if (!html.includes('R&amp;D Solutions')) {
  html = html.replace(
    /(<div class="reveal.*?CCTV &amp; Security Networks[\s\S]*?<\/div>)/,
    '$1\n        ' + rndCard
  );
}

// --- 10.3 Fix the Channel Partner Section ---
// Replace the mailto with an inline form
const channelPartnerCardRegex = /<h3 style="margin-bottom:8px;font-size:16px;">Channel Partner Programme<\/h3>[\s\S]*?<a href="mailto:info@pdrworld.com\?subject=Channel Partner Application" class="btn-link" style="font-size:14px;">Apply to Programme →<\/a>/;
const channelPartnerForm = `<h3 style="margin-bottom:8px;font-size:16px;">Channel Partner Programme</h3>
          <p style="font-size:14px;margin-bottom:20px;color:var(--muted);line-height:1.5;">Join India's leading fibre optic distribution network. Tiered pricing, sales support, and technical training for system integrators and regional distributors.</p>
          <form class="svc-form" onsubmit="event.preventDefault(); window.location.href='mailto:info@pdrworld.com?subject=Channel Partner Application&body=Name:%20'+this.name.value+'%0D%0ACompany:%20'+this.company.value+'%0D%0AEmail:%20'+this.email.value+'%0D%0APhone:%20'+this.phone.value+'%0D%0ARegion:%20'+this.region.value+'%0D%0ABusiness%20Type:%20'+this.btype.value+'%0D%0AMessage:%20'+this.msg.value;">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
              <input type="text" name="name" required placeholder="Full Name *" style="width:100%;padding:10px;border:1px solid #e4e4e7;border-radius:6px;font-size:13px;background:#f4f4f5;">
              <input type="text" name="company" required placeholder="Company Name *" style="width:100%;padding:10px;border:1px solid #e4e4e7;border-radius:6px;font-size:13px;background:#f4f4f5;">
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
              <input type="email" name="email" required placeholder="Email *" style="width:100%;padding:10px;border:1px solid #e4e4e7;border-radius:6px;font-size:13px;background:#f4f4f5;">
              <input type="tel" name="phone" placeholder="Phone" style="width:100%;padding:10px;border:1px solid #e4e4e7;border-radius:6px;font-size:13px;background:#f4f4f5;">
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
              <input type="text" name="region" required placeholder="Region / Territory *" style="width:100%;padding:10px;border:1px solid #e4e4e7;border-radius:6px;font-size:13px;background:#f4f4f5;">
              <select name="btype" style="width:100%;padding:10px;border:1px solid #e4e4e7;border-radius:6px;font-size:13px;background:#f4f4f5;">
                <option value="">Current Business Type</option>
                <option>ISP</option>
                <option>System Integrator</option>
                <option>Distributor</option>
                <option>Reseller</option>
                <option>Other</option>
              </select>
            </div>
            <textarea name="msg" placeholder="Message" style="width:100%;padding:10px;border:1px solid #e4e4e7;border-radius:6px;font-size:13px;background:#f4f4f5;min-height:60px;margin-bottom:12px;"></textarea>
            <button type="submit" class="btn btn-primary" style="font-size:13px;padding:8px 16px;">Apply to Programme</button>
          </form>`;

html = html.replace(channelPartnerCardRegex, channelPartnerForm);


// --- 10.4 Add Setup a Factory Inline Form ---
const factoryCardRegex = /<h3 style="margin-bottom:8px;font-size:16px;">Setup a Patchcord Factory<\/h3>[\s\S]*?<a href="mailto:info@pdrworld.com\?subject=Factory Setup Enquiry" class="btn-link" style="font-size:14px;">Request Factory Blueprint →<\/a>/;
const factoryForm = `<h3 style="margin-bottom:8px;font-size:16px;">Setup a Patchcord Factory</h3>
          <p style="font-size:14px;margin-bottom:20px;color:var(--muted);line-height:1.5;">Turnkey solutions for establishing your own fiber optic manufacturing line. Includes equipment supply, workflow design, and personnel training.</p>
          <form class="svc-form" onsubmit="event.preventDefault(); window.location.href='mailto:info@pdrworld.com?subject=Factory Setup Enquiry&body=Name:%20'+this.name.value+'%0D%0ACompany:%20'+this.company.value+'%0D%0ACountry:%20'+this.country.value+'%0D%0APhone:%20'+this.phone.value+'%0D%0AEmail:%20'+this.email.value+'%0D%0APlanned%20Scope:%20'+this.scope.value;">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
              <input type="text" name="name" required placeholder="Name *" style="width:100%;padding:10px;border:1px solid #e4e4e7;border-radius:6px;font-size:13px;background:#f4f4f5;">
              <input type="text" name="company" required placeholder="Company *" style="width:100%;padding:10px;border:1px solid #e4e4e7;border-radius:6px;font-size:13px;background:#f4f4f5;">
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:12px;">
              <input type="text" name="country" required placeholder="Country *" style="width:100%;padding:10px;border:1px solid #e4e4e7;border-radius:6px;font-size:13px;background:#f4f4f5;">
              <input type="tel" name="phone" placeholder="Phone" style="width:100%;padding:10px;border:1px solid #e4e4e7;border-radius:6px;font-size:13px;background:#f4f4f5;">
              <input type="email" name="email" required placeholder="Email *" style="width:100%;padding:10px;border:1px solid #e4e4e7;border-radius:6px;font-size:13px;background:#f4f4f5;">
            </div>
            <textarea name="scope" required placeholder="Brief description of planned factory scope *" style="width:100%;padding:10px;border:1px solid #e4e4e7;border-radius:6px;font-size:13px;background:#f4f4f5;min-height:60px;margin-bottom:12px;"></textarea>
            <button type="submit" class="btn btn-primary" style="font-size:13px;padding:8px 16px;">Request Factory Blueprint</button>
          </form>`;

html = html.replace(factoryCardRegex, factoryForm);


// --- 10.5 Add Video Gallery to Main Navigation ---
if (!html.includes('href="#video-gallery" class="nav-link">Video Gallery</a>')) {
  // Desktop nav
  html = html.replace(
    /<a href="#resources" class="nav-link">Resources<\/a>\s*<a href="#contact" class="btn btn-primary">/,
    '<a href="#resources" class="nav-link">Resources</a>\n        <a href="#video-gallery" class="nav-link">Video Gallery</a>\n        <a href="#contact" class="btn btn-primary">'
  );
  // Mobile nav
  html = html.replace(
    /<a href="#resources" class="nav-link" onclick="toggleMobileNav\(\)">Resources<\/a>\s*<a href="#contact" class="btn btn-primary" onclick="toggleMobileNav\(\)">/,
    '<a href="#resources" class="nav-link" onclick="toggleMobileNav()">Resources</a>\n      <a href="#video-gallery" class="nav-link" onclick="toggleMobileNav()">Video Gallery</a>\n      <a href="#contact" class="btn btn-primary" onclick="toggleMobileNav()">'
  );
}

// --- 10.8 Add Education Institutions to Trust Strip ---
if (!html.includes('Education &amp; Research')) {
  html = html.replace(
    /<div class="trust-item">ISPs &amp; Hyperscalers<\/div>\s*<\/div>/,
    '<div class="trust-item">ISPs &amp; Hyperscalers</div>\n        <div class="trust-item">Education &amp; Research</div>\n      </div>'
  );
}


// --- 10.9 Update Upcoming Events with Real Data ---
const oldEventsCards = /<h4 style="font-size:15px;margin-bottom:4px;color:#09090b;">Convergence India<\/h4>[\s\S]*?Singapore — Broadcast &amp; Media<\/p>\s*<\/div>\s*<div style="background:#fff;border:1px solid #e4e4e7;border-radius:8px;padding:12px 16px;min-width:200px;">\s*<h4 style="font-size:15px;margin-bottom:4px;color:#09090b;">DefExpo India<\/h4>[\s\S]*?<\/div>/;

const newEventsCards = `<h4 style="font-size:15px;margin-bottom:4px;color:#09090b;">Convergence India</h4>
          <p style="font-size:13px;color:#71717a;">New Delhi — Telecom &amp; FTTx</p>
          <p style="font-size:12px;color:#E11D48;margin-top:6px;font-weight:600;">January 2027</p>
        </div>
        <div style="background:#fff;border:1px solid #e4e4e7;border-radius:8px;padding:12px 16px;min-width:200px;">
          <h4 style="font-size:15px;margin-bottom:4px;color:#09090b;">BroadcastAsia</h4>
          <p style="font-size:13px;color:#71717a;">Singapore — Broadcast &amp; Media</p>
          <p style="font-size:12px;color:#E11D48;margin-top:6px;font-weight:600;">June 2027</p>
        </div>
        <div style="background:#fff;border:1px solid #e4e4e7;border-radius:8px;padding:12px 16px;min-width:200px;">
          <h4 style="font-size:15px;margin-bottom:4px;color:#09090b;">DefExpo India</h4>
          <p style="font-size:13px;color:#71717a;">Gandhinagar — Defence Networks</p>
          <p style="font-size:12px;color:#E11D48;margin-top:6px;font-weight:600;">October 2027</p>
        </div>`;

html = html.replace(oldEventsCards, newEventsCards);


// Write back to index.html
fs.writeFileSync(indexPath, html);
console.log("Success! index.html updated for user requests 10.1 to 10.10.");
