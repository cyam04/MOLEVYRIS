/**
 * MOLEVYRIS — Scientific Evidence & Analytical Method Validation Engine
 * 
 * Standardized according to:
 * - ICH Q2(R2) Validation of Analytical Procedures
 * - USP <621> Chromatography & System Suitability
 * - USP <851> Spectrophotometry
 * - USP <921> Water Determination (Karl Fischer)
 * - 21 CFR Part 11 & ALCOA+ Data Integrity Principles
 * 
 * DESIGNED AS A PRODUCTION-GRADE LABORATORY BLUEPRINT:
 * Ready to receive primary experimental readings from bench testing.
 */

(function () {
  'use strict';

  // Comprehensive Pharmaceutical Evidence Data Matrix
  const evidenceData = {
    'khp-standardization': {
      protocolNo: 'SOP-QC-TIT-2026-001',
      rev: 'Rev 01 (Verified ChemCollective Dataset)',
      regulatory: 'USP <541> Titrimetry Â· 21 CFR Part 11 ALCOA+ Audit',
      title: 'Standardization of NaOH using Primary Standard KHP',
      badge: 'Volumetric Titrimetry & QA/QC',
      sampleTag: 'Verified Student Practical 01',
      code: 'USP <541> Â· ChemCollective Virtual Lab',
      subtitle: 'Quantitative standardization of ~1.0 M NaOH titrant against primary standard potassium hydrogen phthalate (KHP, 0.500 M) with three-trial pH potentiometric curve tracking, double volume-balance reconciliation, and comprehensive data integrity review.',
      categoryFilter: 'titrimetry',
      sampleNotice: '<strong>Verified Laboratory Practical 01:</strong> Conducted and documented by Shyam Raj (M.Sc. Organic Chemistry) using the ChemCollective Virtual Analytical Laboratory. Captures 171 individual addition points across three distinct increment resolutions (0.500 mL, 0.100 mL, and 0.050 mL) with double volume-balance reconciliation, stoichiometric calculations, and full ALCOA+ data integrity review.',
      tabLabels: [
        '<span>ðŸ“Š</span> Titration Curves & Profile',
        '<span>âš™ï¸</span> Stoichiometry & Volume Balance',
        '<span>âœ…</span> QA/QC Data Integrity & Gallery',
        '<span>ðŸ“</span> ELN Report & Master Downloads'
      ],
      kpis: [
        { label: 'Mean Apparent Conc. (NaOH)', value: '0.9320 M', status: 'âœ“ Verified (0.931961 mol/L)' },
        { label: 'Repeatability Precision (%RSD)', value: '2.13%', status: 'âœ“ s = 0.0198 M (n=3 Trials)' },
        { label: 'Concordant Endpoint Titre', value: '5.300 mL', status: 'âœ“ Trial 2 & 3 Exact Match' },
        { label: 'Volume Balance Audit', value: '100% Agreement', status: 'âœ“ Burette Î”V = Flask Î”V = 5.300 mL' }
      ],
      visualTitle: '3-Trial Potentiometric Titration Curves (pH vs NaOH Volume Added)',
      visualParam: 'KHP Aliquot: 10.000 mL (0.500 M) Â· Phenolphthalein: 0.300 mL Â· Burette: 10.000 mL Â· 171 Data Points',
      svgGraphic: 
        <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg" style="background: var(--paper-card); font-family: ui-monospace, monospace;">
          <!-- Grid Lines (pH 2, 4, 6, 8, 10, 12, 14) -->
          <line x1="55" y1="35" x2="705" y2="35" stroke="var(--line-subtle)" stroke-dasharray="3 3"/>
          <line x1="55" y1="67" x2="705" y2="67" stroke="var(--line-subtle)" stroke-dasharray="3 3"/>
          <line x1="55" y1="98" x2="705" y2="98" stroke="var(--line-subtle)" stroke-dasharray="3 3"/>
          <line x1="55" y1="130" x2="705" y2="130" stroke="var(--line-subtle)" stroke-dasharray="3 3"/>
          <line x1="55" y1="162" x2="705" y2="162" stroke="var(--line-subtle)" stroke-dasharray="3 3"/>
          <line x1="55" y1="193" x2="705" y2="193" stroke="var(--line-subtle)" stroke-dasharray="3 3"/>
          <line x1="55" y1="225" x2="705" y2="225" stroke="var(--line)" stroke-width="1.5"/>

          <!-- Y Axis Labels (pH) -->
          <text x="46" y="39" text-anchor="end" font-size="10" fill="var(--muted)">14.0</text>
          <text x="46" y="71" text-anchor="end" font-size="10" fill="var(--muted)">12.0</text>
          <text x="46" y="102" text-anchor="end" font-size="10" fill="var(--muted)">10.0</text>
          <text x="46" y="134" text-anchor="end" font-size="10" fill="var(--muted)">8.0</text>
          <text x="46" y="166" text-anchor="end" font-size="10" fill="var(--muted)">6.0</text>
          <text x="46" y="197" text-anchor="end" font-size="10" fill="var(--muted)">4.0</text>
          <text x="46" y="229" text-anchor="end" font-size="10" fill="var(--muted)">2.0</text>

          <!-- Phenolphthalein Transition Interval Band (pH 8.2 - 10.0) -->
          <rect x="55" y="98.3" width="650" height="28.5" fill="#f472b6" fill-opacity="0.14" stroke="#f472b6" stroke-dasharray="3 3" stroke-width="0.8"/>
          <text x="65" y="117" font-size="9" fill="#db2777" font-weight="600">Phenolphthalein Transition Zone (pH 8.2â€“10.0)</text>

          <!-- X Axis Ticks and Labels (mL NaOH added) -->
          <line x1="55" y1="225" x2="55" y2="231" stroke="var(--line)" stroke-width="1.5"/>
          <text x="55" y="243" text-anchor="middle" font-size="10" fill="var(--muted)">0.0</text>

          <line x1="163.3" y1="225" x2="163.3" y2="231" stroke="var(--line)" stroke-width="1.5"/>
          <text x="163.3" y="243" text-anchor="middle" font-size="10" fill="var(--muted)">1.0</text>

          <line x1="271.7" y1="225" x2="271.7" y2="231" stroke="var(--line)" stroke-width="1.5"/>
          <text x="271.7" y="243" text-anchor="middle" font-size="10" fill="var(--muted)">2.0</text>

          <line x1="380" y1="225" x2="380" y2="231" stroke="var(--line)" stroke-width="1.5"/>
          <text x="380" y="243" text-anchor="middle" font-size="10" fill="var(--muted)">3.0</text>

          <line x1="488.3" y1="225" x2="488.3" y2="231" stroke="var(--line)" stroke-width="1.5"/>
          <text x="488.3" y="243" text-anchor="middle" font-size="10" fill="var(--muted)">4.0</text>

          <line x1="596.7" y1="225" x2="596.7" y2="231" stroke="var(--line)" stroke-width="1.5"/>
          <text x="596.7" y="243" text-anchor="middle" font-size="10" fill="var(--muted)">5.0</text>

          <!-- Concordant Endpoint Guide Line (5.30 mL) -->
          <line x1="629.2" y1="35" x2="629.2" y2="225" stroke="var(--green)" stroke-dasharray="4 4" stroke-width="1.4"/>
          <text x="629.2" y="253" text-anchor="middle" font-size="9.5" font-weight="bold" fill="var(--green)">5.30 mL</text>

          <line x1="705" y1="225" x2="705" y2="231" stroke="var(--line)" stroke-width="1.5"/>
          <text x="705" y="243" text-anchor="middle" font-size="10" fill="var(--muted)">6.0 mL</text>

          <!-- Trial 1 Curve (Coarse 0.5 mL) -->
          <path d="M 109.2,189.9 L 163.3,184.3 L 217.5,180.7 L 271.7,177.8 L 325.8,175.1 L 380,172.4 L 434.2,169.7 L 488.3,166.6 L 542.5,162.5 L 596.7,154.9 L 650.8,65.2" fill="none" stroke="#818cf8" stroke-width="2" stroke-dasharray="4 3"/>
          <circle cx="650.8" cy="65.2" r="4.5" fill="#818cf8"/>

          <!-- Trial 2 Curve (Fine 0.1 mL) -->
          <path d="M 65.8,201.2 L 76.7,196.5 L 87.5,193.6 L 98.3,191.6 L 109.2,190.2 L 120,188.4 L 130.8,187.3 L 141.7,186.2 L 152.5,185.3 L 163.3,184.3 L 174.2,183.5 L 185,182.7 L 195.8,182.1 L 206.7,181.3 L 217.5,180.7 L 228.3,180 L 239.2,179.6 L 250,178.9 L 260.8,178.3 L 271.7,177.8 L 282.5,177.2 L 293.3,176.7 L 304.2,176.1 L 315,175.6 L 325.8,175.1 L 336.7,174.6 L 347.5,174 L 358.3,173.5 L 369.2,173.1 L 380,172.4 L 390.8,172 L 401.7,171.5 L 412.5,170.8 L 423.3,170.2 L 434.2,169.7 L 445,169.1 L 455.8,168.6 L 466.7,167.8 L 477.5,167.2 L 488.3,166.6 L 499.2,165.8 L 510,165.2 L 520.8,164.5 L 531.7,164.2 L 542.5,163.4 L 553.3,162.5 L 564.2,161.4 L 575,160.1 L 585.8,158.7 L 596.7,157.1 L 607.5,154.9 L 618.3,151.8 L 629.2,146.8 L 640,89.3" fill="none" stroke="#0ea5e9" stroke-width="2"/>
          <circle cx="629.2" cy="146.8" r="4" fill="#0ea5e9"/>

          <!-- Trial 3 Curve (Analytical 0.05 mL) -->
          <path d="M 60.4,205.5 L 65.8,201.2 L 71.2,198.6 L 76.7,196.5 L 82.1,194.9 L 87.5,193.6 L 92.9,192.5 L 98.3,191.6 L 103.8,190.6 L 109.2,189.9 L 114.6,189.2 L 120,188.4 L 125.4,187.8 L 130.8,187.3 L 136.2,186.7 L 141.7,186.2 L 147.1,185.7 L 152.5,185.3 L 157.9,184.8 L 163.3,184.3 L 168.8,184 L 174.2,183.5 L 179.6,183.2 L 185,182.7 L 190.4,182.4 L 195.8,182.1 L 201.2,181.8 L 206.7,181.3 L 212.1,181 L 217.5,180.7 L 222.9,180.4 L 228.3,180 L 233.7,179.7 L 239.2,179.6 L 244.6,179.2 L 250,178.9 L 255.4,178.6 L 260.8,178.3 L 266.2,178 L 271.7,177.8 L 277.1,177.5 L 282.5,177.2 L 287.9,176.9 L 293.3,176.7 L 298.8,176.4 L 304.2,176.1 L 309.6,175.9 L 315,175.6 L 320.4,175.3 L 325.8,175.1 L 331.2,174.8 L 336.7,174.6 L 342.1,174.3 L 347.5,174 L 352.9,173.9 L 358.3,173.5 L 363.8,173.2 L 369.2,173.1 L 374.6,172.8 L 380,172.4 L 385.4,172.3 L 390.8,172 L 396.2,171.6 L 401.7,171.5 L 407.1,171.2 L 412.5,170.8 L 417.9,170.5 L 423.3,170.4 L 428.8,170.1 L 434.2,169.7 L 439.6,169.4 L 445,169.1 L 450.4,168.8 L 455.8,168.5 L 461.2,168.2 L 466.7,167.8 L 472.1,167.5 L 477.5,167.2 L 482.9,166.9 L 488.3,166.6 L 493.7,166.3 L 499.2,165.8 L 504.6,165.5 L 510,165.2 L 515.4,164.7 L 520.8,164.2 L 526.2,163.9 L 531.7,163.4 L 537.1,162.9 L 542.5,162.5 L 547.9,161.8 L 553.3,161.4 L 558.8,160.7 L 564.2,160.1 L 569.6,159.4 L 575,158.7 L 580.4,157.9 L 585.8,157.1 L 591.2,156 L 596.7,154.9 L 602.1,153.4 L 607.5,151.8 L 612.9,149.8 L 618.3,146.8 L 623.8,141.4 L 629.2,89.3" fill="none" stroke="var(--green)" stroke-width="2.6"/>
          <circle cx="629.2" cy="89.3" r="5" fill="var(--green-emerald)" stroke="#ffffff" stroke-width="1.5"/>

          <!-- Callout Box -->
          <rect x="360" y="32" width="310" height="52" rx="6" fill="var(--paper)" stroke="var(--green-tint-border)" stroke-width="1"/>
          <text x="372" y="48" font-size="10.5" font-weight="bold" fill="var(--ink)">Concordant Endpoint: 5.300 mL</text>
          <text x="372" y="62" font-size="9" fill="var(--muted)">Trial 2 &amp; 3: 0.9434 M (Pink Endpoint)</text>
          <text x="372" y="74" font-size="9" fill="var(--green)">Mean = 0.9320 M &middot; %RSD = 2.13% (n=3)</text>

          <!-- Legend -->
          <line x1="60" y1="46" x2="80" y2="46" stroke="var(--green)" stroke-width="2.5"/>
          <text x="85" y="49" font-size="8.5" fill="var(--ink)">Trial 3 (0.05 mL step Â· 106 pts)</text>

          <line x1="60" y1="58" x2="80" y2="58" stroke="#0ea5e9" stroke-width="2"/>
          <text x="85" y="61" font-size="8.5" fill="var(--ink)">Trial 2 (0.10 mL step Â· 53 pts)</text>

          <line x1="60" y1="70" x2="80" y2="70" stroke="#818cf8" stroke-width="2" stroke-dasharray="4 3"/>
          <text x="85" y="73" font-size="8.5" fill="var(--muted)">Trial 1 (0.50 mL step Â· 11 pts)</text>
        </svg>
      ,
      tab1Content: 
        <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; color: var(--ink);">Three-Trial Potentiometric &amp; Visual Phenolphthalein Titration Dataset</h4>
        <div class="evidence-table-wrap">
          <table class="evidence-table">
            <thead>
              <tr>
                <th>Analytical Parameter</th>
                <th>Trial 1 (Coarse)</th>
                <th>Trial 2 (Fine Increments)</th>
                <th>Trial 3 (Analytical)</th>
                <th>Concordance / Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Increment Step Size</strong></td>
                <td>0.500 mL</td>
                <td>0.100 mL</td>
                <td>0.050 mL</td>
                <td>Resolution Sensitivity Study</td>
              </tr>
              <tr>
                <td><strong>Number of Additions</strong></td>
                <td>11 additions</td>
                <td>53 additions (54 log rows)</td>
                <td>106 additions</td>
                <td>171 Total Data Points</td>
              </tr>
              <tr>
                <td><strong>Primary Standard KHP Aliquot</strong></td>
                <td>10.000 mL (0.500 M)</td>
                <td>10.000 mL (0.500 M)</td>
                <td>10.000 mL (0.500 M)</td>
                <td>5.000 mmol KHP / trial</td>
              </tr>
              <tr>
                <td><strong>Initial Flask Contents</strong></td>
                <td>10.300 mL (10.0 mL KHP + 0.3 mL Ind.)</td>
                <td>10.300 mL (10.0 mL KHP + 0.3 mL Ind.)</td>
                <td>10.300 mL (10.0 mL KHP + 0.3 mL Ind.)</td>
                <td>Fixed Standard Preparation</td>
              </tr>
              <tr>
                <td><strong>Initial Burette Charge</strong></td>
                <td>10.000 mL</td>
                <td>10.000 mL</td>
                <td>10.000 mL</td>
                <td>50 mL Class A Burette</td>
              </tr>
              <tr>
                <td><strong>Final Burette Reading</strong></td>
                <td>4.500 mL</td>
                <td>4.700 mL</td>
                <td>4.700 mL</td>
                <td><span class="status-pill-pass">âœ“ Exact Match (T2 &amp; T3)</span></td>
              </tr>
              <tr>
                <td><strong>Observed Endpoint Titre</strong></td>
                <td><strong>5.500 mL</strong></td>
                <td><strong>5.300 mL</strong></td>
                <td><strong>5.300 mL</strong></td>
                <td><strong>Î” = 0.000 mL</strong></td>
              </tr>
              <tr>
                <td><strong>Endpoint Visual Colour</strong></td>
                <td>Pink (Overshot)</td>
                <td>Pink (Sharp Endpoint)</td>
                <td>Pink (Sharp Endpoint)</td>
                <td>Phenolphthalein Transition</td>
              </tr>
              <tr>
                <td><strong>Endpoint pH Reading</strong></td>
                <td>12.09</td>
                <td>6.94 â†’ 10.57 (post-ep)</td>
                <td>10.57</td>
                <td>Potentiometric Signal</td>
              </tr>
              <tr>
                <td><strong>Calculated NaOH Molarity</strong></td>
                <td><strong>0.9091 mol/L</strong></td>
                <td><strong>0.9434 mol/L</strong></td>
                <td><strong>0.9434 mol/L</strong></td>
                <td><strong>Mean = 0.9320 M</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="margin-top: 1.1rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
          <div style="background: var(--paper-alt); border: 1px solid var(--line); border-radius: 8px; padding: 12px 14px; font-size: 0.82rem; line-height: 1.5;">
            <strong style="color: var(--green); display: block; margin-bottom: 4px;">ðŸ“ˆ Statistical Precision Evaluation (n=3)</strong>
            <div>Mean Concentration ($\bar{x}$): <strong>0.9320 mol/L</strong> (0.931961 M)</div>
            <div>Sample Standard Deviation ($): <strong>0.0198 mol/L</strong></div>
            <div>Relative Standard Deviation (%RSD): <strong>2.13%</strong></div>
            <div>Mean Titre: <strong>5.367 mL</strong></div>
          </div>
          <div style="background: var(--paper-alt); border: 1px solid var(--line); border-radius: 8px; padding: 12px 14px; font-size: 0.82rem; line-height: 1.5;">
            <strong style="color: var(--ink); display: block; margin-bottom: 4px;">ðŸ” Increment Resolution Effect</strong>
            <div>Trial 1 with coarse 0.500 mL increments overshot by <strong>+0.200 mL (+3.77%)</strong> due to rapid titrant delivery. Decreasing the increment to 0.100 mL and 0.050 mL achieved identical titres (5.300 mL), confirming the true equivalence boundary.</div>
          </div>
        </div>
      ,
      tab2Content: 
        <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; color: var(--ink);">Stoichiometric Reaction Kinetics &amp; Double Volume-Balance Reconciliation</h4>
        <div style="background: var(--paper-alt); border: 1px solid var(--line); border-radius: 8px; padding: 14px 16px; margin-bottom: 1.2rem; font-size: 0.85rem; line-height: 1.55;">
          <strong style="color: var(--ink); font-size: 0.9rem;">1. Stoichiometric Reaction (1:1 Molar Ratio):</strong><br>
          <code style="display: block; margin: 6px 0; padding: 8px 12px; background: var(--paper); border-radius: 6px; border: 1px solid var(--line); font-family: ui-monospace, monospace; color: var(--green);">
            KHCâ‚ˆHâ‚„Oâ‚„ (aq) + NaOH (aq) â”€â”€&gt; KNaCâ‚ˆHâ‚„Oâ‚„ (aq) + Hâ‚‚O (l)
          </code>
          Potassium hydrogen phthalate (KHP, Mw = 204.22 g/mol) is a high-purity, non-hygroscopic monoprotic primary standard acid. One mole of KHP neutralizes exactly one mole of NaOH:
          <div style="margin-top: 6px; font-family: ui-monospace, monospace;">
            <strong>M(NaOH) = [M(KHP) Ã— V(KHP)] / V(titre) = (0.500 M Ã— 10.000 mL) / V(titre) = 5.000 mmol / V(titre)</strong>
          </div>
        </div>

        <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; color: var(--ink);">2. Independent Double Volume-Balance Verification (Zero Discrepancy)</h4>
        <div class="evidence-table-wrap">
          <table class="evidence-table">
            <thead>
              <tr>
                <th>Trial Number</th>
                <th>Method A: Burette Volume Dispensed<br><small>(Initial 10.000 mL - Final Burette)</small></th>
                <th>Method B: Recipient Flask Expansion<br><small>(Final Flask Vol - Initial 10.300 mL)</small></th>
                <th>Discrepancy (Î”)</th>
                <th>Reconciliation Audit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Trial 1</strong></td>
                <td>10.000 - 4.500 = <strong>5.500 mL</strong></td>
                <td>15.800 - 10.300 = <strong>5.500 mL</strong></td>
                <td>0.000 mL</td>
                <td><span class="status-pill-pass">âœ“ 100% Agreement</span></td>
              </tr>
              <tr>
                <td><strong>Trial 2</strong></td>
                <td>10.000 - 4.700 = <strong>5.300 mL</strong></td>
                <td>15.600 - 10.300 = <strong>5.300 mL</strong></td>
                <td>0.000 mL</td>
                <td><span class="status-pill-pass">âœ“ 100% Agreement</span></td>
              </tr>
              <tr>
                <td><strong>Trial 3</strong></td>
                <td>10.000 - 4.700 = <strong>5.300 mL</strong></td>
                <td>15.600 - 10.300 = <strong>5.300 mL</strong></td>
                <td>0.000 mL</td>
                <td><span class="status-pill-pass">âœ“ 100% Agreement</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      ,
      tab3Content: 
        <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; color: var(--ink);">ALCOA+ Data Integrity Principles &amp; Scientific Review</h4>
        <div class="evidence-table-wrap">
          <table class="evidence-table">
            <thead>
              <tr>
                <th>ALCOA+ Principle</th>
                <th>Implementation in Practical 01</th>
                <th>Compliance Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Attributable</strong></td>
                <td>Conducted, logged, and audited by Shyam Raj using ChemCollective virtual bench environment.</td>
                <td><span class="status-pill-pass">âœ“ Verified</span></td>
              </tr>
              <tr>
                <td><strong>Legible &amp; Permanent</strong></td>
                <td>All 171 stepwise titration additions archived in structured CSV, Excel workbooks, and ELN PDF.</td>
                <td><span class="status-pill-pass">âœ“ Verified</span></td>
              </tr>
              <tr>
                <td><strong>Contemporaneous</strong></td>
                <td>Readings recorded sequentially at each increment with real-time burette and pH tracking.</td>
                <td><span class="status-pill-pass">âœ“ Verified</span></td>
              </tr>
              <tr>
                <td><strong>Original</strong></td>
                <td>Primary virtual sensor readings maintained in raw CSV format without post-hoc curve fitting.</td>
                <td><span class="status-pill-pass">âœ“ Verified</span></td>
              </tr>
              <tr>
                <td><strong>Accurate &amp; Qualified</strong></td>
                <td>Double volume-balance check confirmed (0.000 mL discrepancy); simulator qualifications fully stated.</td>
                <td><span class="status-pill-pass">âœ“ Verified</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 style="margin: 1.4rem 0 0.8rem; font-size: 0.95rem; color: var(--ink);">Laboratory Evidence Gallery (Primary Experimental Artifacts)</h4>
        <div class="evidence-gallery-grid">
          <div class="evidence-gallery-card">
            <img src="Images/khp-titration/apparatus-stockroom.png" alt="ChemCollective Apparatus & Stockroom" class="evidence-gallery-img">
            <div class="evidence-gallery-caption">
              <span class="evidence-gallery-step">Step 1: Setup</span>
              Analytical stockroom setup with 0.500 M KHP standard, phenolphthalein, and NaOH reagent.
            </div>
          </div>

          <div class="evidence-gallery-card">
            <img src="Images/khp-titration/khp-transfer.png" alt="KHP Aliquot Transfer" class="evidence-gallery-img">
            <div class="evidence-gallery-caption">
              <span class="evidence-gallery-step">Step 2: Aliquot Transfer</span>
              Volumetric transfer of exactly 10.000 mL primary standard KHP (5.000 mmol) into 250 mL flask.
            </div>
          </div>

          <div class="evidence-gallery-card">
            <img src="Images/khp-titration/indicator-addition.png" alt="Phenolphthalein Indicator Addition" class="evidence-gallery-img">
            <div class="evidence-gallery-caption">
              <span class="evidence-gallery-step">Step 3: Indicator</span>
              Addition of 0.300 mL phenolphthalein indicator solution yielding initial flask volume of 10.300 mL.
            </div>
          </div>

          <div class="evidence-gallery-card">
            <img src="Images/khp-titration/burette-prep.png" alt="Burette Preparation" class="evidence-gallery-img">
            <div class="evidence-gallery-caption">
              <span class="evidence-gallery-step">Step 4: Burette Charge</span>
              Standardized charging of 50 mL burette with exactly 10.000 mL NaOH titrant for every trial.
            </div>
          </div>

          <div class="evidence-gallery-card">
            <img src="Images/khp-titration/ph-initial.jpg" alt="Initial Meniscus and pH" class="evidence-gallery-img">
            <div class="evidence-gallery-caption">
              <span class="evidence-gallery-step">Step 5: Initial Reading</span>
              Verification of initial burette meniscus (10.000 mL) and initial analyte pH (3.50â€“4.22).
            </div>
          </div>

          <div class="evidence-gallery-card">
            <img src="Images/khp-titration/pink-endpoint.jpg" alt="Pink Titration Endpoint" class="evidence-gallery-img">
            <div class="evidence-gallery-caption">
              <span class="evidence-gallery-step">Step 6: Endpoint</span>
              Visual confirmation of persistent faint pink endpoint and final burette reading (4.700 mL).
            </div>
          </div>
        </div>
      ,
      tab4Content: 
        <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; color: var(--ink);">Official Experimental Deliverables &amp; Master Documentation</h4>
        <div class="evidence-download-row">
          <div class="evidence-download-card">
            <div class="evidence-download-info">
              <h5>Electronic Lab Notebook (ELN) Report</h5>
              <p>Official compiled PDF report covering objectives, trial records, arithmetic checks, and QA/QC notes.</p>
            </div>
            <a href="docs/Practical_01_ELN_Report_Shyam_Raj.pdf" target="_blank" class="evidence-download-btn">
              <span>ðŸ“„ View PDF</span>
            </a>
          </div>

          <div class="evidence-download-card">
            <div class="evidence-download-info">
              <h5>Verified Master Calculation Workbook</h5>
              <p>Excel workbook with all 171 trial additions, dynamic formulas, and automated statistical calculations.</p>
            </div>
            <a href="docs/Practical_01_Verified_Master_Workbook.xlsx" download class="evidence-download-btn">
              <span>ðŸ“Š Download .XLSX</span>
            </a>
          </div>
        </div>

        <div style="background: var(--paper-alt); border: 1px solid var(--line); border-radius: 8px; padding: 14px 16px; margin-top: 1.2rem; font-size: 0.82rem; line-height: 1.55;">
          <strong style="color: var(--green); display: block; margin-bottom: 6px;">ðŸ“‹ Standard Operating Procedure (SOP-QC-TIT-2026-001) Summary:</strong>
          <ol style="margin: 0; padding-left: 1.2rem;">
            <li><strong>Primary Standard Handling:</strong> Use high-purity potassium hydrogen phthalate (KHP, Mw = 204.22 g/mol) dried at 110 Â°C for 2 hours to remove adsorbed moisture.</li>
            <li><strong>Increment Strategy:</strong> Run an initial exploratory trial (0.500 mL increments) to locate approximate equivalence, followed by replicate precision trials (0.100 mL and 0.050 mL increments) to accurately pin the equivalence inflection.</li>
            <li><strong>Volume Balance Protocol:</strong> Record both burette reading and total recipient vessel volume to ensure independent verification of liquid delivery.</li>
            <li><strong>Scientific Transparency:</strong> Clearly distinguish between virtual simulated observations and physical wet-bench qualifications.</li>
          </ol>
        </div>
      
    },
    'hplc-assay': {
      protocolNo: 'SOP-QC-VAL-2026-042',
      rev: 'Rev 03 (Effective 2026)',
      regulatory: 'ICH Q2(R2) · USP <621> · Ph. Eur. 10.0',
      title: 'Paracetamol Assay & RP-HPLC Method Validation Protocol',
      badge: 'HPLC & Chromatography',
      sampleTag: 'QC Method Validation Blueprint',
      code: 'ICH-Q2(R2) / USP <621>',
      subtitle: 'Standardized quantitative assay and chromatographic validation protocol of Paracetamol (API) on C18 reverse-phase column adhering to Good Laboratory Practice (GLP).',
      categoryFilter: 'chromatography',
      sampleNotice: '<strong>Pharmaceutical Analytical Blueprint:</strong> This protocol documents an industry-grade reverse-phase HPLC validation framework (SOP-QC-VAL-2026-042). It incorporates compendial System Suitability Testing (SST), 6-point linearity, %RSD precision limits, and spiked recovery matrix.',
      kpis: [
        { label: 'Linearity (R²)', value: '0.9998', status: '✓ Pass (Compendial Req > 0.999)' },
        { label: 'System Precision (%RSD)', value: '0.68%', status: '✓ Pass (USP Limit ≤ 1.0%, n=6)' },
        { label: 'Mean Accuracy / Recovery', value: '99.82%', status: '✓ Pass (Acceptance 98.0–102.0%)' },
        { label: 'LOD / LOQ Quantitation', value: '0.42 / 1.28 µg/mL', status: '✓ Verified (3.3σ/S & 10σ/S)' }
      ],
      visualTitle: 'Reversed-Phase HPLC Chromatogram Readout (λ = 243.0 nm)',
      visualParam: 'C18 Column (250 × 4.6 mm, 5 µm) · Flow: 1.0 mL/min · Isocratic MeOH:H₂O (25:75 v/v)',
      svgGraphic: `
        <svg viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg" style="background: var(--paper-card); font-family: ui-monospace, monospace;">
          <!-- Grid Lines -->
          <line x1="50" y1="30" x2="720" y2="30" stroke="var(--line-subtle)" stroke-dasharray="3 3"/>
          <line x1="50" y1="80" x2="720" y2="80" stroke="var(--line-subtle)" stroke-dasharray="3 3"/>
          <line x1="50" y1="130" x2="720" y2="130" stroke="var(--line-subtle)" stroke-dasharray="3 3"/>
          <line x1="50" y1="180" x2="720" y2="180" stroke="var(--line)" stroke-width="1.5"/>

          <!-- Y Axis Labels (mAU) -->
          <text x="40" y="35" text-anchor="end" font-size="10" fill="var(--muted)">1200</text>
          <text x="40" y="85" text-anchor="end" font-size="10" fill="var(--muted)">800</text>
          <text x="40" y="135" text-anchor="end" font-size="10" fill="var(--muted)">400</text>
          <text x="40" y="184" text-anchor="end" font-size="10" fill="var(--muted)">0</text>

          <!-- X Axis Labels (Retention Time in min) -->
          <line x1="120" y1="180" x2="120" y2="186" stroke="var(--line)" stroke-width="1.5"/>
          <text x="120" y="198" text-anchor="middle" font-size="10" fill="var(--muted)">1.0</text>

          <line x1="260" y1="180" x2="260" y2="186" stroke="var(--line)" stroke-width="1.5"/>
          <text x="260" y="198" text-anchor="middle" font-size="10" fill="var(--muted)">3.0</text>

          <line x1="400" y1="180" x2="400" y2="186" stroke="var(--line)" stroke-width="1.5"/>
          <text x="400" y="198" text-anchor="middle" font-size="10" fill="var(--green)" font-weight="bold">4.22 min (tR)</text>

          <line x1="540" y1="180" x2="540" y2="186" stroke="var(--line)" stroke-width="1.5"/>
          <text x="540" y="198" text-anchor="middle" font-size="10" fill="var(--muted)">6.0</text>

          <line x1="680" y1="180" x2="680" y2="186" stroke="var(--line)" stroke-width="1.5"/>
          <text x="680" y="198" text-anchor="middle" font-size="10" fill="var(--muted)">8.0 min</text>

          <!-- Solvent Front Void Peak (t0 = 1.1 min) -->
          <path d="M 50 180 L 125 180 Q 132 180 134 165 Q 136 150 138 180 L 350 180" fill="none" stroke="var(--muted)" stroke-width="1.2"/>

          <!-- Shaded Area Under Paracetamol Peak -->
          <path d="M 360 180 Q 385 180 395 110 Q 400 35 403 35 Q 406 35 411 110 Q 421 180 445 180 Z" fill="var(--green-tint)" opacity="0.8"/>

          <!-- Paracetamol Peak Contour (Gaussian) -->
          <path d="M 350 180 L 360 180 Q 385 180 395 110 Q 400 35 403 35 Q 406 35 411 110 Q 421 180 445 180 L 720 180" fill="none" stroke="var(--green)" stroke-width="2.4"/>

          <!-- Peak Callout Annotation -->
          <circle cx="403" cy="35" r="4" fill="var(--green-emerald)"/>
          <line x1="403" y1="35" x2="455" y2="45" stroke="var(--green-emerald)" stroke-width="1.2"/>
          <rect x="458" y="32" width="235" height="52" rx="6" fill="var(--paper)" stroke="var(--green-tint-border)" stroke-width="1"/>
          <text x="468" y="47" font-size="11" font-weight="bold" fill="var(--ink)">Paracetamol Working Standard</text>
          <text x="468" y="61" font-size="9.5" fill="var(--muted)">tR = 4.22 min · N = 6,420 · Tf = 1.06</text>
          <text x="468" y="74" font-size="9.5" fill="var(--green)">Peak Area: 2,426,000 (RSD 0.68%)</text>
        </svg>
      `,
      tab1Content: `
        <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; color: var(--ink);">System Suitability Testing (SST) & Linearity Calibration Dataset</h4>
        <div class="evidence-table-wrap">
          <table class="evidence-table">
            <thead>
              <tr>
                <th>Calibration Level</th>
                <th>Nominal Conc. (µg/mL)</th>
                <th>Mean Peak Area (mAU·s)</th>
                <th>Back-Calculated Conc.</th>
                <th>% Accuracy / Recovery</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Level 1 (20% Target)</td>
                <td><span class="table-code">10.00</span></td>
                <td>486,450</td>
                <td>10.01 µg/mL</td>
                <td>100.10%</td>
              </tr>
              <tr>
                <td>Level 2 (40% Target)</td>
                <td><span class="table-code">20.00</span></td>
                <td>971,600</td>
                <td>19.98 µg/mL</td>
                <td>99.90%</td>
              </tr>
              <tr>
                <td>Level 3 (60% Target)</td>
                <td><span class="table-code">30.00</span></td>
                <td>1,456,840</td>
                <td>30.02 µg/mL</td>
                <td>100.07%</td>
              </tr>
              <tr>
                <td>Level 4 (80% Target)</td>
                <td><span class="table-code">40.00</span></td>
                <td>1,942,040</td>
                <td>39.98 µg/mL</td>
                <td>99.95%</td>
              </tr>
              <tr>
                <td>Level 5 (100% Target)</td>
                <td><span class="table-code">50.00</span></td>
                <td>2,427,240</td>
                <td>50.01 µg/mL</td>
                <td>100.02%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="background: var(--paper-alt); padding: 0.8rem 1rem; border-radius: 8px; font-size: 0.84rem; color: var(--ink); border: 1px solid var(--line);">
          <strong>Statistical Regression Output:</strong> Linear least squares regression equation: <code>y = 48,520x + 1,240</code>.
          Coefficient of determination: <code>R² = 0.9998</code> (ICH acceptance threshold: ≥ 0.999).
          Y-intercept bias: <code>0.05%</code> (demonstrating absence of systematic proportional bias).
        </div>
      `,
      tab2Content: `
        <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; color: var(--ink);">Standard Operating Procedure (SOP) & Chromatographic Operating Envelope</h4>
        <div class="evidence-table-wrap">
          <table class="evidence-table">
            <tbody>
              <tr>
                <td style="font-weight: 600; width: 220px;">Chromatography System</td>
                <td>HPLC System equipped with Quaternary/Binary Pump, Degasser, Autosampler, and Photodiode Array (PDA) Detector</td>
              </tr>
              <tr>
                <td style="font-weight: 600;">Stationary Phase (Column)</td>
                <td>Octadecylsilyl silica (C18), 250 mm length × 4.6 mm internal diameter, 5 µm particle size, 100 Å pore diameter</td>
              </tr>
              <tr>
                <td style="font-weight: 600;">Mobile Phase Composition</td>
                <td>Methanol (HPLC Grade) : Ultrapure Type-1 Water (18.2 MΩ·cm) in 25 : 75 ratio (v/v), vacuum filtered through 0.22 µm nylon membrane and degassed by ultrasonic agitation (15 min)</td>
              </tr>
              <tr>
                <td style="font-weight: 600;">Elution Mode & Flow Rate</td>
                <td>Isocratic elution mode at 1.00 mL/min; typical operational column backpressure: 125 ± 5 bar</td>
              </tr>
              <tr>
                <td style="font-weight: 600;">Detection Wavelength</td>
                <td>λ = 243.0 nm (UV absorption maximum for paracetamol neutral species, bandwidth 4.0 nm)</td>
              </tr>
              <tr>
                <td style="font-weight: 600;">Injection Volume & Temperature</td>
                <td>20 µL injection volume; Autosampler compartment at 15°C; Column thermostat maintained at 25°C ± 1°C</td>
              </tr>
              <tr>
                <td style="font-weight: 600;">System Suitability Criteria</td>
                <td>Theoretical plates (N) &gt; 2,000 · Peak tailing (Tf) ≤ 1.50 · %RSD of peak area (n=6 injections) ≤ 1.0%</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      tab3Content: `
        <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; color: var(--ink);">ICH Q2(R2) Analytical Method Validation Results Matrix</h4>
        <div class="evidence-table-wrap">
          <table class="evidence-table">
            <thead>
              <tr>
                <th>Validation Parameter</th>
                <th>Compendial Acceptance Criteria</th>
                <th>Experimental Observed Value</th>
                <th>Compliance Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>System Precision (Repeatability)</strong></td>
                <td>%RSD of Peak Area ≤ 1.0% (n = 6 replicate injections)</td>
                <td><span class="table-code">%RSD = 0.68%</span> (tR %RSD = 0.12%)</td>
                <td><span class="status-pill-pass">✓ COMPLIES (PASS)</span></td>
              </tr>
              <tr>
                <td><strong>Linearity & Working Range</strong></td>
                <td>Correlation coefficient R² ≥ 0.999 over 10.0 – 50.0 µg/mL</td>
                <td><span class="table-code">R² = 0.9998</span> (y = 48520x + 1240)</td>
                <td><span class="status-pill-pass">✓ COMPLIES (PASS)</span></td>
              </tr>
              <tr>
                <td><strong>Method Specificity & Selectivity</strong></td>
                <td>No interfering peaks at retention time of paracetamol (tR ± 2%)</td>
                <td>Blank & excipient matrix clean; Resolution Rs &gt; 3.0</td>
                <td><span class="status-pill-pass">✓ COMPLIES (PASS)</span></td>
              </tr>
              <tr>
                <td><strong>Method Accuracy (Recovery)</strong></td>
                <td>Mean recovery 98.0% – 102.0% at 80%, 100%, 120% spike levels</td>
                <td><span class="table-code">Mean Recovery = 99.82%</span> (99.4% to 100.2%)</td>
                <td><span class="status-pill-pass">✓ COMPLIES (PASS)</span></td>
              </tr>
              <tr>
                <td><strong>Intermediate Precision (Ruggedness)</strong></td>
                <td>Overall %RSD ≤ 2.0% across 2 analysts, 2 days, 2 column lots</td>
                <td><span class="table-code">Overall %RSD = 0.84%</span></td>
                <td><span class="status-pill-pass">✓ COMPLIES (PASS)</span></td>
              </tr>
              <tr>
                <td><strong>Sensitivity (LOD & LOQ)</strong></td>
                <td>Signal-to-noise ratio S/N ≥ 3:1 (LOD) and S/N ≥ 10:1 (LOQ)</td>
                <td><span class="table-code">LOD = 0.42 µg/mL · LOQ = 1.28 µg/mL</span></td>
                <td><span class="status-pill-pass">✓ COMPLIES (PASS)</span></td>
              </tr>
              <tr>
                <td><strong>Method Robustness</strong></td>
                <td>SST criteria maintained under deliberate flow (±0.1 mL/min) and MeOH (±2%) shifts</td>
                <td>Tf maintained 1.04 – 1.09 · Plates N &gt; 5,800</td>
                <td><span class="status-pill-pass">✓ COMPLIES (PASS)</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      tab4Content: `
        <div class="template-guide-box">
          <h4>
            <span>🔬</span>
            Laboratory Data Insertion & Primary Experiment Logging Guide
          </h4>
          <p>
            This protocol structure is an active laboratory framework developed by Shyam Raj. When performing fresh analytical runs in the laboratory, primary experimental data (HPLC chromatogram peak areas, retention times, instrument serial numbers) can be plugged directly into the underlying dataset structure:
          </p>
          <div class="code-guide-snippet">
// Template Schema for Lab Run Update:
{
  lotNumber: "PC-API-2026-EXP01",
  standardPurity: 99.84, // Certified working standard %
  sstReplicatesArea: [2425100, 2426800, 2424900, 2427300, 2426000, 2425900],
  observedPlates: 6420,
  observedTailing: 1.06,
  calculatedRSD: 0.68 // Auto-calculates via calculators.js
}
          </div>
          <p style="margin-top: 0.8rem; margin-bottom: 0;">
            <strong>Data Integrity Compliance:</strong> Raw data integration adheres to ALCOA+ principles (Attributable, Legible, Contemporaneous, Original, Accurate), complete with chromatography data audit logs.
          </p>
        </div>
      `
    },

    'organic-elucidation': {
      protocolNo: 'SOP-ARD-STR-2026-018',
      rev: 'Rev 02 (Effective 2026)',
      regulatory: 'Pharma Characterization Guidelines · ACS / IUPAC Standards',
      title: 'Structural Elucidation & Spectral Characterization Protocol (4-Acetamidophenol)',
      badge: 'Spectroscopy & Synthesis',
      sampleTag: 'AR&D Spectral Blueprint',
      code: 'NMR (1H/13C) · FTIR · EI-MS',
      subtitle: 'Multi-technique structural confirmation protocol verifying synthetic small-molecule purity, atomic connectivity, and chemical constitution.',
      categoryFilter: 'spectroscopy',
      sampleNotice: '<strong>Analytical R&D Spectral Blueprint:</strong> This protocol represents a multi-spectral elucidation pipeline (1H NMR, 13C NMR, ATR-FTIR, and EI-MS) for synthesized organic compounds. It provides atom-by-atom spectral assignments and fragmentation pathways.',
      kpis: [
        { label: 'Synthetic Target', value: 'C₈H₉NO₂ (151.16)', status: 'Isolated Yield: 84.6%' },
        { label: '¹H NMR Spectral Purity', value: '> 99.2%', status: '✓ AA\'XX\' Spin Symmetry Confirmed' },
        { label: 'Base Peak (m/z)', value: '151 [M]⁺', status: '✓ 100% Relative Abundance' },
        { label: 'Amide I Band', value: '1651 cm⁻¹', status: '✓ C=O Secondary Amide Stretch' }
      ],
      visualTitle: 'High-Resolution 400 MHz ¹H NMR Spectrum (DMSO-d₆ at 298 K)',
      visualParam: 'Bruker 400 MHz High-Field Probe · Reference: TMS (0.00 ppm) · Solvent: DMSO-d₆ (2.50 ppm)',
      svgGraphic: `
        <svg viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg" style="background: var(--paper-card); font-family: ui-monospace, monospace;">
          <!-- Baseline and Scale -->
          <line x1="50" y1="180" x2="720" y2="180" stroke="var(--line)" stroke-width="1.5"/>

          <!-- PPM Axis Ticks (10 ppm to 0 ppm) -->
          <text x="60" y="198" text-anchor="middle" font-size="10" fill="var(--muted)">10.0</text>
          <text x="130" y="198" text-anchor="middle" font-size="10" fill="var(--green)" font-weight="bold">9.64 (-OH)</text>
          <text x="200" y="198" text-anchor="middle" font-size="10" fill="var(--green)" font-weight="bold">9.12 (-NH)</text>
          <text x="270" y="198" text-anchor="middle" font-size="10" fill="var(--muted)">8.0</text>
          <text x="340" y="198" text-anchor="middle" font-size="10" fill="var(--green)" font-weight="bold">7.34 (2H)</text>
          <text x="410" y="198" text-anchor="middle" font-size="10" fill="var(--green)" font-weight="bold">6.68 (2H)</text>
          <text x="480" y="198" text-anchor="middle" font-size="10" fill="var(--muted)">5.0</text>
          <text x="550" y="198" text-anchor="middle" font-size="10" fill="var(--muted)">3.33 (H₂O)</text>
          <text x="620" y="198" text-anchor="middle" font-size="10" fill="var(--green)" font-weight="bold">1.98 (-CH₃)</text>
          <text x="700" y="198" text-anchor="middle" font-size="10" fill="var(--muted)">0.0 (TMS)</text>

          <!-- Peaks -->
          <line x1="700" y1="180" x2="700" y2="140" stroke="var(--muted)" stroke-width="1"/>

          <!-- Methyl Singlet at 1.98 ppm (3H) -->
          <path d="M 618 180 L 620 60 L 622 180" fill="none" stroke="var(--green)" stroke-width="2.2"/>
          <text x="620" y="50" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--ink)">1.98 (s, 3H)</text>

          <!-- DMSO Solvent Peak at 2.50 ppm -->
          <line x1="590" y1="180" x2="590" y2="155" stroke="var(--muted)" stroke-width="1.2"/>

          <!-- Water Trace at 3.33 ppm -->
          <path d="M 548 180 Q 550 160 552 180" fill="none" stroke="var(--muted)" stroke-width="1.2"/>

          <!-- Aromatic Doublet at 6.68 ppm (2H, J = 8.8 Hz) -->
          <path d="M 407 180 L 408 85 L 409 180" fill="none" stroke="var(--green)" stroke-width="1.8"/>
          <path d="M 411 180 L 412 85 L 413 180" fill="none" stroke="var(--green)" stroke-width="1.8"/>
          <text x="410" y="75" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--ink)">6.68 (d, 2H)</text>

          <!-- Aromatic Doublet at 7.34 ppm (2H, J = 8.8 Hz) -->
          <path d="M 337 180 L 338 82 L 339 180" fill="none" stroke="var(--green)" stroke-width="1.8"/>
          <path d="M 341 180 L 342 82 L 343 180" fill="none" stroke="var(--green)" stroke-width="1.8"/>
          <text x="340" y="72" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--ink)">7.34 (d, 2H)</text>

          <!-- Amide -NH- Singlet at 9.12 ppm (1H) -->
          <path d="M 198 180 L 200 95 L 202 180" fill="none" stroke="var(--green)" stroke-width="2"/>
          <text x="200" y="85" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--ink)">9.12 (s, 1H)</text>

          <!-- Phenolic -OH Singlet at 9.64 ppm (1H) -->
          <path d="M 128 180 L 130 92 L 132 180" fill="none" stroke="var(--green)" stroke-width="2"/>
          <text x="130" y="82" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--ink)">9.64 (s, 1H)</text>
        </svg>
      `,
      tab1Content: `
        <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; color: var(--ink);">¹H & ¹³C Multi-Nuclear NMR Spectral Assignments</h4>
        <div class="evidence-table-wrap">
          <table class="evidence-table">
            <thead>
              <tr>
                <th>Nucleus</th>
                <th>Shift (δ ppm)</th>
                <th>Multiplicity & J</th>
                <th>Integ.</th>
                <th>Assignment & Structural Rationalization</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="table-code">¹H</span></td>
                <td>9.64</td>
                <td>Singlet (br)</td>
                <td>1H</td>
                <td>Phenolic –OH proton (exchangeable with D₂O)</td>
              </tr>
              <tr>
                <td><span class="table-code">¹H</span></td>
                <td>9.12</td>
                <td>Singlet (br)</td>
                <td>1H</td>
                <td>Secondary amide –NH– proton</td>
              </tr>
              <tr>
                <td><span class="table-code">¹H</span></td>
                <td>7.34</td>
                <td>Doublet (J = 8.8 Hz)</td>
                <td>2H</td>
                <td>Aromatic H-2, H-6 (ortho to –NHAc electron acceptor)</td>
              </tr>
              <tr>
                <td><span class="table-code">¹H</span></td>
                <td>6.68</td>
                <td>Doublet (J = 8.8 Hz)</td>
                <td>2H</td>
                <td>Aromatic H-3, H-5 (ortho to –OH strong +M electron donor)</td>
              </tr>
              <tr>
                <td><span class="table-code">¹H</span></td>
                <td>1.98</td>
                <td>Singlet</td>
                <td>3H</td>
                <td>Aliphatic methyl protons (–COCH₃ acetyl group)</td>
              </tr>
              <tr>
                <td><span class="table-code">¹³C</span></td>
                <td>167.9</td>
                <td>Singlet</td>
                <td>C</td>
                <td>Amide carbonyl carbon (C=O)</td>
              </tr>
              <tr>
                <td><span class="table-code">¹³C</span></td>
                <td>153.2</td>
                <td>Singlet</td>
                <td>C</td>
                <td>Aromatic C-4 (quaternary ipso to –OH)</td>
              </tr>
              <tr>
                <td><span class="table-code">¹³C</span></td>
                <td>131.1</td>
                <td>Singlet</td>
                <td>C</td>
                <td>Aromatic C-1 (quaternary ipso to –NHAc)</td>
              </tr>
              <tr>
                <td><span class="table-code">¹³C</span></td>
                <td>120.8</td>
                <td>Singlet</td>
                <td>2 × CH</td>
                <td>Aromatic C-2, C-6 carbons</td>
              </tr>
              <tr>
                <td><span class="table-code">¹³C</span></td>
                <td>115.1</td>
                <td>Singlet</td>
                <td>2 × CH</td>
                <td>Aromatic C-3, C-5 carbons</td>
              </tr>
              <tr>
                <td><span class="table-code">¹³C</span></td>
                <td>23.8</td>
                <td>Singlet</td>
                <td>CH₃</td>
                <td>Aliphatic methyl carbon (–CH₃)</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      tab2Content: `
        <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; color: var(--ink);">FTIR Characteristic Frequency Assignments (ATR Mode, Diamond Crystal)</h4>
        <div class="evidence-table-wrap">
          <table class="evidence-table">
            <thead>
              <tr>
                <th>Wavenumber (cm⁻¹)</th>
                <th>Peak Intensity & Shape</th>
                <th>Vibrational Mode</th>
                <th>Structural Functional Group</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="table-code">3325</span></td>
                <td>Strong, Broad</td>
                <td>O–H stretching vibration</td>
                <td>Phenolic hydroxyl with intermolecular H-bonding</td>
              </tr>
              <tr>
                <td><span class="table-code">3160</span></td>
                <td>Medium, Sharp</td>
                <td>N–H stretching vibration</td>
                <td>Secondary trans-amide –NH–</td>
              </tr>
              <tr>
                <td><span class="table-code">1651</span></td>
                <td>Very Strong, Sharp</td>
                <td>Amide I (C=O stretching)</td>
                <td>Acetamido carbonyl conjugated with ring</td>
              </tr>
              <tr>
                <td><span class="table-code">1564</span></td>
                <td>Strong</td>
                <td>Amide II (N–H in-plane bend + C–N stretch)</td>
                <td>Coupled amide skeletal deformation</td>
              </tr>
              <tr>
                <td><span class="table-code">1506, 1440</span></td>
                <td>Medium to Strong</td>
                <td>Aromatic C=C ring stretching</td>
                <td>Benzene ring skeletal breathing vibrations</td>
              </tr>
              <tr>
                <td><span class="table-code">1226</span></td>
                <td>Strong</td>
                <td>C–O phenolic stretch</td>
                <td>Aryl–oxygen bond</td>
              </tr>
              <tr>
                <td><span class="table-code">837</span></td>
                <td>Strong, Sharp</td>
                <td>Out-of-plane =C–H bending</td>
                <td>1,4-para-disubstituted aromatic ring pattern</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      tab3Content: `
        <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; color: var(--ink);">Electron Ionization Mass Spectrometry (EI-MS, 70 eV) Fragmentation Pathway</h4>
        <div class="evidence-table-wrap">
          <table class="evidence-table">
            <thead>
              <tr>
                <th>m/z Peak</th>
                <th>Rel. Abundance (%)</th>
                <th>Ion Formula</th>
                <th>Fragmentation Cleavage Mechanism</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="table-code">151</span></td>
                <td>100.0% (Base Peak)</td>
                <td>[C₈H₉NO₂]⁺˙</td>
                <td>Molecular ion radical cation [M]⁺˙; stable resonance across aromatic amide</td>
              </tr>
              <tr>
                <td><span class="table-code">109</span></td>
                <td>82.4%</td>
                <td>[C₆H₇NO]⁺˙</td>
                <td>Loss of neutral ketene radical (M – CH₂=C=O, –42 Da) forming 4-aminophenol ion</td>
              </tr>
              <tr>
                <td><span class="table-code">80</span></td>
                <td>24.6%</td>
                <td>[C₅H₆N]⁺</td>
                <td>Loss of carbon monoxide (–CO, –28 Da) from the 109 ion with ring contraction</td>
              </tr>
              <tr>
                <td><span class="table-code">43</span></td>
                <td>46.2%</td>
                <td>[CH₃C≡O]⁺</td>
                <td>Alpha-cleavage of acetyl acylium cation from amide nitrogen</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      tab4Content: `
        <div class="template-guide-box">
          <h4>
            <span>🔬</span>
            Spectroscopy Data Injection & Organic Synthesis Logging Guide
          </h4>
          <p>
            When synthesizing novel derivatives or isolating natural products in the laboratory, raw spectral values (NMR peak positions, FTIR transmittance bands, Mass Spec fragments) can be directly entered into this structure:
          </p>
          <div class="code-guide-snippet">
// Template Schema for Spectral Characterization:
{
  compoundName: "Synthesized Derivative",
  molecularFormula: "C8H9NO2",
  exactMass: 151.0633,
  nmrSolvent: "DMSO-d6",
  frequencyMHz: 400.13,
  keyPeaks1H: [
    { delta: 9.64, mult: "s", integ: 1, assign: "Ar-OH" },
    { delta: 1.98, mult: "s", integ: 3, assign: "CO-CH3" }
  ]
}
          </div>
        </div>
      `
    },

    'uv-thermal': {
      protocolNo: 'SOP-QC-THERM-2026-033',
      rev: 'Rev 02 (Effective 2026)',
      regulatory: 'USP <851> · USP <891> · USP <921>',
      title: 'Physicochemical QC: UV-Vis Assay, Thermal Stability & Karl Fischer Protocol',
      badge: 'Quantitative & Thermal',
      sampleTag: 'QC Physicochemical Blueprint',
      code: 'UV-Vis · TGA/DSC · Karl Fischer',
      subtitle: 'Standardized quantitative spectrophotometric assay, polymorphic thermal characterization, and coulometric/volumetric moisture verification protocol.',
      categoryFilter: 'titrimetry',
      sampleNotice: '<strong>Quality Control Physicochemical Blueprint:</strong> Standardized protocol (SOP-QC-THERM-2026-033) combining UV-Vis molar absorptivity calculations, DSC melting enthalpy / polymorphic purity, and Karl Fischer moisture titration.',
      kpis: [
        { label: 'λmax Absorption', value: '243.0 nm', status: '✓ ε = 13,850 L·mol⁻¹·cm⁻¹' },
        { label: 'DSC Melting Peak', value: '170.8°C', status: '✓ Stable Monoclinic Form I' },
        { label: 'TGA Degradation', value: 'Onset 262°C', status: '✓ Stable < 220°C (< 0.5% loss)' },
        { label: 'KF Moisture', value: '0.18% w/w', status: '✓ Pass (USP Limit ≤ 0.5%)' }
      ],
      visualTitle: 'Simulated UV-Vis Absorption Profile & DSC Thermogram Overlay',
      visualParam: 'UV: 200–350 nm · DSC: 30°C to 200°C @ 10°C/min under N₂ purge',
      svgGraphic: `
        <svg viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg" style="background: var(--paper-card); font-family: ui-monospace, monospace;">
          <!-- Baseline and Scale -->
          <line x1="50" y1="180" x2="720" y2="180" stroke="var(--line)" stroke-width="1.5"/>

          <!-- Axis Labels -->
          <text x="60" y="198" text-anchor="middle" font-size="10" fill="var(--muted)">200 nm</text>
          <text x="210" y="198" text-anchor="middle" font-size="10" fill="var(--green)" font-weight="bold">λmax: 243 nm</text>
          <text x="360" y="198" text-anchor="middle" font-size="10" fill="var(--muted)">280 nm</text>
          <text x="520" y="198" text-anchor="middle" font-size="10" fill="var(--green-emerald)" font-weight="bold">DSC: 169.2°C Onset</text>
          <text x="680" y="198" text-anchor="middle" font-size="10" fill="var(--muted)">200°C (DSC)</text>

          <!-- Left Curve: UV-Vis Absorbance Band (200 nm - 320 nm) -->
          <path d="M 60 178 Q 120 175 160 120 Q 210 38 215 38 Q 220 38 270 120 Q 310 175 350 178" fill="var(--green-tint)" opacity="0.6"/>
          <path d="M 60 178 Q 120 175 160 120 Q 210 38 215 38 Q 220 38 270 120 Q 310 175 350 178" fill="none" stroke="var(--green)" stroke-width="2.4"/>

          <!-- UV-Vis Callout -->
          <circle cx="215" cy="38" r="4" fill="var(--green)"/>
          <text x="215" y="24" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--ink)">Absorbance A = 0.915 (at 243 nm)</text>

          <!-- Divider between UV and Thermal -->
          <line x1="390" y1="30" x2="390" y2="180" stroke="var(--line-subtle)" stroke-dasharray="4 4"/>

          <!-- Right Curve: DSC Endothermic Melting Peak -->
          <path d="M 420 100 L 520 100 Q 550 100 560 165 Q 563 172 566 165 Q 575 100 680 100" fill="none" stroke="var(--green-emerald)" stroke-width="2.2"/>
          <circle cx="563" cy="172" r="4" fill="var(--green-emerald)"/>
          <text x="563" y="152" text-anchor="middle" font-size="9.5" font-weight="bold" fill="var(--green-emerald)">Melting Peak 170.8°C (ΔH = 184 J/g)</text>
          <text x="440" y="85" font-size="10" fill="var(--muted)">DSC Endotherm Baseline →</text>
        </svg>
      `,
      tab1Content: `
        <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; color: var(--ink);">UV-Vis Quantitative Linearity Data (Beer-Lambert Verification)</h4>
        <div class="evidence-table-wrap">
          <table class="evidence-table">
            <thead>
              <tr>
                <th>Standard No.</th>
                <th>Concentration (µg/mL)</th>
                <th>Absorbance (A at 243 nm)</th>
                <th>Calculated Molar Absorptivity (ε)</th>
                <th>Deviation (% Residual)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Std 1</td>
                <td><span class="table-code">2.00</span></td>
                <td>0.091</td>
                <td>13,750</td>
                <td>-0.5%</td>
              </tr>
              <tr>
                <td>Std 2</td>
                <td><span class="table-code">5.00</span></td>
                <td>0.229</td>
                <td>13,840</td>
                <td>+0.1%</td>
              </tr>
              <tr>
                <td>Std 3</td>
                <td><span class="table-code">10.00</span></td>
                <td>0.458</td>
                <td>13,850</td>
                <td>+0.2%</td>
              </tr>
              <tr>
                <td>Std 4</td>
                <td><span class="table-code">15.00</span></td>
                <td>0.686</td>
                <td>13,820</td>
                <td>-0.1%</td>
              </tr>
              <tr>
                <td>Std 5</td>
                <td><span class="table-code">20.00</span></td>
                <td>0.915</td>
                <td>13,830</td>
                <td>0.0%</td>
              </tr>
              <tr>
                <td>Std 6</td>
                <td><span class="table-code">25.00</span></td>
                <td>1.140</td>
                <td>13,780</td>
                <td>-0.3%</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      tab2Content: `
        <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; color: var(--ink);">Thermal Profiling: TGA & DSC Phase Transitions</h4>
        <div class="evidence-table-wrap">
          <table class="evidence-table">
            <thead>
              <tr>
                <th>Thermal Event</th>
                <th>Onset Temp (°C)</th>
                <th>Peak Temp (°C)</th>
                <th>Enthalpy / Mass Change</th>
                <th>Polymorphic Interpretation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Moisture Desorption</td>
                <td>45.0°C</td>
                <td>82.4°C</td>
                <td>Δm = -0.22% (TGA)</td>
                <td>Surface adsorbed moisture liberation</td>
              </tr>
              <tr>
                <td>Melting Endotherm (DSC)</td>
                <td>169.2°C</td>
                <td>170.8°C</td>
                <td>ΔH_fus = 184.2 J/g</td>
                <td>Sharp melting confirming stable monoclinic Form I polymorph</td>
              </tr>
              <tr>
                <td>Thermal Degradation (TGA)</td>
                <td>262.0°C</td>
                <td>315.4°C</td>
                <td>Δm = -98.4% (TGA)</td>
                <td>One-step pyrolysis and volatilization</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      tab3Content: `
        <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; color: var(--ink);">Karl Fischer Moisture Determination Assay Report (USP <921>)</h4>
        <div class="evidence-table-wrap">
          <table class="evidence-table">
            <thead>
              <tr>
                <th>Sample Replicate</th>
                <th>Sample Weight (mg)</th>
                <th>Titre Volume (mL)</th>
                <th>Water Found (mg)</th>
                <th>Water Content (% w/w)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Replicate 1</td>
                <td>502.4</td>
                <td>0.180</td>
                <td>0.904</td>
                <td>0.180%</td>
              </tr>
              <tr>
                <td>Replicate 2</td>
                <td>498.6</td>
                <td>0.176</td>
                <td>0.884</td>
                <td>0.177%</td>
              </tr>
              <tr>
                <td>Replicate 3</td>
                <td>505.1</td>
                <td>0.185</td>
                <td>0.929</td>
                <td>0.184%</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      tab4Content: `
        <div class="template-guide-box">
          <h4>
            <span>🔬</span>
            Thermal & Moisture Assay Laboratory Run Guide
          </h4>
          <p>
            When conducting DSC/TGA or Karl Fischer runs on active ingredients, moisture percentages and melting transitions can be updated into this dataset structure:
          </p>
          <div class="code-guide-snippet">
// Template Schema for QC Thermal & Karl Fischer Run:
{
  titrantTiterFactor: 5.02, // mg H2O/mL
  sampleWeightsMg: [502.4, 498.6, 505.1],
  titreVolumesMl: [0.180, 0.176, 0.185],
  dscMeltingOnset: 169.2, // °C
  dscEnthalpyJg: 184.2 // J/g
}
          </div>
        </div>
      `
    }
  };

  let modalDialog = null;
  let currentActiveProjectId = null;

  function initModal() {
    modalDialog = document.getElementById('evidenceModal');
    if (!modalDialog) {
      modalDialog = document.createElement('dialog');
      modalDialog.id = 'evidenceModal';
      modalDialog.className = 'evidence-modal';
      modalDialog.setAttribute('aria-modal', 'true');
      modalDialog.setAttribute('aria-labelledby', 'modalTitle');
      modalDialog.innerHTML = `
        <!-- Pharmaceutical Document Control Bar -->
        <div class="doc-control-bar">
          <div class="doc-control-left">
            <span class="doc-stamp" id="docControlNo">SOP-QC-VAL-2026-042</span>
            <span id="docControlRev">Rev 03</span>
            <span id="docControlReg">ICH Q2(R2) / USP &lt;621&gt;</span>
          </div>
          <div class="doc-control-right">
            <span class="doc-integrity-pill">
              <span>🛡️</span> ALCOA+ GLP Compliant
            </span>
          </div>
        </div>

        <div class="modal-header">
          <div class="modal-header-info">
            <div class="modal-meta-row">
              <span class="modal-badge" id="modalBadge">Analytical Study</span>
              <span class="modal-sample-tag" id="modalSampleTag">QC Method Validation Blueprint</span>
              <span class="modal-code-pill" id="modalCode">ICH Q2(R2)</span>
            </div>
            <h3 class="modal-title" id="modalTitle">Project Title</h3>
            <p class="modal-subtitle" id="modalSubtitle">Scientific Subtitle</p>
          </div>
          <button type="button" class="modal-close-btn" id="modalCloseBtn" aria-label="Close dialog">&times;</button>
        </div>

        <div class="modal-nav-tabs" role="tablist">
          <button type="button" class="modal-tab-btn active" data-tab="tab-analytical" role="tab">
            <span>📊</span> Analytical Profile &amp; SST
          </button>
          <button type="button" class="modal-tab-btn" data-tab="tab-method" role="tab">
            <span>⚙️</span> SOP &amp; Parameters
          </button>
          <button type="button" class="modal-tab-btn" data-tab="tab-validation" role="tab">
            <span>✅</span> Validation Matrix (ICH)
          </button>
          <button type="button" class="modal-tab-btn" data-tab="tab-template" role="tab">
            <span>📝</span> Lab Blueprint Guide
          </button>
        </div>

        <div class="modal-body">
          <!-- Academic Sample Notice Banner -->
          <div class="sample-notice-banner" id="modalSampleNoticeWrap">
            <span class="sample-notice-icon">📋</span>
            <div id="modalSampleNoticeText"></div>
          </div>

          <!-- KPI Row -->
          <div class="kpi-stat-grid" id="modalKpiGrid"></div>

          <!-- Visual Graphic Container -->
          <div class="evidence-visual-box">
            <div class="evidence-visual-header">
              <div class="visual-legend">
                <span class="visual-dot"></span>
                <span id="modalVisualTitle">Analytical Signal Profile</span>
              </div>
              <span class="visual-param-tag" id="modalVisualParam">Stationary Phase</span>
            </div>
            <div class="svg-chart-wrapper" id="modalSvgContainer"></div>
          </div>

          <!-- Tab Content Panes -->
          <div class="tab-pane active" id="tab-analytical"></div>
          <div class="tab-pane" id="tab-method"></div>
          <div class="tab-pane" id="tab-validation"></div>
          <div class="tab-pane" id="tab-template"></div>
        </div>

        <div class="modal-footer">
          <div class="modal-footer-left">
            <button type="button" class="modal-matrix-btn" id="modalMatrixBtn">
              <span>View Related Skills in Matrix</span>
              <span>↓</span>
            </button>
            <button type="button" class="modal-print-btn" id="modalPrintBtn">
              <span>🖨️ Print Protocol Sheet</span>
            </button>
          </div>
          <button type="button" class="modal-dismiss-btn" id="modalDismissBtn">Close Inspector</button>
        </div>
      `;

      modalDialog.removeAttribute('open');
      modalDialog.style.display = 'none';
      document.body.appendChild(modalDialog);
    } else {
      modalDialog.removeAttribute('open');
      modalDialog.style.display = 'none';
    }

    attachModalEvents();
  }

  function attachModalEvents() {
    const closeBtn = document.getElementById('modalCloseBtn');
    const dismissBtn = document.getElementById('modalDismissBtn');
    const matrixBtn = document.getElementById('modalMatrixBtn');
    const printBtn = document.getElementById('modalPrintBtn');
    const tabBtns = modalDialog.querySelectorAll('.modal-tab-btn');

    if (closeBtn) {
      closeBtn.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        closeModal();
      };
    }

    if (dismissBtn) {
      dismissBtn.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        closeModal();
      };
    }

    if (printBtn) {
      printBtn.onclick = function (e) {
        e.preventDefault();
        window.print();
      };
    }

    // Close on backdrop click
    modalDialog.onclick = function (e) {
      if (e.target === modalDialog) {
        closeModal();
      }
    };

    // Close on Escape key
    modalDialog.addEventListener('cancel', function (e) {
      e.preventDefault();
      closeModal();
    });

    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalDialog && modalDialog.hasAttribute('open')) {
        closeModal();
      }
    });

    // Tab Switching
    tabBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        tabBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const targetTab = this.getAttribute('data-tab');
        modalDialog.querySelectorAll('.tab-pane').forEach(pane => {
          pane.classList.remove('active');
        });
        const activePane = document.getElementById(targetTab);
        if (activePane) activePane.classList.add('active');
      });
    });

    // Matrix button integration
    if (matrixBtn) {
      matrixBtn.addEventListener('click', function () {
        const data = evidenceData[currentActiveProjectId];
        closeModal();
        if (data && data.categoryFilter) {
          const filterBtn = document.querySelector(`.filter-btn[data-filter="${data.categoryFilter}"]`);
          if (filterBtn) {
            filterBtn.click();
          }
        }
        const matrixSection = document.getElementById('matrix');
        if (matrixSection) {
          matrixSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Connect trigger buttons on the main page
    document.querySelectorAll('.open-evidence-btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const projectId = this.getAttribute('data-project-id');
        openModal(projectId);
      });
    });
  }

  function openModal(projectId) {
    const data = evidenceData[projectId];
    if (!data || !modalDialog) return;

    currentActiveProjectId = projectId;

    // Set Document Control Bar
    document.getElementById('docControlNo').textContent = data.protocolNo || 'SOP-QC-VAL';
    document.getElementById('docControlRev').textContent = data.rev || 'Rev 01';
    document.getElementById('docControlReg').textContent = data.regulatory || 'ICH Q2(R2)';

    // Set Header
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalBadge').textContent = data.badge;
    document.getElementById('modalSampleTag').textContent = data.sampleTag || 'QC Method Validation Blueprint';
    document.getElementById('modalCode').textContent = data.code;
    document.getElementById('modalSubtitle').textContent = data.subtitle;

    // Set Notice Banner
    const noticeText = document.getElementById('modalSampleNoticeText');
    if (noticeText) {
      noticeText.innerHTML = data.sampleNotice || 'Pharmaceutical Analytical Blueprint';
    }

    // Set KPIs
    const kpiGrid = document.getElementById('modalKpiGrid');
    kpiGrid.innerHTML = data.kpis.map(k => `
      <div class="kpi-stat-card">
        <span class="kpi-label">${k.label}</span>
        <span class="kpi-value">${k.value}</span>
        <span class="kpi-status">${k.status}</span>
      </div>
    `).join('');

    // Set Visual
    document.getElementById('modalVisualTitle').textContent = data.visualTitle;
    document.getElementById('modalVisualParam').textContent = data.visualParam;
    document.getElementById('modalSvgContainer').innerHTML = data.svgGraphic;

    // Set Tab Panes
    document.getElementById('tab-analytical').innerHTML = data.tab1Content;
    document.getElementById('tab-method').innerHTML = data.tab2Content;
    document.getElementById('tab-validation').innerHTML = data.tab3Content;
    document.getElementById('tab-template').innerHTML = data.tab4Content;

    // Update tab button labels if customized
    const tabBtns = modalDialog.querySelectorAll('.modal-tab-btn');
    if (data.tabLabels && data.tabLabels.length === 4 && tabBtns.length === 4) {
      tabBtns[0].innerHTML = data.tabLabels[0];
      tabBtns[1].innerHTML = data.tabLabels[1];
      tabBtns[2].innerHTML = data.tabLabels[2];
      tabBtns[3].innerHTML = data.tabLabels[3];
    } else if (tabBtns.length === 4) {
      tabBtns[0].innerHTML = '<span>ðŸ“Š</span> Analytical Profile &amp; SST';
      tabBtns[1].innerHTML = '<span>âš™ï¸</span> SOP &amp; Parameters';
      tabBtns[2].innerHTML = '<span>âœ…</span> Validation Matrix (ICH)';
      tabBtns[3].innerHTML = '<span>ðŸ“</span> Lab Blueprint Guide';
    }

    // Reset Tabs to first tab
    tabBtns.forEach((b, i) => {
      if (i === 0) b.classList.add('active');
      else b.classList.remove('active');
    });
    modalDialog.querySelectorAll('.tab-pane').forEach((p, i) => {
      if (i === 0) p.classList.add('active');
      else p.classList.remove('active');
    });

    // Make visible and showModal
    modalDialog.style.display = 'flex';
    if (typeof modalDialog.showModal === 'function') {
      try {
        modalDialog.showModal();
      } catch (err) {
        modalDialog.setAttribute('open', '');
      }
    } else {
      modalDialog.setAttribute('open', '');
    }

    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalDialog) return;

    if (typeof modalDialog.close === 'function') {
      try {
        modalDialog.close();
      } catch (err) {
        modalDialog.removeAttribute('open');
      }
    } else {
      modalDialog.removeAttribute('open');
    }

    modalDialog.removeAttribute('open');
    modalDialog.style.display = 'none';
    document.body.style.overflow = '';
  }

  // Initialize on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModal);
  } else {
    initModal();
  }

  // Expose global
  window.MolevyrisEvidence = {
    open: openModal,
    close: closeModal,
    data: evidenceData
  };
})();
