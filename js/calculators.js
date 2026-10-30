/**
 * MOLEVYRIS — Interactive Chemistry Laboratory Calculators (v3.0 Production)
 * 
 * Fixes Issue 2 (Four Calculators Input Validation):
 * - Rigorous validation via Number.isFinite()
 * - Real-time input boundary checking & visual error states
 * - Keyboard 'Enter' key support across all inputs
 * - Physical boundary constraints:
 *   1. Dilution: M1, V1 >= 0; V2 > 0. Detects V2 < V1 concentration anomaly.
 *   2. Beer-Lambert: A >= 0; epsilon, l > 0. Warns when A > 2.0 (spectrophotometric detector saturation).
 *   3. TLC Rf: d_solute >= 0; d_front > 0. Strictly enforces d_solute <= d_front (Rf <= 1.000).
 *   4. Chemical % Yield: Actual >= 0; Theor > 0. Flags yield > 100% with purity/moisture caution.
 */

(function () {
  'use strict';

  /**
   * Validates a numeric string input
   * @param {string} rawVal - Value from input element
   * @param {boolean} allowZero - Whether 0 is physically permitted
   * @returns {{ valid: boolean, val: number }}
   */
  function parseNumeric(rawVal, allowZero) {
    if (rawVal === null || rawVal === undefined) return { valid: false, val: 0 };
    var trimmed = String(rawVal).trim();
    if (trimmed === '') return { valid: false, val: 0 };
    var num = Number(trimmed);
    if (!Number.isFinite(num)) return { valid: false, val: 0 };
    if (allowZero ? num < 0 : num <= 0) return { valid: false, val: 0 };
    return { valid: true, val: num };
  }

  function setInputState(el, isValid) {
    if (!el) return;
    if (!isValid) {
      el.style.borderColor = '#ef4444';
      el.style.backgroundColor = 'rgba(239, 68, 68, 0.06)';
      el.setAttribute('aria-invalid', 'true');
    } else {
      el.style.borderColor = '';
      el.style.backgroundColor = '';
      el.removeAttribute('aria-invalid');
    }
  }

  function attachEnterTrigger(inputIds, calcFn) {
    inputIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) {
        el.addEventListener('keydown', function (e) {
          if (e.key === 'Enter') {
            e.preventDefault();
            calcFn();
          }
        });
        el.addEventListener('input', function () {
          setInputState(el, true); // Reset visual error state on typing
        });
      }
    });
  }

  // -------------------------------------------------------------
  // Tool 1: Dilution Calculator (M1 * V1 = M2 * V2)
  // -------------------------------------------------------------
  var btnCalcDilution = document.getElementById('btnCalcDilution');
  function calcDilution() {
    var res = document.getElementById('resDilution');
    var elM1 = document.getElementById('m1');
    var elV1 = document.getElementById('v1');
    var elV2 = document.getElementById('v2');
    if (!res || !elM1 || !elV1 || !elV2) return;

    var m1Input = parseNumeric(elM1.value, true);
    var v1Input = parseNumeric(elV1.value, true);
    var v2Input = parseNumeric(elV2.value, false);

    setInputState(elM1, m1Input.valid);
    setInputState(elV1, v1Input.valid);
    setInputState(elV2, v2Input.valid);

    if (!m1Input.valid || !v1Input.valid) {
      res.innerText = 'Error: Stock M₁ and V₁ must be ≥ 0';
      res.style.color = '#ef4444';
      return;
    }
    if (!v2Input.valid) {
      res.innerText = 'Error: Final volume V₂ must be > 0';
      res.style.color = '#ef4444';
      return;
    }

    var m2 = (m1Input.val * v1Input.val) / v2Input.val;
    res.style.color = '';

    if (v2Input.val < v1Input.val) {
      res.innerText = 'Notice: V₂ < V₁ (Concentration: M₂ = ' + m2.toFixed(4) + ' M)';
      return;
    }

    if (m2 > 0 && m2 < 0.0001) {
      res.innerText = 'Final M₂ = ' + m2.toExponential(3) + ' M';
    } else {
      res.innerText = 'Final M₂ = ' + m2.toFixed(4) + ' M';
    }
  }

  if (btnCalcDilution) {
    btnCalcDilution.addEventListener('click', calcDilution);
    attachEnterTrigger(['m1', 'v1', 'v2'], calcDilution);
  }

  // -------------------------------------------------------------
  // Tool 2: Beer-Lambert Law (A = epsilon * c * l)
  // -------------------------------------------------------------
  var btnCalcBeer = document.getElementById('btnCalcBeer');
  function calcBeer() {
    var res = document.getElementById('resBeer');
    var elA = document.getElementById('blA');
    var elE = document.getElementById('blE');
    var elL = document.getElementById('blL');
    if (!res || !elA || !elE || !elL) return;

    var aInput = parseNumeric(elA.value, true);
    var eInput = parseNumeric(elE.value, false);
    var lInput = parseNumeric(elL.value, false);

    setInputState(elA, aInput.valid);
    setInputState(elE, eInput.valid);
    setInputState(elL, lInput.valid);

    if (!aInput.valid) {
      res.innerText = 'Error: Absorbance (A) must be ≥ 0';
      res.style.color = '#ef4444';
      return;
    }
    if (!eInput.valid || !lInput.valid) {
      res.innerText = 'Error: ε and l must be strictly > 0';
      res.style.color = '#ef4444';
      return;
    }

    var c = aInput.val / (eInput.val * lInput.val);
    res.style.color = '';

    if (aInput.val > 2.0) {
      res.innerText = 'c = ' + c.toExponential(3) + ' M (Notice: A > 2.0 exceeds detector linear range)';
    } else {
      res.innerText = 'c = ' + c.toExponential(3) + ' M';
    }
  }

  if (btnCalcBeer) {
    btnCalcBeer.addEventListener('click', calcBeer);
    attachEnterTrigger(['blA', 'blE', 'blL'], calcBeer);
  }

  // -------------------------------------------------------------
  // Tool 3: TLC Rf Calculator (Rf = d_solute / d_front)
  // -------------------------------------------------------------
  var btnCalcRf = document.getElementById('btnCalcRf');
  function calcRf() {
    var res = document.getElementById('resRf');
    var elS = document.getElementById('rfSolute');
    var elF = document.getElementById('rfFront');
    if (!res || !elS || !elF) return;

    var dSInput = parseNumeric(elS.value, true);
    var dFInput = parseNumeric(elF.value, false);

    setInputState(elS, dSInput.valid);
    setInputState(elF, dFInput.valid);

    if (!dSInput.valid) {
      res.innerText = 'Error: Solute distance must be ≥ 0';
      res.style.color = '#ef4444';
      return;
    }
    if (!dFInput.valid) {
      res.innerText = 'Error: Solvent front must be strictly > 0';
      res.style.color = '#ef4444';
      return;
    }
    if (dSInput.val > dFInput.val) {
      setInputState(elS, false);
      res.innerText = 'Error: Solute distance > Front (Rf must be ≤ 1.000)';
      res.style.color = '#ef4444';
      return;
    }

    var rf = dSInput.val / dFInput.val;
    res.style.color = '';
    res.innerText = 'Rf Value = ' + rf.toFixed(3);
  }

  if (btnCalcRf) {
    btnCalcRf.addEventListener('click', calcRf);
    attachEnterTrigger(['rfSolute', 'rfFront'], calcRf);
  }

  // -------------------------------------------------------------
  // Tool 4: Chemical % Yield Calculator ((Actual / Theor) * 100)
  // -------------------------------------------------------------
  var btnCalcYield = document.getElementById('btnCalcYield');
  function calcYield() {
    var res = document.getElementById('resYield');
    var elAct = document.getElementById('ydAct');
    var elTheor = document.getElementById('ydTheor');
    if (!res || !elAct || !elTheor) return;

    var actInput = parseNumeric(elAct.value, true);
    var theoInput = parseNumeric(elTheor.value, false);

    setInputState(elAct, actInput.valid);
    setInputState(elTheor, theoInput.valid);

    if (!actInput.valid) {
      res.innerText = 'Error: Actual yield must be ≥ 0';
      res.style.color = '#ef4444';
      return;
    }
    if (!theoInput.valid) {
      res.innerText = 'Error: Theoretical yield must be strictly > 0';
      res.style.color = '#ef4444';
      return;
    }

    var yd = (actInput.val / theoInput.val) * 100;
    res.style.color = '';

    if (yd > 100.0) {
      res.innerText = 'Yield = ' + yd.toFixed(2) + '% (Caution: Check residual solvent/moisture)';
    } else {
      res.innerText = 'Yield = ' + yd.toFixed(2) + '%';
    }
  }

  if (btnCalcYield) {
    btnCalcYield.addEventListener('click', calcYield);
    attachEnterTrigger(['ydAct', 'ydTheor'], calcYield);
  }
})();
