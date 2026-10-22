import type { APIRoute } from "astro";
import { site } from "../site";

/**
 * Les robots des moteurs de réponse (ChatGPT, Claude, Perplexity, Gemini) sont
 * explicitement autorisés, comme sur entrepriserobert : sur un site vitrine
 * local, être cité dans une réponse générée vaut autant qu'un lien bleu.
 */
const robotsIA = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
];

const lignes = [
  "User-agent: *",
  "Allow: /",
  "",
  "# Moteurs de réponse",
  ...robotsIA.flatMap((ua) => [`User-agent: ${ua}`, "Allow: /", ""]),
  `Sitemap: ${site.url}/sitemap-index.xml`,
  "",
];

export const GET: APIRoute = () =>
  new Response(lignes.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
