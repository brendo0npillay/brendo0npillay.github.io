// Inline SVG thumbnails so the site has no external image dependencies.
// Swap any of these for a real <img src="/your-screenshot.png" /> whenever you like.


export function ChatThumb() {
  return (
    <svg
      viewBox="0 0 320 200"
      className="h-full w-full"
      role="img"
      aria-label="3D character poser preview"
    >
      <defs>
        <linearGradient id="poserbg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1b2340" />
          <stop offset="1" stopColor="#0d1122" />
        </linearGradient>
        <linearGradient id="body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c5ccda" />
          <stop offset="1" stopColor="#69758e" />
        </linearGradient>
      </defs>

      <rect width="320" height="200" fill="url(#poserbg)" />

      {/* Viewport grid */}
      <g stroke="#526080" strokeWidth=".6" opacity=".3">
        {Array.from({ length: 9 }, (_, i) => (
          <line key={`v${i}`} x1={35 + i * 32} y1="38" x2={35 + i * 32} y2="190" />
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <line key={`h${i}`} x1="20" y1={70 + i * 24} x2="300" y2={70 + i * 24} />
        ))}
      </g>

      {/* Character shadow */}
      <ellipse cx="151" cy="181" rx="49" ry="8" fill="#050813" opacity=".6" />

      {/* Legs */}
      <g fill="url(#body)" stroke="#e1e6f0" strokeWidth="1">
        <path d="M132 119 L151 121 L147 151 L140 171 L127 171 L132 148 Z" />
        <path d="M153 121 L171 117 L176 148 L184 169 L171 174 L160 150 Z" />
        <path d="M127 168 L142 168 L144 177 L121 179 L119 175 Z" />
        <path d="M170 169 L183 166 L195 176 L191 180 L171 177 Z" />
      </g>

      {/* Torso */}
      <path
        d="M136 62 Q151 56 166 62 L177 75 L169 112
           L172 124 Q151 132 130 124 L134 111 L126 77 Z"
        fill="url(#body)"
        stroke="#e1e6f0"
        strokeWidth="1.2"
      />

      {/* Neck and head */}
      <rect x="146" y="49" width="13" height="16" rx="4" fill="#8995ac" />
      <path
        d="M139 29 Q140 19 152 19 Q165 20 166 32
           L163 46 Q158 54 148 49 L141 43 Z"
        fill="url(#body)"
        stroke="#e1e6f0"
        strokeWidth="1"
      />

      {/* Arms */}
      <g fill="url(#body)" stroke="#e1e6f0" strokeWidth="1.2" strokeLinejoin="round">
        <path d="M130 66 L117 71 L101 94 L110 101 L128 83 L140 76 Z" />
        <path d="M117 91 L110 99 L94 120 L102 126 L121 108 L129 97 Z" />
        <path d="M170 66 L183 71 L199 91 L191 100 L175 82 L163 76 Z" />
        <path d="M191 90 L199 98 L214 115 L207 122 L188 106 L180 96 Z" />
        <path d="M94 119 L101 124 L98 134 L91 130 Z" />
        <path d="M207 117 L214 114 L219 124 L212 129 Z" />
      </g>

      {/* Skeleton joints */}
      <g fill="#e4b95a" stroke="#fff0c2" strokeWidth="1">
        <circle cx="134" cy="69" r="4" />
        <circle cx="117" cy="96" r="4" />
        <circle cx="105" cy="120" r="4" />
        <circle cx="169" cy="69" r="4" />
        <circle cx="194" cy="95" r="4" />
        <circle cx="210" cy="118" r="4" />
        <circle cx="151" cy="63" r="4" />
        <circle cx="151" cy="94" r="4" />
        <circle cx="151" cy="122" r="4" />
        <circle cx="139" cy="151" r="4" />
        <circle cx="171" cy="149" r="4" />
      </g>

      {/* Selected bone rotation gizmo */}
      <g transform="translate(117 96)">
        <circle r="17" fill="none" stroke="#e4b95a" strokeWidth="1.5" />
        <circle r="12" fill="none" stroke="#f4d88f" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M-17 0 A17 17 0 0 1 8 -15" fill="none" stroke="#e4b95a" strokeWidth="2" />
        <path d="M5 -16 L10 -15 L9 -10" fill="none" stroke="#e4b95a" strokeWidth="2" />
      </g>

      {/* Editor sidebar */}
      <rect x="238" y="15" width="69" height="170" rx="7" fill="#11182b" stroke="#303b59" />
      <text x="248" y="31" fill="#e4b95a" fontSize="8" fontWeight="600">POSE EDITOR</text>
      <line x1="247" y1="38" x2="298" y2="38" stroke="#303b59" />

      <text x="248" y="52" fill="#aab5cc" fontSize="7">Selected Bone</text>
      <rect x="247" y="58" width="51" height="17" rx="4" fill="#252c47" />
      <text x="254" y="69" fill="#f1d48b" fontSize="8">Left Arm</text>

      {[
        { label: "X", y: 91, width: 25 },
        { label: "Y", y: 119, width: 37 },
        { label: "Z", y: 147, width: 18 },
      ].map(({ label, y, width }) => (
        <g key={label}>
          <text x="248" y={y} fill="#aab5cc" fontSize="8">{label}</text>
          <rect x="260" y={y - 6} width="36" height="4" rx="2" fill="#303b59" />
          <rect x="260" y={y - 6} width={width} height="4" rx="2" fill="#e4b95a" />
          <circle cx={260 + width} cy={y - 4} r="3" fill="#f5dfa4" />
          <text x="260" y={y + 10} fill="#7f8ba6" fontSize="7">
            {label === "X" ? "45°" : label === "Y" ? "-20°" : "10°"}
          </text>
        </g>
      ))}

      <rect x="247" y="164" width="51" height="13" rx="4" fill="#252c47" />
      <text x="263" y="173" fill="#e4b95a" fontSize="8">Reset</text>
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
