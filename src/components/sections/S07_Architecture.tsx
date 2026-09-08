'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { MEDIA, SITE } from '@/lib/constants';

export default function S07_Architecture() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="architecture"
      data-section="architecture"
      ref={sectionRef}
      className="relative bg-[#FAF7F2] text-[#2C2C2C] overflow-hidden"
    >
      {/* ── Section Header ────────────────────────────── */}
      <div className="content-max pt-28 pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E0D8CC] pb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C09A6B]" />
              <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#8A8378] font-mono">
                FIG. 02 — ARCHITECTURAL MANIFESTO
              </span>
            </div>
            <h2 className="heading-editorial text-4xl sm:text-5xl md:text-6xl text-[#2C2C2C] font-normal tracking-tight">
              The Architecture
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#8A8378] font-light max-w-md leading-relaxed">
            Three 31-storey monolithic towers linked by Gujarat&apos;s first iconic suspended skywalk, 
            crafted for boundless light, airflow, and spatial generosity.
          </p>
        </div>
      </div>

      {/* ── Visual Journey: Act 1 — The Sculpted Silhouette ── */}
      <div className="arch-journey-stage relative w-full my-12 md:my-20" data-stage="1">
        <div className="content-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Frame */}
            <div className="lg:col-span-8 arch-visual-frame relative aspect-[16/10] sm:aspect-[21/10] overflow-hidden shadow-2xl bg-black">
              <Image
                src={MEDIA.towers.angled}
                alt="Harmony Harikesh — Angled perspective of 31-storey towers"
                fill
                className="arch-img object-cover object-center will-change-transform"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-4 left-6 text-[10px] font-mono tracking-widest text-white/70 uppercase">
                PERSPECTIVE 01 — ANGLED FACADE ELEVATION
              </span>
            </div>

            {/* Content Plate */}
            <div className="lg:col-span-4 arch-content-plate space-y-4">
              <div className="w-8 h-px bg-[#C09A6B]" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#C09A6B] block">
                STATURE & FORM
              </span>
              <h3 className="heading-editorial text-2xl sm:text-3xl text-[#2C2C2C] font-normal leading-snug">
                31 Storeys of Uncompromising Stature
              </h3>
              <p className="text-xs sm:text-sm text-[#8A8378] font-light leading-relaxed">
                Rising decisively over Science City Road, the towers boast clean vertical striations 
                and recessed glass balconies that frame unobstructed 360° horizon views across Ahmedabad.
              </p>
              <div className="pt-2 flex items-center gap-6 text-[11px] font-mono text-[#2C2C2C]/70">
                <div>
                  <span className="block text-[#C09A6B] font-bold text-base">31</span>
                  <span>Storeys</span>
                </div>
                <div className="w-px h-6 bg-[#E0D8CC]" />
                <div>
                  <span className="block text-[#C09A6B] font-bold text-base">3</span>
                  <span>Towers</span>
                </div>
                <div className="w-px h-6 bg-[#E0D8CC]" />
                <div>
                  <span className="block text-[#C09A6B] font-bold text-base">360°</span>
                  <span>Airspace</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Visual Journey: Act 2 — The Volumetric Arrival ── */}
      <div className="arch-journey-stage relative w-full my-16 md:my-28 bg-[#F3EDE4] py-16 md:py-24" data-stage="2">
        <div className="content-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content Plate (Left on Desktop) */}
            <div className="lg:col-span-4 arch-content-plate space-y-4 order-2 lg:order-1">
              <div className="w-8 h-px bg-[#C09A6B]" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#C09A6B] block">
                THE ARRIVAL
              </span>
              <h3 className="heading-editorial text-2xl sm:text-3xl text-[#2C2C2C] font-normal leading-snug">
                Volumetric Grandeur &amp; Textured Craft
              </h3>
              <p className="text-xs sm:text-sm text-[#8A8378] font-light leading-relaxed">
                Step into a grand entrance foyer defined by soaring double-height proportions, 
                woven bronze metallic screens, and acoustic serenity that separates the city from home.
              </p>
              <div className="p-4 bg-white/60 border border-[#E0D8CC] rounded-sm">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A8378] block mb-1">
                  ARRIVAL EXPERIENCE
                </span>
                <p className="text-xs text-[#2C2C2C] italic">
                  &ldquo;A tranquil architectural prelude designed to welcome you home with quiet authority.&rdquo;
                </p>
              </div>
            </div>

            {/* Visual Frame */}
            <div className="lg:col-span-8 arch-visual-frame relative aspect-[16/10] sm:aspect-[21/10] overflow-hidden shadow-2xl bg-black order-1 lg:order-2">
              <Image
                src={MEDIA.architecture.entrance}
                alt="Harmony Harikesh — Grand entrance foyer interior"
                fill
                className="arch-img object-cover object-center will-change-transform"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-4 left-6 text-[10px] font-mono tracking-widest text-white/70 uppercase">
                PERSPECTIVE 02 — THE ENTRANCE FOYER
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Visual Journey: Act 3 — Curated Social Solitude ── */}
      <div className="arch-journey-stage relative w-full my-16 md:my-28" data-stage="3">
        <div className="content-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Frame */}
            <div className="lg:col-span-8 arch-visual-frame relative aspect-[16/10] sm:aspect-[21/10] overflow-hidden shadow-2xl bg-black">
              <Image
                src={MEDIA.architecture.clubhouse}
                alt="Harmony Harikesh — Exclusive private clubhouse lounge"
                fill
                className="arch-img object-cover object-center will-change-transform"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-4 left-6 text-[10px] font-mono tracking-widest text-white/70 uppercase">
                PERSPECTIVE 03 — THE RESIDENTS&apos; CLUBHOUSE LOUNGE
              </span>
            </div>

            {/* Content Plate */}
            <div className="lg:col-span-4 arch-content-plate space-y-4">
              <div className="w-8 h-px bg-[#C09A6B]" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#C09A6B] block">
                HOSPITALITY &amp; LEISURE
              </span>
              <h3 className="heading-editorial text-2xl sm:text-3xl text-[#2C2C2C] font-normal leading-snug">
                The Private Clubhouse Sanctuary
              </h3>
              <p className="text-xs sm:text-sm text-[#8A8378] font-light leading-relaxed">
                An evening retreat bathed in warm architectural lighting. Deep velvet armchairs, 
                bespoke walnut millwork, and private hosting lounges crafted for meaningful gatherings.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-[#2C2C2C]/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C09A6B]" />
                  <span>Private Entertainment Suites</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C09A6B]" />
                  <span>Dedicated Fitness &amp; Wellness Floor</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C09A6B]" />
                  <span>Bespoke Indoor Sports Arena</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Visual Journey: Act 4 — Suspended Skywalk & Sky Living ── */}
      <div className="arch-journey-stage relative w-full my-16 md:my-28 bg-[#1A1A1A] text-white py-20 md:py-32" data-stage="4">
        <div className="content-max">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 bg-[#C09A6B] text-white text-[9px] tracking-[0.25em] uppercase font-mono mb-4">
              ICONIC ENGINEERING
            </div>
            <h3 className="heading-editorial text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-4">
              Suspended Skywalk &amp; Sky Deck
            </h3>
            <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
              Gujarat&apos;s first architectural skywalk suspended hundreds of feet in the air, 
              connecting the three towers into a single panoramic rooftop lifestyle destination.
            </p>
          </div>

          {/* Full Panoramic Visual Frame */}
          <div className="arch-visual-frame relative w-full aspect-[21/9] sm:aspect-[24/9] overflow-hidden shadow-2xl border border-white/10">
            <Image
              src={MEDIA.architecture.skyDeck}
              alt="Harmony Harikesh — Aerial perspective of suspended sky deck and amenities"
              fill
              className="arch-img object-cover object-center will-change-transform"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end text-white/70 text-[10px] font-mono tracking-widest uppercase">
              <span>PERSPECTIVE 04 — AERIAL SKY DECK AMENITIES</span>
              <span className="hidden sm:inline">ELEVATED LIFESTYLE HORIZONS</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Visual Journey: Act 5 — The Skyline Climax ── */}
      <div className="arch-journey-stage relative w-full mt-16 md:mt-24 mb-12" data-stage="5">
        <div className="content-max">
          <div className="arch-visual-frame relative w-full aspect-[21/9] sm:aspect-[24/9] overflow-hidden shadow-xl">
            <Image
              src={MEDIA.towers.skyline}
              alt="Harmony Harikesh — Skyline view at Science City Road"
              fill
              className="arch-img object-cover object-center will-change-transform"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 sm:left-12 max-w-2xl text-white">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#C09A6B] uppercase block mb-2">
                PERSPECTIVE 05 — THE COMPLETE ENSEMBLE
              </span>
              <h4 className="heading-editorial text-2xl sm:text-4xl font-normal leading-snug">
                Redefining the Science City Skyline
              </h4>
              <p className="text-xs sm:text-sm text-white/70 font-light mt-2 max-w-lg">
                4 BHK Sky Living with dual living room layouts designed for generations of elevated comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
