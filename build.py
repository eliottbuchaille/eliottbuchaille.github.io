#!/usr/bin/env python3
"""Génère le site statique (index, pages projets, rendus 3D).

Usage : python3 build.py
Le contenu est dans content.py ; le style dans assets/css/site.css.
"""
import html, os
from PIL import Image
from content import SITE, PROJECTS, RENDERS, RENDER_CATS, SKILLS, TIMELINE

ROOT = os.path.dirname(os.path.abspath(__file__))
IMG = os.path.join(ROOT, 'assets', 'img')
MONO_VB = '2.60 -75.00 116.00 75.00'
MONO = open(os.path.join(ROOT, 'assets', 'img', 'eb-paths.txt')).read().strip().splitlines()
e = html.escape

_dims = {}
def dims(name):
    if name not in _dims:
        with Image.open(os.path.join(IMG, f'{name}-1200.webp')) as im:
            _dims[name] = im.size
    return _dims[name]

def mono(cls='', extra=''):
    paths = f'<path d="{MONO[0]}"/><path transform="translate(54.80 0)" d="{MONO[1]}"/>'
    return f'<svg class="{cls}" viewBox="{MONO_VB}" aria-hidden="true" {extra}>{paths}</svg>'

ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M4 12h15M13 6l6 6-6 6"/></svg>'

def img(p, name, alt, sizes='100vw', cls='', attrs='', eager=False):
    w, h = dims(name)
    src = f'{p}assets/img/{name}'
    load = 'eager" fetchpriority="high' if eager else 'lazy'
    return (f'<img src="{src}-1200.webp" srcset="{src}-1200.webp 1200w, {src}-2400.webp 2400w" '
            f'sizes="{sizes}" width="{w}" height="{h}" alt="{e(alt)}" loading="{load}" decoding="async" class="{cls}" {attrs}>')

def zoom_attrs(p, name, alt):
    return f'data-zoom="{p}assets/img/{name}-2400.webp" data-alt="{e(alt)}"'

# --------------------------------------------------------------------------
def head(p, title, desc, page_class=''):
    return f'''<!DOCTYPE html>
<html lang="fr" class="hero-load {page_class}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{e(title)}</title>
<meta name="description" content="{e(desc)}">
<meta name="author" content="Eliott Buchaille">
<meta name="theme-color" content="#F4EFE9">
<meta property="og:title" content="{e(title)}">
<meta property="og:description" content="{e(desc)}">
<meta property="og:type" content="website">
<meta property="og:image" content="{p}assets/img/og.jpg">
<link rel="icon" href="{p}assets/img/favicon.svg" type="image/svg+xml">
<script>
(function(){{var d=document.documentElement,q=new URLSearchParams(location.search).get('theme'),s=null;
try{{s=localStorage.getItem('eb-theme')}}catch(e){{}}
var t=(q==='light'||q==='dark')?q:(s||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
d.setAttribute('data-theme',t);}})();
</script>
<link rel="preload" href="{p}assets/fonts/bodoni-moda-latin-opsz-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="{p}assets/fonts/outfit-latin-300-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="{p}assets/css/site.css">
</head>
<body>
<a class="sr-only" href="#contenu">Aller au contenu</a>
'''

def nav(p, current=''):
    def link(href, label, key):
        cur = ' aria-current="page"' if key == current else ''
        return f'<a href="{href}"{cur}>{label}</a>'
    return f'''<header class="nav">
 <div class="wrap">
  <a class="brand" href="{p}index.html" aria-label="Eliott Buchaille, accueil">{mono()}<span>Eliott Buchaille</span></a>
  <nav class="nav-links" id="menu" aria-label="Navigation principale">
   {link(p + 'index.html#projets', 'Projets', 'projets')}
   {link(p + 'rendus.html', 'Rendus 3D', 'rendus')}
   {link(p + 'index.html#parcours', 'Parcours', 'parcours')}
   {link(p + 'index.html#contact', 'Contact', 'contact')}
   <button class="theme-toggle" type="button" aria-label="Changer de thème (clair / sombre)">
    <svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>
    <svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
   </button>
  </nav>
  <button class="menu-btn" type="button" aria-label="Menu" aria-controls="menu" aria-expanded="false"><i></i><i></i></button>
 </div>
</header>
'''

def footer(p):
    return f'''<footer class="footer">
 <div class="wrap">
  <a class="brand" href="{p}index.html">{mono()}<span>Eliott Buchaille</span></a>
  <span>Architecture intérieure · Lyon — Annecy — Suisse</span>
  <span>© <span data-year></span> Eliott Buchaille · « Architecture is just art we live in »</span>
 </div>
</footer>
<script src="{p}assets/js/site.js" defer></script>
</body>
</html>
'''

def contact_block(p):
    c = SITE['contact']
    return f'''<section class="contact halo grain" id="contact">
 {mono('mono-big')}
 <div class="wrap">
  <p class="eyebrow reveal" style="color:#d8d0c5">Contact</p>
  <h2 class="display reveal" style="--d:.1s">Créons des lieux qui <em>se ressentent</em>.</h2>
  <div class="contact-grid">
   <div class="reveal" style="--d:.15s"><div class="k">E-mail</div><a href="mailto:{c['email']}">{c['email']}</a></div>
   <div class="reveal" style="--d:.22s"><div class="k">Téléphone</div><a href="tel:{c['tel'].replace(' ', '')}">{c['tel']}</a></div>
   <div class="reveal" style="--d:.29s"><div class="k">Secteurs</div><span class="v">{e(c['zones'])}</span></div>
  </div>
 </div>
</section>
'''

# --------------------------------------------------------------------------
def build_index():
    p = ''
    out = [head(p, 'Eliott Buchaille — Architecture intérieure', SITE['desc'])]
    out.append(nav(p))
    out.append(f'''<main id="contenu">
<section class="hero" aria-label="Introduction">
 <div class="hero-media">{img(p, 'hero', 'Escalier hélicoïdal en chêne et mur de pierre, baie ouverte sur le jardin', attrs='data-hero-parallax', eager=True)}</div>
 <div class="hero-inner">
  <div class="wrap">
   <h1>Des espaces<br>qui se <em>ressentent</em>.</h1>
   <div class="sig">{mono()}<div><b>ELIOTT BUCHAILLE</b><small>ARCHITECTURE INTÉRIEURE</small></div></div>
  </div>
 </div>
 <div class="scroll-cue" aria-hidden="true"></div>
</section>

<section class="statement">
 <div class="wrap">
  <p class="eyebrow reveal" style="margin-bottom:28px">Manifeste</p>
  <p data-words>{SITE['statement']}</p>
  <div class="meta">
   <div class="stat reveal"><b>{len(PROJECTS)}</b><span>projets présentés</span></div>
   <div class="stat reveal" style="--d:.1s"><b>5<sup style="font-size:.45em">e</sup></b><span>année · CREAD Lyon</span></div>
   <div class="stat reveal" style="--d:.2s"><b>RNCP 7</b><span>titre visé · 2027</span></div>
  </div>
 </div>
</section>

<section class="section alt" id="projets">
 <div class="wrap">
  <div class="section-head">
   <div><p class="eyebrow reveal">Sélection</p><h2 class="h1 reveal" style="--d:.08s;margin-top:14px">Projets</h2></div>
   <p class="lead reveal" style="--d:.16s">Tertiaire, hôtellerie-restauration, retail et résidentiel : chaque projet part d'un récit et se termine dans le détail.</p>
  </div>
  <div class="work">''')
    for i, pr in enumerate(PROJECTS):
        wide = ' wide' if pr.get('wide') else ''
        ratio = 'r-21-9' if wide else 'r-3-2'
        sizes = '100vw' if wide else '(max-width: 860px) 100vw, 66vw'
        tags = ''.join(f'<span>{e(t)}</span>' for t in pr['tags'])
        info_inner = f'''<div><span class="work-num">{i + 1:02d}</span>
      <h3><small>{e(pr['kicker'])}</small>{e(pr['title'])}</h3></div>
      <div><p>{e(pr['teaser'])}</p><div class="tags">{tags}</div>
      <span class="link-arrow"><span class="line">Découvrir le projet</span>{ARROW}</span></div>'''
        out.append(f'''
   <a class="work-item{wide}" href="projets/{pr['slug']}.html" style="--vt:p-{pr['slug']}">
    <div class="media {ratio} reveal-img">{img(p, pr['cover'], pr['cover_alt'], sizes, attrs=f'style="view-transition-name:p-{pr["slug"]}"')}</div>
    <div class="info reveal" style="--d:.12s">{info_inner}</div>
   </a>''')
    out.append('''
  </div>
 </div>
</section>
''')
    # bandeau rendus
    picks = [r for r in RENDERS if r.get('home')]
    tiles = ''.join(f'''<figure class="tile"><div class="media">{img(p, r['img'], r['alt'], '(max-width: 760px) 80vw, 42vw')}</div><figcaption>{e(r['alt'])}</figcaption></figure>''' for r in picks)
    out.append(f'''<section class="hscroll" aria-label="Rendus 3D">
 <div class="hscroll-sticky">
  <div class="wrap hscroll-head">
   <div class="section-head" style="margin:0">
    <div><p class="eyebrow">Atelier 3D</p><h2 class="h1" style="margin-top:14px">Rendus</h2></div>
    <a class="link-arrow" href="rendus.html"><span class="line">Voir toute la galerie</span>{ARROW}</a>
   </div>
  </div>
  <div class="hscroll-track">{tiles}</div>
 </div>
</section>
''')
    # savoir-faire
    skills = ''.join(f'<div class="skill reveal" style="--d:{i * .04:.2f}s"><b>{e(n)}</b><span>{e(d)}</span></div>' for i, (n, d) in enumerate(SKILLS))
    out.append(f'''<section class="section" id="apropos">
 <div class="wrap">
  <div class="chapter-grid">
   <div class="c-head"><p class="eyebrow reveal">À propos</p><h2 class="h2 reveal" style="--d:.08s;margin-top:16px">{SITE['about_title']}</h2></div>
   <div class="c-body body reveal" style="--d:.16s">{SITE['about']}</div>
  </div>
  <div style="margin-top:clamp(56px,8vw,96px)">
   <p class="eyebrow reveal" style="margin-bottom:22px">Outils</p>
   <div class="skills">{skills}</div>
  </div>
 </div>
</section>
''')
    tl = ''.join(f'''<div class="tl reveal"><div class="when">{e(t['when'])}</div><div><h3>{e(t['title'])}</h3><div class="where">{e(t['where'])}</div></div><p>{e(t['text'])}</p></div>''' for t in TIMELINE)
    out.append(f'''<section class="section alt" id="parcours">
 <div class="wrap">
  <div class="section-head"><div><p class="eyebrow reveal">Parcours</p><h2 class="h1 reveal" style="--d:.08s;margin-top:14px">Formation &amp; expérience</h2></div></div>
  <div class="timeline">{tl}</div>
 </div>
</section>
''')
    out.append(contact_block(p))
    out.append('</main>\n')
    out.append(footer(p))
    return ''.join(out)

# --------------------------------------------------------------------------
def block(p, b, accent):
    t = b[0]
    if t == 'chapter':
        _, num, eyebrow, title, body, *rest = b
        pts = rest[0] if rest else None
        points = ''
        if pts:
            points = '<ul class="points">' + ''.join(f'<li><b>{e(k)}</b><span>{v}</span></li>' for k, v in pts) + '</ul>'
        return f'''<section class="chapter"><div class="wrap chapter-grid">
 <div class="c-head"><span class="c-num reveal">{num}</span> <span class="eyebrow reveal">{e(eyebrow)}</span><h2 class="h2 reveal" style="--d:.08s">{title}</h2></div>
 <div class="c-body body reveal" style="--d:.16s">{body}{points}</div>
</div></section>'''
    if t == 'bleed':
        _, name, alt, size = b
        return f'''<figure class="bleed {size}" style="margin:0">{img(p, name, alt, attrs='data-parallax')}</figure>
<div class="wrap"><p class="cap">{e(alt)}</p></div>'''
    if t in ('pair', 'trio'):
        _, items = b
        figs = []
        for j, it in enumerate(items):
            name, alt = it[0], it[1]
            opt = it[2] if len(it) > 2 else ''
            ratio = 'r-4-5' if 'portrait' in opt else 'r-3-2'
            if t == 'trio' and j == 0: ratio = ''
            contain = (' contain' if 'contain' in opt else '') + (' contain nuit' if 'nuit' in opt else '')
            style = ' style="height:100%"' if (t == 'trio' and j == 0) else ''
            figs.append(f'''<figure style="margin:0" class="reveal" ><div class="media {ratio}{contain}"{style} {zoom_attrs(p, name, alt)} role="button" tabindex="0" aria-label="Agrandir : {e(alt)}">{img(p, name, alt, '(max-width: 760px) 100vw, 50vw')}</div><figcaption class="cap">{e(alt)}</figcaption></figure>''')
        return f'<div class="wrap" style="padding-block:clamp(20px,3vw,40px)"><div class="{t}">{"".join(figs)}</div></div>'
    if t == 'swatches':
        _, title, sw = b
        chips = ''.join(f'<div class="swatch reveal" style="--d:{i * .05:.2f}s"><div class="chip" style="background:{c}"></div><b>{e(n)}</b><span>{e(d)}</span></div>' for i, (n, c, d) in enumerate(sw))
        return f'<div class="wrap" style="padding-block:clamp(30px,5vw,70px)"><p class="eyebrow reveal">{e(title)}</p><div class="swatches">{chips}</div></div>'
    if t == 'personas':
        _, items = b
        cards = ''.join(f'<div class="pcard reveal" style="--d:{i * .08:.2f}s"><div class="n">{i + 1:02d}</div><h4>{e(n)}</h4><div class="role">{e(r)}</div><p>{e(d)}</p></div>' for i, (n, r, d) in enumerate(items))
        return f'<div class="wrap" style="padding-bottom:clamp(60px,9vw,120px)"><p class="eyebrow reveal" style="margin-bottom:26px">Personas</p><div class="cards3">{cards}</div></div>'
    if t == 'apex':
        return APEX_CARD
    if t == 'notice':
        return f'<div class="wrap" style="padding-block:24px"><div class="notice">{b[1]}</div></div>'
    if t == 'html':
        return b[1]
    raise ValueError(t)

APEX_LOGO = lambda c1, c2: f'<svg viewBox="0 0 80 80" width="{{s}}" height="{{s}}" aria-hidden="true"><path d="M0 80L30 0H52L22 80Z" fill="{c1}"/><rect x="58" y="0" width="22" height="80" fill="{c1}"/><path d="M35.5 44H58V58H30.25Z" fill="{c2}"/></svg>'
APEX_CARD = f'''<div class="wrap" style="padding-block:clamp(20px,4vw,60px)">
 <div class="brandcard reveal">
  <div class="l">
   <div style="display:flex;justify-content:space-between" class="apex-sp"><span>APEX — Drive &amp; Drink</span><span>Formula 1 club · Lyon</span></div>
   <div>{APEX_LOGO('#F1F0EA', '#C1121C').replace('{s}', '96')}<div class="apex-word" style="margin-top:22px">APEX</div></div>
   <p class="apex-sp" style="opacity:.8;max-width:42ch;line-height:1.5">L'apex, c'est le point de corde : l'endroit exact où le pilote frôle l'intérieur du virage avant de réaccélérer.</p>
  </div>
  <div class="r">
   <p class="apex-sp" style="color:#C1121C">Architecture de marque</p>
   <p>APEX devient la marque ; « Drive &amp; Drink » reste la signature du concept : piloter, puis partager un verre. Quatre lettres, une syllabe, lisibles de loin et comprises partout.</p>
   <div class="apex-subs apex-sp">
    <div><span>APEX Pit Bar</span><span style="opacity:.6">Bar circuit</span></div>
    <div><span>APEX Paddock</span><span style="opacity:.6">Lounge</span></div>
    <div><span>APEX Sim</span><span style="opacity:.6">Simulateurs</span></div>
    <div><span>APEX Grid</span><span style="opacity:.6">Cinéma</span></div>
    <div><span>APEX Store</span><span style="opacity:.6">Boutique</span></div>
   </div>
   <p style="font-size:13.5px">Typographie : Archivo Expanded pour les titres et les chiffres, comme des numéros de course ; Inter Tight pour le texte.</p>
  </div>
 </div>
</div>'''

def build_project(i):
    pr = PROJECTS[i]
    p = '../'
    nxt = PROJECTS[(i + 1) % len(PROJECTS)]
    h = head(p, f"{pr['title']} — Eliott Buchaille", pr['teaser'])
    out = [h, nav(p, 'projets')]
    facts = ''.join(f'<div class="fact reveal" style="--d:{j * .05:.2f}s"><div class="k">{e(k)}</div><div class="v">{e(v)}</div></div>' for j, (k, v) in enumerate(pr['facts']))
    style = f' style="--accent:{pr["accent"]}"' if pr.get('accent') else ''
    out.append(f'''<main id="contenu"{style}>
<section class="p-hero">
 <div class="hero-media">{img(p, pr['cover'], pr['cover_alt'], attrs=f'data-hero-parallax style="view-transition-name:p-{pr["slug"]}"', eager=True)}</div>
 <div class="hero-inner"><div class="wrap">
  <div class="kicker"><i></i>{e(pr['kicker'])}</div>
  <h1>{e(pr['title'])}</h1>
  <p class="sub">{e(pr['subtitle'])}</p>
 </div></div>
</section>
<div class="facts"><div class="wrap">{facts}</div></div>
''')
    for b in pr['blocks']:
        out.append(block(p, b, pr.get('accent')))
    out.append(f'''
<a class="next" href="{nxt['slug']}.html">
 <div class="bg">{img(p, nxt['cover'], '', '100vw')}</div>
 <div class="wrap"><p class="eyebrow">Projet suivant</p><p class="h1">{e(nxt['title'])}</p>
 <span class="link-arrow" style="color:var(--cream);margin-top:22px"><span class="line">{e(nxt['kicker'])}</span>{ARROW}</span></div>
</a>
</main>
''')
    out.append(footer(p))
    return ''.join(out)

def build_rendus():
    p = ''
    out = [head(p, 'Rendus 3D — Eliott Buchaille', 'Galerie de rendus 3D : chalet, intérieurs mid-century et néo-classiques, ERP, villas.'), nav(p, 'rendus')]
    cover = RENDERS[0]
    btns = '<button type="button" data-f="all" aria-pressed="true">Tout</button>' + ''.join(f'<button type="button" data-f="{k}" aria-pressed="false">{e(v)}</button>' for k, v in RENDER_CATS)
    figs = ''.join(f'''<figure class="reveal" data-cat="{r['cat']}"><div class="media" {zoom_attrs(p, r['img'], r['alt'])} role="button" tabindex="0" aria-label="Agrandir : {e(r['alt'])}">{img(p, r['img'], r['alt'], '(max-width: 760px) 100vw, 33vw')}</div><figcaption class="cap">{e(r['alt'])}</figcaption></figure>''' for r in RENDERS)
    out.append(f'''<main id="contenu">
<section class="p-hero">
 <div class="hero-media">{img(p, 'r-chalet-4', 'Chambre de chalet sous charpente, mur de pierre et vue sur les sommets enneigés', attrs='data-hero-parallax', eager=True)}</div>
 <div class="hero-inner"><div class="wrap">
  <div class="kicker"><i></i>Atelier 3D</div>
  <h1>Rendus</h1>
  <p class="sub">Des ambiances explorées pour le plaisir de la lumière et de la matière : chalet alpin, mid-century, néo-classique, ERP et villas.</p>
 </div></div>
</section>
<section class="section">
 <div class="wrap">
  <div class="chapter-grid" style="margin-bottom:clamp(40px,6vw,80px)">
   <div class="c-head"><p class="eyebrow reveal">Méthode</p><h2 class="h2 reveal" style="--d:.08s;margin-top:16px">Modéliser, éclairer, raconter.</h2></div>
   <div class="c-body body reveal" style="--d:.16s">{SITE['rendus_intro']}</div>
  </div>
  <div class="filters reveal" role="group" aria-label="Filtrer les rendus">{btns}</div>
  <div class="gallery">{figs}</div>
 </div>
</section>
''')
    out.append(contact_block(p))
    out.append('</main>\n')
    out.append(footer(p))
    return ''.join(out)

if __name__ == '__main__':
    os.makedirs(os.path.join(ROOT, 'projets'), exist_ok=True)
    open(os.path.join(ROOT, 'index.html'), 'w').write(build_index())
    for i, pr in enumerate(PROJECTS):
        open(os.path.join(ROOT, 'projets', pr['slug'] + '.html'), 'w').write(build_project(i))
    open(os.path.join(ROOT, 'rendus.html'), 'w').write(build_rendus())
    print('ok:', 2 + len(PROJECTS), 'pages')
