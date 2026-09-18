import { useState, useEffect } from 'react'
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
  forest: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&h=900&fit=crop&auto=format',
}

const ACCOMPAGNEMENTS = [
  { titre: 'Comprendre tes émotions', desc: 'Apprendre à reconnaître, accueillir et traverser tes émotions sans en être submergé(e).', icon: '◈' },
  { titre: 'Guérir les blessures intérieures', desc: 'Aller à la rencontre de tes blessures profondes pour les transformer avec douceur.', icon: '◇' },
  { titre: 'Retrouver confiance en soi', desc: 'Reconstruire un rapport solide et bienveillant à toi-même, pas à pas.', icon: '◉' },
  { titre: 'Comprendre tes addictions', desc: 'Explorer les besoins derrière tes compulsions pour te libérer sans te juger.', icon: '◈' },
  { titre: "Retrouver l'amour de soi", desc: 'Cultiver une relation aimante et respectueuse avec qui tu es vraiment.', icon: '◇' },
  { titre: 'Apaiser ton mental', desc: 'Sortir des ruminations, retrouver le calme et habiter davantage le moment présent.', icon: '◉' },
]

function GoldLine() {
  return <div style={{ width: 48, height: 2, backgroundColor: 'var(--color-gold)', marginBottom: 24 }} />
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 400, letterSpacing: '0.08em', color: 'var(--color-cream)', textDecoration: 'none', opacity: 0.85, transition: 'opacity 0.2s' }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
    >
      {children}
    </a>
  )
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{ color: 'var(--color-cream)', opacity: 0.8, transition: 'opacity 0.2s', display: 'flex', alignItems: 'center' }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}>
      {children}
    </a>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{ fontFamily: 'var(--font-body)', backgroundColor: 'var(--color-cream)' }}>

      {/* ── HEADER ── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: scrolled ? 'rgba(45,74,62,0.97)' : 'var(--color-forest)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.18)' : 'none',
        transition: 'all 0.35s ease',
        padding: '0 32px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>

          {/* Logo */}
          <a href="#accueil" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ fontFamily: 'var(--font-display)', color: 'var(--color-cream)', lineHeight: 1 }}>
              <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '0.12em' }}>CÉDRIC CONCHE</div>
              <div style={{ fontSize: 11, fontWeight: 300, letterSpacing: '0.2em', color: 'var(--color-gold-light)', marginTop: 2 }}>renaître à soi m'aime</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }} className="hidden-mobile">
            <NavLink href="#qui-suis-je">Qui suis-je ?</NavLink>
            <NavLink href="#accompagnements">Mes accompagnements</NavLink>
            <NavLink href="#livre">Mon livre</NavLink>
            <NavLink href="#tarifs">Tarifs</NavLink>
            <NavLink href="#contact">Contact</NavLink>

            <div style={{ width: 1, height: 18, backgroundColor: 'rgba(255,255,255,0.2)' }} />

            <SocialIcon href={LIENS.facebook} label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </SocialIcon>
            <SocialIcon href={LIENS.instagram} label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </SocialIcon>

            <a href="#contact" style={{
              fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, letterSpacing: '0.1em',
              color: 'var(--color-forest)', backgroundColor: 'var(--color-gold)',
              padding: '9px 22px', borderRadius: 2, textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-gold-light)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-gold)')}
            >
              Échanger
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-cream)', display: 'none' }}
            className="show-mobile"
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ backgroundColor: 'var(--color-forest)', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '20px 32px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['#qui-suis-je:Qui suis-je ?', '#accompagnements:Mes accompagnements', '#livre:Mon livre', '#tarifs:Tarifs', '#contact:Contact'].map(s => {
              const [href, label] = s.split(':')
              return <NavLink key={href} href={href}>{label}</NavLink>
            })}
            <a href="#contact" onClick={() => setMenuOpen(false)} style={{
              display: 'inline-block', marginTop: 8,
              fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, letterSpacing: '0.1em',
              color: 'var(--color-forest)', backgroundColor: 'var(--color-gold)',
              padding: '10px 24px', borderRadius: 2, textDecoration: 'none', textAlign: 'center',
            }}>
              Échanger
            </a>
          </div>
        )}
      </header>

      {/* ── 1. ACCUEIL ── */}
      <section id="accueil" style={{ minHeight: '100vh', backgroundColor: 'var(--color-cream)', display: 'flex', alignItems: 'center', paddingTop: 70 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 48px', display: 'grid', gridTemplateColumns: '1fr 420px', gap: 80, alignItems: 'center', width: '100%' }} className="hero-grid">
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 400, letterSpacing: '0.25em', color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: 24 }}>
              Renaître à soi m'aime
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 6vw, 80px)', fontWeight: 300, lineHeight: 1.1, color: 'var(--color-forest)', marginBottom: 28 }}>
              Transforme tes blessures en force et retrouve ta paix intérieure
            </h1>
            <GoldLine />
            <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--color-text-muted)', maxWidth: 520, marginBottom: 44, fontWeight: 300 }}>
              Un accompagnement pour comprendre ce qui te traverse, retrouver ton axe et avancer avec plus de paix intérieure.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href={LIENS.livre} target="_blank" rel="noopener noreferrer" style={{
                fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, letterSpacing: '0.1em',
                color: 'var(--color-cream)', backgroundColor: 'var(--color-forest)',
                padding: '14px 32px', borderRadius: 2, textDecoration: 'none', transition: 'background-color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-forest-light)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-forest)')}
              >
                Découvrir mon livre
              </a>
              <a href="#accompagnements" style={{
                fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, letterSpacing: '0.1em',
                color: 'var(--color-forest)', backgroundColor: 'transparent',
                padding: '14px 32px', borderRadius: 2, textDecoration: 'none',
                border: '1px solid var(--color-forest)', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--color-forest)'; e.currentTarget.style.color = 'var(--color-cream)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-forest)' }}
              >
                Mes accompagnements
              </a>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: -16, left: -16, right: 16, bottom: 16, border: '1px solid var(--color-gold)', borderRadius: 4, opacity: 0.4 }} />
            <div style={{ width: '100%', aspectRatio: '3/4', borderRadius: 4, overflow: 'hidden', backgroundColor: 'var(--color-beige-dark)', boxShadow: '0 24px 64px rgba(45,74,62,0.18)', position: 'relative' }}>
              <img src={IMG.hero} alt="Cédric Conche" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(45,74,62,0.3) 0%, transparent 50%)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. QUI SUIS-JE ── */}
      <section id="qui-suis-je" style={{ backgroundColor: 'var(--color-beige)', padding: '120px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="two-col-grid">
          <div style={{ position: 'relative' }}>
            <div style={{ width: '100%', aspectRatio: '4/5', borderRadius: 4, overflow: 'hidden', backgroundColor: 'var(--color-beige-dark)', boxShadow: '0 20px 60px rgba(45,74,62,0.14)' }}>
              <img src={IMG.portrait} alt="Portrait de Cédric Conche" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ position: 'absolute', bottom: -24, right: -24, backgroundColor: 'var(--color-forest)', padding: '20px 28px', borderRadius: 2 }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 13, color: 'var(--color-gold)', letterSpacing: '0.15em' }}>ACCOMPAGNATEUR INTÉRIEUR</p>
            </div>
          </div>

          <div style={{ paddingLeft: 16 }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 400, letterSpacing: '0.25em', color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: 16 }}>
              Qui suis-je ?
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--color-forest)', marginBottom: 24 }}>
              Un accompagnement avant tout humain
            </h2>
            <GoldLine />
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: 16, fontWeight: 300 }}>
              Un mari, un papa, un homme qui a consacré 20 années de sa vie à l'armée, dont 6 ans comme fusilier marin et 14 ans comme marin-pompier de Marseille.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: 16, fontWeight: 300 }}>
              Grand sportif, amoureux de la nature et profondément attaché à l'humain, je suis également hypersensible et empathique.
            </p>
            <div style={{ borderLeft: '2px solid var(--color-gold)', paddingLeft: 20, marginBottom: 40, marginTop: 24 }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontStyle: 'italic', color: 'var(--color-forest)', lineHeight: 1.6, marginBottom: 8 }}>Mon intention</p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--color-text-muted)', fontWeight: 300, marginBottom: 4 }}>Je ne suis pas là pour te dire qui tu es.</p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--color-text-muted)', fontWeight: 300, marginBottom: 12 }}>Je suis là pour t'accompagner afin que tu puisses le découvrir par toi-même.</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 500, color: 'var(--color-gold)', letterSpacing: '0.05em' }}>Comprendre. Accepter. Transformer. Renaître à soi m'aime.</p>
            </div>
            <a href="#accompagnements" style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', color: 'var(--color-cream)', backgroundColor: 'var(--color-forest)', padding: '13px 30px', borderRadius: 2, textDecoration: 'none' }}>
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      {/* ── 3. ACCOMPAGNEMENTS ── */}
      <section id="accompagnements" style={{ backgroundColor: 'var(--color-cream)', padding: '120px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 80, alignItems: 'start', marginBottom: 72 }} className="acc-top-grid">
            <div style={{ maxWidth: 640 }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 400, letterSpacing: '0.25em', color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: 16 }}>
                Mes accompagnements
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--color-forest)', marginBottom: 24 }}>
                Un espace pour te retrouver
              </h2>
              <GoldLine />
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--color-text-muted)', fontWeight: 300, marginBottom: 16 }}>
                Tu n'as peut-être pas besoin de changer.<br />Tu as peut-être simplement besoin de te retrouver.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <div style={{ width: 320, height: 320, borderRadius: 12, overflow: 'hidden', backgroundColor: 'var(--color-beige-dark)', boxShadow: '0 16px 48px rgba(45,74,62,0.14)' }}>
                <img src={IMG.accompagnements} alt="Cédric Conche en forêt" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="cards-grid">
            {ACCOMPAGNEMENTS.map((item) => (
              <div key={item.titre} style={{ backgroundColor: 'var(--color-beige)', borderRadius: 8, padding: '36px 32px', border: '1px solid var(--color-beige-dark)' }}>
                <div style={{ width: 36, height: 36, backgroundColor: 'var(--color-forest)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <span style={{ color: 'var(--color-gold)', fontSize: 16 }}>{item.icon}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: 'var(--color-forest)', marginBottom: 12, lineHeight: 1.2 }}>
                  {item.titre}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--color-text-muted)', fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. MON LIVRE ── */}
      <section id="livre" style={{ backgroundColor: 'var(--color-forest)', padding: '120px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="two-col-grid">
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 400, letterSpacing: '0.25em', color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: 16 }}>
              Mon livre
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 60px)', fontWeight: 300, lineHeight: 1.15, color: 'var(--color-cream)', marginBottom: 24 }}>
              Renaître à soi m'aime
            </h2>
            <div style={{ width: 48, height: 2, backgroundColor: 'var(--color-gold)', marginBottom: 24 }} />
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,247,242,0.72)', marginBottom: 20, fontWeight: 300 }}>
              Un livre écrit au cœur de l'expérience — celui de traverser ses propres tempêtes intérieures et d'en revenir transformé. Ce n'est pas un manuel, c'est un compagnon de route.
            </p>
            <a href={LIENS.livre} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', color: 'var(--color-forest)', backgroundColor: 'var(--color-gold)', padding: '14px 32px', borderRadius: 2, textDecoration: 'none' }}>
              Commander le livre
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 280 }}>
              <div style={{ width: 280, height: 400, borderRadius: '0 4px 4px 0', overflow: 'hidden', boxShadow: '8px 12px 40px rgba(0,0,0,0.4)', position: 'relative', backgroundColor: '#1e3830' }}>
                <img src={IMG.temoignage} alt="Couverture du livre" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(45,74,62,0.7) 0%, rgba(12,24,18,0.85) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '32px 28px' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '0.2em', color: 'var(--color-gold)', marginBottom: 10 }}>CÉDRIC CONCHE</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 300, color: 'var(--color-cream)', lineHeight: 1.2 }}>
                    Renaître<br />à soi m'aime
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. TARIFS ── */}
      <section id="tarifs" style={{ backgroundColor: 'var(--color-cream)', padding: '120px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="two-col-grid">
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 400, letterSpacing: '0.25em', color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: 16 }}>
              Tarifs
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--color-forest)', marginBottom: 24 }}>
              Un investissement dans ta paix intérieure
            </h2>
            <GoldLine />
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: 20, fontWeight: 300 }}>
              Chaque séance est un espace unique, construit ensemble en fonction de ce que tu traverses.
            </p>
          </div>

          <div>
            <div style={{ backgroundColor: 'var(--color-beige)', border: '1px solid var(--color-beige-dark)', borderRadius: 8, padding: '48px 40px', boxShadow: '0 8px 32px rgba(45,74,62,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24 }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 13, letterSpacing: '0.2em', color: 'var(--color-gold)', marginBottom: 6 }}>OFFERT</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 500, color: 'var(--color-forest)' }}>Premier échange</h3>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 300, color: 'var(--color-forest)', lineHeight: 1 }}>0€</div>
              </div>
              <a href="#contact" style={{ display: 'block', textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', color: 'var(--color-cream)', backgroundColor: 'var(--color-forest)', padding: '14px 32px', borderRadius: 2, textDecoration: 'none' }}>
                Réserver mon échange gratuit
              </a>
              <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--color-stone)', marginTop: 16 }}>Séance individuelle : 80€ · 60 minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CONTACT ── */}
      <section id="contact" style={{ backgroundColor: 'var(--color-beige)', padding: '120px 48px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 400, letterSpacing: '0.25em', color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: 16 }}>
            Contact
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--color-forest)', marginBottom: 24 }}>
            Échangeons ensemble
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: 40, fontWeight: 300 }}>
            Retrouve-moi sur les réseaux sociaux ou découvre mon livre directement via les liens ci-dessous :
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <a href={LIENS.facebook} target="_blank" rel="noopener noreferrer" style={{ padding: '14px 28px', backgroundColor: 'var(--color-forest)', color: 'var(--color-cream)', textDecoration: 'none', borderRadius: 2, fontSize: 13, fontWeight: 500 }}>
              Facebook
            </a>
            <a href={LIENS.instagram} target="_blank" rel="noopener noreferrer" style={{ padding: '14px 28px', backgroundColor: 'var(--color-forest)', color: 'var(--color-cream)', textDecoration: 'none', borderRadius: 2, fontSize: 13, fontWeight: 500 }}>
              Instagram
            </a>
            <a href={LIENS.livre} target="_blank" rel="noopener noreferrer" style={{ padding: '14px 28px', backgroundColor: 'var(--color-gold)', color: 'var(--color-forest)', textDecoration: 'none', borderRadius: 2, fontSize: 13, fontWeight: 500 }}>
              Mon Livre
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: 'var(--color-forest)', padding: '32px 48px', color: 'var(--color-cream)', textAlign: 'center', fontSize: 13, opacity: 0.9 }}>
        <p>© {new Date().getFullYear()} Cédric Conche — Renaître à soi m'aime. Tous droits réservés.</p>
      </footer>

    </div>
  )
}