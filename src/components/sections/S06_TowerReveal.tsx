'use client';

import Image from 'next/image';
import { MEDIA } from '@/lib/constants';

export default function S06_TowerReveal() {
  return (
    <section
      id="tower-reveal"
      data-section="tower-reveal"
      className="relative w-full h-screen overflow-hidden bg-[#FAF7F2]"
    >
      {/* 
        Architectural Tower Reveal Layer:
        Activated by Urvashi's pointing gesture. Expands radially from her fingertip.
      */}
      <div
        className="tower-reveal-mask relative w-full h-full overflow-hidden will-change-transform"
        data-reveal-origin="finger"
        style={{
          clipPath: 'circle(0% at 30% 50%)',
          opacity: 0,
        }}
      >
        <div className="relative w-full h-full scale-105 tower-img-container">
          <Image
            src={MEDIA.towers.front}
            alt="Harmony Harikesh — Three Iconic Towers Activated by Gesture"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          {/* Architectural overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        {/* Revealed Architectural Title & Coordinates */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-20">
          <div className="content-max">
            <div className="inline-block px-3 py-1 bg-[#C09A6B] text-white text-[9px] tracking-[0.25em] uppercase font-mono mb-3">
              ACT 01 — THE ELEVATION
            </div>
            <h2 className="heading-editorial text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight max-w-3xl">
              Three Iconic Towers, <br />
              <span className="italic font-light text-white/90">One Singular Skyline.</span>
            </h2>
            <p className="text-white/60 text-xs sm:text-sm font-light tracking-wide max-w-xl mt-4">
              Standing tall at Science City Road — 31 storeys of refined vertical grandeur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
