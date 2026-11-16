# Page « plongée » de Maison Isobathe — appelée par build.py
import os, re

def build_plongee(i, b):
    """b : module build (helpers img, zoom_attrs, head, nav, footer, e, ARROW, IMG, PROJECTS)."""
    img, zoom_attrs, e, ARROW, IMG = b.img, b.zoom_attrs, b.e, b.ARROW, b.IMG
    PROJECTS = b.PROJECTS
    pr = PROJECTS[i]
    p = '../'
    nxt = PROJECTS[(i + 1) % len(PROJECTS)]

    def svg_inline(name, cls=''):
        s = open(os.path.join(IMG, 'isobathe', name)).read()
        return s.replace('<svg ', f'<svg class="{cls}" aria-hidden="true" ', 1)

    h = b.head(p, f"{pr['title']} — Eliott Buchaille", pr['teaser'], 'dive-root')
    h = h.replace('</head>', f'<link rel="stylesheet" href="{p}assets/css/dive.css">\n<link rel="preload" href="{p}assets/fonts/pinyon-script.woff2" as="font" type="font/woff2" crossorigin>\n</head>')
    h = h.replace('<body>', '<body class="dive-page">')
    fil_src = open(os.path.join(IMG, 'isobathe', 'fil.svg')).read()
    fil_path = re.search(r'<path d="([^"]+)"', fil_src).group(1)
    fil_vb = re.search(r'viewBox="([^"]+)"', fil_src).group(1)

    def fl(name, alt, sizes='(max-width: 860px) 100vw, 75vw'):
        return (f'<div class="float zoom" {zoom_attrs(p, name, alt)} role="button" tabindex="0" '
                f'aria-label="Agrandir : {e(alt)}">{img(p, name, alt, sizes)}</div>')

    def fig(cls, name, alt, sizes, d='0s', cap=True):
        c = f'<figcaption class="dv-cap">{e(alt)}.</figcaption>' if cap else ''
        return f'<figure class="{cls} reveal" style="margin:0;--d:{d}">{fl(name, alt, sizes)}{c}</figure>'

    def mark(depth, label):
        return f'<div class="depth-mark reveal"><b>{depth}</b><i></i>{e(label)}</div>'

    def chapter(depth, label, title, body, pts=None):
        points = ''
        if pts:
            points = '<ul class="points">' + ''.join(f'<li><b>{e(k)}</b><span>{v}</span></li>' for k, v in pts) + '</ul>'
        return (f'<section class="dv-sec"><div class="wrap chapter-grid">'
                f'<div class="c-head">{mark(depth, label)}<h2 class="h2 reveal" style="--d:.08s">{title}</h2></div>'
                f'<div class="c-body body reveal" style="--d:.16s">{body}{points}</div></div></section>')

    def space(n, name, title, text):
        s = '(max-width: 860px) 100vw, 75vw'
        return (f'<div class="space"><div class="float reveal-color reveal" {zoom_attrs(p, name, title)} role="button" tabindex="0" aria-label="Agrandir : {e(title)}">'
                f'{img(p, name + "-duo", title + " (bichromie)", s)}<div class="col">{img(p, name, title, s)}</div><span class="seam"></span></div>'
                f'<div class="txt reveal" style="--d:.12s"><span class="n">{n}</span><h3>{title}</h3><p>{text}</p></div></div>')

    facts = ''.join(f'<div class="fact reveal" style="--d:{j * .05:.2f}s"><div class="k">{e(k)}</div><div class="v">{e(v)}</div></div>'
                    for j, (k, v) in enumerate(pr['facts']))
    palette = [('Brume', '#AAC7D7', '#003562', 'Surface, lumière filtrée'), ('Nacre', '#F4F1EA', '#003562', 'Papier, fonds clairs'),
               ('Grève', '#E6DCC3', '#003562', 'Bois clair, dorure'), ('Houle', '#6C91AC', '#F4F1EA', 'Couloir de vente'),
               ('Abysse', '#003562', '#F4F1EA', 'Couleur maîtresse'), ('Nuit', '#0D1C24', '#F4F1EA', 'Eau profonde')]
    pal = ''.join(f'<div style="background:{c};color:{t}"><b>{n}</b><span>{c}</span><span style="margin-top:6px">{d}</span></div>'
                  for n, c, t, d in palette)

    out = [h]
    out.append('''<div class="dive-bg" aria-hidden="true">
 <div class="dv-glow"></div>
 <div class="dv-rays"><i></i><i></i><i></i><i></i><i></i></div>
 <div class="dv-caustics"></div>
 <div class="dv-motif"></div>
 <canvas class="dv-snow"></canvas>
 <div class="dv-vignette"></div>
</div>
<div class="gauge" aria-hidden="true"><span class="rail"></span><span class="ticks"></span><span class="needle"></span><span class="val"><b>0 m</b><small>Profondeur</small></span></div>
''')
    out.append(b.nav(p, 'projets'))
    S = []
    S.append(f'''<main id="contenu">
<section class="dv-hero">
 <div class="inner">
  <div class="kick"><i></i>Boutique de plongée · Lyon 5e<i></i></div>
  <h1 class="sr-only">Maison Isobathe</h1>
  {svg_inline('logo.svg', 'logo')}
  <p class="sub">Une boutique de plongée qui se visite comme une descente : du bleu clair de l'entrée jusqu'à l'abysse.</p>
 </div>
 <svg class="surface-line" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 45 C 180 20 360 70 540 45 S 900 20 1080 45 S 1320 70 1440 45"/><path d="M0 60 C 200 40 380 80 560 60 S 920 38 1100 60 S 1330 80 1440 60" style="opacity:.2"/></svg>
 <a class="descend" href="#plonger">Plonger<span></span></a>
</section>
<div class="facts dv" id="plonger"><div class="wrap">{facts}</div></div>
''')
    S.append(chapter('–3 m', 'Le nom', "La ligne qui relie <em>les mêmes profondeurs</em>.",
        "<p>Sur une carte marine, une <strong>isobathe</strong> relie tous les points situés à la même profondeur. Le nom dit le calme et la précision : c'est le langage des plongeurs, rare et juste.</p>"
        "<p>« Maison » ajoute l'idée d'un lieu habité et d'un savoir-faire. Le mot est écrit à la main, comme on note une plongée dans son carnet.</p>"))
    S.append(f'<div class="dv-wide reveal">{fl("isb-entree", "L’entrée : l’aquarium central et le rocher", "100vw")}<p class="dv-cap">L’entrée : l’aquarium central et le rocher, première vision de la boutique.</p></div>')
    S.append(chapter('–8 m', 'Le concept', "Visiter la boutique, <em>c'est descendre</em>.",
        "<p>Un dégradé du clair au foncé accompagne le parcours, comme la lumière qui décline sous la surface. On entre dans le bleu pâle de l'aquarium et l'on termine dans le bleu nuit de l'espace location.</p>"
        "<p>Au sol, une <strong>rivière</strong> relie les zones et guide le regard d'un bout à l'autre du local.</p>",
        [('Lieu', 'Rue de la Quarantaine, au cœur du 5<sup>e</sup> arrondissement'), ('Programme', 'Vente et exposition, caisse, location, essayage, stock'),
         ('Matières', 'Pierre, résine claire, bois clair, verre et métal')]))
    S.append(f'''<div class="wrap fil-wrap reveal">
 <div class="float">{img(p, 'isb-plan', 'Plan colorimétrique redessiné aux couleurs de la marque', '(max-width: 860px) 100vw, 1240px')}
  <svg class="fil" viewBox="{fil_vb}" preserveAspectRatio="none" aria-hidden="true"><path d="{fil_path}" fill="none"/></svg>
 </div>
 <p class="dv-cap">Le fil : le parcours relevé sur le plan, de l'entrée jusqu'à l'espace location.</p>
</div>''')
    S.append(chapter('–14 m', "L'identité", "Une maison, <em>pas une enseigne</em>.",
        "<p>L'identité emprunte à l'hôtellerie et à l'horlogerie plutôt qu'au sport : un Didone élancé, une écriture manuscrite et un symbole tiré des cartes marines, des isobathes emboîtées.</p>"
        "<p>Le monogramme IB et le sceau signent les petits supports : étiquettes, carnet, broderie.</p>"))
    S.append(f'''<div class="wrap">
 <div class="id-grid">
  <figure class="glass id-tile wide reveal" style="margin:0">{svg_inline('logo.svg')}<figcaption>Logotype</figcaption></figure>
  <figure class="glass id-tile reveal" style="margin:0;--d:.08s">{svg_inline('symbole.svg')}<figcaption>Symbole isobathes</figcaption></figure>
  <figure class="glass id-tile reveal" style="margin:0;--d:.16s">{svg_inline('monogramme.svg')}<figcaption>Monogramme</figcaption></figure>
 </div>
 <div class="depth-palette reveal">{pal}</div>
 <div class="type-row">
  <div class="glass reveal"><span class="big" style="font-family:var(--serif)">Aa</span><small>Bodoni Moda · titres et chiffres</small></div>
  <div class="glass reveal" style="--d:.08s"><span class="big" style="font-family:var(--script)">Plonger</span><small>Pinyon Script · un mot, jamais plus</small></div>
  <div class="glass reveal" style="--d:.16s"><span class="big" style="font-family:var(--sans);font-weight:300;letter-spacing:.2em;font-size:clamp(26px,2.6vw,36px)">LABELS</span><small>Capitales espacées · légendes</small></div>
 </div>
</div>''')
    S.append(chapter('–20 m', 'Les applications', "De l'enseigne <em>au carnet de plongée</em>.",
        "<p>La marque se décline sur tout ce que le client touche : l'enseigne en façade, la papeterie, le sac et la boîte, les étiquettes de vente et de location, la signalétique des cinq zones, l'uniforme brodé et le carnet de plongée.</p>"))
    S.append('<div class="wrap apps-grid">' + ''.join([
        fig('s6', 'isb-facade', "L’enseigne en photomontage sur la façade existante", '100vw'),
        fig('s3', 'isb-m-affiche', 'Affiche A3', '50vw', cap=False),
        fig('s3', 'isb-m-papeterie', 'Papeterie', '50vw', '.08s', cap=False),
        fig('s2', 'isb-m-etiquettes', 'Étiquettes produit et location', '33vw', cap=False),
        fig('s2', 'isb-m-sac', 'Sac et boîte', '33vw', '.08s', cap=False),
        fig('s2', 'isb-m-carnet', 'Carnet de plongée', '33vw', '.16s', cap=False),
        fig('s4', 'isb-m-signaletique', 'Signalétique des cinq zones', '66vw', cap=False),
        fig('s2', 'isb-m-uniforme', 'Uniforme brodé', '33vw', '.08s', cap=False)]) + '</div>')
    S.append(chapter('–27 m', "L'architecture", "Cinq zones, <em>une seule rivière</em>.",
        "<p>Le zoning organise le local en cinq temps : vente et exposition, caisse, location, essayage et stock. Les flux des clients et du personnel ne se croisent pas.</p>"
        "<p>Les coupes montrent l'aquarium, l'estrade et la verrière qui apporte la lumière du jour au fond de la boutique.</p>"))
    S.append('<div class="wrap"><div class="plan-grid">' + ''.join([
        fig('', 'isb-zoning', 'Zoning de l’équipe', '(max-width: 760px) 100vw, 50vw'),
        fig('', 'isb-flux', 'Flux clients et personnel', '(max-width: 760px) 100vw, 50vw', '.08s'),
        fig('', 'isb-coupe-aa', "Coupe AA’", '(max-width: 760px) 100vw, 50vw'),
        fig('', 'isb-coupe-bb', "Coupe BB’", '(max-width: 760px) 100vw, 50vw', '.08s')]) + '</div></div>')
    S.append(f'''<section class="dv-sec" style="padding-bottom:0"><div class="wrap">
 {mark('–33 m', 'Les espaces')}
 <h2 class="h1 reveal" style="--d:.08s;margin-top:22px;max-width:16ch">Plus on descend, plus <em>la couleur revient</em>.</h2>
 <p class="lead reveal" style="--d:.16s;margin-top:22px">Chaque rendu apparaît d'abord en bichromie Abysse, puis retrouve ses couleurs en défilant, comme sous la lampe du plongeur.</p>
 {space('01', 'isb-vente', 'Les arches de vente', "Des niches cintrées et éclairées présentent les bouteilles comme des pièces de collection.")}
 {space('02', 'isb-couloir', 'Le couloir des plongeurs', "Des silhouettes de plongeurs suspendues au-dessus de la rivière accompagnent le passage vers le fond.")}
 {space('03', 'isb-location', 'La location', "Dans le bleu nuit de l'espace location, les combinaisons se rangent par couleur autour d'un îlot central.")}
 {space('04', 'isb-caisse', 'La caisse et le rocher', "Le comptoir prend la forme d'un rocher posé dans la rivière, au pied de l'aquarium.")}
</div></section>''')
    S.append(chapter('–37 m', 'Le dessin', "Avant les rendus, <em>le croquis</em>.",
        "<p>L'aquarium cylindrique et la banquette « anémone » sont nés au crayon : des formes organiques qui répondent à la rigueur du plan.</p>"))
    S.append('<div class="wrap"><div class="plan-grid">' + ''.join([
        fig('', 'isb-croquis-aquarium', 'Croquis de l’aquarium', '(max-width: 760px) 100vw, 50vw'),
        fig('', 'isb-croquis-banquette', 'Croquis de la banquette anémone', '(max-width: 760px) 100vw, 50vw', '.08s')]) + '</div></div>')
    S.append(f'''<section class="seabed">
 <div class="wrap">
  {svg_inline('sceau.svg', 'sceau reveal')}
  <p class="eyebrow reveal" style="color:rgba(244,241,234,.55)">–40 m · Le fond</p>
  <h2 class="h1 reveal" style="--d:.08s;margin-top:14px">Maison <em>Isobathe</em></h2>
  <p class="reveal" style="--d:.16s">L'architecture vient du projet de groupe de 3<sup>e</sup> année. L'identité Maison Isobathe est une proposition de rebranding réalisée en 2026 à partir de ce projet.</p>
  <div class="credits reveal" style="--d:.22s">
   <span>Projet</span><span>CREAD 3<sup>e</sup> année · 2024</span>
   <span>Équipe</span><span>Eliott Buchaille, Ermias Hilaire, Baptiste Linet</span>
   <span>Identité</span><span>Rebranding 2026 · proposition</span>
  </div>
 </div>
</section>
<a class="next" href="{nxt['slug']}.html">
 <div class="bg">{img(p, nxt['cover'], '', '100vw')}</div>
 <div class="wrap"><p class="eyebrow">Remonter à la surface · projet suivant</p><p class="h1">{e(nxt['title'])}</p>
 <span class="link-arrow" style="color:var(--cream);margin-top:22px"><span class="line">{e(nxt['kicker'])}</span>{ARROW}</span></div>
</a>
</main>
''')
    out.append('\n'.join(S))
    f = b.footer(p).replace('<script src="../assets/js/site.js" defer></script>',
                            '<script src="../assets/js/site.js" defer></script>\n<script src="../assets/js/dive.js" defer></script>')
    out.append(f)
    return ''.join(out)
