# Contenu du site — modifier ici puis lancer : python3 build.py
# Blocs disponibles dans un projet :
#   ('chapter', '01', 'Sur-titre', 'Titre', '<p>Texte</p>', [('Clé', 'valeur'), ...])   (liste optionnelle)
#   ('bleed', 'image', 'légende', 'tall' | 'mid')                                        image pleine largeur
#   ('pair', [('image', 'légende', 'portrait|contain'), ...])                              2 images
#   ('trio', [(...), (...), (...)])                                                        1 grande + 2 petites
#   ('swatches', 'Titre', [('Nom', '#hex', 'détail'), ...])
#   ('personas', [('Nom, âge', 'rôle', 'texte'), ...])
#   ('apex',)  carte d'identité APEX

SITE = {
    'desc': "Portfolio d'Eliott Buchaille, architecte d'intérieur en 5e année à CREAD Lyon : tiers-lieux, hôtellerie-restauration, retail et résidentiel.",
    'statement': "J'aborde chaque espace comme une mise en scène sensible : la lumière, la matière et le parcours racontent une histoire avant même qu'on la lise.",
    'about_title': "Un regard d'architecte, une précision d'artisan.",
    'about': """
<p>Je suis en 5<sup>e</sup> année d'architecture intérieure et design global à <strong>CREAD Lyon</strong>. J'aime les projets où tout se tient : un récit clair, un plan qui le sert et des détails dessinés jusqu'à la menuiserie.</p>
<p>Mon mémoire de fin d'études porte sur <strong>l'expérience sensorielle</strong> et sur les technologies qui savent s'effacer dans l'espace. Cette question guide aussi mon regard sur l'hôtellerie et les lieux d'exception, vers lesquels j'oriente ma carrière.</p>
<p>Sur le terrain, plusieurs stages m'ont appris le chantier, les relevés, le rendez-vous client et le mobilier sur mesure. Côté outils, je passe du plan technique au rendu photoréaliste, et j'explore les nouveaux usages de la 3D.</p>
""",
    'rendus_intro': """
<p>Ces scènes sont des explorations personnelles. Je modélise les volumes, le mobilier et la lumière dans <strong>Blender</strong>, puis je finalise l'image avec un outil de rendu assisté par IA pour pousser les matières et l'atmosphère.</p>
<p>C'est un terrain d'essai pour mes ambiances : le bois et la pierre d'un chalet alpin, la chaleur d'un intérieur mid-century, la retenue d'un néo-classique ou la sobriété d'un accueil d'ERP.</p>
""",
    'contact': {
        'email': 'eliottbuchaille@gmail.com',
        'tel': '06 43 65 23 26',
        'zones': 'Auvergne-Rhône-Alpes (Lyon, Annecy) · Suisse',
    },
}

SKILLS = [
    ('SketchUp', 'Modélisation 3D'),
    ('V-Ray', 'Rendu photoréaliste'),
    ('ArchiCAD', 'BIM & permis'),
    ('AutoCAD', 'Plans & détails'),
    ('Blender', 'Scènes & lumière'),
    ('Twinmotion', 'Rendu temps réel'),
    ('Photoshop', 'Retouche & planches'),
    ('InDesign', 'Mise en page'),
    ('IA générative', 'Claude · Gemini · ChatGPT'),
]

TIMELINE = [
    {'when': '2022 — 2027', 'title': "Architecture intérieure & design global", 'where': 'CREAD, Lyon',
     'text': "Titre RNCP de niveau 7. Projets tertiaires, ERP, patrimoine et urbanisme ; mémoire sur l'expérience sensorielle."},
    {'when': 'Mai — juin 2025', 'title': "Stage en agence d'architecture intérieure", 'where': 'LAR_chitect',
     'text': "Suivi de chantier et rendez-vous clients, relevés et métrés. InDesign, SketchUp, V-Ray, ArchiCAD, AutoCAD."},
    {'when': '2024 — 2025', 'title': 'Architecture intérieure & cuisiniste', 'where': 'Les Cuisines de Marines',
     'text': "Rendez-vous clients, conception de mobilier sur mesure sous SketchUp et Twinmotion, visites et réunions de chantier."},
    {'when': 'Juin 2023', 'title': 'Stage artisan', 'where': 'CG Rénovations',
     'text': "Isolation intérieure, cloisons et peinture ; réunions de chantier et fournisseurs."},
    {'when': 'Été 2021', 'title': 'Stage en maîtrise d’ouvrage', 'where': 'Plenetude',
     'text': "Suivi de chantier, rendez-vous clients, relevés et métrés."},
]

PROJECTS = [
# ---------------------------------------------------------------- MARELLE
{
 'slug': 'marelle', 'title': 'Marelle', 'kicker': 'Tiers-lieu étudiant · 4e année', 'wide': True, 'fx': 'marelle',
 'subtitle': "La réhabilitation de l'ancienne école maternelle Gilibert, à Lyon, en tiers-lieu où les étudiants viennent se décharger l'esprit.",
 'teaser': "L'ancienne école Gilibert devient un tiers-lieu pour étudiants : coworking, bibliothèque, café et repos, pensés comme un parcours de l'ouvert vers le concentré.",
 'cover': 'marelle-os-cour', 'cover_alt': 'Open space : grandes baies cintrées, voilages et tables partagées',
 'tags': ['Réhabilitation', 'ERP type L', 'Projet de groupe', 'APS / APD'],
 'facts': [('Lieu', '7 rue Gilibert, Lyon 2e'), ('Surface totale', '1 070 m²'), ('Classement', 'ERP type L · 5e cat.'), ('Phase', 'APS / APD'), ('Année', 'CREAD 4A · 2025-2026')],
 'blocks': [
  ('chapter', '01', 'Le constat', "Une école pour <em>reprendre son souffle</em>.",
   "<p>Aujourd'hui tout s'accumule : informations, sollicitations, attentes. Cette surstimulation installe chez les étudiants une véritable fatigue mentale.</p><p><strong>Marelle</strong> transforme l'ancienne école maternelle en tiers-lieu hybride (coworking, bibliothèque, café, repos) pour permettre de se décharger et de retrouver la concentration.</p>",
   [('Maîtrise d’ouvrage', 'Mme Suzanne Santoro &amp; M. Laurent Mahadou'), ('Zonage', 'UCe2a · périmètre UNESCO'), ('Cour', '196 m² végétalisés'), ('Équipe', 'E. Buchaille, C. Laumond, L. Morinière, L. Pentenero, F. Poyet')]),
  ('bleed', 'marelle-comptoir', "Comptoir du café : un bloc de chêne strié posé au centre de la salle", 'tall'),
  ('chapter', '02', 'Concept', "La sincérité <em>enfantine</em>.",
   "<p>Un rapport au monde direct, instinctif et sans filtre : traduire le lieu dans sa simplicité essentielle, comme le perçoit un enfant. La marelle, jeu d'enfance, devient le fil du parcours.</p><p>Les personnages dessinés qui habitent les rendus (Clara, Ben, Lucas) racontent ce parcours à hauteur d'usager.</p>",
   [('Simplicité', 'Organisation linéaire et symétrique.'), ('Spontanéité', 'Séquences continues, rythmes intuitifs.'), ('Naïveté', 'Jeu de transparence et de dissimulation partielle.')]),
  ('pair', [('marelle-zoning', 'Zoning : 01 travail, 02 silence, 03 pause', 'blanc'), ('marelle-zoning-circulations', 'Circulations : linéarités horizontales, deux escaliers en symétrie', 'blanc')]),
  ('chapter', '03', 'Parcours', "De l'ouvert vers le <em>concentré</em>.",
   "<p>On entre dans un espace de travail ouvert, puis le programme se resserre : cabines de groupe, cabines individuelles, et enfin la bibliothèque, cœur apaisé du projet. La pause (café, jeux, yoga) reste en retrait ; la technique en périphérie.</p><p>Deux escaliers en symétrie et un ascenseur central assurent une montée directe et lisible, sans hésitation.</p>",
   [('01 · Travail', 'Open space, puis cabines de groupe et individuelles'), ('02 · Silence', 'Bibliothèque et repos'), ('03 · Pause', 'Café, jeux, yoga'), ('04 · Technique', 'En périphérie, hors du public')]),
  ('sheet', 'marelle-plan-rdc', "Plan d'aménagement colorimétrique du rez-de-chaussée : accueil, open spaces, cour, café, salle de jeux, yoga"),
  ('pair', [('marelle-plan-etages', 'Plans des étages : bibliothèque et salle de repos, puis cabines de groupe et individuelles', 'blanc'), ('marelle-coupe', "Coupe d'aménagement : du café au passage couvert, jusqu'aux cabines sous la charpente", 'blanc')]),
  ('chapter', '04', 'Rez-de-chaussée', "Arriver, s'installer, <em>échanger</em>.",
   "<p>Clara entre après une journée chargée : l'échange avec l'accueil marque la transition entre la rue agitée et un lieu plus calme. Les casiers en chêne permettent de tout déposer avant d'entrer.</p><p>Ben s'installe dans l'open space, où les discussions et le travail de groupe stimulent sa motivation, puis rejoint le comptoir pour un café et des échanges spontanés.</p>",
   [('Accueil', 'Casiers en chêne, LED intégrées, plinthes à fleur'), ('Open space', 'Grandes tables partagées et postes individuels éclairés'), ('Café & jeux', 'Comptoir central, panneaux acoustiques feutrés')]),
  ('trio', [('marelle-accueil', "Accueil : l'entrée dans le lieu, entre chêne et verre opaque", 'portrait'), ('marelle-accueil-axo', 'Axonométrie : accueil et casiers', 'blanc'), ('marelle-os-axo', 'Axonométrie : les deux open spaces', 'blanc')]),
  ('bleed', 'marelle-os-travail', "Open space : postes individuels éclairés le long du mur, grandes tables au centre", 'mid'),
  ('trio', [('marelle-jeux', 'Salle de jeux : panneaux acoustiques feutrés suspendus', 'portrait'), ('marelle-cafe', 'Café : comptoir de travail face aux panneaux de chêne'), ('marelle-cafe-axo', 'Axonométrie : café et salle de jeux', 'blanc')]),
  ('chapter', '05', 'Les étages', "Monter vers le <em>silence</em>.",
   "<p>L'escalier, main courante encastrée et garde-corps en bois, mène aux étages calmes. Clara y cherche des livres et croise Lucas, qui partage discrètement le même besoin de tranquillité.</p><p>Plus haut, sous la charpente, les cabines de groupe et individuelles offrent la concentration la plus forte, au bout d'une circulation où les portes s'alignent au nu du mur.</p>",
   None),
  ('pair', [('marelle-escalier-v2', 'Circulation verticale : contremarches contrastées, main courante encastrée', 'portrait'), ('marelle-bibli-v2', 'Bibliothèque : niche de lecture et rideaux sur rail', 'portrait')]),
  ('bleed', 'marelle-repos', "Espace repos : gradins de bois et assises basses pour se poser", 'mid'),
  ('pair', [('marelle-bibli-axo', 'Axonométrie : bibliothèque et culture', 'blanc'), ('marelle-repos-axo', 'Axonométrie : salle de repos', 'blanc')]),
  ('trio', [('marelle-circulation-travail', 'Circulation des cabines : portes alignées au nu du mur', 'portrait'), ('marelle-cabine-indiv', 'Cabine individuelle'), ('marelle-cabine-groupe', 'Cabine de groupe : table partagée et tableau')]),
  ('chapter', '06', 'Matérialité', "Une matière honnête, <em>sans artifice</em>.",
   "<p>Peu de matériaux, chacun lisible au premier regard. Le chêne apporte la chaleur, la feutrine absorbe le bruit, le carrelage donne le rythme et le verre opaque laisse deviner sans tout montrer.</p>",
   [('M01 · Chêne', 'Texture visible, chaleur, compréhension immédiate'), ('M02 · Feutrine', 'Revêtements acoustiques, ambiance enveloppante'), ('M03 · Carrelage', 'Répétition et rythme, repères simples'), ('M04 · Verre opaque', 'Perception partielle : montrer et cacher')]),
  ('trio', [('marelle-meuble-bibliotheque', 'Meuble bibliothèque menuisé, dessiné pour le projet', 'nuit'), ('marelle-verrerie', 'Légende visuelle : cloisons vitrées', 'nuit'), ('marelle-feutrine', 'Faux plafond acoustique en feutrine', 'nuit')]),
  ('chapter', '07', 'Extérieur', "La cour et le <em>passage couvert</em>.",
   "<p>Une charpente en chêne relie le bâtiment au préau et abrite le passage. La cour devient un jardin : surfaces perméables, graminées et assises en bois, pour répondre au coefficient de végétalisation du PLU-H.</p>",
   None),
  ('pair', [('marelle-paysage-1', 'Le passage couvert vers le préau'), ('marelle-paysage-2', 'La cour végétalisée, lieu de pause')]),
  ('pair', [('marelle-passage-bois', 'Structure du passage en bois : principe constructif', 'nuit'), ('marelle-identite', "Identité visuelle « La Marelle »")]),
 ],
},
# ---------------------------------------------------------------- APEX
{
 'slug': 'apex', 'title': 'APEX', 'kicker': 'Drive & Drink · Projet libre 3e année', 'accent': '#C1121C', 'fx': 'apex',
 'subtitle': "Un club Formule 1 à Vénissieux : piloter, regarder les Grands Prix, puis partager un verre, dans un lieu pensé comme un paddock.",
 'teaser': "Bar immersif inspiré de la Formule 1 : simulateurs, bar central en forme de circuit, lounge paddock et cinéma, dans un ancien local de 350 m².",
 'cover': 'apex-rendu-espace-principal', 'cover_alt': 'Espace principal : bar circuit, simulateurs et néons rouges',
 'tags': ['ERP', 'Bar & loisirs', 'Identité de marque', 'Sur mesure'],
 'facts': [('Lieu', 'Vénissieux (69200)'), ('Surface', '350 m² · RDC'), ('Hauteur', 'HSFP 3,50 m'), ('Dates', 'Nov. 2024 — avr. 2025'), ('Logiciels', 'SketchUp · V-Ray · Photoshop')],
 'blocks': [
  ('chapter', '01', 'Storytelling', "« Un lieu pour vivre la passion <em>pleinement</em>. »",
   "<p>Depuis l'enfance, la fascination pour l'automobile : la précision mécanique, la vitesse, la liberté. Il y a sept ans, la découverte de la F1 amplifie tout : la technologie, la compétition, le travail d'équipe derrière chaque victoire.</p><p>Il manquait un endroit pour vivre cette passion avec d'autres. <strong>APEX</strong> réunit simulateurs, diffusion des Grands Prix, cinéma, bar et paddock.</p>"),
  ('apex',),
  ('swatches', 'Couleurs · charte RAL', [('Carbon', '#0A0A0A', 'RAL 9005 · 50 %'), ('Grid white', '#F1F0EA', 'RAL 9016 · 25 %'), ('Signal', '#C1121C', 'RAL 3020 · 15 %'), ('Graphite', '#2E3234', 'RAL 7021 · 10 %')]),
  ('bleed', 'apex-rendu-bar', "APEX Pit Bar : le bar central en forme de circuit", 'tall'),
  ('chapter', '02', 'Le lieu', "Au cœur d'un <em>écosystème automobile</em>.",
   "<p>Un ancien local de 350 m² à Vénissieux, dans une zone industrielle et commerciale en mutation, transformé en club F1.</p>",
   [('Accès', 'Proche du périphérique lyonnais'), ('Voisinage', 'Concessions automobiles et motos'), ('Clientèle', 'Diverse, entre fans et curieux'), ('Loyers', 'Plus abordables que Bellecour ou Part-Dieu'), ('Structure', 'Dalle BA, acier et BBM')]),
  ('personas', [('Clément, 25 ans', 'Ingénieur automobile', "Fan absolu, il suit chaque Grand Prix et connaît les statistiques des pilotes. Il vient vibrer avec d'autres passionnés, entre simulateur et live."), ('Jeanne, 22 ans', 'Marketing', "Pas experte, partante pour une soirée entre amis. Elle découvre la F1 de façon accessible et veut essayer le simulateur."), ('Stéphane, 52 ans', 'Motard, sports mécaniques', "Il fréquente les concessions des environs et fait le détour pour rencontrer des passionnés et regarder les courses.")]),
  ('chapter', '03', 'Le circuit', "Un plan qui se lit <em>comme un tracé</em>.",
   "<p>Le bar central en forme de circuit organise tout le plan. Les simulateurs longent les façades, le lounge paddock et le cinéma occupent le fond du local. Cloisons courbes, bandes vibreur au sol et néons dessinent les trajectoires.</p><p>Les flux clients, personnel et livraisons sont séparés ; sanitaires, PMR et local technique sont regroupés en fond de parcelle.</p>"),
  ('pair', [('apex-plan-couleur', 'Plan colorimétrique du rez-de-chaussée', 'contain'), ('apex-axonometrie', 'Axonométrie de l’ensemble', 'contain')]),
  ('chapter', '04', 'Ambiances', "Néons, métal et <em>nuit de course</em>.",
   "<p>Des lignes lumineuses rythment l'espace comme une piste de nuit ; le rouge signal marque le bar, les simulateurs et la signalétique. Le paddock ralentit le tempo avec la tôle perforée, le métal brossé et des assises basses. Le cinéma passe au noir pour les Grands Prix.</p>",
   [('APEX Pit Bar & Sim', 'Simulateurs Playseat carbone rouge, bar circuit'), ('APEX Paddock', 'Lounge : tabourets NENA (Zanotta), tables Francis (Lema)'), ('APEX Grid', 'Cinéma en gradins, moquette noire, LED 150 lux')]),
  ('pair', [('apex-rendu-cinema', 'APEX Grid : la salle de projection des Grands Prix'), ('apex-espace-principal-axo', 'Espace principal : axonométrie et matières', 'contain')]),
  ('chapter', '05', 'Sur mesure', "Quatre ouvrages <em>dessinés pour le lieu</em>.",
   "<p>Du bar central à l'estrade du cinéma, chaque pièce est conçue et détaillée au 1/25, avec une matériauthèque resserrée en écho à la charte.</p>",
   [('Bar central circuit', 'Contreplaqué marine 18 mm, MDF cintrable, métal rouge et brossé noir'), ('Bar lounge', 'Structure métal noir, étagères en tôle perforée rouge'), ('Vitrine casques', 'Caisson laqué rouge, niches éclairées, enseigne en relief'), ('Estrade cinéma', 'Ossature bois massif, contreplaqué antidérapant 22 mm')]),
  ('pair', [('apex-moodboard', 'Moodboard : métal, néon, carbone', 'contain'), ('apex-rendu-espace-principal', 'Simulateurs alignés le long de la façade')]),
 ],
},
# ---------------------------------------------------------------- PLONGEE (page sur mesure : build_plongee)
{
 'slug': 'plongee', 'title': 'Maison Isobathe', 'kicker': 'Retail · Lyon 5e', 'custom': True,
 'subtitle': "Une boutique de plongée qui se visite comme une descente : du bleu clair de la surface jusqu'à l'abysse.",
 'teaser': "Une boutique de plongée pensée comme une descente sous l'eau, et son identité Maison Isobathe : du bleu clair de l'entrée jusqu'au bleu nuit des profondeurs.",
 'cover': 'isb-entree', 'cover_alt': "Entrée de la boutique : l'aquarium central et le rocher",
 'tags': ['Retail', 'Projet de groupe', 'Identité de marque'],
 'facts': [('Lieu', 'Rue de la Quarantaine, Lyon 5e'), ('Surface', '170 m²'), ('Projet', 'CREAD 3A · 2024'), ('Identité', 'Rebranding 2026'), ('Équipe', 'E. Buchaille, E. Hilaire, B. Linet')],
 'blocks': [],
},
# ---------------------------------------------------------------- BIARRITZ
{
 'slug': 'biarritz', 'title': 'Maison Ilbarritz', 'kicker': 'Résidentiel · Biarritz', 'wide': True, 'fx': 'tide',
 'subtitle': "La rénovation et l'extension d'une maison familiale face à l'océan, entre élégance basque et confort contemporain.",
 'teaser': "Rénovation complète et extension d'une maison familiale de 200 m² près de la plage d'Ilbarritz, entre zelliges, bois sculpté et vue sur l'océan.",
 'cover': 'biarritz-salon-cheminee', 'cover_alt': 'Séjour avec cheminée, suspensions et bibliothèque en bois',
 'tags': ['Rénovation', 'Extension', 'Famille de 4'],
 'facts': [('Lieu', 'Av. d’Ilbarritz, Biarritz'), ('Surface', '350 m² (200 m² + extension)'), ('Dates', 'Janv. — mai 2024'), ('Programme', 'Famille de 4 personnes'), ('Logiciels', 'SketchUp · V-Ray · Photoshop')],
 'blocks': [
  ('chapter', '01', 'Contexte', "Entre <em>océan et golf</em>.",
   "<p>Une maison de la fin du XX<sup>e</sup> siècle, à deux pas de la plage d'Ilbarritz et du golf du même nom. Le projet rénove entièrement les 200 m² existants et ajoute une extension pour offrir plus d'espace de vie à une famille de quatre.</p>"),
  ('bleed', 'biarritz-facade-basque', "Façade : colombages verts et verrière de l’extension", 'tall'),
  ('chapter', '02', 'Aménagement', "Des volumes qui <em>s'enchaînent</em>.",
   "<p>L'aménagement optimise les volumes pour une circulation fluide. Chaque zone est clairement définie tout en gardant une continuité visuelle qui renforce l'ouverture. Le mobilier aux formes organiques, le bois et les éléments sculptés ajoutent une dimension artisanale.</p><p>La cuisine sur mesure adopte un plan linéaire avec modules coulissants, meubles hauts et électroménager intégré.</p>"),
  ('pair', [('biarritz-espace-vie', 'Espace de vie ouvert sur la cuisine'), ('biarritz-cuisine-salle-manger', 'Cuisine sur mesure et table familiale')]),
  ('chapter', '03', 'Concept décoratif', "Une palette <em>basque</em>, intemporelle.",
   "<p>Les couleurs et matières de la région créent un intérieur authentique, élégant et intemporel.</p>",
   [('Vert & rouge basque', 'Zelliges traditionnels'), ('Béton ciré & pierre blanche', 'Touches brutes et minimalistes'), ('Bois sculpté & rotin', 'Chaleur artisanale'), ('Beige écru & blanc neige', 'Douceur et lumière')]),
  ('swatches', 'Palette', [('Vert basque', '#1F4D3A', 'Menuiseries, zelliges'), ('Rouge basque', '#7A1F24', 'Accents'), ('Beige écru', '#E9E0D0', 'Murs'), ('Bois', '#8A5A3B', 'Mobilier, rotin')]),
  ('pair', [('biarritz-moodboard', 'Planche matières', 'contain'), ('biarritz-salon-cheminee', 'Salon et cheminée')]),
 ],
},
# ---------------------------------------------------------------- MARSEILLE
{
 'slug': 'marseille', 'title': 'Restaurant Molière', 'kicker': 'Restauration · Vieux-Port, Marseille', 'fx': 'port',
 'subtitle': "Un restaurant méditerranéen où la terre cuite, la chaux et le chêne racontent le savoir-faire local.",
 'teaser': "Projet de groupe : un restaurant de 140 m² aux matériaux nobles, avec banquettes sur mesure en terre cuite et bar enduit à la chaux.",
 'cover': 'restaurant-salle-banquettes', 'cover_alt': 'Salle : banquettes en terre cuite et appliques murales',
 'tags': ['Projet de groupe', 'Restaurant', 'Sur mesure'],
 'facts': [('Lieu', '7-9 rue Molière, Marseille'), ('Surface', '140 m²'), ('Dates', 'Sept. — nov. 2024'), ('Type', 'Restaurant · projet de groupe'), ('Logiciels', 'SketchUp · V-Ray · Photoshop')],
 'blocks': [
  ('chapter', '01', 'Concept', "Matières nobles, <em>usage juste</em>.",
   "<p>Le projet allie matériaux nobles et fonctionnalité pour une ambiance chaleureuse et raffinée. Les banquettes sur mesure en terre cuite et le bar enduit à la chaux sont les deux pièces maîtresses.</p><p>Rue Molière, à deux pas du Vieux-Port : un carrefour touristique de la Méditerranée, où la demande pour une cuisine de qualité et inventive ne cesse de grandir.</p>"),
  ('bleed', 'restaurant-vue-ensemble-bar', "Le bar enduit à la chaux et la salle", 'tall'),
  ('chapter', '02', 'Matériaux', "La Méditerranée <em>en textures</em>.",
   "<p>L'aménagement fluidifie les circulations tout en gardant un caractère méditerranéen authentique, en lien avec les traditions locales.</p>",
   [('Terre cuite', 'Sols et revêtements, caractère brut'), ('Chaux', 'Enduits mats et texturés'), ('Chêne', 'Structures et mobilier'), ('Céramiques & tissus', 'Détails subtils')]),
  ('pair', [('restaurant-croquis-banquettes', 'Croquis des banquettes sur mesure', 'contain'), ('restaurant-facade-devanture', 'Façade et devanture', 'contain')]),
  ('pair', [('restaurant-axonometrie', 'Axonométrie de la salle de réception', 'contain'), ('restaurant-moodboard', 'Moodboard et inspirations', 'contain')]),
 ],
},
]

RENDER_CATS = [('chalet', 'Chalet'), ('midcentury', 'Mid-century'), ('neoclassique', 'Néo-classique'), ('erp', 'ERP'), ('residentiel', 'Résidentiel'), ('exterieur', 'Extérieurs')]

RENDERS = [
    {'img': 'r-chalet-4', 'cat': 'chalet', 'alt': 'Chalet : chambre sous charpente et mur de pierre', 'home': True},
    {'img': 'r-chalet-1', 'cat': 'chalet', 'alt': 'Chalet : banc en bois brut face aux sommets'},
    {'img': 'r-chalet-3', 'cat': 'chalet', 'alt': 'Chalet : chambre et baie panoramique'},
    {'img': 'r-chalet-2', 'cat': 'chalet', 'alt': 'Chalet : chevet, lin et bois vieilli'},
    {'img': 'r-chalet-5', 'cat': 'chalet', 'alt': 'Chalet : tête de lit en pierre éclairée'},
    {'img': 'r-midcentury-1', 'cat': 'midcentury', 'alt': 'Mid-century : séjour, tapis damier et parquet', 'home': True},
    {'img': 'r-midcentury-2', 'cat': 'midcentury', 'alt': 'Mid-century : table en noyer et suspensions'},
    {'img': 'r-midcentury-3', 'cat': 'midcentury', 'alt': 'Mid-century : enfilade et coin hi-fi'},
    {'img': 'r-neoclassique-1', 'cat': 'neoclassique', 'alt': 'Néo-classique : salle à manger et moulures', 'home': True},
    {'img': 'r-neoclassique-2', 'cat': 'neoclassique', 'alt': 'Néo-classique : niche et étagères éclairées'},
    {'img': 'r-accueil-1', 'cat': 'erp', 'alt': 'Accueil : comptoir en pierre et lames de chêne', 'home': True},
    {'img': 'r-accueil-2', 'cat': 'erp', 'alt': 'Accueil : fauteuil bouclé et éclairage rasant'},
    {'img': 'r-dentaire', 'cat': 'erp', 'alt': 'Cabinet dentaire : lumière douce et vert sauge', 'home': True},
    {'img': 'r-cuisine', 'cat': 'residentiel', 'alt': 'Cuisine en noyer et terrazzo'},
    {'img': 'r-bureau', 'cat': 'residentiel', 'alt': 'Bureau classique sous verrière', 'home': True},
    {'img': 'r-salle-de-bain', 'cat': 'residentiel', 'alt': 'Salle d’eau : lattes de bois et appliques globes'},
    {'img': 'r-villa-jungle', 'cat': 'exterieur', 'alt': 'Villa tropicale en porte-à-faux', 'home': True},
    {'img': 'r-villa-hiver', 'cat': 'exterieur', 'alt': 'La même villa sous la neige'},
    {'img': 'r-villa-jungle-2', 'cat': 'exterieur', 'alt': 'Villa tropicale, vue d’arrivée'},
    {'img': 'r-chalet-ext-hiver', 'cat': 'exterieur', 'alt': 'Chalet alpin en hiver'},
    {'img': 'r-chalet-ext-printemps', 'cat': 'exterieur', 'alt': 'Chalet alpin au printemps'},
]
