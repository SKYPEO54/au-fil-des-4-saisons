// Données globales du site — Au Fil des 4 Saisons

export const company = {
  name: "Au Fil des 4 Saisons",
  tagline: "Jardinier paysagiste à Moëlan-sur-Mer",
  baseline: "Un jardin beau et impeccable en toute saison",
  since: 2006,
  experience: "20 ans",
  address: "34 Rue du Guilly, 29350 Moëlan-sur-Mer",
  phone: "02 98 96 56 30",
  phoneHref: "tel:+33298965630",
  mobile: "06 58 88 68 16",
  mobileHref: "tel:+33658886816",
  email: "afd4saisons@gmail.com",
  agrement: "Agrément Services à la Personne N° N/240108/F/029/S/271",
  hours: [
    { day: "Lundi – Jeudi", time: "8h30–12h30 · 13h30–17h00" },
    { day: "Vendredi", time: "8h30–12h30 · 13h30–16h00" },
    { day: "Samedi – Dimanche", time: "Fermé" },
  ],
  zone: "Moëlan-sur-Mer et dans un rayon de 30 km alentour (Quimperlé, Lorient, Guidel, Ploemeur…)",
};

/**
 * Identite, sources et signaux de confiance (JSON-LD, llms.txt, pied de page).
 * Chaque valeur vient d'une source citee : rien n'est saisi au juge.
 *  - SIREN, SIRET, date de creation, gerants : Annuaire des Entreprises
 *    (recherche-entreprises.api.gouv.fr, releve le 21/10/2026).
 *  - Capital, numero de TVA : mentions legales de l'ancien site du client.
 *  - Note, nombre d'avis, coordonnees GPS : fiche Google, relevee le 21/10/2026.
 */
export const site = {
  url: "https://www.aufildes4saisons.fr",
  // Date AAAA-MM-JJ de la derniere modification REELLE du contenu (pas du build).
  miseAJour: "2026-10-28",
  raisonSociale: "AU FIL DES 4 SAISONS",
  siren: "487 945 255",
  siret: "487 945 255 00023",
  tva: "FR47487945255",
  capital: "8 000 €",
  anneeCreation: 2006,
  rue: "34 Rue du Guilly",
  codePostal: "29350",
  ville: "Moëlan-sur-Mer",
  departement: "Finistère",
  region: "Bretagne",
  telephoneLien: "+33298965630",
  mobileLien: "+33658886816",
  latitude: 47.8142646,
  longitude: -3.6340002,
  gerants: [
    { id: "cedric-le-corre", prenom: "Cédric", nom: "Le Corre" },
    { id: "ulrich-le-corre", prenom: "Ulrich", nom: "Le Corre" },
  ],
  ficheGoogle: "https://www.google.com/maps?cid=18224921547695265064",
  avis: { note: 4.1, nombre: 21, releve: "2026-10-21" },
  annuaire: "https://annuaire-entreprises.data.gouv.fr/entreprise/487945255",
  creditImpot: "https://www.service-public.fr/particuliers/vosdroits/F12",
  // Communes citees par le client (accueil de l'ancien site, zone d'intervention).
  communes: ["Moëlan-sur-Mer", "Riec-sur-Bélon", "Clohars-Carnoët", "Guidel", "Quimperlé", "Lorient", "Ploemeur"],
  horairesSchema: [
    { jours: ["Monday", "Tuesday", "Wednesday", "Thursday"], ouvre: "08:30", ferme: "12:30" },
    { jours: ["Monday", "Tuesday", "Wednesday", "Thursday"], ouvre: "13:30", ferme: "17:00" },
    { jours: ["Friday"], ouvre: "08:30", ferme: "12:30" },
    { jours: ["Friday"], ouvre: "13:30", ferme: "16:00" },
  ],
};

export const gerantsTexte = site.gerants.map((g) => `${g.prenom} ${g.nom}`).join(" et ");

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  {
    label: "Jardinier paysagiste",
    href: "/jardinier-paysagiste",
    children: [
      { label: "Création", href: "/paysagiste" },
      { label: "Entretien", href: "/entretien-jardin" },
    ],
  },
  {
    label: "Espaces verts",
    href: "/espaces-verts",
    children: [
      { label: "Abris", href: "/abri-jardin" },
      { label: "Terrasse", href: "/terrasse-exterieure" },
    ],
  },
  {
    label: "Aménagement extérieur",
    href: "/amenagement-exterieur",
    children: [
      { label: "Clôture & portail", href: "/cloture-portail" },
      { label: "Allée & bordure", href: "/amenagement-exterieur-maison" },
    ],
  },
  { label: "Maçonnerie paysagère", href: "/maconnerie-paysagere" },
  { label: "Contact", href: "/contact" },
];
