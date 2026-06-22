/* @ds-bundle: {"format":3,"namespace":"OrbitDesignSystem_82ffc0","components":[],"sourceHashes":{"ui_kits/website/Closing.jsx":"7db339805dc5","ui_kits/website/NavHero.jsx":"93e7cd70e755","ui_kits/website/Pricing.jsx":"4bcf1632f67d","ui_kits/website/Primitives.jsx":"7eb857226ad4","ui_kits/website/Sections.jsx":"6451bfe8e7a9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OrbitDesignSystem_82ffc0 = window.OrbitDesignSystem_82ffc0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/Closing.jsx
try { (() => {
/* Orbit website UI kit — Final CTA band + Footer */

function FinalCTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 40px 100px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      maxWidth: 1100,
      margin: '0 auto',
      borderRadius: 24,
      padding: '72px 48px',
      textAlign: 'center',
      background: 'linear-gradient(180deg, #111829 0%, #0D1320 100%)',
      border: '1px solid rgba(248,250,252,0.10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      left: '50%',
      top: '-30%',
      transform: 'translateX(-50%)',
      width: 700,
      height: 500,
      pointerEvents: 'none',
      background: 'radial-gradient(closest-side, rgba(249,115,22,0.18), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      left: '50%',
      bottom: '-50%',
      transform: 'translateX(-50%)',
      width: 800,
      height: 500,
      pointerEvents: 'none',
      background: 'radial-gradient(closest-side, rgba(59,130,246,0.14), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/orbit-mark-white.png",
    alt: "",
    style: {
      width: 44,
      height: 44
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Anthropic Serif Display', Georgia, serif",
      fontWeight: 500,
      fontSize: 50,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: '#F8FAFC',
      margin: '0 0 16px',
      textWrap: 'balance'
    }
  }, "Ready to capture every lead?"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 500,
      margin: '0 auto 34px',
      fontSize: 18,
      lineHeight: 1.55,
      color: '#94A3B8'
    }
  }, "We'll build a free 90-second demo answering calls for ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: '#CBD5E1',
      fontStyle: 'normal'
    }
  }, "your"), " business, so you can hear exactly what your customers would."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "arrow-right"
  }, "Get a Free Demo"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:seth@gotorbit.net",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      color: '#CBD5E1',
      fontFamily: 'Geist Mono, monospace',
      fontSize: 15,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: '#60A5FA'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16,
    stroke: 2
  })), "seth@gotorbit.net")))));
}
function Footer() {
  const cols = [{
    h: 'Product',
    links: ['Voice Receptionist', 'AI Chatbot', 'Websites', 'Pricing']
  }, {
    h: 'Company',
    links: ['About', 'How it works', 'Contact']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid rgba(248,250,252,0.08)',
      padding: '56px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 24
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontSize: 15,
      lineHeight: 1.6,
      color: '#94A3B8'
    }
  }, "AI automation for local service businesses."), /*#__PURE__*/React.createElement("a", {
    href: "mailto:seth@gotorbit.net",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 16,
      color: '#94A3B8',
      fontFamily: 'Geist Mono, monospace',
      fontSize: 14,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 15,
    stroke: 2
  }), " seth@gotorbit.net")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Geist Mono, monospace',
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#64748B',
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement(FooterLink, {
    key: l
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '48px auto 0',
      paddingTop: 24,
      borderTop: '1px solid rgba(248,250,252,0.06)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: '#64748B'
    }
  }, "\xA9 2026 Orbit. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: '#64748B'
    }
  }, "Built for the trades.")));
}
function FooterLink({
  children
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      fontSize: 15,
      color: h ? '#F8FAFC' : '#94A3B8',
      textDecoration: 'none',
      transition: 'color .15s ease',
      width: 'fit-content'
    }
  }, children);
}
Object.assign(window, {
  FinalCTA,
  Footer,
  FooterLink
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Closing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/NavHero.jsx
try { (() => {
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
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      borderBottom: `1px solid ${scrolled ? 'rgba(248,250,252,0.08)' : 'transparent'}`,
      background: scrolled ? 'rgba(10,14,26,0.72)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'background .25s ease, border-color .25s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '18px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 24
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 30
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l
  }, l))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Get a Demo"))));
}
function NavLink({
  children
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      fontFamily: 'Geist, sans-serif',
      fontSize: 15,
      fontWeight: 450,
      color: h ? '#F8FAFC' : '#94A3B8',
      textDecoration: 'none',
      transition: 'color .15s ease',
      letterSpacing: '-0.01em'
    }
  }, children);
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '110px 40px 130px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      left: '50%',
      top: 360,
      transform: 'translateX(-50%)',
      width: 1100,
      height: 1100,
      pointerEvents: 'none',
      background: 'radial-gradient(closest-side, rgba(59,130,246,0.20), rgba(59,130,246,0.045) 52%, transparent 72%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      left: '50%',
      bottom: -560,
      transform: 'translateX(-50%)',
      width: 980,
      height: 980,
      borderRadius: '50%',
      pointerEvents: 'none',
      background: 'radial-gradient(circle at 50% 30%, rgba(96,165,250,0.10), rgba(10,14,26,0) 60%)',
      boxShadow: 'inset 0 2px 80px rgba(96,165,250,0.10)',
      border: '1px solid rgba(96,165,250,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 880,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    icon: "radio"
  }, "24/7 AI that never sends a customer to voicemail")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'Anthropic Serif Display', Georgia, serif",
      fontWeight: 500,
      fontSize: 78,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      color: '#F8FAFC',
      margin: 0,
      textWrap: 'balance'
    }
  }, "Never miss another", /*#__PURE__*/React.createElement("br", null), "customer call."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 660,
      margin: '26px auto 0',
      fontFamily: 'Geist, sans-serif',
      fontSize: 20,
      lineHeight: 1.55,
      color: '#94A3B8',
      textWrap: 'pretty'
    }
  }, "Orbit builds AI receptionists, assistants, and websites that capture every lead for local service businesses \u2014 24/7, even when you're on a job and can't pick up."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 14,
      marginTop: 38
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "arrow-right"
  }, "Get a Free Demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    icon: "play"
  }, "See how it works")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 28,
      marginTop: 40,
      fontFamily: 'Geist Mono, monospace',
      fontSize: 13,
      color: '#64748B',
      letterSpacing: '0.02em',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stat, null, "Live in days"), /*#__PURE__*/React.createElement(Dot, null), /*#__PURE__*/React.createElement(Stat, null, "Built for HVAC, plumbing & home services"), /*#__PURE__*/React.createElement(Dot, null), /*#__PURE__*/React.createElement(Stat, null, "Sounds like your best employee"))));
}
function Pill({
  children,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      padding: '7px 15px 7px 12px',
      borderRadius: 999,
      border: '1px solid rgba(59,130,246,0.28)',
      background: 'rgba(59,130,246,0.08)',
      color: '#BFDBFE',
      fontFamily: 'Geist, sans-serif',
      fontSize: 13.5,
      fontWeight: 450,
      letterSpacing: '-0.005em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: '#60A5FA'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 15,
    stroke: 2.25
  })), children);
}
function Stat({
  children
}) {
  return /*#__PURE__*/React.createElement("span", null, children);
}
function Dot() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "\xB7");
}
Object.assign(window, {
  Nav,
  Hero,
  Pill
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/NavHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pricing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Orbit website UI kit — Pricing (real tiers from the Orbit business plan) */

function Pricing() {
  const tiers = [{
    name: 'Starter',
    price: 127,
    setup: 399,
    blurb: 'AI chat assistant for one channel.',
    features: ['Website AI chat assistant', 'Lead capture & FAQ answering', 'Email & SMS lead alerts', '1 workspace'],
    cta: 'Get started',
    variant: 'secondary'
  }, {
    name: 'Growth',
    price: 197,
    setup: 599,
    blurb: 'Chat assistant + a site built to convert.',
    features: ['Everything in Starter', '5-page conversion website', 'Booking automation', 'Click-to-call on every screen'],
    cta: 'Get started',
    variant: 'secondary'
  }, {
    name: 'Pro',
    price: 297,
    setup: 999,
    blurb: 'The full stack — calls, chat & web.',
    popular: true,
    features: ['Everything in Growth', '24/7 AI voice receptionist', 'Call summaries & transcripts', 'Calendar booking & reminders'],
    cta: 'Get a Free Demo',
    variant: 'primary'
  }, {
    name: 'Elite',
    price: 397,
    setup: 1499,
    blurb: 'Everything, every channel.',
    features: ['Everything in Pro', 'WhatsApp & SMS automation', 'Priority support', 'Monthly optimization'],
    cta: 'Get started',
    variant: 'secondary'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 40px',
      background: '#0D1320',
      borderTop: '1px solid rgba(248,250,252,0.06)',
      borderBottom: '1px solid rgba(248,250,252,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Pricing",
    title: "Plans that pay for themselves in one job.",
    sub: "Simple monthly retainers, no long contracts. One recovered HVAC call covers the month."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18,
      alignItems: 'stretch'
    }
  }, tiers.map(t => /*#__PURE__*/React.createElement(PriceCard, _extends({
    key: t.name
  }, t)))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: 26,
      fontSize: 14,
      color: '#64748B',
      fontFamily: 'Geist Mono, monospace',
      letterSpacing: '0.02em'
    }
  }, "One-time setup fee + monthly. We never discount \u2014 we tailor scope to fit.")));
}
function PriceCard({
  name,
  price,
  setup,
  blurb,
  features,
  cta,
  variant,
  popular
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      padding: 24,
      borderRadius: 16,
      background: popular ? '#131B2D' : '#111829',
      border: `1px solid ${popular ? 'rgba(59,130,246,0.5)' : h ? 'rgba(248,250,252,0.16)' : 'rgba(248,250,252,0.08)'}`,
      boxShadow: popular ? '0 0 0 1px rgba(59,130,246,0.22), 0 22px 60px rgba(59,130,246,0.16)' : 'none',
      transform: h && !popular ? 'translateY(-3px)' : 'translateY(0)',
      transition: 'all .2s cubic-bezier(.2,.7,.3,1)'
    }
  }, popular && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -11,
      left: 24,
      padding: '4px 11px',
      borderRadius: 999,
      background: '#3B82F6',
      color: '#fff',
      fontFamily: 'Geist Mono, monospace',
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase'
    }
  }, "Most popular"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Geist, sans-serif',
      fontSize: 15,
      fontWeight: 600,
      color: '#F8FAFC',
      letterSpacing: '-0.01em'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#94A3B8',
      marginTop: 5,
      minHeight: 34,
      lineHeight: 1.4
    }
  }, blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Anthropic Serif Display', Georgia, serif",
      fontSize: 44,
      fontWeight: 500,
      color: '#F8FAFC',
      letterSpacing: '-0.01em'
    }
  }, "$", price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: '#64748B'
    }
  }, "/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Geist Mono, monospace',
      fontSize: 12,
      color: '#64748B',
      marginTop: 4
    }
  }, "+ $", setup.toLocaleString(), " one-time setup"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(248,250,252,0.07)',
      margin: '20px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11,
      flex: 1
    }
  }, features.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 9,
      fontSize: 14,
      lineHeight: 1.4,
      color: '#CBD5E1'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: popular ? '#60A5FA' : '#3B82F6',
      marginTop: 1,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    stroke: 2.5
  })), f))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: variant,
    size: "md",
    style: {
      width: '100%'
    }
  }, cta)));
}
Object.assign(window, {
  Pricing,
  PriceCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Primitives.jsx
try { (() => {
/* Orbit website UI kit — shared primitives: Button, Icon, Eyebrow, Wordmark */

// Lucide icon. Renders an <i> that lucide.createIcons() upgrades to inline SVG.
function Icon({
  name,
  size = 20,
  stroke = 2,
  color,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      ref.current.appendChild(i);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          'stroke-width': stroke
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color: color || 'currentColor',
      ...style
    }
  });
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  href,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const sizes = {
    sm: {
      padding: '0 16px',
      height: 38,
      fontSize: 14,
      radius: 9
    },
    md: {
      padding: '0 22px',
      height: 46,
      fontSize: 15,
      radius: 11
    },
    lg: {
      padding: '0 30px',
      height: 56,
      fontSize: 17,
      radius: 13
    }
  }[size];
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    height: sizes.height,
    padding: sizes.padding,
    borderRadius: sizes.radius,
    fontFamily: 'Geist, sans-serif',
    fontSize: sizes.fontSize,
    fontWeight: 600,
    letterSpacing: '-0.01em',
    cursor: 'pointer',
    border: '1px solid transparent',
    transition: 'transform .12s ease, background .18s ease, box-shadow .18s ease, border-color .18s ease',
    transform: press ? 'scale(0.97)' : 'scale(1)',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    ...style
  };
  const variants = {
    primary: {
      background: hover ? '#EA580C' : '#F97316',
      color: '#fff',
      boxShadow: hover ? '0 12px 32px rgba(249,115,22,0.40)' : '0 6px 18px rgba(249,115,22,0.28)'
    },
    blue: {
      background: hover ? '#2563EB' : '#3B82F6',
      color: '#fff',
      boxShadow: hover ? '0 12px 32px rgba(59,130,246,0.40)' : '0 6px 18px rgba(59,130,246,0.28)'
    },
    secondary: {
      background: hover ? '#161E30' : 'rgba(248,250,252,0.04)',
      color: '#F8FAFC',
      borderColor: hover ? 'rgba(248,250,252,0.20)' : 'rgba(248,250,252,0.12)'
    },
    ghost: {
      background: 'transparent',
      color: hover ? '#F8FAFC' : '#94A3B8'
    }
  }[variant];
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...variants
    }
  }, children, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: sizes.fontSize + 2,
    stroke: 2.25
  }));
}
function Eyebrow({
  children,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Geist Mono, monospace',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: color || '#60A5FA',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 1,
      background: 'currentColor',
      opacity: 0.5
    }
  }), children);
}
function Wordmark({
  size = 26,
  color = '#F8FAFC',
  mark = 'assets/orbit-mark-white.png'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: size * 0.34
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: mark,
    alt: "",
    style: {
      width: size * 1.12,
      height: size * 1.12,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Anthropic Serif Display', Georgia, serif",
      fontWeight: 500,
      fontSize: size * 1.08,
      letterSpacing: '-0.01em',
      color
    }
  }, "Orbit"));
}
Object.assign(window, {
  Icon,
  Button,
  Eyebrow,
  Wordmark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Orbit website UI kit — Problem, WhatWeBuild, HowItWorks */

function SectionHead({
  eyebrow,
  title,
  sub,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      margin: '0 auto 56px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: color
  }, eyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Anthropic Serif Display', Georgia, serif",
      fontWeight: 500,
      fontSize: 42,
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
      color: '#F8FAFC',
      margin: 0,
      textWrap: 'balance'
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px auto 0',
      maxWidth: 560,
      fontSize: 18,
      lineHeight: 1.5,
      color: '#94A3B8',
      textWrap: 'pretty'
    }
  }, sub));
}
function Problem() {
  const items = [{
    icon: 'phone-missed',
    title: 'Missed calls = lost jobs.',
    body: "78% of callers won't leave a voicemail — they just dial the next company on the list and book with them instead."
  }, {
    icon: 'moon',
    title: 'After-hours leads go to competitors.',
    body: "Most home-service searches happen nights and weekends — exactly when no one is at the desk to pick up."
  }, {
    icon: 'mouse-pointer-click',
    title: "Your website doesn't convert.",
    body: "A slow, dated site makes visitors bounce before they ever tap to call or fill out a request."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 40px',
      borderTop: '1px solid rgba(248,250,252,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    color: "#FB923C",
    eyebrow: "The problem",
    title: "Leads slip away while you're on the job.",
    sub: "Miss eight calls a week and a typical home-services business loses around $49,920 a year. The work that pays the bills is the same work that keeps you from the phone."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.title,
    style: {
      padding: '4px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 12,
      display: 'grid',
      placeItems: 'center',
      background: 'rgba(249,115,22,0.10)',
      border: '1px solid rgba(249,115,22,0.22)',
      color: '#FB923C',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 22,
    stroke: 2
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Anthropic Serif Text', Georgia, serif",
      fontWeight: 600,
      fontSize: 22,
      letterSpacing: '-0.01em',
      color: '#F8FAFC',
      margin: '0 0 10px'
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: '#94A3B8',
      margin: 0,
      textWrap: 'pretty'
    }
  }, it.body))))));
}
function WhatWeBuild() {
  const cards = [{
    icon: 'phone-call',
    tag: 'Voice',
    title: 'AI Voice Receptionist',
    body: 'Answers every call in your business’s voice, qualifies the caller, and books the job straight onto your calendar — 24/7.',
    points: ['Answers on the first ring', 'Books & reschedules appointments', 'Texts you a summary of every call']
  }, {
    icon: 'message-square',
    tag: 'Chat',
    title: 'AI Chat Assistant',
    body: 'Captures website and text-message leads the instant they land, so a quote request never sits unread overnight.',
    points: ['Replies in seconds, day or night', 'Captures name, job & contact info', 'Hands off hot leads to your team']
  }, {
    icon: 'layout-template',
    tag: 'Web',
    title: 'Modern Websites',
    body: 'Fast, clean sites built to turn visitors into booked jobs — with click-to-call and instant quote forms baked in.',
    points: ['Loads in under a second', 'Built to convert, not just look good', 'Click-to-call on every screen']
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 40px',
      background: '#0D1320',
      borderTop: '1px solid rgba(248,250,252,0.06)',
      borderBottom: '1px solid rgba(248,250,252,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "What we build",
    title: "One system to capture every lead.",
    sub: "Three products that work together so a customer is always met by a fast, helpful answer \u2014 plus WhatsApp & SMS automation as a premium add-on."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, cards.map(c => /*#__PURE__*/React.createElement(BuildCard, _extends({
    key: c.title
  }, c))))));
}
function BuildCard({
  icon,
  tag,
  title,
  body,
  points
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      padding: 28,
      borderRadius: 16,
      background: h ? '#131B2D' : '#111829',
      border: `1px solid ${h ? 'rgba(59,130,246,0.45)' : 'rgba(248,250,252,0.08)'}`,
      boxShadow: h ? '0 0 0 1px rgba(59,130,246,0.20), 0 18px 50px rgba(59,130,246,0.14)' : '0 1px 2px rgba(0,0,0,0.4)',
      transform: h ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'all .22s cubic-bezier(.2,.7,.3,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 13,
      display: 'grid',
      placeItems: 'center',
      background: h ? 'rgba(59,130,246,0.16)' : 'rgba(59,130,246,0.10)',
      border: '1px solid rgba(59,130,246,0.28)',
      color: '#60A5FA',
      transition: 'background .22s ease'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24,
    stroke: 2
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Geist Mono, monospace',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#64748B',
      padding: '5px 10px',
      borderRadius: 999,
      border: '1px solid rgba(248,250,252,0.10)'
    }
  }, tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Anthropic Serif Text', Georgia, serif",
      fontWeight: 600,
      fontSize: 23,
      letterSpacing: '-0.01em',
      color: '#F8FAFC',
      margin: '0 0 10px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.6,
      color: '#94A3B8',
      margin: '0 0 20px',
      textWrap: 'pretty'
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11,
      paddingTop: 20,
      borderTop: '1px solid rgba(248,250,252,0.07)'
    }
  }, points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 14.5,
      color: '#CBD5E1'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: '#3B82F6'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    stroke: 2.5
  })), p))));
}
function HowItWorks() {
  const steps = [{
    n: '01',
    icon: 'search',
    title: 'We learn your business.',
    body: 'Your services, pricing, hours and the way you talk to customers — captured in a short onboarding call.'
  }, {
    n: '02',
    icon: 'rocket',
    title: 'We build and launch in days.',
    body: 'Your AI receptionist, chatbot and site go live in days, not months — fully tuned to your trade.'
  }, {
    n: '03',
    icon: 'trending-up',
    title: 'You stop losing leads.',
    body: 'Every call answered, every form captured. You show up to booked jobs instead of chasing voicemails.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "How it works",
    title: "Up and running in a week, not a quarter."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: 31,
      left: '16%',
      right: '16%',
      height: 1,
      background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)'
    }
  }), steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      position: 'relative',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 62,
      height: 62,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      background: '#0A0E1A',
      border: '1px solid rgba(59,130,246,0.4)',
      color: '#60A5FA',
      boxShadow: '0 0 0 6px #0A0E1A, 0 8px 24px rgba(59,130,246,0.14)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 24,
    stroke: 2
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Geist Mono, monospace',
      fontSize: 13,
      fontWeight: 500,
      color: '#3B82F6',
      letterSpacing: '0.1em'
    }
  }, s.n)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Anthropic Serif Text', Georgia, serif",
      fontWeight: 600,
      fontSize: 22,
      letterSpacing: '-0.01em',
      color: '#F8FAFC',
      margin: '0 0 10px'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: '#94A3B8',
      margin: 0,
      maxWidth: 320,
      textWrap: 'pretty'
    }
  }, s.body))))));
}
Object.assign(window, {
  Problem,
  WhatWeBuild,
  HowItWorks,
  SectionHead,
  BuildCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

})();
