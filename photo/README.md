# Photographie — Eliott Buchaille

Site photo en ligne à l'adresse `/photo/` du portfolio, en français et en anglais. HTML, CSS et JS sans dépendance.

Les photos sont pour l'instant chargées depuis Adobe Portfolio (eliottraw.myportfolio.com).

## Ajouter des photos

1. Exporter depuis Lightroom : JPEG ou WebP, côté long 2400 px, qualité ~80.
2. Déposer les fichiers dans `photo/img/<id-de-la-série>/` (ex. `photo/img/altitude/01.webp`).
3. Dans `photo/data.js`, remplir le champ `src` de l'emplacement (ex. `src: "img/altitude/01.webp"`)
   et vérifier le `ratio` (3/2, 2/3, 4/5…).

Tant qu'un `src` est vide, un emplacement teinté s'affiche à la place.
Les textes, séries, mises en page et coordonnées se modifient aussi dans `data.js`.

## Fichiers

- `index.html` : structure de la page
- `data.js` : contenu (le seul fichier à modifier au quotidien)
- `app.js` : rendu des séries, visionneuse, animations
- `style.css` : charte « registre d'archive »
- `fonts/` : Archivo et IBM Plex Mono (licence SIL OFL)
