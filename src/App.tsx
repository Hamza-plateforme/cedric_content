import { useState, useEffect, type CSSProperties, type ReactNode } from 'react'
import imgHero from '@/imports/408-1.jpg'
import imgPortrait from '@/imports/1011-3.jpg'
import imgAccompagnements from '@/imports/1012-2.jpg'

// ── 1. LIENS ET RÉSEAUX SOCIAUX INTÉGRÉS ─────────────────
const LIENS = {
  facebook: 'https://www.facebook.com/share/1UiAxqutZG/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/renaitre_a_soi_m_aime?stkn=aTE2b2ZucHZ3NjM1&utm_source=qr',
  livre: 'https://amzn.eu/d/05uUEMwk',
}
// ───────────────────────────────────────────────────────────

const IMG = {
  hero: imgHero,
  portrait: imgPortrait,
  accompagnements: imgAccompagnements,
  temoignage: 'https://images.unsplash.com/photo-1595104615356-cbe9c4364513?w=700&h=800&fit=crop&auto=format',
}

const NAV = [
  { href: '#qui-suis-je', label: 'Qui suis-je ?' },
  { href: '#accompagnements', label: 'Mes accompagnements' },
  { href: '#livre', label: 'Mon livre' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#contact', label: 'Contact' },
]

// Icônes au trait, dans l'esprit nature / apaisement
const ICONS: Record<string, ReactNode> = {
  coeur: <path d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10z" />,
  feuille: <><path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14" /><path d="M5 19l8-8" /></>,
  soleil: <><circle cx="12" cy="12" r="4" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" /></>,
  chemin: <><path d="M4 20c4-2 4-6 8-8s4-6 8-8" /><circle cx="4" cy="20" r="1.5" /><circle cx="20" cy="4" r="1.5" /></>,
  fleur: <><circle cx="12" cy="12" r="2.5" /><path d="M12 9.5C12 6 10 4 12 3c2 1 0 3 0 6.5M14.5 12c3.5 0 5.5-2 6.5 0-1 2-3 0-6.5 0M12 14.5c0 3.5 2 5.5 0 6.5-2-1 0-3 0-6.5M9.5 12C6 12 4 14 3 12c1-2 3 0 6.5 0" /></>,
  vague: <><path d="M3 9c3-2 6 2 9 0s6-2 9 0" /><path d="M3 15c3-2 6 2 9 0s6-2 9 0" /></>,
}

const ACCOMPAGNEMENTS = [
  { titre: 'Comprendre tes émotions', desc: 'Apprendre à reconnaître, accueillir et traverser tes émotions sans en être submergé(e).', icon: 'vague' },
  { titre: 'Guérir les blessures intérieures', desc: 'Aller à la rencontre de tes blessures profondes pour les transformer avec douceur.', icon: 'feuille' },
  { titre: 'Retrouver confiance en soi', desc: 'Reconstruire un rapport solide et bienveillant à toi-même, pas à pas.', icon: 'chemin' },
  { titre: 'Comprendre tes addictions', desc: 'Explorer les besoins derrière tes compulsions pour te libérer sans te juger.', icon: 'fleur' },
  { titre: "Retrouver l'amour de soi", desc: 'Cultiver une relation aimante et respectueuse avec qui tu es vraiment.', icon: 'coeur' },
  { titre: 'Apaiser ton mental', desc: 'Sortir des ruminations, retrouver le calme et habiter davantage le moment présent.', icon: 'soleil' },
]

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  )
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
}

function BookIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2.5z" /><path d="M8 7h7" /></svg>
}

function Socials() {
  return (
    <div className="socials">
      <a className="social-icon" href={LIENS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
      <a className="social-icon" href={LIENS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
    </div>
  )
}

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <div className={`reveal ${className}`} style={{ '--delay': `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Apparition douce des blocs au défilement
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Lien de navigation actif selon la section visible
  useEffect(() => {
    const sections = NAV.map(n => document.querySelector(n.href)).filter(Boolean) as Element[]
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(`#${entry.target.id}`)
      })
    }, { rootMargin: '-45% 0px -50% 0px' })
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div>

      {/* ── HEADER ── */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap header-inner">
          <a href="#accueil" className="logo" onClick={closeMenu}>
            <div className="logo-name">CÉDRIC CONCHE</div>
            <div className="logo-tag">renaître à soi m'aime</div>
          </a>

          <nav className="nav" aria-label="Navigation principale">
            {NAV.map(n => (
              <a key={n.href} href={n.href} className={`nav-link ${active === n.href ? 'active' : ''}`}>{n.label}</a>
            ))}
            <div className="nav-sep" />
            <Socials />
            <a href="#contact" className="btn btn-gold btn-sm">Échanger</a>
          </nav>

          <button className={`burger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>
            <span /><span /><span />
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <div>
            <div className="wrap mobile-menu-inner">
              {NAV.map(n => (
                <a key={n.href} href={n.href} className="nav-link" onClick={closeMenu}>{n.label}</a>
              ))}
              <div className="mobile-menu-foot">
                <Socials />
                <a href="#contact" className="btn btn-gold btn-sm" onClick={closeMenu}>Échanger</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── 1. ACCUEIL ── */}
      <section id="accueil" className="hero">
        <div className="wrap hero-grid">
          <div>
            <Reveal>
              <p className="eyebrow">Renaître à soi m'aime</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="hero-title">
                Transforme tes blessures en <em>force</em> et retrouve ta <em>paix intérieure</em>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <div className="gold-line" />
              <p className="lead" style={{ maxWidth: 520 }}>
                Un accompagnement pour comprendre ce qui te traverse, retrouver ton axe et avancer avec plus de paix intérieure.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="hero-actions">
                <a href={LIENS.livre} target="_blank" rel="noopener noreferrer" className="btn btn-forest">
                  Découvrir mon livre <Arrow />
                </a>
                <a href="#accompagnements" className="btn btn-outline">Mes accompagnements</a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="hero-media">
            <div className="hero-frame" />
            <div className="hero-img">
              <img src={IMG.hero} alt="Cédric Conche" />
            </div>
            <a href="#tarifs" className="hero-badge">
              <span className="hero-badge-dot" />
              <span>
                <span className="hero-badge-label" style={{ display: 'block' }}>Offert</span>
                <span className="hero-badge-value" style={{ display: 'block' }}>Premier échange</span>
              </span>
            </a>
          </Reveal>
        </div>

        <a href="#qui-suis-je" className="scroll-cue" aria-label="Défiler vers la suite">
          Découvrir
          <span />
        </a>
      </section>

      {/* ── 2. QUI SUIS-JE ── */}
      <section id="qui-suis-je" className="section" style={{ backgroundColor: 'var(--color-beige)' }}>
        <div className="wrap grid-2">
          <Reveal className="about-media">
            <div className="about-dots" />
            <div className="about-img">
              <img src={IMG.portrait} alt="Portrait de Cédric Conche" />
            </div>
            <div className="about-tag">
              <p>ACCOMPAGNATEUR INTÉRIEUR</p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">Qui suis-je ?</p>
              <h2 className="title">Un accompagnement avant tout <em>humain</em></h2>
              <div className="gold-line" />
            </Reveal>
            <Reveal delay={120}>
              <p className="text" style={{ marginBottom: 16 }}>
                Un mari, un papa, un homme qui a consacré 20 années de sa vie à l'armée, dont 6 ans comme fusilier marin et 14 ans comme marin-pompier de Marseille.
              </p>
              <p className="text">
                Grand sportif, amoureux de la nature et profondément attaché à l'humain, je suis également hypersensible et empathique.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="intention">
                <span className="intention-quote" aria-hidden="true">“</span>
                <p className="intention-title">Mon intention</p>
                <p className="text" style={{ fontSize: 15 }}>Je ne suis pas là pour te dire qui tu es.</p>
                <p className="text" style={{ fontSize: 15 }}>Je suis là pour t'accompagner afin que tu puisses le découvrir par toi-même.</p>
                <p className="intention-motto">Comprendre. Accepter. Transformer. Renaître à soi m'aime.</p>
              </div>
              <a href="#accompagnements" className="btn btn-forest">En savoir plus <Arrow /></a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. ACCOMPAGNEMENTS ── */}
      <section id="accompagnements" className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="wrap">
          <div className="acc-top">
            <Reveal>
              <div style={{ maxWidth: 640 }}>
                <p className="eyebrow">Mes accompagnements</p>
                <h2 className="title">Un espace pour te <em>retrouver</em></h2>
                <div className="gold-line" />
                <p className="lead">
                  Tu n'as peut-être pas besoin de changer.<br />Tu as peut-être simplement besoin de te retrouver.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="acc-img">
                <img src={IMG.accompagnements} alt="Cédric Conche en forêt" />
              </div>
            </Reveal>
          </div>

          <div className="cards">
            {ACCOMPAGNEMENTS.map((item, i) => (
              <Reveal key={item.titre} delay={(i % 3) * 100}>
                <article className="card" style={{ height: '100%' }}>
                  <div className="card-head">
                    <div className="card-icon"><Icon name={item.icon} /></div>
                    <span className="card-num">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{item.titre}</h3>
                  <p>{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. MON LIVRE ── */}
      <section id="livre" className="section book-section">
        <div className="wrap grid-2">
          <Reveal>
            <p className="eyebrow">Mon livre</p>
            <h2 className="title">Renaître à soi m'aime</h2>
            <div className="gold-line" />
            <p className="text">
              Un livre écrit au cœur de l'expérience — celui de traverser ses propres tempêtes intérieures et d'en revenir transformé.
            </p>
            <p className="book-quote">Ce n'est pas un manuel, c'est un compagnon de route.</p>
            <a href={LIENS.livre} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              Commander le livre <Arrow />
            </a>
          </Reveal>

          <Reveal delay={150} className="book-stage">
            <div className="book">
              <div className="book-glow" />
              <div className="book-cover">
                <img src={IMG.temoignage} alt="Couverture du livre" />
                <div className="book-cover-overlay">
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '0.24em', color: 'var(--color-gold)' }}>CÉDRIC CONCHE</p>
                  <div>
                    <div style={{ width: 32, height: 1, backgroundColor: 'var(--color-gold)', marginBottom: 16 }} />
                    <h3 style={{ fontSize: 30, fontWeight: 300, color: 'var(--color-cream)', lineHeight: 1.15 }}>
                      Renaître<br /><em style={{ color: 'var(--color-gold-light)' }}>à soi m'aime</em>
                    </h3>
                  </div>
                </div>
                <div className="book-cover-frame" />
              </div>
              <div className="book-spine" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5. TARIFS ── */}
      <section id="tarifs" className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="wrap grid-2">
          <Reveal>
            <p className="eyebrow">Tarifs</p>
            <h2 className="title">Un investissement dans ta <em>paix intérieure</em></h2>
            <div className="gold-line" />
            <p className="lead">
              Chaque séance est un espace unique, construit ensemble en fonction de ce que tu traverses.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="price-card">
              <span className="price-ribbon">OFFERT</span>
              <div className="price-head">
                <h3>Premier échange</h3>
                <div className="price-value">0€</div>
              </div>
              <a href="#contact" className="btn btn-forest btn-block">
                Réserver mon échange gratuit <Arrow />
              </a>
              <div className="price-alt">
                <span>Séance individuelle · 60 minutes</span>
                <strong>80€</strong>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6. CONTACT ── */}
      <section id="contact" className="section contact">
        <div className="wrap contact-inner">
          <Reveal>
            <p className="eyebrow centered">Contact</p>
            <h2 className="title">Échangeons <em>ensemble</em></h2>
            <p className="lead">
              Retrouve-moi sur les réseaux sociaux ou découvre mon livre directement via les liens ci-dessous :
            </p>
          </Reveal>

          <div className="contact-cards">
            <Reveal delay={0}>
              <a href={LIENS.facebook} target="_blank" rel="noopener noreferrer" className="contact-card">
                <span className="contact-card-icon"><FacebookIcon size={20} /></span>
                <span className="contact-card-title">Facebook</span>
                <span className="contact-card-sub">Me suivre</span>
              </a>
            </Reveal>
            <Reveal delay={100}>
              <a href={LIENS.instagram} target="_blank" rel="noopener noreferrer" className="contact-card">
                <span className="contact-card-icon"><InstagramIcon size={20} /></span>
                <span className="contact-card-title">Instagram</span>
                <span className="contact-card-sub">Me suivre</span>
              </a>
            </Reveal>
            <Reveal delay={200}>
              <a href={LIENS.livre} target="_blank" rel="noopener noreferrer" className="contact-card">
                <span className="contact-card-icon"><BookIcon size={20} /></span>
                <span className="contact-card-title">Mon Livre</span>
                <span className="contact-card-sub">Commander</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer-top">
            <div>
              <a href="#accueil" className="logo">
                <div className="logo-name">CÉDRIC CONCHE</div>
                <div className="logo-tag">renaître à soi m'aime</div>
              </a>
              <p className="footer-motto">Comprendre. Accepter. Transformer. Renaître à soi m'aime.</p>
            </div>
            <div>
              <p className="footer-heading">Navigation</p>
              <ul className="footer-links">
                {NAV.map(n => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}
              </ul>
            </div>
            <div>
              <p className="footer-heading">Me retrouver</p>
              <ul className="footer-links">
                <li><a href={LIENS.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href={LIENS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href={LIENS.livre} target="_blank" rel="noopener noreferrer">Mon livre</a></li>
              </ul>
            </div>
          </div>
          <p className="footer-bottom">© {new Date().getFullYear()} Cédric Conche — Renaître à soi m'aime. Tous droits réservés.</p>
        </div>
      </footer>

    </div>
  )
}
