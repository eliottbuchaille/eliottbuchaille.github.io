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
   "fr": "Astro · Paysage · Street · Mariage · Automobile · Aérien",
   "en": "Astro · Landscape · Street · Weddings · Automotive · Aerial"
  },
  "intro": {
   "fr": "Photographe français basé à Lyon. Astrophotographie, paysages, mariages, rue, automobile et vues aériennes.",
   "en": "French photographer based in Lyon. Astrophotography, landscapes, weddings, street, automotive and aerial photography."
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
     4,
     5,
     9
    ],
    [
     6,
     7
    ],
    [
     8,
     10
    ],
    [
     11,
     12
    ]
   ],
   "featured": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
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
    "fr": "Alpes · Ouest américain",
    "en": "Alps · American West"
   },
   "year": "2024 — 2026",
   "text": {
    "fr": "Des nuits en altitude, du col de l'Iseran au lac Guichard jusqu'aux déserts de l'Utah : la Voie lactée au-dessus des reliefs, des dizaines de poses empilées et des panoramas assemblés image par image.",
    "en": "Nights at altitude, from the Col de l'Iseran to Lac Guichard and the deserts of Utah: the Milky Way above the peaks, dozens of stacked exposures and panoramas stitched frame by frame."
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
     "src": "img/astro/05-guichard-etoile-filante.jpg",
     "t": "img/astro/05-guichard-etoile-filante-1200.jpg",
     "cap": {
      "fr": "Lac Guichard — étoile filante, 100 poses empilées",
      "en": "Lac Guichard — shooting star, 100 stacked frames"
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
     "w": 2400,
     "h": 1600,
     "src": "img/astro/07-usa-rocher.jpg",
     "t": "img/astro/07-usa-rocher-1200.jpg",
     "cap": {
      "fr": "Ouest américain",
      "en": "American West"
     }
    },
    {
     "w": 1920,
     "h": 2400,
     "src": "img/astro/08-usa-rocher-vertical.jpg",
     "t": "img/astro/08-usa-rocher-vertical-1200.jpg",
     "cap": {
      "fr": "Ouest américain",
      "en": "American West"
     }
    },
    {
     "w": 2400,
     "h": 1600,
     "src": "img/astro/09-usa-hat-rock.jpg",
     "t": "img/astro/09-usa-hat-rock-1200.jpg",
     "cap": {
      "fr": "Hat Rock, Utah",
      "en": "Hat Rock, Utah"
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
  },
  {
   "id": "landscapes",
   "layout": "wide",
   "featured": [
    11,
    18,
    16,
    4,
    23
   ],
   "title": {
    "fr": "Paysages & Nature",
    "en": "Landscapes & Nature"
   },
   "subtitle": {
    "fr": "Lacs, montagnes, déserts",
    "en": "Lakes, mountains, deserts"
   },
   "place": {
    "fr": "Alpes · Ouest américain",
    "en": "Alps · American West"
   },
   "year": "2026",
   "text": {
    "fr": "Des lacs alpins au coucher du soleil jusqu'aux déserts de l'Ouest américain : la lumière, l'échelle et le silence des grands espaces.",
    "en": "From alpine lakes at sunset to the deserts of the American West: light, scale and the silence of wide-open spaces."
   },
   "photos": [
    {
     "w": 3840,
     "h": 5760,
     "s": "d30c9825-6bf3-4c61-8433-89047cc73843_rw_1200.jpg?h=6cb9f3b6be06ddf114bd1c83d2284398",
     "l": "d30c9825-6bf3-4c61-8433-89047cc73843_rw_1920.jpg?h=334a5047665ee91bf04e8a37a999d9e6"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "e1b433a6-d797-4267-83da-f243b7350cee_rw_1200.jpg?h=5b529e4edb0932c4440f07d9bf4ac826",
     "l": "e1b433a6-d797-4267-83da-f243b7350cee_rw_1920.jpg?h=b20bfdee41e789e33d464416b18964b2"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "3ef52536-69f3-42df-a3d9-d2c15384d356_rw_1200.jpg?h=af15b151a47c938364b6d670dd5d7570",
     "l": "3ef52536-69f3-42df-a3d9-d2c15384d356_rw_1920.jpg?h=13705b703dad8e2d610b40f8b0ef2563"
    },
    {
     "w": 1920,
     "h": 2879,
     "s": "3e8cfd51-ccc5-43dc-b69a-c663599df907_rw_1200.jpg?h=124af9304f77eb46f28b03845b129387",
     "l": "3e8cfd51-ccc5-43dc-b69a-c663599df907_rw_1920.jpg?h=b0da28d257f0caab461a63db25235be7"
    },
    {
     "w": 1920,
     "h": 2879,
     "s": "12df6abb-a539-455d-8bfa-b7a7808d68b2_rw_1200.jpg?h=25b38bb4e93d771bdc64f22ab1f16efa",
     "l": "12df6abb-a539-455d-8bfa-b7a7808d68b2_rw_1920.jpg?h=2501267bb7d32cf3d300d5975dd13588"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "86b7bc4e-f173-4508-8cd8-791f77e065d4_rw_1200.jpg?h=027521e60ccc5dcf7cefb4b7c612a6f7",
     "l": "86b7bc4e-f173-4508-8cd8-791f77e065d4_rw_1920.jpg?h=231c166c7398d0455fd65201eecbce9c"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "6c1bb9ae-f6b0-4c48-bcdb-47d7b621f2f1_rw_1200.jpg?h=438bc238151926873b83b880a77d6fbf",
     "l": "6c1bb9ae-f6b0-4c48-bcdb-47d7b621f2f1_rw_1920.jpg?h=a8342f84d4698c2639396e6f63820be6"
    },
    {
     "w": 3840,
     "h": 5759,
     "s": "27912a73-3df2-483e-82cf-bdb13d3d609b_rw_1200.jpg?h=03650056eb70a6222c834f7c22e47c2d",
     "l": "27912a73-3df2-483e-82cf-bdb13d3d609b_rw_1920.jpg?h=f41645f9e86b76240ff9a654665622f2"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "c858a9a6-afce-4183-b5cf-29dc8243bdc8_rw_1200.jpg?h=ea75ad40d8979b3891c1217d34bdc6d3",
     "l": "c858a9a6-afce-4183-b5cf-29dc8243bdc8_rw_1920.jpg?h=cc417e168cdf497620f70a2b8a88fb16"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "7c1c3989-d1f4-4cbd-87ea-f18e93bafa32_rw_1200.jpg?h=b4cbe5d2d833d40a260f00cefc375a9d",
     "l": "7c1c3989-d1f4-4cbd-87ea-f18e93bafa32_rw_1920.jpg?h=e9b1ab82a664a51bcb4e385b075622c6"
    },
    {
     "w": 1920,
     "h": 2400,
     "s": "4c78ce58-8649-4c16-b5c7-d884f058ea4d_rw_1200.jpg?h=dd50fe9147123ba54242617fd548d694",
     "l": "4c78ce58-8649-4c16-b5c7-d884f058ea4d_rw_1920.jpg?h=209c4986f54fd9e5b8e95d59bb4e313a"
    },
    {
     "w": 3840,
     "h": 2560,
     "s": "4c45f9b4-8706-470a-9a55-5b75c4671c1c_rw_1200.jpg?h=a16f6ad89516fcbadd43c314e546c35a",
     "l": "4c45f9b4-8706-470a-9a55-5b75c4671c1c_rw_1920.jpg?h=236cbace0b27185ed3108de65331290f"
    },
    {
     "w": 3840,
     "h": 2560,
     "s": "79670e4b-6b7f-4273-a92c-c3490f1a74d3_rw_1200.jpg?h=2109434dca6843ad982f438b148c8880",
     "l": "79670e4b-6b7f-4273-a92c-c3490f1a74d3_rw_1920.jpg?h=ed503ec02237766b82a64e8fd9a19b74"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "ae178f73-cf93-4a09-a150-128633d40b3c_rw_1200.jpg?h=54f7a6fdb2c57d48def48872283126f7",
     "l": "ae178f73-cf93-4a09-a150-128633d40b3c_rw_1920.jpg?h=95bf3f573599b721b1e6173862f35228"
    },
    {
     "w": 3840,
     "h": 2560,
     "s": "e3e9be9c-5cd6-4bb4-aebc-679bf46a3341_rw_1200.jpg?h=1c13a700f9c706f47a7dd77a049e583b",
     "l": "e3e9be9c-5cd6-4bb4-aebc-679bf46a3341_rw_1920.jpg?h=14e67e5ee55b55f5cd6d9f821e1dd83f"
    },
    {
     "w": 3840,
     "h": 2560,
     "s": "f4e66339-1be5-47a6-a61e-1e2717fbfc22_rw_1200.jpg?h=b640bfbf463dc59d6a083e33d6bafa5d",
     "l": "f4e66339-1be5-47a6-a61e-1e2717fbfc22_rw_1920.jpg?h=afa5d71c97a4c458363eda7c536bd207"
    },
    {
     "w": 3840,
     "h": 2560,
     "s": "d2c43cf6-bfa8-4bec-b2c0-1502c8c1588e_rw_1200.jpg?h=8f612ca43d1abf1b10fcb3c296e5c877",
     "l": "d2c43cf6-bfa8-4bec-b2c0-1502c8c1588e_rw_1920.jpg?h=e06930bf593e08983f31befddaf4019c"
    },
    {
     "w": 3840,
     "h": 2560,
     "s": "9cfd02bc-030d-4bf9-afc1-c0dcb22a0ba1_rw_1200.jpg?h=4358a758e99f0364fab26a225ba31b42",
     "l": "9cfd02bc-030d-4bf9-afc1-c0dcb22a0ba1_rw_1920.jpg?h=efd0559fddb4464e4139edf1c4750922"
    },
    {
     "w": 3840,
     "h": 2560,
     "s": "ef8b4264-3b94-424e-bfd5-2b370f8c0bc1_rw_1200.jpg?h=92d2ea8b57c0b0f223f6210be22f4c71",
     "l": "ef8b4264-3b94-424e-bfd5-2b370f8c0bc1_rw_1920.jpg?h=65f30bc75d0174eecb1cdd0e100f1ab9"
    },
    {
     "w": 3840,
     "h": 2560,
     "s": "45dc1922-dec2-47c0-960d-1a6a3cec06e3_rw_1200.jpg?h=3e460e3cc61dd2501f643d7dc4a805ae",
     "l": "45dc1922-dec2-47c0-960d-1a6a3cec06e3_rw_1920.jpg?h=9248d4d5f2b7587214dcb54db65dae50"
    },
    {
     "w": 3840,
     "h": 2560,
     "s": "513ca124-e2b7-475f-871d-c5a8f3727ff4_rw_1200.jpg?h=ae0fedac80df15cf7eb808e4e057ed09",
     "l": "513ca124-e2b7-475f-871d-c5a8f3727ff4_rw_1920.jpg?h=04de9806950ae6cb75cd7ca8ca6cd54d"
    },
    {
     "w": 1920,
     "h": 2879,
     "s": "84a424df-2f71-4260-9530-64e3c8c849a2_rw_1200.jpg?h=e250074e8bc33fbcdd723bae5be7ad99",
     "l": "84a424df-2f71-4260-9530-64e3c8c849a2_rw_1920.jpg?h=952000c9fa0a6afb63880600d990da9b"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "aeb8807c-45a3-49b9-9e84-ddf47938ff4e_rw_1200.jpg?h=e6ca2caebaad86fee2d24e410b93fe78",
     "l": "aeb8807c-45a3-49b9-9e84-ddf47938ff4e_rw_1920.jpg?h=ee5fe770730cdfdd00597d5af2ecd70c"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "755a9f3d-d64f-430b-ac04-2476c092d7da_rw_1200.jpg?h=c61aaad5d88bce2f15c53dd632ad84e7",
     "l": "755a9f3d-d64f-430b-ac04-2476c092d7da_rw_1920.jpg?h=d5790a3a9ba5944ae3a7714783be50d0"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "10aac122-bdf9-4796-ba41-c09329d3f76b_rw_1200.jpg?h=cbc71c61919a70f462b3cb7a4f8db48f",
     "l": "10aac122-bdf9-4796-ba41-c09329d3f76b_rw_1920.jpg?h=410557993f199fc9a0dbd5a4bd55ea62"
    }
   ]
  },
  {
   "id": "street",
   "layout": "register",
   "featured": [
    1,
    2,
    3,
    4,
    5,
    6,
    9,
    10,
    11
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
    "fr": "New York",
    "en": "New York"
   },
   "year": "2026",
   "text": {
    "fr": "La ville en verticales : ponts, avenues, taxis et façades, entre lumière dure et ombres profondes.",
    "en": "The city in verticals: bridges, avenues, cabs and façades, between hard light and deep shadow."
   },
   "photos": [
    {
     "w": 3840,
     "h": 2560,
     "s": "c3410767-17eb-4c8f-84eb-d9c65dfbae94_rw_1200.jpg?h=6620a3ce0af55ba36cf7a8b49b89ede9",
     "l": "c3410767-17eb-4c8f-84eb-d9c65dfbae94_rw_1920.jpg?h=0d5850f5430cdb4581614ed5c0ab1d84"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "50676684-19fd-4216-bfeb-ab04fed0cdc1_rw_1200.jpg?h=e009c00e9c523da03fe80e99dbf546d9",
     "l": "50676684-19fd-4216-bfeb-ab04fed0cdc1_rw_1920.jpg?h=d5887aa4a40587f51b736a27b0e97a1c"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "8923f347-a6d3-438a-b0a6-646371ff1f99_rw_1200.jpg?h=8e3c9af2bd887d8f895cfb5fe4cb24f2",
     "l": "8923f347-a6d3-438a-b0a6-646371ff1f99_rw_1920.jpg?h=56fd820c25db7add59f4b69d4db4dd22"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "0f5e01e2-374f-4853-813b-b3d18bfcc6cc_rw_1200.jpg?h=83830bf354ff808346bc28c4c8a1aca9",
     "l": "0f5e01e2-374f-4853-813b-b3d18bfcc6cc_rw_1920.jpg?h=958bee2374c454089560400986ac5d91"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "20e0c632-f476-4eb3-87f2-5e79bcf99030_rw_1200.jpg?h=a32ceedbe34d999b78a5a553070cd9a3",
     "l": "20e0c632-f476-4eb3-87f2-5e79bcf99030_rw_1920.jpg?h=a20f5b04fdd48becdb75bf296b82c365"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "b2030efd-821c-4765-aa67-64b80a76c254_rw_1200.jpg?h=efb2d6e0bfb73f148832479f8210717e",
     "l": "b2030efd-821c-4765-aa67-64b80a76c254_rw_1920.jpg?h=044009eff7922fcc2016c2d678efb43b"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "823b0cde-d745-42e5-84e4-3d674b368187_rw_1200.jpg?h=09af28cebc7ca87a6c241362267d1102",
     "l": "823b0cde-d745-42e5-84e4-3d674b368187_rw_1920.jpg?h=486770b442629730e4a022330a90bafc"
    },
    {
     "w": 3840,
     "h": 2560,
     "s": "ff81aa27-c76b-494d-b80c-f76aee5d0020_rw_1200.jpg?h=39eceb9145c8927e89a2ad99f9c6b5cc",
     "l": "ff81aa27-c76b-494d-b80c-f76aee5d0020_rw_1920.jpg?h=cadf0f0c960bdfcfe68966e26cb4ff58"
    },
    {
     "w": 1920,
     "h": 2880,
     "s": "f9cec31f-56bc-4b82-804a-e3b4209b9134_rw_1200.jpg?h=e9b919a27c526e8fa6657eaa61abea81",
     "l": "f9cec31f-56bc-4b82-804a-e3b4209b9134_rw_1920.jpg?h=e16b876805f4a3c325c2c10b15deae29"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "84ff85bb-84a1-4c6f-b232-09aeca628bff_rw_1200.jpg?h=0043e74158eeac5fc1b1fbd103d928e6",
     "l": "84ff85bb-84a1-4c6f-b232-09aeca628bff_rw_1920.jpg?h=0b60a45254df4c4c7f86ea2ca8dc187c"
    },
    {
     "w": 1920,
     "h": 2880,
     "s": "bcdcf836-6c3e-47c9-8bb0-3b3b0002df67_rw_1200.jpg?h=02cd04924df64fdc2565e13b0be4c29f",
     "l": "bcdcf836-6c3e-47c9-8bb0-3b3b0002df67_rw_1920.jpg?h=669e7aada9df056afe33e03ea1a113af"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "8068b782-1742-41b8-b7b6-f867ae26f3b6_rw_1200.jpg?h=8b5b29719e26529657f834e05d832bd1",
     "l": "8068b782-1742-41b8-b7b6-f867ae26f3b6_rw_1920.jpg?h=f39cc8d97b0d8a17a8ba36945ce7c149"
    }
   ]
  },
  {
   "id": "automotive",
   "layout": "dark",
   "featured": [
    0,
    1,
    4,
    6,
    7
   ],
   "title": {
    "fr": "Automobile",
    "en": "Automotive"
   },
   "subtitle": {
    "fr": "Voitures, détails, route",
    "en": "Cars, details, the road"
   },
   "place": {
    "fr": "France · États-Unis",
    "en": "France · United States"
   },
   "year": "2026",
   "text": {
    "fr": "Des voitures dans leur décor : une route en forêt, un tableau de bord, une sportive sous les palmiers.",
    "en": "Cars in their setting: a forest road, a dashboard, a sports car under the palm trees."
   },
   "photos": [
    {
     "w": 3840,
     "h": 5760,
     "s": "750bdaa9-6889-4c52-8e7d-bec395815a6e_rw_1200.jpg?h=6d8f468a28ec67b9882eaed030f64042",
     "l": "750bdaa9-6889-4c52-8e7d-bec395815a6e_rw_1920.jpg?h=e2d7bb976952c7449dc64f04e5af8011",
     "blur": [
      [
       37.3,
       54.2,
       44.5,
       56.1
      ]
     ]
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "e24f330d-b479-4382-901f-1f27057daa31_rw_1200.jpg?h=25e144edb91acb4c5758b73d9f3a72eb",
     "l": "e24f330d-b479-4382-901f-1f27057daa31_rw_1920.jpg?h=892381a230a260b0fd06b57650cad288",
     "blur": [
      [
       29.5,
       56.6,
       46,
       60.6
      ]
     ]
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "a3af4b87-1b7f-4548-a7d1-a3e5f27cabfa_rw_1200.jpg?h=8f226d98b1b4b3a9b96d8bc03c9d1ea6",
     "l": "a3af4b87-1b7f-4548-a7d1-a3e5f27cabfa_rw_1920.jpg?h=b02c5d28562cc96a6e6c0ac1455aa22d",
     "blur": [
      [
       0,
       62.9,
       23.5,
       68.3
      ]
     ]
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "6a1d4404-c3ff-49a0-850b-fce6c9e04fc7_rw_1200.jpg?h=5cf1308457cddd20f10aea77ad439adf",
     "l": "6a1d4404-c3ff-49a0-850b-fce6c9e04fc7_rw_1920.jpg?h=5bfb13bcda08fc2fc6f7920914af4bc3",
     "blur": [
      [
       37.3,
       58.3,
       55.9,
       62.2
      ]
     ]
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "4f8e3780-9632-4ff4-8982-5907efeb5ad2_rw_1200.jpg?h=fcee5fa8483797841c32383bbf5c00c8",
     "l": "4f8e3780-9632-4ff4-8982-5907efeb5ad2_rw_1920.jpg?h=352fb4a74e0d5d5ea154875cf1eea2d2"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "6f4de216-3da6-4273-a679-353eac7ca94b_rw_1200.jpg?h=263c71968cf49fbfe1b5e0fbac68815c",
     "l": "6f4de216-3da6-4273-a679-353eac7ca94b_rw_1920.jpg?h=43eeddfba6e150230d31581ec83b2aa0"
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "8ca54569-a133-4f41-b8b3-23f491a15f84_rw_1200.jpg?h=0ec32208f4b054ce6c1caa5ea69c54fc",
     "l": "8ca54569-a133-4f41-b8b3-23f491a15f84_rw_1920.jpg?h=21d78a4ac7afbc4e806652a76d6cc8d7",
     "blur": [
      [
       9.5,
       54.2,
       13.3,
       56
      ]
     ]
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "37d523bf-d0cb-48ac-96ab-ce9bdd39fbee_rw_1200.jpg?h=ae9e9015a1a18b6c930b7d7ca4b70aaa",
     "l": "37d523bf-d0cb-48ac-96ab-ce9bdd39fbee_rw_1920.jpg?h=e30c38ea5bddc3eb1bd3283ebb2c7c77",
     "blur": [
      [
       30.6,
       59.9,
       38.4,
       63.2
      ]
     ]
    },
    {
     "w": 3840,
     "h": 5760,
     "s": "64d02800-89e1-4586-a24b-ea73cda2453d_rw_1200.jpg?h=e2c912bc2533080b23e39c1acd20d387",
     "l": "64d02800-89e1-4586-a24b-ea73cda2453d_rw_1920.jpg?h=af727c4aeaec2ab7acdf3a76b4a5116a"
    }
   ]
  },
  {
   "id": "aerial",
   "layout": "strip",
   "featured": [
    1,
    4,
    5,
    7
   ],
   "title": {
    "fr": "Drone",
    "en": "Aerial"
   },
   "subtitle": {
    "fr": "Vues aériennes",
    "en": "Aerial photography"
   },
   "place": {
    "fr": "Littoral",
    "en": "Coastline"
   },
   "year": "2026",
   "text": {
    "fr": "Le littoral vu d'en haut : eaux turquoise, criques, rochers et lignes de sable que l'on ne voit pas depuis le sol.",
    "en": "The coast from above: turquoise water, coves, rocks and lines of sand you never see from the ground."
   },
   "photos": [
    {
     "w": 1920,
     "h": 2560,
     "s": "cbe3f1f8-9056-416c-ae24-892a7043335c_rw_1200.jpg?h=f033ac2cba338e08e845e5eeb45a3fb5",
     "l": "cbe3f1f8-9056-416c-ae24-892a7043335c_rw_1920.jpg?h=324beb479e5f815b451fb510a6dffb6a"
    },
    {
     "w": 3840,
     "h": 2160,
     "s": "d8c24aee-636d-4565-8205-7a8379ef1ca5_rw_1200.jpg?h=58c257cfd561dcd16b2d2ccd6afff0e1",
     "l": "d8c24aee-636d-4565-8205-7a8379ef1ca5_rw_1920.jpg?h=d0bc68ff202d4da0f16c340aa347466c"
    },
    {
     "w": 3840,
     "h": 6826,
     "s": "bb3ac35f-b68c-48af-8a64-362acc7f06fd_rw_1200.jpg?h=d94449b00ef0ff29f5bb5f68b385f4c6",
     "l": "bb3ac35f-b68c-48af-8a64-362acc7f06fd_rw_1920.jpg?h=311e60a4a41cc46c9820dc5db476b53b"
    },
    {
     "w": 3840,
     "h": 2160,
     "s": "cf5f56fc-306b-4e7a-bca5-b42befc99150_rw_1200.jpg?h=b16e2214c3af4e56fb3c29e47bf06e9a",
     "l": "cf5f56fc-306b-4e7a-bca5-b42befc99150_rw_1920.jpg?h=bf0b15a0166c4e21437c5e6615402839"
    },
    {
     "w": 3840,
     "h": 6826,
     "s": "2df61f2c-b23c-4079-b4f6-aed49f01ba19_rw_1200.JPG?h=2272b30c1352e45454051b7ed595d64f",
     "l": "2df61f2c-b23c-4079-b4f6-aed49f01ba19_rw_1920.JPG?h=2f715be2cd8ab734cd2324726be53f1f"
    },
    {
     "w": 3840,
     "h": 5120,
     "s": "ccbf59ae-62c6-4801-b080-53a79b13d53c_rw_1200.JPG?h=57081981b56c4e572a29c09fcf269f65",
     "l": "ccbf59ae-62c6-4801-b080-53a79b13d53c_rw_1920.JPG?h=86e1e8a9b64c6f903983f1793298e715"
    },
    {
     "w": 3840,
     "h": 5120,
     "s": "c159f818-d3ff-4dbe-af52-2364a436ec81_rw_1200.JPG?h=dbe55bf186f8766f6e36998e04c6a0f6",
     "l": "c159f818-d3ff-4dbe-af52-2364a436ec81_rw_1920.JPG?h=dfebcf341daa6d3920f78ff700565d99"
    },
    {
     "w": 3840,
     "h": 5120,
     "s": "a7141ee5-6d5b-45db-bc2b-4aa267802bac_rw_1200.JPG?h=bfc38ccb7478a9eee195d91f6943ef0b",
     "l": "a7141ee5-6d5b-45db-bc2b-4aa267802bac_rw_1920.JPG?h=551d2ca3cd3d444f774ec379dac6caf9"
    },
    {
     "w": 3840,
     "h": 5120,
     "s": "f0debbe5-957a-4b8a-a027-706416fe3bf9_rw_1200.jpg?h=1ce498907083cdf6b74e22e8650d84f4",
     "l": "f0debbe5-957a-4b8a-a027-706416fe3bf9_rw_1920.jpg?h=db20b2ba29556cdda4f305101bd8831e"
    }
   ]
  }
 ]
};
