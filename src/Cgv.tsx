import type { ReactNode } from 'react'

// Conditions générales de vente — texte fourni par Cédric Conche, à reprendre mot pour mot.

function Article({ id, num, titre, children }: { id: string; num: number; titre: string; children: ReactNode }) {
  return (
    <section id={id} className="legal-article">
      <h2><span>Article {num}</span>{titre}</h2>
      {children}
    </section>
  )
}

const SOMMAIRE = [
  'Identité du professionnel',
  'Objet et champ d’application',
  'Nature des accompagnements',
  'Tarifs',
  'Prise de contact et commande',
  'Paiement',
  'Réservation, report et annulation des séances',
  'Programmes mensuels',
]

export default function Cgv() {
  return (
    <>
    <header className="header scrolled">
      <div className="wrap header-inner">
        <a href="./" className="logo">
          <div className="logo-name">CÉDRIC CONCHE</div>
          <div className="logo-tag">renaître à soi m'aime</div>
        </a>
        <a href="./" className="btn btn-gold btn-sm">Retour au site</a>
      </div>
    </header>
    <main className="legal">
      <div className="wrap legal-wrap">
        <a href="./" className="legal-back">← Retour au site</a>
        <p className="eyebrow">Informations légales</p>
        <h1 className="title">Conditions générales de vente</h1>
        <p className="legal-date">Dernière mise à jour : 23 octobre 2026</p>
        <div className="gold-line" />

        <nav className="legal-toc" aria-label="Sommaire">
          <p className="legal-toc-title">Sommaire</p>
          <ol>
            {SOMMAIRE.map((t, i) => (
              <li key={t}><a href={`#cgv-${i + 1}`} onClick={e => { e.preventDefault(); document.getElementById(`cgv-${i + 1}`)?.scrollIntoView({ behavior: 'smooth' }) }}>{t}</a></li>
            ))}
          </ol>
        </nav>

        <Article id="cgv-1" num={1} titre="Identité du professionnel">
          <p>Les présentes conditions générales de vente s’appliquent aux prestations et produits proposés sous le nom commercial Renaître à soi-m’aime, exploité par Cédric Conche, entrepreneur individuel.</p>
          <ul className="legal-info">
            <li><strong>Adresse professionnelle :</strong> 7 rue des Meuniers, 49320 Brissac Loire Aubance, France.</li>
            <li><strong>SIRET :</strong> 10623988200017</li>
            <li><strong>E-mail :</strong> <a href="mailto:renaitreasoimaime@outlook.fr">renaitreasoimaime@outlook.fr</a></li>
            <li><strong>Téléphone :</strong> <a href="tel:+33634351306">06 34 35 13 06</a></li>
          </ul>
          <p>Ci-après dénommé « le Prestataire ».</p>
        </Article>

        <Article id="cgv-2" num={2} titre="Objet et champ d’application">
          <p>Les présentes conditions définissent les modalités de vente des prestations et produits proposés par Renaître à soi-m’aime, notamment :</p>
          <ul>
            <li>les séances individuelles d’accompagnement ;</li>
            <li>les programmes d’accompagnement mensuels ;</li>
            <li>le livre papier Renaître à soi-m’aime ;</li>
            <li>les livres numériques, guides et fichiers téléchargeables ;</li>
            <li>les conférences, ateliers et événements.</li>
          </ul>
          <p>Elles s’appliquent aux clients particuliers. Toute commande implique la prise de connaissance et l’acceptation des conditions applicables à l’offre concernée.</p>
        </Article>

        <Article id="cgv-3" num={3} titre="Nature des accompagnements">
          <p>Les accompagnements proposés relèvent du développement personnel et de la réflexion sur soi. Ils peuvent notamment porter sur les émotions, les habitudes, la confiance en soi, les comportements répétitifs et les difficultés liées aux addictions.</p>
          <p>Ils ne constituent ni un acte médical, ni une psychothérapie, ni un diagnostic, ni un traitement. Ils ne remplacent pas le suivi d’un médecin, d’un psychologue ou d’un professionnel spécialisé en addictologie.</p>
          <p>Le Prestataire ne garantit aucun résultat particulier. Les effets de l’accompagnement dépendent notamment de la situation, de l’implication et des démarches personnelles du client.</p>
        </Article>

        <Article id="cgv-4" num={4} titre="Tarifs">
          <p>Les tarifs communiqués à la date de rédaction sont les suivants :</p>
          <ul>
            <li>Séance individuelle d’une durée indicative d’une heure : 70 €.</li>
            <li>Programme d’accompagnement mensuel : 130 € par mois.</li>
            <li>Programme d’accompagnement mensuel : 240 € par mois.</li>
          </ul>
          <p>Le contenu exact, la fréquence des séances, la durée d’engagement et les modalités de renouvellement des programmes sont précisés au client avant sa souscription.</p>
          <p>Le prix du livre papier, des livres numériques, des fichiers téléchargeables et des événements est indiqué sur la page de présentation correspondante au moment de la commande.</p>
          <p>Les prix sont exprimés en euros. TVA non applicable, article 293 B du Code général des impôts, sous réserve de confirmation du régime fiscal applicable au Prestataire.</p>
        </Article>

        <Article id="cgv-5" num={5} titre="Prise de contact et commande">
          <p>Les accompagnements peuvent commencer par un premier échange permettant de comprendre la demande du client et de vérifier que la prestation proposée correspond à ses besoins.</p>
          <p>La commande est considérée comme conclue lorsque le client a accepté l’offre, les conditions applicables et le prix, et que les éventuelles formalités de paiement ont été effectuées.</p>
          <p>Pour les produits vendus en ligne, les étapes de commande, le récapitulatif et la confirmation sont présentés sur le site avant la validation définitive.</p>
        </Article>

        <Article id="cgv-6" num={6} titre="Paiement">
          <p>Les moyens de paiement disponibles sont indiqués au client au moment de la commande ou de la réservation.</p>
          <p>Sauf accord contraire écrit, le règlement d’une séance individuelle est effectué selon les modalités convenues lors de la réservation. Les programmes mensuels sont réglés selon les modalités précisées lors de la souscription.</p>
          <p>En cas de paiement échelonné ou récurrent, le montant, la fréquence et la durée des paiements sont communiqués au client avant son engagement.</p>
        </Article>

        <Article id="cgv-7" num={7} titre="Réservation, report et annulation des séances">
          <p>Les rendez-vous sont fixés d’un commun accord entre le client et le Prestataire.</p>
          <p>Le client qui souhaite reporter ou annuler un rendez-vous est invité à prévenir le Prestataire au moins 48 heures à l’avance.</p>
          <p>En cas d’empêchement tardif, les parties recherchent une solution adaptée. Une séance non honorée ou annulée tardivement ne pourra être facturée comme entièrement due que dans les limites autorisées par la loi et des conditions préalablement acceptées par le client.</p>
          <p>En cas d’empêchement du Prestataire, une nouvelle date sera proposée ou, si la séance ne peut être reprogrammée, les sommes correspondant à la prestation non réalisée seront remboursées.</p>
          <p>Ces règles de réservation ne suppriment pas les droits légaux du consommateur, notamment son éventuel droit de rétractation.</p>
        </Article>

        <Article id="cgv-8" num={8} titre="Programmes mensuels">
          <p>Les caractéristiques du programme, le nombre de séances, la durée, le prix, les modalités de paiement et les conditions de renouvellement sont communiqués avant toute souscription.</p>
          <p>Aucun engagement de durée, renouvellement automatique ou frais de résiliation ne s’applique sans avoir été clairement porté à la connaissance du client et accepté par celui-ci.</p>
          {/* Texte reçu tronqué : phrase sur la suspension / l'arrêt d'un programme et articles suivants à compléter */}
        </Article>

        <div className="legal-foot">
          <a href="./" className="btn btn-forest">Retour au site</a>
        </div>
      </div>
    </main>
    <footer className="footer" style={{ paddingTop: 32 }}>
      <div className="wrap">
        <p className="footer-bottom" style={{ paddingTop: 0 }}>
          © {new Date().getFullYear()} Cédric Conche — Renaître à soi m'aime. Tous droits réservés.
          <span className="footer-sep">·</span>
          <a href="./">Retour au site</a>
        </p>
      </div>
    </footer>
    </>
  )
}
