# Au Fil des 4 Saisons — Site web

Refonte du site d'**Au Fil des 4 Saisons**, jardinier paysagiste à Moëlan-sur-Mer (Bretagne sud).
Original : https://www.aufildes4saisons.fr/ — Inspiration design : "Green Harvest" (2 images `inspiration*.webp` à la racine).

## Stack
- **Astro 5** (statique/SSG) + **Tailwind CSS v4** (`@tailwindcss/vite`) + `@astrojs/sitemap` + `sharp`.
- Node 24. **Le projet Astro est directement à la racine** (plus de sous-dossier `site/` — aplati le 24/06/2026).

## Commandes
```bash
# depuis la racine du projet (plus besoin de `cd site`)
npm install
npm run dev       # dev
npm run build     # build -> dist/
npm run preview   # preview (tournait sur http://localhost:4325/ — 4321 occupé par un autre projet)
```
Pour visualiser : Puppeteer MCP (headless). NE PAS screenshotter à chaque changement — seulement quand l'utilisateur le demande (il l'a explicitement demandé). Itérer via `npm run build`.

## DESIGN — parti pris (validé, reproduire FIDÈLEMENT l'inspiration "Green Harvest")
Vert profond émeraude DOMINANT + sections LIME pastel + accents terracotta. NE PAS faire un fond clair générique.
- **Couleurs entreprise** : terracotta `#db3e15` (CTA/pop) · olive `#8a9c0d` (→ famille lime).
- **Tokens** dans `src/styles/global.css` (`@theme`) :
  - `green-700 #1a4a33` = fond principal du site ; `green-800 #154029` = cards catégories ; `green-600 #1d5a42` = surfaces ; `green-900/950` = footer/overlay.
  - `lime #d4e87e` (pastel clair) = fond sections lime ; `lime-bright`, `cream #f2efe3`, `terracotta`.
- **POLICES (clé !)** : titres en **sans grotesk = "Hanken Grotesk"** ; **mots-accents UNIQUEMENT en serif italique = "Fraunces"** via la classe `.accent` (lime sur fond foncé, vert sur fond lime). NE PAS mettre les titres en serif. Chargées via Google Fonts dans `Base.astro`.
- Tout arrondi (cards, boutons `rounded-full`). Boutons : `.btn` + `.btn-primary/.btn-lime/.btn-ghost/.btn-cream`.
- **Design boutons (refait 25/06)** : tous les `.btn` ont le design du CTA = **pilule + texte MAJUSCULES espacées à gauche + pastille ronde avec flèche ↗ à droite** (cercle = `::after`, flèche = `::before` via mask, couleurs pilotées par `--btn-circle`/`--btn-arrow-color`). **Au survol, TOUTES les couleurs s'inversent** en douceur (.35s) + léger `translateY`. Tout est dans `global.css` (.btn) → s'applique partout sans toucher les pages. CtaBand a son propre bouton custom (même rendu).

## Composants clés (réutilisables sur toutes les pages)
- `Header.astro` : barre fixe **transparente par défaut, fond vert + blur + ombre au scroll uniquement**. Logo SANS fond (PNG transparent + drop-shadow). **Desktop (≥1024px, demande client 08/10/2026) : menu BANDEAU en ligne** (7 liens, sous-menus déroulants au survol/focus pour les entrées avec `children`, lien actif en lime) + bouton terracotta "Devis gratuit" à partir de 1280px. **Mobile/tablette (<1024px)** : bouton **Menu/Fermer** : 2 barres qui **s'animent en croix** (`aria-expanded`). Ouvre un **overlay plein écran en effet RIDEAU** (slide down via `-translate-y-full` → `0`), `overflow-x-hidden` (filigrane "4" confiné dans `inset-0 overflow-hidden` pour zéro scroll horizontal). Barre transparente quand l'overlay est ouvert. Esc ferme.
- `CategoryCard.astro` : card vert foncé avec **encoche concave bas-droite (masque radial)** + **bouton rond détaché niché dans le coin** (92px, collé aux bords, fin anneau lime côté intérieur) + titre 2 lignes (2e mot en `.accent`) + filigrane sparkle 4 branches. Détail TRÈS important pour l'utilisateur. Variante `dark` (sur lime) / `!dark` (lime sur vert). **Prop `image` optionnelle (24/06)** : si fournie → photo en fond + voile dégradé `from-green-950/95 via-green-900/75 to-green-900/45` + zoom au survol (le sparkle ne s'affiche que sans image). Encoche + bouton rond conservés.
- `ProjectCard.astro` : card lime image + flèche ronde, pour carrousels.
- `RealisationsCarousel.astro` (24/06, **réutilisable**) : section carrousel "Nos prestations au fil des saisons" autonome (ses 6 ProjectCard + images + données). Prop `eyebrow` (défaut "(03) Réalisations"). Retirée de l'accueil, à réutiliser ailleurs : `<RealisationsCarousel />`.
- `LeafBg.astro` (24/06) : fond feuilles (`bg_leaves.jpg`) + voile `bg-green-950/85`. À placer dans un parent `relative`. **`widths={[1920]}` forcé** (un fond `object-cover` doit avoir la pleine résolution sinon il pixelise — voir patterns).
- `TaxAdvantage.astro` (refait 24/06) : "Vos travaux de jardinage et aménagements à prix réduit" + 2 cartes AVEC IMAGES (`service-personne…jpg` = logo SAP sur fond blanc / `tva.webp` = photo cochon) + **texte EXACT du site**. Partagé sur l'accueil + 9 pages services.
- `PageHero.astro` (props eyebrow/title/accent/text/image/breadcrumb + **slot `actions`** pour un bouton dans le hero, 25/06 ; voile = dégradé `green-950/85→15`, eyebrow+accent en `lime`. ⚠️ avant le 25/06 il utilisait des tokens inexistants `forest-900`/`olive-light` → voile/accent invisibles, corrigé), `FeatureRow.astro` (variante `lime`, prop `reverse` pour alterner photo G/D, **prop `tall`** 25/06 = photo étirée à la hauteur du texte sur desktop, `lg:h-full lg:min-h-[420px]`), `ServiceCard.astro`, `CtaBand.astro` (photo de fond + voile, **`lg:min-h-screen` = 100vh desktop**), `Gallery.astro`, `Footer.astro` (fond lime + wordmark géant sans bold).
- Données : `src/site.ts` (nav+slugs, infos entreprise) · `src/images.ts` (helpers `gallery/find/pick` via `import.meta.glob`).

## Patterns réutilisables (créés le 24/06 — À RÉUTILISER sur les autres pages)
- **Apparition au scroll** : attribut `data-reveal` sur un élément (+ `style="--reveal-delay:.12s"` pour échelonner). CSS dans `global.css` (`@media prefers-reduced-motion: no-preference` + garde `.js`) ; déclencheur = IntersectionObserver dans `Base.astro` (ajoute `.is-visible`). Sans JS / reduced-motion → contenu visible. `Base.astro` ajoute `.js` sur `<html>` tôt.
- **`.fit-screen`** (`global.css`, desktop ≥1024px) : `min-height:100vh; flex; flex-col; justify-center` → la section remplit l'écran, contenu centré. Règle le cas "section trop courte". Limite : ne rétrécit pas le contenu → une section très haute peut dépasser sur petit portable.
- **Section épinglée / scroll horizontal** : `.pin-wrap` (height 300vh) > `.pin-sticky` (sticky, 100vh) > `.pin-track` (flex row 300vw) > `.pin-panel` (100vw×100vh). JS dans `Base.astro` convertit scroll vertical → translateX (rAF). **Desktop only** (`@media min-width:1024 + prefers-reduced-motion`) ; **empilement vertical sur mobile/tablette** (choix utilisateur). Le JS efface le transform hors mode horizontal (sinon contenu poussé hors écran au resize).
- **Hero vidéo** : `public/videos/hero-{720,1080}.{webm,mp4}`, poster WebP, sélection 720/1080 en JS via `matchMedia`, `autoplay muted loop playsinline`, sans audio.
- **Feuille décorative** : `src/assets/leaves_icon.png` remplace les anciennes étoiles/astérisques. Soit en `<Image>` (vert naturel), soit en **silhouette d'une couleur** via masque CSS : `bg-lime` + `style="-webkit-mask:url(${leafIcon.src}) center/contain no-repeat; mask:..."`.

## Accueil (`src/pages/index.astro`) — ORDRE ACTUEL au 24/06 (refondu section par section depuis l'ancien site)
1. **Hero** (vidéo) composition centrée + sous-titre `<p>`.
2. **Manifeste** (non numéroté) "Créez un espace de détente et de sérénité…" — 2 colonnes texte, `data-reveal` séquentiel. `id="suite"` (cible bouton Explorer).
3. **Section épinglée "Notre savoir-faire"** (scroll horizontal desktop / empilé mobile) — 3 panneaux sur fond `LeafBg` : Création paysagère / Terrasses & plages de piscines (photo G) / Portails & clôtures. Texte EXACT du site.
4. **Engagements (fond LIME)** "Petits plus et exigences de notre équipe…" — 4 cartes `green-800` (icône dans rond terracotta/lime + titre + texte). Texte EXACT.
5. **(01) Notre entreprise** — photo équipe à GAUCHE pleine hauteur, texte à droite, feuille lime (masque) en déco. 
6. **(02) Nos services (fond LIME, `fit-screen`)** — en-tête centré + 3 `CategoryCard` AVEC photo : Entretien des espaces verts / Abris de jardin et carports / Allées et bordures (libellés boutons de l'ancien site comme description). Texte EXACT.
7. **Avantage fiscal** = `<TaxAdvantage />` (images SAP + cochon, texte exact).
8. **`<CtaBand />`** (100vh desktop).
> Supprimés de l'accueil (mais conservés) : ancienne section "(02) services" générique (3 menus déroulants) ; carrousel Réalisations → `RealisationsCarousel.astro` ; section "Notre équipe / Faites appel à nos paysagistes".

## Slugs (NE PAS changer — SEO)
`/` · `/a-propos` · `/jardinier-paysagiste` (→ `/paysagiste`, `/entretien-jardin`) · `/espaces-verts` (→ `/abri-jardin`, `/terrasse-exterieure`) · `/amenagement-exterieur` (→ `/cloture-portail`, `/amenagement-exterieur-maison`) · `/maconnerie-paysagere` · `/contact` (+ `/mentions-legales`). 13 pages + sitemap.

## ÉTAT au 25/06/2026
- ✅ **Boutons du site entièrement restylés** (voir "Design boutons" ci-dessus) : pilule + pastille flèche + inversion couleurs au survol. Footer : wordmark géant supprimé (demande user).
- ✅ **Page `a-propos.astro` REFAITE** (texte EXACT fourni par le client, rien d'inventé — les anciennes sections "stats/chiffres" et "nos valeurs" étaient inventées → SUPPRIMÉES). Structure : Hero (`hero_about`, bouton "Contactez nos experts") → **Section 1 "Notre entreprise"** (`FeatureRow reverse tall`, photo `IMG_3933` palmier/gravier à droite, e-mail cliquable, bouton "Contactez nos paysagistes") → **Section 2 "Nos services"** (bande **fond lime** pleine largeur, `FeatureRow lime tall`, photo `occultante` clôture bois à gauche, bouton "Obtenez votre devis gratuit") → `CtaBand`. Eyebrows "Notre entreprise"/"Nos services" ajoutés (pas dans le texte client, à confirmer).
- 🎯 **Reste : 11 autres pages** à propager (même méthode : texte exact client + réemploi composants/patterns).
- ✅ **Accueil** : refonte avancée section par section depuis l'ancien site (voir ordre ci-dessus). Hero vidéo, section épinglée horizontale, cartes photo, avantage fiscal avec vraies images.
- 🎯 **PROCHAINE GROSSE ÉTAPE** : propager aux **12 autres pages** TOUT ce qu'on a construit sur l'accueil. Réutiliser les composants/patterns : `RealisationsCarousel`, `CategoryCard` (avec/ sans image), `TaxAdvantage`, `FeatureRow`, `LeafBg`, + patterns `data-reveal`, `.fit-screen`, section épinglée. C'est le but : ne pas réinventer, réemployer.
- ⏳ **`fit-screen` à finir** : appliqué à la section services + CtaBand (100vh). À étendre (en attente de validation utilisateur) aux sections Manifeste / Engagements / Notre entreprise. Limite connue : sections très hautes peuvent dépasser sur petit portable (option : réduire `min-h` des CategoryCard 25rem→~20rem).
- ⏳ Récupérer les **textes définitifs** du client (sinon : reprendre EXACTEMENT le texte de l'ancien site en ligne, ne JAMAIS inventer — cf. mémoire).
- ⏳ Brancher l'**endpoint du formulaire** contact (Formspree).
- ⏳ Compléter l'hébergeur dans `mentions-legales.astro`.
- 🐞 À vérifier : `service-personne-…jpg` = logo SAP (pas une photo) ; bien vérifié qu'il n'est plus utilisé comme "photo équipe" ailleurs.

## Infos entreprise
34 Rue du Guilly, 29350 Moëlan-sur-Mer · 02 98 96 56 30 · 06 58 88 68 16 · afd4saisons@gmail.com
Agrément Services à la Personne N° N/240108/F/029/S/271 · depuis 2006 · zone ~30 km (Quimperlé, Lorient, Guidel…)
