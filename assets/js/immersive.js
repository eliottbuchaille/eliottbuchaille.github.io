/* Pages projets immersives : marelle, apex, ocean, port. */
(() => {
  const body = document.body;
  const fx = body.dataset.fx;
  if (!fx) return;
  const bg = document.querySelector('.fx-bg');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const ease = t => t * t * (3 - 2 * t);
  const hex = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
  const grad = (stops, p) => {           // stops : [[pos, '#hex'], ...]
    for (let i = 1; i < stops.length; i++) if (p <= stops[i][0]) {
      const t = ease((p - stops[i - 1][0]) / (stops[i][0] - stops[i - 1][0]));
      const a = hex(stops[i - 1][1]), b = hex(stops[i][1]);
      return `rgb(${a.map((v, k) => Math.round(lerp(v, b[k], t))).join(',')})`;
    }
    return stops[stops.length - 1][1];
  };
  const setv = (el, k, v) => el && el.style.setProperty(k, v);
  const progress = () => clamp(scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight));
  const paper = on => body.classList.toggle('fx-paper', on);

  /* ---------- intro au clic ---------- */
  const intro = document.querySelector('.fx-intro');
  const endIntro = () => intro && intro.classList.add('done');
  if (intro) {
    if (reduce) endIntro();
    else if (fx === 'apex') {
      const cols = [...intro.querySelectorAll('.col')];
      cols.forEach((c, i) => setTimeout(() => c.classList.add('on'), 250 + i * 260));
      setTimeout(() => { cols.forEach(c => c.classList.remove('on')); intro.classList.add('out'); }, 250 + 5 * 260 + 380);
      setTimeout(endIntro, 250 + 5 * 260 + 950);
      intro.style.pointerEvents = 'auto';
      intro.addEventListener('click', endIntro);
    } else {
      setTimeout(endIntro, 1700);
    }
  }

  let update = () => {};

  /* ======================= MARELLE ======================= */
  if (fx === 'marelle') {
    const words = ['Deadline vendredi', 'Mail non lu', 'Réunion 9 h', 'Rendu APS', 'Partiel', 'Relance', 'Dossier à finir',
      'Stage ?', '+12 notifications', 'Groupe projet', 'Loyer', 'Rappel', 'Charrette', 'Oral lundi', 'Planches', 'Impression',
      'Retard', 'Appel manqué', 'À rendre', 'Encore un mail', 'Urgent', 'Jury', 'Corrections', 'Message vocal'];
    const layer = document.querySelector('.fx-noise');
    const small = innerWidth < 760;
    const spans = (small ? words.slice(0, 12) : words).map((w, i, list) => {
      const s = document.createElement('span');
      const kind = i % 3;
      s.textContent = w;
      s.className = kind === 0 ? 'pill' : kind === 1 ? 'serif' : '';
      s.style.left = (4 + Math.random() * (small ? 60 : 82)) + '%';
      s.style.top = (8 + Math.random() * 80) + '%';
      s.style.fontSize = (small ? 12 + Math.random() * 12 : 14 + Math.random() * 26) + 'px';
      s.style.animationDelay = (-Math.random() * 7) + 's';
      s.dataset.th = (0.02 + (i / list.length) * 0.26).toFixed(3);   // chaque pensée s'éteint à son tour
      layer.append(s);
      return s;
    });
    const cells = [...document.querySelectorAll('.hop .cell')];
    const stone = document.querySelector('.hop .stone');
    const label = document.querySelector('.hop-label b');
    const names = ['Case 1', 'Case 2', 'Case 3', 'Case 4', 'Case 5', 'Case 6', 'Case 7', 'Case 8', 'Case 9', 'Case 10', 'Ciel'];
    let last = -1;
    update = () => {
      const p = progress();
      const sky = grad([[0, '#E4DCD0'], [.35, '#EFE8DD'], [1, '#F7F2EA']], p);
      setv(bg, '--fx-sky', sky); setv(body, '--fx-sky', sky);
      spans.forEach(s => {
        const t = clamp((p - +s.dataset.th) / .05);
        s.style.opacity = ((1 - t) * (s.classList.contains('pill') ? .95 : .5)).toFixed(3);
        s.style.filter = `blur(${(t * 8).toFixed(1)}px)`;
        s.style.transform = `translateY(${(-t * 40).toFixed(0)}px)`;
      });
      const idx = Math.min(10, Math.floor(p * 11.2));
      if (idx !== last && cells.length) {
        last = idx;
        cells.forEach((c, i) => c.classList.toggle('on', i <= idx));
        const c = cells[idx];
        const bx = c.getBBox();
        stone.setAttribute('transform', `translate(${bx.x + bx.width / 2} ${bx.y + bx.height / 2})`);
        if (label) label.textContent = names[idx];
      }
    };
  }

  /* ======================= APEX ======================= */
  if (fx === 'apex') {
    const run = document.querySelector('.lap .run');
    const car = document.querySelector('.lap .car');
    const tEl = document.querySelector('.lap b');
    const sEl = document.querySelector('.lap .sec');
    const len = run ? run.getTotalLength() : 0;
    if (run) { run.style.strokeDasharray = len; run.style.strokeDashoffset = len; }
    const LAP = 83.456;
    let last = scrollY, v = 0, sy = 0;
    const tick = () => {
      v *= .9;
      setv(body, '--mb', Math.min(2.2, Math.abs(v) * .05).toFixed(2) + 'px');
      setv(bg, '--streak', Math.min(.9, Math.abs(v) * .03).toFixed(3));
      sy = (sy + v * 2) % 240; setv(bg, '--sy', sy + 'px');
      requestAnimationFrame(tick);
    };
    if (!reduce) requestAnimationFrame(tick);
    update = () => {
      const p = progress();
      v += (scrollY - last) * .08; last = scrollY;
      if (run) {
        run.style.strokeDashoffset = (len * (1 - p)).toFixed(1);
        const pt = run.getPointAtLength(len * p);
        car.setAttribute('cx', pt.x); car.setAttribute('cy', pt.y);
      }
      const t = p * LAP, m = Math.floor(t / 60), s = (t % 60);
      if (tEl) tEl.textContent = `${m}:${s.toFixed(3).padStart(6, '0')}`;
      if (sEl) sEl.textContent = p >= .995 ? 'TOUR TERMINÉ' : `SECTEUR ${Math.min(3, 1 + Math.floor(p * 3))}`;
    };
  }

  /* ======================= MARÉE ======================= */
  if (fx === 'tide') {
    const tide = document.querySelector('.fx-tide');
    const ebb = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('ebb'); ebb.unobserve(e.target); }
    }), { rootMargin: '0px 0px -12% 0px', threshold: .15 });
    document.querySelectorAll('main .media, main .bleed').forEach(el => ebb.observe(el));
    let t = 0;
    const breathe = () => { t += .012; update(); if (!reduce) requestAnimationFrame(breathe); };
    update = () => {
      // à chaque écran, la mer remonte puis se retire ; elle respire doucement entre deux vagues
      const ph = (scrollY / innerHeight) % 1;
      const ebbing = 1 - ease(clamp(ph * 1.25));
      const lvl = 5 + ebbing * 17 + Math.sin(t) * 1.6;
      setv(tide, '--lvl', lvl.toFixed(2) + 'vh');
    };
    if (!reduce) requestAnimationFrame(breathe);
  }

  /* ======================= PORT ======================= */
  if (fx === 'port') {
    const clock = document.querySelector('.service b');
    const lab = document.querySelector('.service small');
    const lamps = document.querySelector('.fx-lamps');
    if (lamps) for (let i = 0; i < 26; i++) {
      const l = document.createElement('i');
      l.style.left = (Math.random() * 100) + '%'; l.style.top = (55 + Math.random() * 40) + '%';
      l.style.animationDelay = (-Math.random() * 3) + 's';
      l.style.transform = `scale(${.5 + Math.random() * .9})`;
      lamps.append(l);
    }
    const wall = [[0, '#F1EADF'], [.35, '#EED9C2'], [.6, '#D9946A'], [.78, '#7E3B2B'], [.9, '#2A2638'], [1, '#121A2B']];
    update = () => {
      const p = progress();
      const c = grad(wall, p);
      setv(bg, '--fx-sky', c); setv(body, '--fx-sky', c);
      setv(bg, '--rip', (p < .7 ? .55 - p * .25 : .38 + (p - .7) * .6).toFixed(3));
      setv(bg, '--rip-blend', p < .72 ? 'soft-light' : 'screen');
      setv(bg, '--rip-b', p < .72 ? '1.25' : '.55');
      setv(bg, '--lamps', clamp((p - .72) / .12).toFixed(3));
      setv(bg, '--masts', (.22 + p * .35).toFixed(3));
      setv(bg, '--mast-c', p < .72 ? '#3a2a22' : '#0b0f18');
      const h = 12 + p * 11, hh = Math.floor(h), mm = Math.floor((h - hh) * 60);
      if (clock) clock.textContent = `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
      if (lab) lab.textContent = h < 15 ? 'Service du midi' : h < 19 ? "L'après-midi au port" : 'Service du soir';
      paper(p > .68);
    };
  }

  let ticking = false;
  const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; update(); }); } };
  addEventListener('scroll', req, { passive: true });
  addEventListener('resize', req);
  addEventListener('load', req);
  update();
})();
