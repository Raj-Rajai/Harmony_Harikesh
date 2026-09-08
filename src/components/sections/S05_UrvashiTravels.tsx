'use client';

import { useRef } from 'react';

export default function S05_UrvashiTravels() {
  const stageRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="urvashi-travels"
      data-section="urvashi-travels"
      ref={stageRef}
      className="relative w-full h-[150vh] overflow-hidden bg-black"
    >
      {/* 
        Scroll Stage: The persistent Urvashi foreground layer travels 
        smoothly Center -> Left + Diagonally across this distance while the background transitions.
      */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111111] to-[#FAF7F2] transition-colors" />
        
        {/* Subtle typography passing in background */}
        <div className="travel-backdrop-text text-center px-6 opacity-0 will-change-transform">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C09A6B] block mb-2 font-mono">
            THE REVEAL
          </span>
          <p className="heading-editorial text-2xl md:text-4xl text-white/80 font-light">
            An Iconic Horizon Unfolds
          </p>
        </div>
      </div>
    </section>
  );
}
