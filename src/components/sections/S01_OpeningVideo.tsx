import Image from 'next/image';
import { MEDIA, SITE } from '@/lib/constants';

export default function S01_Hero() {
  return (
    <section
      id="hero"
      data-section="hero"
      className="relative w-full h-screen overflow-hidden bg-[#1A1A1A] text-white"
    >
      {/* Background Architectural Hero Image with Parallax Hook */}
      <div className="hero-bg-container absolute inset-0 w-full h-full scale-105 will-change-transform">
        <Image
          src={MEDIA.towers.front}
          alt="Harmony Harikesh — 31-Storey Iconic Towers at Science City Road, Ahmedabad"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Architectural atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/75 pointer-events-none" />
      </div>

      {/* Architectural Grid & Framing Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between border-x border-white/5">
          <div className="w-px h-full bg-white/5 hidden lg:block" />
          <div className="w-px h-full bg-white/5 hidden lg:block" />
        </div>
      </div>

      {/* Hero Plate Content */}
      <div className="relative z-10 h-full flex flex-col justify-between pt-28 pb-12 md:pb-16 content-max">
        {/* Top Metadata Bar */}
        <div className="flex justify-between items-start text-white/50 text-[10px] tracking-[0.25em] uppercase font-mono">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C09A6B] animate-pulse" />
            SCIENCE CITY ROAD, AHMEDABAD
          </span>
          <span className="hidden sm:inline">31-STOREY SKY LIVING</span>
        </div>

        {/* Center / Lower Hero Typographic Composition */}
        <div className="max-w-4xl">
          {/* Architectural Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-6">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C09A6B]">
              GUJARAT&apos;S FIRST ICONIC RESIDENTIAL LANDMARK
            </span>
          </div>

          {/* Grand Headline */}
          <h1 className="heading-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-tight leading-[1.05] mb-6">
            Harmony <br className="hidden sm:block" />
            <span className="italic font-light text-white/90">Harikesh</span>
          </h1>

          {/* Editorial Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white/75 font-light max-w-2xl leading-relaxed mb-8">
            An architectural marvel of 31-storey towers crafted for pure spatial volume, 
            suspended skywalks, and 360° panoramic skies over Ahmedabad.
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-white/15 text-xs text-white/70 tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#C09A6B]" />
              <span>4 BHK Sky Living</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#C09A6B]" />
              <span>2 Living Room Concept</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#C09A6B]" />
              <span>Suspended Skywalk</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Scroll Prompt */}
        <div className="flex justify-between items-end pt-6 border-t border-white/10">
          <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
            FIG. 01 — ARCHITECTURAL HORIZON
          </div>

          <div className="flex items-center gap-3 text-white/50 text-[10px] tracking-[0.2em] uppercase">
            <span>Scroll To Explore</span>
            <div className="w-8 h-px bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
