# Habillage immersif des pages projets (appelé par build.py)
import random


def hop_svg():
    w, h = 28, 28
    rows = [[1], [2, 3], [4], [5, 6], [7], [8, 9], [10]]
    parts = []
    for r, row in enumerate(rows):
        y = r * h
        if len(row) == 1:
            parts.append((row[0], f'<rect class="cell" data-n="{row[0]}" x="16" y="{y}" width="{w}" height="{h}"/>', 30, y + h / 2))
        else:
            parts.append((row[0], f'<rect class="cell" data-n="{row[0]}" x="2" y="{y}" width="{w}" height="{h}"/>', 16, y + h / 2))
            parts.append((row[1], f'<rect class="cell" data-n="{row[1]}" x="30" y="{y}" width="{w}" height="{h}"/>', 44, y + h / 2))
    parts.sort(key=lambda t: t[0])
    y = len(rows) * h
    cells = ''.join(c for _, c, _, _ in parts)
    cells += f'<path class="cell" d="M2 {y} L58 {y} A28 26 0 0 1 2 {y} Z"/>'
    labels = ''.join(f'<text x="{x}" y="{yy}">{n}</text>' for n, _, x, yy in parts)
    labels += f'<text x="30" y="{y + 12}" style="font-style:italic">Ciel</text>'
    filt = ('<filter id="chalk"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="3"/>'
            '<feDisplacementMap in="SourceGraphic" scale="1.6"/></filter>')
    return (f'<div class="hop" aria-hidden="true"><svg viewBox="0 -4 60 {y + 34}"><defs>{filt}</defs>'
            f'<g filter="url(#chalk)">{cells}</g>{labels}<circle class="stone" r="5" transform="translate(30 14)"/></svg></div>'
            '<div class="hop-label" aria-hidden="true">Marelle<b>Case 1</b></div>')


def masts_svg():
    rnd = random.Random(4)
    lines = []
    x = 20
    while x < 1440:
        hgt = rnd.uniform(70, 210)
        lines.append(f'<line x1="{x:.0f}" y1="260" x2="{x:.0f}" y2="{260 - hgt:.0f}"/>')
        if rnd.random() < .5:
            lines.append(f'<line x1="{x:.0f}" y1="{260 - hgt * .7:.0f}" x2="{x + rnd.uniform(18, 40):.0f}" y2="250" style="stroke-width:.6"/>')
        x += rnd.uniform(28, 90)
    return ('<div class="fx-masts"><svg viewBox="0 0 1440 260" preserveAspectRatio="xMidYMax slice">'
            + ''.join(lines) + '<rect x="0" y="252" width="1440" height="8" fill="currentColor"/></svg></div>')


def waves_svg():
    d = []
    for k, y in enumerate([18, 38, 62, 88]):
        amp = 3 + k
        seg = ' '.join(f'Q {x + 30} {y - amp if (x // 60) % 2 == 0 else y + amp} {x + 60} {y}' for x in range(0, 2880, 60))
        d.append(f'<path d="M0 {y} {seg}"/>')
    return '<svg viewBox="0 0 2880 100" preserveAspectRatio="none">' + ''.join(d) + '</svg>'


APEX_TRACK = ('M14 62 L14 24 Q14 12 26 12 L74 12 Q84 12 87 20 L93 38 Q95 45 102 45 L110 45 '
              'Q120 45 120 55 L120 64 Q120 74 110 74 L26 74 Q14 74 14 62 Z')


def markup(fx):
    """Renvoie (avant_main, intro) pour une page immersive."""
    if fx == 'marelle':
        cells = ''.join(f'<i style="--d:{random.Random(i).uniform(0, .6):.2f}s"></i>' for i in range(12))
        return ('<div class="fx-bg" aria-hidden="true"></div><div class="fx-noise" aria-hidden="true"></div>' + hop_svg(),
                f'<div class="fx-intro intro-marelle" aria-hidden="true">{cells}</div>')
    if fx == 'apex':
        hud = (f'<div class="fx-hud lap" aria-hidden="true"><svg viewBox="0 0 134 86"><path class="trk" d="{APEX_TRACK}"/>'
               f'<path class="run" d="{APEX_TRACK}"/><circle class="car" r="3.5" cx="14" cy="62"/></svg>'
               '<div class="row"><b>0:00.000</b><span class="sec">SECTEUR 1</span></div><small>Tour · APEX</small></div>')
        cols = ''.join('<div class="col"><i></i><i></i></div>' for _ in range(5))
        return ('<div class="fx-bg" aria-hidden="true"><div class="fx-streaks"></div></div>' + hud,
                f'<div class="fx-intro intro-apex" aria-hidden="true"><div class="lights">{cols}</div><p>LIGHTS OUT · CLIQUER POUR PASSER</p></div>')
    if fx == 'tide':
        # Vidéo : « Sea waves splashing on shore », Media Loopers, Pexels (licence Pexels, usage libre)
        video = ('<video class="fx-video" muted loop playsinline autoplay preload="auto" '
                 'data-src-hd="../assets/video/vagues-1280.mp4" poster="../assets/video/vagues-poster.jpg" '
                 'data-src-sd="../assets/video/vagues-960.mp4"></video>')
        return ('<div class="fx-bg" aria-hidden="true"><canvas class="fx-beach"></canvas>' + video + '<div class="fx-veil"></div></div>',
                '<div class="fx-intro intro-tide" aria-hidden="true"></div>')
    if fx == 'port':
        bg = f'<div class="fx-bg" aria-hidden="true"><div class="fx-ripple"></div><div class="fx-lamps"></div>{masts_svg()}</div>'
        hud = '<div class="fx-hud service" aria-hidden="true"><b>12:00</b><small>Service du midi</small></div>'
        return (bg + hud, '<div class="fx-intro intro-port" aria-hidden="true"></div>')
    return ('', '')


EXTRA_END = {
    'apex': '<div class="fx-kerb" aria-hidden="true"></div>',
}
