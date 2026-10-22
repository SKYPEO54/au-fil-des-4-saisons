// Tout ce qu'une page de prestation passe au layout : titre, description,
// fil d'Ariane (deduit du menu), noeuds Service et FAQPage. Une seule source
// pour les pages, le JSON-LD et llms.txt.
import { nav, site } from "../site";
import { pages } from "../data/pages";
import { prestationParSlug, type QR } from "../data/prestations";
import { serviceSchema, faqSchema, type Miette } from "./schema";

export function prestationProps(slug: string, autres: unknown[] = []) {
  const chemin = `/${slug}/`;
  const meta = pages[chemin];
  const p = prestationParSlug(slug);
  if (!meta || !p) throw new Error(`Prestation inconnue : ${slug}`);
  const url = site.url + chemin;

  // Fil d'Ariane : rubrique parente du menu, puis la page.
  const miettes: Miette[] = [];
  const parent = nav.find((n) => n.children?.some((c) => c.href === "/" + slug));
  if (parent) miettes.push({ nom: pages[parent.href + "/"]?.nom ?? parent.label, href: parent.href + "/" });
  miettes.push({ nom: meta.nom, href: chemin });

  const faq: QR[] = p.faq;
  return {
    title: meta.titre,
    description: meta.description,
    miettes,
    schemas: [serviceSchema(url, p.nom, p.resume), ...(faq.length ? [faqSchema(url, faq)] : []), ...autres],
    faq,
    nom: p.nom,
  };
}
