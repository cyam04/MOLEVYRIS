/**
 * MOLEVYRIS — Living Emerald Biosphere Glass Molecule Engine v8.0
 * 
 * Open-Space (Frameless) Dynamic Molecular Artwork:
 * 1. Open Floating Canvas — No box, no border, floating freely in hero space
 * 2. 3D Tumbling Perspective & Zero-Gravity Levitation (Painter's Algorithm)
 * 3. Central Biosphere Globe:
 *    - Living undulating emerald mountain peaks & continuous harmonic fluid waves
 *    - 14 buoyant micro-droplets & bubbles constantly rising, wobbling & spawning
 *    - Periodic caustic light sweep glinting across the clear glass globe
 *    - Fluid slosh physics responding dynamically to mouse inertia
 * 4. Active High-Speed Bio-Photon Streams pulsing through transparent glass stems
 * 5. Satellite Emerald Spheres with breathing cores & 3D orbiting quantum electrons
 * 6. Flared laboratory glass collar flanges with studio softbox specular glints
 * 7. Background living bokeh molecular network with drifting depth-of-field nodes
 * 8. Interactive click resonance shockwave & spark burst
 * 
 * 100% Pure Code — High-DPI 60 FPS — Zero CDNs or Images
 */
(function () {
  'use strict';

  var canvas = document.getElementById('molecule3DCanvas');
  var stage = document.getElementById('moleculeStage');
  if (!canvas || !stage) return;

  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  // -------------------------------------------------------------
  // 1. High-DPI Display Scaling
  // -------------------------------------------------------------
  var dpr = window.devicePixelRatio || 1;
  var W = 0, H = 0, CX = 0, CY = 0;

  function resize() {
    var rect = stage.getBoundingClientRect();
    W = rect.width  || stage.offsetWidth  || 460;
    H = rect.height || stage.offsetHeight || 460;
    canvas.width  = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    CX = W / 2;
    CY = H / 2;
  }
  window.addEventListener('resize', resize);
  resize();

  // -------------------------------------------------------------
  // 2. Palette & Theme Sensing
  // -------------------------------------------------------------
  function isDark() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  // -------------------------------------------------------------
  // 3. Interactive Mouse Physics & Slosh State
  // -------------------------------------------------------------
  var mouse = {
    x: 0, y: 0,
    normX: 0, normY: 0,
    targetNormX: 0, targetNormY: 0,
    sloshPos: 0, sloshVel: 0,
    pulseEnergy: 0
  };

  stage.addEventListener('mousemove', function (e) {
    var rect = stage.getBoundingClientRect();
    mouse.targetNormX = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
    mouse.targetNormY = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
  });

  stage.addEventListener('mouseleave', function () {
    mouse.targetNormX = 0;
    mouse.targetNormY = 0;
  });

  var shockwaves = [];
  var burstSparks = [];

  stage.addEventListener('click', function (e) {
    mouse.pulseEnergy = 1.0;
    mouse.sloshVel += (Math.random() - 0.5) * 3.5;

    // Shockwave ring
    shockwaves.push({
      x: CX, y: CY,
      radius: 25,
      maxRadius: 210,
      opacity: 1.0,
      speed: 6.0
    });

    // 24 Chemistry sparks
    for (var s = 0; s < 24; s++) {
      var angle = Math.random() * Math.PI * 2;
      var spd = 2.5 + Math.random() * 6.0;
      burstSparks.push({
        x: CX, y: CY,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        size: 1.5 + Math.random() * 2.8,
        alpha: 1.0,
        decay: 0.02 + Math.random() * 0.025
      });
    }
  });

  // -------------------------------------------------------------
  // 4. Molecular Nodes Topology (3D Base Coordinates)
  // -------------------------------------------------------------
  var baseNodes = [
    // 0: Central Biosphere Globe
    { id: 0, x: 0,    y: 0,    z: 0,   r: 72, isGlobe: true },
    // 1: Upper Emerald Sphere
    { id: 1, x: 30,   y: -96,  z: 22,  r: 32, isGlobe: false, electronAng: 0, electronSpd: 0.045 },
    // 2: Top-Right Emerald Sphere
    { id: 2, x: 86,   y: -156, z: -25, r: 36, isGlobe: false, electronAng: 1.5, electronSpd: -0.038 },
    // 3: Down-Right Emerald Sphere
    { id: 3, x: 96,   y: 92,   z: 32,  r: 42, isGlobe: false, electronAng: 3.2, electronSpd: 0.040 },
    // 4: Up-Left Emerald Sphere
    { id: 4, x: -104, y: -42,  z: -20, r: 35, isGlobe: false, electronAng: 4.8, electronSpd: -0.042 },
    // 5: Down-Left Emerald Sphere
    { id: 5, x: -122, y: 64,   z: 18,  r: 38, isGlobe: false, electronAng: 2.1, electronSpd: 0.035 }
  ];

  // Connecting Glass Bonds: [fromNode, toNode]
  var bonds = [
    { from: 0, to: 1, radius: 7.5 },
    { from: 1, to: 2, radius: 6.8 },
    { from: 0, to: 3, radius: 8.5 },
    { from: 0, to: 4, radius: 8.0 },
    { from: 4, to: 5, radius: 7.0 }
  ];

  // Bio-Photon Packet Streams (racing along the stems)
  var photons = [];
  bonds.forEach(function (bond, bIdx) {
    // 2 photons per bond at staggered phases
    photons.push({ bondIdx: bIdx, t: 0.15, spd: 0.014 + bIdx * 0.002, size: 3.2 });
    photons.push({ bondIdx: bIdx, t: 0.65, spd: 0.014 + bIdx * 0.002, size: 2.6 });
  });

  // -------------------------------------------------------------
  // 5. Dynamic Droplets / Bubbles Inside the Central Biosphere
  // -------------------------------------------------------------
  var BUBBLE_COUNT = 14;
  var bubbles = [];
  for (var b = 0; b < BUBBLE_COUNT; b++) {
    bubbles.push({
      x: (Math.random() - 0.5) * 80,
      y: 10 + Math.random() * 45,
      r: 1.5 + Math.random() * 2.5,
      spd: 0.5 + Math.random() * 0.9,
      wobbleSpd: 2.0 + Math.random() * 2.5,
      wobbleAmp: 0.8 + Math.random() * 1.8,
      phase: Math.random() * Math.PI * 2
    });
  }

  // -------------------------------------------------------------
  // 6. Background Living Bokeh Molecular Network
  // -------------------------------------------------------------
  var bokehMolecules = [
    { x: -160, y: -140, r: 26, blur: 8,  spd: 0.0008, phase: 0.5, alpha: 0.28 },
    { x: 60,   y: -180, r: 20, blur: 6,  spd: 0.0011, phase: 2.1, alpha: 0.32 },
    { x: 170,  y: -50,  r: 30, blur: 10, spd: 0.0007, phase: 4.2, alpha: 0.25 },
    { x: -165, y: 150,  r: 34, blur: 11, spd: 0.0006, phase: 1.4, alpha: 0.30 },
    { x: 140,  y: 140,  r: 22, blur: 7,  spd: 0.0010, phase: 3.6, alpha: 0.35 },
    { x: -50,  y: 195,  r: 18, blur: 8,  spd: 0.0012, phase: 5.0, alpha: 0.24 },
    { x: 185,  y: -145, r: 16, blur: 9,  spd: 0.0009, phase: 1.8, alpha: 0.22 }
  ];

  // Ambient floating glowing green spores
  var spores = [];
  for (var sp = 0; sp < 22; sp++) {
    spores.push({
      ang: Math.random() * Math.PI * 2,
      dist: 120 + Math.random() * 100,
      spd: (0.002 + Math.random() * 0.005) * (Math.random() < 0.5 ? 1 : -1),
      size: 1.2 + Math.random() * 2.4,
      alpha: 0.3 + Math.random() * 0.45,
      bobSpd: 1.2 + Math.random() * 2.0,
      phase: Math.random() * Math.PI * 2
    });
  }

  // -------------------------------------------------------------
  // 7. 3D Math & Projection Helpers
  // -------------------------------------------------------------
  var FOCAL = 480;

  function project3D(x, y, z, rotX, rotY, rotZ, centerCX, centerCY) {
    // Rotate Y
    var cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    var x1 = x * cosY + z * sinY;
    var y1 = y;
    var z1 = -x * sinY + z * cosY;

    // Rotate X
    var cosX = Math.cos(rotX), sinX = Math.sin(rotX);
    var x2 = x1;
    var y2 = y1 * cosX - z1 * sinX;
    var z2 = y1 * sinX + z1 * cosX;

    // Rotate Z
    var cosZ = Math.cos(rotZ), sinZ = Math.sin(rotZ);
    var x3 = x2 * cosZ - y2 * sinZ;
    var y3 = x2 * sinZ + y2 * cosZ;
    var z3 = z2;

    var scale = FOCAL / (FOCAL + z3);
    return {
      px: centerCX + x3 * scale,
      py: centerCY + y3 * scale,
      pz: z3,
      scale: scale
    };
  }

  // -------------------------------------------------------------
  // 8. Drawing Helpers
  // -------------------------------------------------------------

  /**
   * Draws a transparent hollow glass stem with flared collar joints
   */
  function drawGlassStem(pA, pB, radius, dark) {
    var dx = pB.px - pA.px;
    var dy = pB.py - pA.py;
    var len = Math.sqrt(dx * dx + dy * dy);
    if (len < 1) return;

    var nx = -dy / len;
    var ny =  dx / len;

    var p1L = { x: pA.px + nx * radius, y: pA.py + ny * radius };
    var p1R = { x: pA.px - nx * radius, y: pA.py - ny * radius };
    var p2L = { x: pB.px + nx * radius, y: pB.py + ny * radius };
    var p2R = { x: pB.px - nx * radius, y: pB.py - ny * radius };

    ctx.save();

    // Stem Body Linear Gradient
    var grd = ctx.createLinearGradient(p1L.x, p1L.y, p1R.x, p1R.y);
    grd.addColorStop(0.00, 'rgba(255,255,255,0.85)');
    grd.addColorStop(0.18, dark ? 'rgba(74,222,128,0.30)' : 'rgba(43,140,110,0.22)');
    grd.addColorStop(0.50, dark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.25)'); // Transparent middle
    grd.addColorStop(0.82, dark ? 'rgba(74,222,128,0.30)' : 'rgba(43,140,110,0.22)');
    grd.addColorStop(1.00, 'rgba(255,255,255,0.75)');

    ctx.beginPath();
    ctx.moveTo(p1L.x, p1L.y);
    ctx.lineTo(p2L.x, p2L.y);
    ctx.lineTo(p2R.x, p2R.y);
    ctx.lineTo(p1R.x, p1R.y);
    ctx.closePath();
    ctx.fillStyle = grd;
    ctx.fill();

    // Specular refraction line strokes
    ctx.beginPath();
    ctx.moveTo(p1L.x, p1L.y); ctx.lineTo(p2L.x, p2L.y);
    ctx.moveTo(p1R.x, p1R.y); ctx.lineTo(p2R.x, p2R.y);
    ctx.strokeStyle = dark ? 'rgba(200,255,230,0.70)' : 'rgba(255,255,255,0.88)';
    ctx.lineWidth = 1.3;
    ctx.stroke();

    // Flared Glass Collars (Joints)
    drawGlassCollar(pA.px, pA.py, nx, ny, radius * 1.55, dark);
    drawGlassCollar(pB.px, pB.py, nx, ny, radius * 1.55, dark);

    ctx.restore();
  }

  function drawGlassCollar(x, y, nx, ny, collarR, dark) {
    ctx.save();
    ctx.translate(x, y);
    var angle = Math.atan2(ny, nx);
    ctx.rotate(angle);

    ctx.beginPath();
    ctx.ellipse(0, 0, collarR, collarR * 0.42, 0, 0, Math.PI * 2);
    ctx.fillStyle = dark ? 'rgba(74,222,128,0.35)' : 'rgba(43,140,110,0.25)';
    ctx.fill();

    ctx.strokeStyle = dark ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.92)';
    ctx.lineWidth = 1.4;
    ctx.stroke();

    // Collar Specular glint
    ctx.beginPath();
    ctx.ellipse(-collarR * 0.35, -collarR * 0.12, collarR * 0.35, collarR * 0.15, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.fill();

    ctx.restore();
  }

  /**
   * Draws a Translucent Emerald Satellite Sphere with 3D Orbiting Quantum Electron
   */
  function drawEmeraldSphere(pos, node, dark, time) {
    var x = pos.px;
    var y = pos.py;
    var r = node.r * pos.scale;

    ctx.save();
    ctx.translate(x, y);

    // 1. Soft emerald cast aura
    var shdGrd = ctx.createRadialGradient(0, r * 0.7, r * 0.3, 0, r * 0.7, r * 1.45);
    shdGrd.addColorStop(0, dark ? 'rgba(74,222,128,0.25)' : 'rgba(43,140,110,0.18)');
    shdGrd.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.beginPath();
    ctx.arc(0, r * 0.7, r * 1.45, 0, Math.PI * 2);
    ctx.fillStyle = shdGrd;
    ctx.fill();

    // 2. Base Translucent Emerald Sphere Body
    var bodyGrd = ctx.createRadialGradient(-r * 0.28, -r * 0.30, r * 0.08, 0, 0, r);
    bodyGrd.addColorStop(0.00, '#ffffff');
    bodyGrd.addColorStop(0.18, dark ? '#6fcfaa' : '#4ade80');
    bodyGrd.addColorStop(0.55, dark ? '#103828' : '#15803d');
    bodyGrd.addColorStop(0.92, dark ? '#04170f' : '#052e16');
    bodyGrd.addColorStop(1.00, dark ? '#0c3822' : '#14532d');
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fillStyle = bodyGrd;
    ctx.fill();

    // 3. Internal Caustic Refraction Glow
    var causticGrd = ctx.createRadialGradient(r * 0.22, r * 0.25, 2, r * 0.22, r * 0.25, r * 0.55);
    causticGrd.addColorStop(0, dark ? 'rgba(110,231,183,0.55)' : 'rgba(74,222,128,0.60)');
    causticGrd.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.beginPath();
    ctx.arc(r * 0.22, r * 0.25, r * 0.55, 0, Math.PI * 2);
    ctx.fillStyle = causticGrd;
    ctx.fill();

    // 4. Primary Specular Softbox Highlight (Curved Crescent)
    ctx.beginPath();
    ctx.ellipse(-r * 0.38, -r * 0.38, r * 0.34, r * 0.18, -0.65, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.88)';
    ctx.fill();

    // Secondary tiny pin-point glint
    ctx.beginPath();
    ctx.arc(-r * 0.20, -r * 0.52, r * 0.08, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.92)';
    ctx.fill();

    // 5. Crisp glass rim outline
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.strokeStyle = dark ? 'rgba(167,243,208,0.40)' : 'rgba(255,255,255,0.70)';
    ctx.lineWidth = 1.4;
    ctx.stroke();

    // 6. Active Orbiting Quantum Electron Bead
    node.electronAng += node.electronSpd;
    var elR = r * 1.35;
    var elX = Math.cos(node.electronAng) * elR;
    var elY = Math.sin(node.electronAng) * (elR * 0.45);

    // Orbit ellipse ring (subtle dashed)
    ctx.beginPath();
    ctx.ellipse(0, 0, elR, elR * 0.45, 0.3, 0, Math.PI * 2);
    ctx.strokeStyle = dark ? 'rgba(74,222,128,0.20)' : 'rgba(43,140,110,0.16)';
    ctx.setLineDash([3, 7]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Glowing Electron Dot
    ctx.beginPath();
    ctx.arc(elX, elY, 3.2, 0, Math.PI * 2);
    ctx.fillStyle = dark ? '#a7f3d0' : '#16a34a';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(elX, elY, 1.4, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    ctx.restore();
  }

  // -------------------------------------------------------------
  // 9. Main Animation Loop with Tab Visibility Pause/Resume
  // -------------------------------------------------------------
  var time = 0;
  var animId = null;
  var isTabHidden = false;

  // Issue 02: Pause only when tab is truly hidden to save CPU/battery
  document.addEventListener('visibilitychange', function () {
    if (document.hidden || document.visibilityState === 'hidden') {
      isTabHidden = true;
      if (animId !== null) {
        cancelAnimationFrame(animId);
        animId = null;
      }
    } else {
      isTabHidden = false;
      if (animId === null) {
        animId = requestAnimationFrame(render);
      }
    }
  });

  function render() {
    if (isTabHidden) return;

    ctx.clearRect(0, 0, W, H);

    // Continuous dynamic motion & time progression
    time += 0.018;
    var dark = isDark();

    // Smooth mouse inertia lerping
    mouse.normX += (mouse.targetNormX - mouse.normX) * 0.07;
    mouse.normY += (mouse.targetNormY - mouse.normY) * 0.07;

    // Liquid slosh spring physics
    var sloshTarget = mouse.normX * 14;
    var sloshForce = (sloshTarget - mouse.sloshPos) * 0.06;
    mouse.sloshVel += sloshForce;
    mouse.sloshVel *= 0.88;
    mouse.sloshPos += mouse.sloshVel;

    // Decay pulse
    mouse.pulseEnergy *= 0.95;

    // Zero-gravity harmonic levitation bob
    var levitateY = Math.sin(time * 1.4) * 8;
    var levitateX = Math.cos(time * 1.0) * 4;

    var molCX = CX + mouse.normX * 12 + levitateX;
    var molCY = CY + mouse.normY * 12 + levitateY;

    // Continuous smooth 3D Tumbling Angles
    var rotY = Math.sin(time * 0.5) * 0.18 + mouse.normX * 0.28;
    var rotX = Math.cos(time * 0.4) * 0.14 - mouse.normY * 0.24;
    var rotZ = Math.sin(time * 0.3) * 0.08;

    // -----------------------------------------------------------
    // A. Ambient Spores & Bokeh Molecular Network (Floating in Open Space)
    // -----------------------------------------------------------
    // 1. Spores
    spores.forEach(function (sp) {
      sp.ang += sp.spd;
      var sx = CX + Math.cos(sp.ang) * sp.dist;
      var sy = CY + Math.sin(sp.ang) * (sp.dist * 0.8) + Math.sin(time * sp.bobSpd + sp.phase) * 8;

      ctx.beginPath();
      ctx.arc(sx, sy, sp.size, 0, Math.PI * 2);
      ctx.fillStyle = dark
        ? 'rgba(110,231,183,' + sp.alpha + ')'
        : 'rgba(34,197,94,' + sp.alpha + ')';
      ctx.fill();
    });

    // 2. Bokeh Molecules with subtle connective threads
    for (var bi = 0; bi < bokehMolecules.length; bi++) {
      var bm = bokehMolecules[bi];
      var bX = CX + bm.x + mouse.normX * 6 + Math.sin(time * bm.spd * 60 + bm.phase) * 6;
      var bY = CY + bm.y + mouse.normY * 6 + Math.cos(time * bm.spd * 45 + bm.phase) * 6;

      // Connective thread to next bokeh node
      var nextBm = bokehMolecules[(bi + 1) % bokehMolecules.length];
      var nbX = CX + nextBm.x + mouse.normX * 6;
      var nbY = CY + nextBm.y + mouse.normY * 6;

      ctx.beginPath();
      ctx.moveTo(bX, bY);
      ctx.lineTo(nbX, nbY);
      ctx.strokeStyle = dark ? 'rgba(74,222,128,0.08)' : 'rgba(43,140,110,0.06)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Bokeh sphere
      ctx.save();
      var bGrd = ctx.createRadialGradient(bX - bm.r * 0.25, bY - bm.r * 0.25, bm.r * 0.1, bX, bY, bm.r);
      bGrd.addColorStop(0, dark ? 'rgba(110,231,183,' + bm.alpha + ')' : 'rgba(74,222,128,' + (bm.alpha * 1.1) + ')');
      bGrd.addColorStop(0.7, dark ? 'rgba(16,75,48,' + bm.alpha + ')' : 'rgba(21,128,61,' + bm.alpha + ')');
      bGrd.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.arc(bX, bY, bm.r, 0, Math.PI * 2);
      ctx.fillStyle = bGrd;
      ctx.fill();
      ctx.restore();
    }

    // -----------------------------------------------------------
    // B. Project 3D Nodes (Painter's Algorithm Depth Sorting)
    // -----------------------------------------------------------
    var projectedNodes = baseNodes.map(function (nd) {
      var proj = project3D(nd.x, nd.y, nd.z, rotX, rotY, rotZ, molCX, molCY);
      return {
        node: nd,
        px: proj.px,
        py: proj.py,
        pz: proj.pz,
        scale: proj.scale
      };
    });

    // -----------------------------------------------------------
    // C. Draw Connecting Transparent Glass Stems (Bonds)
    // -----------------------------------------------------------
    bonds.forEach(function (bond) {
      var pA = projectedNodes[bond.from];
      var pB = projectedNodes[bond.to];
      drawGlassStem(pA, pB, bond.radius * ((pA.scale + pB.scale) / 2), dark);
    });

    // -----------------------------------------------------------
    // D. Active Bio-Photon Streams Racing Along Glass Stems
    // -----------------------------------------------------------
    photons.forEach(function (ph) {
      ph.t += ph.spd;
      if (ph.t > 1.0) ph.t -= 1.0;

      var bond = bonds[ph.bondIdx];
      var pA = projectedNodes[bond.from];
      var pB = projectedNodes[bond.to];

      var px = pA.px + (pB.px - pA.px) * ph.t;
      var py = pA.py + (pB.py - pA.py) * ph.t;

      // Glow Halo
      var phGrd = ctx.createRadialGradient(px, py, 0, px, py, ph.size * 3.5);
      phGrd.addColorStop(0, dark ? 'rgba(167,243,208,0.95)' : 'rgba(34,197,94,0.90)');
      phGrd.addColorStop(0.4, dark ? 'rgba(74,222,128,0.60)' : 'rgba(21,128,61,0.50)');
      phGrd.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.arc(px, py, ph.size * 3.5, 0, Math.PI * 2);
      ctx.fillStyle = phGrd;
      ctx.fill();

      // White Hot Center
      ctx.beginPath();
      ctx.arc(px, py, ph.size * 0.9, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    });

    // -----------------------------------------------------------
    // E. Draw Nodes Sorted by Depth (Back-to-Front)
    // -----------------------------------------------------------
    var sorted = projectedNodes.slice().sort(function (a, b) {
      return a.pz - b.pz;
    });

    sorted.forEach(function (item) {
      if (!item.node.isGlobe) {
        drawEmeraldSphere(item, item.node, dark, time);
      } else {
        // Draw Central Transparent Globe with Mountain & Fluid Biosphere
        drawBiosphereGlobe(item, dark, time);
      }
    });

    // -----------------------------------------------------------
    // F. Interactive Click Shockwaves & Sparks (In Open Space)
    // -----------------------------------------------------------
    for (var sw = shockwaves.length - 1; sw >= 0; sw--) {
      var wave = shockwaves[sw];
      wave.radius += wave.speed;
      wave.opacity -= 0.024;

      if (wave.opacity <= 0 || wave.radius >= wave.maxRadius) {
        shockwaves.splice(sw, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
      ctx.strokeStyle = dark
        ? 'rgba(110,231,183,' + wave.opacity + ')'
        : 'rgba(34,197,94,' + wave.opacity + ')';
      ctx.lineWidth = 2.5 * wave.opacity;
      ctx.stroke();
    }

    for (var spIdx = burstSparks.length - 1; spIdx >= 0; spIdx--) {
      var spark = burstSparks[spIdx];
      spark.x += spark.vx;
      spark.y += spark.vy;
      spark.vx *= 0.93;
      spark.vy *= 0.93;
      spark.alpha -= spark.decay;

      if (spark.alpha <= 0) {
        burstSparks.splice(spIdx, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
      ctx.fillStyle = dark
        ? 'rgba(255,255,255,' + spark.alpha + ')'
        : 'rgba(22,163,74,' + spark.alpha + ')';
      ctx.fill();
    }

    if (!isTabHidden) {
      animId = requestAnimationFrame(render);
    } else {
      animId = null;
    }
  }

  /**
   * Draws the Central Biosphere Globe:
   * Dynamic Undulating Mountain & Fluid Landscape inside transparent glass
   */
  function drawBiosphereGlobe(pos, dark, time) {
    var R0 = pos.node.r * pos.scale;

    ctx.save();
    ctx.translate(pos.px, pos.py);

    // 1. Ambient soft emerald glow beneath central globe
    var ambientGlow = ctx.createRadialGradient(0, R0 * 0.5, R0 * 0.2, 0, R0 * 0.5, R0 * 1.6);
    ambientGlow.addColorStop(0, dark ? 'rgba(74,222,128,0.24)' : 'rgba(43,140,110,0.18)');
    ambientGlow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.beginPath();
    ctx.arc(0, R0 * 0.5, R0 * 1.6, 0, Math.PI * 2);
    ctx.fillStyle = ambientGlow;
    ctx.fill();

    // 2. Interior Clipping Region (Inside the Hollow Glass Ball)
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, R0 - 2, 0, Math.PI * 2);
    ctx.clip();

    // 2a. Upper Atmosphere of Sphere (Clean transparency)
    var airGrd = ctx.createRadialGradient(0, -R0 * 0.3, 5, 0, 0, R0);
    airGrd.addColorStop(0, dark ? 'rgba(20,50,35,0.25)' : 'rgba(255,255,255,0.45)');
    airGrd.addColorStop(1, dark ? 'rgba(6,22,15,0.45)' : 'rgba(240,253,244,0.30)');
    ctx.fillStyle = airGrd;
    ctx.fill();

    // 2b. Sculpted Emerald Mountain Landscape (Layer 1 - Background Peaks)
    var bgMountainY = R0 * 0.08 + mouse.normY * 4;
    ctx.beginPath();
    ctx.moveTo(-R0, R0);
    ctx.lineTo(-R0, bgMountainY + 10);
    ctx.lineTo(-R0 * 0.55, bgMountainY - 14 + Math.sin(time * 1.8) * 2);
    ctx.lineTo(-R0 * 0.25, bgMountainY + 4);
    ctx.lineTo( R0 * 0.15, bgMountainY - 26 + Math.cos(time * 2.0) * 3); // Tall Central Mountain Peak!
    ctx.lineTo( R0 * 0.50, bgMountainY - 8);
    ctx.lineTo( R0,        bgMountainY + 8);
    ctx.lineTo( R0,        R0);
    ctx.closePath();

    var bgMtnGrd = ctx.createLinearGradient(0, bgMountainY - 26, 0, R0);
    bgMtnGrd.addColorStop(0, dark ? '#1b5e39' : '#15803d');
    bgMtnGrd.addColorStop(0.5, dark ? '#0a2e1c' : '#14532d');
    bgMtnGrd.addColorStop(1, dark ? '#04170d' : '#052e16');
    ctx.fillStyle = bgMtnGrd;
    ctx.fill();

    // 2c. Layer 2 - Middle Wave Ridge & Mountain Slopes (Rich Emerald Waves)
    var midWaveY = R0 * 0.12 + Math.sin(time * 2.2) * 2 + mouse.normY * 5;
    ctx.beginPath();
    ctx.moveTo(-R0, R0);
    ctx.lineTo(-R0, midWaveY + 4);

    var steps = 40;
    for (var s = 0; s <= steps; s++) {
      var sx = -R0 + (s / steps) * (R0 * 2);
      var sNorm = (s / steps) - 0.5;
      var peak1 = Math.exp(-Math.pow((sNorm + 0.22) * 4.5, 2)) * -22;
      var peak2 = Math.exp(-Math.pow((sNorm - 0.18) * 3.8, 2)) * -32;
      var fluidRipple = Math.sin(sNorm * 10 + time * 3.5) * 3.5;
      var slosh = sNorm * mouse.sloshPos * 1.5;
      var sy = midWaveY + peak1 + peak2 + fluidRipple + slosh;
      ctx.lineTo(sx, sy);
    }
    ctx.lineTo(R0, R0);
    ctx.closePath();

    var midGrd = ctx.createLinearGradient(0, midWaveY - 32, 0, R0);
    midGrd.addColorStop(0.0, dark ? '#4ade80' : '#86efac');
    midGrd.addColorStop(0.2, dark ? '#166534' : '#22c55e');
    midGrd.addColorStop(0.7, dark ? '#0b3820' : '#15803d');
    midGrd.addColorStop(1.0, dark ? '#03140a' : '#052e16');
    ctx.fillStyle = midGrd;
    ctx.fill();

    // Topographical ridge highlight strokes
    ctx.beginPath();
    for (var rs = 0; rs <= steps; rs++) {
      var rx = -R0 + (rs / steps) * (R0 * 2);
      var rNorm = (rs / steps) - 0.5;
      var rPeak1 = Math.exp(-Math.pow((rNorm + 0.22) * 4.5, 2)) * -22;
      var rPeak2 = Math.exp(-Math.pow((rNorm - 0.18) * 3.8, 2)) * -32;
      var rRipple = Math.sin(rNorm * 10 + time * 3.5) * 3.5;
      var rSlosh = rNorm * mouse.sloshPos * 1.5;
      var ry = midWaveY + rPeak1 + rPeak2 + rRipple + rSlosh;
      if (rs === 0) ctx.moveTo(rx, ry);
      else ctx.lineTo(rx, ry);
    }
    ctx.strokeStyle = dark ? 'rgba(255,255,255,0.78)' : 'rgba(255,255,255,0.88)';
    ctx.lineWidth = 1.8;
    ctx.stroke();

    // 2d. Layer 3 - Foreground Rolling Water Meniscus
    var fgWaveY = R0 * 0.26 + Math.sin(time * 2.8) * 3;
    ctx.beginPath();
    ctx.moveTo(-R0, R0);
    ctx.lineTo(-R0, fgWaveY);
    for (var fs = 0; fs <= steps; fs++) {
      var fx = -R0 + (fs / steps) * (R0 * 2);
      var fNorm = (fs / steps) - 0.5;
      var fWave = Math.sin(fNorm * 7 - time * 3.0) * 5 + Math.cos(fNorm * 14 + time * 2.0) * 2;
      var fSlosh = fNorm * mouse.sloshPos * 1.8;
      var fy = fgWaveY + fWave + fSlosh;
      ctx.lineTo(fx, fy);
    }
    ctx.lineTo(R0, R0);
    ctx.closePath();

    var fgGrd = ctx.createLinearGradient(0, fgWaveY, 0, R0);
    fgGrd.addColorStop(0, dark ? 'rgba(34,197,94,0.68)' : 'rgba(74,222,128,0.58)');
    fgGrd.addColorStop(0.6, dark ? 'rgba(10,46,28,0.85)' : 'rgba(21,128,61,0.75)');
    fgGrd.addColorStop(1, dark ? 'rgba(2,16,8,0.95)' : 'rgba(5,46,22,0.90)');
    ctx.fillStyle = fgGrd;
    ctx.fill();

    // Glowing meniscus line on foreground water
    ctx.beginPath();
    for (var ms = 0; ms <= steps; ms++) {
      var mx = -R0 + (ms / steps) * (R0 * 2);
      var mNorm = (ms / steps) - 0.5;
      var mWave = Math.sin(mNorm * 7 - time * 3.0) * 5 + Math.cos(mNorm * 14 + time * 2.0) * 2;
      var mSlosh = mNorm * mouse.sloshPos * 1.8;
      var my = fgWaveY + mWave + mSlosh;
      if (ms === 0) ctx.moveTo(mx, my);
      else ctx.lineTo(mx, my);
    }
    ctx.strokeStyle = dark ? 'rgba(255,255,255,0.90)' : 'rgba(255,255,255,0.94)';
    ctx.lineWidth = 1.4;
    ctx.stroke();

    // 2e. Active Buoyant Micro-Droplets / Bubbles rising inside the sphere
    bubbles.forEach(function (dp) {
      dp.y -= dp.spd;
      dp.phase += 0.04;
      var dx = dp.x + Math.sin(dp.phase * dp.wobbleSpd) * dp.wobbleAmp;
      var dy = dp.y;

      // Reset when reaching top
      if (dy < -R0 * 0.75 || dy > R0 * 0.85) {
        dp.y = R0 * 0.15 + Math.random() * 20;
        dp.x = (Math.random() - 0.5) * (R0 * 1.1);
      }

      ctx.beginPath();
      ctx.arc(dx, dy, dp.r, 0, Math.PI * 2);
      ctx.fillStyle = dark ? 'rgba(167,243,208,0.88)' : 'rgba(34,197,94,0.88)';
      ctx.fill();

      // Bubble highlight glint
      ctx.beginPath();
      ctx.arc(dx - dp.r * 0.35, dy - dp.r * 0.35, dp.r * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    });

    ctx.restore(); // End clipping region

    // 3. Clear Glass Sphere Highlights
    // 3a. Primary Top-Right Curved Specular Softbox Highlight
    ctx.beginPath();
    ctx.ellipse(R0 * 0.35, -R0 * 0.38, R0 * 0.38, R0 * 0.16, 0.45, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.fill();

    // 3b. Secondary Left Rim Specular Highlight
    ctx.beginPath();
    ctx.ellipse(-R0 * 0.48, -R0 * 0.15, R0 * 0.28, R0 * 0.10, -1.2, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.68)';
    ctx.fill();

    // 3c. Bottom Bounce Refraction Highlight
    ctx.beginPath();
    ctx.ellipse(0, R0 * 0.55, R0 * 0.45, R0 * 0.08, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.38)';
    ctx.fill();

    // 3d. Dynamic Periodic Caustic Sheen Sweep across the glass
    var sheenT = (time * 0.35) % 3.0; // Sweeps once every ~3 seconds
    if (sheenT < 1.0) {
      var sheenX = -R0 * 1.2 + sheenT * (R0 * 2.4);
      var sheenGrd = ctx.createLinearGradient(sheenX - 25, -R0, sheenX + 25, R0);
      sheenGrd.addColorStop(0, 'rgba(255,255,255,0)');
      sheenGrd.addColorStop(0.5, 'rgba(255,255,255,0.22)');
      sheenGrd.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.beginPath();
      ctx.arc(0, 0, R0, 0, Math.PI * 2);
      ctx.fillStyle = sheenGrd;
      ctx.fill();
    }

    // 3e. Outer Crystal Glass Rim Stroke
    ctx.beginPath();
    ctx.arc(0, 0, R0, 0, Math.PI * 2);
    ctx.strokeStyle = dark ? 'rgba(255,255,255,0.80)' : 'rgba(255,255,255,0.94)';
    ctx.lineWidth = 2.4;
    ctx.stroke();

    ctx.restore();
  }

  // Kickstart loop
  if (!isTabHidden) {
    animId = requestAnimationFrame(render);
  }

})();
