import { LegalLayout, Article, Contact } from '@/Legal'

// Mentions légales — texte fourni par Cédric Conche, à reprendre mot pour mot.

const SOMMAIRE = [
  'Éditeur du site',
  'Hébergement du site',
  'Activité',
  'Propriété intellectuelle',
  'Responsabilité',
  'Données personnelles',
  'Cookies et traceurs',
  'Liens externes',
  'Droit applicable',
]

export default function MentionsLegales() {
  return (
    <LegalLayout
      titre="Mentions légales"
      date="23 octobre 2026"
      prefix="mentions"
      sommaire={SOMMAIRE}
      intro={<p>Conformément aux dispositions légales applicables aux services de communication au public en ligne, les informations suivantes sont portées à la connaissance des visiteurs du site Renaître à soi-m’aime.</p>}
    >
      <Article id="mentions-1" label="1" titre="Éditeur du site">
        <Contact>
          <li><strong>Nom et prénom :</strong> Cédric Conche</li>
          <li><strong>Nom commercial :</strong> Renaître à soi-m’aime</li>
          <li><strong>Statut :</strong> Entrepreneur individuel – micro-entrepreneur</li>
          <li><strong>Adresse professionnelle :</strong> 7 rue des Meuniers, 49320 Brissac Loire Aubance, France</li>
          <li><strong>SIRET :</strong> 10623988200017</li>
          <li><strong>Téléphone :</strong> <a href="tel:+33634351306">06 34 35 13 06</a></li>
          <li><strong>E-mail :</strong> <a href="mailto:renaitreasoimaime@outlook.fr">renaitreasoimaime@outlook.fr</a></li>
        </Contact>
        <p>Directeur de la publication : Cédric Conche.</p>
      </Article>

      <Article id="mentions-2" label="2" titre="Hébergement du site">
        <p>Le site est hébergé par IONOS.</p>
        <Contact>
          <li><strong>Hébergeur :</strong> IONOS SE</li>
          <li><strong>Adresse :</strong> Elgendorfer Straße 57, 56410 Montabaur, Allemagne</li>
          <li><strong>Site internet :</strong> <a href="https://www.ionos.fr/" target="_blank" rel="noopener noreferrer">https://www.ionos.fr/</a></li>
        </Contact>
        <p>Les coordonnées de l’entité d’hébergement doivent être vérifiées avec le contrat ou l’espace client IONOS avant publication.</p>
      </Article>

      <Article id="mentions-3" label="3" titre="Activité">
        <p>Renaître à soi-m’aime propose des prestations d’accompagnement en développement personnel, des séances individuelles, des programmes d’accompagnement, des livres et contenus numériques ainsi que des conférences et ateliers.</p>
        <p>Les accompagnements proposés ne constituent pas des actes médicaux et ne remplacent pas une prise en charge par un professionnel de santé.</p>
      </Article>

      <Article id="mentions-4" label="4" titre="Propriété intellectuelle">
        <p>L’ensemble des éléments présents sur le site, notamment les textes, images, graphismes, logos, vidéos, documents et contenus éditoriaux, est protégé par les règles relatives à la propriété intellectuelle, sauf mention contraire.</p>
        <p>Toute reproduction, représentation, adaptation ou diffusion, totale ou partielle, sans autorisation préalable du titulaire des droits est interdite, sauf exceptions prévues par la loi.</p>
        <p>La marque, le nom commercial et les contenus associés à Renaître à soi-m’aime ne peuvent être utilisés sans autorisation.</p>
      </Article>

      <Article id="mentions-5" label="5" titre="Responsabilité">
        <p>Les informations publiées sur le site sont fournies à titre informatif. Cédric Conche s’efforce d’en assurer l’exactitude et la mise à jour, sans pouvoir garantir l’absence d’erreurs ou d’omissions.</p>
        <p>Le visiteur reste responsable de l’utilisation qu’il fait des informations et contenus disponibles sur le site.</p>
        <p>Les contenus de développement personnel ne constituent pas un diagnostic médical, une prescription ou un traitement. En cas de problème de santé ou d’addiction nécessitant une prise en charge médicale, il convient de s’adresser à un professionnel de santé compétent.</p>
      </Article>

      <Article id="mentions-6" label="6" titre="Données personnelles">
        <p>Les données personnelles éventuellement collectées par le site sont utilisées pour répondre aux demandes, gérer les rendez-vous, traiter les commandes, assurer le suivi des clients et respecter les obligations légales du Prestataire.</p>
        <p>Les informations détaillées concernant les finalités, la base légale, la durée de conservation, les destinataires, les éventuels prestataires techniques et les droits des personnes doivent figurer dans une politique de confidentialité distincte.</p>
        <p>Pour toute question ou demande concernant les données personnelles :<br /><a href="mailto:renaitreasoimaime@outlook.fr">renaitreasoimaime@outlook.fr</a></p>
      </Article>

      <Article id="mentions-7" label="7" titre="Cookies et traceurs">
        <p>Le site peut utiliser des cookies ou autres traceurs nécessaires à son fonctionnement ou destinés à mesurer l’audience et à améliorer l’expérience utilisateur.</p>
        <p>Les cookies non nécessaires au fonctionnement du site ne doivent être déposés qu’après le recueil du consentement lorsque la réglementation l’exige. Le visiteur doit pouvoir accepter, refuser ou retirer son consentement dans les conditions prévues par la loi.</p>
        <p>La liste réelle des cookies et les outils installés devront être vérifiés lors de la configuration du site.</p>
      </Article>

      <Article id="mentions-8" label="8" titre="Liens externes">
        <p>Le site peut contenir des liens vers des sites tiers. Cédric Conche ne contrôle pas leur contenu ni leurs pratiques en matière de confidentialité et ne peut être tenu responsable de leurs contenus ou de leur fonctionnement.</p>
      </Article>

      <Article id="mentions-9" label="9" titre="Droit applicable">
        <p>Les présentes mentions légales sont soumises au droit français, sous réserve des dispositions impératives applicables.</p>
        <p>Pour toute question, le visiteur peut contacter Cédric Conche à l’adresse suivante : <a href="mailto:renaitreasoimaime@outlook.fr">renaitreasoimaime@outlook.fr</a>.</p>
      </Article>
    </LegalLayout>
  )
}
