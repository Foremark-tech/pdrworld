import re
import json

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update the JS drawer mailto link
    # Find the Download Datasheet button and update its properties
    content = re.sub(
        r'(<a href="#" id="drawData" class="btn btn-primary" style="flex:1;justify-content:center">)(Download Datasheet)',
        r'<!-- FIX: CRITICAL 5 - Dynamic Mailto Datasheet Link -->\n          \1Request Datasheet',
        content
    )

    # In openDrawer JS function, add code to update the mailto link dynamically
    if "document.getElementById('drawData').href" not in content:
        content = re.sub(
            r"(document\.getElementById\('drawTitle'\)\.innerText = d\.name;)",
            r"\1\n  <!-- FIX: CRITICAL 5 - Update Datasheet Mailto -->\n  document.getElementById('drawData').href = `mailto:info@pdrworld.com?subject=Datasheet Request — ${d.name}`;\n  document.getElementById('drawData').target = '_blank';",
            content
        )

    # 2. Update productData
    
    # SFP variants (MINOR 10)
    sfp_replacement = """feats: [
      "Industry-standard MSA compliant footprint",
      "Digital Diagnostics Monitoring (DDM) support",
      "Hot-pluggable with LC/SC receptacles"
    ],
    specs: {
      "Data Rates": "155Mbps to 400Gbps",
      "Wavelengths": "850nm, 1310nm, 1550nm, CWDM/DWDM",
      "Available Variants": "Smart SFP, 400G, 100G BIDI, 100G, 40G, 25G BIDI, 25G, SFP+ 10G BIDI, SFP+ 10G Dual, 1G BIDI, 1G Dual Fiber, Copper SFP+",
      "Fiber Type": "Single-mode & Multimode"
    }"""
    content = re.sub(r'feats:\s*\[\s*"Industry-standard MSA compliant footprint",\s*"Digital Diagnostics Monitoring \(DDM\) support",\s*"Hot-pluggable with LC/SC receptacles"\s*\],\s*specs:\s*{\s*"Data Rates": "155Mbps to 400Gbps",\s*"Wavelengths": "850nm, 1310nm, 1550nm, CWDM/DWDM",\s*"Fiber Type": "Single-mode & Multimode"\s*}', sfp_replacement, content)

    # Missing Data Entries string
    new_data = """// FIX: CRITICAL 1 & 2, MAJOR 1 & 4 - Missing Product Data
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
"""
    
    # Inject the new data into the productData object just after the opening brace
    content = re.sub(
        r'(const productData = {)',
        r'\1\n' + new_data,
        content
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

process_file('c:\\Users\\SEBIN\\Downloads\\PDR world Frontend\\products.html')
print("Processed products.html JS data")
