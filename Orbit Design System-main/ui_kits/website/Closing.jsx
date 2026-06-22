/* Orbit website UI kit — Final CTA band + Footer */

function FinalCTA() {
  return (
    <section style={{ padding: '40px 40px 100px' }}>
      <div style={{
        position: 'relative', overflow: 'hidden', maxWidth: 1100, margin: '0 auto',
        borderRadius: 24, padding: '72px 48px', textAlign: 'center',
        background: 'linear-gradient(180deg, #111829 0%, #0D1320 100%)',
        border: '1px solid rgba(248,250,252,0.10)',
      }}>
        {/* orange glow */}
        <div aria-hidden style={{
          position: 'absolute', left: '50%', top: '-30%', transform: 'translateX(-50%)',
          width: 700, height: 500, pointerEvents: 'none',
          background: 'radial-gradient(closest-side, rgba(249,115,22,0.18), transparent 70%)',
        }} />
        {/* blue glow */}
        <div aria-hidden style={{
          position: 'absolute', left: '50%', bottom: '-50%', transform: 'translateX(-50%)',
          width: 800, height: 500, pointerEvents: 'none',
          background: 'radial-gradient(closest-side, rgba(59,130,246,0.14), transparent 70%)',
        }} />
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 22 }}>
            <img src="assets/orbit-mark-white.png" alt="" style={{ width: 44, height: 44 }} />
          </div>
          <h2 style={{
            fontFamily: "'Anthropic Serif Display', Georgia, serif", fontWeight: 500, fontSize: 50, lineHeight: 1.1,
            letterSpacing: '-0.02em', color: '#F8FAFC', margin: '0 0 16px', textWrap: 'balance',
          }}>Ready to capture every lead?</h2>
          <p style={{ maxWidth: 500, margin: '0 auto 34px', fontSize: 18, lineHeight: 1.55, color: '#94A3B8' }}>
            We'll build a free 90-second demo answering calls for <em style={{ color: '#CBD5E1', fontStyle: 'normal' }}>your</em> business, so you can hear exactly what your customers would.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" icon="arrow-right">Get a Free Demo</Button>
            <a href="mailto:seth@gotorbit.net" style={{
              display: 'inline-flex', alignItems: 'center', gap: 9, color: '#CBD5E1',
              fontFamily: 'Geist Mono, monospace', fontSize: 15, textDecoration: 'none',
            }}>
              <span style={{ display: 'inline-flex', color: '#60A5FA' }}><Icon name="mail" size={16} stroke={2} /></span>
              seth@gotorbit.net
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { h: 'Product', links: ['Voice Receptionist', 'AI Chatbot', 'Websites', 'Pricing'] },
    { h: 'Company', links: ['About', 'How it works', 'Contact'] },
  ];
  return (
    <footer style={{ borderTop: '1px solid rgba(248,250,252,0.08)', padding: '56px 40px 40px' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', display: 'grid',
        gridTemplateColumns: '1.6fr 1fr 1fr', gap: 40, alignItems: 'start',
      }}>
        <div style={{ maxWidth: 320 }}>
          <Wordmark size={24} />
          <p style={{ margin: '18px 0 0', fontSize: 15, lineHeight: 1.6, color: '#94A3B8' }}>
            AI automation for local service businesses.
          </p>
          <a href="mailto:seth@gotorbit.net" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 16,
            color: '#94A3B8', fontFamily: 'Geist Mono, monospace', fontSize: 14, textDecoration: 'none',
          }}>
            <Icon name="mail" size={15} stroke={2} /> seth@gotorbit.net
          </a>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#64748B', marginBottom: 16 }}>{c.h}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {c.links.map((l) => <FooterLink key={l}>{l}</FooterLink>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{
        maxWidth: 1200, margin: '48px auto 0', paddingTop: 24,
        borderTop: '1px solid rgba(248,250,252,0.06)', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
      }}>
        <span style={{ fontSize: 13.5, color: '#64748B' }}>© 2026 Orbit. All rights reserved.</span>
        <span style={{ fontSize: 13.5, color: '#64748B' }}>Built for the trades.</span>
      </div>
    </footer>
  );
}

function FooterLink({ children }) {
  const [h, setH] = React.useState(false);
  return (
    <a href="#" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      fontSize: 15, color: h ? '#F8FAFC' : '#94A3B8', textDecoration: 'none',
      transition: 'color .15s ease', width: 'fit-content',
    }}>{children}</a>
  );
}

Object.assign(window, { FinalCTA, Footer, FooterLink });
