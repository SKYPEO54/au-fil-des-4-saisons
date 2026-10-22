// Graphe JSON-LD a entite unique, modele marc-reprographie / entrepriserobert.
// Un seul @id d'entreprise pour tout le site : chaque page le reference au lieu
// de redeclarer un etablissement, et les moteurs consolident les signaux.
import { company, site, gerantsTexte } from "../site";
import type { QR } from "../data/prestations";

export const abs = (chemin: string) => new URL(chemin, site.url + "/").toString();

export const ID_ENTREPRISE = `${site.url}/#entreprise`;
export const ID_SITE = `${site.url}/#site`;
export const idGerant = (id: string) => `${site.url}/#${id}`;

/**
 * Les deux cogerants (Annuaire des Entreprises), responsables du contenu :
 * auteurs de chaque page. Leur url pointe sur /a-propos/, qui les nomme.
 */
export const gerants = site.gerants.map((g) => ({
  "@type": "Person",
  "@id": idGerant(g.id),
  name: `${g.prenom} ${g.nom}`,
  givenName: g.prenom,
  familyName: g.nom,
  jobTitle: "Cogérant",
  url: abs("/a-propos/"),
  worksFor: { "@id": ID_ENTREPRISE },
}));

/** Reference courte d'auteur, lisible sans resoudre le graphe (name + url). */
export const auteurs = gerants.map((g) => ({ "@type": "Person", "@id": g["@id"], name: g.name, url: g.url }));

export const entreprise = {
  "@type": ["LandscapingBusiness", "LocalBusiness"],
  "@id": ID_ENTREPRISE,
  name: company.name,
  legalName: site.raisonSociale,
  url: site.url + "/",
  logo: abs("/logo.png"),
  image: abs("/logo.png"),
  description:
    "Jardinier paysagiste à Moëlan-sur-Mer depuis 2006 : création et entretien de jardins, espaces verts, aménagement extérieur et maçonnerie paysagère dans le sud du Finistère.",
  telephone: site.telephoneLien,
  email: company.email,
  foundingDate: String(site.anneeCreation),
  vatID: site.tva,
  taxID: site.siret.replace(/\s/g, ""),
  currenciesAccepted: "EUR",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.rue,
    postalCode: site.codePostal,
    addressLocality: site.ville,
    addressRegion: site.departement,
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.latitude, longitude: site.longitude },
  areaServed: [
    ...site.communes.map((c) => ({ "@type": "City", name: c, addressCountry: "FR" })),
    { "@type": "AdministrativeArea", name: site.departement },
  ],
  openingHoursSpecification: site.horairesSchema.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.jours,
    opens: h.ouvre,
    closes: h.ferme,
  })),
  employee: gerants.map((g) => ({ "@id": g["@id"] })),
  sameAs: [site.ficheGoogle],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.avis.note,
    reviewCount: site.avis.nombre,
    bestRating: 5,
    worstRating: 1,
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Agrément",
    name: company.agrement,
  },
  knowsLanguage: "fr-FR",
};

export const siteWeb = {
  "@type": "WebSite",
  "@id": ID_SITE,
  url: site.url + "/",
  name: company.name,
  inLanguage: "fr-FR",
  publisher: { "@id": ID_ENTREPRISE },
};

export interface Miette {
  nom: string;
  href: string;
}

export const filAriane = (url: string, miettes: Miette[]) => ({
  "@type": "BreadcrumbList",
  "@id": url + "#fil",
  itemListElement: miettes.map((m, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: m.nom,
    item: abs(m.href),
  })),
});

export const faqSchema = (url: string, qr: QR[]) => ({
  "@type": "FAQPage",
  "@id": url + "#faq",
  mainEntity: qr.map((x) => ({
    "@type": "Question",
    name: x.q,
    acceptedAnswer: { "@type": "Answer", text: x.r },
  })),
});

export const serviceSchema = (url: string, nom: string, description: string) => ({
  "@type": "Service",
  "@id": url + "#service",
  name: nom,
  serviceType: nom,
  description,
  url,
  provider: { "@id": ID_ENTREPRISE },
  areaServed: site.communes.map((c) => ({ "@type": "City", name: c })),
});

export const howToSchema = (url: string, nom: string, etapes: { nom: string; texte: string }[]) => ({
  "@type": "HowTo",
  "@id": url + "#etapes",
  name: nom,
  step: etapes.map((e, i) => ({ "@type": "HowToStep", position: i + 1, name: e.nom, text: e.texte })),
});

export { gerantsTexte };
