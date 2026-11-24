/* ============================================================
   CONTENU DU SITE PHOTO — le seul fichier à modifier.

   Les photos viennent pour l'instant d'Adobe Portfolio (eliottraw.myportfolio.com).
   Pour une photo hébergée ici à la place : déposer le fichier dans photo/img/
   et remplacer son entrée par { "w": largeur, "h": hauteur, "src": "img/nom.jpg" }.

   featured : numéros (à partir de 0) des photos mises en avant sur l'accueil,
              dans l'ordre. Toutes les photos restent visibles via « Voir toute la série ».
   layout   : "rows" rangées justifiées (rows = lignes de photos) · "spread" double page · "wide" grande image · "register" grille numérotée
              · "dark" fond noir · "strip" bandeau
   blur     : zones floutées sur une photo (plaques), en % : [gauche, haut, droite, bas].
   Les textes sont en deux langues : { "fr": "...", "en": "..." }.
   ============================================================ */
window.PHOTO = {
 "site": {
  "name": "Eliott Buchaille",
  "volume": "Vol. I",
  "place": "Lyon — Genève",
  "year": "2026",
  "archive": "EB-PH-26",
  "cdn": "https://cdn.myportfolio.com/55894a5c-4c80-43e3-87c8-5f0e66777d8e/",
  "hero": {
   "series": "astro",
   "index": 0
  },
  "email": "eliottbuchaille@gmail.com",
  "disciplines": {
   "fr": "Astro · Paysage · Voyage · Street · Automobile · Mariage",
   "en": "Astro · Landscape · Travel · Street · Automotive · Weddings"
  },
  "intro": {
   "fr": "Photographe français basé à Lyon. Astrophotographie, paysages, voyages, rue, automobile et mariages.",
   "en": "French photographer based in Lyon. Astrophotography, landscapes, travel, street, automotive and weddings."
  },
  "about": {
   "fr": [
    "Je suis un photographe français animé par l'envie de capter des lieux, des personnes et des instants avec un regard qui m'est propre. Des paysages spectaculaires aux mariages intimes, des scènes urbaines aux voitures et aux vues aériennes, j'explore des sujets très variés en restant attentif à la lumière, à la composition et à l'atmosphère.",
    "Mon approche repose sur l'authenticité : créer des images naturelles, cinématographiques et intemporelles, qu'elles soient prises en montagne, au cœur d'une ville, sur la route ou depuis le ciel. Par la photo comme par le drone, je cherche à raconter des histoires en images et à révéler le caractère de chaque lieu et de chaque moment."
   ],
   "en": [
    "I'm a French photographer driven by a passion for capturing places, people, and moments with a distinctive eye. From dramatic landscapes and intimate weddings to urban scenes, cars, and aerial photography, I explore a wide range of subjects while focusing on light, composition, and atmosphere.",
    "My approach is rooted in authenticity: creating images that feel natural, cinematic, and timeless, whether they are captured in the mountains, in the middle of a city, on the road, or from above. Through photography and drone imagery, I aim to tell visual stories and reveal the character of every place and moment I encounter."
   ]
  },
  "gear": [
   "Canon EOS R7",
   "Sigma 17-40 mm f/1.8",
   "DJI Mini 3",
   "Sequator · Siril · Lightroom · Photoshop"
  ]
 },
 "series": [
  {
   "id": "astro",
   "layout": "rows",
   "rows": [
    [
     0
    ],
    [
     1,
     2
    ],
    [
     3
    ],
    [
     6,
     5,
     9
    ],
    [
     7
    ],
    [
     10,
     11
    ]
   ],
   "featured": [
    0,
    1,
    2,
    3,
    6,
    5,
    9,
    7,
    10,
    11
   ],
   "title": {
    "fr": "Astrophotographie",
    "en": "Astrophotography"
   },
   "subtitle": {
    "fr": "Voie lactée, Lune, ciel profond",
    "en": "Milky Way, Moon, deep sky"
   },
   "place": {
    "fr": "Alpes",
    "en": "Alps"
   },
   "year": "2024 — 2026",
   "text": {
    "fr": "Des nuits en altitude, du col de l'Iseran au lac de Peyre, du lac Guichard au Grand Colombier : la Voie lactée au-dessus des reliefs, des dizaines de poses empilées et des panoramas assemblés image par image.",
    "en": "Nights at altitude, from the Col de l'Iseran to Lac de Peyre, from Lac Guichard to the Grand Colombier: the Milky Way above the peaks, dozens of stacked exposures and panoramas stitched frame by frame."
   },
   "photos": [
    {
     "w": 3000,
     "h": 1677,
     "src": "img/astro/01-iseran-pano.jpg",
     "t": "img/astro/01-iseran-pano-1200.jpg",
     "cap": {
      "fr": "Col de l'Iseran — panorama, août 2026",
      "en": "Col de l'Iseran — panorama, August 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/astro/02-tignes-chapelle.jpg",
     "t": "img/astro/02-tignes-chapelle-1200.jpg",
     "cap": {
      "fr": "Tignes — chapelle sous la Voie lactée, août 2026",
      "en": "Tignes — chapel under the Milky Way, August 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/astro/03-tignes-falaises.jpg",
     "t": "img/astro/03-tignes-falaises-1200.jpg",
     "cap": {
      "fr": "Tignes — août 2026",
      "en": "Tignes — August 2026"
     }
    },
    {
     "w": 3000,
     "h": 1636,
     "src": "img/astro/peyre-pano-vl.jpg",
     "t": "img/astro/peyre-pano-vl-1200.jpg",
     "cap": {
      "fr": "Lac de Peyre — panorama de la Voie lactée, juillet 2026",
      "en": "Lac de Peyre — Milky Way panorama, July 2026"
     }
    },
    {
     "w": 1601,
     "h": 2400,
     "src": "img/astro/peyre-vl-montagne.jpg",
     "t": "img/astro/peyre-vl-montagne-1200.jpg",
     "cap": {
      "fr": "Lac de Peyre — juillet 2026",
      "en": "Lac de Peyre — July 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/astro/peyre-frontales.jpg",
     "t": "img/astro/peyre-frontales-1200.jpg",
     "cap": {
      "fr": "Lac de Peyre — à la frontale, juillet 2026",
      "en": "Lac de Peyre — headlamps, July 2026"
     }
    },
    {
     "w": 1280,
     "h": 1920,
     "src": "img/astro/05-guichard-etoile-filante.jpg",
     "t": "img/astro/05-guichard-etoile-filante-1200.jpg",
     "cap": {
      "fr": "Lac Guichard — étoile filante, 100 poses empilées",
      "en": "Lac Guichard — shooting star, 100 stacked frames"
     }
    },
    {
     "w": 3000,
     "h": 1641,
     "src": "img/astro/04-guichard-arche.jpg",
     "t": "img/astro/04-guichard-arche-1200.jpg",
     "cap": {
      "fr": "Lac Guichard — arche de la Voie lactée, panorama",
      "en": "Lac Guichard — Milky Way arch, panorama"
     }
    },
    {
     "w": 1280,
     "h": 1920,
     "src": "img/astro/06-guichard-reflet.jpg",
     "t": "img/astro/06-guichard-reflet-1200.jpg",
     "cap": {
      "fr": "Lac Guichard — reflet",
      "en": "Lac Guichard — reflection"
     }
    },
    {
     "w": 1601,
     "h": 2400,
     "src": "img/astro/10-grand-colombier.jpg",
     "t": "img/astro/10-grand-colombier-1200.jpg",
     "cap": {
      "fr": "Grand Colombier — juin 2025",
      "en": "Grand Colombier — June 2025"
     }
    },
    {
     "w": 1350,
     "h": 2400,
     "src": "img/astro/11-orion-glieres.jpg",
     "t": "img/astro/11-orion-glieres-1200.jpg",
     "cap": {
      "fr": "Nébuleuse d'Orion (M42) — Glières, février 2026",
      "en": "Orion Nebula (M42) — Glières, February 2026"
     }
    },
    {
     "w": 1655,
     "h": 1724,
     "src": "img/astro/12-lune.jpg",
     "t": "img/astro/12-lune-1200.jpg",
     "cap": {
      "fr": "Lune — septembre 2025",
      "en": "Moon — September 2025"
     }
    },
    {
     "w": 2000,
     "h": 2000,
     "src": "img/astro/13-lune-minerale.jpg",
     "t": "img/astro/13-lune-minerale-1200.jpg",
     "cap": {
      "fr": "Lune minérale — août 2024",
      "en": "Mineral Moon — August 2024"
     }
    }
   ],
   "dark": true
  },
  {
   "id": "landscapes",
   "layout": "rows",
   "featured": [
    0,
    4,
    1,
    8,
    7,
    13,
    19,
    20,
    10,
    15,
    21,
    22
   ],
   "title": {
    "fr": "Paysages & Nature",
    "en": "Landscapes & Nature"
   },
   "subtitle": {
    "fr": "Montagne, lacs, faune",
    "en": "Mountains, lakes, wildlife"
   },
   "place": {
    "fr": "Alpes",
    "en": "Alps"
   },
   "year": "2025 — 2026",
   "text": {
    "fr": "Le lac de Peyre entre la nuit et le lever du soleil, les bouquetins dans la pente, le lac Guichard, le cirque de Sixt-Fer-à-Cheval et le lac d'Annecy en hiver : la lumière rasante, l'échelle et le silence de la montagne.",
    "en": "Lac de Peyre from night to sunrise, ibex on the slopes, Lac Guichard, the Sixt-Fer-à-Cheval cirque and Lake Annecy in winter: low light, scale and the silence of the mountains."
   },
   "photos": [
    {
     "w": 2400,
     "h": 1600,
     "src": "img/paysages/peyre-silhouette.jpg",
     "t": "img/paysages/peyre-silhouette-1200.jpg",
     "cap": {
      "fr": "Lac de Peyre — juillet 2026",
      "en": "Lac de Peyre — July 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/paysages/peyre-cretes.jpg",
     "t": "img/paysages/peyre-cretes-1200.jpg",
     "cap": {
      "fr": "Lac de Peyre — juillet 2026",
      "en": "Lac de Peyre — July 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/paysages/peyre-lumiere.jpg",
     "t": "img/paysages/peyre-lumiere-1200.jpg",
     "cap": {
      "fr": "Lac de Peyre — juillet 2026",
      "en": "Lac de Peyre — July 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/paysages/peyre-gorge.jpg",
     "t": "img/paysages/peyre-gorge-1200.jpg",
     "cap": {
      "fr": "Lac de Peyre — juillet 2026",
      "en": "Lac de Peyre — July 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/paysages/peyre-aube-rose.jpg",
     "t": "img/paysages/peyre-aube-rose-1200.jpg",
     "cap": {
      "fr": "Lac de Peyre — juillet 2026",
      "en": "Lac de Peyre — July 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/paysages/peyre-vallee.jpg",
     "t": "img/paysages/peyre-vallee-1200.jpg",
     "cap": {
      "fr": "Lac de Peyre — juillet 2026",
      "en": "Lac de Peyre — July 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/paysages/peyre-ombre.jpg",
     "t": "img/paysages/peyre-ombre-1200.jpg",
     "cap": {
      "fr": "Lac de Peyre — juillet 2026",
      "en": "Lac de Peyre — July 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/paysages/peyre-bouquetin-nb.jpg",
     "t": "img/paysages/peyre-bouquetin-nb-1200.jpg",
     "cap": {
      "fr": "Bouquetin — lac de Peyre, juillet 2026",
      "en": "Ibex — Lac de Peyre, July 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/paysages/peyre-bouquetin.jpg",
     "t": "img/paysages/peyre-bouquetin-1200.jpg",
     "cap": {
      "fr": "Bouquetin — lac de Peyre, juillet 2026",
      "en": "Ibex — Lac de Peyre, July 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/paysages/peyre-bouquetin-fleurs.jpg",
     "t": "img/paysages/peyre-bouquetin-fleurs-1200.jpg",
     "cap": {
      "fr": "Bouquetin — lac de Peyre, juillet 2026",
      "en": "Ibex — Lac de Peyre, July 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/paysages/peyre-bouquetins-soleil.jpg",
     "t": "img/paysages/peyre-bouquetins-soleil-1200.jpg",
     "cap": {
      "fr": "Bouquetins — lac de Peyre, juillet 2026",
      "en": "Ibex — Lac de Peyre, July 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/paysages/peyre-tente.jpg",
     "t": "img/paysages/peyre-tente-1200.jpg",
     "cap": {
      "fr": "Lac de Peyre — juillet 2026",
      "en": "Lac de Peyre — July 2026"
     }
    },
    {
     "w": 1350,
     "h": 2400,
     "src": "img/paysages/peyre-nb.jpg",
     "t": "img/paysages/peyre-nb-1200.jpg",
     "cap": {
      "fr": "Lac de Peyre — juillet 2026",
      "en": "Lac de Peyre — July 2026"
     }
    },
    {
     "w": 1280,
     "h": 1920,
     "src": "img/paysages/guichard-reflet-jour.jpg",
     "t": "img/paysages/guichard-reflet-jour-1200.jpg",
     "cap": {
      "fr": "Lac Guichard — août 2026",
      "en": "Lac Guichard — August 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/paysages/sixt-cirque.jpg",
     "t": "img/paysages/sixt-cirque-1200.jpg",
     "cap": {
      "fr": "Sixt-Fer-à-Cheval — septembre 2026",
      "en": "Sixt-Fer-à-Cheval — September 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/paysages/sixt-vallee.jpg",
     "t": "img/paysages/sixt-vallee-1200.jpg",
     "cap": {
      "fr": "Sixt-Fer-à-Cheval — septembre 2026",
      "en": "Sixt-Fer-à-Cheval — September 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/paysages/sixt-cascade.jpg",
     "t": "img/paysages/sixt-cascade-1200.jpg",
     "cap": {
      "fr": "Sixt-Fer-à-Cheval — septembre 2026",
      "en": "Sixt-Fer-à-Cheval — September 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/paysages/sixt-prairie.jpg",
     "t": "img/paysages/sixt-prairie-1200.jpg",
     "cap": {
      "fr": "Sixt-Fer-à-Cheval — septembre 2026",
      "en": "Sixt-Fer-à-Cheval — September 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/paysages/sixt-falaises.jpg",
     "t": "img/paysages/sixt-falaises-1200.jpg",
     "cap": {
      "fr": "Sixt-Fer-à-Cheval — septembre 2026",
      "en": "Sixt-Fer-à-Cheval — September 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v161.jpg",
     "t": "img/voyages/v161-1200.jpg",
     "cap": {
      "fr": "Lac d'Annecy et Aravis — janvier 2026",
      "en": "Lake Annecy and the Aravis — January 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v164.jpg",
     "t": "img/voyages/v164-1200.jpg",
     "cap": {
      "fr": "Lac d'Annecy et Aravis — janvier 2026",
      "en": "Lake Annecy and the Aravis — January 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v171.jpg",
     "t": "img/voyages/v171-1200.jpg",
     "cap": {
      "fr": "Lac d'Annecy et Aravis — janvier 2026",
      "en": "Lake Annecy and the Aravis — January 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v172.jpg",
     "t": "img/voyages/v172-1200.jpg",
     "cap": {
      "fr": "Lac d'Annecy et Aravis — janvier 2026",
      "en": "Lake Annecy and the Aravis — January 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v163.jpg",
     "t": "img/voyages/v163-1200.jpg",
     "cap": {
      "fr": "Lac d'Annecy et Aravis — janvier 2026",
      "en": "Lake Annecy and the Aravis — January 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v177.jpg",
     "t": "img/voyages/v177-1200.jpg",
     "cap": {
      "fr": "Lac d'Annecy et Aravis — janvier 2026",
      "en": "Lake Annecy and the Aravis — January 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/voyages/v182.jpg",
     "t": "img/voyages/v182-1200.jpg",
     "cap": {
      "fr": "Lac d'Annecy et Aravis — janvier 2026",
      "en": "Lake Annecy and the Aravis — January 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v184.jpg",
     "t": "img/voyages/v184-1200.jpg",
     "cap": {
      "fr": "Lac d'Annecy et Aravis — janvier 2026",
      "en": "Lake Annecy and the Aravis — January 2026"
     }
    }
   ],
   "rows": [
    [
     0
    ],
    [
     4,
     1
    ],
    [
     8,
     7,
     13
    ],
    [
     19,
     20
    ],
    [
     10,
     15
    ],
    [
     21,
     22
    ]
   ]
  },
  {
   "id": "voyages",
   "layout": "rows",
   "photos": [
    {
     "w": 1589,
     "h": 2400,
     "src": "img/voyages/v137.jpg",
     "t": "img/voyages/v137-1200.jpg",
     "cap": {
      "fr": "Tignes et col de l'Iseran — août 2026",
      "en": "Tignes and Col de l'Iseran — August 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/voyages/v126.jpg",
     "t": "img/voyages/v126-1200.jpg",
     "cap": {
      "fr": "Tignes et col de l'Iseran — août 2026",
      "en": "Tignes and Col de l'Iseran — August 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v127.jpg",
     "t": "img/voyages/v127-1200.jpg",
     "cap": {
      "fr": "Tignes et col de l'Iseran — août 2026",
      "en": "Tignes and Col de l'Iseran — August 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v139.jpg",
     "t": "img/voyages/v139-1200.jpg",
     "cap": {
      "fr": "Tignes et col de l'Iseran — août 2026",
      "en": "Tignes and Col de l'Iseran — August 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v142.jpg",
     "t": "img/voyages/v142-1200.jpg",
     "cap": {
      "fr": "Tignes et col de l'Iseran — août 2026",
      "en": "Tignes and Col de l'Iseran — August 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v144.jpg",
     "t": "img/voyages/v144-1200.jpg",
     "cap": {
      "fr": "Tignes et col de l'Iseran — août 2026",
      "en": "Tignes and Col de l'Iseran — August 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/voyages/v146.jpg",
     "t": "img/voyages/v146-1200.jpg",
     "cap": {
      "fr": "Tignes et col de l'Iseran — août 2026",
      "en": "Tignes and Col de l'Iseran — August 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/voyages/v148.jpg",
     "t": "img/voyages/v148-1200.jpg",
     "cap": {
      "fr": "Tignes et col de l'Iseran — août 2026",
      "en": "Tignes and Col de l'Iseran — August 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/voyages/v157.jpg",
     "t": "img/voyages/v157-1200.jpg",
     "cap": {
      "fr": "Tignes et col de l'Iseran — août 2026",
      "en": "Tignes and Col de l'Iseran — August 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/voyages/v120.jpg",
     "t": "img/voyages/v120-1200.jpg",
     "cap": {
      "fr": "Tignes et col de l'Iseran — août 2026",
      "en": "Tignes and Col de l'Iseran — August 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/voyages/v122.jpg",
     "t": "img/voyages/v122-1200.jpg",
     "cap": {
      "fr": "Tignes et col de l'Iseran — août 2026",
      "en": "Tignes and Col de l'Iseran — August 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v134.jpg",
     "t": "img/voyages/v134-1200.jpg",
     "cap": {
      "fr": "Tignes et col de l'Iseran — août 2026",
      "en": "Tignes and Col de l'Iseran — August 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/voyages/v091.jpg",
     "t": "img/voyages/v091-1200.jpg",
     "cap": {
      "fr": "Tignes et col de l'Iseran — août 2026",
      "en": "Tignes and Col de l'Iseran — August 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v083.jpg",
     "t": "img/voyages/v083-1200.jpg",
     "cap": {
      "fr": "Tignes et col de l'Iseran — août 2026",
      "en": "Tignes and Col de l'Iseran — August 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v102.jpg",
     "t": "img/voyages/v102-1200.jpg",
     "cap": {
      "fr": "Tignes et col de l'Iseran — août 2026",
      "en": "Tignes and Col de l'Iseran — August 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v117.jpg",
     "t": "img/voyages/v117-1200.jpg",
     "cap": {
      "fr": "Tignes et col de l'Iseran — août 2026",
      "en": "Tignes and Col de l'Iseran — August 2026"
     }
    },
    {
     "w": 1392,
     "h": 2400,
     "src": "img/voyages/v115.jpg",
     "t": "img/voyages/v115-1200.jpg",
     "cap": {
      "fr": "Tignes et col de l'Iseran — août 2026",
      "en": "Tignes and Col de l'Iseran — August 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/voyages/v214.jpg",
     "t": "img/voyages/v214-1200.jpg",
     "cap": {
      "fr": "Cavalaire, Var — juin 2026",
      "en": "Cavalaire, Var — June 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v219.jpg",
     "t": "img/voyages/v219-1200.jpg",
     "cap": {
      "fr": "Cavalaire, Var — juin 2026",
      "en": "Cavalaire, Var — June 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v213.jpg",
     "t": "img/voyages/v213-1200.jpg",
     "cap": {
      "fr": "Cavalaire, Var — juin 2026",
      "en": "Cavalaire, Var — June 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v218.jpg",
     "t": "img/voyages/v218-1200.jpg",
     "cap": {
      "fr": "Cavalaire, Var — juin 2026",
      "en": "Cavalaire, Var — June 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/voyages/v227.jpg",
     "t": "img/voyages/v227-1200.jpg",
     "cap": {
      "fr": "Cavalaire, Var — juin 2026",
      "en": "Cavalaire, Var — June 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v225.jpg",
     "t": "img/voyages/v225-1200.jpg",
     "cap": {
      "fr": "Cavalaire, Var — juin 2026",
      "en": "Cavalaire, Var — June 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v232.jpg",
     "t": "img/voyages/v232-1200.jpg",
     "cap": {
      "fr": "Cavalaire, Var — juin 2026",
      "en": "Cavalaire, Var — June 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v235.jpg",
     "t": "img/voyages/v235-1200.jpg",
     "cap": {
      "fr": "Cavalaire, Var — juin 2026",
      "en": "Cavalaire, Var — June 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v482.jpg",
     "t": "img/voyages/v482-1200.jpg",
     "cap": {
      "fr": "Cavalaire, Var — juin 2026",
      "en": "Cavalaire, Var — June 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/voyages/v493.jpg",
     "t": "img/voyages/v493-1200.jpg",
     "cap": {
      "fr": "Cavalaire, Var — juin 2026",
      "en": "Cavalaire, Var — June 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v501.jpg",
     "t": "img/voyages/v501-1200.jpg",
     "cap": {
      "fr": "Cavalaire, Var — juin 2026",
      "en": "Cavalaire, Var — June 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/voyages/v499.jpg",
     "t": "img/voyages/v499-1200.jpg",
     "cap": {
      "fr": "Cavalaire, Var — juin 2026",
      "en": "Cavalaire, Var — June 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/usa/086.jpg",
     "t": "img/usa/086-1200.jpg",
     "cap": {
      "fr": "Monument Valley — août 2023",
      "en": "Monument Valley — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/usa/087.jpg",
     "t": "img/usa/087-1200.jpg",
     "cap": {
      "fr": "Monument Valley — août 2023",
      "en": "Monument Valley — August 2023"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/usa/118.jpg",
     "t": "img/usa/118-1200.jpg",
     "cap": {
      "fr": "Monument Valley — août 2023",
      "en": "Monument Valley — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/usa/091.jpg",
     "t": "img/usa/091-1200.jpg",
     "cap": {
      "fr": "Antelope Canyon — août 2023",
      "en": "Antelope Canyon — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/usa/092.jpg",
     "t": "img/usa/092-1200.jpg",
     "cap": {
      "fr": "Antelope Canyon — août 2023",
      "en": "Antelope Canyon — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/usa/105.jpg",
     "t": "img/usa/105-1200.jpg",
     "cap": {
      "fr": "Grand Canyon — août 2023",
      "en": "Grand Canyon — August 2023"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/usa/098.jpg",
     "t": "img/usa/098-1200.jpg",
     "cap": {
      "fr": "Bryce Canyon — août 2023",
      "en": "Bryce Canyon — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/usa/106.jpg",
     "t": "img/usa/106-1200.jpg",
     "cap": {
      "fr": "Bryce Canyon — août 2023",
      "en": "Bryce Canyon — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/usa/134.jpg",
     "t": "img/usa/134-1200.jpg",
     "cap": {
      "fr": "Route 66 — août 2023",
      "en": "Route 66 — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/usa/135.jpg",
     "t": "img/usa/135-1200.jpg",
     "cap": {
      "fr": "Route 66 — août 2023",
      "en": "Route 66 — August 2023"
     }
    },
    {
     "w": 1920,
     "h": 2400,
     "src": "img/usa/117.jpg",
     "t": "img/usa/117-1200.jpg",
     "cap": {
      "fr": "Monument Valley — août 2023",
      "en": "Monument Valley — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/usa/074.jpg",
     "t": "img/usa/074-1200.jpg",
     "cap": {
      "fr": "Monument Valley — août 2023",
      "en": "Monument Valley — August 2023"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/usa/080.jpg",
     "t": "img/usa/080-1200.jpg",
     "cap": {
      "fr": "Monument Valley — août 2023",
      "en": "Monument Valley — August 2023"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/usa/085.jpg",
     "t": "img/usa/085-1200.jpg",
     "cap": {
      "fr": "Monument Valley — août 2023",
      "en": "Monument Valley — August 2023"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/usa/075.jpg",
     "t": "img/usa/075-1200.jpg",
     "cap": {
      "fr": "Monument Valley — août 2023",
      "en": "Monument Valley — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/usa/089.jpg",
     "t": "img/usa/089-1200.jpg",
     "cap": {
      "fr": "Antelope Canyon — août 2023",
      "en": "Antelope Canyon — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/usa/095.jpg",
     "t": "img/usa/095-1200.jpg",
     "cap": {
      "fr": "Antelope Canyon — août 2023",
      "en": "Antelope Canyon — August 2023"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/usa/116.jpg",
     "t": "img/usa/116-1200.jpg",
     "cap": {
      "fr": "Grand Canyon — août 2023",
      "en": "Grand Canyon — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/usa/097.jpg",
     "t": "img/usa/097-1200.jpg",
     "cap": {
      "fr": "Bryce Canyon — août 2023",
      "en": "Bryce Canyon — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/usa/112.jpg",
     "t": "img/usa/112-1200.jpg",
     "cap": {
      "fr": "Yosemite — août 2023",
      "en": "Yosemite — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/usa/114.jpg",
     "t": "img/usa/114-1200.jpg",
     "cap": {
      "fr": "Yosemite — août 2023",
      "en": "Yosemite — August 2023"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/usa/109.jpg",
     "t": "img/usa/109-1200.jpg",
     "cap": {
      "fr": "Yosemite — août 2023",
      "en": "Yosemite — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/usa/005.jpg",
     "t": "img/usa/005-1200.jpg",
     "cap": {
      "fr": "Joshua Tree — août 2023",
      "en": "Joshua Tree — August 2023"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/usa/003.jpg",
     "t": "img/usa/003-1200.jpg",
     "cap": {
      "fr": "Joshua Tree — août 2023",
      "en": "Joshua Tree — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/usa/138.jpg",
     "t": "img/usa/138-1200.jpg",
     "cap": {
      "fr": "Route 66 — août 2023",
      "en": "Route 66 — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/usa/139.jpg",
     "t": "img/usa/139-1200.jpg",
     "cap": {
      "fr": "Route 66 — août 2023",
      "en": "Route 66 — August 2023"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/usa/133.jpg",
     "t": "img/usa/133-1200.jpg",
     "cap": {
      "fr": "Route 66 — août 2023",
      "en": "Route 66 — August 2023"
     }
    },
    {
     "w": 1920,
     "h": 2400,
     "src": "img/usa/126.jpg",
     "t": "img/usa/126-1200.jpg",
     "cap": {
      "fr": "Route 66 — août 2023",
      "en": "Route 66 — August 2023"
     }
    },
    {
     "w": 1920,
     "h": 2560,
     "s": "cbe3f1f8-9056-416c-ae24-892a7043335c_rw_1200.jpg?h=f033ac2cba338e08e845e5eeb45a3fb5",
     "l": "cbe3f1f8-9056-416c-ae24-892a7043335c_rw_1920.jpg?h=324beb479e5f815b451fb510a6dffb6a",
     "cap": {
      "fr": "Vue aérienne au drone — Méditerranée",
      "en": "Drone aerial view — Mediterranean"
     }
    },
    {
     "w": 3840,
     "h": 2160,
     "s": "d8c24aee-636d-4565-8205-7a8379ef1ca5_rw_1200.jpg?h=58c257cfd561dcd16b2d2ccd6afff0e1",
     "l": "d8c24aee-636d-4565-8205-7a8379ef1ca5_rw_1920.jpg?h=d0bc68ff202d4da0f16c340aa347466c",
     "cap": {
      "fr": "Vue aérienne au drone — Méditerranée",
      "en": "Drone aerial view — Mediterranean"
     }
    },
    {
     "w": 3840,
     "h": 6826,
     "s": "bb3ac35f-b68c-48af-8a64-362acc7f06fd_rw_1200.jpg?h=d94449b00ef0ff29f5bb5f68b385f4c6",
     "l": "bb3ac35f-b68c-48af-8a64-362acc7f06fd_rw_1920.jpg?h=311e60a4a41cc46c9820dc5db476b53b",
     "cap": {
      "fr": "Vue aérienne au drone — Méditerranée",
      "en": "Drone aerial view — Mediterranean"
     }
    },
    {
     "w": 3840,
     "h": 2160,
     "s": "cf5f56fc-306b-4e7a-bca5-b42befc99150_rw_1200.jpg?h=b16e2214c3af4e56fb3c29e47bf06e9a",
     "l": "cf5f56fc-306b-4e7a-bca5-b42befc99150_rw_1920.jpg?h=bf0b15a0166c4e21437c5e6615402839",
     "cap": {
      "fr": "Vue aérienne au drone — Méditerranée",
      "en": "Drone aerial view — Mediterranean"
     }
    },
    {
     "w": 3840,
     "h": 6826,
     "s": "2df61f2c-b23c-4079-b4f6-aed49f01ba19_rw_1200.JPG?h=2272b30c1352e45454051b7ed595d64f",
     "l": "2df61f2c-b23c-4079-b4f6-aed49f01ba19_rw_1920.JPG?h=2f715be2cd8ab734cd2324726be53f1f",
     "cap": {
      "fr": "Vue aérienne au drone — Méditerranée",
      "en": "Drone aerial view — Mediterranean"
     }
    },
    {
     "w": 3840,
     "h": 5120,
     "s": "ccbf59ae-62c6-4801-b080-53a79b13d53c_rw_1200.JPG?h=57081981b56c4e572a29c09fcf269f65",
     "l": "ccbf59ae-62c6-4801-b080-53a79b13d53c_rw_1920.JPG?h=86e1e8a9b64c6f903983f1793298e715",
     "cap": {
      "fr": "Vue aérienne au drone — Méditerranée",
      "en": "Drone aerial view — Mediterranean"
     }
    },
    {
     "w": 3840,
     "h": 5120,
     "s": "c159f818-d3ff-4dbe-af52-2364a436ec81_rw_1200.JPG?h=dbe55bf186f8766f6e36998e04c6a0f6",
     "l": "c159f818-d3ff-4dbe-af52-2364a436ec81_rw_1920.JPG?h=dfebcf341daa6d3920f78ff700565d99",
     "cap": {
      "fr": "Vue aérienne au drone — Méditerranée",
      "en": "Drone aerial view — Mediterranean"
     }
    },
    {
     "w": 3840,
     "h": 5120,
     "s": "a7141ee5-6d5b-45db-bc2b-4aa267802bac_rw_1200.JPG?h=bfc38ccb7478a9eee195d91f6943ef0b",
     "l": "a7141ee5-6d5b-45db-bc2b-4aa267802bac_rw_1920.JPG?h=551d2ca3cd3d444f774ec379dac6caf9",
     "cap": {
      "fr": "Vue aérienne au drone — Méditerranée",
      "en": "Drone aerial view — Mediterranean"
     }
    },
    {
     "w": 3840,
     "h": 5120,
     "s": "f0debbe5-957a-4b8a-a027-706416fe3bf9_rw_1200.jpg?h=1ce498907083cdf6b74e22e8650d84f4",
     "l": "f0debbe5-957a-4b8a-a027-706416fe3bf9_rw_1920.jpg?h=db20b2ba29556cdda4f305101bd8831e",
     "cap": {
      "fr": "Vue aérienne au drone — Méditerranée",
      "en": "Drone aerial view — Mediterranean"
     }
    }
   ],
   "rows": [
    [
     7
    ],
    [
     0,
     1,
     2
    ],
    [
     3,
     4,
     5
    ],
    [
     17,
     18,
     19
    ],
    [
     29
    ],
    [
     30,
     31
    ],
    [
     32,
     34,
     36
    ],
    [
     58,
     60
    ]
   ],
   "title": {
    "fr": "Voyages",
    "en": "Travel"
   },
   "subtitle": {
    "fr": "Montagne, Méditerranée, Ouest américain, vues aériennes",
    "en": "Mountains, the Mediterranean, the American West, aerial views"
   },
   "place": {
    "fr": "Alpes · Var · Utah · Arizona · Californie",
    "en": "Alps · Var · Utah · Arizona · California"
   },
   "year": "2023 — 2026",
   "text": {
    "fr": "Carnet de route : Tignes et le glacier de la Grande Motte, les criques turquoise de Cavalaire, un road trip dans l'Ouest américain de Monument Valley à Yosemite, et le littoral vu du ciel au drone.",
    "en": "A travel log: Tignes and the Grande Motte glacier, the turquoise coves of Cavalaire, a road trip through the American West from Monument Valley to Yosemite, and the coastline seen from above by drone."
   },
   "featured": [
    7,
    0,
    1,
    2,
    3,
    4,
    5,
    17,
    18,
    19,
    29,
    30,
    31,
    32,
    34,
    36,
    58,
    60
   ]
  },
  {
   "id": "street",
   "layout": "register",
   "featured": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
   ],
   "title": {
    "fr": "Street",
    "en": "Street"
   },
   "subtitle": {
    "fr": "Photographie de rue",
    "en": "Street photography"
   },
   "place": {
    "fr": "New York · Los Angeles",
    "en": "New York · Los Angeles"
   },
   "year": "2023 — 2024",
   "text": {
    "fr": "New York en hiver et Los Angeles en plein été : ponts, avenues, taxis, façades et palmiers, entre lumière dure et ombres profondes.",
    "en": "New York in winter and Los Angeles in high summer: bridges, avenues, cabs, façades and palm trees, between hard light and deep shadow."
   },
   "photos": [
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/046.jpg",
     "t": "img/street/046-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/043.jpg",
     "t": "img/street/043-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/039.jpg",
     "t": "img/street/039-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/street/054.jpg",
     "t": "img/street/054-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/027.jpg",
     "t": "img/street/027-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/063.jpg",
     "t": "img/street/063-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/037.jpg",
     "t": "img/street/037-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/008.jpg",
     "t": "img/street/008-1200.jpg",
     "cap": {
      "fr": "Los Angeles — août 2023",
      "en": "Los Angeles — August 2023"
     }
    },
    {
     "w": 1920,
     "h": 2400,
     "src": "img/street/010.jpg",
     "t": "img/street/010-1200.jpg",
     "cap": {
      "fr": "Los Angeles — août 2023",
      "en": "Los Angeles — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/050.jpg",
     "t": "img/street/050-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/street/051.jpg",
     "t": "img/street/051-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/049.jpg",
     "t": "img/street/049-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/048.jpg",
     "t": "img/street/048-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/064.jpg",
     "t": "img/street/064-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/065.jpg",
     "t": "img/street/065-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/066.jpg",
     "t": "img/street/066-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/021.jpg",
     "t": "img/street/021-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/street/026.jpg",
     "t": "img/street/026-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/031.jpg",
     "t": "img/street/031-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/034.jpg",
     "t": "img/street/034-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/028.jpg",
     "t": "img/street/028-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/055.jpg",
     "t": "img/street/055-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/street/045.jpg",
     "t": "img/street/045-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/061.jpg",
     "t": "img/street/061-1200.jpg",
     "cap": {
      "fr": "New York — décembre 2024",
      "en": "New York — December 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/018.jpg",
     "t": "img/street/018-1200.jpg",
     "cap": {
      "fr": "Los Angeles — août 2023",
      "en": "Los Angeles — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/street/007.jpg",
     "t": "img/street/007-1200.jpg",
     "cap": {
      "fr": "Los Angeles — août 2023",
      "en": "Los Angeles — August 2023"
     }
    }
   ]
  },
  {
   "id": "automotive",
   "layout": "rows",
   "featured": [
    12,
    0,
    1,
    2,
    4,
    7,
    3,
    13,
    14,
    15,
    17,
    18,
    26,
    27,
    28,
    33,
    30,
    35,
    38,
    47,
    48,
    31
   ],
   "title": {
    "fr": "Automobile",
    "en": "Automotive"
   },
   "subtitle": {
    "fr": "Rallye, salons, voitures de collection",
    "en": "Rallying, motor shows, classic cars"
   },
   "place": {
    "fr": "Monte-Carlo · Charbonnières · Mont-Blanc · Lyon · Los Angeles",
    "en": "Monte-Carlo · Charbonnières · Mont-Blanc · Lyon · Los Angeles"
   },
   "year": "2023 — 2026",
   "text": {
    "fr": "Le Rallye Monte-Carlo à la tombée de la nuit, les spéciales de Charbonnières et du Mont-Blanc, les salons Epoq'auto à Lyon et quelques belles rencontres dans les rues de Los Angeles.",
    "en": "The Monte-Carlo Rally at nightfall, the stages of Charbonnières and Mont-Blanc, the Epoq'auto shows in Lyon and a few great finds in the streets of Los Angeles."
   },
   "photos": [
    {
     "w": 1800,
     "h": 2400,
     "src": "img/auto/r165.jpg",
     "t": "img/auto/r165-1200.jpg",
     "cap": {
      "fr": "Rallye Monte-Carlo — janvier 2025",
      "en": "Monte-Carlo Rally — January 2025"
     }
    },
    {
     "w": 1800,
     "h": 2400,
     "src": "img/auto/r168.jpg",
     "t": "img/auto/r168-1200.jpg",
     "cap": {
      "fr": "Rallye Monte-Carlo — janvier 2025",
      "en": "Monte-Carlo Rally — January 2025"
     }
    },
    {
     "w": 1800,
     "h": 2400,
     "src": "img/auto/r162.jpg",
     "t": "img/auto/r162-1200.jpg",
     "cap": {
      "fr": "Rallye Monte-Carlo — janvier 2025",
      "en": "Monte-Carlo Rally — January 2025"
     }
    },
    {
     "w": 1800,
     "h": 2400,
     "src": "img/auto/r255.jpg",
     "t": "img/auto/r255-1200.jpg",
     "cap": {
      "fr": "Rallye Monte-Carlo — janvier 2025",
      "en": "Monte-Carlo Rally — January 2025"
     }
    },
    {
     "w": 1800,
     "h": 2400,
     "src": "img/auto/r261.jpg",
     "t": "img/auto/r261-1200.jpg",
     "cap": {
      "fr": "Rallye Monte-Carlo — janvier 2025",
      "en": "Monte-Carlo Rally — January 2025"
     }
    },
    {
     "w": 1800,
     "h": 2400,
     "src": "img/auto/r264.jpg",
     "t": "img/auto/r264-1200.jpg",
     "cap": {
      "fr": "Rallye Monte-Carlo — janvier 2025",
      "en": "Monte-Carlo Rally — January 2025"
     }
    },
    {
     "w": 1800,
     "h": 2400,
     "src": "img/auto/r266.jpg",
     "t": "img/auto/r266-1200.jpg",
     "cap": {
      "fr": "Rallye Monte-Carlo — janvier 2025",
      "en": "Monte-Carlo Rally — January 2025"
     }
    },
    {
     "w": 1800,
     "h": 2400,
     "src": "img/auto/r267.jpg",
     "t": "img/auto/r267-1200.jpg",
     "cap": {
      "fr": "Rallye Monte-Carlo — janvier 2025",
      "en": "Monte-Carlo Rally — January 2025"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r236.jpg",
     "t": "img/auto/r236-1200.jpg",
     "cap": {
      "fr": "Rallye Monte-Carlo — janvier 2025",
      "en": "Monte-Carlo Rally — January 2025"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r241.jpg",
     "t": "img/auto/r241-1200.jpg",
     "cap": {
      "fr": "Rallye Monte-Carlo — janvier 2025",
      "en": "Monte-Carlo Rally — January 2025"
     }
    },
    {
     "w": 1800,
     "h": 2400,
     "src": "img/auto/r254.jpg",
     "t": "img/auto/r254-1200.jpg",
     "cap": {
      "fr": "Rallye Monte-Carlo — janvier 2025",
      "en": "Monte-Carlo Rally — January 2025"
     }
    },
    {
     "w": 1800,
     "h": 2400,
     "src": "img/auto/r170.jpg",
     "t": "img/auto/r170-1200.jpg",
     "cap": {
      "fr": "Rallye Monte-Carlo — janvier 2025",
      "en": "Monte-Carlo Rally — January 2025"
     }
    },
    {
     "w": 2400,
     "h": 1800,
     "src": "img/auto/r181.jpg",
     "t": "img/auto/r181-1200.jpg",
     "cap": {
      "fr": "Rallye Monte-Carlo — janvier 2025",
      "en": "Monte-Carlo Rally — January 2025"
     }
    },
    {
     "w": 2400,
     "h": 1844,
     "src": "img/auto/r214.jpg",
     "t": "img/auto/r214-1200.jpg",
     "cap": {
      "fr": "Rallye Monte-Carlo — janvier 2025",
      "en": "Monte-Carlo Rally — January 2025"
     }
    },
    {
     "w": 2400,
     "h": 1800,
     "src": "img/auto/r185.jpg",
     "t": "img/auto/r185-1200.jpg",
     "cap": {
      "fr": "Rallye Monte-Carlo — janvier 2025",
      "en": "Monte-Carlo Rally — January 2025"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r103.jpg",
     "t": "img/auto/r103-1200.jpg",
     "cap": {
      "fr": "Rallye de Charbonnières — avril 2025",
      "en": "Charbonnières Rally — April 2025"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r105.jpg",
     "t": "img/auto/r105-1200.jpg",
     "cap": {
      "fr": "Rallye de Charbonnières — avril 2025",
      "en": "Charbonnières Rally — April 2025"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r107.jpg",
     "t": "img/auto/r107-1200.jpg",
     "cap": {
      "fr": "Rallye de Charbonnières — avril 2025",
      "en": "Charbonnières Rally — April 2025"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r132.jpg",
     "t": "img/auto/r132-1200.jpg",
     "cap": {
      "fr": "Rallye de Charbonnières — avril 2025",
      "en": "Charbonnières Rally — April 2025"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r145.jpg",
     "t": "img/auto/r145-1200.jpg",
     "cap": {
      "fr": "Rallye de Charbonnières — avril 2025",
      "en": "Charbonnières Rally — April 2025"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r141.jpg",
     "t": "img/auto/r141-1200.jpg",
     "cap": {
      "fr": "Rallye de Charbonnières — avril 2025",
      "en": "Charbonnières Rally — April 2025"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r142.jpg",
     "t": "img/auto/r142-1200.jpg",
     "cap": {
      "fr": "Rallye de Charbonnières — avril 2025",
      "en": "Charbonnières Rally — April 2025"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r124.jpg",
     "t": "img/auto/r124-1200.jpg",
     "cap": {
      "fr": "Rallye de Charbonnières — avril 2025",
      "en": "Charbonnières Rally — April 2025"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r148.jpg",
     "t": "img/auto/r148-1200.jpg",
     "cap": {
      "fr": "Rallye de Charbonnières — avril 2025",
      "en": "Charbonnières Rally — April 2025"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r151.jpg",
     "t": "img/auto/r151-1200.jpg",
     "cap": {
      "fr": "Rallye de Charbonnières — avril 2026",
      "en": "Charbonnières Rally — April 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r152.jpg",
     "t": "img/auto/r152-1200.jpg",
     "cap": {
      "fr": "Rallye de Charbonnières — avril 2026",
      "en": "Charbonnières Rally — April 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r154.jpg",
     "t": "img/auto/r154-1200.jpg",
     "cap": {
      "fr": "Rallye du Mont-Blanc — septembre 2025",
      "en": "Mont-Blanc Rally — September 2025"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r155.jpg",
     "t": "img/auto/r155-1200.jpg",
     "cap": {
      "fr": "Rallye du Mont-Blanc — septembre 2025",
      "en": "Mont-Blanc Rally — September 2025"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r156.jpg",
     "t": "img/auto/r156-1200.jpg",
     "cap": {
      "fr": "Rallye du Mont-Blanc — septembre 2025",
      "en": "Mont-Blanc Rally — September 2025"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r157.jpg",
     "t": "img/auto/r157-1200.jpg",
     "cap": {
      "fr": "Rallye du Mont-Blanc — septembre 2025",
      "en": "Mont-Blanc Rally — September 2025"
     }
    },
    {
     "w": 2400,
     "h": 1800,
     "src": "img/auto/r028.jpg",
     "t": "img/auto/r028-1200.jpg",
     "cap": {
      "fr": "Epoq'auto, Lyon — novembre 2026",
      "en": "Epoq'auto, Lyon — November 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/auto/r029.jpg",
     "t": "img/auto/r029-1200.jpg",
     "cap": {
      "fr": "Epoq'auto, Lyon — novembre 2026",
      "en": "Epoq'auto, Lyon — November 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/auto/r031.jpg",
     "t": "img/auto/r031-1200.jpg",
     "cap": {
      "fr": "Epoq'auto, Lyon — novembre 2026",
      "en": "Epoq'auto, Lyon — November 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/auto/r042.jpg",
     "t": "img/auto/r042-1200.jpg",
     "cap": {
      "fr": "Epoq'auto, Lyon — novembre 2026",
      "en": "Epoq'auto, Lyon — November 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r043.jpg",
     "t": "img/auto/r043-1200.jpg",
     "cap": {
      "fr": "Epoq'auto, Lyon — novembre 2026",
      "en": "Epoq'auto, Lyon — November 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r045.jpg",
     "t": "img/auto/r045-1200.jpg",
     "cap": {
      "fr": "Epoq'auto, Lyon — novembre 2026",
      "en": "Epoq'auto, Lyon — November 2026"
     }
    },
    {
     "w": 1350,
     "h": 2400,
     "src": "img/auto/r048.jpg",
     "t": "img/auto/r048-1200.jpg",
     "cap": {
      "fr": "Epoq'auto, Lyon — novembre 2026",
      "en": "Epoq'auto, Lyon — November 2026"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/auto/r049.jpg",
     "t": "img/auto/r049-1200.jpg",
     "cap": {
      "fr": "Epoq'auto, Lyon — novembre 2026",
      "en": "Epoq'auto, Lyon — November 2026"
     }
    },
    {
     "w": 1800,
     "h": 2400,
     "src": "img/auto/r051.jpg",
     "t": "img/auto/r051-1200.jpg",
     "cap": {
      "fr": "Epoq'auto, Lyon — novembre 2026",
      "en": "Epoq'auto, Lyon — November 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r052.jpg",
     "t": "img/auto/r052-1200.jpg",
     "cap": {
      "fr": "Epoq'auto, Lyon — novembre 2026",
      "en": "Epoq'auto, Lyon — November 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r047.jpg",
     "t": "img/auto/r047-1200.jpg",
     "cap": {
      "fr": "Epoq'auto, Lyon — novembre 2026",
      "en": "Epoq'auto, Lyon — November 2026"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r006.jpg",
     "t": "img/auto/r006-1200.jpg",
     "cap": {
      "fr": "Epoq'auto, Lyon — novembre 2024",
      "en": "Epoq'auto, Lyon — November 2024"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/auto/r012.jpg",
     "t": "img/auto/r012-1200.jpg",
     "cap": {
      "fr": "Epoq'auto, Lyon — novembre 2024",
      "en": "Epoq'auto, Lyon — November 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r018.jpg",
     "t": "img/auto/r018-1200.jpg",
     "cap": {
      "fr": "Epoq'auto, Lyon — novembre 2024",
      "en": "Epoq'auto, Lyon — November 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r019.jpg",
     "t": "img/auto/r019-1200.jpg",
     "cap": {
      "fr": "Epoq'auto, Lyon — novembre 2024",
      "en": "Epoq'auto, Lyon — November 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r022.jpg",
     "t": "img/auto/r022-1200.jpg",
     "cap": {
      "fr": "Epoq'auto, Lyon — novembre 2024",
      "en": "Epoq'auto, Lyon — November 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/r010.jpg",
     "t": "img/auto/r010-1200.jpg",
     "cap": {
      "fr": "Epoq'auto, Lyon — novembre 2024",
      "en": "Epoq'auto, Lyon — November 2024"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/017.jpg",
     "t": "img/auto/017-1200.jpg",
     "cap": {
      "fr": "Los Angeles — août 2023",
      "en": "Los Angeles — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/013.jpg",
     "t": "img/auto/013-1200.jpg",
     "cap": {
      "fr": "Los Angeles — août 2023",
      "en": "Los Angeles — August 2023"
     }
    },
    {
     "w": 1600,
     "h": 2400,
     "src": "img/auto/014.jpg",
     "t": "img/auto/014-1200.jpg",
     "cap": {
      "fr": "Los Angeles — août 2023",
      "en": "Los Angeles — August 2023"
     }
    }
   ],
   "dark": true,
   "rows": [
    [
     12
    ],
    [
     0,
     1,
     2
    ],
    [
     4,
     7,
     3
    ],
    [
     13,
     14
    ],
    [
     15,
     17,
     18
    ],
    [
     26,
     27,
     28
    ],
    [
     33
    ],
    [
     30,
     35,
     38
    ],
    [
     47,
     48,
     31
    ]
   ]
  },
  {
   "id": "weddings",
   "layout": "spread",
   "featured": [
    4,
    16,
    17,
    37,
    20,
    44
   ],
   "title": {
    "fr": "Mariages & Famille",
    "en": "Weddings & Family"
   },
   "subtitle": {
    "fr": "Mariages, couples, détails",
    "en": "Weddings, couples, details"
   },
   "place": {
    "fr": "France",
    "en": "France"
   },
   "year": "2026",
   "text": {
    "fr": "Des images naturelles et intimes : les gestes, les matières, les fleurs et la lumière d'une journée qui compte.",
    "en": "Natural, intimate images: gestures, textures, flowers and the light of a day that matters."
   },
   "photos": [
    {
     "w": 3840,
     "h": 5760,
     "s": "8805eb76-322e-4163-8476-9952ea9efd3f_rw_1200.jpg?h=e8ab21c5529f184094a4123e764cd3d1",
     "l": "8805eb76-322e-4163-8476-9952ea9efd3f_rw_1920.jpg?h=da2b28235cb28e8a79fa60c8318c9c05"
    },
    {
     "w": 1920,
     "h": 2880,
     "s": "5f38c19a-40b1-4fad-88d4-357a2b0db779_rw_1200.jpg?h=161c39ec301ebfd09231b9dac442e823",
     "l": "5f38c19a-40b1-4fad-88d4-357a2b0db779_rw_1920.jpg?h=142799fe6378ca6a81146533c940608d"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "895beacc-baaa-4d06-9adb-6fbdaa23ea76_rw_1200.jpg?h=4038a437688f5201078064542a7f5150",
     "l": "895beacc-baaa-4d06-9adb-6fbdaa23ea76_rw_1920.jpg?h=d1444293091bf387c7475549eca465f0"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "65ab393a-ac6c-4861-bea1-2228a38173a3_rw_1200.jpg?h=c81cfeccb8b9a50f159007b1b0174b86",
     "l": "65ab393a-ac6c-4861-bea1-2228a38173a3_rw_1920.jpg?h=c26c28fafc6eafc5bf06c9469f6b69c7"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "2cc0b338-a9a8-472e-a7b1-5810157eff6c_rw_1200.jpg?h=69930a86aba314fff1dd17dfa7a5b6f5",
     "l": "2cc0b338-a9a8-472e-a7b1-5810157eff6c_rw_1920.jpg?h=2728c727f83c2aed3a2bdba4eaafd53b"
    },
    {
     "w": 1920,
     "h": 2880,
     "s": "b2044e63-644e-41b0-81ae-8878aa53d9e5_rw_1200.jpg?h=7cf79e7276e88a12e056da95e89732cc",
     "l": "b2044e63-644e-41b0-81ae-8878aa53d9e5_rw_1920.jpg?h=7a01e4d5a2f7e0e08ccce8cf7ecc23a2"
    },
    {
     "w": 3840,
     "h": 3840,
     "s": "f863975e-1a3e-465d-abd1-4717cec36edb_rw_1200.jpg?h=e6a8ac277bd89ee919b9e1786c35d7c7",
     "l": "f863975e-1a3e-465d-abd1-4717cec36edb_rw_1920.jpg?h=83e2fdfd29a58c904ac87b9c6f27abc2"
    },
    {
     "w": 1920,
     "h": 2879,
     "s": "343c3fee-03d8-4e07-a6f0-e3e21c84649f_rw_1200.jpg?h=28fce957b2a252927945ddc5dbcf00a6",
     "l": "343c3fee-03d8-4e07-a6f0-e3e21c84649f_rw_1920.jpg?h=12ca65da41d2d8572c7d5178dff613a7"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "a39bc9cb-f055-40b3-9d8d-7898065cc906_rw_1200.jpg?h=4b25b356c701afd511ca8769c5726a0c",
     "l": "a39bc9cb-f055-40b3-9d8d-7898065cc906_rw_1920.jpg?h=5d571ba5d0fbc22aad72ebd8c0fe5faf"
    },
    {
     "w": 3840,
     "h": 5759,
     "s": "ceb7b1ff-0189-48dc-939f-9831f3ed0ead_rw_1200.jpg?h=6ee4ad86984e763cb0cb8b3edd449fdc",
     "l": "ceb7b1ff-0189-48dc-939f-9831f3ed0ead_rw_1920.jpg?h=cbbd3324bb5f79a02be7d70455cdf135"
    },
    {
     "w": 3840,
     "h": 4969,
     "s": "b46ae744-9b9f-4164-b86c-4c0362b0f95a_rw_1200.jpg?h=d71c34f8cc4d93a09f1a1beb5296ef5a",
     "l": "b46ae744-9b9f-4164-b86c-4c0362b0f95a_rw_1920.jpg?h=80a8e2a30e50b84c5777d0bbe326f299"
    },
    {
     "w": 1920,
     "h": 1920,
     "s": "3dbf59f5-54ef-42fc-8f8e-da24f89393a9_rw_1200.jpg?h=3f7016daf5b35bc58813a8cb6695a890",
     "l": "3dbf59f5-54ef-42fc-8f8e-da24f89393a9_rw_1920.jpg?h=e00bf7ca64e363a9eaa11adb680b7353"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "d0ae07d4-1d24-4fdb-a0ba-8912ac100bd0_rw_1200.jpg?h=6cfb86ea51f6f79b870f1d84b67e1d37",
     "l": "d0ae07d4-1d24-4fdb-a0ba-8912ac100bd0_rw_1920.jpg?h=86c6a47a0032e9c13e7efdfc8089119f"
    },
    {
     "w": 1920,
     "h": 2880,
     "s": "01131a9c-f080-4ec6-8bd5-a3cf0b3ae201_rw_1200.jpg?h=8bce0dfaae26c16ec337303569e2e15e",
     "l": "01131a9c-f080-4ec6-8bd5-a3cf0b3ae201_rw_1920.jpg?h=288e52958cef3cecfc46deb86d793c63"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "33a6ebdf-92d2-4f7e-a7fb-504219e7c816_rw_1200.jpg?h=60dc67dfa9ececd930d53dfcb5a09455",
     "l": "33a6ebdf-92d2-4f7e-a7fb-504219e7c816_rw_1920.jpg?h=92284d1859fa41569dc063edef563e86"
    },
    {
     "w": 1920,
     "h": 2880,
     "s": "5218282a-ac3c-4869-8524-b6ceba254758_rw_1200.jpg?h=0dff616fb72ab9dc31e938b28c788176",
     "l": "5218282a-ac3c-4869-8524-b6ceba254758_rw_1920.jpg?h=160066f67a57f86a9825061ad4cf52d2"
    },
    {
     "w": 3840,
     "h": 2560,
     "s": "2feec44b-095c-4f4c-95c5-3a212ef7afdc_rw_1200.jpg?h=77d4695c85643f808c56eb4bf76ce7fb",
     "l": "2feec44b-095c-4f4c-95c5-3a212ef7afdc_rw_1920.jpg?h=82df153d972c0d32179dc0ba2225bb2d"
    },
    {
     "w": 3840,
     "h": 2560,
     "s": "e3776125-2197-47e5-a4cf-09434be2570c_rw_1200.jpg?h=32e150e4474eabe4f822dee468bcec66",
     "l": "e3776125-2197-47e5-a4cf-09434be2570c_rw_1920.jpg?h=37a6f8697709cbae92009cf3dda678b0"
    },
    {
     "w": 1920,
     "h": 2880,
     "s": "84b15561-00dd-42a7-af06-16d94639ecee_rw_1200.jpg?h=0051ac42681853484302a467d66e4135",
     "l": "84b15561-00dd-42a7-af06-16d94639ecee_rw_1920.jpg?h=99976acbc6709551d62f64cefd6bc9e6"
    },
    {
     "w": 3840,
     "h": 5759,
     "s": "85b5c6ff-7b31-41ef-9e99-23894b808eff_rw_1200.jpg?h=6fc5090e58887ea135918412fcbe6395",
     "l": "85b5c6ff-7b31-41ef-9e99-23894b808eff_rw_1920.jpg?h=575d6d89c57c22f3bac1b772154ce5cd"
    },
    {
     "w": 3840,
     "h": 2560,
     "s": "cc7d7656-2f49-4475-8bd7-9ce21a37eb4f_rw_1200.jpg?h=e0fb79d8dec82fd7334372b08d3b780a",
     "l": "cc7d7656-2f49-4475-8bd7-9ce21a37eb4f_rw_1920.jpg?h=15494782bccf66fab11615ad8344774e"
    },
    {
     "w": 3840,
     "h": 2560,
     "s": "c9dbb518-b210-41de-82c7-1fb14b36dedc_rw_1200.jpg?h=b81c12abd8be111a13d6cd9d16818175",
     "l": "c9dbb518-b210-41de-82c7-1fb14b36dedc_rw_1920.jpg?h=8b0bcd6cf235b093f3edb6023ed07758"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "fdb358d3-5732-4ad5-9f6e-86ebd50b1d69_rw_1200.jpg?h=6b6db47d609773826b3d1be941c93e68",
     "l": "fdb358d3-5732-4ad5-9f6e-86ebd50b1d69_rw_1920.jpg?h=34f399b55860c427f49a985567db9af3"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "3e53c82f-8845-4901-bcb6-baa327c719d1_rw_1200.jpg?h=515f05e1c9437cefa841c0e68b135ea0",
     "l": "3e53c82f-8845-4901-bcb6-baa327c719d1_rw_1920.jpg?h=a6da1179bdbc7de330d28479bd4d8965"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "c8c8f16d-1a14-49d4-9d74-2232169058bb_rw_1200.jpg?h=a42a7c8da09d3b2fcbaf633ce115c303",
     "l": "c8c8f16d-1a14-49d4-9d74-2232169058bb_rw_1920.jpg?h=bad4bbbf26965d36242b725bdb437197"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "a66c24cb-625d-42a5-9229-b33f561fc217_rw_1200.jpg?h=bdc81f629e85facf8379467a6022afec",
     "l": "a66c24cb-625d-42a5-9229-b33f561fc217_rw_1920.jpg?h=a20e424bf99bcadd0e091eaeecfca92d"
    },
    {
     "w": 1920,
     "h": 1920,
     "s": "097e5dfe-432e-4930-bb7d-8a9f58da3c13_rw_1200.jpg?h=0533d683efa47922a7c08fdd23f7e3fe",
     "l": "097e5dfe-432e-4930-bb7d-8a9f58da3c13_rw_1920.jpg?h=7597f27c93961637c84051c1acf0c477"
    },
    {
     "w": 1920,
     "h": 2483,
     "s": "648f2d7c-d9ff-4612-9915-7a61e3356b16_rw_1200.jpg?h=862d99fa7ee690198dfe3ab84901d102",
     "l": "648f2d7c-d9ff-4612-9915-7a61e3356b16_rw_1920.jpg?h=5a15b9350e4b702bdfe8b651e83c0d0f"
    },
    {
     "w": 3840,
     "h": 3840,
     "s": "5625abc8-380f-462f-bb40-fd0bb4652a70_rw_1200.jpg?h=52b7211c83a085afe6f6c477d811d8d2",
     "l": "5625abc8-380f-462f-bb40-fd0bb4652a70_rw_1920.jpg?h=923860fda08881e9492471048390b6ad"
    },
    {
     "w": 3840,
     "h": 2559,
     "s": "47ce6f8c-4abb-4353-9a4f-64ae8b2af297_rw_1200.jpg?h=969cbd4079498d0343d8e4c34652f5df",
     "l": "47ce6f8c-4abb-4353-9a4f-64ae8b2af297_rw_1920.jpg?h=91d07290a25416be43c4a78098ecd385"
    },
    {
     "w": 1920,
     "h": 1920,
     "s": "47a89b08-9951-409b-8393-3f68c181342e_rw_1200.jpg?h=6c5c98afd799e378bcd4770b2a33fb1f",
     "l": "47a89b08-9951-409b-8393-3f68c181342e_rw_1920.jpg?h=4168d044c3a4e951a4658e1d71cdbd96"
    },
    {
     "w": 3840,
     "h": 2560,
     "s": "19d3b9b6-3361-4932-b199-5cde5c78fff8_rw_1200.jpg?h=74272a059423bf3f4f7cc166175c0f51",
     "l": "19d3b9b6-3361-4932-b199-5cde5c78fff8_rw_1920.jpg?h=a4738ba66773534169a911e045ea498a"
    },
    {
     "w": 3840,
     "h": 3840,
     "s": "1c67bd9d-0937-41e7-9fea-85245c04b161_rw_1200.jpg?h=4753d544b7fed26f6a9ebcb3ea25adf2",
     "l": "1c67bd9d-0937-41e7-9fea-85245c04b161_rw_1920.jpg?h=f59af61e116a7b544d169f878b19bae0"
    },
    {
     "w": 3840,
     "h": 2560,
     "s": "f3995f88-b694-4a74-b510-66df4cf34ad1_rw_1200.jpg?h=b49edd4c4f9a0943bd5b892655ab6daf",
     "l": "f3995f88-b694-4a74-b510-66df4cf34ad1_rw_1920.jpg?h=5a97b710379d172f0745ac9c7c88f396"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "48436081-3d5c-4af5-8f3c-a7ac9497c173_rw_1200.jpg?h=693e2e69c689aa68b48d1acb22453b5b",
     "l": "48436081-3d5c-4af5-8f3c-a7ac9497c173_rw_1920.jpg?h=487b70664e74f6bfc6db816d2a646efb"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "4772bb46-fb81-4aff-bd1e-945b775579dd_rw_1200.jpg?h=39d711e6c3ad7d9590f8074849c44b53",
     "l": "4772bb46-fb81-4aff-bd1e-945b775579dd_rw_1920.jpg?h=d77cbf5e821d8551fa484cb4d7c7b9ea"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "bcecd79d-0fe4-400b-88dc-5359a35a00cf_rw_1200.jpg?h=ae69f638150e050d66b2dc56e4433bbb",
     "l": "bcecd79d-0fe4-400b-88dc-5359a35a00cf_rw_1920.jpg?h=bda84102614988a2d57f69bb840d0cc7"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "075dfe97-bf23-4186-8ac2-954eff1017c2_rw_1200.jpg?h=5162df7baa4bf66bb2fe408810e33946",
     "l": "075dfe97-bf23-4186-8ac2-954eff1017c2_rw_1920.jpg?h=a4fdf525d993aa679d3e608d43b29931"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "9d66b05c-eba5-4262-81ed-dca29587a725_rw_1200.jpg?h=4f1ec594e122d373c7ca3be59a9a692d",
     "l": "9d66b05c-eba5-4262-81ed-dca29587a725_rw_1920.jpg?h=ddb64e928ae68537bdeaad85dd617701"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "8f2130cb-ffab-4137-835e-e870d5ea1536_rw_1200.jpg?h=8d5a2bb8bb050552462cc4c2b92ddae6",
     "l": "8f2130cb-ffab-4137-835e-e870d5ea1536_rw_1920.jpg?h=c014186cce49317560724407962565ff"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "d2acd0bf-a318-43b4-87a3-966b9acdde57_rw_1200.jpg?h=31d4b9f58ce572dcaca49e895d3ab7bb",
     "l": "d2acd0bf-a318-43b4-87a3-966b9acdde57_rw_1920.jpg?h=4860e708eea85acdd16d0ddc5d2be859"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "bf3166d2-b5ba-4750-b7d8-5c458f811edf_rw_1200.jpg?h=ccfb5c372ade02a04b31088efccad320",
     "l": "bf3166d2-b5ba-4750-b7d8-5c458f811edf_rw_1920.jpg?h=e99c2a78f84bb6a4d1d4f2e9f00e0d7e"
    },
    {
     "w": 3840,
     "h": 5759,
     "s": "58b3ee3d-bf92-4404-a4e4-fe1c2a7f5b0a_rw_1200.jpg?h=b5c8fac25ea9dbaff36858dacdbc4816",
     "l": "58b3ee3d-bf92-4404-a4e4-fe1c2a7f5b0a_rw_1920.jpg?h=a3d1325791c375e360999615f80c3e49"
    },
    {
     "w": 3840,
     "h": 5375,
     "s": "5be515b2-62ac-46f0-9b13-68b99edc9528_rw_1200.jpg?h=6c47665708fdc82ec2fe3c8ef80c6e43",
     "l": "5be515b2-62ac-46f0-9b13-68b99edc9528_rw_1920.jpg?h=d3e17a345ddc80a8c3e9b93d2574b705"
    },
    {
     "w": 3840,
     "h": 2560,
     "s": "e228c821-3c65-4597-91f6-0235b852d504_rw_1200.jpg?h=48d77980a627d071c4853006730d0012",
     "l": "e228c821-3c65-4597-91f6-0235b852d504_rw_1920.jpg?h=4c7c471d132651d3b1ee3a82a25efc80"
    },
    {
     "w": 3840,
     "h": 2879,
     "s": "af325063-a379-443e-8f1a-49eccca76a99_rw_1200.jpg?h=d6dd583923041b33a358c187f3dc059c",
     "l": "af325063-a379-443e-8f1a-49eccca76a99_rw_1920.jpg?h=dab008b9d983b17ec6f182bab6db772d"
    },
    {
     "w": 3840,
     "h": 5119,
     "s": "88cba6fb-33ca-4585-bcc1-c42de9d3d1fc_rw_1200.jpg?h=7ce5e4dfaaee1bfc18ca97cc304dfe4a",
     "l": "88cba6fb-33ca-4585-bcc1-c42de9d3d1fc_rw_1920.jpg?h=8430334c5a4dcc3a4dbaaf7add0888c7"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "063a6917-858e-4594-84bc-98041c5c6ea6_rw_1200.jpg?h=15bbf70ac5f0927b24700519fc99417f",
     "l": "063a6917-858e-4594-84bc-98041c5c6ea6_rw_1920.jpg?h=29b08804328a220d64315c389d9e38d1"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "de8aadb3-16fe-4c0b-8997-b32866332951_rw_1200.jpg?h=0a664209e248873ac6c7b4c3d8e5e1c9",
     "l": "de8aadb3-16fe-4c0b-8997-b32866332951_rw_1920.jpg?h=700d5bf690929a3aec8bd17e7a6e198a"
    }
   ]
  }
 ]
};
