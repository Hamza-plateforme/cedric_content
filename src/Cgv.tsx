import { LegalLayout, Article, Contact } from '@/Legal'

// Conditions générales de vente — texte fourni par Cédric Conche, à reprendre mot pour mot.

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
    <LegalLayout titre="Conditions générales de vente" date="23 octobre 2026" prefix="cgv" sommaire={SOMMAIRE}>
        <Article id="cgv-1" label="Article 1" titre="Identité du professionnel">
          <p>Les présentes conditions générales de vente s’appliquent aux prestations et produits proposés sous le nom commercial Renaître à soi-m’aime, exploité par Cédric Conche, entrepreneur individuel.</p>
          <Contact>
            <li><strong>Adresse professionnelle :</strong> 7 rue des Meuniers, 49320 Brissac Loire Aubance, France.</li>
            <li><strong>SIRET :</strong> 10623988200017</li>
            <li><strong>E-mail :</strong> <a href="mailto:renaitreasoimaime@outlook.fr">renaitreasoimaime@outlook.fr</a></li>
            <li><strong>Téléphone :</strong> <a href="tel:+33634351306">06 34 35 13 06</a></li>
          </Contact>
          <p>Ci-après dénommé « le Prestataire ».</p>
        </Article>

        <Article id="cgv-2" label="Article 2" titre="Objet et champ d’application">
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

        <Article id="cgv-3" label="Article 3" titre="Nature des accompagnements">
          <p>Les accompagnements proposés relèvent du développement personnel et de la réflexion sur soi. Ils peuvent notamment porter sur les émotions, les habitudes, la confiance en soi, les comportements répétitifs et les difficultés liées aux addictions.</p>
          <p>Ils ne constituent ni un acte médical, ni une psychothérapie, ni un diagnostic, ni un traitement. Ils ne remplacent pas le suivi d’un médecin, d’un psychologue ou d’un professionnel spécialisé en addictologie.</p>
          <p>Le Prestataire ne garantit aucun résultat particulier. Les effets de l’accompagnement dépendent notamment de la situation, de l’implication et des démarches personnelles du client.</p>
        </Article>

        <Article id="cgv-4" label="Article 4" titre="Tarifs">
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

        <Article id="cgv-5" label="Article 5" titre="Prise de contact et commande">
          <p>Les accompagnements peuvent commencer par un premier échange permettant de comprendre la demande du client et de vérifier que la prestation proposée correspond à ses besoins.</p>
          <p>La commande est considérée comme conclue lorsque le client a accepté l’offre, les conditions applicables et le prix, et que les éventuelles formalités de paiement ont été effectuées.</p>
          <p>Pour les produits vendus en ligne, les étapes de commande, le récapitulatif et la confirmation sont présentés sur le site avant la validation définitive.</p>
        </Article>

        <Article id="cgv-6" label="Article 6" titre="Paiement">
          <p>Les moyens de paiement disponibles sont indiqués au client au moment de la commande ou de la réservation.</p>
          <p>Sauf accord contraire écrit, le règlement d’une séance individuelle est effectué selon les modalités convenues lors de la réservation. Les programmes mensuels sont réglés selon les modalités précisées lors de la souscription.</p>
          <p>En cas de paiement échelonné ou récurrent, le montant, la fréquence et la durée des paiements sont communiqués au client avant son engagement.</p>
        </Article>

        <Article id="cgv-7" label="Article 7" titre="Réservation, report et annulation des séances">
          <p>Les rendez-vous sont fixés d’un commun accord entre le client et le Prestataire.</p>
          <p>Le client qui souhaite reporter ou annuler un rendez-vous est invité à prévenir le Prestataire au moins 48 heures à l’avance.</p>
          <p>En cas d’empêchement tardif, les parties recherchent une solution adaptée. Une séance non honorée ou annulée tardivement ne pourra être facturée comme entièrement due que dans les limites autorisées par la loi et des conditions préalablement acceptées par le client.</p>
          <p>En cas d’empêchement du Prestataire, une nouvelle date sera proposée ou, si la séance ne peut être reprogrammée, les sommes correspondant à la prestation non réalisée seront remboursées.</p>
          <p>Ces règles de réservation ne suppriment pas les droits légaux du consommateur, notamment son éventuel droit de rétractation.</p>
        </Article>

        <Article id="cgv-8" label="Article 8" titre="Programmes mensuels">
          <p>Les caractéristiques du programme, le nombre de séances, la durée, le prix, les modalités de paiement et les conditions de renouvellement sont communiqués avant toute souscription.</p>
          <p>Aucun engagement de durée, renouvellement automatique ou frais de résiliation ne s’applique sans avoir été clairement porté à la connaissance du client et accepté par celui-ci.</p>
          {/* Texte reçu tronqué, laissé tel quel à la demande de Cédric — à compléter */}
          <p>Les demandes de suspension, de report ou d’arrêt d’un programme sont examinées conformément aux conditions communiquées lors de la souscription et aux dis</p>
        </Article>
    </LegalLayout>
  )
}
