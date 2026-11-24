/* Site photo — rendu à partir de data.js (FR / EN) */
(function () {
  "use strict";
  var D = window.PHOTO, S = D.site, SE = D.series;
  var $ = function (id) { return document.getElementById(id); };
  var pad = function (n) { return (n < 10 ? "0" : "") + n; };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };

  /* ---------- langue ---------- */
  var UI = {
    fr: { skip: "Aller au contenu", register: "Registre d'images", title: "Photo­graphie", index_label: "00 — Sommaire", index_title: "Index des séries",
      nav_about: "À propos", nav_contact: "Contact", nav_archi: "Architecture ↗", nav_archi_long: "Portfolio d'architecture intérieure ↗",
      about_title: "Le photographe", gear: "Matériel", based: "Basé", based_v: "Lyon · Haute-Savoie, France", avail: "Disponible pour",
      avail_v: "Mariages, portraits, automobile, architecture, commandes", contact_title: "Une commande, une collaboration ?",
      ref_index: "Index de référence", photographer: "Photographe", back_top: "↑ Haut de page", close: "Fermer ✕",
      serie: "Série", subject: "Sujet", place: "Lieu", year: "Année", images: "photos", see_all: "Voir toute la série", hide_all: "Réduire la série",
      enlarge: "Agrandir", count: "photographies", doc: "Eliott Buchaille — Photographie" },
    en: { skip: "Skip to content", register: "Image register", title: "Photo­graphy", index_label: "00 — Contents", index_title: "Series index",
      nav_about: "About", nav_contact: "Contact", nav_archi: "Architecture ↗", nav_archi_long: "Interior architecture portfolio ↗",
      about_title: "The photographer", gear: "Equipment", based: "Based", based_v: "Lyon · Haute-Savoie, France", avail: "Available for",
      avail_v: "Weddings, portraits, automotive, architecture, commissions", contact_title: "A commission, a collaboration?",
      ref_index: "Reference index", photographer: "Photographer", back_top: "↑ Back to top", close: "Close ✕",
      serie: "Series", subject: "Subject", place: "Place", year: "Year", images: "photos", see_all: "See the full series", hide_all: "Collapse the series",
      enlarge: "Enlarge", count: "photographs", doc: "Eliott Buchaille — Photography" }
  };
  var lang = "fr";
  try { lang = localStorage.getItem("eb-lang") || ""; } catch (e) {}
  var q = new URLSearchParams(location.search).get("lang");
  if (q === "fr" || q === "en") lang = q;
  if (lang !== "fr" && lang !== "en") lang = /^fr/i.test(navigator.language || "fr") ? "fr" : "en";
  var t = function (k) { return UI[lang][k]; };
  var L = function (o) { return o && typeof o === "object" ? (o[lang] || o.fr) : o; };

  /* ---------- images ---------- */
  function urls(p) {
    if (p.src) return { s: p.t || p.src, l: p.src, set: p.t ? p.t + " 1200w, " + p.src + " " + Math.max(p.w, p.h) + "w" : "" };
    var s = S.cdn + p.s, l = S.cdn + p.l;
    return { s: s, l: l, set: s + " 1200w, " + l + " 1920w" };
  }
  // zones floutées (plaques d'immatriculation)
  function blurs(p) {
    return (p.blur || []).map(function (b) {
      return '<span class="plate" aria-hidden="true" style="left:' + b[0] + "%;top:" + b[1] + "%;width:" + (b[2] - b[0]) + "%;height:" + (b[3] - b[1]) + '%"></span>';
    }).join("");
  }
  function ratio(p) { return p.w && p.h ? p.w + "/" + p.h : "3/2"; }

  // une image cliquable ; si crop est donné, elle remplit un cadre de ce format
  function frame(si, k, crop, sizes) {
    var s = SE[si], p = s.photos[k], u = urls(p);
    if (p.blur) crop = null; // jamais recadrer une photo floutée : les zones restent alignées
    return '<a class="ph" href="' + esc(u.l) + '" data-s="' + si + '" data-k="' + k + '" style="aspect-ratio:' + (crop || ratio(p)) + '"' +
      ' aria-label="' + esc(t("enlarge") + " — " + L(s.title) + " " + pad(k + 1)) + '">' +
      '<img src="' + esc(u.s) + '"' + (u.set ? ' srcset="' + esc(u.set) + '" sizes="' + (sizes || "(max-width:700px) 100vw, 50vw") + '"' : "") +
      ' alt="' + esc(L(s.title) + " — " + pad(k + 1)) + '" loading="lazy" decoding="async" onload="this.classList.add(\'loaded\')">' + blurs(p) + "</a>";
  }
  function cap(k, extra) {
    return '<div class="cap mono"><span>' + pad(k + 1) + '</span><span class="c">' + (extra ? esc(extra) : "—") + "</span></div>";
  }

  /* ---------- mises en page ---------- */
  var LAY = {
    spread: function (si) {
      var s = SE[si], f = s.featured, out = "", folio = 10;
      for (var i = 0; i < f.length; i += 3) {
        out += '<div class="spread reveal">' +
          '<div class="page l"><span class="run mono">' + esc(t("title").replace("­", "")) + '</span><span class="vert mono">' + esc(L(s.title)) + " — " + esc(L(s.place)) + "</span>" +
          frame(si, f[i], null, "(max-width:700px) 90vw, 40vw") + cap(f[i]) + '<span class="folio">' + folio + "</span></div>" +
          '<div class="page r"><span class="run mono">Portfolio</span><span class="vert mono">' + esc(S.name) + " · " + esc(s.year) + "</span>" +
          (f[i + 1] != null ? frame(si, f[i + 1], null, "(max-width:700px) 90vw, 36vw") + cap(f[i + 1]) : "") +
          (f[i + 2] != null ? frame(si, f[i + 2], null, "(max-width:700px) 90vw, 36vw") + cap(f[i + 2]) : "") +
          '<span class="folio">' + (folio + 1) + "</span></div></div>";
        folio += 2;
      }
      return out;
    },
    wide: function (si) {
      var s = SE[si], f = s.featured, rest = f.slice(1);
      return '<div class="wide-main reveal"><div>' + frame(si, f[0], null, "(max-width:700px) 100vw, 75vw") + "</div>" +
        '<div class="mono"><p>' + pad(f[0] + 1) + '</p><p class="k">' + esc(L(s.subtitle)) + '</p><p class="k">' + esc(L(s.place)) + "</p></div></div>" +
        '<div class="wide-rest">' + rest.map(function (k, i) {
          return '<div class="reveal" style="--d:' + (i % 2) * 0.1 + 's">' + frame(si, k) + cap(k) + "</div>";
        }).join("") + "</div>";
    },
    register: function (si) {
      var s = SE[si];
      return '<div class="register">' + s.featured.map(function (k, i) {
        return '<div class="reveal" style="--d:' + (i % 3) * 0.08 + 's"><p class="mono num">' + pad(k + 1) + "</p>" +
          frame(si, k, "4/5", "(max-width:640px) 50vw, 30vw") + '<p class="mono" style="margin-top:8px">—</p></div>';
      }).join("") + "</div>";
    },
    rows: function (si) {
      var s = SE[si];
      return (s.rows || [s.featured]).map(function (row, r) {
        return '<div class="jrow reveal" style="--d:' + (r % 2) * 0.06 + 's">' + row.map(function (k) {
          var p = s.photos[k];
          return '<figure class="jitem" style="flex:' + (p.w / p.h).toFixed(4) + ' 1 0">' + frame(si, k, null, Math.round(100 * (p.w / p.h) / row.reduce(function (a, j) { return a + s.photos[j].w / s.photos[j].h; }, 0)) + "vw") +
            '<figcaption class="cap mono"><span>' + pad(k + 1) + '</span><span class="c">' + esc(L(p.cap) || "—") + "</span></figcaption></figure>";
        }).join("") + "</div>";
      }).join("");
    },
    dark: function (si) {
      var s = SE[si];
      return '<div class="mosaic">' + s.featured.map(function (k, i) {
        return '<div class="m' + i + ' reveal" style="--d:' + i * 0.07 + 's">' + frame(si, k, "2/3", i ? "25vw" : "50vw") + cap(k) + "</div>";
      }).join("") + "</div>";
    },
    strip: function (si) {
      var s = SE[si], f = s.featured, p0 = s.photos[f[0]], first = p0.w > p0.h;
      var row = first ? f.slice(1) : f;
      return (first ? '<div class="strip-top reveal">' + frame(si, f[0], "21/9", "100vw") + "</div>" : "") +
        '<div class="strip reveal" style="--n:' + row.length + '">' + row.map(function (k) { return frame(si, k, "3/4", "33vw"); }).join("") + "</div>" +
        '<div class="strip-cap mono"><span>' + f.map(function (k) { return pad(k + 1); }).join("  ") + '</span><span class="k">' + esc(L(s.place)) + "</span></div>";
    }
  };

  // grille complète de la série (dépliée au clic)
  function fullGrid(si) {
    var s = SE[si];
    return s.photos.map(function (p, k) {
      return '<figure class="fg-item">' + frame(si, k, null, "(max-width:700px) 50vw, 25vw") + '<figcaption class="mono">' + pad(k + 1) + "</figcaption></figure>";
    }).join("");
  }

  /* ---------- rendu ---------- */
  function render() {
    document.documentElement.lang = lang;
    document.title = t("doc");
    document.querySelectorAll("[data-t]").forEach(function (el) { var v = t(el.dataset.t); if (v) el.textContent = v; });
    document.querySelectorAll("[data-lang]").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.lang === lang); });

    var total = SE.reduce(function (a, s) { return a + s.photos.length; }, 0);
    $("m-vol").textContent = S.volume;
    $("m-place").textContent = S.place;
    $("m-year").textContent = S.year;
    $("m-archive").textContent = "Archive " + S.archive;
    $("m-count").textContent = total + " " + t("count");
    $("m-disc").textContent = L(S.disciplines);
    $("m-intro").textContent = L(S.intro);
    $("m-about").innerHTML = L(S.about).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    $("m-gear").innerHTML = S.gear.map(esc).join("<br>");
    $("m-mail").textContent = S.email;
    $("m-mail").href = "mailto:" + S.email;
    var d = new Date();
    $("m-date").textContent = pad(d.getDate()) + " / " + pad(d.getMonth() + 1) + " / " + String(d.getFullYear()).slice(2);

    var heroS = 0; SE.forEach(function (s, i) { if (s.id === S.hero.series) heroS = i; });
    $("hero").innerHTML = frame(heroS, S.hero.index, "21/9", "100vw");
    var ab = 0; SE.forEach(function (s, i) { if (s.id === "landscapes") ab = i; });
    $("about-img").innerHTML = frame(ab, 4, "4/5", "30vw");

    var html = "", idx = "", refs = "", cats = "";
    SE.forEach(function (s, i) {
      var n = pad(i + 1);
      cats += '<a href="#' + s.id + '">' + esc(L(s.title)) + "</a>";
      refs += '<a href="#' + s.id + '">' + n + "</a>";
      idx += '<li><a href="#' + s.id + '"><span class="mono">' + n + '</span><span class="t">' + esc(L(s.title)) +
        "<small>" + esc(L(s.subtitle)) + '</small></span><span class="mono k">' + s.photos.length + " " + t("images") + "</span></a></li>";
      html += '<section class="sheet serie' + (s.layout === "dark" || s.dark ? " dark" : "") + '" id="' + s.id + '" data-n="' + n + '">' +
        '<header class="serie-head">' +
        '<p class="serie-num reveal">' + n + "</p>" +
        '<div class="reveal" style="--d:.08s"><p class="mono k">' + t("serie") + " " + n + " / " + pad(SE.length) + '</p><h2 class="serie-title">' + esc(L(s.title)) + "</h2>" +
        '<dl class="serie-meta mono"><dt>' + t("subject") + "</dt><dd>" + esc(L(s.subtitle)) + "</dd><dt>" + t("place") + "</dt><dd>" + esc(L(s.place)) +
        "</dd><dt>" + t("year") + "</dt><dd>" + esc(s.year) + "</dd></dl></div>" +
        '<p class="serie-text reveal" style="--d:.16s">' + esc(L(s.text)) + "</p>" +
        "</header>" + (LAY[s.layout] || LAY.register)(i) +
        (s.featured.length >= s.photos.length ? "" : '<div class="more"><button class="more-btn mono" type="button" data-more="' + i + '" aria-expanded="false" aria-controls="full-' + s.id + '">' +
        '<span class="lbl">' + t("see_all") + "</span> (" + s.photos.length + ') <span class="arr">↓</span></button></div>' +
        '<div class="full-grid" id="full-' + s.id + '" hidden></div>') +
        "</section>";
    });
    $("cats").innerHTML = cats;
    $("index").innerHTML = idx;
    $("refs").innerHTML = refs;
    $("series").innerHTML = html;
    observe();
    onScroll();
  }

  /* ---------- apparition (sans IntersectionObserver, toujours fiable) ---------- */
  document.documentElement.classList.add("js-reveal");
  function reveal() {
    var lim = window.innerHeight * 0.96;
    document.querySelectorAll(".reveal:not(.in)").forEach(function (el) {
      if (el.getBoundingClientRect().top < lim) el.classList.add("in");
    });
  }
  function observe() { reveal(); }
  window.addEventListener("resize", reveal);
  window.addEventListener("hashchange", function () { setTimeout(reveal, 50); setTimeout(reveal, 700); });
  // filet de sécurité : tout s'affiche au bout de 2,5 s quoi qu'il arrive
  setTimeout(function () { document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); }); }, 2500);

  /* ---------- barre ---------- */
  var bar = $("bar");
  function onScroll() {
    reveal();
    bar.classList.toggle("scrolled", window.scrollY > 10);
    var mid = window.innerHeight * 0.35, cur = null;
    document.querySelectorAll(".serie").forEach(function (s) { var r = s.getBoundingClientRect(); if (r.top < mid && r.bottom > mid) cur = s.id; });
    document.querySelectorAll("#cats a").forEach(function (a) { a.classList.toggle("on", a.getAttribute("href") === "#" + cur); });
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- visionneuse ---------- */
  var lb = $("lb"), media = $("lb-media"), lbCap = $("lb-cap"), cs = 0, ck = 0, last = null;
  function show(si, k) {
    var s = SE[si], n = s.photos.length;
    cs = si; ck = (k + n) % n;
    var u = urls(s.photos[ck]);
    media.innerHTML = '<span class="lb-wrap"><img src="' + esc(u.l) + '" alt="' + esc(L(s.title) + " " + pad(ck + 1)) + '">' + blurs(s.photos[ck]) + "</span>";
    var pc = L(s.photos[ck].cap);
    lbCap.textContent = L(s.title) + " — " + pad(ck + 1) + " / " + pad(n) + (pc ? "   ·   " + pc : "");
    // précharge la suivante
    var nx = new Image(); nx.src = urls(s.photos[(ck + 1) % n]).l;
  }
  function open(si, k) {
    last = document.activeElement; show(si, k); lb.hidden = false;
    requestAnimationFrame(function () { lb.classList.add("open"); });
    document.body.style.overflow = "hidden"; lb.querySelector(".lb-close").focus();
  }
  function close() {
    lb.classList.remove("open"); document.body.style.overflow = "";
    setTimeout(function () { lb.hidden = true; media.innerHTML = ""; }, 300);
    if (last) last.focus();
  }

  /* ---------- clics ---------- */
  document.addEventListener("click", function (e) {
    var ph = e.target.closest("a.ph[data-s]");
    if (ph) { e.preventDefault(); return open(+ph.dataset.s, +ph.dataset.k); }
    var lg = e.target.closest("[data-lang]");
    if (lg) { lang = lg.dataset.lang; try { localStorage.setItem("eb-lang", lang); } catch (x) {} var y = scrollY; render(); scrollTo(0, y); return; }
    var mo = e.target.closest("[data-more]");
    if (mo) {
      var si = +mo.dataset.more, g = $("full-" + SE[si].id), openNow = g.hidden;
      if (openNow && !g.innerHTML) g.innerHTML = fullGrid(si);
      g.hidden = !openNow;
      mo.setAttribute("aria-expanded", openNow);
      mo.querySelector(".lbl").textContent = openNow ? t("hide_all") : t("see_all");
      mo.querySelector(".arr").textContent = openNow ? "↑" : "↓";
      if (!openNow) document.getElementById(SE[si].id).scrollIntoView();
      reveal();
      return;
    }
    var b = e.target.closest("[data-lb]");
    if (b) { var a = b.dataset.lb; if (a === "close") close(); else show(cs, ck + (a === "next" ? 1 : -1)); return; }
    if (e.target === lb || e.target.classList.contains("lb-fig")) close();
  });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") show(cs, ck + 1);
    if (e.key === "ArrowLeft") show(cs, ck - 1);
  });
  // balayage sur mobile
  var tx = null;
  lb.addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (tx == null) return; var dx = e.changedTouches[0].clientX - tx; tx = null;
    if (Math.abs(dx) > 50) show(cs, ck + (dx < 0 ? 1 : -1));
  });

  render();
})();
