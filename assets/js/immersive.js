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
    // Moins de pensées, placées en bordure pour laisser respirer le titre (en bas à gauche).
    const words = ['Deadline vendredi', 'Rendu APS', 'Mail non lu', 'Charrette', 'Oral lundi', 'Relance',
      '+12 notifications', 'Jury', 'Planches', 'À rendre'];
    const slotsWide = [[16, 14], [40, 9], [63, 14], [82, 24], [70, 40], [87, 53], [55, 28], [26, 33], [82, 68], [76, 86]];
    const slotsSmall = [[6, 12], [52, 10], [28, 23], [60, 31], [10, 40], [48, 48]];
    const layer = document.querySelector('.fx-noise');
    const small = innerWidth < 760;
    const slots = small ? slotsSmall : slotsWide;
    const spans = words.slice(0, slots.length).map((w, i, list) => {
      const s = document.createElement('span');
      s.textContent = w;
      s.className = i % 2 ? 'serif' : '';
      s.style.left = (slots[i][0] + (Math.random() - .5) * 3) + '%';
      s.style.top = (slots[i][1] + (Math.random() - .5) * 3) + '%';
      s.style.fontSize = (small ? 12 + Math.random() * 8 : 14 + Math.random() * 16) + 'px';
      s.style.animationDelay = (-Math.random() * 7) + 's';
      s.dataset.th = (0.06 + (i / list.length) * 0.45).toFixed(3);   // en fraction de hauteur d'écran : tout s'éteint avant la fin du premier écran
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
        const t = clamp((scrollY / innerHeight - +s.dataset.th) / .12);
        s.style.opacity = ((1 - t) * .45).toFixed(3);
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
    const ebb = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('ebb'); ebb.unobserve(e.target); }
    }), { rootMargin: '0px 0px -12% 0px', threshold: .15 });
    document.querySelectorAll('main .media, main .bleed').forEach(el => ebb.observe(el));

    // vidéo réelle (Pexels) si elle se charge ; sinon la plage calculée reste en fond
    let videoOn = false;
    const vid = document.querySelector('.fx-video');
    if (vid && !reduce) {
      vid.src = innerWidth < 900 ? vid.dataset.srcSd : vid.dataset.srcHd;
      vid.addEventListener('playing', () => { videoOn = true; body.classList.add('has-video'); paper(true); }, { once: true });
      const p = vid.play(); if (p && p.catch) p.catch(() => {});
    }
    const cv = document.querySelector('.fx-beach');
    const gl = cv && (cv.getContext('webgl', { antialias: false, alpha: false, premultipliedAlpha: false }));
    if (gl) {
      const vs = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
      const fs = `precision highp float;
uniform vec2 R; uniform float T; uniform float S; uniform float L;
float h(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);
 return mix(mix(h(i),h(i+vec2(1,0)),u.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),u.x),u.y);}
float fbm(vec2 p){float v=0.,a=.5;mat2 m=mat2(1.6,1.2,-1.2,1.6);for(int i=0;i<5;i++){v+=a*n(p);p=m*p;a*=.5;}return v;}
void main(){
 vec2 uv=gl_FragCoord.xy/R; float asp=R.x/R.y;
 vec2 w=vec2(uv.x*asp, uv.y + S);           // coordonnées « plage » qui défilent avec la page
 float t=T;
 // rivage : niveau de marée + dentelure + va-et-vient du jet de rive
 float swash = .035*sin(t*.55)+.018*sin(t*1.13+1.7);
 float edge = L + swash + .07*(fbm(vec2(w.x*.9, w.y*.15 + t*.02))-.5) + .025*(fbm(vec2(w.x*3.5,t*.1))-.5) + .008*(n(vec2(w.x*18.,t*.4))-.5);
 float d = edge - uv.y;                      // >0 : dans l'eau (profondeur)
 // sable sec : grain fin, nappes, rides du vent
 float g = n(w*R.y*.55);
 float patch = fbm(w*3.);
 float rip = sin((w.y*90. + fbm(w*6.)*8.))*.5+.5;
 vec3 dry = vec3(.905,.865,.79) + (patch-.5)*.07 + (g-.5)*.05 - rip*.012;
 // sable mouillé : plus sombre, brillant, laissé par la dernière vague
 float wetH = edge + .07 + .03*sin(t*.55-1.);
 float wet = smoothstep(wetH, edge, uv.y);
 vec3 wetc = vec3(.70,.63,.53) + (patch-.5)*.06 + (g-.5)*.04;
 float sheen = pow(fbm(w*vec2(2.,9.)+vec2(0.,t*.02)),3.)*.35;
 vec3 sand = mix(dry, wetc + sheen, wet*.85);
 // eau : transparente sur le sable puis turquoise profond
 float depth = clamp(d*3.2,0.,1.);
 vec2 q = w*vec2(7.,11.) + vec2(t*.15, -t*.35);
 float wav = fbm(q + fbm(q*.6+t*.1)*1.5);
 vec3 shallow = mix(wetc*.92, vec3(.47,.70,.68), .55);
 vec3 deep = vec3(.10,.33,.36);
 vec3 water = mix(shallow, deep, smoothstep(0.,1.,depth*1.4));
 water += (wav-.5)*.08;
 // reflets du ciel et scintillement
 float spark = pow(max(0., n(w*vec2(160.,240.)+vec2(t*1.1,-t*1.6))), 40.) * smoothstep(.04,.12,d);
 water += spark*.35 + smoothstep(.55,.85,wav)*.07;
 // écume : ligne de bord + dentelle qui se défait vers le large
 float lace = fbm(w*vec2(38.,60.) + vec2(t*.2, -t*.45) + fbm(w*8.)*1.2);
 float band = smoothstep(.0,.004,d) * (1.-smoothstep(.01,.09,d));
 float line = (1.-smoothstep(0.,.006,abs(d-.003))) * (.6+.4*n(vec2(w.x*40.,t)));
 float foam = clamp(line*.85 + band*smoothstep(.5,.66,lace)*.95 + smoothstep(.12,.02,d)*smoothstep(.6,.72,lace)*.35,0.,1.);
 float inWater = smoothstep(-.002,.004,d);
 vec3 col = mix(sand, water, inWater*(.12 + .88*smoothstep(0.,.08,d)));
 col = mix(col, vec3(.97,.98,.97), foam*inWater);
 // ombre portée de l'écume sur le sable mouillé
 col *= 1. - .08*(1.-smoothstep(0.,.02,-d))*(1.-inWater);
 // vignettage doux
 col *= .96 + .04*smoothstep(1.2,.2,length(uv-.5));
 gl_FragColor=vec4(col,1.);
}`;
      const mk = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
      const pr = gl.createProgram();
      gl.attachShader(pr, mk(gl.VERTEX_SHADER, vs)); gl.attachShader(pr, mk(gl.FRAGMENT_SHADER, fs));
      gl.linkProgram(pr);
      if (gl.getProgramParameter(pr, gl.LINK_STATUS)) {
        gl.useProgram(pr);
        const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
        const loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
        const uR = gl.getUniformLocation(pr, 'R'), uT = gl.getUniformLocation(pr, 'T'), uS = gl.getUniformLocation(pr, 'S'), uL = gl.getUniformLocation(pr, 'L');
        const scale = Math.min(1, (innerWidth < 760 ? .75 : .6) * (devicePixelRatio || 1));
        const size = () => { cv.width = Math.round(innerWidth * scale); cv.height = Math.round(innerHeight * scale); gl.viewport(0, 0, cv.width, cv.height); };
        size(); addEventListener('resize', size);
        let lvl = .2, visible = true;
        document.addEventListener('visibilitychange', () => { visible = !document.hidden; });
        const t0 = performance.now();
        const frame = now => {
          // à chaque écran, la mer remonte puis se retire
          const ph = (scrollY / innerHeight) % 1;
          const target = .07 + (1 - ease(clamp(ph * 1.25))) * .16;
          lvl += (target - lvl) * .06;
          if (visible && !videoOn) {
            gl.uniform2f(uR, cv.width, cv.height);
            gl.uniform1f(uT, reduce ? 0 : (now - t0) / 1000);
            gl.uniform1f(uS, scrollY / innerHeight * .35);
            gl.uniform1f(uL, lvl);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
          }
          if (!reduce && !(videoOn && vid.currentTime > 2)) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
        addEventListener('scroll', () => { if (reduce) requestAnimationFrame(frame); }, { passive: true });
      }
    }
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
