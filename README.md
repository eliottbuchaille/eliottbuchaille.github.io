# Portfolio — Eliott Buchaille

Site d'architecture intérieure, statique et sans dépendance (HTML, CSS, JS), hébergé sur GitHub Pages.

## Modifier le contenu

1. Les textes, projets et rendus sont dans `content.py`.
2. Les images vont dans `assets/img/` en deux tailles WebP : `nom-1200.webp` et `nom-2400.webp`.
3. Régénérer les pages : `python3 build.py` (nécessite Python 3 et Pillow).

## Structure

- `index.html`, `rendus.html`, `projets/*.html` : pages générées
- `assets/css/site.css` : charte Clair-obscur (thèmes clair et sombre)
- `assets/js/site.js` : animations au scroll, thème, lightbox
- `assets/fonts/` : Bodoni Moda, Outfit, Archivo (licence SIL OFL)

Astuce : ajouter `?theme=light` ou `?theme=dark` à l'adresse pour forcer un thème.
