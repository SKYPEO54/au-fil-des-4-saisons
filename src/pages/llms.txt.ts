import type { APIRoute } from "astro";
import { company, site, gerantsTexte } from "../site";
import { pages } from "../data/pages";
import { prestations } from "../data/prestations";

/**
 * llms.txt : résumé machine-lisible du site pour les moteurs de réponse.
 * Généré depuis les mêmes données que les pages, donc jamais périmé.
 */
export const GET: APIRoute = () => {
  const u = (c: string) => site.url + c;
  const note = String(site.avis.note).replace(".", ",");

  const texte = `# ${company.name}

> Jardinier paysagiste à ${site.ville} (${site.codePostal}, ${site.departement}, ${site.region}) depuis ${site.anneeCreation}.
> Création et entretien de jardins, espaces verts, aménagement extérieur et maçonnerie paysagère, pour les particuliers et les professionnels.

## Identité

- Nom : ${company.name} (${site.raisonSociale})
- Cogérants : ${gerantsTexte}
- Création : ${site.anneeCreation}
- SIREN : ${site.siren} ; SIRET : ${site.siret} ([Annuaire des Entreprises](${site.annuaire}))
- Adresse : ${company.address}
- Téléphone : ${company.phone} ; mobile : ${company.mobile}
- E-mail : ${company.email}
- ${company.agrement}
- Note Google : ${note}/5 sur ${site.avis.nombre} avis, relevée le ${site.avis.releve} ([fiche Google](${site.ficheGoogle}))
- Horaires : ${company.hours.map((h) => `${h.day} ${h.time}`).join(" ; ")}
- Contenu mis à jour le ${site.miseAJour}

## Prestations

${prestations.map((p) => `- [${pages["/" + p.slug + "/"]?.nom ?? p.nom}](${u("/" + p.slug + "/")}) : ${p.resume}`).join("\n")}

## Zone d'intervention

Sud du Finistère, dans un rayon de 30 km autour de ${site.ville} : ${site.communes.join(", ")} et leurs alentours.

## Pages utiles

- [Accueil](${u("/")})
- [À propos](${u("/a-propos/")})
- [Contact et devis gratuit](${u("/contact/")})
- [Mentions légales](${u("/mentions-legales/")})

## Optional

- [Texte intégral des prestations et des questions fréquentes](${u("/llms-full.txt")})
`;

  return new Response(texte, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
