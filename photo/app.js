/* Rendu du site photo à partir de data.js */
(function () {
  "use strict";
  var D = window.PHOTO, S = D.site, series = D.series;
  var pad = function (n) { return (n < 10 ? "0" : "") + n; };
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s || "").replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var total = series.length;
  var gallery = []; // toutes les images, pour la visionneuse

  /* ---------- en-tête ---------- */
  $("m-name").textContent = S.name;
  $("m-vol").textContent = S.volume;
  $("m-place").textContent = S.place;
  $("m-year").textContent = S.year;
  $("m-archive").textContent = "Archive " + S.archive;
  $("m-total").textContent = pad(total);
  $("m-intro").textContent = S.intro;
  $("m-about").textContent = S.about;
  $("m-gear").innerHTML = S.gear.map(esc).join("<br>");
  $("m-mail").textContent = S.email;
  $("m-mail").href = "mailto:" + S.email;
  $("m-insta").innerHTML = S.instagram ? '<a href="' + esc(S.instagram) + '" target="_blank" rel="noopener">Instagram ↗</a>' : "";
  var d = new Date();
  $("m-date").textContent = pad(d.getDate()) + " / " + pad(d.getMonth() + 1) + " / " + String(d.getFullYear()).slice(2);

  /* ---------- une image ou un emplacement ---------- */
  function frame(p, tone, label, serieTitle) {
    var i = gallery.length;
    gallery.push({ p: p, tone: tone, label: label, serie: serieTitle });
    var ratio = p.ratio || "3/2";
    var inner = p.src
      ? '<img src="' + esc(p.src) + '" alt="' + esc(p.caption || serieTitle) + '" loading="lazy" decoding="async" onload="this.classList.add(\'loaded\')">'
      : "";
    return '<div class="ph tone-' + tone + (p.src ? "" : " empty") + '" style="aspect-ratio:' + ratio +
      '" data-i="' + i + '" data-label="' + esc(label + " · " + ratio.replace("/", ":")) + '" role="button" tabindex="0" aria-label="Agrandir ' + esc(label) + '">' + inner + "</div>";
  }
  function cap(n, p) {
    return '<div class="cap mono"><span>' + n + '</span><span class="c">' + esc(p.caption || "—") + "</span></div>";
  }

  /* ---------- mises en page ---------- */
  var L = {
    register: function (s, t) {
      return '<div class="register">' + s.photos.map(function (p, i) {
        var n = pad(i + 1);
        return '<div class="reveal" style="--d:' + (i % 3) * 0.08 + 's"><p class="mono num">' + n + "</p>" + frame(p, t, "Emplacement " + n, s.title) +
          '<p class="mono" style="margin-top:8px">' + (p.caption ? esc(p.caption) : "—") + "</p></div>";
      }).join("") + "</div>";
    },
    spread: function (s, t, idx) {
      var out = "", ph = s.photos, folio = (idx + 1) * 10;
      for (var k = 0; k < ph.length; k += 3) {
        var a = ph[k], b = ph[k + 1], c = ph[k + 2];
        out += '<div class="spread reveal">' +
          '<div class="page l"><span class="run mono">Photographie</span><span class="vert mono">' + esc(s.title) + " — " + esc(s.place) + "</span>" +
          frame(a, t, "Emplacement " + pad(k + 1), s.title) + cap(pad(k + 1), a) +
          '<span class="folio">' + folio + "</span></div>" +
          '<div class="page r"><span class="run mono">Portfolio</span><span class="vert mono">' + esc(S.name) + " · " + esc(s.year) + "</span>" +
          (b ? frame(b, t, "Emplacement " + pad(k + 2), s.title) + cap(pad(k + 2), b) : "") +
          (c ? frame(c, t, "Emplacement " + pad(k + 3), s.title) + cap(pad(k + 3), c) : "") +
          '<span class="folio">' + (folio + 1) + "</span></div></div>";
        folio += 2;
      }
      return out;
    },
    wide: function (s, t) {
      var ph = s.photos, rest = ph.slice(1);
      return '<div class="wide-main reveal"><div>' + frame(ph[0], t, "Emplacement 01", s.title) + "</div>" +
        '<div class="mono"><p>01</p><p class="k">' + esc(ph[0].caption || s.subtitle) + "</p><p class=\"k\">" + esc(s.place) + "</p></div></div>" +
        (rest.length ? '<div class="wide-pair">' + rest.map(function (p, i) {
          return '<div class="reveal" style="--d:' + i * 0.1 + 's">' + frame(p, t, "Emplacement " + pad(i + 2), s.title) + cap(pad(i + 2), p) + "</div>";
        }).join("") + "</div>" : "");
    },
    dark: function (s, t) {
      return '<div class="mosaic">' + s.photos.map(function (p, i) {
        return '<div class="m' + i + ' reveal" style="--d:' + i * 0.07 + 's">' + frame(p, t, "Emplacement " + pad(i + 1), s.title) + cap(pad(i + 1), p) + "</div>";
      }).join("") + "</div>";
    },
    strip: function (s, t) {
      return '<div class="strip reveal" style="--n:' + Math.min(s.photos.length, 4) + '">' + s.photos.map(function (p, i) {
        return frame(p, t, "Emplacement " + pad(i + 1), s.title);
      }).join("") + '</div><div class="strip-cap mono"><span>' + s.photos.map(function (_, i) { return pad(i + 1); }).join("  ") +
        '</span><span class="k">' + esc(s.place) + "</span></div>";
    }
  };

  /* ---------- séries ---------- */
  var html = "", idxHtml = "", refs = "";
  series.forEach(function (s, i) {
    var n = pad(i + 1), t = s.tone || "cool", lay = L[s.layout] || L.register;
    idxHtml += '<li><a href="#' + s.id + '"><span class="mono">' + n + '</span><span class="t">' + esc(s.title) +
      "<small>" + esc(s.subtitle) + '</small></span><span class="mono k">' + s.photos.length + " img.</span></a></li>";
    refs += '<a href="#' + s.id + '">' + n + "</a>";
    html += '<section class="sheet serie' + (s.layout === "dark" ? " dark" : "") + '" id="' + s.id + '" data-n="' + n + '" data-title="' + esc(s.title) + '">' +
      '<header class="serie-head">' +
      '<p class="serie-num reveal">' + n + "</p>" +
      '<div class="reveal" style="--d:.08s"><p class="mono k">Série ' + n + " / " + pad(total) + '</p><h2 class="serie-title">' + esc(s.title) + "</h2>" +
      '<dl class="serie-meta mono"><dt>Sujet</dt><dd>' + esc(s.subtitle) + "</dd><dt>Lieu</dt><dd>" + esc(s.place) + "</dd><dt>Année</dt><dd>" + esc(s.year) + "</dd></dl></div>" +
      '<p class="serie-text reveal" style="--d:.16s">' + esc(s.text) + "</p>" +
      "</header>" + lay(s, t, i) + "</section>";
  });
  $("series").innerHTML = html;
  $("index").innerHTML = idxHtml;
  $("refs").innerHTML = refs;
  $("hero").innerHTML = frame(S.hero, "warm", "Image d'ouverture", "Photographie");
  $("portrait").innerHTML = frame({ src: S.portrait || "", ratio: "4/5", caption: "Portrait" }, "cool", "Portrait", "À propos") +
    '<p class="mono k" style="margin-top:8px">Autoportrait —</p>';

  /* ---------- apparition au défilement ---------- */
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  } else els.forEach(function (el) { el.classList.add("in"); });

  /* ---------- barre : statut de page ---------- */
  var bar = $("bar"), status = $("status"), secs = document.querySelectorAll(".serie");
  function onScroll() {
    bar.classList.toggle("scrolled", window.scrollY > 10);
    var cur = null, mid = window.innerHeight * 0.4;
    secs.forEach(function (s) { var r = s.getBoundingClientRect(); if (r.top < mid && r.bottom > mid) cur = s; });
    status.textContent = cur ? "Série " + cur.dataset.n + " — " + cur.dataset.title + " · Page " + cur.dataset.n + " / " + pad(total) : "Registre d'images · " + S.volume;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- visionneuse ---------- */
  var lb = $("lb"), media = $("lb-media"), lbCap = $("lb-cap"), at = 0, last = null;
  function show(i) {
    at = (i + gallery.length) % gallery.length;
    var g = gallery[at], p = g.p;
    media.innerHTML = p.src
      ? '<img src="' + esc(p.src) + '" alt="' + esc(p.caption || g.serie) + '">'
      : '<div class="ph empty tone-' + g.tone + '" style="aspect-ratio:' + (p.ratio || "3/2") + '" data-label="' + esc(g.label) + '"></div>';
    lbCap.textContent = g.serie + " — " + (p.caption || g.label) + "   " + pad(at + 1) + " / " + pad(gallery.length);
  }
  function open(i) {
    last = document.activeElement; show(i); lb.hidden = false;
    requestAnimationFrame(function () { lb.classList.add("open"); });
    document.body.style.overflow = "hidden"; lb.querySelector(".lb-close").focus();
  }
  function close() {
    lb.classList.remove("open"); document.body.style.overflow = "";
    setTimeout(function () { lb.hidden = true; }, 300); if (last) last.focus();
  }
  document.addEventListener("click", function (e) {
    var ph = e.target.closest(".ph[data-i]");
    if (ph && !lb.contains(ph)) return open(+ph.dataset.i);
    var b = e.target.closest("[data-lb]");
    if (b) { var a = b.dataset.lb; if (a === "close") close(); else show(at + (a === "next" ? 1 : -1)); }
    else if (e.target === lb) close();
  });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) {
      if ((e.key === "Enter" || e.key === " ") && e.target.matches(".ph[data-i]")) { e.preventDefault(); open(+e.target.dataset.i); }
      return;
    }
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") show(at + 1);
    if (e.key === "ArrowLeft") show(at - 1);
  });
})();
