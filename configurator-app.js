/* ================================================================
   CABLE CONFIGURATOR WIZARD LOGIC
   ================================================================ */

const state = {
  step: 1,
  selections: {
    fiber: null,
    connector: null,
    length: null,
    jacket: null
  }
};

function selectOption(category, value, element) {
  // Update State
  state.selections[category] = value;
  
  // Update UI Selection
  const parent = element.parentElement;
  const options = parent.querySelectorAll('.conf-opt');
  options.forEach(opt => opt.classList.remove('selected'));
  element.classList.add('selected');

  // Conditional Logic: OS2 disables MPO in this simple example
  if (category === 'fiber') {
    const mpoOpt = document.getElementById('opt-mpo');
    if (value === 'OS2') {
      if(state.selections.connector === 'MPO') state.selections.connector = null;
      mpoOpt.style.opacity = '0.3';
      mpoOpt.style.pointerEvents = 'none';
      mpoOpt.querySelector('p').textContent = "Not available for OS2";
    } else {
      mpoOpt.style.opacity = '1';
      mpoOpt.style.pointerEvents = 'auto';
      mpoOpt.querySelector('p').textContent = "12 or 24 fiber high density.";
    }
    // Update live spec preview
    document.getElementById('conf-live-spec').textContent = `${value} Selected`;
    // Update image tint/preview based on fiber
    const img = document.getElementById('conf-preview-img');
    if(value === 'OS2') img.style.filter = "hue-rotate(0deg)"; // Yellowish
    if(value === 'OM3') img.style.filter = "hue-rotate(180deg)"; // Aqua
    if(value === 'OM4') img.style.filter = "hue-rotate(280deg)"; // Magenta
  }

  // Auto-advance if not last step
  document.getElementById('btn-next').disabled = false;
}

function updateReview() {
  document.getElementById('rev-fiber').textContent = state.selections.fiber || '-';
  document.getElementById('rev-connector').textContent = state.selections.connector || '-';
  document.getElementById('rev-length').textContent = state.selections.length || '-';
  document.getElementById('rev-jacket').textContent = state.selections.jacket || '-';

  const title = `Custom ${state.selections.fiber} Patch Cord`;
  document.getElementById('conf-preview-title').textContent = title;
  document.getElementById('conf-live-spec').textContent = `${state.selections.connector} · ${state.selections.length} · ${state.selections.jacket}`;
}

function updateStepUI() {
  // Hide all steps
  document.querySelectorAll('.conf-step').forEach(el => el.classList.remove('active'));
  // Show current step
  document.getElementById(`step-${state.step}`).classList.add('active');

  // Update Buttons
  const btnBack = document.getElementById('btn-back');
  const btnNext = document.getElementById('btn-next');

  btnBack.style.visibility = state.step > 1 ? 'visible' : 'hidden';

  if (state.step === 5) {
    updateReview();
    btnNext.textContent = 'Add to Quote';
    btnNext.classList.add('add-to-quote-btn');
    btnNext.onclick = finalizeQuote;
    btnNext.disabled = false;
  } else {
    btnNext.textContent = 'Next Step \u2192';
    btnNext.classList.remove('add-to-quote-btn');
    btnNext.onclick = nextStep;
    
    // Check if current step has selection
    const stepKeys = ['fiber', 'connector', 'length', 'jacket'];
    const currentKey = stepKeys[state.step - 1];
    btnNext.disabled = !state.selections[currentKey];
  }
}

function nextStep() {
  if (state.step < 5) {
    state.step++;
    updateStepUI();
  }
}

function prevStep() {
  if (state.step > 1) {
    state.step--;
    updateStepUI();
  }
}

function finalizeQuote() {
  const qty = parseInt(document.getElementById('conf-qty').value) || 1;
  const title = `Custom ${state.selections.fiber} Assembly`;
  const specs = `${state.selections.connector}, ${state.selections.length}, ${state.selections.jacket}`;
  
  if (window.rfqCart) {
    window.rfqCart.addItem({
      title: title,
      specs: specs,
      image: document.getElementById('conf-preview-img').src,
      qty: qty
    });
  } else {
    console.error("RFQ Cart not found globally!");
  }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  updateStepUI();
});
