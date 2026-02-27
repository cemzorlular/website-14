'use client';

import { useState } from 'react';

type RegionName = 'Nordic' | 'Baltic' | 'Central-Eastern Europe' | 'Balkans' | 'Central Asia';

type Market = {
  id: string;
  name: string;
  region: RegionName;
  cx: number;
  cy: number;
};

const REGION_COLORS: Record<RegionName, string> = {
  Nordic: '#2ECBF6',
  Baltic: '#00A5CF',
  'Central-Eastern Europe': '#1A7A99',
  Balkans: '#0D5C75',
  'Central Asia': '#FF6F3C',
};

// Equirectangular projection
// Longitude range: -15 to 90  (105°)
// Latitude range:  33 to 72   (39°)
// ViewBox: 900 × 450
// x = (lon + 15) / 105 * 900
// y = (72 - lat) / 39  * 450
const MARKETS: Market[] = [
  // Nordic
  { id: 'no', name: 'Norway', region: 'Nordic', cx: 220, cy: 141 },
  { id: 'se', name: 'Sweden', region: 'Nordic', cx: 283, cy: 146 },
  { id: 'dk', name: 'Denmark', region: 'Nordic', cx: 236, cy: 188 },
  { id: 'fi', name: 'Finland', region: 'Nordic', cx: 356, cy: 128 },
  // Baltic
  { id: 'ee', name: 'Estonia', region: 'Baltic', cx: 352, cy: 150 },
  { id: 'lv', name: 'Latvia', region: 'Baltic', cx: 334, cy: 174 },
  { id: 'lt', name: 'Lithuania', region: 'Baltic', cx: 345, cy: 200 },
  // Central-Eastern Europe
  { id: 'pl', name: 'Poland', region: 'Central-Eastern Europe', cx: 308, cy: 228 },
  { id: 'cz', name: 'Czech Republic', region: 'Central-Eastern Europe', cx: 252, cy: 253 },
  { id: 'sk', name: 'Slovakia', region: 'Central-Eastern Europe', cx: 277, cy: 275 },
  { id: 'hu', name: 'Hungary', region: 'Central-Eastern Europe', cx: 292, cy: 282 },
  { id: 'ro', name: 'Romania', region: 'Central-Eastern Europe', cx: 349, cy: 318 },
  { id: 'bg', name: 'Bulgaria', region: 'Central-Eastern Europe', cx: 326, cy: 338 },
  { id: 'hr', name: 'Croatia', region: 'Central-Eastern Europe', cx: 266, cy: 303 },
  // Balkans
  { id: 'rs', name: 'Serbia', region: 'Balkans', cx: 303, cy: 313 },
  { id: 'ba', name: 'Bosnia & Herzegovina', region: 'Balkans', cx: 280, cy: 325 },
  { id: 'me', name: 'Montenegro', region: 'Balkans', cx: 290, cy: 342 },
  { id: 'xk', name: 'Kosovo', region: 'Balkans', cx: 311, cy: 340 },
  { id: 'mk', name: 'North Macedonia', region: 'Balkans', cx: 320, cy: 354 },
  { id: 'al', name: 'Albania', region: 'Balkans', cx: 299, cy: 358 },
  // Central Asia
  { id: 'ge', name: 'Georgia', region: 'Central Asia', cx: 514, cy: 349 },
  { id: 'am', name: 'Armenia', region: 'Central Asia', cx: 512, cy: 369 },
  { id: 'az', name: 'Azerbaijan', region: 'Central Asia', cx: 558, cy: 362 },
  { id: 'kz', name: 'Kazakhstan', region: 'Central Asia', cx: 745, cy: 240 },
  { id: 'uz', name: 'Uzbekistan', region: 'Central Asia', cx: 722, cy: 353 },
  { id: 'tm', name: 'Turkmenistan', region: 'Central Asia', cx: 630, cy: 390 },
  { id: 'kg', name: 'Kyrgyzstan', region: 'Central Asia', cx: 772, cy: 336 },
  { id: 'tj', name: 'Tajikistan', region: 'Central Asia', cx: 718, cy: 383 },
];

const LAT_LINES = [40, 45, 50, 55, 60, 65, 70];
const LON_LINES = [-10, 0, 10, 20, 30, 40, 50, 60, 70, 80];

function latToY(lat: number): number {
  return Math.round(((72 - lat) / 39) * 450);
}

function lonToX(lon: number): number {
  return Math.round(((lon + 15) / 105) * 900);
}

export function Markets() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const hoveredMarket = MARKETS.find((m) => m.id === hoveredId) ?? null;

  return (
    <div>
      {/* Section header */}
      <div style={{ marginBottom: 'var(--space-10)' }}>
        <p
          style={{
            fontFamily: 'var(--font-mono, monospace)',
            color: 'var(--cyan)',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 'var(--space-4)',
          }}
        >
          02 — Geographic Reach
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-serif, serif)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: 1.05,
            marginBottom: 'var(--space-5)',
            color: 'var(--cream)',
          }}
        >
          49 markets
          <br />
          <em style={{ color: 'var(--orange)' }}>one infrastructure.</em>
        </h2>
        <p
          style={{
            color: 'var(--body-text)',
            maxWidth: '640px',
            lineHeight: 1.75,
            fontSize: '1.0625rem',
          }}
        >
          Er-Kim&apos;s direct commercial presence spans the Nordics, Central-Eastern
          Europe, Baltics, Balkans, and Central Asia — territories where regulatory and
          access complexity demands embedded local expertise.
        </p>
      </div>

      {/* Interactive map */}
      <div
        style={{
          background: 'var(--card-surface)',
          border: '1px solid var(--card-border)',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <svg
          viewBox="0 0 900 450"
          style={{ display: 'block', width: '100%' }}
          role="img"
          aria-label="Interactive map of Er-Kim market presence across Europe and Central Asia"
        >
          <defs>
            <filter id="market-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background */}
          <rect width="900" height="450" fill="var(--card-surface)" />

          {/* Latitude grid lines */}
          {LAT_LINES.map((lat) => (
            <line
              key={`lat-${lat}`}
              x1="0"
              y1={latToY(lat)}
              x2="900"
              y2={latToY(lat)}
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
            />
          ))}

          {/* Longitude grid lines */}
          {LON_LINES.map((lon) => (
            <line
              key={`lon-${lon}`}
              x1={lonToX(lon)}
              y1="0"
              x2={lonToX(lon)}
              y2="450"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
            />
          ))}

          {/* Latitude labels */}
          {LAT_LINES.map((lat) => (
            <text
              key={`lat-lbl-${lat}`}
              x="8"
              y={latToY(lat) - 4}
              fill="rgba(255,255,255,0.12)"
              fontSize="9"
              fontFamily="monospace"
            >
              {lat}°N
            </text>
          ))}

          {/* Longitude labels */}
          {LON_LINES.filter((l) => l >= 0).map((lon) => (
            <text
              key={`lon-lbl-${lon}`}
              x={lonToX(lon) + 4}
              y="14"
              fill="rgba(255,255,255,0.12)"
              fontSize="9"
              fontFamily="monospace"
            >
              {lon}°E
            </text>
          ))}

          {/* Market markers */}
          {MARKETS.map((market) => {
            const color = REGION_COLORS[market.region];
            const isHovered = hoveredId === market.id;
            const isDimmed = hoveredId !== null && !isHovered;

            return (
              <g key={market.id} style={{ cursor: 'pointer' }}>
                {/* Pulse ring */}
                <circle
                  cx={market.cx}
                  cy={market.cy}
                  r={isHovered ? 16 : 11}
                  fill="none"
                  stroke={color}
                  strokeWidth="1"
                  opacity={isHovered ? 0.6 : 0.18}
                  style={{ transition: 'all 0.15s ease' }}
                />
                {/* Main dot */}
                <circle
                  cx={market.cx}
                  cy={market.cy}
                  r={isHovered ? 7 : 5}
                  fill={color}
                  opacity={isDimmed ? 0.25 : 1}
                  filter={isHovered ? 'url(#market-glow)' : undefined}
                  style={{ transition: 'all 0.15s ease' }}
                  onMouseEnter={() => setHoveredId(market.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  aria-label={`${market.name} — ${market.region}`}
                />
              </g>
            );
          })}

          {/* Tooltip */}
          {hoveredMarket &&
            (() => {
              const TW = 140;
              const TH = 42;
              let tx = hoveredMarket.cx - TW / 2;
              let ty = hoveredMarket.cy - 18 - TH;
              tx = Math.max(6, Math.min(900 - TW - 6, tx));
              ty = Math.max(6, ty);
              const color = REGION_COLORS[hoveredMarket.region];

              return (
                <g style={{ pointerEvents: 'none' }}>
                  <rect
                    x={tx}
                    y={ty}
                    width={TW}
                    height={TH}
                    rx="6"
                    fill="#1A2236"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                  />
                  {/* Top accent line in region color */}
                  <rect x={tx} y={ty} width={TW} height="2" rx="6" fill={color} />
                  <text
                    x={tx + TW / 2}
                    y={ty + 17}
                    textAnchor="middle"
                    fill="#FAF7F2"
                    fontSize="12"
                    fontWeight="600"
                    fontFamily="sans-serif"
                  >
                    {hoveredMarket.name}
                  </text>
                  <text
                    x={tx + TW / 2}
                    y={ty + 32}
                    textAnchor="middle"
                    fill={color}
                    fontSize="8"
                    fontFamily="monospace"
                    letterSpacing="0.08em"
                  >
                    {hoveredMarket.region.toUpperCase()}
                  </text>
                </g>
              );
            })()}
        </svg>

        {/* Legend */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px 24px',
            padding: '14px 24px',
            borderTop: '1px solid var(--card-border)',
          }}
        >
          {(Object.entries(REGION_COLORS) as [RegionName, string][]).map(([region, color]) => (
            <div key={region} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: color,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: 'var(--cool-gray)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  fontFamily: 'var(--font-mono, monospace)',
                  textTransform: 'uppercase',
                }}
              >
                {region}
              </span>
            </div>
          ))}
          <span
            style={{
              marginLeft: 'auto',
              color: 'var(--cool-gray)',
              fontSize: '0.7rem',
              fontFamily: 'var(--font-mono, monospace)',
              opacity: 0.6,
            }}
          >
            Hover to explore
          </span>
        </div>
      </div>
    </div>
  );
}
