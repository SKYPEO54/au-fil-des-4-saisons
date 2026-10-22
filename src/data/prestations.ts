// Pages de prestation : nom du service, resume et questions frequentes.
// Chaque reponse reprend le texte du client (ancien site aufildes4saisons.fr,
// releve page par page le 21/10/2026) : rien n'est ajoute qu'il n'ait ecrit.
// Une question ne vit que sur une seule page.

export interface QR {
  q: string;
  r: string;
}

export interface Prestation {
  slug: string;
  nom: string;
  resume: string;
  faq: QR[];
}

export const prestations: Prestation[] = [
  {
    slug: "jardinier-paysagiste",
    nom: "Jardinier paysagiste",
    resume:
      "Création, entretien et agencement de parcs et jardins à Moëlan-sur-Mer et alentour, pour les particuliers comme pour les professionnels.",
    faq: [
      {
        q: "Quelles prestations propose votre équipe de jardiniers paysagistes ?",
        r: "Nous réalisons la création, l'entretien et l'agencement de parcs et jardins : plantation d'arbres, d'arbustes et de gazon, ajout de chemins, de terrasses, de clôtures ou de portails. Nous assurons aussi la tonte, l'élagage, le taillage, le nettoyage et le débroussaillage de vos espaces verts.",
      },
      {
        q: "Travaillez-vous pour les particuliers et pour les professionnels ?",
        r: "Oui. Depuis 2006, nous sommes au service des professionnels et des particuliers, et notre équipe de paysagistes réalise la création de jardins privés et publics.",
      },
      {
        q: "Comment concevez-vous un jardin sur mesure ?",
        r: "Nos jardiniers paysagistes étudient avec grande attention vos goûts, votre mode de vie et les conditions climatiques du lieu. Ils mélangent ensuite l'architecture et la botanique pour vous proposer une création en accord avec vos envies et votre budget.",
      },
    ],
  },
  {
    slug: "paysagiste",
    nom: "Création paysagère",
    resume:
      "Conception et réalisation de jardins sur mesure : diagnostic, plan 3D, budget prévisionnel, puis maçonnerie, plantations et engazonnement.",
    faq: [
      {
        q: "Que préparez-vous avant les travaux de création ?",
        r: "Notre équipe de paysagistes réalise un diagnostic et un état des lieux, une proposition sommaire du projet (choix des végétaux et des matériaux de maçonnerie paysagère), un plan 3D de votre aménagement de jardin et un budget prévisionnel.",
      },
      {
        q: "Que comprend la réalisation d'un aménagement paysager ?",
        r: "La réalisation comprend le nettoyage des espaces (abattage et dessouchage si besoin), le tracé des ouvrages, les travaux de maçonnerie, la préparation des sols qui accueilleront les végétaux, l'engazonnement, les travaux de finitions et le nettoyage du chantier.",
      },
      {
        q: "Faut-il un grand terrain pour faire appel à vous ?",
        r: "Non. Quelle que soit la surface dont vous disposez, nous vous accompagnons dans la transformation de vos espaces extérieurs, balcons et terrasses compris, depuis la conception de votre projet jusqu'à sa réalisation.",
      },
    ],
  },
  {
    slug: "entretien-jardin",
    nom: "Entretien de jardin",
    resume:
      "Entretien d'espaces verts au contrat annuel ou ponctuel : taille, tonte, désherbage, élagage, débroussaillage, plantation, broyage et évacuation des déchets.",
    faq: [
      {
        q: "Proposez-vous l'entretien de jardin à l'année ?",
        r: "Oui. Nous vous proposons l'entretien de votre jardin via un contrat à l'année ou ponctuellement sur demande, avec des conseils personnalisés selon votre situation.",
      },
      {
        q: "Quels travaux d'entretien réalisez-vous ?",
        r: "La taille de haies et d'arbustes, la tonte de pelouse et le désherbage, l'élagage et l'abattage d'arbres, le débroussaillage, le nettoyage de jardins et de massifs, la plantation d'arbres et d'arbustes, le broyage des branches et l'évacuation des déchets.",
      },
      {
        q: "Que faire au jardin à chaque saison ?",
        r: "En hiver, on protège les plantes, notamment par un paillis pour les plus fragiles. Le printemps est propice à la taille, à l'élagage et au bouturage. En été, on veille à un arrosage optimisé. En automne, on taille haies, arbustes et buissons, on ratisse le gazon et on fait une dernière tonte.",
      },
      {
        q: "L'entretien de jardin donne-t-il droit à un avantage fiscal ?",
        r: "Oui. Dans le cadre d'un service à la personne, vous bénéficiez d'une réduction ou d'un crédit d'impôt de 50 % des sommes versées pour l'entretien de votre jardin.",
      },
    ],
  },
  {
    slug: "espaces-verts",
    nom: "Création d'espaces verts",
    resume:
      "Installations de jardin : terrasses, plages de piscines, abris de jardin et carports en bois, allées, chemins, clôtures et portails.",
    faq: [
      {
        q: "Quelles installations pouvez-vous réaliser dans mon jardin ?",
        r: "Nous réalisons l'installation de terrasses, de plages de piscines, d'abris de jardin et de carports en bois. Nous pouvons aussi agencer vos espaces verts avec des allées, des chemins, des clôtures et des portails.",
      },
      {
        q: "Pouvez-vous aménager les abords d'une piscine récente ?",
        r: "Oui. Nous mettons en place des plages de piscines pour rendre votre piscine plus facilement accessible, lui donner plus de cachet et profiter au mieux des beaux jours.",
      },
      {
        q: "Comment étudiez-vous un projet de terrasse ?",
        r: "Nos professionnels vous conseillent sur l'agencement et sur les matériaux (lattes de bois, dalle de ciment, carrelage). Conditions climatiques, faisabilité et budget : nous analysons tout de A à Z pour que le résultat réponde à vos attentes.",
      },
    ],
  },
  {
    slug: "abri-jardin",
    nom: "Abri de jardin et carport",
    resume:
      "Conseil et construction d'abris de jardin, de cabanes et de carports, en bois (pin, épicéa, Douglas) ou en PVC aspect bois.",
    faq: [
      {
        q: "Faut-il une autorisation pour construire un abri de jardin ou un carport ?",
        r: "Les règles sont les mêmes pour un abri de jardin et pour un abri de voiture : aucune demande jusqu'à 5 m² de surface, une déclaration préalable de travaux jusqu'à 20 m², un permis de construire au-delà. En zone protégée, une déclaration est demandée même sous 5 m².",
      },
      {
        q: "Quel bois choisir pour un abri de jardin ?",
        r: "Le pin, l'épicéa ou le Douglas : l'essence choisie détermine la durabilité et l'esthétique de la construction. Traité autoclave, le bois résiste parfaitement aux intempéries. Pour son côté économique, l'abri en PVC aspect bois est une autre option.",
      },
      {
        q: "Pourquoi choisir un carport plutôt qu'un garage ?",
        r: "Le carport demande beaucoup moins de travaux qu'un garage et utilise une zone inexploitée de votre propriété. Accolé à la maison ou indépendant, il protège votre voiture et se transforme en pergola le temps d'un barbecue ou d'un dîner.",
      },
    ],
  },
  {
    slug: "terrasse-exterieure",
    nom: "Terrasse et plage de piscine",
    resume:
      "Création et pose de terrasses extérieures et de plages de piscine en bois naturel ou composite, en pierre, en grès cérame, granit ou ardoise.",
    faq: [
      {
        q: "Quels matériaux pour une terrasse extérieure ?",
        r: "Le bois, naturel ou composite, en lames ou en caillebotis, d'essence traditionnelle ou exotique. Ou la pierre, résistante et facile d'entretien : grès cérame, granit, ardoise ou pierre reconstituée, en diverses nuances.",
      },
      {
        q: "Quel revêtement choisir pour une plage de piscine ?",
        r: "Exposée au soleil et à l'humidité, la plage de piscine demande un matériau particulièrement résistant, imputrescible et antidérapant : lames de bois, béton ou pierre reconstituée, assortis aux teintes de vos aménagements extérieurs.",
      },
      {
        q: "Quelles questions se poser avant de créer une terrasse ?",
        r: "Quelle orientation et quel accès, plutôt côté chambre ou côté cuisine ? L'endroit est-il soumis au vent ou aux intempéries ? Terrasse surélevée ou de plain-pied, quelle surface, quel revêtement de sol, et une plage de piscine assortie ou d'un autre style ?",
      },
    ],
  },
  {
    slug: "amenagement-exterieur",
    nom: "Aménagement extérieur",
    resume:
      "Mise en place de chemins, d'allées, de bordures et de petits murets, pose de clôtures et de portails pour particuliers, entreprises et communes.",
    faq: [
      {
        q: "Intervenez-vous pour les communes et les entreprises ?",
        r: "Oui. Que vous soyez une commune, une entreprise ou un particulier, nous mettons en place chemins, allées et bordures pour vos espaces verts, et posons clôtures et portails pour les particuliers comme pour les professionnels.",
      },
      {
        q: "Quels types de clôtures et de portails posez-vous ?",
        r: "Des clôtures en simple grillage ou en panneaux de bois, et des portails manuels ou automatiques. Nous étudions votre environnement pour vous proposer des modèles adaptés à vos besoins et à l'esthétique des lieux.",
      },
      {
        q: "Réalisez-vous des bordures et des murets ?",
        r: "Oui. Nous créons des bordures, comme des petits murets, pour mieux souligner certains espaces de votre jardin ou mieux les encadrer.",
      },
    ],
  },
  {
    slug: "cloture-portail",
    nom: "Clôture et portail",
    resume:
      "Conseil, pose et installation de clôtures, panneaux, claustras, portails et portillons en bois, PVC ou aluminium, manuels ou automatiques.",
    faq: [
      {
        q: "Quel matériau choisir pour ma clôture et mon portail ?",
        r: "Tout dépend de ce que vous recherchez : esthétique ou sécurité, ouvrage imposant ou léger. Selon l'architecture de vos aménagements et de votre habitation, nous vous proposons une clôture et un portail en bois, en PVC ou en aluminium.",
      },
      {
        q: "Comment préserver son intimité avec une clôture ?",
        r: "Un grillage simple suffit pour délimiter. Pour plus d'intimité, nous conseillons des panneaux soudés, par exemple en finition gris anthracite. La clôture végétale est une autre solution de brise-vue, et des piquets côte à côte permettent de jouer sur la hauteur et la transparence.",
      },
      {
        q: "Portail coulissant ou à vantaux ?",
        r: "En ouverture latérale coulissante ou à vantaux, le portail s'adapte à toutes les surfaces. Automatisé, il facilite votre accès. Notre équipe étudie vos besoins directement chez vous avant de réaliser la pose.",
      },
    ],
  },
  {
    slug: "amenagement-exterieur-maison",
    nom: "Allées et bordures",
    resume:
      "Création d'allées carrossables ou piétonnes et de bordures : enrobé, pavés en pierre naturelle, béton désactivé, gravier, ardoise, brique.",
    faq: [
      {
        q: "Quel revêtement choisir pour une allée ?",
        r: "L'enrobé, en noir, rouge ou ton naturel, pour sa résistance et sa durabilité. Les pavés en pierre naturelle pour l'authenticité. Le béton désactivé pour des surfaces uniformes, robustes et faciles d'entretien. Le gravier pour sa large palette minérale.",
      },
      {
        q: "En quels matériaux sont faites les bordures ?",
        r: "En bois, ardoise, pierre reconstituée, pierre naturelle ou brique. Rectilignes, courbes, à motifs ou en relief, elles soulignent les contours de vos allées, de vos massifs ou de votre potager.",
      },
      {
        q: "Aménagez-vous les allées en pente ou carrossables ?",
        r: "Oui. Allée carrossable ou piétonne, plane ou en pente : nous vous proposons différentes solutions d'aménagement extérieur qui allient praticité et esthétique.",
      },
    ],
  },
  {
    slug: "maconnerie-paysagere",
    nom: "Maçonnerie paysagère",
    resume:
      "Terrasses, escaliers, murets et murs en pierre, dallages en ardoise ou béton désactivé, allées et parkings, associés aux plantations.",
    faq: [
      {
        q: "Quels ouvrages de maçonnerie paysagère réalisez-vous ?",
        r: "Des terrasses, des escaliers en ardoise, en traverses ou en pavés, des murets et des murs en pierre avec couvertines en ardoise, des dallages en ardoise ou en béton désactivé, des allées et des parkings.",
      },
      {
        q: "Avec quels matériaux travaillez-vous ?",
        r: "La pierre naturelle, le gneiss posé en opus pour les terrasses, l'ardoise en dallage, en palis ou en couvertine, le béton désactivé, les pavés, le bois associé aux pavés pour les allées, et le carrelage imitation bois pour les terrasses.",
      },
      {
        q: "Peut-on associer maçonnerie et plantations ?",
        r: "Oui. Nous réalisons des aménagements de jardin qui associent maçonnerie et plantation : un mélange de végétal et de minéral qui crée des espaces de détente et de contemplation.",
      },
    ],
  },
];

export const prestationParSlug = (slug: string) => prestations.find((p) => p.slug === slug);
