'use client';

import Image from 'next/image';
import { MEDIA, SITE, CONTACT } from '@/lib/constants';

export default function S04_FullscreenVideo() {
  return (
    <section
      id="campaign-artwork"
      data-section="campaign-artwork"
      className="relative w-full min-h-[120vh] md:min-h-[135vh] bg-[#070A10] text-white flex items-center justify-center overflow-hidden py-16 md:py-24"
    >
      {/* 
        Zoomed-Out Neon Wireframe Towers (background-main.webp)
        Displays full 31-storey towers, rooftop skybridge, and ground roads in crisp proportions.
      */}
      <div className="neon-bg-container absolute inset-0 w-full h-full flex items-center justify-center p-3 sm:p-6 md:p-10 pointer-events-none">
        <div className="relative w-full h-full max-w-[1600px] max-h-[92vh]">
          <Image
            src={MEDIA.neonBackground}
            alt="Harmony Harikesh — 31-Storey Wireframe Architectural Towers"
            fill
            className="neon-bg-img object-contain object-center will-change-transform"
            priority
            sizes="100vw"
          />
        </div>
        {/* Soft edge radial gradient for atmospheric depth */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#070A10]/25 to-[#070A10]/90 pointer-events-none" />
      </div>

      {/* Top Branding Bar */}
      <div className="absolute top-6 sm:top-8 left-6 sm:left-12 right-6 sm:right-12 flex justify-between items-center z-20 pointer-events-none">
        <div className="flex items-center gap-3.5">
          <Image
            src={MEDIA.logo}
            alt={SITE.name}
            width={44}
            height={44}
            className="w-9 h-9 sm:w-11 sm:h-11 object-contain"
          />
          <div className="border-l border-white/20 pl-3.5 hidden sm:block">
            <span className="block text-xs font-medium tracking-[0.22em] uppercase text-[#C09A6B]">
              HARMONY HARIKESH
            </span>
            <span className="block text-[9px] tracking-[0.28em] uppercase text-white/50">
              ADVAITYA PROJECTS
            </span>
          </div>
        </div>

        <div>
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/15 text-[9px] sm:text-[10px] font-mono tracking-[0.2em] uppercase text-white/90">
            GUJARAT&apos;S FIRST ICONIC PROJECT · READY TO MOVE
          </span>
        </div>
      </div>

      {/* 
        Right-Hand Side Editorial Typography Plate
        Positioned strictly on the right side as requested by user.
      */}
      <div className="neon-text-plate absolute right-6 sm:right-10 md:right-16 lg:right-20 top-1/2 -translate-y-1/2 max-w-lg z-20 text-right pointer-events-none will-change-transform">
        <div className="inline-block px-3 py-1 bg-black/60 backdrop-blur-md border border-[#C09A6B]/30 text-[9px] sm:text-[10px] font-mono tracking-[0.25em] uppercase text-[#C09A6B] mb-4">
          31-STOREY LANDMARK
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-light italic text-white tracking-tight leading-tight mb-6 drop-shadow-2xl">
          Identity Of <br />
          <span className="not-italic font-normal text-[#C09A6B]">Science City...</span>
        </h2>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-end gap-2.5 sm:gap-3 mb-6 text-[10px] sm:text-[11px] font-mono tracking-wider uppercase">
          <span className="px-3.5 py-1.5 bg-black/75 backdrop-blur-md border border-[#C09A6B]/50 text-white/95 shadow-lg">
            2 LIVING ROOM CONCEPT
          </span>
          <span className="px-3.5 py-1.5 bg-black/75 backdrop-blur-md border border-[#C09A6B]/50 text-white/95 shadow-lg">
            360° PANORAMIC VIEWS
          </span>
        </div>

        <p className="text-xl sm:text-2xl md:text-3xl font-normal tracking-[0.18em] uppercase text-white mb-3">
          4 BHK SKY LIVING
        </p>

        <p className="text-xs sm:text-sm font-mono tracking-widest text-[#C09A6B]">
          CALL: {CONTACT.phoneDisplay}
        </p>
      </div>

      {/* Bottom Coordinates & RERA */}
      <div className="absolute bottom-6 left-6 sm:left-12 right-6 sm:right-12 flex justify-between items-end text-[10px] font-mono tracking-widest text-white/45 pointer-events-none z-20">
        <div>
          <span>SCIENCE CITY ROAD · AHMEDABAD</span>
        </div>
        <div>
          <span>RERA: {SITE.rera}</span>
        </div>
      </div>
    </section>
  );
}


