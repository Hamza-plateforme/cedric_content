import { LegalLayout, Article, Contact } from '@/Legal'

// Politique de rétractation et de remboursement — texte fourni par Cédric Conche, à reprendre mot pour mot.

const SOMMAIRE = [
  'Droit de rétractation : principe général',
  'Séances individuelles et programmes d’accompagnement',
  'Livre papier',
  'E-books, PDF et contenus numériques',
  'Conférences et ateliers',
  'Modalités de remboursement',
  'Comment adresser une demande ?',
]

export default function Retractation() {
  return (
    <LegalLayout
      titre="Politique de rétractation et de remboursement"
      date="23 octobre 2026"
      prefix="retractation"
      sommaire={SOMMAIRE}
      intro={<>
        <p>La présente politique explique les modalités de rétractation, d’annulation et de remboursement des produits et prestations proposés par Renaître à soi-m’aime, exploité par Cédric Conche.</p>
        <p>Pour toute demande :</p>
        <Contact>
          <li><strong>E-mail :</strong> <a href="mailto:renaitreasoimaime@outlook.fr">renaitreasoimaime@outlook.fr</a></li>
          <li><strong>Téléphone :</strong> <a href="tel:+33634351306">06 34 35 13 06</a></li>
          <li><strong>Adresse :</strong> 7 rue des Meuniers, 49320 Brissac Loire Aubance, France.</li>
        </Contact>
      </>}
    >
      <Article id="retractation-1" label="1" titre="Droit de rétractation : principe général">
        <p>Pour un contrat conclu à distance avec un consommateur, le délai légal de rétractation est en principe de 14 jours calendaires.</p>
        <p>Pour une prestation de services, ce délai court généralement à compter de la conclusion du contrat. Pour un bien matériel, il court à compter de sa réception.</p>
        <p>Le consommateur peut exercer ce droit sans avoir à justifier sa décision, en adressant une déclaration claire de rétractation au Prestataire ou en utilisant la fonctionnalité de rétractation disponible sur le site, lorsqu’elle est applicable.</p>
      </Article>

      <Article id="retractation-2" label="2" titre="Séances individuelles et programmes d’accompagnement">
        <p>Le client bénéficie du droit de rétractation légal lorsque celui-ci est applicable.</p>
        <p>S’il souhaite que l’accompagnement commence avant la fin du délai de rétractation, son accord préalable sera recueilli dans les conditions requises par la loi.</p>
        <p>Lorsque le client exerce valablement son droit de rétractation après avoir expressément demandé le commencement de la prestation avant la fin de ce délai, il peut être redevable d’un montant proportionnel aux services effectivement fournis jusqu’à la communication de sa décision, conformément à la loi.</p>
        <p>Le droit de rétractation peut prendre fin lorsque le service a été entièrement exécuté avant l’expiration du délai, uniquement si les conditions légales requises ont été respectées, notamment l’accord préalable exprès du client et sa reconnaissance de la perte de ce droit.</p>
        <p>En dehors du droit légal de rétractation, toute demande d’annulation, de suspension ou de report d’un programme est examinée selon les conditions convenues lors de la souscription. Aucun droit légal du consommateur n’est supprimé par cette politique.</p>
      </Article>

      <Article id="retractation-3" label="3" titre="Livre papier">
        <p>Pour un livre papier acheté à distance, le client dispose en principe de 14 jours à compter de sa réception pour exercer son droit de rétractation.</p>
        <p>Après avoir informé le Prestataire de sa décision, le client doit renvoyer le livre dans le délai légal applicable. Sauf disposition légale contraire ou accord différent, les frais directs de retour sont à la charge du client, à condition que cette information lui ait été communiquée avant l’achat.</p>
        <p>Le livre doit être retourné dans un état permettant de constater son état et de vérifier son contenu. Cette exigence ne prive pas le client de son droit de manipuler le bien dans la mesure nécessaire pour en vérifier la nature et les caractéristiques.</p>
        <p>Le remboursement est effectué conformément aux délais et modalités prévus par la loi. Les droits relatifs aux défauts de conformité restent applicables indépendamment du droit de rétractation.</p>
      </Article>

      <Article id="retractation-4" label="4" titre="E-books, PDF et contenus numériques">
        <p>Pour les contenus numériques fournis sans support matériel, le droit de rétractation peut être perdu si l’exécution commence avant la fin du délai légal, uniquement après :</p>
        <ul>
          <li>le consentement préalable exprès du consommateur à l’exécution immédiate ;</li>
          <li>sa reconnaissance expresse de la perte de son droit de rétractation ;</li>
          <li>la confirmation contractuelle requise par la loi.</li>
        </ul>
        <p>Si ces conditions ne sont pas réunies, le droit légal de rétractation demeure applicable.</p>
        <p>En cas de fichier inaccessible, endommagé ou non conforme à la commande, le client peut contacter le Prestataire afin qu’une solution adaptée soit recherchée, sans préjudice de ses droits légaux.</p>
      </Article>

      <Article id="retractation-5" label="5" titre="Conférences et ateliers">
        <p>Les conditions de rétractation et d’annulation dépendent de la nature de l’événement et des dispositions légales applicables.</p>
        <p>Lorsqu’une exception légale au droit de rétractation s’applique, elle sera indiquée clairement au client avant la réservation. À défaut, les droits légaux du consommateur restent applicables.</p>
        <p>En cas d’annulation de l’événement par le Prestataire, les sommes correspondant à la prestation non réalisée seront remboursées, sauf si le client accepte expressément une solution alternative.</p>
      </Article>

      <Article id="retractation-6" label="6" titre="Modalités de remboursement">
        <p>Lorsque le remboursement est dû, il est effectué par le même moyen de paiement que celui utilisé lors de la transaction, sauf accord exprès du client pour un autre moyen et sous réserve des règles applicables.</p>
        <p>Les remboursements sont réalisés dans les délais légaux correspondant à la situation concernée.</p>
        <p>Aucun remboursement ne peut être refusé au seul motif d’une règle générale de non-remboursement lorsque la loi reconnaît au client un droit au remboursement.</p>
      </Article>

      <Article id="retractation-7" label="7" titre="Comment adresser une demande ?">
        <p>Le client peut envoyer sa demande à l’adresse suivante :</p>
        {/* Texte reçu tronqué après « E-mail : rena », laissé tel quel à la demande de Cédric — à compléter */}
        <Contact>
          <li>Renaître à soi-m’aime – Cédric Conche</li>
          <li>7 rue des Meuniers</li>
          <li>49320 Brissac Loire Aubance, France</li>
          <li>E-mail : rena</li>
        </Contact>
      </Article>
    </LegalLayout>
  )
}
