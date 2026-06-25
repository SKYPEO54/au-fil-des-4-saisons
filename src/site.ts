// Données globales du site — Au Fil des 4 Saisons

export const company = {
  name: "Au Fil des 4 Saisons",
  tagline: "Jardinier paysagiste à Moëlan-sur-Mer",
  baseline: "Un jardin beau et impeccable en toute saison",
  since: 2006,
  experience: "15 ans",
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
  zone: "Moëlan-sur-Mer et dans un rayon de 30 km (Quimperlé, Lorient, Guidel, Concarneau…)",
};

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
