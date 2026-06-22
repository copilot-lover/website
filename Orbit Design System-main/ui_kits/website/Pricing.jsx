/* Orbit website UI kit — Pricing (real tiers from the Orbit business plan) */

function Pricing() {
  const tiers = [
    {
      name: 'Starter', price: 127, setup: 399, blurb: 'AI chat assistant for one channel.',
      features: ['Website AI chat assistant', 'Lead capture & FAQ answering', 'Email & SMS lead alerts', '1 workspace'],
      cta: 'Get started', variant: 'secondary',
    },
    {
      name: 'Growth', price: 197, setup: 599, blurb: 'Chat assistant + a site built to convert.',
      features: ['Everything in Starter', '5-page conversion website', 'Booking automation', 'Click-to-call on every screen'],
      cta: 'Get started', variant: 'secondary',
    },
    {
      name: 'Pro', price: 297, setup: 999, blurb: 'The full stack — calls, chat & web.', popular: true,
      features: ['Everything in Growth', '24/7 AI voice receptionist', 'Call summaries & transcripts', 'Calendar booking & reminders'],
      cta: 'Get a Free Demo', variant: 'primary',
    },
    {
      name: 'Elite', price: 397, setup: 1499, blurb: 'Everything, every channel.',
      features: ['Everything in Pro', 'WhatsApp & SMS automation', 'Priority support', 'Monthly optimization'],
      cta: 'Get started', variant: 'secondary',
    },
  ];

  return (
    <section style={{ padding: '96px 40px', background: '#0D1320', borderTop: '1px solid rgba(248,250,252,0.06)', borderBottom: '1px solid rgba(248,250,252,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHead
          eyebrow="Pricing"
          title="Plans that pay for themselves in one job."
          sub="Simple monthly retainers, no long contracts. One recovered HVAC call covers the month."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, alignItems: 'stretch' }}>
          {tiers.map((t) => <PriceCard key={t.name} {...t} />)}
        </div>
        <p style={{ textAlign: 'center', marginTop: 26, fontSize: 14, color: '#64748B', fontFamily: 'Geist Mono, monospace', letterSpacing: '0.02em' }}>
          One-time setup fee + monthly. We never discount — we tailor scope to fit.
        </p>
      </div>
    </section>
  );
}

function PriceCard({ name, price, setup, blurb, features, cta, variant, popular }) {
  const [h, setH] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        position: 'relative', display: 'flex', flexDirection: 'column', padding: 24,
        borderRadius: 16, background: popular ? '#131B2D' : '#111829',
        border: `1px solid ${popular ? 'rgba(59,130,246,0.5)' : (h ? 'rgba(248,250,252,0.16)' : 'rgba(248,250,252,0.08)')}`,
        boxShadow: popular ? '0 0 0 1px rgba(59,130,246,0.22), 0 22px 60px rgba(59,130,246,0.16)' : 'none',
        transform: h && !popular ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'all .2s cubic-bezier(.2,.7,.3,1)',
      }}>
      {popular && (
        <span style={{
          position: 'absolute', top: -11, left: 24, padding: '4px 11px', borderRadius: 999,
          background: '#3B82F6', color: '#fff', fontFamily: 'Geist Mono, monospace',
          fontSize: 10.5, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>Most popular</span>
      )}
      <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 15, fontWeight: 600, color: '#F8FAFC', letterSpacing: '-0.01em' }}>{name}</div>
      <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 5, minHeight: 34, lineHeight: 1.4 }}>{blurb}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 14 }}>
        <span style={{ fontFamily: "'Anthropic Serif Display', Georgia, serif", fontSize: 44, fontWeight: 500, color: '#F8FAFC', letterSpacing: '-0.01em' }}>${price}</span>
        <span style={{ fontSize: 14, color: '#64748B' }}>/mo</span>
      </div>
      <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 12, color: '#64748B', marginTop: 4 }}>+ ${setup.toLocaleString()} one-time setup</div>
      <div style={{ height: 1, background: 'rgba(248,250,252,0.07)', margin: '20px 0' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 11, flex: 1 }}>
        {features.map((f) => (
          <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 14, lineHeight: 1.4, color: '#CBD5E1' }}>
            <span style={{ display: 'inline-flex', color: popular ? '#60A5FA' : '#3B82F6', marginTop: 1, flex: 'none' }}><Icon name="check" size={15} stroke={2.5} /></span>
            {f}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 22 }}>
        <Button variant={variant} size="md" style={{ width: '100%' }}>{cta}</Button>
      </div>
    </div>
  );
}

Object.assign(window, { Pricing, PriceCard });
