/**
 * RFQ Quote Cart Logic
 * Handles the floating widget, drawer UI, and localStorage persistence.
 */

class RFQCart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('pdr_rfq_cart')) || [];
    this.initUI();
    this.updateBadge();
    this.renderItems();
  }

  initUI() {
    // Inject CSS for the drawer if not already present
    // (Already in premium-tools.css)

    // Create Backdrop
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'rfq-backdrop';
    document.body.appendChild(this.backdrop);
    this.backdrop.addEventListener('click', () => this.closeCart());

    // Create Drawer
    this.drawer = document.createElement('div');
    this.drawer.className = 'rfq-drawer';
    this.drawer.innerHTML = `
      <div class="rfq-header">
        <h2>Your Quote Request</h2>
        <button class="rfq-close">&times;</button>
      </div>
      <div class="rfq-body">
        <div id="rfq-items-list"></div>
      </div>
      <div class="rfq-footer">
        <form class="rfq-form" id="rfq-submit-form">
          <input type="text" placeholder="Full Name" required id="rfq-name">
          <input type="email" placeholder="Work Email" required id="rfq-email">
          <input type="text" placeholder="Company Name" required id="rfq-company">
          <textarea placeholder="Additional Requirements (Lengths, Connectors, etc.)" rows="3" id="rfq-notes"></textarea>
          <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center;">Submit Request for Quote</button>
        </form>
      </div>
    `;
    document.body.appendChild(this.drawer);
    this.drawer.querySelector('.rfq-close').addEventListener('click', () => this.closeCart());
    document.getElementById('rfq-submit-form').addEventListener('submit', (e) => this.handleSubmit(e));

    // Create Floating Widget
    this.widget = document.createElement('div');
    this.widget.className = 'rfq-cart-widget';
    this.widget.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: var(--accent);
      color: white;
      padding: 16px 24px;
      border-radius: 99px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 12px;
      box-shadow: 0 12px 32px -8px rgba(2,132,199,0.5);
      z-index: 9998;
      transition: all 0.3s;
      font-weight: 700;
      font-family: 'Manrope', sans-serif;
    `;
    this.widget.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <span>Quote Cart</span>
      <div class="badge">0</div>
    `;
    document.body.appendChild(this.widget);
    this.widget.addEventListener('click', () => this.openCart());
  }

  addItem(item) {
    // item: { title, specs, image, qty }
    const existing = this.items.find(i => i.title === item.title && i.specs === item.specs);
    if (existing) {
      existing.qty += item.qty;
    } else {
      this.items.push(item);
    }
    this.save();
    this.renderItems();
    this.updateBadge();
    this.openCart();
  }

  removeItem(index) {
    this.items.splice(index, 1);
    this.save();
    this.renderItems();
    this.updateBadge();
  }

  updateQty(index, delta) {
    this.items[index].qty += delta;
    if (this.items[index].qty < 1) this.items[index].qty = 1;
    this.save();
    this.renderItems();
  }

  save() {
    localStorage.setItem('pdr_rfq_cart', JSON.stringify(this.items));
  }

  updateBadge() {
    const total = this.items.reduce((sum, item) => sum + item.qty, 0);
    this.widget.querySelector('.badge').textContent = total;
    this.widget.style.display = total > 0 ? 'flex' : 'none';
  }

  renderItems() {
    const list = document.getElementById('rfq-items-list');
    if (!list) return;

    if (this.items.length === 0) {
      list.innerHTML = '<p style="text-align:center; color:var(--muted); padding:40px 0;">Your cart is empty.</p>';
      return;
    }

    list.innerHTML = this.items.map((item, idx) => `
      <div class="rfq-item">
        <img src="${item.image}" class="rfq-item-img" onerror="this.src='images/fiber-patchcord.png'">
        <div class="rfq-item-info">
          <h4>${item.title}</h4>
          <p>${item.specs}</p>
          <div class="rfq-item-actions">
            <div class="rfq-qty">
              <button onclick="window.rfqCart.updateQty(${idx}, -1)">-</button>
              <span>${item.qty}</span>
              <button onclick="window.rfqCart.updateQty(${idx}, 1)">+</button>
            </div>
            <button class="rfq-remove" onclick="window.rfqCart.removeItem(${idx})">Remove</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  openCart() {
    this.drawer.classList.add('open');
    this.backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeCart() {
    this.drawer.classList.remove('open');
    this.backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.textContent;
    
    btn.textContent = 'Submitting...';
    btn.disabled = true;

    // Simulate API call
    setTimeout(() => {
      alert("Quote Request Submitted Successfully! Our engineers will contact you within 24 hours.");
      this.items = [];
      this.save();
      this.updateBadge();
      this.renderItems();
      this.closeCart();
      btn.textContent = originalText;
      btn.disabled = false;
      e.target.reset();
    }, 1500);
  }
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  window.rfqCart = new RFQCart();
  
  // Attach global click handler for "Add to Quote" buttons on static pages
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-to-quote-btn');
    if (btn) {
      e.preventDefault();
      const title = btn.getAttribute('data-title') || 'Custom Fiber Assembly';
      const specs = btn.getAttribute('data-specs') || 'Standard Specs';
      const img = btn.getAttribute('data-img') || 'images/fiber-patchcord.png';
      
      window.rfqCart.addItem({
        title: title,
        specs: specs,
        image: img,
        qty: 1
      });
      
      // Visual feedback
      const originalText = btn.innerHTML;
      btn.innerHTML = '✓ Added';
      setTimeout(() => btn.innerHTML = originalText, 1500);
    }
  });
});
