/**
 * MOLEVYRIS — Scientific Evidence Deep-Dive Modal Engine
 * Handles interactive modal dialogues, scientific SVG renderings,
 * data tab switching, and seamless filtering integration with Skills Matrix.
 */

(function () {
  'use strict';

  // Scientific Evidence Data Repository
  const evidenceData = {
    'hplc-assay': {
      title: 'Paracetamol Assay + Method Validation',
      badge: 'HPLC & Chromatography',
      code: 'ICH Q2(R1) · RP-HPLC Assay',
      subtitle: 'Quantitative assay and chromatographic validation of active pharmaceutical ingredient (Paracetamol) on C18 reverse-phase stationary phase following ICH validation guidelines.',
      categoryFilter: 'chromatography',
      kpis: [
        { label: 'Linearity (R²)', value: '0.9998', status: '✓ Pass (ICH > 0.999)' },
        { label: 'Repeatability (%RSD)', value: '0.68%', status: '✓ Pass (ICH < 2.0%, n=6)' },
        { label: 'Mean Recovery', value: '99.82%', status: '✓ Pass (98.0% – 102.0%)' },
        { label: 'LOD / LOQ', value: '0.42 / 1.28 µg/mL', status: '✓ Confirmed (3.3σ & 10σ)' }
      ],
      visualTitle: 'Simulated Reverse-Phase Isocratic Chromatogram (λ = 243 nm)',
      visualParam: 'C18 Column · 1.0 mL/min · MeOH:H₂O (25:75 v/v)',
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
          <rect x="458" y="32" width="220" height="48" rx="6" fill="var(--paper)" stroke="var(--green-tint-border)" stroke-width="1"/>
          <text x="468" y="48" font-size="11" font-weight="bold" fill="var(--ink)">Paracetamol Analyte Peak</text>
          <text x="468" y="62" font-size="9.5" fill="var(--muted)">tR: 4.22 min · N: 6,420 · Tf: 1.06</text>
          <text x="468" y="73" font-size="9.5" fill="var(--green-emerald)">Peak Area: 2,426,000 (RSD 0.68%)</text>
        </svg>
      `,
      tab1Content: `
        <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; color: var(--ink);">Linearity & Calibration Range (10.0 – 50.0 µg/mL)</h4>
        <div class="evidence-table-wrap">
          <table class="evidence-table">
            <thead>
              <tr>
                <th>Level</th>
                <th>Target Conc. (µg/mL)</th>
                <th>Mean Peak Area (mAU·s)</th>
                <th>Calc. Conc. (µg/mL)</th>
                <th>Accuracy / % Recovery</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>L1</td>
                <td><span class="table-code">10.00</span></td>
                <td>486,450</td>
                <td>10.01</td>
                <td>100.10%</td>
              </tr>
              <tr>
                <td>L2</td>
                <td><span class="table-code">20.00</span></td>
                <td>971,600</td>
                <td>19.98</td>
                <td>99.90%</td>
              </tr>
              <tr>
                <td>L3</td>
                <td><span class="table-code">30.00</span></td>
                <td>1,456,840</td>
                <td>30.02</td>
                <td>100.07%</td>
              </tr>
              <tr>
                <td>L4</td>
                <td><span class="table-code">40.00</span></td>
                <td>1,942,040</td>
                <td>39.98</td>
                <td>99.95%</td>
              </tr>
              <tr>
                <td>L5</td>
                <td><span class="table-code">50.00</span></td>
                <td>2,427,240</td>
                <td>50.01</td>
                <td>100.02%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="font-size: 0.85rem; color: var(--muted); margin: 0;">
          <strong>Regression Model:</strong> Linear Least Squares: <code>y = 48,520x + 1,240</code> with <code>R² = 0.9998</code>.
          Zero intercept verified within 95% confidence limits.
        </p>
      `,
      tab2Content: `
        <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; color: var(--ink);">Analytical Instrument & Chromatographic SOP</h4>
        <div class="evidence-table-wrap">
          <table class="evidence-table">
            <tbody>
              <tr>
                <td style="font-weight: 600; width: 220px;">Stationary Phase / Column</td>
                <td>Phenomenex Luna C18(2), 250 mm × 4.6 mm ID, 5 µm particle size, 100 Å pore</td>
              </tr>
              <tr>
                <td style="font-weight: 600;">Mobile Phase Composition</td>
                <td>Methanol : HPLC Grade Ultrapure Water (25 : 75 % v/v), 0.22 µm nylon filtered & degassed</td>
              </tr>
              <tr>
                <td style="font-weight: 600;">Flow Rate & Elution</td>
                <td>1.0 mL/min isocratic elution with backpressure steady at 128 bar</td>
              </tr>
              <tr>
                <td style="font-weight: 600;">Detection Wavelength</td>
                <td>Photodiode Array (PDA) UV detection at λ = 243.0 nm (bandwidth 4 nm)</td>
              </tr>
              <tr>
                <td style="font-weight: 600;">Injection Volume</td>
                <td>20 µL with needle wash in Methanol:Water (50:50)</td>
              </tr>
              <tr>
                <td style="font-weight: 600;">Column Thermostat</td>
                <td>Controlled ambient at 25°C ± 1°C</td>
              </tr>
              <tr>
                <td style="font-weight: 600;">System Suitability</td>
                <td>Plates (N) = 6,420 (> 2,000) · Tailing Factor (Tf) = 1.06 (≤ 1.5) · %RSD Area = 0.68% (≤ 1.0%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      tab3Content: `
        <div class="sop-checklist-card">
          <h4>
            <span class="sop-check-icon">✓</span>
            ICH Q2(R1) Analytical Method Validation Compliance Summary
          </h4>
          <ul class="sop-list">
            <li class="sop-item">
              <span class="sop-check-icon">✓</span>
              <div>
                <strong>Specificity & Selectivity:</strong> Blank diluent and synthetic excipient matrix (starch, talc, magnesium stearate) injected; no chromatographic interference observed at the paracetamol retention window (4.22 ± 0.05 min).
              </div>
            </li>
            <li class="sop-item">
              <span class="sop-check-icon">✓</span>
              <div>
                <strong>Repeatability Precision (n = 6):</strong> Six separate preparations at 100% test level (30 µg/mL) showed retention time %RSD = 0.12% and peak response %RSD = 0.68% (ICH limit: &lt; 2.0%).
              </div>
            </li>
            <li class="sop-item">
              <span class="sop-check-icon">✓</span>
              <div>
                <strong>Intermediate Precision:</strong> Evaluated across two different days and column serial numbers; overall %RSD remained &lt; 0.84%.
              </div>
            </li>
            <li class="sop-item">
              <span class="sop-check-icon">✓</span>
              <div>
                <strong>Method Accuracy & Recovery:</strong> Triplicate spiked recovery determinations at 80% (99.4%), 100% (99.8%), and 120% (100.2%) target levels confirmed mean recovery of 99.82%.
              </div>
            </li>
            <li class="sop-item">
              <span class="sop-check-icon">✓</span>
              <div>
                <strong>Method Robustness:</strong> Minor intentional variations in flow rate (± 0.1 mL/min) and organic modifier (± 2% MeOH) demonstrated system suitability compliance with tailing factor &lt; 1.15.
              </div>
            </li>
          </ul>
        </div>
      `
    },

    'organic-elucidation': {
      title: 'Organic Compound Structural Elucidation',
      badge: 'Spectroscopy & Synthesis',
      code: 'NMR · FTIR · EI-MS Comprehensive Suite',
      subtitle: 'Multi-nuclear 1H/13C NMR, FTIR functional frequency mapping, and Electron Ionization Mass Spectrometry fragmentation elucidation of synthetic 4-acetamidophenol.',
      categoryFilter: 'spectroscopy',
      kpis: [
        { label: 'Target Molecule', value: 'C₈H₉NO₂ (151.16)', status: 'Isolated Yield: 84.6%' },
        { label: '¹H NMR Purity', value: '> 99.2%', status: '✓ Clean AA\'XX\' Spin System' },
        { label: 'Base Peak (m/z)', value: '151 [M]⁺', status: '✓ 100% Relative Abundance' },
        { label: 'Amide I Band', value: '1651 cm⁻¹', status: '✓ C=O Secondary Amide Stretch' }
      ],
      visualTitle: 'Simulated 400 MHz ¹H NMR Spectrum (DMSO-d₆ at 298 K)',
      visualParam: 'Internal Reference: TMS (0.00 ppm) · Solvent Peak: DMSO-d₆ (2.50 ppm)',
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
          <!-- TMS Peak (0 ppm) -->
          <line x1="700" y1="180" x2="700" y2="140" stroke="var(--muted)" stroke-width="1"/>

          <!-- Methyl Singlet at 1.98 ppm (3H, height = 90) -->
          <path d="M 618 180 L 620 60 L 622 180" fill="none" stroke="var(--green)" stroke-width="2.2"/>
          <text x="620" y="50" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--ink)">1.98 (s, 3H)</text>

          <!-- DMSO Solvent Peak at 2.50 ppm -->
          <line x1="590" y1="180" x2="590" y2="155" stroke="var(--muted)" stroke-width="1.2"/>

          <!-- Water Trace at 3.33 ppm -->
          <path d="M 548 180 Q 550 160 552 180" fill="none" stroke="var(--muted)" stroke-width="1.2"/>

          <!-- Aromatic Doublet (ortho to OH) at 6.68 ppm (2H, J = 8.8 Hz) -->
          <path d="M 407 180 L 408 85 L 409 180" fill="none" stroke="var(--green)" stroke-width="1.8"/>
          <path d="M 411 180 L 412 85 L 413 180" fill="none" stroke="var(--green)" stroke-width="1.8"/>
          <text x="410" y="75" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--ink)">6.68 (d, 2H)</text>

          <!-- Aromatic Doublet (ortho to NHAc) at 7.34 ppm (2H, J = 8.8 Hz) -->
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
        <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; color: var(--ink);">¹H & ¹³C NMR Spectral Assignments (DMSO-d₆)</h4>
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
        <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; color: var(--ink);">FTIR Characteristic Frequency Assignments (ATR Mode)</h4>
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
        <p style="font-size: 0.85rem; color: var(--muted); margin: 0;">
          <strong>Conclusion:</strong> The simultaneous agreement of NMR chemical shifts (p-disubstituted AA\'XX\' pattern), IR amide I/II markers, and exact mass fragments (151 $\\rightarrow$ 109 $\\rightarrow$ 43) unambiguously confirms pure 4-acetamidophenol.
        </p>
      `
    },

    'uv-thermal': {
      title: 'Spectrophotometric Assay & Thermal Stability',
      badge: 'Quantitative & Thermal',
      code: 'UV-Vis · TGA/DSC · Karl Fischer',
      subtitle: 'Combined quantitative spectrophotometric determination via Beer-Lambert law, polymorphic thermal transition profiling, and Coulometric/Volumetric Karl Fischer moisture assay.',
      categoryFilter: 'titrimetry',
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
        <p style="font-size: 0.85rem; color: var(--muted); margin: 0;">
          <strong>Optical Characteristics:</strong> Specific Absorbance $A_{1\\%}^{1\\text{cm}} = 715$ at $243\\text{ nm}$.
          Correlation coefficient $R^2 = 0.9995$. Excellent fit across full linear dynamic range.
        </p>
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
        <h4 style="margin: 0 0 0.8rem; font-size: 0.95rem; color: var(--ink);">Karl Fischer Moisture Determination Assay Report</h4>
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
        <div class="sop-checklist-card">
          <h4>
            <span class="sop-check-icon">✓</span>
            Karl Fischer Method Compliance Parameters
          </h4>
          <ul class="sop-list">
            <li class="sop-item">
              <span class="sop-check-icon">✓</span>
              <div>
                <strong>Reagent Standardization:</strong> Standardized with Disodium Tartrate Dihydrate (theory 15.66% H₂O); reagent factor confirmed at <code>F = 5.02 mg H₂O/mL</code>.
              </div>
            </li>
            <li class="sop-item">
              <span class="sop-check-icon">✓</span>
              <div>
                <strong>Titration Precision:</strong> Mean water content = <code>0.180% ± 0.004%</code> (%RSD = 1.94%), well within the official USP pharmacopeial limit of ≤ 0.50% w/w.
              </div>
            </li>
          </ul>
        </div>
      `
    }
  };

  // DOM Elements Initialization
  let modalDialog = null;
  let currentActiveProjectId = null;

  function initModal() {
    // Check if dialog already exists, otherwise create it
    modalDialog = document.getElementById('evidenceModal');
    if (!modalDialog) {
      modalDialog = document.createElement('dialog');
      modalDialog.id = 'evidenceModal';
      modalDialog.className = 'evidence-modal';
      modalDialog.setAttribute('aria-modal', 'true');
      modalDialog.setAttribute('aria-labelledby', 'modalTitle');
      modalDialog.innerHTML = `
        <div class="modal-header">
          <div class="modal-header-info">
            <div class="modal-meta-row">
              <span class="modal-badge" id="modalBadge">Analytical Study</span>
              <span class="modal-code-pill" id="modalCode">ICH Q2(R1)</span>
            </div>
            <h3 class="modal-title" id="modalTitle">Project Title</h3>
            <p class="modal-subtitle" id="modalSubtitle">Scientific Subtitle</p>
          </div>
          <button type="button" class="modal-close-btn" id="modalCloseBtn" aria-label="Close dialog">&times;</button>
        </div>

        <div class="modal-nav-tabs" role="tablist">
          <button type="button" class="modal-tab-btn active" data-tab="tab-analytical" role="tab">
            <span>📊</span> Analytical Data &amp; Profile
          </button>
          <button type="button" class="modal-tab-btn" data-tab="tab-method" role="tab">
            <span>⚙️</span> Method Parameters &amp; SOP
          </button>
          <button type="button" class="modal-tab-btn" data-tab="tab-validation" role="tab">
            <span>✅</span> Validation &amp; Compliance
          </button>
        </div>

        <div class="modal-body">
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
        </div>

        <div class="modal-footer">
          <div class="modal-footer-left">
            <button type="button" class="modal-matrix-btn" id="modalMatrixBtn">
              <span>View in Skills Matrix</span>
              <span>↓</span>
            </button>
          </div>
          <button type="button" class="modal-dismiss-btn" id="modalDismissBtn">Close Inspector</button>
        </div>
      `;
      document.body.appendChild(modalDialog);
    }

    // Attach Event Handlers
    attachModalEvents();
  }

  function attachModalEvents() {
    const closeBtn = document.getElementById('modalCloseBtn');
    const dismissBtn = document.getElementById('modalDismissBtn');
    const matrixBtn = document.getElementById('modalMatrixBtn');
    const tabBtns = modalDialog.querySelectorAll('.modal-tab-btn');

    // Close on buttons
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (dismissBtn) dismissBtn.addEventListener('click', closeModal);

    // Close on backdrop click
    modalDialog.addEventListener('click', function (e) {
      const rect = modalDialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        closeModal();
      }
    });

    // Close on Escape key
    modalDialog.addEventListener('cancel', function (e) {
      e.preventDefault();
      closeModal();
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
        const projectId = this.getAttribute('data-project-id');
        openModal(projectId);
      });
    });
  }

  function openModal(projectId) {
    const data = evidenceData[projectId];
    if (!data) return;

    currentActiveProjectId = projectId;

    // Set Header
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalBadge').textContent = data.badge;
    document.getElementById('modalCode').textContent = data.code;
    document.getElementById('modalSubtitle').textContent = data.subtitle;

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

    // Reset Tabs to first tab
    const tabBtns = modalDialog.querySelectorAll('.modal-tab-btn');
    tabBtns.forEach((b, i) => {
      if (i === 0) b.classList.add('active');
      else b.classList.remove('active');
    });
    modalDialog.querySelectorAll('.tab-pane').forEach((p, i) => {
      if (i === 0) p.classList.add('active');
      else p.classList.remove('active');
    });

    // Open native dialog
    if (typeof modalDialog.showModal === 'function') {
      modalDialog.showModal();
    } else {
      modalDialog.setAttribute('open', '');
    }

    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalDialog) return;
    if (typeof modalDialog.close === 'function') {
      modalDialog.close();
    } else {
      modalDialog.removeAttribute('open');
    }
    document.body.style.overflow = '';
  }

  // Initialize on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModal);
  } else {
    initModal();
  }

  // Expose global for debugging if needed
  window.MolevyrisEvidence = {
    open: openModal,
    close: closeModal
  };
})();

