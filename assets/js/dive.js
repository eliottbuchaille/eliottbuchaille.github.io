/* Maison Isobathe — la descente.
   Le défilement pilote la couleur de l'eau, la lumière, le profondimètre,
   la neige marine, le retour de la couleur sur les rendus et le tracé du fil. */
(() => {
  const root = document.documentElement;
  const page = document.body;
  const bg = document.querySelector('.dive-bg');
  if (!bg) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MAX_DEPTH = 40; // mètres

  // couleur de l'eau selon la profondeur (0 = surface, 1 = fond)
  const stops = [
    [0.00, [214, 232, 239]],
    [0.10, [170, 199, 215]], // Brume
    [0.28, [108, 145, 172]], // Houle
    [0.50, [22, 76, 120]],
    [0.66, [0, 53, 98]],     // Abysse
    [0.86, [13, 28, 36]],    // Nuit
    [1.00, [5, 12, 17]]
  ];
  const mix = p => {
    for (let i = 1; i < stops.length; i++) {
      if (p <= stops[i][0]) {
        const [p0, c0] = stops[i - 1], [p1, c1] = stops[i];
        const t = (p - p0) / (p1 - p0);
        const s = t * t * (3 - 2 * t);
        return c0.map((v, k) => Math.round(v + (c1[k] - v) * s));
      }
    }
    return stops[stops.length - 1][1];
  };

  const gauge = document.querySelector('.gauge');
  const gVal = gauge && gauge.querySelector('b');
  const reveals = [...document.querySelectorAll('.reveal-color')];
  const fil = document.querySelector('svg.fil path');
  let filLen = 0;
  if (fil) { filLen = fil.getTotalLength(); fil.style.strokeDasharray = filLen; fil.style.strokeDashoffset = filLen; }

  /* ---------- neige marine & bulles ---------- */
  const cv = bg.querySelector('.dv-snow');
  const ctx = cv && cv.getContext('2d');
  let W = 0, H = 0, dpr = 1, parts = [];
  const resize = () => {
    if (!cv) return;
    dpr = Math.min(2, devicePixelRatio || 1);
    W = cv.width = innerWidth * dpr; H = cv.height = innerHeight * dpr;
    const n = Math.round(Math.min(160, innerWidth * innerHeight / 9000));
    parts = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      z: .35 + Math.random() * 1.1,           // parallaxe
      r: (.5 + Math.random() * 1.6) * dpr,
      drift: (Math.random() - .5) * .25 * dpr,
      sink: (.05 + Math.random() * .18) * dpr,
      ph: Math.random() * 6.28,
      bubble: Math.random() < .12
    }));
  };
  let p = 0, lastScroll = scrollY, vel = 0, t0 = performance.now();
  const draw = now => {
    if (!ctx) return;
    const dt = Math.min(50, now - t0); t0 = now;
    ctx.clearRect(0, 0, W, H);
    const deep = p;
    const alphaSnow = .15 + deep * .55;            // la neige marine se voit en profondeur
    const alphaBub = Math.max(0, .55 - deep * .9); // les bulles près de la surface
    for (const a of parts) {
      // en descendant, tout remonte à l'écran
      a.y -= (vel * a.z * dpr * .9);
      a.ph += dt * .0012;
      if (a.bubble) a.y -= (.35 + a.z * .4) * dpr * dt / 16; else a.y += a.sink * dt / 16;
      a.x += a.drift + Math.sin(a.ph) * .15 * dpr;
      if (a.y < -10) { a.y = H + 10; a.x = Math.random() * W; }
      if (a.y > H + 10) { a.y = -10; a.x = Math.random() * W; }
      if (a.x < -10) a.x = W + 10; if (a.x > W + 10) a.x = -10;
      if (a.bubble) {
        if (alphaBub <= .01) continue;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r * 2.2, 0, 6.283);
        ctx.strokeStyle = `rgba(255,255,255,${alphaBub * .8})`; ctx.lineWidth = .8 * dpr; ctx.stroke();
        ctx.beginPath(); ctx.arc(a.x - a.r * .7, a.y - a.r * .7, a.r * .5, 0, 6.283);
        ctx.fillStyle = `rgba(255,255,255,${alphaBub})`; ctx.fill();
      } else {
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r * a.z * .8, 0, 6.283);
        ctx.fillStyle = `rgba(230,240,245,${alphaSnow * (.4 + a.z * .4)})`; ctx.fill();
      }
    }
    vel *= .86;
    requestAnimationFrame(draw);
  };

  /* ---------- descente ---------- */
  let ticking = false;
  const update = () => {
    ticking = false;
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    p = Math.min(1, Math.max(0, scrollY / max));
    vel += (scrollY - lastScroll) * .04; lastScroll = scrollY;

    const [r, g, b] = mix(p);
    const water = `rgb(${r},${g},${b})`;
    bg.style.setProperty('--water', water);
    page.style.setProperty('--water', water);
    bg.style.setProperty('--glow', Math.max(0, 1 - p * 3.2).toFixed(3));
    bg.style.setProperty('--rays', Math.max(0, 1 - p * 2.1).toFixed(3));
    bg.style.setProperty('--caus', Math.max(0, .55 - p * 1.4).toFixed(3));
    bg.style.setProperty('--motif', (Math.min(1, Math.max(0, (p - .3) * 3)) * .07).toFixed(3));
    bg.style.setProperty('--motif-y', (-scrollY * .08) + 'px');
    bg.style.setProperty('--vig', (.08 + p * .55).toFixed(3));
    page.classList.toggle('deep', p > .2);
    const meta = document.querySelector('meta[name="theme-color"]'); if (meta) meta.content = water;

    if (gauge) {
      gauge.style.setProperty('--p', p.toFixed(4));
      if (gVal) gVal.textContent = (p < .005 ? '0' : '–' + (p * MAX_DEPTH).toFixed(1).replace('.', ',')) + ' m';
    }
    const vh = innerHeight;
    reveals.forEach(el => {
      const rc = el.getBoundingClientRect();
      if (rc.bottom < -50 || rc.top > vh + 50) return;
      // la couleur revient pendant que le rendu traverse l'écran
      const t = Math.min(1, Math.max(0, (vh * .85 - rc.top) / (vh * .7)));
      el.style.setProperty('--r', (1 - t).toFixed(4));
    });
    if (fil) {
      const box = fil.closest('.fil-wrap').getBoundingClientRect();
      const t = Math.min(1, Math.max(0, (vh * .8 - box.top) / (box.height + vh * .2)));
      fil.style.strokeDashoffset = (filLen * (1 - t)).toFixed(1);
    }
  };
  const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  addEventListener('scroll', req, { passive: true });
  addEventListener('resize', () => { resize(); req(); });
  resize(); update();
  if (!reduce && ctx) requestAnimationFrame(draw);
  else if (ctx) { reveals.forEach(el => el.style.setProperty('--r', 0)); }
})();
