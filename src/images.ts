import type { ImageMetadata } from "astro";

// Charge toutes les images optimisables du dossier assets
const modules = import.meta.glob<{ default: ImageMetadata }>(
  "./assets/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true },
);

// Regroupe les images par dossier (ex: "accueil", "paysagiste", ...)
const byFolder: Record<string, ImageMetadata[]> = {};
for (const [path, mod] of Object.entries(modules)) {
  const m = path.match(/\.\/assets\/([^/]+)\//);
  if (!m) continue;
  const folder = m[1];
  (byFolder[folder] ||= []).push(mod.default);
}

// Tri stable par nom de fichier pour un rendu déterministe
for (const k of Object.keys(byFolder)) {
  byFolder[k].sort((a, b) => a.src.localeCompare(b.src));
}

/** Retourne toutes les images d'un dossier. */
export function gallery(folder: string): ImageMetadata[] {
  return byFolder[folder] ?? [];
}

/** Retourne la 1ère image d'un dossier (ou n-ième). */
export function pick(folder: string, index = 0): ImageMetadata | undefined {
  const arr = byFolder[folder] ?? [];
  return arr[index % Math.max(arr.length, 1)];
}

/** Cherche une image par fragment de nom dans un dossier. */
export function find(folder: string, fragment: string): ImageMetadata | undefined {
  const arr = byFolder[folder] ?? [];
  const f = fragment.toLowerCase();
  return arr.find((i) => i.src.toLowerCase().includes(f)) ?? arr[0];
}
