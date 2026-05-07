$files = Get-ChildItem "d:\pdr\pdrworld\*.html"

foreach ($file in $files) {
    $content = Get-Content -Raw $file.FullName
    $originalContent = $content

    # 1. Global Tokens (Precision Polish)
    $content = $content -replace '--rad:14px;', '--rad:8px;'
    
    # Shadows
    $content = $content -replace [regex]::Escape('--shadow:0 8px 24px -4px rgba(15,23,42,0.06), 0 4px 12px -2px rgba(15,23,42,0.04);'), '--shadow:0 2px 8px -2px rgba(15,23,42,0.06), 0 4px 16px -4px rgba(15,23,42,0.04);'
    $content = $content -replace [regex]::Escape('--shadow-lg:0 24px 60px -8px rgba(15,23,42,0.1), 0 12px 32px -4px rgba(15,23,42,0.06);'), '--shadow-lg:0 12px 32px -4px rgba(15,23,42,0.08), 0 24px 60px -8px rgba(15,23,42,0.06);'
    
    # Typography
    $content = $content -replace 'letter-spacing:-.025em;', 'letter-spacing:-.03em;'
    $content = $content -replace 'h1\{font-size:clamp\(40px,5\.6vw,64px\);font-weight:800;letter-spacing:-.04em\}', 'h1{font-size:clamp(40px,5.6vw,64px);font-weight:800;line-height:1.05;letter-spacing:-.04em}'

    # Buttons
    $content = $content -replace 'gap:10px;border-radius:10px;font-family', 'gap:10px;border-radius:8px;font-family'
    $content = $content -replace [regex]::Escape('.btn-primary{background:var(--accent);color:#fff;padding:16px 26px;box-shadow:0 8px 24px -8px rgba(74,159,216,.55)}'), '.btn-primary{background:var(--accent);color:#fff;padding:16px 26px;box-shadow:inset 0 2px 4px rgba(255,255,255,0.15), 0 4px 12px -2px rgba(2,132,199,.4);border:1px solid rgba(0,0,0,0.1)}'
    $content = $content -replace [regex]::Escape('.btn-primary:hover{background:#07008F;transform:translateY(-2px);box-shadow:0 14px 30px -8px rgba(74,159,216,.7)}'), '.btn-primary:hover{background:#07008F;transform:translateY(-2px);box-shadow:0 8px 20px -4px rgba(7,0,143,.4)}'

    # 2. Mega Menu Precision
    $content = $content -replace 'width:min\(960px,95vw\);background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;padding:32px 32px 0;box-shadow:0 32px 80px -16px rgba\(15,23,42,\.15\);', 'width:1000px;max-width:95vw;background:#FFFFFF;border:none;border-radius:16px;padding:32px 32px 0;box-shadow:inset 0 0 0 1px rgba(15,23,42,0.06), 0 24px 48px -12px rgba(15,23,42,0.1);'
    $content = $content -replace '\.mega a\{display:block;padding:16px;border-radius:12px;', '.mega a{display:block;padding:16px;border-radius:8px;'

    # 3. Footer CSS Rewrite
    $footerCssPattern = '(?s)\/\* Footer \*\/\s*\.footer\{.*?\.footer-bottom \.links\{display:flex;gap:24px;font-size:13px\}'
    $newFooterCss = '/* Footer */
    .footer{background:linear-gradient(180deg, #0A0F1C 0%, #060913 100%);color:#fff;padding:80px 0 0;position:relative;overflow:hidden}
    .footer::before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)}
    .footer-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr 1fr;gap:64px}
    .footer p,.footer a,.footer li{color:#8B9BB4;font-size:14px;line-height:1.6;transition:all var(--dur-fast) var(--ease-in-out)}
    .footer a:hover{color:#FFFFFF}
    .footer h4{color:#FFFFFF;font-size:13px;font-weight:800;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:24px;opacity:0.9}
    .footer ul{list-style:none;margin:0;padding:0;display:grid;gap:12px}
    .footer-brand p{margin:24px 0;font-size:14px}
    .made-in{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;border-radius:6px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);font-size:12px;font-weight:600;color:#fff}
    .social-row{display:flex;gap:8px;margin-top:24px}
    .social-row a{width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,.03);display:grid;place-items:center;color:rgba(255,255,255,.6);border:1px solid rgba(255,255,255,.06);transition:all var(--dur-fast) var(--ease-in-out)}
    .social-row a:hover{background:var(--accent);color:#fff;border-color:transparent;transform:translateY(-3px)}
    .footer-bottom{margin-top:80px;padding:24px 0;border-top:1px solid rgba(255,255,255,0.06);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px}
    .footer-bottom p{font-size:13px;color:rgba(255,255,255,.4)}
    .footer-bottom .links{display:flex;gap:24px;font-size:13px}'

    $content = $content -replace $footerCssPattern, $newFooterCss

    # 4. Footer HTML Rewrite
    $footerHtmlPattern = '(?s)<footer class="footer">.*?</footer>'
    $newFooterHtml = '<footer class="footer">
  <div class="container">
    <!-- Premium Pre-Footer CTA -->
    <div class="footer-cta" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 48px; display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-bottom: 80px; flex-wrap: wrap;">
      <div>
        <h3 style="font-size: 24px; color: #FFFFFF; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 8px;">Ready to elevate your network?</h3>
        <p style="color: #8B9BB4; font-size: 15px;">Join the telecom operators and defence contractors trusting PDR World since 1985.</p>
      </div>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <a href="contact.html" style="background: var(--accent); color: #FFF; padding: 14px 28px; border-radius: 8px; font-weight: 700; font-size: 15px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: transform 0.2s; box-shadow: inset 0 2px 4px rgba(255,255,255,0.15), 0 4px 12px rgba(2,132,199,0.2); border: 1px solid rgba(0,0,0,0.1);">Request Consultation &rarr;</a>
      </div>
    </div>

    <!-- Architectural Grid -->
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand" href="index.html" style="color: #FFF;">
          <span class="brand-mark" style="box-shadow: none; border: 1px solid rgba(255,255,255,0.1);">PDR</span>
          <span>PDR World<small style="color: #8B9BB4;">Videotronics India &middot; Since 1985</small></span>
        </a>
        <p style="margin: 24px 0;"><strong>Precision Engineering</strong> &mdash; India&rsquo;s longstanding manufacturer of active &amp; passive fiber optic infrastructure &mdash; supplying telecom, defence, hyperscale, and global distributors from Mumbai.</p>
        <span class="made-in">&#127470;&#127475; Engineered &amp; Made in India</span>
        <div class="social-row" aria-label="Social">
          <a href="https://www.linkedin.com/company/pdr-world-mumbai/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/></svg></a>
          <a href="https://www.facebook.com/PDRVideo" target="_blank" rel="noopener" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
          <a href="https://www.instagram.com/pdr.mumbai/" target="_blank" rel="noopener" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/></svg></a>
          <a href="https://www.youtube.com/channel/UCTOAYCstGJNZulaOF0TXGlg" target="_blank" rel="noopener" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
        </div>
      </div>

      <div>
        <h4>Products</h4>
        <ul>
          <li><a href="products.html#passive">Passive Components</a></li>
          <li><a href="products.html#active">Active Components</a></li>
          <li><a href="products.html#cable">Cable Management</a></li>
          <li><a href="products.html#test">Test &amp; Measuring</a></li>
          <li><a href="products.html#specialty">Specialty &amp; Drones</a></li>
          <li><a href="products.html#tools">Maintenance Tools</a></li>
        </ul>
      </div>

      <div>
        <h4>Industries</h4>
        <ul>
          <li><a href="solutions.html#telecom">Telecom Operators</a></li>
          <li><a href="solutions.html#defence">Defence &amp; Govt</a></li>
          <li><a href="solutions.html#datacentre">Data Centres</a></li>
          <li><a href="solutions.html#5g">5G &amp; Wireless</a></li>
          <li><a href="solutions.html#metro">Metro &amp; Railway</a></li>
          <li><a href="solutions.html#power">Power &amp; Utilities</a></li>
          <li><a href="solutions.html#ftth">FTTH &amp; Broadband</a></li>
          <li><a href="solutions.html#enterprise">Enterprise &amp; Campus</a></li>
        </ul>
      </div>

      <div>
        <h4>Resources</h4>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="resources.html#support">Technical Support</a></li>
          <li><a href="resources.html#custom">Custom Manufacturing</a></li>
          <li><a href="resources.html#partners">Partner Program</a></li>
          <li><a href="resources.html#factory">Setup a Factory</a></li>
          <li><a href="resources.html#training">Training</a></li>
          <li><a href="contact.html">Submit RFQ / Enquiry</a></li>
          <li><a href="about.html#compliance">Certifications</a></li>
          <li><a href="about.html#careers">Careers</a></li>
        </ul>
      </div>

      <div>
        <h4>Contact</h4>
        <ul>
          <li><strong style="color:#FFF;font-weight:600;font-size:13px;letter-spacing:0.02em;text-transform:uppercase;">Headquarters</strong><br>PDR Videotronics India<br>99 Old Prabhadevi Road<br>Mumbai 400025, India</li>
          <li><a href="tel:+912224306494">+91-22-24306494</a></li>
          <li><a href="mailto:info@pdrworld.com">info@pdrworld.com</a></li>
        </ul>
      </div>

    </div>

    <!-- Razor Thin Legal Row -->
    <div class="footer-bottom">
      <p>&copy; <span id="yr"></span> PDR Videotronics India Pvt. Ltd. &mdash; All Rights Reserved. GSTIN: 27AAACP2446G1ZL</p>
      <div class="links">
        <a href="mailto:info@pdrworld.com?subject=Legal%20&mdash;%20Terms%20of%20Sale%20Request">Terms of Sale</a>
        <a href="mailto:info@pdrworld.com?subject=Legal%20&mdash;%20Terms%20of%20Use%20Request">Terms of Use</a>
        <a href="mailto:info@pdrworld.com?subject=Legal%20&mdash;%20Privacy%20Policy%20Request">Privacy Policy</a>
      </div>
    </div>
  </div>
</footer>'

    $content = $content -replace $footerHtmlPattern, $newFooterHtml

    if ($content -cne $originalContent) {
        $content | Set-Content $file.FullName
        Write-Host "Updated $($file.Name)"
    }
}
Write-Host "Finished Phase 5 Script"
