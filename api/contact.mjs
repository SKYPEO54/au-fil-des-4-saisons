/**
 * Reception du formulaire de devis.
 *
 * Fonction Vercel generique : ce fichier est IDENTIQUE sur tous les sites
 * clients. Rien n'y est propre a un client, tout vient de l'environnement,
 * pose par scripts/formulaire.mjs :
 *
 *   RESEND_API_KEY  cle du compte Resend, partagee entre tous les sites
 *   FORM_FROM       expediteur, ex. Nom du client <client@leads.exemple.fr>
 *   FORM_TO         destinataire reel, ex. contact@client.fr
 *
 * L'expediteur vit sur UN domaine d'envoi mutualise : Resend limite les
 * domaines verifies, pas les adresses. Le domaine du client n'est jamais
 * touche, et sa boite mail garde sa reputation.
 *
 * Le formulaire fonctionne sans JavaScript : POST classique, reponse 303.
 */

const REDIR = (url) => new Response(null, { status: 303, headers: { Location: url } })

// Limitation par IP. Best effort : sur Fluid Compute l'instance est reutilisee
// entre requetes, donc la fenetre tient pour un bot qui insiste. Elle ne
// remplace pas une vraie limitation, elle coupe le cas courant.
const vues = new Map()
const LIMITE = 5
const FENETRE = 10 * 60 * 1000

function tropSouvent(ip) {
  const t = Date.now()
  const recentes = (vues.get(ip) || []).filter((x) => t - x < FENETRE)
  recentes.push(t)
  vues.set(ip, recentes)
  if (vues.size > 500) for (const [k, v] of vues) if (!v.some((x) => t - x < FENETRE)) vues.delete(k)
  return recentes.length > LIMITE
}

const propre = (v, max = 500) =>
  String(v ?? '')
    .replace(/[\r\n]+/g, ' ')
    .trim()
    .slice(0, max)

export default {
  async fetch(request) {
    if (request.method !== 'POST') return REDIR('/contact/')

    const cle = process.env.RESEND_API_KEY
    const from = process.env.FORM_FROM
    const to = process.env.FORM_TO
    if (!cle || !from || !to) {
      console.error('contact: RESEND_API_KEY, FORM_FROM ou FORM_TO absent')
      return REDIR('/contact/?erreur=config')
    }

    let f
    try {
      f = await request.formData()
    } catch {
      return REDIR('/contact/?erreur=1')
    }

    // Pot de miel : un robot remplit tout, un humain ne voit pas ce champ.
    // On repond comme si tout allait bien, pour ne pas lui apprendre la regle.
    if (propre(f.get('site_web'))) return REDIR('/contact/merci/')

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'inconnue'
    if (tropSouvent(ip)) return REDIR('/contact/?erreur=trop')

    const nom = propre(f.get('nom'), 120)
    const prenom = propre(f.get('prenom'), 120)
    const email = propre(f.get('email'), 180)
    const telephone = propre(f.get('telephone'), 40)
    const commune = propre(f.get('commune'), 120)
    const demande = propre(f.get('demande'), 120)
    const message = propre(f.get('message'), 4000)

    const emailValide = /^[^@\s]+@[^@\s.]+\.[^@\s]+$/.test(email)
    if (!nom || !telephone || !emailValide) return REDIR('/contact/?erreur=1')

    const corps = [
      `Nom : ${prenom} ${nom}`.trim(),
      `Téléphone : ${telephone}`,
      `E-mail : ${email}`,
      `Commune : ${commune || 'non renseignée'}`,
      `Demande : ${demande || 'non précisée'}`,
      '',
      message || '(aucun message)',
      '',
      `Reçu depuis ${new URL(request.url).host}`,
    ].join('\n')

    try {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${cle}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: `Demande de devis : ${demande || 'contact'} (${commune || 'commune non précisée'})`,
          text: corps,
        }),
      })
      if (!r.ok) {
        console.error('contact: Resend a repondu', r.status, (await r.text()).slice(0, 300))
        return REDIR('/contact/?erreur=envoi')
      }
    } catch (e) {
      console.error('contact: appel Resend impossible', String(e).slice(0, 200))
      return REDIR('/contact/?erreur=envoi')
    }

    return REDIR('/contact/merci/')
  },
}
