/* Eliott Buchaille — interactions du site
   Thème clair/sombre, nav, révélations au scroll, parallaxe, texte révélé, défilement horizontal, lightbox. */
(() => {
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- thème ---------- */
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  const setTheme = (t, save) => {
    root.setAttribute('data-theme', t);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = t === 'dark' ? '#121110' : '#F4EFE9';
    if (save) store.set('eb-theme', t);
  };
  document.querySelectorAll('.theme-toggle').forEach(b => b.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    const run = () => setTheme(next, true);
    document.startViewTransition && !reduce ? document.startViewTransition(run) : run();
  }));
  // propage le thème choisi par ?theme= aux liens internes
  const forced = new URLSearchParams(location.search).get('theme');
  if (forced === 'light' || forced === 'dark') {
    document.querySelectorAll('a[href]').forEach(a => {
      const h = a.getAttribute('href');
      if (h && !/^(https?:|mailto:|tel:|#)/.test(h)) {
        const [p, hash] = h.split('#');
        a.setAttribute('href', p + (p.includes('?') ? '&' : '?') + 'theme=' + forced + (hash ? '#' + hash : ''));
      }
    });
  }

  /* ---------- navigation ---------- */
  const nav = document.querySelector('.nav');
  const menu = document.querySelector('.menu-btn');
  if (menu) menu.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menu.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('is-open')));

  let lastY = scrollY;
  const onNav = () => {
    const y = scrollY;
    nav.classList.toggle('is-scrolled', y > 10);
    if (!nav.classList.contains('is-open')) nav.classList.toggle('is-hidden', y > lastY && y > 420);
    lastY = y;
  };


  /* ---------- liquid glass : réfraction (Chromium) et reflet au pointeur ---------- */
  (() => {
    const brands = (navigator.userAgentData && navigator.userAgentData.brands) || [];
    if (brands.some(b => /Chromium|Google Chrome|Microsoft Edge/.test(b.brand))) {
      const ns = 'http://www.w3.org/2000/svg';
      const svg = document.createElementNS(ns, 'svg');
      svg.setAttribute('width', '0'); svg.setAttribute('height', '0'); svg.setAttribute('aria-hidden', 'true');
      svg.style.position = 'absolute';
      svg.innerHTML = '<filter id="lg-refract" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">' +
        '<feTurbulence type="fractalNoise" baseFrequency="0.006 0.018" numOctaves="2" seed="11" result="n"/>' +
        '<feGaussianBlur in="n" stdDeviation="3" result="nb"/>' +
        '<feDisplacementMap in="SourceGraphic" in2="nb" scale="22" xChannelSelector="R" yChannelSelector="G"/></filter>';
      document.body.appendChild(svg);
      document.documentElement.classList.add('lg-refract');
    }
    const glass = [...document.querySelectorAll('.nav, .lg')];
    if (!glass.length || matchMedia('(hover: none)').matches) return;
    addEventListener('pointermove', e => {
      glass.forEach(g => {
        const r = g.getBoundingClientRect();
        g.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
        g.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
      });
    }, { passive: true });
  })();

  /* ---------- apparition du hero ---------- */
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove('hero-load')));

  /* ---------- révélations ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px', threshold: .08 });
  document.querySelectorAll('.reveal, .reveal-img').forEach(el => io.observe(el));

  /* ---------- texte qui s'allume mot à mot ---------- */
  const st = document.querySelector('[data-words]');
  let words = [];
  if (st) {
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(t => {
            if (!t) return;
            if (/^\s+$/.test(t)) frag.append(t);
            else { const s = document.createElement('span'); s.className = 'w'; s.textContent = t; frag.append(s); }
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) walk(n);
      });
    };
    walk(st);
    words = [...st.querySelectorAll('.w')];
  }

  /* ---------- parallaxe & scroll piloté ---------- */
  const heroImg = document.querySelector('[data-hero-parallax]');
  const pars = [...document.querySelectorAll('[data-parallax]')];
  const hs = document.querySelector('.hscroll');
  const track = hs && hs.querySelector('.hscroll-track');
  const sizeH = () => {
    if (!hs || !track) return;
    if (innerWidth < 760) { hs.style.height = ''; track.style.transform = ''; return; }
    const dist = track.scrollWidth - innerWidth;
    hs.style.height = (innerHeight + Math.max(0, dist)) + 'px';
  };

  let ticking = false;
  const frame = () => {
    ticking = false;
    const vh = innerHeight;
    onNav();
    if (reduce) return;
    if (heroImg) {
      const y = Math.min(scrollY, vh);
      heroImg.style.transform = `translate3d(0, ${y * .32}px, 0) scale(${1 + y / vh * .08})`;
    }
    pars.forEach(el => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const p = (r.top + r.height / 2 - vh / 2) / vh;
      el.style.transform = `translate3d(0, ${p * -8}%, 0) scale(1.16)`;
    });
    if (words.length) {
      const r = st.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh * .82 - r.top) / (r.height + vh * .3)));
      const n = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle('on', i < n));
    }
    if (hs && track && innerWidth >= 760) {
      const r = hs.getBoundingClientRect();
      const dist = track.scrollWidth - innerWidth;
      const p = Math.min(1, Math.max(0, -r.top / (r.height - vh)));
      track.style.transform = `translate3d(${-p * dist}px, 0, 0)`;
    }
  };
  const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
  addEventListener('scroll', req, { passive: true });
  addEventListener('resize', () => { sizeH(); req(); });
  addEventListener('load', () => { sizeH(); req(); });
  sizeH(); frame();

  /* ---------- filtres galerie ---------- */
  const filters = document.querySelectorAll('.filters button');
  filters.forEach(b => b.addEventListener('click', () => {
    filters.forEach(x => x.setAttribute('aria-pressed', x === b));
    const f = b.dataset.f;
    document.querySelectorAll('.gallery figure').forEach(fig => {
      fig.hidden = f !== 'all' && fig.dataset.cat !== f;
    });
  }));

  /* ---------- lightbox ---------- */
  const zoomables = () => [...document.querySelectorAll('[data-zoom]')].filter(el => !el.closest('[hidden]'));
  if (document.querySelector('[data-zoom]')) {
    const lb = document.createElement('div');
    lb.className = 'lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Image agrandie');
    const arrow = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="${d}"/></svg>`;
    lb.innerHTML = `<img alt=""><p class="lb-cap"></p>
      <button class="x" aria-label="Fermer">${arrow('M5 5l14 14M19 5L5 19')}</button>
      <button class="prev" aria-label="Image précédente">${arrow('M15 4l-8 8 8 8')}</button>
      <button class="nxt" aria-label="Image suivante">${arrow('M9 4l8 8-8 8')}</button>`;
    document.body.append(lb);
    const img = lb.querySelector('img'), cap = lb.querySelector('.lb-cap');
    let list = [], idx = 0;
    const show = i => {
      idx = (i + list.length) % list.length;
      const el = list[idx];
      img.src = el.dataset.zoom; img.alt = el.dataset.alt || '';
      cap.textContent = el.dataset.alt || '';
    };
    const open = el => { list = zoomables(); show(list.indexOf(el)); lb.classList.add('open'); document.body.style.overflow = 'hidden'; lb.querySelector('.x').focus(); };
    const close = () => { lb.classList.remove('open'); document.body.style.overflow = ''; };
    document.addEventListener('click', e => {
      const el = e.target.closest('[data-zoom]');
      if (el) { e.preventDefault(); open(el); }
    });
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    lb.querySelector('.x').addEventListener('click', close);
    lb.querySelector('.prev').addEventListener('click', () => show(idx - 1));
    lb.querySelector('.nxt').addEventListener('click', () => show(idx + 1));
    addEventListener('keydown', e => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(idx - 1);
      if (e.key === 'ArrowRight') show(idx + 1);
    });
  }

  /* ---------- année ---------- */
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
