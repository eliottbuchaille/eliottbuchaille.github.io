/* ============================================================
   CONTENU DU SITE PHOTO — c'est le seul fichier à modifier.

   Ajouter une photo :
   1. Exporter depuis Lightroom en JPEG ou WebP, côté long 2400 px,
      qualité ~80, et la déposer dans photo/img/<id-de-la-serie>/
   2. Remplir "src" ci-dessous, par ex. src: "img/altitude/01.webp"
   Tant que "src" est vide, le site affiche un emplacement gris.

   ratio   : format de l'image ("3/2", "2/3", "4/5", "1/1", "16/9"...)
   layout  : mise en page de la série
             "spread"   double page de magazine
             "register" registre numéroté 3 × 3
             "wide"     une grande image puis une paire
             "dark"     mosaïque sur fond noir
             "strip"    bandeau de paysages côte à côte
   tone    : couleur des emplacements vides (warm, cool, olive, night, sand)
   ============================================================ */

window.PHOTO = {
  site: {
    name: "Eliott Buchaille",
    volume: "Vol. I",
    place: "Lyon — Genève",
    year: "2026",
    archive: "EB-PH-26",
    intro: "Rue, architecture, montagne et vie sauvage. Un registre d'images en cours, tenu entre Lyon, les Alpes et la Suisse.",
    hero: { src: "", ratio: "21/9", caption: "Image d'ouverture" },
    email: "eliottbuchaille@gmail.com",
    instagram: "", // ex. "https://www.instagram.com/votre-compte"
    gear: ["Canon EOS R7", "Sigma 17-40 mm f/1.8", "DJI Mini 3", "iPhone ProRAW"],
    about: "Étudiant en architecture intérieure, je photographie ce qui me retient : la lumière d'un été européen sur une façade, une crête au petit matin, un animal à distance, le ciel la nuit. Développement dans Lightroom, avec un rendu argentique contemporain que je décline en preset, « European Summer »."
  },

  series: [
    {
      id: "european-summer",
      title: "European Summer",
      subtitle: "Rue, architecture, voyage",
      place: "Europe",
      year: "2025 — 2026",
      text: "Des après-midi chauds, des ombres longues et des façades qui prennent la lumière. La série qui porte ma signature de développement.",
      layout: "spread",
      tone: "warm",
      photos: [
        { src: "", ratio: "4/5", caption: "" },
        { src: "", ratio: "3/2", caption: "" },
        { src: "", ratio: "3/2", caption: "" },
        { src: "", ratio: "4/5", caption: "" },
        { src: "", ratio: "3/2", caption: "" },
        { src: "", ratio: "3/2", caption: "" }
      ]
    },
    {
      id: "altitude",
      title: "Altitude",
      subtitle: "Alpes",
      place: "Alpes françaises et suisses",
      year: "2026",
      text: "Crêtes, refuges et brouillards. Une approche sobre, presque argentique, de la montagne.",
      layout: "register",
      tone: "cool",
      photos: [
        { src: "", ratio: "4/5", caption: "" },
        { src: "", ratio: "4/5", caption: "" },
        { src: "", ratio: "4/5", caption: "" },
        { src: "", ratio: "4/5", caption: "" },
        { src: "", ratio: "4/5", caption: "" },
        { src: "", ratio: "4/5", caption: "" },
        { src: "", ratio: "4/5", caption: "" },
        { src: "", ratio: "4/5", caption: "" },
        { src: "", ratio: "4/5", caption: "" }
      ]
    },
    {
      id: "sauvage",
      title: "Sauvage",
      subtitle: "Animalier",
      place: "Isère, Savoie",
      year: "2026",
      text: "Attendre, observer à distance, ne rien déranger. Des rencontres au téléobjectif.",
      layout: "wide",
      tone: "olive",
      photos: [
        { src: "", ratio: "16/9", caption: "" },
        { src: "", ratio: "3/2", caption: "" },
        { src: "", ratio: "3/2", caption: "" }
      ]
    },
    {
      id: "nocturne",
      title: "Nocturne",
      subtitle: "Astrophotographie",
      place: "Hautes altitudes",
      year: "2026",
      text: "Voie lactée, ciels de montagne et longues poses, loin de la pollution lumineuse.",
      layout: "dark",
      tone: "night",
      photos: [
        { src: "", ratio: "2/3", caption: "" },
        { src: "", ratio: "3/2", caption: "" },
        { src: "", ratio: "1/1", caption: "" },
        { src: "", ratio: "1/1", caption: "" },
        { src: "", ratio: "3/2", caption: "" }
      ]
    },
    {
      id: "vu-d-en-haut",
      title: "Vu d'en haut",
      subtitle: "Prises de vue aériennes",
      place: "Rhône-Alpes",
      year: "2026",
      text: "Le territoire vu au drone : motifs, parcelles, rivières et lignes que l'on ne voit pas depuis le sol.",
      layout: "strip",
      tone: "sand",
      photos: [
        { src: "", ratio: "4/5", caption: "" },
        { src: "", ratio: "4/5", caption: "" },
        { src: "", ratio: "4/5", caption: "" }
      ]
    }
  ]
};
