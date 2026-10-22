import type { APIRoute } from "astro";
import { company, site, gerantsTexte } from "../site";
import { pages } from "../data/pages";
import { prestations } from "../data/prestations";

/**
 * Pendant complet de llms.txt : chaque prestation avec son résumé et ses
 * questions fréquentes, exactement comme sur les pages. Il ne dit rien que les
 * pages ne disent pas.
 */
export const GET: APIRoute = () => {
  const u = (c: string) => site.url + c;

  const blocs = prestations
    .map((p) => {
      const m = pages["/" + p.slug + "/"];
      return [
        `## ${m?.nom ?? p.nom}`,
        `Page : ${u("/" + p.slug + "/")}`,
        m?.description ?? "",
        p.resume,
        ...p.faq.map((x) => `### ${x.q}\n\n${x.r}`),
      ]
        .filter(Boolean)
        .join("\n\n");
    })
    .join("\n\n---\n\n");

  const texte = `# ${company.name}

> Jardinier paysagiste à ${site.ville} (${site.codePostal}, ${site.departement}) depuis ${site.anneeCreation}, cogéré par ${gerantsTexte}.
> Téléphone ${company.phone}, ${company.email}. Résumé structuré : ${u("/llms.txt")}
> Contenu mis à jour le ${site.miseAJour}.

# L'entreprise

${company.name} propose ses services de paysagistes et de jardiniers : création et entretien de jardin, création d'espaces verts, aménagements extérieurs et maçonnerie paysagère, pour les particuliers et les professionnels, jardins privés et publics.

- Adresse : ${company.address}
- ${company.agrement}
- Devis gratuit : l'équipe se déplace chez vous pour étudier votre projet.
- Avantages : crédit d'impôt de 50 % au titre des services à la personne ; TVA à 10 % sous conditions d'éligibilité pour les allées, bordures, clôtures et terrasses.
- Zone : ${site.communes.join(", ")} et alentours, dans un rayon de 30 km.

# Prestations

${blocs}
`;

  return new Response(texte, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
