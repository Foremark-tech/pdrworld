module.exports = {
  "Field-Installable Connector": {
    desc: "Fast field-assembly optical connectors for on-site termination without factory tools. Designed for ease of maintenance and emergency restoration in FTTx last-mile deployments.",
    features: ["No-epoxy no-polish installation", "tool-light deployment", "factory-grade optical performance", "SC/LC/FC/ST styles", "SM and MM fiber compatible", "reusable housing"],
    specs: {"IL": "≤0.3dB (SM)", "Return Loss": "≥45dB (UPC)", "Fiber": "250µm/900µm/2.0mm", "Connector": "SC/LC/FC/ST", "Polish": "PC/UPC/APC", "Installation Time": "<2 minutes"},
    applications: ["FTTx drop cable termination", "emergency restoration splicing", "MDU and building riser connections", "remote site rapid deployment"],
    standards: ["IEC 61754", "RoHS"],
    related: ["Fiber Cleaver CLV-B1", "Fiber Optic Cleaner Pen", "Fiber Optic Patch Cords & Pigtails"]
  },
  "Mode Conditioning Patchcord": {
    desc: "Mode Conditioning Patchcord (MCP) — also known as Gigabit Launch Patchcord — enables single-mode transceivers to transmit correctly over legacy multimode fiber plant. Essential for 1000BASE-LX migration over existing OM1/OM2 infrastructure.",
    features: ["Offset single-mode launch into multimode fiber", "eliminates differential mode delay", "enables SM 1000BASE-LX optics over MM plant", "duplex SC or LC connectors", "62.5µm and 50µm MM versions", "Low insertion loss"],
    specs: {"Fiber": "SM 9/125 → MM 62.5/125 or 50/125", "Polish": "UPC or APC", "Connector": "LC Duplex / SC Duplex", "IL": "≤0.5dB total", "Length": "1m–5m", "Jacket": "PVC or LSZH"},
    applications: ["1000BASE-LX migration over OM1/OM2 legacy networks", "enterprise campus LAN upgrades", "data centre MM backbone with SM optics", "Gigabit Ethernet legacy support"],
    standards: ["IEEE 802.3z 1000BASE-LX", "IEC 61754", "RoHS"],
    related: ["Fiber Optic Patch Cords & Pigtails", "Field-Installable Connector"]
  },
  "Loop Back Patch Cord": {
    desc: "Loopback patch cords provide a return path for optical test signals during BERT, OLT commissioning, and network diagnostics. Available in all fiber types and connector styles.",
    features: ["Single and duplex loopback configurations", "all connector types", "SM and MM fiber", "any custom loop length", "compact form factor", "color-coded by fiber type"],
    specs: {"Connector": "SC/LC/FC/ST/E2000/MU", "Fiber": "SM OS2 or MM OM1–OM5", "IL": "≤0.3dB per connector pair", "Loop OD": "2.0mm or 3.0mm", "Length": "0.1m–2m"},
    applications: ["BERT and BER testing", "OLT/ONT commissioning", "transceiver validation", "network port loopback diagnostics", "NOC-level troubleshooting"],
    standards: ["IEC 61754", "RoHS"],
    related: ["5-in-1 Optical Power Meter", "Laser Source", "Fiber Optic Patch Cords & Pigtails"]
  },
  "SC/APC ↔ SC/UPC Adapter Converter": {
    desc: "Hybrid fixed adapter that converts SC/APC female to SC/UPC male with 0dB insertion loss — no optical glass element. Eliminates the ≤0.8dB mismatch penalty when connecting APC-interface OLT equipment to a UPC distribution plant.",
    features: ["Zero insertion loss (0dB — no glass element)", "eliminates SC-APC to SC-UPC mismatch penalty", "single-mode 9/125 only", "hybrid fixed-type construction", "compact SC form factor", "ceramic ferrule precision"],
    specs: {"Type": "Hybrid Fixed Adapter", "IL": "0.0dB (no optical element)", "Fiber": "SM 9/125", "Female": "SC/APC (8° angled)", "Male": "SC/UPC (flat)", "Body": "Zirconia ceramic"},
    applications: ["FTTH OLT APC port to UPC patch panel", "legacy UPC cable plant retrofits", "APC-to-UPC transition zones", "subscriber-side APC migration"],
    standards: ["IEC 61754-4", "RoHS"],
    related: ["Fiber Optic Patch Cords & Pigtails", "PLC Splitter"]
  },
  "SMPTE Cable Assembly": {
    desc: "PDR SMPTE 304M-compliant camera cable assemblies for HDTV broadcast infrastructure. Combines dual SM optical fibers with copper conductors in a single ruggedized tactical cable for camera-to-CCU links at live events, studios and OB vans.",
    features: ["SMPTE 304M hybrid cable — fiber + copper", "supports SD/HD/3G-SDI camera signals", "power and intercom over same cable", "ruggedized tactical outer jacket", "sealed SMPTE 304M connector ends", "dirt-protected mating"],
    specs: {"Standard": "SMPTE 304M", "Fibers": "2×SM 9/125", "Copper": "4-conductor", "Connector": "SMPTE 304M hybrid", "Jacket": "Tactical ruggedized", "Length": "Custom 10m–200m", "IL": "≤0.5dB/km"},
    applications: ["Live sports camera-to-CCU links", "broadcast OB van production", "news remote contribution", "studio floor camera rigging", "fixed broadcast installations"],
    standards: ["SMPTE 304M", "IEC 61754", "RoHS"],
    related: ["HD-SDI Optical Transceiver", "Active Optical Cable"]
  },
  "Bare Fiber Adapter": {
    desc: "Bare fiber adapters couple cleaved bare 125µm optical fiber directly into SC/FC/LC-interface test equipment. Used in lab and field environments for OTDR traces, loss measurements, and characterization of unconnectorized fiber ends.",
    features: ["Precision V-groove alignment for bare fiber", "SC/FC/LC receptacle interface", "no connector polish required", "spring-loaded fiber retention", "low insertion loss coupling", "compatible with SM and MM bare fiber"],
    specs: {"Fiber OD": "125µm (cladding)", "Compatible": "SM 9/125 or MM 50–62.5/125", "Interface": "SC or FC receptacle", "Alignment": "Precision V-groove", "Loss": "≤1.0dB typical"},
    applications: ["OTDR testing of unconnectorized cable reels", "laboratory fiber characterization", "production testing of bare fiber", "splice loss measurement setups"],
    standards: ["IEC 60793", "RoHS"],
    related: ["Mini OTDR PDR4402S", "Laser Source", "Fusion Splicer PDR618H"]
  },
  "Attenuator": {
    desc: "Fixed and variable in-line attenuators for single-mode fiber applications. Provide superior, calibrated optical power reduction at telecom wavelengths — essential for preventing receiver overload and balancing WDM channel power.",
    features: ["Fixed values 1–25dB", "variable models with calibrated dial", "SC/FC/LC/ST connector styles", "single-mode operating range", "low back reflection", "stable over temperature"],
    specs: {"Attenuation Range": "Fixed 1–25dB / Variable 0–60dB", "Wavelength": "1260–1625nm", "IL (insertion penalty)": "<0.5dB", "Return Loss": ">45dB", "Connector": "SC/FC/LC/ST", "Operating Temp": "-40°C to +80°C"},
    applications: ["Receiver overload protection in long-haul links", "WDM power equalization", "transceiver dynamic range testing", "lab power level calibration"],
    standards: ["IEC 61300-3-4", "RoHS"],
    related: ["Laser Source", "Variable Fiber Attenuator", "5-in-1 Optical Power Meter"]
  },
  "CAT 6 Patch Cord": {
    desc: "PDR CAT 6 copper patch cords for high-speed structured cabling environments. ISO/IEC 11801 and TIA-568-C.2 compliant, 250MHz bandwidth, available in a full range of lengths and colors.",
    features: ["250MHz channel bandwidth", "ISO/IEC 11801 and TIA-568-C.2 compliant", "24AWG stranded copper conductors", "snagless RJ-45 boots", "PVC and LSZH jacket options", "full color range"],
    specs: {"Category": "CAT 6", "Bandwidth": "250MHz", "Conductors": "24AWG stranded", "Connector": "RJ-45", "Standard": "ISO/IEC 11801 / TIA-568-C.2", "Jacket": "PVC or LSZH", "Lengths": "0.5m–15m"},
    applications: ["Enterprise LAN patch panels", "workstation connections", "data centre server access", "structured cabling horizontal runs", "AV and control systems"],
    standards: ["ISO/IEC 11801", "TIA-568-C.2", "RoHS"],
    related: ["CAT 6 Patch Panel", "Rack-Mount Fiber Management"]
  },
  "CAT 6 Patch Panel": {
    desc: "PDR 24-port CAT 6 patch panel for 19\" rack-mount structured cabling applications. ISO/IEC 11801 compliant, 110-IDC termination, T568A/B wiring, with integrated cable management bar.",
    features: ["24 ports in 1U 19\" rack form factor", "ISO/IEC 11801 / TIA-568-C.2 compliant", "110-IDC punch-down termination", "T568A and T568B wiring support", "powder-coat steel chassis", "integral strain relief cable management bar"],
    specs: {"Ports": "24 × RJ-45", "Format": "1U 19\" rack", "Standard": "ISO/IEC 11801 / TIA-568-C.2", "Termination": "110-IDC", "Category": "CAT 6 (250MHz)", "Body": "Powder-coat steel"},
    applications: ["Enterprise server room structured cabling", "data centre horizontal cross-connects", "campus distribution frames", "AV system backbone"],
    standards: ["ISO/IEC 11801", "TIA-568-C.2", "RoHS"],
    related: ["CAT 6 Patch Cord", "Rack-Mount Fiber Management"]
  },
  "Fiber Optic Transceivers (SFP)": {
    desc: "PDR supplies high-performance, cost-effective pluggable transceiver modules spanning the full speed range: SFP (2.67G), SFP+ (10G), SFP28 (25G), QSFP+ (40G), QSFP28 (100G), and QSFP-DD (200G/400G). All modules are hot-pluggable, RoHS-compliant, and available in standard (0–70°C) and industrial (–40 to +85°C) temperature ranges.",
    features: ["Full family SFP/SFP+/SFP28/QSFP+/QSFP28/QSFP-DD", "hot-pluggable MSA-compliant", "Class 1 laser (EN 60825-1)", "3.3V single supply", "metal enclosure for low EMI", "digital diagnostics (DDM/DOM)", "industrial temperature option –40 to +85°C", "RoHS-6 compliant"],
    specs: {"SFP Speed": "≤2.67Gbps", "SFP+ Speed": "≤11.3Gbps", "SFP28 Speed": "25.78Gbps", "QSFP+ Speed": "41.2Gbps aggregate", "QSFP28 Speed": "103.125Gbps", "QSFP-DD 400G Speed": "53Gbps/channel × 8", "Standards": "SFP MSA / SFF-8472 / SFF-8431 / QSFP+ MSA / QSFP28 MSA", "Operating Temp (std)": "0°C to +70°C", "Operating Temp (ind)": "-40°C to +85°C", "Supply Voltage": "3.3V single"},
    applications: ["Ethernet and SDH/SONET transport", "metro WDM networks", "data centre spine-leaf switching fabric", "100G/400G coherent backbone", "5G fronthaul and midhaul", "broadcasting SDI-over-IP"],
    standards: ["IEEE 802.3", "SFP MSA", "SFF-8472", "SFF-8431", "QSFP+ MSA", "QSFP28 MSA", "CMIS", "EN 60825-1", "RoHS-6"],
    related: ["Active Optical Cable (AOC)", "Direct Attached Cable (DAC)", "CWDM Mux / DeMux Module", "DWDM Mux / DeMux Module"]
  },
  "Active Optical Cable (AOC)": {
    desc: "PDR 100G QSFP28 Active Optical Cable assemblies offer a highly reliable, cost-effective alternative to discrete transceiver-plus-cable assemblies. Factory-terminated with VCSEL-based optical engines on both ends, eliminating field polishing and offering superior EMI performance over copper at distances to 100m.",
    features: ["Factory-terminated plug-and-play", "QSFP28 (100G) MSA compliant", "VCSEL 850nm optical engine", "OM3/OM4 multimode fiber", "no field splicing required", "lighter and thinner than copper", "hot-pluggable", "low power consumption"],
    specs: {"Form Factor": "QSFP28", "Speed": "100G (4×25G)", "Wavelength": "850nm VCSEL", "Fiber": "OM3 / OM4", "Length": "1m / 3m / 5m / 10m / 30m / 100m", "IL": "≤1.5dB per channel", "Power": "<3.5W", "Temp": "0–70°C"},
    applications: ["Data centre top-of-rack to end-of-row spine links", "HPC cluster interconnects", "100G Ethernet fabric within one floor/zone", "storage area network backbone"],
    standards: ["IEEE 802.3bm 100GBASE-SR4", "MSA QSFP28", "RoHS"],
    related: ["Fiber Optic Transceivers (SFP)", "Direct Attached Cable (DAC)", "MPO Cable Assembly"]
  },
  "Direct Attached Cable (DAC)": {
    desc: "PDR DAC cables are hot-swappable direct-attach copper Twinax assemblies in SFP+, QSFP+, and QSFP28 form factors. The low-cost, zero-latency alternative for switch-to-server connections within 7 metres.",
    features: ["Passive and active variants available", "hot-pluggable SFP+/QSFP+/QSFP28 ends", "30AWG Twinax construction", "zero latency (no optical conversion)", "no power for passive versions", "MSA compliant", "cost-effective for short-reach"],
    specs: {"Form Factors": "SFP+ (10G), QSFP+ (40G), QSFP28 (100G)", "Length": "0.5m / 1m / 2m / 3m / 5m / 7m (passive)", "Type": "Passive (≤3m) / Active (≤7m)", "Power (passive)": "0W", "Supply Voltage": "3.3V", "Conductor": "30AWG Twinax"},
    applications: ["Server-to-ToR switch connections in data centres", "10G/40G/100G blade server clustering", "storage array interconnects within server racks"],
    standards: ["SFF-8431 (SFP+)", "SFF-8436 (QSFP+)", "SFF-8665 (QSFP28)", "RoHS"],
    related: ["Fiber Optic Transceivers (SFP)", "Active Optical Cable (AOC)", "Rack-Mount Fiber Management"]
  },
  "HD-SDI Optical Transceiver": {
    desc: "PDR PDR8010SG broadcasting-grade SD/HD/3G-SDI optical transceiver interconverts electrical SDI signals to optical for long-distance studio, OB van, and sports venue links. Supports auto-detection of all SDI signal rates.",
    features: ["Auto-detects SD-SDI (270Mbps)/HD-SDI (1.485G)/3G-SDI (2.97G)", "re-clocking and cable equalization", "single-mode fiber SC/LC connector", "loop-through electrical output", "DIN rail or 1U rack mounting", "low latency", "12V DC powered"],
    specs: {"Model": "PDR8010SG", "Signals": "SD-SDI 270Mbps / HD-SDI 1.485Gbps / 3G-SDI 2.97Gbps", "Fiber": "SM 9/125", "Connector": "SC or LC", "Reach": "≤20km SM", "Electrical": "BNC 75Ω", "Power": "12V DC", "Temp": "0–50°C"},
    applications: ["Broadcast studio to OB van fiber links", "sports arena live production", "news remote camera feeds", "HDTV studio distribution", "CCTV over long-distance fiber"],
    standards: ["SMPTE 259M (SD)", "SMPTE 292M (HD)", "SMPTE 424M (3G)", "RoHS"],
    related: ["SMPTE Cable Assembly", "Active Optical Cable (AOC)", "Fiber Optic Transceivers (SFP)"]
  },
  "Optical Line Protection (OLP)": {
    desc: "PDR OLP (Optical Line Protection) systems provide carrier-grade automatic protection switching using a pre-routed spare fiber path. On fiber cut or signal degradation, the system switches to the backup route in <50ms — transparent to all protocols and bit rates.",
    features: ["<50ms automatic protection switchover", "transparent to any protocol or bit rate", "1+1 and 1:1 protection modes", "SNMP alarm/monitoring output", "no traffic interruption during normal operation", "compact 19\" rackmount chassis"],
    specs: {"Switch Time": "<50ms", "Insertion Loss": "≤1.5dB", "Return Loss": "≥50dB", "Wavelength": "1260–1625nm (wideband)", "Connectors": "SC/LC/FC", "Modes": "1+1 protection / 1:1 protection", "Format": "1U 19\" rack", "Power": "DC 48V or AC 220V"},
    applications: ["Carrier backbone fiber ring protection", "metro SDH/OTN ring networks", "critical government and defence fiber links", "enterprise mission-critical WAN redundancy", "inter-DC dark fiber protection"],
    standards: ["ITU-T G.841", "Telcordia GR-253", "ITU-T G.808.1", "RoHS"],
    related: ["Optical Bypass Switch", "Fiber Optic Transceivers (SFP)", "DWDM Mux / DeMux Module"]
  },
  "Optical Bypass Switch": {
    desc: "PDR optical bypass switches automatically maintain optical path continuity when an inline protected device (firewall, IPS, DPI appliance, network monitor) fails or goes offline. Eliminates single-point-of-failure risk in inline security and monitoring architectures.",
    features: ["Automatic bypass on device failure (<5ms)", "transparent to all wavelengths", "maintains full duplex traffic flow during bypass", "heartbeat-monitored operation", "manual override capability", "1U rack mount"],
    specs: {"Switch Time": "<5ms", "Insertion Loss": "<1.5dB (normal)", "Bypass IL": "<0.5dB", "Wavelength": "Any (wideband 1260–1625nm)", "Interface": "SC/LC duplex", "Format": "1U 19\" rack", "Power": "DC or AC", "Management": "Local/remote"},
    applications: ["Inline IPS/IDS appliance protection", "DPI and deep packet inspection bypass", "network traffic analyser protection", "firewall inline deployment", "NOC monitoring tool bypass"],
    standards: ["IEC 60825", "RoHS"],
    related: ["Optical Line Protection (OLP)", "Fiber Optic Transceivers (SFP)"]
  },
  "PoE Injector": {
    desc: "PDR PoE injectors deliver IEEE 802.3af (15.4W) and 802.3at (30W PoE+) power over standard CAT 5e/6 cables to network devices. Gigabit passthrough with plug-and-play installation — no software required.",
    features: ["IEEE 802.3af (PoE 15.4W) and 802.3at (PoE+ 30W) compliant", "Gigabit 10/100/1000Mbps data passthrough", "plug-and-play no software required", "LED power and link indicators", "compact desktop form factor", "worldwide AC input"],
    specs: {"PoE Standard": "IEEE 802.3af / 802.3at", "Output Power": "15.4W (af) / 30W (at+)", "Data Rate": "10/100/1000Mbps", "Input": "100–240V AC", "Output Voltage": "44–57V DC", "Connector": "RJ-45 (data+power)", "Temp": "0–40°C"},
    applications: ["IP CCTV cameras", "VoIP desk phones", "wireless access points", "door access control panels", "IP intercoms", "network-connected sensors"],
    standards: ["IEEE 802.3af", "IEEE 802.3at", "RoHS"],
    related: ["CAT 6 Patch Cord", "CAT 6 Patch Panel"]
  },
  "Optical Distribution Frame (ODF)": {
    desc: "PDR ODF units provide structured termination, splicing, and cross-connection for fiber optic cables in telecom central offices and enterprise equipment rooms. Available in wall-mount and 19\" rack-mount configurations with modular adapter panel capacity.",
    features: ["Wall-mount and rack-mount variants", "modular adapter panel system (SC/LC/FC/ST/MPO)", "integrated splice tray management", "front-access patching without disturbing other cables", "capacity 12F to 288F per unit", "powder-coat steel and ABS options"],
    specs: {"Formats": "Wall-mount / 19\" rack 1U–4U", "Capacity": "12F / 24F / 48F / 72F / 96F / 144F / 288F", "Adapter Panels": "SC/LC/FC/ST/E2000/MPO", "Material": "Powder-coat steel or ABS", "Splice Trays": "Integrated 12F per tray"},
    applications: ["Telecom central office fiber termination", "enterprise LAN equipment rooms", "data centre fiber cross-connect", "OLT co-location frames", "FTTx head-end aggregation"],
    standards: ["TIA-568", "IEC 60728", "RoHS"],
    related: ["Rack-Mount Fiber Management", "MPO Cable Assembly", "Fiber Optic Patch Cords & Pigtails"]
  },
  "Rack-Mount Fiber Management": {
    desc: "PDR 19\" rack-mount fiber management enclosures provide modular, high-density fiber termination and cross-connection for data centres and carrier facilities. Scalable from 1U to 4U, supporting up to 144 LC duplex ports per 1U via MPO cassette modules.",
    features: ["19\" standard rack mount 1U/2U/4U", "modular MPO cassette or adapter panel system", "front and rear cable management rings", "high-density LC duplex up to 144F/1U", "blank panel slots for future expansion", "powder-coat steel chassis"],
    specs: {"Format": "19\" 1U / 2U / 4U rack", "Max Density": "144 LC duplex (1U with MPO cassettes)", "Adapter Options": "SC/LC/FC/ST/MPO", "Cable Management": "Front and rear routing rings", "Material": "1.2mm steel powder-coat", "Compatible": "EIA/TIA-310 19\" racks"},
    applications: ["Data centre leaf-spine fabric cross-connect", "carrier POP fiber management", "hyperscale co-location main distribution frames", "enterprise server room backbone termination"],
    standards: ["EIA/TIA-310", "IEC 60603", "RoHS"],
    related: ["MPO Cable Assembly", "FanOut Patch Cord", "Optical Distribution Frame (ODF)", "Fiber Optic Patch Cords & Pigtails"]
  },
  "Fiber Termination & Distribution Box": {
    desc: "PDR fiber termination and distribution boxes provide weatherproof housing for fiber joints and distribution at secondary network points. Available in 8, 12, 16, and 24-port configurations for FTTx, GPON, and enterprise outdoor applications.",
    features: ["IP54/IP65 weatherproof ABS enclosure", "8/12/16/24-port adapter capacity", "integrated splice tray", "wall/pole mounting hardware", "SC/APC or SC/UPC adapters", "cable entry gland seals", "padlock provision"],
    specs: {"Port Counts": "8F / 12F / 16F / 24F", "Adapters": "SC/APC, SC/UPC or LC", "Rating": "IP54 / IP65", "Material": "UV-stabilized ABS", "Mounting": "Wall, pole, or aerial", "Dimensions": "Varies by model"},
    applications: ["FTTx secondary distribution point", "GPON street cabinet", "outdoor building entry termination", "ISP campus distribution"],
    standards: ["IEC 60529 (IP)", "RoHS"],
    related: ["FAT Box 16-Way", "Home Termination Box (HTB)", "PLC Splitter", "3U Cassette Splitter Rack"]
  },
  "Wall Mount Enclosure FTB-R24": {
    desc: "PDR FTB-R24 is a 24-port wall-mount fiber optic enclosure for indoor termination and cross-connection. ABS construction, SC adapter faceplate, dual cable entry, compact form factor ideal for telecom rooms and MDU risers.",
    features: ["24-port SC adapter faceplate", "ABS construction", "wall-mount with integrated fixing points", "dual cable entry with bend radius protection", "front-access for patching", "compact 250×195×75mm footprint"],
    specs: {"Model": "FTB-R24", "Ports": "24 × SC (simplex)", "Housing": "ABS", "Dimensions": "approx. 250×195×75mm", "Mount": "Wall", "Cable Entry": "Dual", "Adapters": "SC/APC or SC/UPC"},
    applications: ["MDU building riser cross-connect", "enterprise server room wall termination", "ISP NTE point", "FTTx indoor aggregation"],
    standards: ["IEC 60728", "RoHS"],
    related: ["Termination Box TB-C08", "Optical Distribution Frame (ODF)", "Fiber Optic Patch Cords & Pigtails"]
  },
  "Termination Box TB-C08": {
    desc: "PDR TB-C08 compact 8-port snap-in fiber optic termination box for indoor FTTx drop cable termination. Snap-in design for tool-free adapter panel mounting — ideal for residential and small-office FTTx NTE installations.",
    features: ["8-port SC/APC adapter face", "snap-in tool-free adapter mounting", "compact ABS body", "wall or surface mount", "cable bend radius protection", "pigtail splice accommodation"],
    specs: {"Model": "TB-C08", "Ports": "8 × SC (simplex)", "Housing": "ABS", "Mount": "Wall / surface", "Adapters": "SC/APC or SC/UPC", "Pigtail Space": "Yes"},
    applications: ["FTTx NTE at residential premises", "small office fiber entry point", "building riser secondary termination"],
    standards: ["IEC 60728", "RoHS"],
    related: ["Home Termination Box (HTB)", "Termination Box FTB-08B-2", "Fiber Optic Patch Cords & Pigtails"]
  },
  "Termination Box DIN-FB": {
    desc: "PDR DIN-FB compact fiber distribution box is DIN-rail mountable, designed for installation inside electrical cabinets and building distribution panels. Delivers fiber connectivity in mixed copper-fiber panel environments.",
    features: ["DIN-rail mounting for panel integration", "4 or 8-port SC/APC adapter face", "compact form for panel-mount", "ABS construction", "cable entry with strain relief", "pigtail splice area"],
    specs: {"Model": "DIN-FB", "Mount": "DIN rail (35mm)", "Ports": "4F or 8F SC", "Housing": "ABS", "Adapter": "SC/APC or SC/UPC", "Compatible": "Standard 35mm DIN rail"},
    applications: ["Residential MDU electrical panel fiber termination", "building management fiber drop point", "mixed copper/fiber distribution boards", "commercial premises FTTx NTE"],
    standards: ["IEC 60715 (DIN rail)", "RoHS"],
    related: ["Home Termination Box (HTB)", "Termination Box TB-C08", "FAT Box 16-Way"]
  },
  "Termination Box FTB-08B-2": {
    desc: "PDR FTB-08B-2 compact snap-in termination box offers a dual cable-entry, 8-port solution for indoor FTTx fiber termination in residential and office premises. Rugged ABS enclosure with all mounting hardware included.",
    features: ["8-port SC/APC adapter face", "dual cable entry", "snap-in adapter mount", "rugged ABS enclosure", "all mounting hardware included", "wall or surface mount"],
    specs: {"Model": "FTB-08B-2", "Ports": "8 × SC", "Cable Entries": "2", "Housing": "ABS", "Mount": "Wall/surface", "Adapters": "SC/APC or SC/UPC"},
    applications: ["Residential FTTH premises termination", "small office FTTx NTE", "building apartment entry distribution"],
    standards: ["IEC 60728", "RoHS"],
    related: ["Home Termination Box (HTB)", "Termination Box TB-C08", "Fiber Optic Patch Cords & Pigtails"]
  },
  "Optical Fiber Wall Mount Enclosure": {
    desc: "PDR two-door wall-mount fiber optic enclosures provide a cost-effective, secure method of terminating and cross-connecting fiber in telecom rooms, MDU risers, and equipment rooms. 24F to 48F capacity with integrated cable management.",
    features: ["Two-door front access design", "24F / 48F capacity", "integrated cable management guides", "SC/LC/FC adapter panel options", "ABS body with steel reinforcement", "padlock provision for security"],
    specs: {"Capacity": "24F / 48F", "Adapters": "SC/LC/FC (interchangeable)", "Housing": "ABS + steel reinforcement", "Doors": "Two-door front access", "Mount": "Wall", "Splice Trays": "Integrated"},
    applications: ["Telecom room secondary cross-connect", "MDU common area fiber termination", "enterprise LAN wall-mount distribution", "ISP NTE enclosure"],
    standards: ["IEC 60728", "RoHS"],
    related: ["Optical Distribution Frame (ODF)", "Wall Mount Enclosure FTB-R24", "Fiber Optic Patch Cords & Pigtails"]
  },
  "Heat Shrink Splice Closure": {
    desc: "PDR heat-shrink splice closures provide robust, long-term environmental protection for fiber optic cable joints in aerial, pedestal, buried, and manhole environments. Compatible with all cable types and fiber counts up to 288F.",
    features: ["Heat-shrink sealed body (no mechanical clamping)", "aerial/pedestal/buried/manhole compatible", "capacity up to 288F", "oval and round cable entry options", "integrated modular splice tray system", "UV-stabilized outer shell", "re-enterable design"],
    specs: {"Fiber Capacity": "Up to 144F / 288F", "Cable Entry": "Oval / round ports", "Deployment": "Aerial, pedestal, buried, manhole", "Sealing": "Heat-shrink outer body", "Splice Trays": "12F or 24F per tray (modular)", "Jacket": "UV-stabilized polyethylene"},
    applications: ["OSP fiber cable joint protection", "aerial fiber splicing", "underground duct joint enclosures", "submarine-accessible manhole joints", "service restoration enclosures"],
    standards: ["ITU-T L.12", "Telcordia GR-771", "IEC 60068", "RoHS"],
    related: ["Splitter Closure GJS 2016", "FAT Box 16-Way", "FDB-32 Distribution Box"]
  },
  "Splitter Closure GJS 2016": {
    desc: "PDR GJS 2016 is a mechanical-seal (no heat gun required) fiber optic splice closure with oval cable port entry. Designed for quick field deployment in buried and pedestal environments, it supports a 1:16 PLC splitter cassette alongside splice trays.",
    features: ["Mechanical seal — no heat gun required", "oval cable port for flat/figure-8 cable entry", "supports 1:4/1:8/1:16 PLC splitter cassette", "24F drop + splice capacity", "tool-free re-entry for maintenance", "IP68 rated when properly sealed"],
    specs: {"Model": "GJS 2016", "Sealing": "Mechanical clamp (no heat)", "Cable Port": "Oval", "Splitter": "1:4 / 1:8 / 1:16 PLC cassette", "Drop Capacity": "24F", "Splice Trays": "2 × 12F", "Rating": "IP68"},
    applications: ["Buried FTTx splitter point", "pedestal mounted GPON split point", "roadside fiber distribution cabinet", "drop cable distribution at secondary nodes"],
    standards: ["IEC 60529 IP68", "IEC 60068", "RoHS"],
    related: ["Heat Shrink Splice Closure", "PLC Splitter", "FAT Box 16-Way"]
  },
  "FAT Box 16-Way": {
    desc: "PDR 16-Way Fiber Access Terminal (FAT) is a compact building-entry termination and distribution box that houses a 1:16 PLC splitter for FTTx last-mile deployment. Provides 16 subscriber output ports in a weatherproof, secure enclosure for pole, wall, or pedestal mounting.",
    features: ["16 subscriber output ports (SC/APC)", "pre-loaded 1:16 PLC splitter cassette", "IP54 weatherproof ABS enclosure", "dual cable entry for feeder and drop", "padlock hasp for security", "pole, wall, and pedestal mount options"],
    specs: {"Ports": "16 × SC/APC output", "Splitter": "1:16 PLC (pre-installed)", "Enclosure": "IP54 UV-stabilized ABS", "Mounting": "Pole / wall / pedestal", "Cable Entry": "Dual gland seals", "Dimensions": "approx. 320×200×100mm"},
    applications: ["FTTx building entry multi-subscriber distribution", "GPON street cabinet secondary point", "ISP MDU last-mile deployment", "municipal broadband PON distribution"],
    standards: ["IEC 60529 IP54", "Telcordia GR-1209", "RoHS"],
    related: ["PLC Splitter", "FDB-32 Distribution Box", "3U Cassette Splitter Rack", "Home Termination Box (HTB)"]
  },
  "Home Termination Box (HTB)": {
    desc: "PDR Home Termination Box is the final FTTH termination point installed inside the subscriber's premises. Provides a clean, protected housing for the fiber pigtail splice, adapter, and the ONU/ONT connection — designed for self-install or technician deployment.",
    features: ["2-port SC/APC adapter panel (feeder-in, ONT-out)", "integrated splice holder for factory-pigtailed drop fiber", "cable entry with 90° bend radius protection", "flush-mount or surface-mount options", "ABS white finish", "minimal footprint"],
    specs: {"Ports": "2 × SC/APC", "Splice": "1 splice holder", "Housing": "White ABS", "Mount": "Flush/surface wall", "Cable Entry": "1 × 2mm or 3mm drop cable", "Dimensions": "approx. 100×70×30mm"},
    applications: ["FTTH last-drop subscriber premises termination", "ONT/ONU wall-plate connection", "MDU apartment FTTH endpoint", "self-install friendly FTTx NTE"],
    standards: ["IEC 60728", "RoHS"],
    related: ["FAT Box 16-Way", "FDB-32 Distribution Box", "Termination Box TB-C08"]
  },
  "FDB-32 Distribution Box": {
    desc: "PDR FDB-32 is a 32-port fiber distribution box that serves as the connection point between feeder cable and subscriber drop cables in FTTx deployments. Accommodates a 1:32 PLC splitter and provides organised drop cable management for up to 32 subscribers.",
    features: ["32 subscriber drop ports", "supports 1:32 PLC splitter cassette", "IP54 weatherproof ABS", "pigtail or adapter connection options", "pole / wall / aerial mounting", "colour-coded port labeling", "cable management tray"],
    specs: {"Ports": "32 × SC/APC", "Splitter": "1:32 PLC (optional)", "Rating": "IP54", "Mounting": "Pole, wall, or aerial", "Feeder Entry": "1× feeder cable", "Drop Entry": "Up to 32 × 2mm drop", "Housing": "UV-stabilized ABS"},
    applications: ["GPON FTTx 1:32 split point", "ISP urban rollout distribution node", "last-mile aerial distribution for 32 subscribers", "municipal fiber-to-home deployment"],
    standards: ["IEC 60529 IP54", "Telcordia GR-1209", "RoHS"],
    related: ["FAT Box 16-Way", "PLC Splitter", "Home Termination Box (HTB)", "3U Cassette Splitter Rack"]
  },
  "3U Cassette Splitter Rack": {
    desc: "PDR 3U Rack Mount Cassette Splitter Panel is a vital component in any GPON/FTTx infrastructure. Designed in conjunction with leading service providers, this compact 19\" 3U panel offers pre-connectorised presentation and accommodates modular PLC splitter cassettes for rapid OLT-side deployment.",
    features: ["19\" rack mount 3U form factor", "modular cassette system for 1:8 / 1:16 / 1:32 PLC splitters", "pre-connectorised SC/APC or LC/APC output ports", "integrated cable management", "supports GPON and XGS-PON OLT", "low per-port insertion loss"],
    specs: {"Format": "19\" 3U rack", "Cassettes": "Up to 6 per panel (per model)", "Outputs": "Up to 192 SC/APC ports (6×1:32)", "Adapter": "SC/APC or LC/APC", "IL per port": "Splitter IL + <0.5dB connector", "Compatible": "OLT rack 19\"/23\""},
    applications: ["GPON/XGS-PON OLT co-location rack", "FTTx central office head-end", "ISP aggregation POP", "large-scale FTTH rollout OLT side", "government broadband infrastructure"],
    standards: ["Telcordia GR-1209", "Telcordia GR-1221", "IEC 61300", "RoHS"],
    related: ["PLC Splitter", "FAT Box 16-Way", "FDB-32 Distribution Box", "Rack-Mount Fiber Management"]
  },
  "Mini Optical Power Meter": {
    desc: "PDR Mini Optical Power Meter is an essential portable instrument for fiber installation and maintenance crews. Tests optical power at all standard wavelengths with a large backlit display and long battery life — the entry-level field standard tool.",
    features: ["Multi-wavelength measurement (850/1300/1310/1490/1550/1625nm)", "wide power range –70 to +10dBm", "SC/FC/ST adapter port", "auto-wavelength memory recall", "large backlit LCD", ">50 hours battery life on AA cells"],
    specs: {"Wavelengths": "850/1300/1310/1490/1550/1625nm", "Power Range": "-70 to +10dBm", "Resolution": "0.01dB", "Accuracy": "±0.2dB", "Connector": "SC adapter (FC/ST adapters included)", "Battery": "2×AA", "Battery Life": ">50 hours", "Display": "Backlit LCD"},
    applications: ["Fiber link loss testing (OLTS)", "installation acceptance testing", "network maintenance power verification", "FTTx contractor field measurement"],
    standards: ["IEC 61010", "RoHS"],
    related: ["Laser Source", "5-in-1 Optical Power Meter", "Mini OTDR PDR4402S"]
  },
  "5-in-1 Optical Power Meter": {
    desc: "PDR APM80N is a multi-function 5-in-1 field tool combining optical power meter, VFL (visual fault locator), optical source, fiber endface microscope, and optical talk set in a single handheld instrument. The ideal all-in-one tool for FTTx installers and field technicians.",
    features: ["OPM + VFL + optical source + endface camera + talk set in one unit", "all telecom wavelengths 850–1625nm", "–70 to +10dBm range", "2mW VFL output", "fiber endface camera with on-screen display", "USB charging", "rugged IP54 body"],
    specs: {"Model": "APM80N", "Functions": "5-in-1 (OPM/VFL/Source/Microscope/Talk Set)", "Wavelengths": "850/1310/1490/1550/1625nm", "OPM Range": "-70 to +10dBm", "VFL": "2mW (2km range)", "Endface": "200× magnification", "Battery": "USB rechargeable Li-ion"},
    applications: ["FTTx drop cable installation and testing", "contractor all-in-one field kit", "OLT/ONT commissioning", "connector quality check", "long-distance fault location with VFL"],
    standards: ["IEC 61010", "IEC 61300-3-35", "RoHS"],
    related: ["Mini Optical Power Meter", "Laser Source", "AutoGet Wifi Endface Microscope"]
  },
  "PON Power Meter": {
    desc: "PDR PON Power Meter enables live, non-intrusive GPON network measurements at all three PON wavelengths simultaneously. Pass-through design means no service interruption during testing — essential for GPON troubleshooting and acceptance without customer impact.",
    features: ["Online (live network) pass-through design — no service interruption", "simultaneous 1310/1490/1550nm measurement", "SC/APC connector (GPON standard)", "optical splitter coupler built-in", "compact handheld", "auto wavelength identification"],
    specs: {"Wavelengths": "1310nm / 1490nm / 1550nm", "Range": "-65 to +5dBm", "Method": "Live pass-through (in-line)", "Connector": "SC/APC", "Resolution": "0.01dBm", "Battery": "USB rechargeable"},
    applications: ["GPON/XGS-PON in-service troubleshooting", "FTTx OLT-to-ONT link validation", "ISP field commissioning of live subscribers", "QoS verification on active PON"],
    standards: ["ITU-T G.984 (GPON)", "IEC 61010", "RoHS"],
    related: ["5-in-1 Optical Power Meter", "Mini OTDR PDR4402S", "PLC Splitter"]
  },
  "Variable Fiber Attenuator": {
    desc: "PDR calibrated variable fiber attenuator provides precise, repeatable optical power reduction at 1310/1490/1550nm for SM fiber. Lab-grade instrument for receiver dynamic range testing, WDM power balancing, and transceiver characterisation.",
    features: ["Calibrated attenuation dial 0–60dB", "SM single-mode operation", "three wavelengths 1310/1490/1550nm", "SC/FC/LC/ST connector", "return loss >45dB", "stable over temperature", "compact bench-top form"],
    specs: {"Attenuation Range": "0–60dB variable", "Wavelengths": "1310 / 1490 / 1550nm", "Fiber": "SM 9/125", "Connector": "SC / FC / LC", "Accuracy": "±1dB", "Return Loss": ">45dB", "PDL": "<0.3dB"},
    applications: ["Transceiver dynamic range characterisation", "WDM channel power equalization", "receiver sensitivity and overload testing", "BER test setup", "lab R&D optical bench"],
    standards: ["IEC 61300-3-4", "RoHS"],
    related: ["Laser Source", "Return Loss Meter", "5-in-1 Optical Power Meter"]
  },
  "Laser Source": {
    desc: "PDR stable optical laser sources with calibration certificate provide reliable, low-noise light output for optical loss testing paired with a power meter. Available in SM (1310/1550nm) and MM (850nm) versions.",
    features: ["Stable CW output", "available in 850/1310/1490/1550nm", "SM and MM models", "±0.01dB output stability", "SC/FC/LC connector", "calibration certificate included", "modulation output option", "battery-operated portable"],
    specs: {"Wavelengths": "850nm / 1310nm / 1490nm / 1550nm (model-dependent)", "Stability": "±0.01dB", "Output Power": "-7 to +5dBm (model-dependent)", "Connector": "SC / FC / LC", "Modulation": "CW and 270Hz/1kHz/2kHz", "Battery": "AA cells >30 hours"},
    applications: ["Paired with OPM for OLTS loss testing", "insertion loss measurement of cables and components", "WDM channel launch calibration", "factory and R&D lab optical bench"],
    standards: ["IEC 61010", "IEC 61315 (calibration)", "RoHS"],
    related: ["Mini Optical Power Meter", "Variable Fiber Attenuator", "5-in-1 Optical Power Meter"]
  },
  "Optical Talk Set": {
    desc: "PDR optical talk sets enable crystal-clear FM voice communication between two field technicians over the live fiber under test — without interrupting network traffic. Indispensable for coordinated splicing, testing, and fault location in trenching and aerial work.",
    features: ["Full-duplex FM voice over fiber under test", "SC/FC connector", "50km range", "does not interrupt network traffic", "standalone battery-powered operation", "compact rugged handheld design"],
    specs: {"Communication": "Full duplex FM audio over fiber", "Range": "≤50km", "Connector": "SC / FC", "Wavelength": "650nm visible light (or 1310nm carrier model)", "Battery": "4×AA", "Compatibility": "SM and MM fiber"},
    applications: ["Trenching and duct crew coordination during FTTx rollout", "aerial cable lashing crew communication", "splicing both-end coordination", "OTDR fault location with remote end crew"],
    standards: ["IEC 61010", "RoHS"],
    related: ["Mini Optical Power Meter", "Mini OTDR PDR4402S", "Fusion Splicer PDR618H"]
  },
  "E1 BER Tester": {
    desc: "PDR handheld E1 BER Tester is a compact, battery-operated instrument for commissioning and troubleshooting 2Mbps E1/T1 telecom circuits. Generates PRBS test patterns, measures BER, and reports G.826 error performance statistics.",
    features: ["2Mbps G.703 E1 interface", "PRBS test patterns (2^7–1 to 2^23–1)", "BER measurement down to 10^-12", "G.826 error analysis and reporting", "jitter measurement", "RJ-48C / BNC / balanced connectors", "battery-powered portable"],
    specs: {"Standard": "ITU-T G.703, G.823, G.826", "Signal": "2048kbps E1", "Patterns": "PRBS 2^7-1 to 2^23-1", "BER": "<10^-12", "Connectors": "RJ-48C and BNC", "Display": "Large LCD with G.826 stats", "Battery": "Li-ion rechargeable"},
    applications: ["Telecom trunk circuit commissioning", "SDH/PDH framing circuit testing", "E1 leased line acceptance", "ISP backbone E1 link qualification", "NOC/field diagnostics"],
    standards: ["ITU-T G.703, G.821, G.826", "RoHS"],
    related: ["Return Loss Meter", "Optical Talk Set", "Mini Optical Power Meter"]
  },
  "Return Loss Meter": {
    desc: "PDR's innovative dual-function TwoWay Return Loss Meter combines optical polarity checking and return loss measurement in one compact field instrument. Reduces the number of instruments field crews must carry for acceptance testing.",
    features: ["Dual function: polarity checker + return loss meter", "return loss measurement at 1310/1550nm", "polarity identification (A-to-B or B-to-A)", "SC/FC/LC connector", "≥60dB measurement range", "battery-operated portable"],
    specs: {"Functions": "Return Loss + Polarity", "Wavelengths": "1310nm / 1550nm", "RL Range": "0 to -65dB", "Resolution": "0.1dB", "Connector": "SC / FC / LC", "Battery": "AA cells", "Display": "LCD"},
    applications: ["Connector return loss acceptance testing", "pre-installation polarity verification", "link characterisation for WDM", "OTDR complement for field QA"],
    standards: ["IEC 61300-3-6 (return loss)", "RoHS"],
    related: ["Mini Optical Power Meter", "Laser Source", "5-in-1 Optical Power Meter"]
  },
  "AutoGet Wifi Endface Microscope": {
    desc: "PDR AutoGet is an intelligent wireless fiber endface inspection microscope with IEC 61300-3-35 automatic pass/fail grading. Wi-Fi transmission to smartphone or tablet enables hands-free, real-time endface inspection during field patching and acceptance testing.",
    features: ["Wi-Fi transmission to iOS/Android app", "400× magnification", "IEC 61300-3-35 auto pass/fail grading", "Tip-loc probe system for PC/APC/MPO connectors", "rechargeable battery", "probe-tip interchangeable"],
    specs: {"Magnification": "400×", "Image": "IEC 61300-3-35 auto grade", "Connectivity": "Wi-Fi to iOS/Android", "Probe Tips": "SC/LC/FC/ST (PC+APC) and MPO", "Battery": "USB rechargeable", "Display": "Smartphone/tablet app", "Pass/Fail": "Automatic"},
    applications: ["Data centre patching QC", "FTTx acceptance testing", "field connector inspection before mating", "contractor handover documentation", "splice-on connector verification"],
    standards: ["IEC 61300-3-35", "RoHS"],
    related: ["EasyGet Wifi Endface Microscope", "EasyCheck V2 Endface Inspector", "Fiber Optic Cleaner Pen"]
  },
  "EasyGet Wifi Endface Microscope": {
    desc: "PDR EasyGet is a Wi-Fi-enabled fiber endface inspection microscope for field technicians and installers. Streams live endface images to a smartphone for contamination detection — at a lower price point than the AutoGet.",
    features: ["Wi-Fi image transmission to iOS/Android app", "200× magnification", "contamination detection on-screen", "SC/LC/FC/ST compatible probe tips", "USB charging", "lightweight handheld"],
    specs: {"Magnification": "200×", "Connectivity": "Wi-Fi to iOS/Android", "Probe Tips": "SC/LC/FC/ST", "Battery": "USB rechargeable", "Display": "Smartphone app", "Weight": "<200g"},
    applications: ["FTTx installer field connector check", "building cabling acceptance", "end-face inspection before mating in the field", "network maintenance troubleshooting"],
    standards: ["IEC 61300-3-35", "RoHS"],
    related: ["AutoGet Wifi Endface Microscope", "EasyCheck V2 Endface Inspector", "Fiber Optic Cleaner Pen"]
  },
  "EasyCheck V2 Endface Inspector": {
    desc: "PDR EasyCheck V2 is a digital fiber endface inspector with IEC 61300-3-35 pass/fail evaluation shown directly on its built-in LCD display — no Wi-Fi or smartphone required. Reliable, cost-effective, and the preferred tool for everyday installation QC.",
    features: ["Built-in LCD display (no smartphone needed)", "IEC 61300-3-35 pass/fail evaluation", "200× magnification", "interchangeable probe tips SC/LC/FC/ST/MPO", "USB output for image capture", "compact and rugged"],
    specs: {"Magnification": "200×", "Pass/Fail": "IEC 61300-3-35 automatic", "Display": "Built-in color LCD", "Probe Tips": "SC/LC/FC/ST/MPO", "Output": "USB image export", "Battery": "AA or rechargeable Li-ion"},
    applications: ["On-site installation QC", "pre-connection inspection in the field", "data centre patching check", "contractor acceptance documentation"],
    standards: ["IEC 61300-3-35", "RoHS"],
    related: ["AutoGet Wifi Endface Microscope", "Fiber Optic Cleaner Pen", "Fiber Optic Cleaner Pen — MPO"]
  },
  "High Power Patch Cord": {
    desc: "PDR High Power Patch Cords use 200–1000µm large-core ferrules and air-gap or non-contact technology to deliver kilowatt-level laser power with minimal thermal damage. Essential for industrial laser delivery, LiDAR, medical laser systems, and defence rangefinders.",
    features: ["200–1000µm large-core ferrule options", "air-gap / non-contact coupling technology", "SMA-905 and custom connector ends", "high damage threshold (>100W)", "available in armoured cable", "SM and MM high-power fiber options"],
    specs: {"Core Diameters": "200 / 400 / 600 / 800 / 1000µm", "Connectors": "SMA-905 / FC / custom", "Power Handling": ">100W (air-gap)", "Fiber": "HI1060, LMA, or MM step-index", "Jacket": "Armoured or LSZH", "IL": "<1.5dB (connector pair)"},
    applications: ["Industrial laser cutting/welding beam delivery", "medical surgical laser delivery", "LiDAR and rangefinder systems", "defence laser designators", "research and university laser labs"],
    standards: ["IEC 60825-1", "RoHS"],
    related: ["Custom Cable Assembly", "Fiber Optic Patch Cords & Pigtails"]
  },
  "Custom Cable Assembly": {
    desc: "PDR engineers bespoke fiber optic cable assemblies to customer specification — any fiber type, connector combination, jacket, length, polarity, breakout configuration, fiber count, and environmental rating. From prototype to production volumes. 5–15 business day lead time on standard custom designs.",
    features: ["Any fiber type: SM/MM/PM/HB/specialty", "any connector combination (SC/LC/FC/ST/MPO/E2000/SMA)", "any length, armoured or unarmoured", "indoor/outdoor/tactical/military jacket", "custom polarity and breakout", "100% factory tested with test report", "MOQ flexible"],
    specs: {"Fiber Types": "SM OS1/OS2, MM OM1–OM5, PM, specialty", "Connectors": "All standard and hybrid combinations", "Lengths": "0.5m to 5km+", "Jacket": "PVC/LSZH/Armoured/Tactical/PE", "Polish": "PC/UPC/APC", "Testing": "100% IL/RL interferometry"},
    applications: ["OEM supply for equipment manufacturers", "defence and government special projects", "research laboratory custom connections", "broadcast hybrid cable assemblies", "unique site-specific assemblies"],
    standards: ["Customer-specified; IEC 61754", "MIL-PRF-29504 (defence)", "RoHS"],
    related: ["Fiber Optic Patch Cords & Pigtails", "High Power Patch Cord", "MPO Cable Assembly", "SMPTE Cable Assembly"]
  },
  "Fiber Cleaver CLV-B1": {
    desc: "PDR CLV-B1 precision fiber cleaver is designed for fast-connector field termination and general fiber preparation. Delivers clean, flat endface cleaves on 125µm bare fiber for low-loss splices and connector terminations.",
    features: ["Precision V-groove tungsten blade", "≥48,000 cleave blade life", "auto-feed fiber advance", "250µm / 900µm / 3.0mm fiber holder compatibility", "compact carrying case included", "fibre waste collection chamber"],
    specs: {"Application": "Fast connector / splice preparation", "Bare Fiber": "125µm cladding", "Coating": "250µm / 900µm / 2.0mm / 3.0mm", "Blade Life": "≥48,000 cleaves", "Cleave Angle": "<0.5° typical", "Body": "Compact ABS with waste bin"},
    applications: ["Fast-connector field termination", "fusion splice preparation", "FTTx drop cable preparation", "emergency fiber restoration", "lab and factory fiber preparation"],
    standards: ["IEC 61300", "RoHS"],
    related: ["Field-Installable Connector", "Fiber Optic Cleaner Pen", "Fusion Splicer PDR618H"]
  },
  "Fiber Optic Cleaner Pen": {
    desc: "PDR Fiber Optic Cleaner Pen is an essential field accessory for dry cleaning the ferrule endfaces of SC/LC/FC/ST female connectors. Push-action cartridge delivers a fresh cleaning surface with each press — eliminating contamination before mating.",
    features: ["Push-action dry cleaning", "800 cleans per cartridge", "compatible with SC/LC/FC/ST female receptacles", "no cleaning fluid required", "compact pen form for pocket carry", "IEC 61300-3-35 compatible cleaning result"],
    specs: {"Compatible": "SC/LC/FC/ST female", "Cleans": "800 per cartridge", "Method": "Push-action dry", "Cleaning Media": "Oil-free lint-free tape", "Dimensions": "Pen-form ~135mm length", "Replacement": "Cartridge refillable"},
    applications: ["Pre-mating connector cleaning in the field", "patch panel and equipment port cleaning", "data centre patching maintenance", "FTTx connector QA"],
    standards: ["IEC 61300-3-35", "RoHS"],
    related: ["Fiber Optic Cleaner Pen — MPO", "Cassette Cleaner", "AutoGet Wifi Endface Microscope"]
  },
  "Fiber Optic Cleaner Pen — MPO": {
    desc: "PDR MPO Cleaner Pen is a high-performance device for cleaning the ferrule endfaces of MPO and MTP multifiber connectors. A single push-action click simultaneously cleans all 12 or 24 fiber endfaces in one operation.",
    features: ["Cleans all 12/24 fibers in a single action", "compatible with MPO Male and Female connectors", "150 cleans per cassette", "push-action dry cleaning", "no solvent required", "lightweight portable"],
    specs: {"Compatible": "MPO/MTP Male and Female", "Cleans": "150 per cassette", "Fiber Count": "12F and 24F MT ferrule", "Method": "Push-action dry", "Cleaning": "IEC 61300-3-35 compatible"},
    applications: ["Data centre MPO trunk cable patching QC", "MPO connector inspection and cleaning before mating", "high-density 40G/100G/400G fabric patching maintenance"],
    standards: ["IEC 61300-3-35", "RoHS"],
    related: ["Fiber Optic Cleaner Pen", "Cassette Cleaner", "MPO Cable Assembly", "AutoGet Wifi Endface Microscope"]
  },
  "Cassette Cleaner": {
    desc: "PDR Cassette Cleaner provides a multi-format connector cleaning system for SC/LC/FC/ST connectors using a refillable dry tape cassette. Compact and portable — ideal for field kit and panel maintenance.",
    features: ["Multi-format SC/LC/FC/ST cleaning", "clean-room grade dry lint-free tape", "refillable cassette", "no solvent or liquid required", "compact portable form factor", "consistent cleaning pressure per stroke"],
    specs: {"Compatible": "SC/LC/FC/ST connectors", "Cleaning": "Dry lint-free tape (refillable)", "Strokes": "Per cassette varies", "Method": "Push-action", "Form": "Compact handheld"},
    applications: ["Field patch panel cleaning", "equipment port maintenance", "multi-connector batch cleaning on site", "installation QA cleaning before acceptance"],
    standards: ["IEC 61300-3-35", "RoHS"],
    related: ["Fiber Optic Cleaner Pen", "Fiber Optic Cleaner Pen — MPO", "AutoGet Wifi Endface Microscope"]
  },
  "Cold Shrink Sleeve": {
    desc: "PDR Cold Shrink Sleeve provides environmental weatherproofing and moisture protection for cable joints and transitions without requiring a heat gun. Simply position over the joint and release the core — the pre-expanded silicone contracts to form an IP68-equivalent seal.",
    features: ["No heat gun required — cold application", "pre-expanded silicone sleeve", "IP68-equivalent seal on proper installation", "UV-resistant outer shell", "compatible with round cable 10–50mm OD", "re-positionable before final release"],
    specs: {"Material": "Silicone rubber", "Application": "Cold shrink (no heat tool)", "Cable OD": "10–50mm (model-dependent)", "Rating": "IP68-equivalent", "UV Resistance": "Yes", "Temp Range": "-40°C to +90°C", "Color": "Black or grey"},
    applications: ["Aerial fiber cable joint weatherproofing", "underground cable entry sealing", "cell tower cable weatherproofing", "outdoor power cable joint protection"],
    standards: ["IEC 60502", "IP68 performance", "RoHS"],
    related: ["Heat Shrink Splice Closure", "Field-Installable Connector"]
  }
};
