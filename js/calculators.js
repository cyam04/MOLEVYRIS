/**
 * MOLEVYRIS — Interactive Chemistry Laboratory Calculators (v2.0 Validated)
 * 
 * Fixes Issues 04 & 05 from Audit:
 * - Robust input validation with Number.isFinite()
 * - Rejection of invalid/negative inputs and empty strings without silent coercion
 * - TLC Rf validation ensuring solute distance <= solvent front distance
 * - Clear, accessible scientific error messages for all boundary cases
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

  // -------------------------------------------------------------
  // Tool 1: Dilution Calculator (M1 * V1 = M2 * V2)
  // -------------------------------------------------------------
  var btnCalcDilution = document.getElementById('btnCalcDilution');
  if (btnCalcDilution) {
    btnCalcDilution.addEventListener('click', function () {
      var res = document.getElementById('resDilution');
      if (!res) return;

      var m1Input = parseNumeric(document.getElementById('m1').value, true);
      var v1Input = parseNumeric(document.getElementById('v1').value, true);
      var v2Input = parseNumeric(document.getElementById('v2').value, false);

      if (!m1Input.valid || !v1Input.valid) {
        res.innerText = 'Error: M₁ and V₁ must be ≥ 0';
        res.style.color = '#ef4444';
        return;
      }
      if (!v2Input.valid) {
        res.innerText = 'Error: Final V₂ must be > 0';
        res.style.color = '#ef4444';
        return;
      }
      if (v2Input.val < v1Input.val) {
        res.innerText = 'Notice: V₂ < V₁ (Concentration, not dilution)';
      }

      var m2 = (m1Input.val * v1Input.val) / v2Input.val;
      res.style.color = '';
      if (m2 > 0 && m2 < 0.0001) {
        res.innerText = 'Final M₂ = ' + m2.toExponential(3) + ' M';
      } else {
        res.innerText = 'Final M₂ = ' + m2.toFixed(4) + ' M';
      }
    });
  }

  // -------------------------------------------------------------
  // Tool 2: Beer-Lambert Law (A = epsilon * c * l)
  // -------------------------------------------------------------
  var btnCalcBeer = document.getElementById('btnCalcBeer');
  if (btnCalcBeer) {
    btnCalcBeer.addEventListener('click', function () {
      var res = document.getElementById('resBeer');
      if (!res) return;

      var aInput = parseNumeric(document.getElementById('blA').value, true);
      var eInput = parseNumeric(document.getElementById('blE').value, false);
      var lInput = parseNumeric(document.getElementById('blL').value, false);

      if (!aInput.valid) {
        res.innerText = 'Error: Absorbance (A) must be ≥ 0';
        res.style.color = '#ef4444';
        return;
      }
      if (!eInput.valid || !lInput.valid) {
        res.innerText = 'Error: ε and l must be > 0';
        res.style.color = '#ef4444';
        return;
      }

      var c = aInput.val / (eInput.val * lInput.val);
      res.style.color = '';
      res.innerText = 'c = ' + c.toExponential(3) + ' M';
    });
  }

  // -------------------------------------------------------------
  // Tool 3: TLC Rf Calculator (Rf = d_solute / d_front)
  // -------------------------------------------------------------
  var btnCalcRf = document.getElementById('btnCalcRf');
  if (btnCalcRf) {
    btnCalcRf.addEventListener('click', function () {
      var res = document.getElementById('resRf');
      if (!res) return;

      var dSInput = parseNumeric(document.getElementById('rfSolute').value, true);
      var dFInput = parseNumeric(document.getElementById('rfFront').value, false);

      if (!dSInput.valid) {
        res.innerText = 'Error: Solute distance must be ≥ 0';
        res.style.color = '#ef4444';
        return;
      }
      if (!dFInput.valid) {
        res.innerText = 'Error: Solvent front must be > 0';
        res.style.color = '#ef4444';
        return;
      }
      if (dSInput.val > dFInput.val) {
        res.innerText = 'Error: Solute distance > Front (Rf ≤ 1.0)';
        res.style.color = '#ef4444';
        return;
      }

      var rf = dSInput.val / dFInput.val;
      res.style.color = '';
      res.innerText = 'Rf Value = ' + rf.toFixed(3);
    });
  }

  // -------------------------------------------------------------
  // Tool 4: Chemical % Yield Calculator ((Actual / Theor) * 100)
  // -------------------------------------------------------------
  var btnCalcYield = document.getElementById('btnCalcYield');
  if (btnCalcYield) {
    btnCalcYield.addEventListener('click', function () {
      var res = document.getElementById('resYield');
      if (!res) return;

      var actInput = parseNumeric(document.getElementById('ydAct').value, true);
      var theoInput = parseNumeric(document.getElementById('ydTheor').value, false);

      if (!actInput.valid) {
        res.innerText = 'Error: Actual yield must be ≥ 0';
        res.style.color = '#ef4444';
        return;
      }
      if (!theoInput.valid) {
        res.innerText = 'Error: Theoretical yield must be > 0';
        res.style.color = '#ef4444';
        return;
      }

      var yd = (actInput.val / theoInput.val) * 100;
      res.style.color = '';
      if (yd > 100.0) {
        res.innerText = 'Yield = ' + yd.toFixed(2) + '% (Check moisture/purity)';
      } else {
        res.innerText = 'Yield = ' + yd.toFixed(2) + '%';
      }
    });
  }
})();
