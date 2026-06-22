/* Orbit website UI kit — Problem, WhatWeBuild, HowItWorks */

function SectionHead({ eyebrow, title, sub, color }) {
  return (
    <div style={{ maxWidth: 680, margin: '0 auto 56px', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
        <Eyebrow color={color}>{eyebrow}</Eyebrow>
      </div>
      <h2 style={{
        fontFamily: "'Anthropic Serif Display', Georgia, serif", fontWeight: 500, fontSize: 42, lineHeight: 1.12,
        letterSpacing: '-0.02em', color: '#F8FAFC', margin: 0, textWrap: 'balance',
      }}>{title}</h2>
      {sub && <p style={{
        margin: '18px auto 0', maxWidth: 560, fontSize: 18, lineHeight: 1.5,
        color: '#94A3B8', textWrap: 'pretty',
      }}>{sub}</p>}
    </div>
  );
}

function Problem() {
  const items = [
    { icon: 'phone-missed', title: 'Missed calls = lost jobs.', body: "78% of callers won't leave a voicemail — they just dial the next company on the list and book with them instead." },
    { icon: 'moon', title: 'After-hours leads go to competitors.', body: "Most home-service searches happen nights and weekends — exactly when no one is at the desk to pick up." },
    { icon: 'mouse-pointer-click', title: "Your website doesn't convert.", body: "A slow, dated site makes visitors bounce before they ever tap to call or fill out a request." },
  ];
  return (
    <section style={{ padding: '96px 40px', borderTop: '1px solid rgba(248,250,252,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHead
          color="#FB923C"
          eyebrow="The problem"
          title="Leads slip away while you're on the job."
          sub="Miss eight calls a week and a typical home-services business loses around $49,920 a year. The work that pays the bills is the same work that keeps you from the phone."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {items.map((it) => (
            <div key={it.title} style={{ padding: '4px 8px' }}>
              <div style={{
                width: 46, height: 46, borderRadius: 12, display: 'grid', placeItems: 'center',
                background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.22)',
                color: '#FB923C', marginBottom: 20,
              }}>
                <Icon name={it.icon} size={22} stroke={2} />
              </div>
              <h3 style={{
                fontFamily: "'Anthropic Serif Text', Georgia, serif", fontWeight: 600, fontSize: 22,
                letterSpacing: '-0.01em', color: '#F8FAFC', margin: '0 0 10px',
              }}>{it.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: '#94A3B8', margin: 0, textWrap: 'pretty' }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeBuild() {
  const cards = [
    { icon: 'phone-call', tag: 'Voice', title: 'AI Voice Receptionist', body: 'Answers every call in your business’s voice, qualifies the caller, and books the job straight onto your calendar — 24/7.', points: ['Answers on the first ring', 'Books & reschedules appointments', 'Texts you a summary of every call'] },
    { icon: 'message-square', tag: 'Chat', title: 'AI Chat Assistant', body: 'Captures website and text-message leads the instant they land, so a quote request never sits unread overnight.', points: ['Replies in seconds, day or night', 'Captures name, job & contact info', 'Hands off hot leads to your team'] },
    { icon: 'layout-template', tag: 'Web', title: 'Modern Websites', body: 'Fast, clean sites built to turn visitors into booked jobs — with click-to-call and instant quote forms baked in.', points: ['Loads in under a second', 'Built to convert, not just look good', 'Click-to-call on every screen'] },
  ];
  return (
    <section style={{ padding: '96px 40px', background: '#0D1320', borderTop: '1px solid rgba(248,250,252,0.06)', borderBottom: '1px solid rgba(248,250,252,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHead
          eyebrow="What we build"
          title="One system to capture every lead."
          sub="Three products that work together so a customer is always met by a fast, helpful answer — plus WhatsApp &amp; SMS automation as a premium add-on."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {cards.map((c) => <BuildCard key={c.title} {...c} />)}
        </div>
      </div>
    </section>
  );
}

function BuildCard({ icon, tag, title, body, points }) {
  const [h, setH] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        position: 'relative', padding: 28, borderRadius: 16,
        background: h ? '#131B2D' : '#111829',
        border: `1px solid ${h ? 'rgba(59,130,246,0.45)' : 'rgba(248,250,252,0.08)'}`,
        boxShadow: h ? '0 0 0 1px rgba(59,130,246,0.20), 0 18px 50px rgba(59,130,246,0.14)' : '0 1px 2px rgba(0,0,0,0.4)',
        transform: h ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all .22s cubic-bezier(.2,.7,.3,1)',
      }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 13, display: 'grid', placeItems: 'center',
          background: h ? 'rgba(59,130,246,0.16)' : 'rgba(59,130,246,0.10)',
          border: '1px solid rgba(59,130,246,0.28)', color: '#60A5FA',
          transition: 'background .22s ease',
        }}>
          <Icon name={icon} size={24} stroke={2} />
        </div>
        <span style={{
          fontFamily: 'Geist Mono, monospace', fontSize: 11, fontWeight: 500, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: '#64748B', padding: '5px 10px', borderRadius: 999,
          border: '1px solid rgba(248,250,252,0.10)',
        }}>{tag}</span>
      </div>
      <h3 style={{ fontFamily: "'Anthropic Serif Text', Georgia, serif", fontWeight: 600, fontSize: 23, letterSpacing: '-0.01em', color: '#F8FAFC', margin: '0 0 10px' }}>{title}</h3>
      <p style={{ fontSize: 15.5, lineHeight: 1.6, color: '#94A3B8', margin: '0 0 20px', textWrap: 'pretty' }}>{body}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 11, paddingTop: 20, borderTop: '1px solid rgba(248,250,252,0.07)' }}>
        {points.map((p) => (
          <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14.5, color: '#CBD5E1' }}>
            <span style={{ display: 'inline-flex', color: '#3B82F6' }}><Icon name="check" size={16} stroke={2.5} /></span>
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    { n: '01', icon: 'search', title: 'We learn your business.', body: 'Your services, pricing, hours and the way you talk to customers — captured in a short onboarding call.' },
    { n: '02', icon: 'rocket', title: 'We build and launch in days.', body: 'Your AI receptionist, chatbot and site go live in days, not months — fully tuned to your trade.' },
    { n: '03', icon: 'trending-up', title: 'You stop losing leads.', body: 'Every call answered, every form captured. You show up to booked jobs instead of chasing voicemails.' },
  ];
  return (
    <section style={{ padding: '96px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHead
          eyebrow="How it works"
          title="Up and running in a week, not a quarter."
        />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {/* connecting line */}
          <div aria-hidden style={{
            position: 'absolute', top: 31, left: '16%', right: '16%', height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)',
          }} />
          {steps.map((s) => (
            <div key={s.n} style={{ position: 'relative', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <div style={{
                  width: 62, height: 62, borderRadius: '50%', display: 'grid', placeItems: 'center',
                  background: '#0A0E1A', border: '1px solid rgba(59,130,246,0.4)', color: '#60A5FA',
                  boxShadow: '0 0 0 6px #0A0E1A, 0 8px 24px rgba(59,130,246,0.14)',
                }}>
                  <Icon name={s.icon} size={24} stroke={2} />
                </div>
                <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 13, fontWeight: 500, color: '#3B82F6', letterSpacing: '0.1em' }}>{s.n}</span>
              </div>
              <h3 style={{ fontFamily: "'Anthropic Serif Text', Georgia, serif", fontWeight: 600, fontSize: 22, letterSpacing: '-0.01em', color: '#F8FAFC', margin: '0 0 10px' }}>{s.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: '#94A3B8', margin: 0, maxWidth: 320, textWrap: 'pretty' }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Problem, WhatWeBuild, HowItWorks, SectionHead, BuildCard });
