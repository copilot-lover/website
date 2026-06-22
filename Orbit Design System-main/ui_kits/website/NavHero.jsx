/* Orbit website UI kit — Nav + Hero */

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('[data-scroll]') || window;
    const onScroll = () => {
      const y = el === window ? window.scrollY : el.scrollTop;
      setScrolled(y > 12);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Product', 'How it works', 'Pricing'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      borderBottom: `1px solid ${scrolled ? 'rgba(248,250,252,0.08)' : 'transparent'}`,
      background: scrolled ? 'rgba(10,14,26,0.72)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'background .25s ease, border-color .25s ease',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '18px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Wordmark size={24} />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          <div style={{ display: 'flex', gap: 30 }}>
            {links.map((l) => <NavLink key={l}>{l}</NavLink>)}
          </div>
          <Button variant="primary" size="sm">Get a Demo</Button>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ children }) {
  const [h, setH] = React.useState(false);
  return (
    <a href="#" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      fontFamily: 'Geist, sans-serif', fontSize: 15, fontWeight: 450,
      color: h ? '#F8FAFC' : '#94A3B8', textDecoration: 'none',
      transition: 'color .15s ease', letterSpacing: '-0.01em',
    }}>{children}</a>
  );
}

function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '110px 40px 130px' }}>
      {/* radial planet glow */}
      <div aria-hidden style={{
        position: 'absolute', left: '50%', top: 360, transform: 'translateX(-50%)',
        width: 1100, height: 1100, pointerEvents: 'none',
        background: 'radial-gradient(closest-side, rgba(59,130,246,0.20), rgba(59,130,246,0.045) 52%, transparent 72%)',
      }} />
      {/* faint planet on the horizon */}
      <div aria-hidden style={{
        position: 'absolute', left: '50%', bottom: -560, transform: 'translateX(-50%)',
        width: 980, height: 980, borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle at 50% 30%, rgba(96,165,250,0.10), rgba(10,14,26,0) 60%)',
        boxShadow: 'inset 0 2px 80px rgba(96,165,250,0.10)',
        border: '1px solid rgba(96,165,250,0.06)',
      }} />

      <div style={{ position: 'relative', maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <Pill icon="radio">24/7 AI that never sends a customer to voicemail</Pill>
        </div>
        <h1 style={{
          fontFamily: "'Anthropic Serif Display', Georgia, serif", fontWeight: 500, fontSize: 78,
          lineHeight: 1.05, letterSpacing: '-0.02em', color: '#F8FAFC',
          margin: 0, textWrap: 'balance',
        }}>
          Never miss another<br />customer call.
        </h1>
        <p style={{
          maxWidth: 660, margin: '26px auto 0', fontFamily: 'Geist, sans-serif',
          fontSize: 20, lineHeight: 1.55, color: '#94A3B8', textWrap: 'pretty',
        }}>
          Orbit builds AI receptionists, assistants, and websites that capture every lead
          for local service businesses — 24/7, even when you're on a job and can't pick up.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 38 }}>
          <Button variant="primary" size="lg" icon="arrow-right">Get a Free Demo</Button>
          <Button variant="secondary" size="lg" icon="play">See how it works</Button>
        </div>
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 28, marginTop: 40,
          fontFamily: 'Geist Mono, monospace', fontSize: 13, color: '#64748B',
          letterSpacing: '0.02em', flexWrap: 'wrap',
        }}>
          <Stat>Live in days</Stat>
          <Dot />
          <Stat>Built for HVAC, plumbing &amp; home services</Stat>
          <Dot />
          <Stat>Sounds like your best employee</Stat>
        </div>
      </div>
    </section>
  );
}

function Pill({ children, icon }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 9, padding: '7px 15px 7px 12px',
      borderRadius: 999, border: '1px solid rgba(59,130,246,0.28)',
      background: 'rgba(59,130,246,0.08)', color: '#BFDBFE',
      fontFamily: 'Geist, sans-serif', fontSize: 13.5, fontWeight: 450, letterSpacing: '-0.005em',
    }}>
      <span style={{ display: 'inline-flex', color: '#60A5FA' }}><Icon name={icon} size={15} stroke={2.25} /></span>
      {children}
    </div>
  );
}

function Stat({ children }) { return <span>{children}</span>; }
function Dot() { return <span style={{ opacity: 0.5 }}>·</span>; }

Object.assign(window, { Nav, Hero, Pill });
