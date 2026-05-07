/* ================================================================
   FIBER SELECTOR LOGIC
   ================================================================ */

const catalog = [
  {
    id: "FMS-1U-24",
    title: "1U Rack Mount LIU - 24 Core",
    desc: "Sliding tray patch panel for standard 19-inch racks.",
    image: "images/fiber-patch-panel.png",
    env: "Indoor",
    mount: "Rack Mount",
    cap: 24,
    ports: ["LC Duplex", "SC Simplex", "ST Simplex"],
    accessories: ["Splice Trays Only", "Pre-loaded Pigtails", "Fully Loaded (Adapters + Pigtails)"]
  },
  {
    id: "FMS-2U-48",
    title: "2U High Density ODF - 48 Core",
    desc: "High density patch panel with integrated cable management.",
    image: "images/fiber-patch-panel.png",
    env: "Indoor",
    mount: "Rack Mount",
    cap: 48,
    ports: ["LC Duplex", "SC Duplex"],
    accessories: ["Splice Trays Only", "Fully Loaded (Adapters + Pigtails)"]
  },
  {
    id: "FDB-OUT-16",
    title: "Outdoor IP65 Termination Box",
    desc: "Weatherproof enclosure for FTTH drops and pole mounting.",
    image: "images/fiber-patch-panel.png",
    env: "Outdoor",
    mount: "Pole Mount",
    cap: 24,
    ports: ["SC Simplex", "LC Duplex"],
    accessories: ["Splitter Installed", "Empty"]
  },
  {
    id: "WMS-IN-48",
    title: "Indoor Wall Mount Enclosure",
    desc: "Compact dual-door lockable enclosure for building telecom rooms.",
    image: "images/fiber-patch-panel.png",
    env: "Indoor",
    mount: "Wall Mount",
    cap: 48,
    ports: ["LC Duplex", "SC Simplex"],
    accessories: ["Splice Trays Only", "Fully Loaded"]
  },
  {
    id: "FMS-4U-144",
    title: "4U Enterprise ODF - 144 Core",
    desc: "Maximum capacity data center distribution frame.",
    image: "images/fiber-patch-panel.png",
    env: "Indoor",
    mount: "Rack Mount",
    cap: 144,
    ports: ["LC Duplex", "MPO Cassettes"],
    accessories: ["Empty Frame", "Loaded with Cassettes"]
  }
];

function renderGrid() {
  // Get active filters
  const envFilters = Array.from(document.querySelectorAll('.filter-env:checked')).map(cb => cb.value);
  const mountFilters = Array.from(document.querySelectorAll('.filter-mount:checked')).map(cb => cb.value);
  const capFilters = Array.from(document.querySelectorAll('.filter-cap:checked')).map(cb => parseInt(cb.value));

  // Filter catalog
  const filtered = catalog.filter(item => {
    const envMatch = envFilters.includes(item.env);
    const mountMatch = mountFilters.includes(item.mount);
    
    let capMatch = false;
    if (item.cap <= 24 && capFilters.includes(24)) capMatch = true;
    if (item.cap > 24 && item.cap <= 48 && capFilters.includes(48)) capMatch = true;
    if (item.cap > 48 && item.cap <= 96 && capFilters.includes(96)) capMatch = true;
    if (item.cap > 96 && capFilters.includes(144)) capMatch = true;

    return envMatch && mountMatch && capMatch;
  });

  const container = document.getElementById('sel-results');
  if (!container) return;
  
  document.getElementById('sel-count').textContent = `Showing ${filtered.length} products`;

  container.innerHTML = filtered.map((item, index) => `
    <div class="sel-card" id="card-${index}">
      <div class="sel-card-img">
        <img src="${item.image}" alt="${item.title}">
      </div>
      <div class="sel-card-body">
        <div class="sel-badges">
          <span class="sel-badge">${item.env}</span>
          <span class="sel-badge">${item.mount}</span>
          <span class="sel-badge">${item.cap} Core Max</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <button class="btn btn-outline" style="width:100%; justify-content:center;" onclick="toggleConfig(${index})">Configure Options</button>
      </div>
      
      <!-- Inline Expandable Configurator -->
      <div class="sel-config-panel">
        <div class="sel-config-row">
          <label>Port Interface</label>
          <select id="port-${index}">
            ${item.ports.map(p => `<option value="${p}">${p}</option>`).join('')}
          </select>
        </div>
        <div class="sel-config-row">
          <label>Accessories / Load State</label>
          <select id="acc-${index}">
            ${item.accessories.map(a => `<option value="${a}">${a}</option>`).join('')}
          </select>
        </div>
        <div style="display:flex; gap:12px; margin-top:20px;">
          <input type="number" id="qty-${index}" value="1" min="1" style="width:60px; padding:10px; border-radius:8px; border:1px solid var(--line);">
          <button class="btn btn-primary" style="flex:1; justify-content:center;" onclick="addFromSelector(${index})">Add to Quote</button>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleConfig(index) {
  const card = document.getElementById(`card-${index}`);
  const isExpanded = card.classList.contains('expanded');
  
  if (isExpanded) {
    card.classList.remove('expanded');
    card.querySelector('button.btn-outline').textContent = 'Configure Options';
  } else {
    card.classList.add('expanded');
    card.querySelector('button.btn-outline').textContent = 'Close Options';
  }
}

function addFromSelector(index) {
  const card = document.getElementById(`card-${index}`);
  const title = card.querySelector('h3').textContent;
  const port = document.getElementById(`port-${index}`).value;
  const acc = document.getElementById(`acc-${index}`).value;
  const qty = parseInt(document.getElementById(`qty-${index}`).value) || 1;
  const img = card.querySelector('.sel-card-img img').src;

  if (window.rfqCart) {
    window.rfqCart.addItem({
      title: title,
      specs: `${port} · ${acc}`,
      image: img,
      qty: qty
    });
    
    const btn = card.querySelector('.btn-primary');
    const originalText = btn.textContent;
    btn.textContent = '✓ Added';
    setTimeout(() => btn.textContent = originalText, 1500);
  }
}

// Event Listeners for Filters
document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelectorAll('input[type="checkbox"]');
  filters.forEach(cb => {
    cb.addEventListener('change', renderGrid);
  });
  renderGrid();
});
