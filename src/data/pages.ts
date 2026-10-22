// Titre (50 a 60 caracteres) et description (120 a 155) de chaque page,
// uniques sur le site. Lus par les pages et par llms.txt.

export interface MetaPage {
  titre: string;
  description: string;
  /** Libelle court (fil d'Ariane, llms.txt). */
  nom: string;
}

export const pages: Record<string, MetaPage> = {
  "/": {
    nom: "Accueil",
    titre: "Jardinier paysagiste à Moëlan-sur-Mer | Au Fil des 4 Saisons",
    description:
      "Jardiniers paysagistes à Moëlan-sur-Mer depuis 2006 : création et entretien de jardins, terrasses, clôtures, allées et maçonnerie paysagère. Devis gratuit.",
  },
  "/a-propos/": {
    nom: "À propos",
    titre: "À propos, paysagiste depuis 2006 | Au Fil des 4 Saisons",
    description:
      "Entreprise de paysagistes et de jardiniers à Moëlan-sur-Mer depuis 2006, au service des particuliers et des professionnels. Devis gratuit et conseils.",
  },
  "/jardinier-paysagiste/": {
    nom: "Jardinier paysagiste",
    titre: "Parcs et jardins à Moëlan-sur-Mer | Au Fil des 4 Saisons",
    description:
      "Création, entretien et agencement de parcs et jardins à Moëlan-sur-Mer par une équipe de jardiniers paysagistes, en accord avec vos envies et votre budget.",
  },
  "/paysagiste/": {
    nom: "Création paysagère",
    titre: "Création de jardin à Moëlan-sur-Mer | Au Fil des 4 Saisons",
    description:
      "Création paysagère sur mesure à Moëlan-sur-Mer : diagnostic, plan 3D, budget prévisionnel, puis maçonnerie, plantations et engazonnement.",
  },
  "/entretien-jardin/": {
    nom: "Entretien de jardin",
    titre: "Entretien de jardin à Moëlan-sur-Mer | Au Fil des 4 Saisons",
    description:
      "Entretien d'espaces verts à Moëlan-sur-Mer, au contrat annuel ou ponctuel : taille de haies, tonte, élagage, débroussaillage. Crédit d'impôt de 50 %.",
  },
  "/espaces-verts/": {
    nom: "Espaces verts",
    titre: "Espaces verts à Moëlan-sur-Mer | Au Fil des 4 Saisons",
    description:
      "Création d'espaces verts à Moëlan-sur-Mer : terrasses, plages de piscines, abris de jardin et carports en bois, pour particuliers et professionnels.",
  },
  "/abri-jardin/": {
    nom: "Abri de jardin et carport",
    titre: "Abri de jardin à Moëlan-sur-Mer | Au Fil des 4 Saisons",
    description:
      "Abri de jardin, cabane et carport à Moëlan-sur-Mer : règles d'urbanisme, choix du bois (pin, épicéa, Douglas) ou du PVC, et construction par nos équipes.",
  },
  "/terrasse-exterieure/": {
    nom: "Terrasse et plage de piscine",
    titre: "Pose de terrasse à Moëlan-sur-Mer | Au Fil des 4 Saisons",
    description:
      "Création et pose de terrasses extérieures et de plages de piscine à Moëlan-sur-Mer : bois naturel ou composite, grès cérame, granit, ardoise ou pierre.",
  },
  "/amenagement-exterieur/": {
    nom: "Aménagement extérieur",
    titre: "Aménagement extérieur, Moëlan-sur-Mer | Au Fil des 4 Saisons",
    description:
      "Aménagement extérieur à Moëlan-sur-Mer : chemins, allées, bordures et murets, pose de clôtures et de portails pour particuliers, entreprises et communes.",
  },
  "/cloture-portail/": {
    nom: "Clôture et portail",
    titre: "Clôture et portail à Moëlan-sur-Mer | Au Fil des 4 Saisons",
    description:
      "Pose de clôtures, claustras, portails et portillons à Moëlan-sur-Mer, en bois, PVC ou aluminium, manuels ou automatiques. Étude de vos besoins chez vous.",
  },
  "/amenagement-exterieur-maison/": {
    nom: "Allées et bordures",
    titre: "Allées et bordures à Moëlan-sur-Mer | Au Fil des 4 Saisons",
    description:
      "Création d'allées et de bordures à Moëlan-sur-Mer : enrobé, pavés en pierre naturelle, béton désactivé, gravier, bordures en ardoise ou en brique.",
  },
  "/maconnerie-paysagere/": {
    nom: "Maçonnerie paysagère",
    titre: "Maçonnerie paysagère, Moëlan-sur-Mer | Au Fil des 4 Saisons",
    description:
      "Maçonnerie paysagère à Moëlan-sur-Mer : terrasses, escaliers en ardoise, murets et murs en pierre, dallages et allées. Découvrez nos réalisations.",
  },
  "/contact/": {
    nom: "Contact",
    titre: "Contact et devis à Moëlan-sur-Mer | Au Fil des 4 Saisons",
    description:
      "Contactez Au Fil des 4 Saisons, 34 rue du Guilly à Moëlan-sur-Mer, au 02 98 96 56 30. Devis gratuit, intervention dans un rayon de 30 km autour de Moëlan.",
  },
  "/mentions-legales/": {
    nom: "Mentions légales",
    titre: "Mentions légales | Au Fil des 4 Saisons, Moëlan-sur-Mer",
    description:
      "Mentions légales du site d'Au Fil des 4 Saisons, paysagiste à Moëlan-sur-Mer : éditeur, SIREN et SIRET, agrément services à la personne et hébergement.",
  },
};
