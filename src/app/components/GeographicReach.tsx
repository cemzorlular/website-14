'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './GeographicReach.module.css';

// Er-Kim market countries (ISO Alpha-2 codes)
// Nordics, Baltics, Central-Eastern Europe, Balkans, Central Asia, Caucasus
const ER_KIM_MARKETS = new Set([
  // Nordics
  'NO', 'SE', 'DK', 'FI', 'IS',
  // Baltics
  'EE', 'LV', 'LT',
  // Central-Eastern Europe
  'PL', 'CZ', 'SK', 'HU', 'RO', 'BG', 'UA', 'SI', 'HR', 'BY', 'MD',
  // Balkans
  'AL', 'BA', 'ME', 'MK', 'RS', 'GR', 'XK',
  // Central Asia
  'KZ', 'UZ', 'TM', 'TJ', 'KG',
  // Caucasus
  'AZ', 'GE', 'AM',
  // Turkey & Middle East
  'TR', 'IQ', 'IR', 'LB', 'JO', 'SY',
  // Other
  'AT', 'CH', 'CY', 'MT',
]);

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  name: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LeafletMap = any;

export default function GeographicReach() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<LeafletMap>(null);
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    name: '',
  });

  useEffect(() => {
    if (mapInstance.current) return;

    // Inject Leaflet CSS
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    // Load Leaflet JS dynamically
    if (document.getElementById('leaflet-js')) {
      initMap();
      return;
    }

    const script = document.createElement('script');
    script.id = 'leaflet-js';
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = () => initMap();
    document.head.appendChild(script);

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function initMap() {
    if (!mapRef.current || mapInstance.current) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const L = (window as any).L;
    if (!L) return;

    const map = L.map(mapRef.current, {
      center: [52, 40],
      zoom: 3,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      dragging: true,
    });

    mapInstance.current = map;

    // CartoDB dark tiles — no API key required
    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
      { subdomains: 'abcd', maxZoom: 20 }
    ).addTo(map);

    // Zoom control
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Fetch world country GeoJSON
    try {
      const res = await fetch(
        'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson'
      );
      const data = await res.json();

      L.geoJSON(data, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        style: (feature: any) => {
          const iso: string = feature?.properties?.ISO_A2 ?? '';
          const isMarket = ER_KIM_MARKETS.has(iso);
          return {
            color: isMarket ? '#0077aa' : '#1a2635',
            weight: isMarket ? 1 : 0.5,
            fillColor: isMarket ? '#00c2e0' : '#0d1b2a',
            fillOpacity: isMarket ? 0.55 : 0.8,
          };
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onEachFeature: (feature: any, layer: any) => {
          const name: string = feature?.properties?.ADMIN ?? '';
          const iso: string = feature?.properties?.ISO_A2 ?? '';
          const isMarket = ER_KIM_MARKETS.has(iso);

          if (isMarket) {
            layer.on('mouseover', (e: { latlng: unknown }) => {
              layer.setStyle({
                fillColor: '#00e5ff',
                fillOpacity: 0.8,
                weight: 2,
                color: '#00e5ff',
              });
              const pt = map.latLngToContainerPoint(e.latlng);
              setTooltip({ visible: true, x: pt.x, y: pt.y, name });
            });

            layer.on('mouseout', () => {
              layer.setStyle({
                fillColor: '#00c2e0',
                fillOpacity: 0.55,
                weight: 1,
                color: '#0077aa',
              });
              setTooltip((prev) => ({ ...prev, visible: false }));
            });

            layer.on('mousemove', (e: { latlng: unknown }) => {
              const pt = map.latLngToContainerPoint(e.latlng);
              setTooltip((prev) => ({ ...prev, x: pt.x, y: pt.y }));
            });
          }
        },
      }).addTo(map);
    } catch (err) {
      console.error('Failed to load countries GeoJSON:', err);
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        {/* Left: section number */}
        <div className={styles.sectionNumber}>02</div>

        {/* Right: text content */}
        <div className={styles.content}>
          <p className={styles.label}>GEOGRAPHIC REACH</p>
          <h2 className={styles.heading}>
            49 markets
            <br />
            <em className={styles.headingItalic}>one infrastructure.</em>
          </h2>
          <p className={styles.description}>
            Er-Kim&rsquo;s direct commercial presence spans the Nordics,
            Central-Eastern Europe, Baltics, Balkans, and Central Asia —
            territories where regulatory and access complexity demands embedded
            local expertise.
          </p>
        </div>
      </div>

      {/* Interactive Leaflet map */}
      <div className={styles.mapWrapper}>
        <div ref={mapRef} className={styles.map} />
        {tooltip.visible && (
          <div
            className={styles.tooltip}
            style={{ left: tooltip.x + 12, top: tooltip.y - 36 }}
          >
            {tooltip.name}
          </div>
        )}
      </div>
    </section>
  );
}
