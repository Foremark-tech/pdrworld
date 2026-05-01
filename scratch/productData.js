module.exports = {
  'high-power-patchcord': {
    cat: 'Specialty Products',
    name: 'High-Power Patchcord',
    feats: [
      "Designed for laser delivery and sensing",
      "High power handling capacity up to 50W",
      "Customizable lengths and connector options"
    ],
    specs: {
      "Power Handling": "1W to 50W",
      "Fiber Type": "Single-mode (SM) / Specialty",
      "Connector Options": "SMA, FC, LC"
    },
    apps: ["Laser Delivery", "Industrial Sensing", "Medical Equipment"]
  },
  'cleaner-pen': {
    cat: 'Maintenance Tools',
    name: 'Fiber Optic Cleaner Pen',
    feats: [
      "One-click cleaning mechanism",
      "Extendable nozzle for recessed connectors",
      "Lint-free anti-static microfiber fabric"
    ],
    specs: {
      "Ferrule Compatibility": "1.25mm (LC/MU) / 2.5mm (SC/FC/ST)",
      "Clean Cycles": "800+ cleans per pen",
      "Application": "In-adapter or standalone connectors"
    },
    apps: ["Field Maintenance", "Data Centre Operations", "FTTx Installations"]
  },
  'cassette-cleaner': {
    cat: 'Maintenance Tools',
    name: 'Cassette Cleaner',
    feats: [
      "High-performance dry cleaning technology",
      "Replaceable cleaning tape reels",
      "Anti-static properties prevent dust re-accumulation"
    ],
    specs: {
      "Clean Cycles": "400+ cleans per reel",
      "Compatibility": "SC, FC, ST, LC, MU, MPO, MTRJ",
      "Material": "Ultra-clean micro-fiber cloth"
    },
    apps: ["Lab Testing Environments", "Production Lines", "Optical Network Maintenance"]
  },
  'mpo-cleaner': {
    cat: 'Maintenance Tools',
    name: 'Fiber Optic Cleaner Pen MPO',
    feats: [
      "Designed specifically for multi-fiber connectors",
      "Cleans both male (with pins) and female (without pins) MPO/MTP",
      "Easy pushing motion engagement"
    ],
    specs: {
      "Connector Type": "MPO / MTP",
      "Clean Cycles": "600+ cleans",
      "Cleaning Action": "Dry cloth sweep"
    },
    apps: ["Hyperscale Data Centres", "40G/100G/400G Networks", "Backbone Cabling"]
  },
  'vfl': {
    cat: 'Maintenance Tools',
    name: 'VFL — Visual Fault Locator',
    feats: [
      "Bright 650nm visible red laser",
      "Continuous and flashing modes",
      "Ruggedized metal housing for field use"
    ],
    specs: {
      "Output Power": "1mW (Standard)",
      "Wavelength": "650nm",
      "Detection Range": "Up to 10km"
    },
    apps: ["Fault Location", "Continuity Testing", "Fiber Identification"]
  },
  'fiber-spool': {
    cat: 'Passive Components',
    name: 'Fiber Spool / Fiber Drum',
    feats: [
      "Precision-wound bare or jacketed fiber",
      "Compact storage drum design",
      "Minimal macro-bending loss"
    ],
    specs: {
      "Fiber Type": "SM / MM",
      "Length Options": "100m – 2km",
      "Core": "9/125µm (SM) or 50/125µm (MM)",
      "Jacket": "Bare, 0.9mm, 2.0mm, or 3.0mm",
      "Operating Temp": "-40°C to +85°C"
    },
    apps: ["Laboratory Testing", "OTDR Launch Cables", "Emergency Field Restoration"]
  },
  'splice-sleeves': {
    cat: 'Maintenance Tools',
    name: 'Splice Sleeves',
    feats: [
      "Clear outer tube for visual inspection",
      "Stainless steel strength member",
      "Moisture-resistant environmental seal"
    ],
    specs: {
      "Lengths": "60mm, 40mm",
      "Shrink Method": "Heat shrinkable",
      "Outer Diameter": "2.5mm / 3.0mm post-shrink"
    },
    apps: ["Fusion Splicing", "ODF Terminations", "Drop Cable Assembly"]
  },
  'armoured-patchcord': {
    cat: 'Passive Components',
    name: 'Armoured Patchcord',
    feats: [
      "Stainless steel interlocking armour protection",
      "High crush and rodent resistance",
      "Retains flexibility of standard patchcords"
    ],
    specs: {
      "Armour Material": "Stainless Steel",
      "Fiber Type": "SM / MM",
      "Jacket Type": "LSZH / PVC / PE"
    },
    apps: ["Harsh Environments", "Industrial Plants", "Direct Burial / Outdoor"]
  },
  'pof-patchcord': {
    cat: 'Passive Components',
    name: 'POF — Plastic Optical Fiber Patchcord',
    feats: [
      "Large PMMA core for easy alignment",
      "Immune to electromagnetic interference (EMI)",
      "Cost-effective for short-range links"
    ],
    specs: {
      "Core Material": "Polymethyl Methacrylate (PMMA)",
      "Wavelength": "650nm",
      "Core Diameter": "1mm (Typical)"
    },
    apps: ["Automotive Networking", "Industrial Control Systems", "Home AV Connections"]
  },
  'bendiboot-patchcord': {
    cat: 'Passive Components',
    name: 'Bendiboot Patchcord',
    feats: [
      "90-degree angled boot design",
      "Minimizes cable footprint in tight spaces",
      "Prevents micro-bending losses at the connector"
    ],
    specs: {
      "Boot Angle": "90°",
      "Connector Options": "LC, SC",
      "Cable Diameter": "1.6mm / 2.0mm"
    },
    apps: ["High-Density Data Centres", "Wall-Mount Enclosures", "Tight Space Routing"]
  },
  'lc-uniboot': {
    cat: 'Passive Components',
    name: 'LC Uniboot Patchcord',
    feats: [
      "Single-jacket duplex design saves 50% space",
      "Tool-less reversible polarity",
      "Optimized for high-density environments"
    ],
    specs: {
      "Fiber Type": "OM3 / OM4 / SM",
      "Polarity": "A-B / A-A (Reversible)",
      "Cable Diameter": "2.0mm / 3.0mm"
    },
    apps: ["Spine-Leaf Architectures", "High-Density MPO Breakouts", "SAN Networks"]
  },
  'mating-sleeve': {
    cat: 'Passive Components',
    name: 'Mating Sleeve / Alignment Sleeve',
    feats: [
      "Precision split sleeve for accurate alignment",
      "Available in Zirconia Ceramic or Phosphor Bronze",
      "Low insertion loss coupling"
    ],
    specs: {
      "Material": "Ceramic / Bronze",
      "Inner Diameter": "2.5mm (SC/FC/ST) / 1.25mm (LC)",
      "Durability": ">1000 matings"
    },
    apps: ["Adapter Manufacturing", "Bare Fiber Testing", "Temporary Splicing"]
  },
  'soc': {
    cat: 'Passive Components',
    name: 'Splice-On Connector (SOC)',
    feats: [
      "Factory-polished endface ensures low loss",
      "Eliminates need for epoxy and field polishing",
      "Compatible with standard fusion splicers"
    ],
    specs: {
      "Insertion Loss (IL)": "< 0.2dB",
      "Return Loss (RL)": "> 60dB (APC)",
      "Assembly Method": "Fusion Splicing"
    },
    apps: ["FTTx Drop Cables", "Data Centre Links", "Field Repair & Maintenance"]
  },
  'fiber-spool': {
    cat: 'Passive Components',
    name: 'Fiber Spool / Fiber Drum',
    feats: [
      "Precision low-stress winding technique",
      "Rugged flange design for safe transport",
      "Available with custom fiber types and lengths"
    ],
    specs: {
      "Lengths Available": "500m, 1km, 2km, Custom",
      "Fiber Options": "G.652D, G.657A, OM3, OM4",
      "Spool Material": "High-Impact Plastic / Wood"
    },
    apps: ["Lab Simulation Testing", "Field Deployment Dispatch", "Emergency Network Restoration"]
  },
  'regular-opm': {
    cat: 'Test & Measuring Equipment',
    name: 'Regular Optical Power Meter',
    feats: [
      "Auto-wavelength recognition capability",
      "Wide dynamic measurement range",
      "Backlit LCD for low-light environments"
    ],
    specs: {
      "Wavelength Range": "800nm to 1700nm",
      "Calibrated Wavelengths": "850/1300/1310/1490/1550/1625nm",
      "Power Range": "-70 to +10 dBm / -50 to +26 dBm"
    },
    apps: ["Link Acceptance Testing", "Power Level Monitoring", "Optical Loss Measurement"]
  },
  'pocket-otdr': {
    cat: 'Test & Measuring Equipment',
    name: 'Pocket OTDR',
    feats: [
      "Ultra-compact smartphone-sized form factor",
      "Fast boot-up and auto-test functionality",
      "Event map view for intuitive fault location"
    ],
    specs: {
      "Dynamic Range": "22dB to 26dB",
      "Fiber Type": "Single-mode / Multimode Options",
      "Display": "Touchscreen LCD"
    },
    apps: ["Last-Mile FTTx Troubleshooting", "Quick Field Checks", "Access Network Installation"]
  },
  'next-gen-splicer': {
    cat: 'Test & Measuring Equipment',
    name: 'Next Gen Optical Fusion Splicer (OPM + VFL)',
    feats: [
      "Integrated OPM and VFL modules",
      "Core alignment technology for ultra-low loss",
      "Fast 8s splicing and 18s heating times"
    ],
    specs: {
      "Alignment Method": "Core-to-Core",
      "Integrated Tools": "OPM (-70~+6dBm), VFL (10mW)",
      "Battery Capacity": ">250 splice/heat cycles"
    },
    apps: ["Backbone Network Construction", "High-Precision Laboratory Splicing", "Advanced Field Maintenance"]
  },

  // Active
  'sfp-transceivers': {
    cat: 'Active Components', name: 'Fiber Optic Transceivers (SFP)',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="8" y="16" width="32" height="16" rx="3"/><rect x="4" y="20" width="6" height="8" rx="1"/><rect x="38" y="20" width="6" height="8" rx="1"/><line x1="14" y1="24" x2="34" y2="24"/></svg>',
    feats: ['High performance serial optical data communication','Cost effective modules','Compatible with major OEM switches'],
    specs: {'Form Factor':'SFP / SFP+ / QSFP','Data Rate':'155M to 400G','Connector':'LC / SC Duplex','DOM Support':'Yes'},
    apps: ['Telecom Networks','Data Centers','Enterprise IT','ISP Infrastructure']
  },
  'smart-sfp': {
    cat: 'Active Components', name: 'Smart SFP Transceiver',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="8" y="16" width="32" height="16" rx="3"/><circle cx="24" cy="24" r="4"/><path d="M12 24h24"/></svg>',
    feats: ['Integrated OAM (Operations, Administration, and Maintenance)','Real-time performance monitoring','Micro-loopback capability'],
    specs: {'Interface':'1G / 10G SFP','Protocol':'IEEE 802.3ah / 802.1ag','Diagnostics':'DDM/DOM','Latency':'Ultra-Low'},
    apps: ['Service Provider Edge','Mobile Backhaul','SLA Monitoring']
  },
  'sfp-400g': {
    cat: 'Active Components', name: '400G',
    feats: ['Next-generation high-capacity throughput', 'Low power consumption', 'Hot-pluggable form factor'],
    specs: {'Form Factor': 'QSFP-DD / OSFP', 'Data Rate': '400G', 'Connector': 'LC / MPO', 'DOM Support': 'Yes', 'Wavelength': '850nm / 1310nm', 'Operating Temp': '0°C to 70°C'},
    apps: ['Hyperscale Data Centers', 'Core Routing', '5G Backhaul']
  },
  'sfp-100g-bidi': {
    cat: 'Active Components', name: '100G & 100G BIDI',
    feats: ['High-density 100G transmission', 'BIDI variant saves fiber infrastructure', 'Low insertion loss'],
    specs: {'Form Factor': 'QSFP28', 'Data Rate': '100G', 'Connector': 'LC / MPO', 'DOM Support': 'Yes', 'Wavelength': 'CWDM4 / LR4 / SR4', 'Operating Temp': '0°C to 70°C'},
    apps: ['Enterprise Core', 'Carrier Routing', 'Metro Networks']
  },
  'sfp-40g': {
    cat: 'Active Components', name: '40G',
    feats: ['Reliable mid-tier aggregation', 'IEEE 802.3ba compliant', 'Hot-pluggable'],
    specs: {'Form Factor': 'QSFP+', 'Data Rate': '40G', 'Connector': 'LC / MPO', 'DOM Support': 'Yes', 'Wavelength': '850nm / 1310nm', 'Operating Temp': '0°C to 70°C'},
    apps: ['Mid-tier Aggregation', 'SAN Switches', 'Data Center Edge']
  },
  'sfp-25g-bidi': {
    cat: 'Active Components', name: '25G & 25G BIDI',
    feats: ['Optimized for 5G fronthaul', 'Single fiber bi-directional transmission (BIDI)', 'Low latency'],
    specs: {'Form Factor': 'SFP28', 'Data Rate': '25G', 'Connector': 'LC Duplex / Simplex', 'DOM Support': 'Yes', 'Wavelength': '850nm / 1310nm', 'Operating Temp': '-40°C to +85°C'},
    apps: ['5G Fronthaul', 'Server Connectivity', 'High-Speed Access']
  },
  'sfp-10g-bidi': {
    cat: 'Active Components', name: 'SFP+ 10G BIDI',
    feats: ['Doubles fiber capacity using WDM technology', 'Hot-swappable', 'Built-in digital diagnostic monitoring'],
    specs: {'Form Factor': 'SFP+', 'Data Rate': '10G', 'Connector': 'LC Simplex', 'DOM Support': 'Yes', 'Wavelength': '1270nm/1330nm', 'Operating Temp': '0°C to 70°C'},
    apps: ['Access Networks', 'Enterprise LAN', 'Campus Networks']
  },
  'sfp-10g-dual': {
    cat: 'Active Components', name: 'SFP+ 10G Dual Fiber',
    feats: ['Standard dual-fiber 10G transmission', 'Broad vendor compatibility', 'High reliability'],
    specs: {'Form Factor': 'SFP+', 'Data Rate': '10G', 'Connector': 'LC Duplex', 'DOM Support': 'Yes', 'Wavelength': '850nm / 1310nm / 1550nm', 'Operating Temp': '0°C to 70°C'},
    apps: ['SAN / NAS', 'Edge Routing', 'Data Center Racks']
  },
  'sfp-1g-bidi': {
    cat: 'Active Components', name: '1G SFP BIDI',
    feats: ['Cost-effective 1G bi-directional link', 'Single fiber optimization', 'Low power dissipation'],
    specs: {'Form Factor': 'SFP', 'Data Rate': '1.25G', 'Connector': 'LC Simplex / SC Simplex', 'DOM Support': 'Yes', 'Wavelength': '1310nm/1550nm', 'Operating Temp': '-40°C to +85°C'},
    apps: ['FTTH', 'Access Rings', 'CPE Equipment']
  },
  'sfp-1g-dual': {
    cat: 'Active Components', name: '1G SFP Dual Fiber',
    feats: ['Legacy compatible 1G module', 'Wide operating temperature range', 'Cost-effective'],
    specs: {'Form Factor': 'SFP', 'Data Rate': '1.25G', 'Connector': 'LC Duplex', 'DOM Support': 'Yes', 'Wavelength': '850nm / 1310nm', 'Operating Temp': '-40°C to +85°C'},
    apps: ['Legacy Switching', 'Industrial Ethernet', 'Enterprise Access']
  },
  'sfp-copper': {
    cat: 'Active Components', name: 'Copper SFP+',
    feats: ['RJ-45 interface for twisted pair copper', 'Up to 30m reach on Cat6a/7', 'Auto-negotiation'],
    specs: {'Form Factor': 'SFP+', 'Data Rate': '10G Base-T', 'Connector': 'RJ-45', 'DOM Support': 'No', 'Wavelength': 'N/A', 'Operating Temp': '0°C to 70°C'},
    apps: ['Server Connectivity', 'ToR Switches', 'Legacy Copper Infrastructure']
  },
  'bypass-switch': {
    cat: 'Active Components', name: 'Bypass Switch',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="12" y="12" width="24" height="24" rx="4"/><path d="M18 24h12"/><path d="M24 18v12"/><circle cx="12" cy="24" r="3"/><circle cx="36" cy="24" r="3"/></svg>',
    feats: ['Automatic bypass of optical path on failure','Maintains network continuity','Low insertion loss'],
    specs: {'Function':'Optical path control','Insertion Loss':'< 1.0 dB','Switching Time':'< 10ms'},
    apps: ['Network Security Systems','Inline Monitoring','Fail-safe Architectures']
  },
  'olps': {
    cat: 'Active Components', name: 'Optical Line Protection System (OLPS)',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="10" y="14" width="28" height="20" rx="3"/><path d="M16 24h16"/><path d="M24 19v10"/><circle cx="10" cy="24" r="2"/><circle cx="38" cy="24" r="2"/></svg>',
    feats: ['Uses spare optical fiber to build a backup path','Automatic route switching on fiber break','Real-time line status monitoring'],
    specs: {'Protection Type':'1+1 / 1:1','Switching Time':'< 20ms','Monitoring':'Real-time optical power'},
    apps: ['DWDM Networks','Long Haul Transmission','Critical Infrastructure']
  },
  'dac': {
    cat: 'Active Components', name: 'Direct Attached Cable (DAC)',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="4" y="18" width="12" height="12" rx="2"/><rect x="32" y="18" width="12" height="12" rx="2"/><path d="M16 24h16" stroke-dasharray="4 2"/></svg>',
    feats: ['Hot-swappable direct attach copper cable','Pre-terminated with SFP+ connectors','Low power consumption'],
    specs: {'Cable Type':'Twinax Copper','Data Rate':'10G / 25G / 40G / 100G','Length':'0.5m to 7m'},
    apps: ['Top-of-Rack (ToR) Switching','Server Interconnects','Storage Area Networks']
  },
  'aoc': {
    cat: 'Active Components', name: 'Active Optical Cable (AOC)',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="4" y="18" width="12" height="12" rx="2"/><rect x="32" y="18" width="12" height="12" rx="2"/><path d="M16 24c4-4 12 4 16 0"/></svg>',
    feats: ['Highly reliable transceiver alternative','Lighter and more flexible than copper DAC','Embedded optical transceivers'],
    specs: {'Cable Type':'Multimode Fiber','Data Rate':'10G / 25G / 40G / 100G','Reach':'Up to 100m'},
    apps: ['High Performance Computing','Hyperscale Data Centers','Campus Networks']
  },
  'hd-sdi': {
    cat: 'Active Components', name: 'HD-SDI Optical Transceiver',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="8" y="14" width="32" height="20" rx="3"/><circle cx="24" cy="24" r="5"/><line x1="14" y1="30" x2="34" y2="30"/></svg>',
    feats: ['Broadcasting grade HD transceiver','Interconverts SD/HD/3G-SDI signals','Uncompressed digital video transmission'],
    specs: {'Signal Format':'SD/HD/3G-SDI','Video Bandwidth':'Up to 2.97Gbps','Fiber Type':'Single-mode'},
    apps: ['TV Broadcasting','Live Event Production','Security Surveillance']
  },
  'poe-injector': {
    cat: 'Active Components', name: 'PoE Injector',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="10" y="14" width="28" height="20" rx="3"/><path d="M20 20v8"/><path d="M28 20v8"/><path d="M24 17v14"/></svg>',
    feats: ['Delivers data and power over single Ethernet cable','IEEE 802.3af/at compliant','Plug and play installation'],
    specs: {'Standard':'IEEE 802.3af/at','Data Rate':'10/100/1000Mbps','Output Power':'15.4W / 30W'},
    apps: ['IP Cameras','Wireless Access Points','VoIP Phones']
  },

  // Passive
  'cat6-patch-cord': {
    cat: 'Passive Components', name: 'CAT 6 Patch Cord',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><path d="M12 24h24"/><rect x="6" y="20" width="8" height="8" rx="2"/><rect x="34" y="20" width="8" height="8" rx="2"/></svg>',
    feats: ['High-speed copper patch cord','Factory terminated and tested','Snagless boot design'],
    specs: {'Category':'Cat 6','Connector':'RJ45','Jacket':'PVC / LSZH'},
    apps: ['LAN Networking','Server Racks','Workstation Connectivity']
  },
  'cpri-patchcord': {
    cat: 'Passive Components', name: 'CPRI Patchcord',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><path d="M12 24h24"/><circle cx="10" cy="24" r="4"/><circle cx="38" cy="24" r="4"/></svg>',
    feats: ['Outdoor waterproof fiber optic assembly','Harsh environment protection','Compatible with RRU/BBU'],
    specs: {'Connector Type':'ODVA/IP/FX/PDLC/NSN','Cable Type':'Armored / Tactical','IP Rating':'IP67'},
    apps: ['5G Cell Towers','FTTA Deployments','Outdoor Broadcast']
  },
  'fanout-patch-cords': {
    cat: 'Passive Components', name: 'FanOut Patch Cords',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="6" y="20" width="10" height="8" rx="2"/><path d="M16 22l8-6"/><path d="M16 24h16"/><path d="M16 26l8 6"/><circle cx="38" cy="16" r="3"/><circle cx="38" cy="24" r="3"/><circle cx="38" cy="32" r="3"/></svg>',
    feats: ['Small form factor high-density assembly','Breakout multi-fiber to simplex/duplex','Precision MT ferrule'],
    specs: {'Connector A':'MTP/MPO','Connector B':'LC/SC/FC/ST','Fiber Count':'8 / 12 / 24'},
    apps: ['High-Density Racks','SAN Switches','Core Routing']
  },
  'fo-patchcords': {
    cat: 'Passive Components', name: 'Fiber Optic Patch Cords & Pigtails',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><path d="M8 24h32"/><circle cx="8" cy="24" r="3"/><circle cx="40" cy="24" r="3"/></svg>',
    feats: ['Broadest choice of patchcords in the industry','100% interferometry tested','Low insertion and high return loss'],
    specs: {'Fiber Type':'SM (G.652D/G.657) / MM (OM1-OM5)','Connectors':'LC/SC/FC/ST/E2000','Insertion Loss':'< 0.3 dB'},
    apps: ['Telecom Networks','FTTH Drop Cables','Optical Distribution Frames']
  },
  'loopback': {
    cat: 'Passive Components', name: 'Loop Back Patch Cord',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><path d="M14 24a10 10 0 0 1 20 0 10 10 0 0 1-20 0"/></svg>',
    feats: ['Provides return signal for testing','Compact housing design','High stability and reliability'],
    specs: {'Connector Type':'LC / SC / MPO','Fiber Type':'Single-mode / Multi-mode','Attenuation':'Customizable'},
    apps: ['Equipment Burn-in Testing','Network Diagnostics','Transceiver Loopback']
  },
  'mode-conditioning': {
    cat: 'Passive Components', name: 'Mode Conditioning Patchcord',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><path d="M8 24c8-8 24 8 32 0"/></svg>',
    feats: ['Eliminates differential mode delay (DMD) effects','Enables Gigabit Ethernet over legacy MM fiber','Offset single-mode to multi-mode splice'],
    specs: {'Offset':'Precision core alignment','Cable Type':'Duplex zipcord','Connectors':'SC/LC/FC'},
    apps: ['Gigabit Ethernet LX/LH','Legacy Fiber Upgrades','Campus Networks']
  },
  'mpo-assembly': {
    cat: 'Passive Components', name: 'MPO Cable Assembly',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="8" y="18" width="14" height="12" rx="2"/><rect x="26" y="18" width="14" height="12" rx="2"/><path d="M22 24h4"/></svg>',
    feats: ['High-density multi-fiber connector system','Precision molded MT ferrule','Push-pull latching mechanism'],
    specs: {'Fiber Count':'8/12/24/48','Polarity':'Type A / B / C','Insertion Loss':'Standard / Low Loss'},
    apps: ['40G/100G Networks','Data Center Backbone','High-Density Interconnects']
  },
  'rapid-push': {
    cat: 'Passive Components', name: 'Rapid Push Cable Assembly',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><path d="M10 24h28"/><path d="M34 20l4 4-4 4"/></svg>',
    feats: ['FTTXsmart pushable preterminated drop solution','Eliminates field splicing','Designed for microduct deployment'],
    specs: {'Cable Outer Dia':'2.0mm to 5.0mm','Connector':'SC/APC Pushable','Tensile Strength':'High'},
    apps: ['FTTH Last Mile','Microduct Installations','MDU Deployments']
  },
  'smpte-assembly': {
    cat: 'Passive Components', name: 'SMPTE Cable Assembly',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="8" y="16" width="32" height="16" rx="3"/><circle cx="18" cy="24" r="3"/><circle cx="30" cy="24" r="3"/></svg>',
    feats: ['Hybrid fiber and copper camera cable','Ruggedized and dirt protected connectors','Compliant with SMPTE 311M and 304M'],
    specs: {'Components':'2 SM Fibers + 4 Copper Conductors','Jacket':'PUR / Lemo','Durability':'> 2000 Mating Cycles'},
    apps: ['HDTV Broadcasting','Stadium Infrastructure','Mobile OB Vans']
  },
  'bare-fiber-adapter': {
    cat: 'Passive Components', name: 'Bare Fiber Adapter',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="16" y="14" width="16" height="20" rx="3"/><line x1="8" y1="24" x2="16" y2="24"/><line x1="32" y1="24" x2="40" y2="24"/></svg>',
    feats: ['Temporary link for bare optical fiber','Push-button fiber locking mechanism','Easy cleaning and maintenance'],
    specs: {'Interface Types':'SC / LC / FC / ST','Ferrule':'Zirconia Ceramic','Insertion Loss':'< 0.2 dB'},
    apps: ['Lab Testing','Emergency Field Restoration','Fiber Spool Testing']
  },
  'hybrid-adapter': {
    cat: 'Passive Components', name: 'SC/APC to SC/UPC Adapter',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="14" y="14" width="20" height="20" rx="3"/><line x1="6" y1="24" x2="14" y2="24"/><line x1="34" y1="24" x2="42" y2="24"/><line x1="24" y1="14" x2="24" y2="34"/></svg>',
    feats: ['Hybrid fixed type adapter converter','Converts APC polish to UPC polish','Zero attenuation design'],
    specs: {'Fiber Type':'Single Mode 9/125','Loss':'0dB','Housing':'Plastic/Metal'},
    apps: ['Network Integration','Test Equipment Interfacing','Cross-connection']
  },

  'attenuator': {
    cat: 'Passive Components', name: 'Variable Fiber Attenuator',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><path d="M8 24h32"/><path d="M18 18l6 6-6 6"/><path d="M30 18l-6 6 6 6"/></svg>',
    feats: ['Buildout attenuator for precise power control','Wavelength independent options available','High power endurance'],
    specs: {'Attenuation Range':'1dB to 30dB','Wavelengths':'1310nm / 1490nm / 1550nm','Return Loss':'> 50dB'},
    apps: ['Receiver Protection','Optical Power Equalization','EDFA Balancing']
  },
  'cwdm': {
    cat: 'Passive Components', name: 'CWDM Mux / DeMux Module',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="14" y="12" width="20" height="24" rx="3"/><line x1="6" y1="20" x2="14" y2="20"/><line x1="6" y1="28" x2="14" y2="28"/><line x1="34" y1="24" x2="42" y2="24"/></svg>',
    feats: ['Coarse WDM for cost-effective bandwidth expansion','High isolation and low insertion loss','Passive operation (no power required)'],
    specs: {'Channel Count':'4 / 8 / 16 / 18 Ch','Spacing':'20nm','Operating Temp':'-40Â°C to +85Â°C'},
    apps: ['Metro Access Networks','Enterprise DCI','CATV Infrastructure']
  },
  'dwdm': {
    cat: 'Passive Components', name: 'DWDM Mux/DeMux Module',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="14" y="12" width="20" height="24" rx="3"/><line x1="6" y1="18" x2="14" y2="18"/><line x1="6" y1="24" x2="14" y2="24"/><line x1="6" y1="30" x2="14" y2="30"/><line x1="34" y1="24" x2="42" y2="24"/></svg>',
    feats: ['Dense WDM for maximum fiber utilization','Based on thin film filter or AWG technology','High channel isolation'],
    specs: {'Channel Count':'8 / 16 / 40 / 80 Ch','Spacing':'100GHz / 50GHz','Grid':'ITU Standard'},
    apps: ['Long Haul Core Networks','High Capacity DCI','5G Fronthaul']
  },
  'plc-splitter': {
    cat: 'Passive Components', name: 'PLC Splitter',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><line x1="8" y1="24" x2="20" y2="24"/><path d="M20 24l10-8"/><path d="M20 24l10 0"/><path d="M20 24l10 8"/></svg>',
    feats: ['Planar Lightwave Circuit technology','Uniform power splitting','Broad operating wavelength'],
    specs: {'Split Ratio':'1x2 up to 1x128','Wavelength':'1260nm - 1650nm','Packaging':'Bare fiber / Blockless / Cassette'},
    apps: ['FTTH/PON Networks','CATV Links','Optical Signal Distribution']
  },
  'field-connector': {
    cat: 'Passive Components', name: 'Fiber Optic Connector, Field Installable',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="14" y="16" width="20" height="16" rx="2"/><line x1="8" y1="24" x2="14" y2="24"/><line x1="34" y1="24" x2="40" y2="24"/></svg>',
    feats: ['Fast Field Assembly Optical Connector','No epoxy or polishing required','Index matching gel inside'],
    specs: {'Connector Type':'SC / LC / FC','Polishing':'UPC / APC','Assembly Time':'< 2 minutes'},
    apps: ['FTTx Drop Cable Termination','Emergency Repairs','LAN Installations']
  },

  // Cable Management
  'rack-mount-fms': {
    cat: 'Cable Management Devices', name: 'Rack Mount Fiber Management System',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="6" y="16" width="36" height="16" rx="2"/><line x1="12" y1="24" x2="16" y2="24"/><line x1="20" y1="24" x2="24" y2="24"/><line x1="28" y1="24" x2="32" y2="24"/><circle cx="8" cy="20" r="1"/><circle cx="8" cy="28" r="1"/><circle cx="40" cy="20" r="1"/><circle cx="40" cy="28" r="1"/></svg>',
    feats: ['19" Rack Mount fiber-optic enclosure','Slide-out drawer for easy access','Modular adapter panels'],
    specs: {'Capacity':'Up to 144 cores (4U)','Material':'Cold rolled steel','Mounting':'Standard 19-inch rack'},
    apps: ['Data Center Racks','Telecom Central Office','Enterprise Server Rooms']
  },
  'htb': {
    cat: 'Cable Management Devices', name: 'Home Termination Box (HTB)',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="14" y="12" width="20" height="24" rx="2"/><path d="M14 24h20"/><circle cx="24" cy="18" r="2"/></svg>',
    feats: ['Aesthetic design for indoor customer premises','Provides fiber termination points and housing','Wall mountable'],
    specs: {'Capacity':'1 to 4 Cores','Material':'ABS plastic','Size':'Compact footprint'},
    apps: ['FTTH Customer Premises','Residential Broadband','Office Workstations']
  },
  'wall-mount': {
    cat: 'Cable Management Devices', name: 'Optical Fiber Wall Mount Enclosure',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="10" y="8" width="28" height="32" rx="3"/><line x1="24" y1="8" x2="24" y2="40"/><circle cx="20" cy="24" r="1"/><circle cx="28" cy="24" r="1"/></svg>',
    feats: ['Two door wall mounted enclosure','Separate compartments for splicing and patching','Secure lockable doors'],
    specs: {'Capacity':'Up to 96 Cores','Type':'Indoor Wall Mount','Security':'Keyed locks'},
    apps: ['Building Distribution','Campus Networks','Security Camera Hubs']
  },
  'fdb': {
    cat: 'Cable Management Devices', name: 'Fiber Distribution Box (FDB)',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="12" y="10" width="24" height="28" rx="2"/><line x1="12" y1="18" x2="36" y2="18"/><line x1="24" y1="18" x2="24" y2="38"/></svg>',
    feats: ['Compact termination box for building premises','Connects drop cable with feeder cable','Integrates splicing and splitting'],
    specs: {'Capacity':'4 to 32 Cores','Environment':'Indoor/Outdoor IP65','Splitter Support':'Cassette or Tube PLC'},
    apps: ['FTTx Distribution Nodes','Multi-Dwelling Units (MDU)','Street Cabinets']
  },
  'cat6-panel': {
    cat: 'Cable Management Devices', name: 'CAT 6 Patch Panel',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="6" y="16" width="36" height="16" rx="2"/><line x1="12" y1="20" x2="16" y2="20"/><line x1="12" y1="28" x2="16" y2="28"/><line x1="20" y1="20" x2="24" y2="20"/><line x1="20" y1="28" x2="24" y2="28"/><line x1="28" y1="20" x2="32" y2="20"/><line x1="28" y1="28" x2="32" y2="28"/></svg>',
    feats: ['High speed Network distribution panel','Confirms to ISO/IEC standards','Cable management bar included'],
    specs: {'Ports':'24 / 48 Port','Category':'Cat 6 UTP/STP','Size':'1U / 2U 19-inch'},
    apps: ['Enterprise LAN','Server Room Copper Distribution','AV over IP setups']
  },
  'heat-shrink-closure': {
    cat: 'Cable Management Devices', name: 'Heat Shrink Splice Closure',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><path d="M12 16h24a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4z"/><path d="M8 20h32"/><path d="M8 28h32"/><line x1="20" y1="16" x2="20" y2="32"/><line x1="28" y1="16" x2="28" y2="32"/></svg>',
    feats: ['Heat shrink sealing for harsh environments','Excellent waterproof and dustproof performance','Accommodates multiple splice trays'],
    specs: {'Sealing Type':'Heat Shrink','Capacity':'Up to 288 Cores','Environment':'Aerial/Buried/Manhole (IP68)'},
    apps: ['Outside Plant (OSP) Networks','Underground Splicing','Long Haul Routes']
  },
  'odf': {
    cat: 'Cable Management Devices', name: 'Optical Distribution Frames',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="12" y="6" width="24" height="36" rx="2"/><line x1="12" y1="18" x2="36" y2="18"/><line x1="12" y1="30" x2="36" y2="30"/></svg>',
    feats: ['Multi-purpose high-capacity distribution frame','High-quality ABS plastic or metal build','Efficient cable routing and protection'],
    specs: {'Capacity':'Up to 576 Cores','Type':'Floor standing / Rack mount','Pigtail Management':'Integrated'},
    apps: ['Telecom Central Office','Main Distribution Area (MDA)','Large Data Centers']
  },
  'horizontal-closure': {
    cat: 'Cable Management Devices', name: 'Fiber Optic Splitter Closure GJS 2016',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="8" y="16" width="32" height="16" rx="8"/><line x1="16" y1="16" x2="16" y2="32"/><line x1="32" y1="16" x2="32" y2="32"/><line x1="8" y1="24" x2="40" y2="24"/></svg>',
    feats: ['Mechanical sealing structure','Oval shaped cable port entrances in base','Supports direct splicing and branching'],
    specs: {'Sealing Type':'Mechanical','Shape':'Horizontal / Dome','Ports':'Multiple entry/exit'},
    apps: ['FTTx Distribution Splicing','Aerial Messenger Wire','Wall/Pole Mount Splices']
  },

  // Test & Measuring
  'pon-power-meter': {
    cat: 'Test & Measuring Equipment', name: 'PON Power Meter',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="14" y="8" width="20" height="32" rx="3"/><rect x="18" y="14" width="12" height="8" rx="1"/><circle cx="24" cy="30" r="3"/><circle cx="20" cy="26" r="1"/><circle cx="28" cy="26" r="1"/><circle cx="20" cy="34" r="1"/><circle cx="28" cy="34" r="1"/></svg>',
    feats: ['Pass-through measurement for live PON','Simultaneous testing of 1310/1490/1550nm','Burst mode measurement for 1310nm upstream'],
    specs: {'Wavelengths':'1310/1490/1550nm','Network Type':'BPON/EPON/GPON','Display':'Color LCD'},
    apps: ['FTTx Network Turn-up','PON Maintenance','OLT/ONT Verification']
  },
  'mini-opm': {
    cat: 'Test & Measuring Equipment', name: 'Mini Optical Power Meter',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="16" y="10" width="16" height="28" rx="3"/><rect x="20" y="14" width="8" height="6" rx="1"/><circle cx="24" cy="28" r="4"/></svg>',
    feats: ['Pocket-sized, lightweight design','High precision measurements','Long battery life with auto-off'],
    specs: {'Calibrated Wavelengths':'850/1300/1310/1490/1550/1625nm','Detector':'InGaAs','Power':'AAA Batteries / USB'},
    apps: ['Daily Fiber Link Testing','Attenuation Measurement','Optical Power Checks']
  },
  '5in1-opm': {
    cat: 'Test & Measuring Equipment', name: '5 IN 1 Optical Power Meter',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="12" y="8" width="24" height="32" rx="3"/><rect x="16" y="14" width="16" height="8" rx="1"/><circle cx="24" cy="30" r="4"/><line x1="18" y1="28" x2="20" y2="28"/><line x1="28" y1="28" x2="30" y2="28"/><line x1="18" y1="32" x2="20" y2="32"/><line x1="28" y1="32" x2="30" y2="32"/></svg>',
    feats: ['Combines OPM, VFL, LAN Tester, LED Light, and RJ45 testing','Broad measurement range (+10 to -70dBm)','High accuracy (+- 0.2 dB)'],
    specs: {'Functions':'OPM, VFL, Network Test, Light','VFL Power':'1mW/10mW/30mW','Display':'Backlit LCD'},
    apps: ['Comprehensive Field Diagnostics','Multipurpose Technician Toolkit','LAN & Fiber Troubleshooting']
  },
  'mini-otdr': {
    cat: 'Test & Measuring Equipment', name: 'Mini OTDR PDR4402S',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="10" y="12" width="28" height="24" rx="3"/><rect x="14" y="16" width="20" height="12" rx="1"/><circle cx="16" cy="32" r="1"/><circle cx="20" cy="32" r="1"/><circle cx="24" cy="32" r="1"/><circle cx="32" cy="32" r="2"/></svg>',
    feats: ['On-Line Mini Pro-OTDR','Event Map display for easy analysis','Integrated VFL and OPM'],
    specs: {'Wavelengths':'1310/1550nm','Dynamic Range':'24/22dB','Dead Zone':'Event < 1.5m'},
    apps: ['FTTx Installation','Data Center Characterization','Fiber Fault Location']
  },
  'fusion-splicer': {
    cat: 'Test & Measuring Equipment', name: 'Fusion Splicer PDR618H',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="12" y="14" width="24" height="20" rx="3"/><path d="M18 14V10h12v4"/><circle cx="24" cy="24" r="4"/><path d="M12 24H8"/><path d="M40 24h-4"/></svg>',
    feats: ['Handheld, small and light','Core alignment technology','Fast 8s splicing and 26s tube heating'],
    specs: {'Alignment':'Core to Core','Battery':'5800mAh Pluggable','Display':'High-res LCD'},
    apps: ['Outside Plant Splicing','FTTH Drop Cables','Emergency Network Repair']
  },
  'easyget-wifi': {
    cat: 'Test & Measuring Equipment', name: 'EasyGet WiFi Wireless Fiber Endface Microscope',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="18" y="10" width="12" height="28" rx="2"/><path d="M22 10V6h4v4"/><circle cx="24" cy="18" r="3"/><circle cx="24" cy="30" r="1"/></svg>',
    feats: ['Wireless transmission to smartphone/tablet','High-resolution endface imaging','Eliminates direct eye exposure to lasers'],
    specs: {'Connectivity':'WiFi / USB','Magnification':'400X','App Support':'iOS / Android / Windows'},
    apps: ['Connector Endface Inspection','Patch Panel Cleaning Verification','Transceiver Port Checking']
  },
  'easycheck-v2': {
    cat: 'Test & Measuring Equipment', name: 'EasyCheck V2 Digital Fiber Endface Inspector',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><rect x="10" y="12" width="28" height="24" rx="3"/><rect x="14" y="16" width="20" height="14" rx="1"/><path d="M20 40l4-4 4 4"/></svg>',
    feats: ['Desktop digital fiber inspector','Large integrated display screen','Automated pass/fail analysis software'],
    specs: {'Display':'Integrated LCD','Analysis':'IEC Standard Pass/Fail','Image Storage':'SD Card / USB'},
    apps: ['Factory Quality Control (QC)','Cable Assembly Production','Lab Testing']
  },
  'drone': {
    cat: 'Specialty Products', name: 'Optical Fiber Drone',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="1.5"><path d="M12 12l24 24M12 36l24-24"/><circle cx="12" cy="12" r="4"/><circle cx="36" cy="36" r="4"/><circle cx="12" cy="36" r="4"/><circle cx="36" cy="12" r="4"/><rect x="20" y="20" width="8" height="8" rx="2"/></svg>',
    feats: ['Rapid aerial deployment in inaccessible areas','High-resolution optical infrastructure inspection','Real-time secure surveillance feed'],
    specs: {'Flight Time':'Extended','Camera':'4K / Thermal','Deployment Rate':'High-speed aerial stringing'},
    apps: ['Mountain/River Fiber Crossing','Post-Disaster Reconnaissance','Infrastructure Audits']
  }
};