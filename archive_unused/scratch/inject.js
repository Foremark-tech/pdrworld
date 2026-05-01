const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../index.html');
let html = fs.readFileSync(file, 'utf8');

// 1. Add CSS
const newCSS = `
    /* Fiber Scrollytelling */
    .fiber-scroll-zone {
      height: 700vh;
      position: relative;
      padding-top: 76px; /* Header offset */
    }
    .fiber-sticky {
      position: sticky;
      top: 0;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      background: #09090B;
    }
    #fiberCanvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .fiber-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .fiber-beat {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      z-index: 3;
      padding: 0 max(48px, 4vw);
      pointer-events: none;
      opacity: 0;
    }
    .beat-inner {
      pointer-events: auto;
    }
    .core-pulse-overlay {
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0,229,255,0.2), transparent);
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
      pointer-events: none;
      z-index: 2;
      opacity: 0;
    }
    @keyframes corePulse {
      0%, 100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.5; }
      50% { transform: translate(-50%, -50%) scale(1.6); opacity: 0.1; }
    }
    .core-pulsing {
      animation: corePulse 2.4s ease-in-out infinite;
    }
    
    .beat-label {
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: .14em;
      color: rgba(255,255,255,0.5);
      margin-bottom: 12px;
    }
    .beat-head {
      font-family: 'Manrope', sans-serif;
      font-weight: 700;
      font-size: clamp(24px, 2.8vw, 32px);
      color: #FFFFFF;
      margin-bottom: 16px;
      line-height: 1.2;
    }
    .beat-body {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: #A1A1AA;
      line-height: 1.7;
      margin-bottom: 24px;
    }
    .spec-pill {
      display: inline-flex;
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 99px;
      padding: 6px 14px;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: 11px;
      color: #A1A1AA;
    }
    .spec-pills-row {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    
    #loadingScreen {
      position: fixed;
      inset: 0;
      background: #09090B;
      z-index: 2000;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 24px;
      transition: opacity 0.4s ease;
    }
    .load-bar-wrap {
      width: 200px;
      height: 3px;
      background: rgba(255,255,255,.08);
      border-radius: 3px;
      overflow: hidden;
    }
    .load-bar {
      height: 100%;
      width: 0%;
      background: var(--accent);
      transition: width 0.1s linear;
    }
    .load-text {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 12px;
      color: #A1A1AA;
    }

    @media (max-width: 768px) {
      .fiber-scroll-zone {
        height: 480vh;
      }
      .fiber-beat {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        top: auto;
        padding: 20px 24px 32px;
        background: rgba(9,9,11,0.92);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-top: 1px solid rgba(255,255,255,.08);
        min-height: 160px;
        transition: opacity 0.2s ease;
        z-index: 10;
        align-items: flex-start;
      }
      .beat-inner {
        width: 100%;
        text-align: left !important;
      }
      .fiber-svg {
        display: none;
      }
      .core-pulse-overlay {
        width: 180px;
        height: 180px;
      }
      #fiberCanvas {
        object-fit: contain;
      }
      .beat-inner .btn {
        width: 100%;
        margin-bottom: 8px;
      }
      .spec-pills-row {
        justify-content: flex-start !important;
      }
    }
`;
html = html.replace('</style>', newCSS + '\n</style>');

// 2. Replace DOM
const oldHeroRegex = /<!-- ===================== HERO ===================== -->\s*<section class="hero" id="home">[\s\S]*?<\/section>/;

const newHero = `<!-- ===================== HERO ===================== -->
<div id="loadingScreen">
  <div class="brand-mark" style="width:48px;height:48px;font-size:16px;">PDR</div>
  <div style="text-align:center">
    <div class="load-bar-wrap"><div class="load-bar" id="loadBar"></div></div>
    <div class="load-text" style="margin-top:12px;">Loading experience...</div>
  </div>
</div>

<div class="fiber-scroll-zone" id="home">
  <div class="fiber-sticky">
    <canvas id="fiberCanvas"></canvas>
    
    <svg class="fiber-svg">
      <path id="svgLine2" d="" stroke="#E11D48" stroke-width="1" stroke-dasharray="4 2" fill="none" opacity="0"/>
      <circle id="svgEnd2" cx="0" cy="0" r="3" fill="#E11D48" opacity="0"/>
      <circle id="svgStart2" cx="0" cy="0" r="5" stroke="#E11D48" stroke-width="1" fill="none" opacity="0"/>

      <path id="svgLine3" d="" stroke="#E11D48" stroke-width="1" stroke-dasharray="4 2" fill="none" opacity="0"/>
      <circle id="svgEnd3" cx="0" cy="0" r="3" fill="#E11D48" opacity="0"/>
      <circle id="svgStart3" cx="0" cy="0" r="5" stroke="#E11D48" stroke-width="1" fill="none" opacity="0"/>

      <path id="svgLine4" d="" stroke="#E11D48" stroke-width="1" stroke-dasharray="4 2" fill="none" opacity="0"/>
      <circle id="svgEnd4" cx="0" cy="0" r="3" fill="#E11D48" opacity="0"/>
      <circle id="svgStart4" cx="0" cy="0" r="5" stroke="#E11D48" stroke-width="1" fill="none" opacity="0"/>

      <path id="svgLine5" d="" stroke="#E11D48" stroke-width="1" stroke-dasharray="4 2" fill="none" opacity="0"/>
      <circle id="svgEnd5" cx="0" cy="0" r="3" fill="#E11D48" opacity="0"/>
      <circle id="svgStart5" cx="0" cy="0" r="5" stroke="#E11D48" stroke-width="1" fill="none" opacity="0"/>
    </svg>
    
    <div class="core-pulse-overlay" id="corePulse"></div>

    <div class="fiber-beat" id="beat1" style="justify-content:center;">
      <div class="beat-inner" style="text-align:center;">
        <div class="eyebrow" style="color:#E11D48;">FIBRE OPTIC INFRASTRUCTURE · SINCE 1985</div>
        <h2 class="beat-head" style="font-size:clamp(40px,5.6vw,64px);font-weight:800;">Engineered from the inside out.</h2>
        <p class="beat-body" style="max-width:560px;margin:0 auto 24px;">Every PDR cable begins with optical-grade silica glass and ends with a network that never fails.</p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <a class="btn btn-primary" href="#contact">Request Engineering Consultation</a>
          <a class="btn btn-ghost" href="#products">Browse Product Catalogue</a>
        </div>
        <div class="hero-status" style="margin-top:24px;"><span class="live"></span> Production active · Same-day dispatch on stock SKUs</div>
      </div>
    </div>

    <div class="fiber-beat" id="beat2" style="justify-content:flex-start;">
      <div class="beat-inner" style="max-width:420px;">
        <div class="beat-label">OUTER JACKET · LSZH COMPOUND</div>
        <h2 class="beat-head">Zero-halogen protection engineered for life.</h2>
        <p class="beat-body">Our Low Smoke Zero Halogen outer sheath meets IEC 60332 flame retardancy and IEC 61034 smoke density — critical for enclosed spaces in metro rail, defence installations, and hyperscale data centres.</p>
        <div class="spec-pill">2.0mm nominal O.D. · ±0.05mm tolerance</div>
      </div>
    </div>

    <div class="fiber-beat" id="beat3" style="justify-content:flex-end;">
      <div class="beat-inner" style="max-width:420px;text-align:right;">
        <div class="beat-label">BUFFER TUBE · ARAMID YARN</div>
        <h2 class="beat-head">Tensile strength that survives the field.</h2>
        <p class="beat-body">Tight-buffered 900μm coating over each fibre. Aramid strength members rated to 200N tensile load — specified by defence procurement and outdoor aerial deployments across PDR's 15+ export markets.</p>
        <div class="spec-pill">900μm buffer · 200N rated tensile</div>
      </div>
    </div>

    <div class="fiber-beat" id="beat4" style="justify-content:center;">
      <div class="beat-inner" style="text-align:center;max-width:480px;">
        <div class="beat-label">OPTICAL CLADDING · 125μm</div>
        <h2 class="beat-head">Total internal reflection. Zero signal loss.</h2>
        <p class="beat-body" style="margin-left:auto;margin-right:auto;">125μm diameter silica cladding — the physical law that keeps your signal inside. Every PDR fibre meets ITU-T G.652D and G.657A2 bend-insensitive specifications for passive and active installations.</p>
        <div class="spec-pills-row" style="justify-content:center;">
          <span class="spec-pill">ITU-T G.652D</span>
          <span class="spec-pill">G.657A2 Bend-Insensitive</span>
          <span class="spec-pill">125μm ±1μm</span>
          <span class="spec-pill">≤0.2 dB/km @1550nm</span>
        </div>
      </div>
    </div>

    <div class="fiber-beat" id="beat5" style="justify-content:flex-start;">
      <div class="beat-inner" style="max-width:400px;">
        <div class="beat-label">SINGLE-MODE CORE · 9μm</div>
        <h2 class="beat-head" style="font-size:clamp(32px,4vw,52px);font-weight:800;background:linear-gradient(135deg, #FFFFFF, #00E5FF);-webkit-background-clip:text;color:transparent;">9 micrometres. Millions of kilometres of data.</h2>
        <p class="beat-body">Our single-mode cores carry terabit-scale traffic across continents. Tested 100% at our Mumbai facility with interferometric polish verification — insertion loss less than 0.3dB guaranteed.</p>
        <div id="coreStat" style="font-family:'Inter',sans-serif;font-weight:700;font-size:14px;color:#00E5FF;">&lt; 0.3 dB insertion loss · 100% interferometry tested</div>
      </div>
    </div>

    <div class="fiber-beat" id="beat6" style="justify-content:flex-end;">
      <div class="beat-inner" style="max-width:420px;text-align:right;">
        <div class="beat-label">PRECISION ASSEMBLY · MUMBAI</div>
        <h2 class="beat-head">Every layer. Every micron. Every time.</h2>
        <p class="beat-body">PDR's Mumbai manufacturing facility produces over 50 product families under ISO 9001:2015 quality management. Every assembly is interferometry-verified before it leaves our production floor.</p>
        <div class="spec-pill">ISO 9001:2015 · 40 Years Manufacturing</div>
      </div>
    </div>

    <div class="fiber-beat" id="beat7" style="justify-content:center;">
      <div class="beat-inner" style="text-align:center;">
        <h2 class="beat-head" style="font-size:clamp(40px,5.6vw,64px);font-weight:800;">Built in Mumbai. Deployed worldwide.</h2>
        <p class="beat-body" style="max-width:560px;margin:0 auto 24px;">40 years of fibre optic manufacturing. 3,000+ buyers. 15+ countries. Zero compromise.</p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <a class="btn btn-primary" href="#contact">Request Engineering Consultation</a>
          <a class="btn btn-ghost" href="#products">Browse Product Catalogue</a>
        </div>
        <div class="spec-pills-row" style="justify-content:center;margin-top:24px;">
          <span class="spec-pill">ISO 9001:2015</span>
          <span class="spec-pill">RoHS Compliant</span>
          <span class="spec-pill">MIL-STD Rated</span>
          <span class="spec-pill">REACH Certified</span>
          <span class="spec-pill">TEC Approved</span>
        </div>
      </div>
    </div>

  </div>
</div>`;

html = html.replace(oldHeroRegex, newHero);

// 3. Add JS
const newJS = `
/* =============== FIBER SCROLLYTELLING LOGIC =============== */
const totalFrames = 240;
const frames = [];
const canvas = document.getElementById('fiberCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;
const loadBar = document.getElementById('loadBar');
const loadScreen = document.getElementById('loadingScreen');

// Beats
const b1 = document.getElementById('beat1');
const b2 = document.getElementById('beat2');
const b3 = document.getElementById('beat3');
const b4 = document.getElementById('beat4');
const b5 = document.getElementById('beat5');
const b6 = document.getElementById('beat6');
const b7 = document.getElementById('beat7');
const corePulse = document.getElementById('corePulse');
const coreStat = document.getElementById('coreStat');

// SVGs
const sL2 = document.getElementById('svgLine2'), sE2 = document.getElementById('svgEnd2'), sS2 = document.getElementById('svgStart2');
const sL3 = document.getElementById('svgLine3'), sE3 = document.getElementById('svgEnd3'), sS3 = document.getElementById('svgStart3');
const sL4 = document.getElementById('svgLine4'), sE4 = document.getElementById('svgEnd4'), sS4 = document.getElementById('svgStart4');
const sL5 = document.getElementById('svgLine5'), sE5 = document.getElementById('svgEnd5'), sS5 = document.getElementById('svgStart5');

let currentFrame = -1;
let rafScheduled = false;
let isMobile = window.innerWidth <= 768;
let prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function pad(n) { return n.toString().padStart(3, '0'); }

async function preloadFrames() {
  if (!canvas) return;
  if (prefersReduced) {
    const img = new Image();
    img.src = './frames/fiber_120.jpg';
    await img.decode().catch(()=>{});
    frames[120] = img;
    initReducedMotion();
    return;
  }

  let loadedCount = 0;
  const batchSize = 20;
  for (let i = 1; i <= totalFrames; i += batchSize) {
    const batch = [];
    for (let j = 0; j < batchSize && i + j <= totalFrames; j++) {
      const idx = i + j;
      const p = new Promise(resolve => {
        const img = new Image();
        img.src = \`./frames/fiber_\${pad(idx)}.jpg\`;
        img.onload = () => {
          img.decode().catch(()=>{});
          frames[idx] = img;
          loadedCount++;
          if(loadBar) loadBar.style.width = (loadedCount / totalFrames * 100) + '%';
          resolve();
        };
        img.onerror = () => resolve(); // continue even if error
      });
      batch.push(p);
    }
    await Promise.all(batch);
  }
  
  if (loadScreen) {
    loadScreen.style.opacity = '0';
    setTimeout(() => {
      loadScreen.style.display = 'none';
      document.body.classList.remove('no-scroll');
      resizeCanvas();
      updateCanvas();
    }, 400);
  }
}

function initReducedMotion() {
  if(loadScreen) loadScreen.style.display = 'none';
  const sz = document.querySelector('.fiber-scroll-zone');
  const sticky = document.querySelector('.fiber-sticky');
  if(sz && sticky) {
    sz.style.height = 'auto';
    sz.style.paddingTop = '100px';
    sz.style.paddingBottom = '100px';
    sticky.style.position = 'relative';
    sticky.style.height = 'auto';
    sticky.style.overflow = 'visible';
    canvas.style.position = 'relative';
    canvas.style.height = '500px';
    document.querySelector('.fiber-svg').style.display = 'none';
    
    [b1,b2,b3,b4,b5,b6,b7].forEach(b => {
      if(b) {
        b.style.position = 'relative';
        b.style.opacity = '1';
        b.style.transform = 'none';
        b.style.padding = '40px 24px';
        b.style.pointerEvents = 'auto';
      }
    });
    resizeCanvas();
    drawFrame(120);
  }
}

function resizeCanvas() {
  if (!canvas || prefersReduced && !frames[120]) return;
  isMobile = window.innerWidth <= 768;
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  
  if (prefersReduced) drawFrame(120);
  else if (currentFrame >= 1) drawFrame(currentFrame);
}

window.addEventListener('resize', () => {
  clearTimeout(window.resizeTimer);
  window.resizeTimer = setTimeout(resizeCanvas, 150);
});

function drawFrame(index) {
  if (!ctx || !frames[index]) return;
  const rect = canvas.parentElement.getBoundingClientRect();
  ctx.fillStyle = '#09090B';
  ctx.fillRect(0, 0, rect.width, rect.height);
  
  const img = frames[index];
  let scale;
  if (isMobile) {
    scale = Math.min(rect.width / img.naturalWidth, rect.height / img.naturalHeight);
  } else {
    scale = Math.max(rect.width / img.naturalWidth, rect.height / img.naturalHeight);
  }
  
  const w = img.naturalWidth * scale;
  const h = img.naturalHeight * scale;
  const x = (rect.width - w) / 2;
  const y = (rect.height - h) / 2;
  
  ctx.drawImage(img, x, y, w, h);
}

function lerp(start, end, progress) {
  return start + (end - start) * Math.max(0, Math.min(1, progress));
}

function beatProgress(scrollPct, fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd) {
  if (scrollPct < fadeInStart) return 0;
  if (scrollPct < fadeInEnd) return lerp(0, 1, (scrollPct - fadeInStart) / (fadeInEnd - fadeInStart));
  if (scrollPct < fadeOutStart) return 1;
  if (scrollPct < fadeOutEnd) return lerp(1, 0, (scrollPct - fadeOutStart) / (fadeOutEnd - fadeOutStart));
  return 0;
}

function updateOverlays(pct) {
  if (prefersReduced) return;
  
  // Mobile multiplier (480vh vs 700vh means pct goes 0-1 either way, logic holds)
  
  const p1 = beatProgress(pct, 0, 3, 9, 12);
  if(b1) { b1.style.opacity = p1; b1.style.transform = isMobile ? 'none' : \`translateY(\${lerp(20,0,p1)}px)\`; b1.style.pointerEvents = p1>0.5?'auto':'none'; }

  const p2 = beatProgress(pct, 12, 15, 25, 28);
  if(b2) { b2.style.opacity = p2; b2.style.transform = isMobile ? 'none' : \`translateX(\${lerp(-32,0,p2)}px)\`; b2.style.pointerEvents = p2>0.5?'auto':'none'; }

  const p3 = beatProgress(pct, 28, 31, 41, 44);
  if(b3) { b3.style.opacity = p3; b3.style.transform = isMobile ? 'none' : \`translateX(\${lerp(32,0,p3)}px)\`; b3.style.pointerEvents = p3>0.5?'auto':'none'; }

  const p4 = beatProgress(pct, 44, 47, 55, 58);
  if(b4) { b4.style.opacity = p4; b4.style.transform = isMobile ? 'none' : \`translateY(\${lerp(20,0,p4)}px)\`; b4.style.pointerEvents = p4>0.5?'auto':'none'; }

  const p5 = beatProgress(pct, 58, 61, 71, 74);
  if(b5) { b5.style.opacity = p5; b5.style.transform = isMobile ? 'none' : \`translateX(\${lerp(-32,0,p5)}px)\`; b5.style.pointerEvents = p5>0.5?'auto':'none'; }
  if(corePulse) {
    corePulse.style.opacity = p5 > 0 ? 1 : 0;
    if(p5 > 0 && !corePulse.classList.contains('core-pulsing')) corePulse.classList.add('core-pulsing');
    else if(p5 === 0) corePulse.classList.remove('core-pulsing');
  }
  if(coreStat) {
    coreStat.style.opacity = 0.6 + (Math.sin(Date.now()/380) * 0.4); // manual pulse
  }

  const p6 = beatProgress(pct, 74, 77, 85, 88);
  if(b6) { b6.style.opacity = p6; b6.style.transform = isMobile ? 'none' : \`translateX(\${lerp(32,0,p6)}px)\`; b6.style.pointerEvents = p6>0.5?'auto':'none'; }

  // Beat 7 no fade out
  let p7 = 0;
  if (pct >= 88) p7 = pct < 91 ? lerp(0, 1, (pct - 88)/3) : 1;
  if(b7) { b7.style.opacity = p7; b7.style.transform = isMobile ? 'none' : \`translateY(\${lerp(20,0,p7)}px)\`; b7.style.pointerEvents = p7>0.5?'auto':'none'; }

  // SVGs
  if (!isMobile) {
    const cw = canvas.clientWidth, ch = canvas.clientHeight;
    function drawSvgLine(p, sL, sS, sE, x1, y1, x2, y2) {
      if(!sL) return;
      if (p <= 0) { sL.setAttribute('opacity', 0); sS.setAttribute('opacity', 0); sE.setAttribute('opacity', 0); return; }
      sL.setAttribute('opacity', p * 0.55);
      sS.setAttribute('opacity', p);
      sE.setAttribute('opacity', p);
      sS.setAttribute('cx', cw*x1); sS.setAttribute('cy', ch*y1);
      sE.setAttribute('cx', cw*x2); sE.setAttribute('cy', ch*y2);
      sL.setAttribute('d', \`M\${cw*x1},\${ch*y1} L\${cw*x2},\${ch*y2}\`);
    }
    drawSvgLine(p2, sL2, sS2, sE2, 0.32, 0.46, 0.62, 0.48);
    drawSvgLine(p3, sL3, sS3, sE3, 0.68, 0.48, 0.58, 0.52);
    drawSvgLine(p4, sL4, sS4, sE4, 0.50, 0.38, 0.52, 0.47);
    drawSvgLine(p5, sL5, sS5, sE5, 0.28, 0.44, 0.50, 0.50);
  }
}

function updateCanvas() {
  rafScheduled = false;
  if (prefersReduced) return;
  const sz = document.querySelector('.fiber-scroll-zone');
  if (!sz) return;
  
  const rect = sz.getBoundingClientRect();
  const travel = rect.height - window.innerHeight;
  let progress = -rect.top / travel;
  progress = Math.max(0, Math.min(1, progress));
  
  const targetFrame = Math.round(progress * (totalFrames - 1)) + 1;
  const safeFrame = Math.max(1, Math.min(totalFrames, targetFrame));
  
  if (safeFrame !== currentFrame) {
    currentFrame = safeFrame;
    drawFrame(currentFrame);
  }
  
  updateOverlays(progress * 100);
}

window.addEventListener('scroll', () => {
  if (!rafScheduled && !prefersReduced) {
    rafScheduled = true;
    requestAnimationFrame(updateCanvas);
  }
}, { passive: true });

document.body.classList.add('no-scroll');
preloadFrames();

`;

html = html.replace('/* =============== PRODUCT CATALOGUE DATA', newJS + '/* =============== PRODUCT CATALOGUE DATA');

fs.writeFileSync(file, html, 'utf8');
console.log('DOM, CSS and JS injected safely.');
