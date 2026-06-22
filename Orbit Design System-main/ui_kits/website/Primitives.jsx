/* Orbit website UI kit — shared primitives: Button, Icon, Eyebrow, Wordmark */

// Lucide icon. Renders an <i> that lucide.createIcons() upgrades to inline SVG.
function Icon({ name, size = 20, stroke = 2, color, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      ref.current.appendChild(i);
      window.lucide.createIcons({
        attrs: { width: size, height: size, 'stroke-width': stroke },
        nameAttr: 'data-lucide',
      });
    }
  }, [name, size, stroke]);
  return (
    <span
      ref={ref}
      style={{ display: 'inline-flex', width: size, height: size, color: color || 'currentColor', ...style }}
    />
  );
}

function Button({ children, variant = 'primary', size = 'md', icon, onClick, href, style }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const sizes = {
    sm: { padding: '0 16px', height: 38, fontSize: 14, radius: 9 },
    md: { padding: '0 22px', height: 46, fontSize: 15, radius: 11 },
    lg: { padding: '0 30px', height: 56, fontSize: 17, radius: 13 },
  }[size];

  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9,
    height: sizes.height, padding: sizes.padding, borderRadius: sizes.radius,
    fontFamily: 'Geist, sans-serif', fontSize: sizes.fontSize, fontWeight: 600,
    letterSpacing: '-0.01em', cursor: 'pointer', border: '1px solid transparent',
    transition: 'transform .12s ease, background .18s ease, box-shadow .18s ease, border-color .18s ease',
    transform: press ? 'scale(0.97)' : 'scale(1)', whiteSpace: 'nowrap', textDecoration: 'none',
    ...style,
  };

  const variants = {
    primary: {
      background: hover ? '#EA580C' : '#F97316', color: '#fff',
      boxShadow: hover ? '0 12px 32px rgba(249,115,22,0.40)' : '0 6px 18px rgba(249,115,22,0.28)',
    },
    blue: {
      background: hover ? '#2563EB' : '#3B82F6', color: '#fff',
      boxShadow: hover ? '0 12px 32px rgba(59,130,246,0.40)' : '0 6px 18px rgba(59,130,246,0.28)',
    },
    secondary: {
      background: hover ? '#161E30' : 'rgba(248,250,252,0.04)', color: '#F8FAFC',
      borderColor: hover ? 'rgba(248,250,252,0.20)' : 'rgba(248,250,252,0.12)',
    },
    ghost: {
      background: 'transparent', color: hover ? '#F8FAFC' : '#94A3B8',
    },
  }[variant];

  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{ ...base, ...variants }}
    >
      {children}
      {icon && <Icon name={icon} size={sizes.fontSize + 2} stroke={2.25} />}
    </Tag>
  );
}

function Eyebrow({ children, color }) {
  return (
    <div style={{
      fontFamily: 'Geist Mono, monospace', fontSize: 13, fontWeight: 500,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: color || '#60A5FA',
      display: 'flex', alignItems: 'center', gap: 10,
    }}>
      <span style={{ width: 22, height: 1, background: 'currentColor', opacity: 0.5 }} />
      {children}
    </div>
  );
}

function Wordmark({ size = 26, color = '#F8FAFC', mark = 'assets/orbit-mark-white.png' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: size * 0.34 }}>
      <img src={mark} alt="" style={{ width: size * 1.12, height: size * 1.12, display: 'block' }} />
      <span style={{
        fontFamily: "'Anthropic Serif Display', Georgia, serif", fontWeight: 500, fontSize: size * 1.08,
        letterSpacing: '-0.01em', color,
      }}>Orbit</span>
    </div>
  );
}

Object.assign(window, { Icon, Button, Eyebrow, Wordmark });
