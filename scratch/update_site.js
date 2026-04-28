const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// TASK 1 & 2: Update PRODUCTS array
const productsRegex = /const PRODUCTS = \[\s*([\s\S]*?)\s*\];/;
const existingProductsStr = html.match(productsRegex)[0];

const newProductsStr = `const PRODUCTS = [
  // Passive
  {cat:'passive',name:'Armoured Patchcord',desc:'Flexible stainless steel-armoured patchcord for direct deployment in harsh environments without additional protective tube. Space-saving, maintenance-convenient, tamper-resistant.',ic:'patch',tag:'Hot', features: ['Flexible stainless steel armour tube', 'No additional protective tube required', 'Direct deployment in harsh environments', 'Safety and stability improvement for the whole system', 'Available in all connector types', 'SM and MM options'], applications: ['Industrial environments', 'Outdoor aerial deployments', 'Underground duct', 'Anywhere patchcord is exposed to mechanical stress'], standards: ['IEC 61754', 'RoHS'], related: ['Fiber Optic Patch Cords & Pigtails', 'CPRI Patchcord', 'Custom Cable Assembly']},
  {cat:'passive',name:'Rapid Push Cable Assembly',desc:'FTTXsmart — a flexible, pushable pre-terminated fiber optic drop solution for fast and reliable FTTx deployment. Reduces installation time and labor cost dramatically.',ic:'patch',tag:'Hot', features: ['Pre-terminated, no field polishing required', 'Pushable through microducts', 'Rapid on-site installation', 'Single-mode and multimode available', 'Configurable lengths', 'Indoor/outdoor versions'], applications: ['FTTx last-mile', 'MDU/building entry', 'Rapid deployment projects', 'ISP rollouts'], related: ['Fiber Optic Patch Cords & Pigtails', 'FAT Box 16-Way', 'FDB-32 Distribution Box']},
  {cat:'passive',name:'CPRI Patchcord',desc:'Light-weight yet robust outdoor waterproof fiber optic assembly. Water-proof, dust-proof, LSZH, corrosion-resistant with sealed feed-through fiber connection. Blind and secured mating is the inherent feature.',ic:'patch',tag:'Hot', features: ['Waterproof and dustproof rated', 'LSZH outer jacket', 'Corrosion-resistant hardware', 'Sealed feed-through connection', 'Blind and secured mating', 'ODVA/IP/FX/ODVA/PDLC/NSN connector options', 'Quality, reliability, repeatability, interchangeability'], applications: ['5G fronthaul and CPRI links', 'Cell-site outdoor connections', 'Metro outdoor deployments', 'In-building DAS networks'], standards: ['IEC 60529 IP67/IP68', 'IEC 60332 LSZH', 'RoHS'], related: ['Fiber Optic Patch Cords & Pigtails', 'Armoured Patchcord', 'MPO Cable Assembly']},
  {cat:'passive',name:'FanOut Patch Cord',desc:'Pre-assembled low-cost fan-out cable assembly. Customizable in cable diameter, jacket, length, fiber count, low-loss connectors, and interconnection configurations.',ic:'fan',tag:'Hot', features: ['Pre-assembled low cost', 'Customizable cable diameter', 'Customizable jacket type (PVC, LSZH)', 'Configurable fiber count', 'Low-loss pre-fabricated connectors', 'Multiple interconnection configurations'], applications: ['MPO/MTP breakout', 'Data centre high-density connectivity', 'Backbone-to-equipment connections', '40G/100G migration'], related: ['MPO Cable Assembly', '3U Cassette Splitter Rack', 'Rack-Mount Fiber Management']},
  {cat:'passive',name:'MPO Cable Assembly',desc:'High-density 8F / 12F / 24F multi-fibre with precision MT ferrule. Custom polarity.',ic:'mpo',tag:'Hot', specs: {'Fiber Count': '4/8/12/24/48/72/96/144F (custom available)', 'Fiber Mode': 'OS2 SM, OM3, OM4, OM5 MM', 'Polishing': 'PC / APC', 'Cable Types': 'Ribbon / Bare Ribbon / Round', 'Connector Gender': 'Male / Female', 'Housing Colors': 'Green / Yellow / Beige / Aqua', 'IL': '≤0.35dB typical (SM), ≤0.5dB (MM)', 'Return Loss': '≥50dB (PC), ≥70dB (APC)', 'Temperature': '-40°C to +75°C'}, features: ['Varieties of cable assemblies', 'Fiber option: OS2, OM3, OM4, OM5', 'Precision multifiber MT ferrule', 'Push-pull latching mechanism', 'Easy migration 10G→40G→100G→400G', 'Supports up to 144F; custom available', '100% factory terminated and tested'], applications: ['Telecom and datacom', 'Data centre high-density backbone', 'Optical fiber access networks', '40G/100G/400G fabric switching'], standards: ['IEC 61754-7', 'TIA-604 FOCIS-5', 'IEC 61300-3-35', 'RoHS']},
  {cat:'passive',name:'PLC Splitter',desc:'Planar lightwave-circuit splitters from 1×2 up to 1×64. Ultra-low insertion loss.',ic:'split',tag:'', specs: {'Split Ratios': '1×4, 1×8, 1×16, 1×32, 1×64; 2×4, 2×8, 2×16, 2×32', 'Wavelength': '1260–1650nm', 'IL': '≤7.3dB (1×8), ≤13.3dB (1×32)', 'PDL': '≤0.5dB', 'Return Loss': '≥55dB', 'Fiber Type': 'SM G.652D', 'Jacket': 'PVC or LSZH', 'Operating Temp': '-40°C to +85°C'}, features: ['Low insertion loss and PDL', 'High reliability and stability', 'High channel counts up to 1×64', 'Wide wavelength range 1260–1650nm', 'Large operating temperature range', 'Excellent environmental & mechanical stability'], applications: ['FTTx (FTTP/FTTH/FTTN/FTTC)', 'GPON/XGS-PON networks', 'Local Area Networks', 'CATV hybrid networks', 'Analog/Digital PON'], standards: ['Telcordia GR-1209', 'Telcordia GR-1221', 'RoHS']},
  {cat:'passive',name:'CWDM Mux / DeMux Module',desc:'Cost-effective CWDM multiplexer/demultiplexer for connecting and linking together multiple data centers. Passive wavelength routing across 18 ITU CWDM channels.',ic:'wave',tag:'', features: ['Passive design — no power required', '18 CWDM channels per ITU-T G.694.2', 'Channels: 1270nm–1610nm at 20nm spacing', 'Low insertion loss', 'High channel isolation', 'Rack-mount and LGX cassette formats'], specs: {'Channels': '2/4/8/16/18', 'Wavelength Range': '1270–1610nm', 'Channel Spacing': '20nm', 'Insertion Loss': '≤2.5dB typical', 'Isolation': '≥30dB', 'Connector': 'SC/APC or LC/APC', 'Format': 'Rack-mount, 1U or LGX cassette'}, standards: ['ITU-T G.694.2', 'Telcordia GR-1209', 'RoHS']},
  {cat:'passive',name:'DWDM Mux / DeMux Module',desc:'Dense WDM multiplexer/demultiplexer for robust, low-cost bandwidth upgrade on existing fiber infrastructure. Up to 96 channels on a single fiber pair.',ic:'wave',tag:'', features: ['Passive DWDM — no power required', 'Up to 96 channels on single fiber', '100GHz and 50GHz channel spacing options', 'Low insertion loss per channel', 'Supports coherent 100G/400G', 'Rack-mount and LGX cassette formats'], specs: {'Channels': '4/8/16/32/40/80/96', 'Wavelength Range': 'C-band 1528–1565nm', 'Channel Spacing': '100GHz / 50GHz', 'Insertion Loss': '≤4.5dB typical (8-ch)', 'Isolation': '≥25dB', 'Format': 'Rack-mount 1U or LGX'}, standards: ['ITU-T G.694.1', 'Telcordia GR-1209', 'RoHS']},
  {cat:'passive',name:'Fiber Optic Patch Cords & Pigtails',desc:'Industry-broad SKU range, 100% interferometry-tested before shipment.',ic:'patch',tag:'', specs: {'Connector Types': 'SC, LC, FC, ST, MTRJ, E2000, MU', 'Fiber Mode': 'SM OS2 (9/125), MM OM1/OM2/OM3/OM4/OM5', 'Polish': 'PC, UPC, APC', 'Jacket': 'PVC, LSZH, Armoured', 'Cable OD': '0.9mm, 2.0mm, 3.0mm', 'IL': '≤0.2dB (SM UPC), ≤0.15dB (SM APC)', 'Return Loss': '≥50dB (UPC), ≥70dB (APC)', 'Lengths': '0.5m to 100m (custom)'}, features: ['Broadest connector type selection', 'Tested to industry latest technology', '100% interferometry end-face tested', 'Optical loss report with every batch', 'Custom lengths, jackets and configurations'], applications: ['Telecom central offices', 'Data centres', 'FTTH termination', 'Test and measurement', 'Enterprise campus networks'], standards: ['IEC 61754-4 (SC)', 'IEC 61754-20 (LC)', 'IEC 61300-3-35', 'RoHS']},
  {cat:'passive',name:'Field-Installable Connector',desc:'Fast field-assembly optical connectors, tool-light installation.',ic:'conn',tag:''},
  {cat:'passive',name:'Mode Conditioning Patchcord',desc:'MCP / Gigabit launch — single-mode TX into multimode legacy.',ic:'patch',tag:''},
  {cat:'passive',name:'Loop Back Patch cord',desc:'Network-level loopback testing accessory, multiple fibre types.',ic:'loop',tag:''},
  {cat:'passive',name:'SC/APC ↔ SC/UPC Adapter Converter',desc:'Hybrid fixed-type single-mode 9/125 adapter. SC/APC Female to SC/UPC Male. Zero-insertion-loss (0dB) — eliminates connector mismatch penalty.',ic:'adapt',tag:''},
  {cat:'passive',name:'SMPTE Cable Assembly',desc:'Broadcast-grade ruggedised camera cable for HDTV infrastructure.',ic:'cable',tag:''},
  {cat:'passive',name:'Bare Fiber Adapter',desc:'Couples bare optical fibre to fibre-optic equipment for testing.',ic:'adapt',tag:''},
  {cat:'passive',name:'Attenuator',desc:'Buildout attenuators — superior single-mode in-line attenuation.',ic:'wave',tag:''},
  {cat:'passive',name:'1.6mm Patchcord',desc:'High-density patchcord for telecom and DC. Simplex / duplex, multi-connector.',ic:'patch',tag:'New', specs: {'Outer Diameter': '1.6mm nominal', 'Config': 'Simplex, Zip Duplex', 'Connectors': 'SC, FC, ST, LC, MTRJ', 'Jacket': 'PVC, LSZH', 'Fiber': 'SM OS2, MM OM3/OM4', 'IL': '≤0.2dB', 'Return Loss': '≥50dB UPC', 'Bend Radius': '10mm (min)'}, features: ['60% smaller footprint vs 3.0mm', 'High-density network applications', 'Full connector type range', 'PVC and LSZH jacket options', 'Easy identification by color-coding'], applications: ['Telecom high-density panels', 'Data centre front-of-rack', 'Metropolitan access networks', 'FTTX aggregation points'], related: ['MPO Cable Assembly', 'Fiber Optic Patch Cords & Pigtails', 'Rack-Mount Fiber Management']},
  {cat:'passive',name:'CAT 6 Patch Cord',desc:'High-speed structured-cabling copper patchcord, ISO/IEC compliant.',ic:'cable',tag:''},
  {cat:'passive',name:'CAT 6 Patch Panel',desc:'24-port distribution panel for high-speed network applications.',ic:'rack',tag:''},

  // Active
  {cat:'active',name:'Fiber Optic Transceivers (SFP)',desc:'High-performance, cost-effective SFP modules for serial optical data.',ic:'sfp',tag:'Hot'},
  {cat:'active',name:'Active Optical Cable',desc:'100G QSFP28 AOC — reliable, cost-effective transceiver alternative.',ic:'cable',tag:''},
  {cat:'active',name:'Direct Attached Cable',desc:'SFP-10G-DAC hot-swappable Twinax direct-attach copper assembly.',ic:'cable',tag:''},
  {cat:'active',name:'HD-SDI Optical Transceiver',desc:'Broadcasting-grade SD/HD/3G-SDI interconversion for broadcast environments.',ic:'sfp',tag:''},
  {cat:'active',name:'Optical Line Protection (OLP)',desc:'Automatic spare-fibre route switching for backbone redundancy.',ic:'olp',tag:''},
  {cat:'active',name:'Optical Bypass Switch',desc:'Automatic optical-path bypass on protected device failure.',ic:'olp',tag:''},
  {cat:'active',name:'PoE Injector',desc:'Power-over-Ethernet injection for IP/PoE network deployments.',ic:'sfp',tag:''},

  // Cable Management
  {cat:'cable',name:'Optical Distribution Frame (ODF)',desc:'Multi-purpose wall-mount fibre enclosures, ABS plastic build.',ic:'rack',tag:''},
  {cat:'cable',name:'Rack-Mount Fiber Management',desc:'19" rack enclosures — modular, scalable, customisable density.',ic:'rack',tag:'Hot'},
  {cat:'cable',name:'Fiber Termination & Distribution Box',desc:'Reliable long-life protection for fibre joints and distribution.',ic:'box',tag:''},
  {cat:'cable',name:'Wall Mount Enclosure FTB-R24',desc:'Multi-purpose wall-mount fibre-optic enclosure, ABS construction.',ic:'box',tag:''},
  {cat:'cable',name:'Termination Box TB-C08',desc:'Snap-in compact termination box for data communication networks.',ic:'box',tag:''},
  {cat:'cable',name:'Termination Box DIN-FB',desc:'Compact FDB used at building premises — residential & office.',ic:'box',tag:''},
  {cat:'cable',name:'Termination Box FTB-08B-2',desc:'Compact snap-in fiber optic termination box for data communication networks, residential and office premises. Rugged ABS enclosure.',ic:'box',tag:''},
  {cat:'cable',name:'Optical Fiber Wall Mount Enclosure',desc:'Two-door wall-mounted fibre optic enclosure — cost-effective, secure method of terminating fibre. Ideal for cross-connection management in telecom rooms.',ic:'box',tag:''},
  {cat:'cable',name:'Heat Shrink Splice Closure',desc:'Heat-shrink sealed — aerial, pedestal, buried, manhole environments.',ic:'closure',tag:''},
  {cat:'cable',name:'Splitter Closure GJS 2016',desc:'Mechanical-seal closure with oval cable port entrance.',ic:'closure',tag:''},
  {cat:'cable',name:'FAT Box 16-Way',desc:'Fibre Access Terminal — building-premises termination point.',ic:'box',tag:''},
  {cat:'cable',name:'Home Termination Box (HTB)',desc:'Installed inside residential or commercial premises to provide fiber termination, housing, and distribution for FTTx last-mile networks.',ic:'box',tag:''},
  {cat:'cable',name:'FDB-32 Distribution Box',desc:'Connects drop and feeder cable as termination point in FTTx.',ic:'box',tag:''},
  {cat:'cable',name:'3U Cassette Splitter Rack',desc:'19" rack-mount cassette splitter for GPON / FTTx infrastructure.',ic:'rack',tag:'Hot'},

  // Test & Measuring
  {cat:'test',name:'Mini Optical Power Meter',desc:'Essential portable instrument for fibre install / maintenance crews.',ic:'meter',tag:''},
  {cat:'test',name:'5-in-1 Optical Power Meter',desc:'APM80N multi-function meter — power, VFL, source, microscope.',ic:'meter',tag:'Hot'},
  {cat:'test',name:'PON Power Meter',desc:'Pass-through 1310/1490/1550 nm measurement — GPON troubleshooting.',ic:'meter',tag:''},
  {cat:'test',name:'Variable Fiber Attenuator',desc:'Calibrated 1310/1490/1550 nm — single-mode lab-grade.',ic:'meter',tag:''},
  {cat:'test',name:'Laser Source',desc:'Stable optical source with calibration certificate.',ic:'laser',tag:''},
  {cat:'test',name:'Optical Talk Set',desc:'Field installer voice communication over fibre under test.',ic:'mic',tag:''},
  {cat:'test',name:'E1 BER Tester',desc:'Compact handheld E1-line bit-error-rate test instrument.',ic:'meter',tag:''},
  {cat:'test',name:'Return Loss Meter',desc:'TwoWay polarity + return-loss meter, innovative dual-function design.',ic:'meter',tag:''},
  {cat:'test',name:'AutoGet Wifi Endface Microscope',desc:'Intelligent wireless fibre-endface inspection — auto pass/fail.',ic:'scope',tag:''},
  {cat:'test',name:'EasyGet Wifi Endface Microscope',desc:'Wireless fibre-endface inspection for connector contamination.',ic:'scope',tag:''},
  {cat:'test',name:'EasyCheck V2 Endface Inspector',desc:'Digital fibre-endface inspector — IEC pass/fail evaluation.',ic:'scope',tag:''},
  {cat:'test',name:'Fusion Splicer PDR618H',desc:'Handheld compact splicer — 8s splice time, 26s tube heating, 5800mAh pluggable Li-battery. Field-ready and lightweight.',ic:'meter',tag:'Hot', specs: {'Splice Time': '8 seconds', 'Tube Heating Time': '26 seconds', 'Battery': '5800mAh pluggable Li-ion', 'Typical Splice Loss': '≤0.02dB (SM), ≤0.01dB (MM)', 'Display': 'Large color touchscreen', 'Fiber Holder': '250μm / 900μm / 3.0mm', 'Weight': 'Compact field design', 'IP Rating': 'IP54 splash-proof'}, features: ['8-second splice cycle', '26-second heat shrink', 'Pluggable 5800mAh battery', 'Lightweight field-ready design', 'Large color touch display', 'Auto focus / auto fiber alignment', 'Real-time splice loss estimation'], applications: ['FTTx feeder and distribution cable jointing', 'Data centre trunk cable splicing', 'Outdoor aerial and buried splicing', 'Restoration and emergency repair'], related: ['Mini OTDR PDR4402S', 'Fiber Cleaver CLV-B1', '5-in-1 Optical Power Meter']},
  {cat:'test',name:'Mini OTDR PDR4402S',desc:'On-line mini pro-OTDR for FTTx and data centre installation and maintenance. Compact, precise, field-portable.',ic:'scope',tag:'', specs: {'Wavelengths': '1310/1550nm', 'Dynamic Range': '22/20dB (SM)', 'Distance Range': '0.1–80km', 'Dead Zone': '≤1m (event), ≤4m (attenuation)', 'Resolution': '0.125m', 'Interface': 'SC/APC or SC/UPC', 'Battery': 'Rechargeable Li-ion 6h operation', 'Display': 'Color LCD touchscreen'}, features: ['Online live-network measurement (PON mode)', 'Compact and lightweight', 'Accurate event and loss detection', 'Auto analysis with pass/fail reporting', 'USB data export', 'Compatible with FTTx and data centre environments'], applications: ['FTTx installation and acceptance testing', 'Data centre dark fiber characterization', 'Network maintenance and fault location', 'Contractor field testing'], related: ['Fusion Splicer PDR618H', '5-in-1 Optical Power Meter', 'AutoGet WiFi Endface Microscope']},

  // Specialty
  {cat:'specialty',name:'High Power Patch Cord',desc:'200–1000 core ferrule with air-gap technology — high-power laser delivery.',ic:'patch',tag:'Niche'},
  {cat:'specialty',name:'Custom Cable Assembly',desc:'Engineer-to-spec assemblies — jacket, length, polarity, breakout.',ic:'cable',tag:''},

  // Tools
  {cat:'tools',name:'Fiber Cleaver CLV-B1',desc:'Precision cleaver for fast-connector / 125 µm bare fibre.',ic:'tool',tag:''},
  {cat:'tools',name:'Fiber Optic Cleaner Pen',desc:'Female-connector ferrule cleaning — essential field tool.',ic:'tool',tag:''},
  {cat:'tools',name:'Fiber Optic Cleaner Pen — MPO',desc:'High-performance MPO/MTP ferrule end-face cleaner.',ic:'tool',tag:''},
  {cat:'tools',name:'Cassette Cleaner',desc:'Cassette cleaning system for multi-format connector maintenance.',ic:'tool',tag:''},
  {cat:'tools',name:'Cold Shrink Sleeve',desc:'Environmental protection sleeve for electrical-industry cabling.',ic:'tool',tag:''}
];`;
html = html.replace(existingProductsStr, newProductsStr);


// TASK 1 & 7: Modal HTML and Styling
const modalHTML = `

<!-- Product Detail Modal -->
<div id="product-modal-backdrop" class="modal-backdrop" onclick="closeProductModal()"></div>
<div id="product-modal" class="product-modal">
  <div class="product-modal-header">
    <div style="display:flex;align-items:center;gap:12px;">
      <div class="brand-mini" style="font-family:'Manrope',sans-serif;font-weight:800;font-size:16px;color:#fff;">PDR World</div>
      <span id="pm-cat" style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#fff;background:rgba(225,29,72,.2);padding:4px 10px;border-radius:99px;border:1px solid rgba(225,29,72,.3)">Category</span>
    </div>
    <button class="close-btn" aria-label="Close" onclick="closeProductModal()">×</button>
  </div>
  <div class="product-modal-body">
    <h2 id="pm-name" style="color:#fff;font-size:28px;margin-bottom:12px;">Product Name</h2>
    <p id="pm-desc" style="color:#a1a1aa;font-size:15px;line-height:1.6;margin-bottom:24px;">Description</p>
    
    <div id="pm-features-sec" style="margin-bottom:24px;display:none;">
      <h3 style="color:#fff;font-size:16px;margin-bottom:12px;border-bottom:1px solid rgba(255,255,255,.1);padding-bottom:6px;">Key Features</h3>
      <ul id="pm-features" style="margin:0;padding-left:20px;color:#a1a1aa;font-size:14px;line-height:1.6;display:flex;flex-direction:column;gap:6px;"></ul>
    </div>

    <div id="pm-apps-sec" style="margin-bottom:24px;display:none;">
      <h3 style="color:#fff;font-size:16px;margin-bottom:12px;border-bottom:1px solid rgba(255,255,255,.1);padding-bottom:6px;">Applications</h3>
      <ul id="pm-apps" style="margin:0;padding-left:20px;color:#a1a1aa;font-size:14px;line-height:1.6;display:flex;flex-direction:column;gap:6px;"></ul>
    </div>

    <div id="pm-specs-sec" style="margin-bottom:32px;display:none;">
      <h3 style="color:#fff;font-size:16px;margin-bottom:12px;border-bottom:1px solid rgba(255,255,255,.1);padding-bottom:6px;">Technical Specifications</h3>
      <div id="pm-specs" style="display:grid;grid-template-columns:1fr;gap:2px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:8px;overflow:hidden;"></div>
    </div>

    <div id="pm-stds-sec" style="margin-bottom:32px;display:none;">
      <h3 style="color:#fff;font-size:14px;margin-bottom:12px;">Standards & Certifications</h3>
      <div id="pm-stds" style="display:flex;flex-wrap:wrap;gap:8px;"></div>
    </div>

    <div style="display:flex;gap:12px;margin-bottom:40px;flex-wrap:wrap;">
      <a id="pm-btn-rfq" href="#contact" class="btn btn-primary" onclick="closeProductModal();" style="flex:1;min-width:200px;">Request Quote</a>
      <a id="pm-btn-ds" href="#" class="btn btn-ghost" style="flex:1;min-width:200px;">Request Datasheet</a>
    </div>

    <div id="pm-related-sec" style="margin-bottom:24px;display:none;">
      <h3 style="color:#fff;font-size:16px;margin-bottom:16px;border-bottom:1px solid rgba(255,255,255,.1);padding-bottom:6px;">Related Products</h3>
      <div id="pm-related" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;"></div>
    </div>
  </div>
</div>
`;

const modalCSS = `
    .product-modal {
      position:fixed;top:0;right:0;bottom:0;width:min(560px,95vw);background:var(--bg-2);z-index:2001;
      transform:translateX(100%);transition:transform 0.4s var(--ease);box-shadow:-10px 0 40px rgba(0,0,0,0.5);
      display:flex;flex-direction:column;overflow:hidden;
    }
    .product-modal.open { transform:translateX(0); }
    .product-modal-header {
      padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.08);display:flex;justify-content:space-between;align-items:center;
      background:rgba(24,24,27,0.95);backdrop-filter:blur(10px);z-index:10;
    }
    .product-modal-header .close-btn { background:none;border:none;color:#a1a1aa;font-size:28px;cursor:pointer;line-height:1; }
    .product-modal-header .close-btn:hover { color:var(--accent); }
    .product-modal-body { padding:32px 24px;overflow-y:auto;flex:1; }
    .spec-row { display:flex;background:rgba(0,0,0,0.3);padding:10px 14px;gap:12px; }
    .spec-row:nth-child(even) { background:transparent; }
    .spec-key { font-weight:600;color:#fff;font-size:13px;width:140px;flex-shrink:0; }
    .spec-val { color:#a1a1aa;font-size:13px;flex:1; }
    .related-card { background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:16px;cursor:pointer;transition:all 0.2s; }
    .related-card:hover { background:rgba(255,255,255,0.06);border-color:rgba(255,255,255,0.2);transform:translateY(-2px); }
    @media(max-width:600px){
      .product-modal { width:100vw; }
      .spec-row { flex-direction:column;gap:4px;padding:12px; }
      .spec-key { width:auto; }
    }
`;

html = html.replace('<!-- Legal Modals -->', modalHTML + '\n<!-- Legal Modals -->');
html = html.replace('</style>', modalCSS + '\n</style>');

// Modify renderProducts
const newRenderProducts = `function renderProducts(filter='all', search='', stdFilter='') {
  const grid = document.getElementById('prodGrid');
  const term = (search || '').trim().toLowerCase();
  const std = (stdFilter || '').trim();
  
  const list = PRODUCTS.filter(p => {
    const matchCat = (filter === 'all' || p.cat === filter);
    let matchTerm = true;
    if (term) {
      const searchable = (p.name + ' ' + p.desc + ' ' + (p.features ? p.features.join(' ') : '') + ' ' + (p.applications ? p.applications.join(' ') : '')).toLowerCase();
      matchTerm = searchable.includes(term);
    }
    let matchStd = true;
    if (std) {
      matchStd = p.standards && p.standards.some(s => s.includes(std));
    }
    return matchCat && matchTerm && matchStd;
  });
  
  if (!list.length) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--muted)">No products match your search. <a href="#contact" style="color:var(--accent);font-weight:600">Request custom build →</a></div>';
    return;
  }
  
  grid.innerHTML = list.map((p, i) => \`
    <article class="prod-card" style="animation:reveal-up .5s \${(i%8)*30}ms backwards var(--ease); cursor:pointer;" onclick="openProductModal('\${p.name.replace(/'/g, "\\\\'")}')">
      <div class="prod-art">
        <div class="glow"></div>
        \${p.tag ? '<span class="prod-tag">' + p.tag + '</span>' : ''}
        \${ICONS[p.ic] || ICONS.cable}
      </div>
      <div class="prod-body">
        <h3>\${p.name}</h3>
        <p>\${p.desc}</p>
        <div class="prod-cta">
          <span class="spec">\${({ passive: 'Passive', active: 'Active', cable: 'Cable Mgmt', test: 'Test/Measure', specialty: 'Specialty', tools: 'Tools' })[p.cat]}</span>
          <button class="arrow" style="background:none;border:none;cursor:pointer;padding:0;font-family:inherit;color:var(--ink);">View details →</button>
        </div>
      </div>
    </article>
  \`).join('');
}

function openProductModal(name) {
  const p = PRODUCTS.find(x => x.name === name);
  if(!p) return;
  
  document.getElementById('pm-cat').textContent = ({ passive: 'Passive', active: 'Active', cable: 'Cable Mgmt', test: 'Test/Measure', specialty: 'Specialty', tools: 'Tools' })[p.cat];
  document.getElementById('pm-name').textContent = p.name;
  document.getElementById('pm-desc').textContent = p.desc;
  
  const fSec = document.getElementById('pm-features-sec');
  const fUl = document.getElementById('pm-features');
  if(p.features && p.features.length) {
    fUl.innerHTML = p.features.map(f => '<li>' + f + '</li>').join('');
    fSec.style.display = 'block';
  } else { fSec.style.display = 'none'; }
  
  const aSec = document.getElementById('pm-apps-sec');
  const aUl = document.getElementById('pm-apps');
  if(p.applications && p.applications.length) {
    aUl.innerHTML = p.applications.map(a => '<li>' + a + '</li>').join('');
    aSec.style.display = 'block';
  } else { aSec.style.display = 'none'; }
  
  const sSec = document.getElementById('pm-specs-sec');
  const sDiv = document.getElementById('pm-specs');
  if(p.specs && Object.keys(p.specs).length) {
    sDiv.innerHTML = Object.entries(p.specs).map(([k,v]) => '<div class="spec-row"><div class="spec-key">'+k+'</div><div class="spec-val">'+v+'</div></div>').join('');
    sSec.style.display = 'block';
  } else { sSec.style.display = 'none'; }
  
  const stdSec = document.getElementById('pm-stds-sec');
  const stdDiv = document.getElementById('pm-stds');
  if(p.standards && p.standards.length) {
    stdDiv.innerHTML = p.standards.map(s => '<span style="font-size:11px;padding:4px 10px;border-radius:99px;background:rgba(255,255,255,0.08);color:#a1a1aa;border:1px solid rgba(255,255,255,0.1);">'+s+'</span>').join('');
    stdSec.style.display = 'block';
  } else { stdSec.style.display = 'none'; }
  
  const relSec = document.getElementById('pm-related-sec');
  const relDiv = document.getElementById('pm-related');
  if(p.related && p.related.length) {
    relDiv.innerHTML = p.related.map(rName => {
      const r = PRODUCTS.find(x => x.name === rName);
      if(!r) return '';
      return '<div class="related-card" onclick="openProductModal(\\''+r.name.replace(/'/g, "\\\\'")+'\\')"><h4 style="color:#fff;font-size:14px;margin-bottom:4px;">'+r.name+'</h4><p style="color:#a1a1aa;font-size:12px;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">'+r.desc+'</p></div>';
    }).join('');
    relSec.style.display = 'block';
  } else { relSec.style.display = 'none'; }
  
  const btnRfq = document.getElementById('pm-btn-rfq');
  btnRfq.onclick = () => {
    closeProductModal();
    setTimeout(() => {
      const ta = document.querySelector('textarea[name="spec"]');
      if(ta){
        ta.value = 'Interested in: ' + p.name + '\\n\\nQuantity:\\nFiber type / connector:\\nLength / polarity:\\nDeadline:\\n';
        ta.focus();
      }
    }, 400);
  };
  
  const btnDs = document.getElementById('pm-btn-ds');
  btnDs.href = 'mailto:info@pdrworld.com?subject=Datasheet Request: ' + encodeURIComponent(p.name);
  
  document.getElementById('product-modal-backdrop').classList.add('open');
  document.getElementById('product-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('product-modal-backdrop').classList.remove('open');
  document.getElementById('product-modal').classList.remove('open');
  if(!document.querySelector('.legal-modal.open')) {
    document.body.style.overflow = '';
  }
}
`;

// Replace old renderProducts code:
html = html.replace(/function renderProducts[\s\S]*?renderProducts\(\);/, newRenderProducts + '\nrenderProducts();');

// Event listener fixes
const chipListeners = `
document.getElementById('prodChips').addEventListener('click', e=>{
  const chip = e.target.closest('.chip'); if(!chip) return;
  if(chip.dataset.filter === 'IEC' || chip.dataset.filter === 'Telcordia' || chip.dataset.filter === 'MIL-STD' || chip.dataset.filter === 'TEC') {
    // It's a standard filter
    document.querySelectorAll('.std-chip').forEach(c=>c.classList.remove('active'));
    if(activeStd === chip.dataset.filter) {
      activeStd = ''; // toggle off
    } else {
      chip.classList.add('active');
      activeStd = chip.dataset.filter;
    }
  } else {
    // Normal category filter
    document.querySelectorAll('#prodChips .chip:not(.std-chip)').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    activeFilter = chip.dataset.filter;
  }
  renderProducts(activeFilter, searchTerm, activeStd);
});
`;

html = html.replace("let activeFilter='all', searchTerm='';", "let activeFilter='all', searchTerm='', activeStd='';");
html = html.replace(/document\.getElementById\('prodChips'\)\.addEventListener\([\s\S]*?\}\);/, chipListeners);
html = html.replace("renderProducts(activeFilter, searchTerm);", "renderProducts(activeFilter, searchTerm, activeStd);");

// Add standards chips to HTML
html = html.replace('<div class="search-box">', '<div class="chips" style="margin-right:auto;margin-left:16px;border-left:1px solid var(--line);padding-left:16px;">\n        <button class="chip std-chip" data-filter="IEC">IEC</button>\n        <button class="chip std-chip" data-filter="Telcordia">Telcordia</button>\n        <button class="chip std-chip" data-filter="MIL-STD">MIL-STD</button>\n        <button class="chip std-chip" data-filter="TEC">TEC</button>\n      </div>\n      <div class="search-box">');

// TASK 3: Add Featured Products section
const featuredHtml = `
<!-- ===================== FEATURED PRODUCTS ===================== -->
<section class="section sec-muted" id="featured" style="padding-top:60px;padding-bottom:60px;">
  <div class="container">
    <div class="sec-head reveal">
      <span class="eyebrow">FEATURED INNOVATIONS</span>
      <h2>Engineered for modern networks.</h2>
    </div>
    <div style="display:flex;gap:16px;overflow-x:auto;padding-bottom:24px;scroll-snap-type:x mandatory;">
      <div class="prod-card" style="min-width:300px;scroll-snap-align:start;cursor:pointer;border-top:3px solid transparent;" onmouseover="this.style.borderTopColor='var(--accent)'" onmouseout="this.style.borderTopColor='transparent'" onclick="openProductModal('Armoured Patchcord')">
        <div class="prod-body" style="background:#fff;border-radius:12px;padding:24px;height:100%;">
          <span class="prod-tag" style="position:static;display:inline-block;color:var(--accent);background:var(--accent-soft);margin-bottom:12px;">Hot</span>
          <h3>Armoured Patchcord</h3>
          <p style="margin-bottom:16px;">Flexible stainless steel-armoured patchcord for direct deployment.</p>
          <button class="btn btn-outline" style="width:100%;">View Details</button>
        </div>
      </div>
      <div class="prod-card" style="min-width:300px;scroll-snap-align:start;cursor:pointer;border-top:3px solid transparent;" onmouseover="this.style.borderTopColor='var(--accent)'" onmouseout="this.style.borderTopColor='transparent'" onclick="openProductModal('Rapid Push Cable Assembly')">
        <div class="prod-body" style="background:#fff;border-radius:12px;padding:24px;height:100%;">
          <span class="prod-tag" style="position:static;display:inline-block;color:var(--accent);background:var(--accent-soft);margin-bottom:12px;">Hot</span>
          <h3>Rapid Push Cable Assembly</h3>
          <p style="margin-bottom:16px;">Pushable pre-terminated fiber optic drop solution for FTTx.</p>
          <button class="btn btn-outline" style="width:100%;">View Details</button>
        </div>
      </div>
      <div class="prod-card" style="min-width:300px;scroll-snap-align:start;cursor:pointer;border-top:3px solid transparent;" onmouseover="this.style.borderTopColor='var(--accent)'" onmouseout="this.style.borderTopColor='transparent'" onclick="openProductModal('3U Cassette Splitter Rack')">
        <div class="prod-body" style="background:#fff;border-radius:12px;padding:24px;height:100%;">
          <span class="prod-tag" style="position:static;display:inline-block;color:var(--accent);background:var(--accent-soft);margin-bottom:12px;">Hot</span>
          <h3>3U Cassette Splitter Rack</h3>
          <p style="margin-bottom:16px;">19" rack-mount cassette splitter for GPON / FTTx infrastructure.</p>
          <button class="btn btn-outline" style="width:100%;">View Details</button>
        </div>
      </div>
      <div class="prod-card" style="min-width:300px;scroll-snap-align:start;cursor:pointer;border-top:3px solid transparent;" onmouseover="this.style.borderTopColor='var(--accent)'" onmouseout="this.style.borderTopColor='transparent'" onclick="openProductModal('FanOut Patch Cord')">
        <div class="prod-body" style="background:#fff;border-radius:12px;padding:24px;height:100%;">
          <span class="prod-tag" style="position:static;display:inline-block;color:var(--accent);background:var(--accent-soft);margin-bottom:12px;">Hot</span>
          <h3>FanOut Patch Cord</h3>
          <p style="margin-bottom:16px;">Pre-assembled low-cost fan-out cable assembly.</p>
          <button class="btn btn-outline" style="width:100%;">View Details</button>
        </div>
      </div>
      <div class="prod-card" style="min-width:300px;scroll-snap-align:start;cursor:pointer;border-top:3px solid transparent;" onmouseover="this.style.borderTopColor='var(--accent)'" onmouseout="this.style.borderTopColor='transparent'" onclick="openProductModal('1.6mm Patchcord')">
        <div class="prod-body" style="background:#fff;border-radius:12px;padding:24px;height:100%;">
          <span class="prod-tag" style="position:static;display:inline-block;color:var(--accent);background:var(--accent-soft);margin-bottom:12px;">New</span>
          <h3>1.6mm Patchcord</h3>
          <p style="margin-bottom:16px;">High-density patchcord for telecom and data centre applications.</p>
          <button class="btn btn-outline" style="width:100%;">View Details</button>
        </div>
      </div>
      <div class="prod-card" style="min-width:300px;scroll-snap-align:start;cursor:pointer;border-top:3px solid transparent;" onmouseover="this.style.borderTopColor='var(--accent)'" onmouseout="this.style.borderTopColor='transparent'" onclick="openProductModal('CPRI Patchcord')">
        <div class="prod-body" style="background:#fff;border-radius:12px;padding:24px;height:100%;">
          <span class="prod-tag" style="position:static;display:inline-block;color:var(--accent);background:var(--accent-soft);margin-bottom:12px;">Hot</span>
          <h3>CPRI Patchcord</h3>
          <p style="margin-bottom:16px;">Outdoor waterproof assembly for 5G fronthaul and cell sites.</p>
          <button class="btn btn-outline" style="width:100%;">View Details</button>
        </div>
      </div>
    </div>
  </div>
</section>
`;

html = html.replace('<!-- ===================== INDUSTRIES ===================== -->', featuredHtml + '\n<!-- ===================== INDUSTRIES ===================== -->');

// TASK 4: Fix video gallery
html = html.replace('<span>Latest Video 2 (YouTube API Placeholder)</span>', '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=UUUCTOAYCstGJNZulaOF0TXGlg&index=2" loading="lazy" allowfullscreen frameborder="0"></iframe>');
html = html.replace('<span>Latest Video 3 (YouTube API Placeholder)</span>', '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=UUUCTOAYCstGJNZulaOF0TXGlg&index=3" loading="lazy" allowfullscreen frameborder="0"></iframe>');

// TASK 6.9: RFQ dropdown additions
html = html.replace('<option>Patchcords / Pigtails</option>', '<option>Patchcords / Pigtails</option>\n              <option>Armoured / CPRI / Specialty Patchcords</option>');
html = html.replace('<option>CWDM / DWDM Modules</option>', '<option>CWDM Modules</option>\n              <option>DWDM Modules</option>');

// TASK 6.10 & 6.11: Content additions
html = html.replace("India's longstanding manufacturer of active &amp; passive fiber optic infrastructure", "<strong>Together in Progress</strong> — India's longstanding manufacturer of active &amp; passive fiber optic infrastructure");
html = html.replace("educational institutions and global distributors — directly from our integrated Mumbai facility.", "educational institutions and global distributors — directly from our integrated Mumbai facility. PDR's end users and OEM customers include world leaders in optical communications — a trust that has only deepened over 40 years of consistent delivery.");

// TASK 7.13: Mega Menu Subcategory Hints
html = html.replace('<span>Patchcords · Splitters · WDM · Adapters · Connectors</span>', '<span>Patchcords · Armoured · CPRI · FanOut · Rapid Push · Splitters · WDM · Adapters</span>');

// Global escape key for product modal
html = html.replace("if (e.key === 'Escape') closeAllModals();", "if (e.key === 'Escape') { closeAllModals(); closeProductModal(); }");

fs.writeFileSync('index.html', html);
console.log('Update complete.');
