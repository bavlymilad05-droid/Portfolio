/**
 * ============================================================================
 * BAVLY MILAD NAEEM — INTERACTIVE PROJECT DEMOS
 * 1. 555 Timer IC Reaction Time Race Game
 * 2. Universal Combinational Logic Circuit Simulator
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initReactionGame();
  initLogicSimulator();
});

/* ----------------------------------------------------------------------------
 * 1. 555 TIMER IC REACTION TIME RACE GAME
 * ---------------------------------------------------------------------------- */
function initReactionGame() {
  const triggerBtn = document.getElementById('reactionTrigger');
  const triggerText = document.getElementById('reactionText');
  const triggerSub = document.getElementById('reactionSub');
  const timeDisplay = document.getElementById('reactionTimeVal');
  const rankDisplay = document.getElementById('reactionRankVal');
  const bestDisplay = document.getElementById('reactionBestVal');

  if (!triggerBtn) return;

  let gameState = 'idle'; // 'idle', 'waiting', 'active', 'ended'
  let timerTimeout = null;
  let startTime = 0;
  let bestScore = localStorage.getItem('bavly_reaction_best') || null;

  if (bestScore && bestDisplay) {
    bestDisplay.textContent = `${bestScore} ms`;
  }

  function getLang() {
    return document.documentElement.lang || 'en';
  }

  function updateTexts() {
    const isAr = getLang() === 'ar';
    if (gameState === 'idle') {
      triggerText.textContent = isAr ? 'اضغط للبدء' : 'Click to Start';
      triggerSub.textContent = isAr ? 'محاكاة مؤقت 555 IC لسرعة رد الفعل' : '555 Timer IC Fastest Finger First';
    } else if (gameState === 'waiting') {
      triggerText.textContent = isAr ? 'انتظر وميض النيون...' : 'Wait for Neon Flash...';
      triggerSub.textContent = isAr ? 'جاري شحن المكثف التناظري ⏱️' : 'Capacitor is charging ⏱️';
    } else if (gameState === 'active') {
      triggerText.textContent = isAr ? 'اضغط الآن!!' : 'CLICK NOW!!';
      triggerSub.textContent = isAr ? 'تم تفريغ النبضة!' : 'Pulse Discharged!';
    }
  }

  // Expose language refresh hook
  window.refreshReactionTexts = updateTexts;

  triggerBtn.addEventListener('click', () => {
    const isAr = getLang() === 'ar';

    if (gameState === 'idle' || gameState === 'ended') {
      // Start waiting phase
      gameState = 'waiting';
      triggerBtn.className = 'reaction-btn-trigger state-ready';
      updateTexts();

      // Random delay between 1.5s and 4.0s simulating RC charge time
      const delay = Math.floor(Math.random() * 2500) + 1500;
      timerTimeout = setTimeout(() => {
        if (gameState === 'waiting') {
          gameState = 'active';
          triggerBtn.className = 'reaction-btn-trigger state-active';
          updateTexts();
          startTime = performance.now();
        }
      }, delay);

    } else if (gameState === 'waiting') {
      // False start / clicked too early
      clearTimeout(timerTimeout);
      gameState = 'ended';
      triggerBtn.className = 'reaction-btn-trigger state-early';
      triggerText.textContent = isAr ? 'تسرعت جداً! بداية خاطئة' : 'Too Early! False Start';
      triggerSub.textContent = isAr ? 'اضغط لإعادة المحاولة (انتظر الوميض)' : 'Click to retry (wait for flash)';
      if (rankDisplay) rankDisplay.textContent = isAr ? 'خطأ توقيت' : 'Early Penalty';
      if (timeDisplay) timeDisplay.textContent = '-- ms';

    } else if (gameState === 'active') {
      // Valid hit!
      const reactionTime = Math.round(performance.now() - startTime);
      gameState = 'ended';
      triggerBtn.className = 'reaction-btn-trigger';
      
      if (timeDisplay) timeDisplay.textContent = `${reactionTime} ms`;
      triggerText.textContent = `${reactionTime} ms!`;
      triggerSub.textContent = isAr ? 'اضغط لإجراء محاولة جديدة' : 'Click to test again';

      // Evaluate Rank
      let rankText = '';
      if (reactionTime < 185) {
        rankText = isAr ? '⚡ سرعة نيون خارقة' : '⚡ Lightning Reflexes';
      } else if (reactionTime < 240) {
        rankText = isAr ? '🚀 سرعة المؤقت 555' : '🚀 555 Timer Speed';
      } else if (reactionTime < 320) {
        rankText = isAr ? '🎯 استجابة ممتازة' : '🎯 Sharp Reaction';
      } else {
        rankText = isAr ? '💡 سرعة بشرية عادية' : '💡 Human Normal';
      }
      if (rankDisplay) rankDisplay.textContent = rankText;

      // Update Best Score
      if (!bestScore || reactionTime < parseInt(bestScore)) {
        bestScore = reactionTime;
        localStorage.setItem('bavly_reaction_best', bestScore);
        if (bestDisplay) bestDisplay.textContent = `${bestScore} ms`;
      }
    }
  });
}

/* ----------------------------------------------------------------------------
 * 2. UNIVERSAL COMBINATIONAL LOGIC SIMULATOR
 * ---------------------------------------------------------------------------- */
function initLogicSimulator() {
  const btnA = document.getElementById('inputA');
  const btnB = document.getElementById('inputB');
  const btnCin = document.getElementById('inputCin');
  const btnSel = document.getElementById('inputSel');

  if (!btnA || !btnB || !btnCin || !btnSel) return;

  const outSum = document.getElementById('outSum');
  const outCarry = document.getElementById('outCarry');
  const outDiff = document.getElementById('outDiff');
  const outBorrow = document.getElementById('outBorrow');
  const outMux = document.getElementById('outMux');
  const outD0 = document.getElementById('outD0');
  const outD1 = document.getElementById('outD1');
  const outD2 = document.getElementById('outD2');
  const outD3 = document.getElementById('outD3');

  function toggleInput(btn) {
    const current = btn.getAttribute('data-value') === '1' ? 1 : 0;
    const next = current === 1 ? 0 : 1;
    btn.setAttribute('data-value', next);
    btn.textContent = next;
    if (next === 1) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
    computeOutputs();
  }

  [btnA, btnB, btnCin, btnSel].forEach(btn => {
    btn.addEventListener('click', () => toggleInput(btn));
  });

  function setOutput(el, val) {
    if (!el) return;
    el.textContent = val;
    if (val === 1) {
      el.classList.add('high');
    } else {
      el.classList.remove('high');
    }
  }

  function computeOutputs() {
    const A = parseInt(btnA.getAttribute('data-value') || '0', 10);
    const B = parseInt(btnB.getAttribute('data-value') || '0', 10);
    const Cin = parseInt(btnCin.getAttribute('data-value') || '0', 10);
    const Sel = parseInt(btnSel.getAttribute('data-value') || '0', 10);

    // 1. Full Adder
    // Sum = A ^ B ^ Cin
    const sum = A ^ B ^ Cin;
    // Cout = (A & B) | (Cin & (A ^ B))
    const cout = (A & B) | (Cin & (A ^ B));
    setOutput(outSum, sum);
    setOutput(outCarry, cout);

    // 2. Full Subtractor
    // Diff = A ^ B ^ Bin
    const diff = A ^ B ^ Cin;
    // Bout = (~A & B) | (~A & Bin) | (B & Bin)
    const notA = A ? 0 : 1;
    const bout = (notA & B) | (notA & Cin) | (B & Cin);
    setOutput(outDiff, diff);
    setOutput(outBorrow, bout);

    // 3. 2-to-1 Multiplexer (Sel=0 selects A, Sel=1 selects B)
    const muxY = Sel === 0 ? A : B;
    setOutput(outMux, muxY);

    // 4. 2-to-4 Decoder using A (MSB) and B (LSB)
    setOutput(outD0, (!A && !B) ? 1 : 0);
    setOutput(outD1, (!A && B) ? 1 : 0);
    setOutput(outD2, (A && !B) ? 1 : 0);
    setOutput(outD3, (A && B) ? 1 : 0);
  }

  // Initial calculation
  computeOutputs();
}
