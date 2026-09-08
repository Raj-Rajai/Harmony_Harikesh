'use client';

import { useRef } from 'react';

export default function S08_UrvashiReturns() {
  const stageRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="urvashi-returns"
      data-section="urvashi-returns"
      ref={stageRef}
      className="relative w-full h-[150vh] overflow-hidden bg-[#FAF7F2]"
    >
      {/* 
        Stage for Urvashi's Return:
        The persistent Urvashi foreground layer enters from her left-side trajectory,
        maintains the exact same X-axis relationship, and smoothly glides to her new lifestyle Y coordinates.
      */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none">
        <div className="text-center px-6 opacity-0 return-backdrop-text">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#C09A6B] block mb-2">
            CHAPTER 02 — THE LIVING EXPERIENCE
          </span>
          <p className="heading-editorial text-2xl md:text-3xl text-[#2C2C2C]/80 font-light">
            Crafted for Unmatched Everyday Grandeur
          </p>
        </div>
      </div>
    </section>
  );
}
