'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { MEDIA, SITE } from '@/lib/constants';

export default function S09_MoveSettlePointReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="lifestyle"
      data-section="move-settle-point-reveal"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#FAF7F2] overflow-hidden py-24"
    >
      {/* Urvashi Reveal Infrastructure */}
      <div
        data-urvashi-reveal
        data-anchor="finger"
        data-state="idle"
        className="relative w-full"
      >
        {/* 
          Content that reveals strictly AFTER Urvashi moves, settles, and points.
          The clipPath origin is dynamically calculated from her fingertip position.
        */}
        <div
          className="reveal-content-container relative w-full opacity-0 will-change-transform"
          style={{
            clipPath: 'circle(0% at 30% 40%)',
          }}
        >
          <div className="content-max">
            {/* Section Heading */}
            <div className="mb-14 border-b border-[#E0D8CC] pb-8">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#8A8378] block mb-3">
                FIG. 05 — THE LIVING EXPERIENCE
              </span>
              <h2 className="heading-editorial text-4xl sm:text-5xl md:text-6xl text-[#2C2C2C] font-normal">
                Beyond Living
              </h2>
              <p className="text-sm sm:text-base text-[#8A8378] font-light max-w-xl mt-4 leading-relaxed">
                Where every square foot is orchestrated around natural light, cross-ventilation, 
                and generous double living areas crafted for multigenerational elegance.
              </p>
            </div>

            {/* Editorial Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Feature Image */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden shadow-2xl bg-black rounded-sm">
                  <Image
                    src={MEDIA.architecture.clubhouse}
                    alt="Premium clubhouse and lifestyle amenities at Harmony Harikesh"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute bottom-4 left-6 text-[10px] font-mono tracking-widest text-white/80 uppercase">
                    THE CLUBHOUSE &amp; PRIVATE LOUNGES
                  </div>
                </div>
              </div>

              {/* Specification & Callout Details */}
              <div className="lg:col-span-5 space-y-6">
                <div className="w-10 h-px bg-[#C09A6B]" />
                <h3 className="heading-editorial text-2xl sm:text-3xl text-[#2C2C2C] font-normal leading-snug">
                  4 BHK Sky Living
                </h3>
                <p className="text-xs sm:text-sm text-[#8A8378] font-light leading-relaxed">
                  Engineered with an expansive 2-Living-Room concept, generous master suites, 
                  and full-length glass apertures capturing 360° unobstructed Ahmedabad horizons.
                </p>

                <ul className="space-y-3 pt-2">
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-[#2C2C2C]">
                    <span className="w-2 h-2 rounded-full bg-[#C09A6B]" />
                    <span>2 Distinct Living Room Ensembles</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-[#2C2C2C]">
                    <span className="w-2 h-2 rounded-full bg-[#C09A6B]" />
                    <span>360° Panoramic Light &amp; Airflow Exposure</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-[#2C2C2C]">
                    <span className="w-2 h-2 rounded-full bg-[#C09A6B]" />
                    <span>Suspended Skywalk Connectivity</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-[#2C2C2C]">
                    <span className="w-2 h-2 rounded-full bg-[#C09A6B]" />
                    <span className="font-medium text-[#C09A6B]">{SITE.status} — Ready to Move</span>
                  </li>
                </ul>

                <div className="pt-4">
                  <a
                    href="#enquire"
                    className="inline-flex items-center gap-3 bg-[#2C2C2C] text-white px-8 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#C09A6B] transition-colors duration-300 shadow-md"
                  >
                    <span>Schedule a Private Viewing</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
