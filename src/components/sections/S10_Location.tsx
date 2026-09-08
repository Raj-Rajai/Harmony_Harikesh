import { MAPS_URL, SITE } from '@/lib/constants';

export default function S10_Location() {
  return (
    <section
      id="location"
      data-section="location"
      className="relative bg-dark-surface text-white overflow-hidden"
    >
      <div className="relative section-padding">
        <div className="content-max">
          {/* Section header */}
          <div className="mb-16 md:mb-24">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/30 block mb-4">
              FIG. 08.3 — NORTHWEST AHMEDABAD ARTERIAL CARTOGRAPHY
            </span>
            <h2 className="heading-editorial text-white text-3xl md:text-5xl lg:text-6xl">
              The Location
            </h2>
          </div>

          {/* Custom Cartographic Map */}
          <div className="relative w-full aspect-[16/10] md:aspect-[21/9] border border-white/10 overflow-hidden">
            {/* Map grid background */}
            <div className="absolute inset-0">
              {/* Grid lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                    <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Arterial Roads */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
                {/* S.G. Highway — major vertical arterial */}
                <line x1="250" y1="0" x2="250" y2="500" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                <text x="255" y="30" className="fill-white/20 text-[10px]" fontFamily="monospace">S.G. HIGHWAY</text>

                {/* Science City Road — horizontal */}
                <line x1="0" y1="250" x2="1000" y2="250" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                <text x="500" y="240" className="fill-white/20 text-[10px]" fontFamily="monospace" textAnchor="middle">SCIENCE CITY ROAD</text>

                {/* S.P. Ring Road — curved/angled */}
                <path d="M 0 400 Q 500 300 1000 350" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="8,4" />
                <text x="800" y="340" className="fill-white/20 text-[10px]" fontFamily="monospace">S.P. RING ROAD</text>

                {/* Science City marker */}
                <circle cx="650" cy="200" r="20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <text x="680" y="205" className="fill-white/25 text-[9px]" fontFamily="monospace">SCIENCE CITY</text>

                {/* HARMONY HARIKESH — primary marker */}
                <circle cx="450" cy="280" r="6" fill="#C09A6B" />
                <circle cx="450" cy="280" r="12" fill="none" stroke="#C09A6B" strokeWidth="1" opacity="0.6" />
                <circle cx="450" cy="280" r="20" fill="none" stroke="#C09A6B" strokeWidth="0.5" opacity="0.3" />

                {/* Label */}
                <text x="450" y="315" className="fill-white text-[11px] font-medium" fontFamily="monospace" textAnchor="middle">HARMONY HARIKESH</text>
                <text x="450" y="330" className="fill-white/40 text-[8px]" fontFamily="monospace" textAnchor="middle">23.0525° N · 72.5134° E</text>
              </svg>

              {/* Coordinate markers */}
              <div className="absolute top-4 left-4 text-[9px] font-mono text-white/20 leading-relaxed">
                <div>N 23° 03&apos;</div>
                <div>E 72° 30&apos;</div>
              </div>

              {/* Scale */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <div className="w-16 h-px bg-white/20" />
                <span className="text-[8px] font-mono text-white/20">1 KM</span>
              </div>
            </div>
          </div>

          {/* CTA + Info */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 gap-8">
            <div>
              <h3 className="text-white/80 text-sm font-medium tracking-wide mb-2">Science City Road, Ahmedabad</h3>
              <p className="text-white/30 text-xs">Northwest Ahmedabad · Gujarat · India</p>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent text-xs font-medium tracking-[0.15em] uppercase hover:text-white transition-colors group"
            >
              View on Google Maps
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
