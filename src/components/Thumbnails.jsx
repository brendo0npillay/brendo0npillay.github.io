// Inline SVG thumbnails so the site has no external image dependencies.
// Swap any of these for a real <img src="/your-screenshot.png" /> whenever you like.

export function ChatThumb() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="img" aria-label="Chatbot conversation preview">
      <defs>
        <linearGradient id="chatbg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1b2340" />
          <stop offset="1" stopColor="#0d1122" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#chatbg)" />
      <g className="floaty">
        <rect x="24" y="28" width="150" height="34" rx="17" fill="#252c47" />
        <rect x="40" y="41" width="86" height="8" rx="4" fill="#9aa3b8" opacity=".7" />
      </g>
      <rect x="120" y="76" width="176" height="46" rx="20" fill="#e4b95a" />
      <rect x="138" y="90" width="120" height="7" rx="3.5" fill="#000" opacity=".55" />
      <rect x="138" y="104" width="80" height="7" rx="3.5" fill="#000" opacity=".35" />
      <rect x="24" y="136" width="86" height="32" rx="16" fill="#252c47" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={46 + i * 18} cy="152" r="4" fill="#fff" className="dot-blink" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
    </svg>
  )
}

export function PlanetThumb() {
  const stars = [[30,30],[80,150],[250,40],[290,120],[60,90],[200,170],[150,22],[280,180],[18,170]]
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="img" aria-label="3D planet preview">
      <defs>
        <radialGradient id="planet" cx=".35" cy=".3" r=".9">
          <stop offset="0" stopColor="#f2d48a" />
          <stop offset=".55" stopColor="#b8862f" />
          <stop offset="1" stopColor="#3a2a10" />
        </radialGradient>
      </defs>
      <rect width="320" height="200" fill="#070a16" />
      {stars.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.6 : 1} fill="#fff" opacity=".7" />)}
      <ellipse cx="160" cy="100" rx="120" ry="26" fill="none" stroke="#e4b95a" strokeOpacity=".35" transform="rotate(-18 160 100)" />
      <circle cx="160" cy="100" r="50" fill="url(#planet)" />
      <g className="spin-slow">
        <circle cx="160" cy="100" r="78" fill="none" stroke="#252c47" strokeDasharray="3 8" />
        <circle cx="238" cy="100" r="6" fill="#9aa3b8" />
      </g>
    </svg>
  )
}

export function FootprintThumb() {
  const bars = [46, 80, 62, 104, 72, 122, 90]
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="img" aria-label="Carbon footprint chart preview">
      <rect width="320" height="200" fill="#0e1424" />
      <g>
        {bars.map((h, i) => (
          <rect key={i} className="bar" x={28 + i * 38} y={168 - h} width="24" height={h} rx="6"
            fill={i === 5 ? '#e4b95a' : '#252c47'} style={{ animationDelay: `${i * 90}ms` }} />
        ))}
      </g>
      <line x1="20" y1="168" x2="300" y2="168" stroke="#252c47" />
      <circle cx="262" cy="46" r="24" fill="none" stroke="#252c47" strokeWidth="6" />
      <circle cx="262" cy="46" r="24" fill="none" stroke="#e4b95a" strokeWidth="6" strokeLinecap="round"
        strokeDasharray="151" strokeDashoffset="52" transform="rotate(-90 262 46)" />
    </svg>
  )
}
