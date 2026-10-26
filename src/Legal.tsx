import type { ReactNode } from 'react'

// Mise en page commune aux pages légales (CGV, rétractation, mentions légales).
// Les textes sont fournis par Cédric Conche et repris mot pour mot.

export const PAGES_LEGALES = [
  { href: 'cgv.html', label: 'Conditions générales de vente' },
  { href: 'retractation.html', label: 'Rétractation et remboursement' },
  { href: 'mentions-legales.html', label: 'Mentions légales' },
]

export function Article({ id, label, titre, children }: { id: string; label: string; titre: string; children: ReactNode }) {
  return (
    <section id={id} className="legal-article">
      <h2><span>{label}</span>{titre}</h2>
      {children}
    </section>
  )
}

export function Contact({ children }: { children: ReactNode }) {
  return <ul className="legal-info">{children}</ul>
}

export function LegalLayout({ titre, date, prefix, sommaire, intro, children }: {
  titre: string
  date: string
  prefix: string
  sommaire: string[]
  intro?: ReactNode
  children: ReactNode
}) {
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
          <h1 className="title">{titre}</h1>
          <p className="legal-date">Dernière mise à jour : {date}</p>
          <div className="gold-line" />

          {intro && <div className="legal-intro">{intro}</div>}

          <nav className="legal-toc" aria-label="Sommaire">
            <p className="legal-toc-title">Sommaire</p>
            <ol>
              {sommaire.map((t, i) => (
                <li key={t}><a href={`#${prefix}-${i + 1}`}>{t}</a></li>
              ))}
            </ol>
          </nav>

          {children}

          <div className="legal-foot">
            <a href="./" className="btn btn-forest">Retour au site</a>
          </div>
        </div>
      </main>

      <footer className="footer" style={{ paddingTop: 32 }}>
        <div className="wrap">
          <p className="footer-bottom" style={{ paddingTop: 0 }}>
            © {new Date().getFullYear()} Cédric Conche — Renaître à soi m'aime. Tous droits réservés.
            {PAGES_LEGALES.map(p => (
              <span key={p.href}>
                <span className="footer-sep">·</span>
                <a href={p.href}>{p.label}</a>
              </span>
            ))}
          </p>
        </div>
      </footer>
    </>
  )
}
