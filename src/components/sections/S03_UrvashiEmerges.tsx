'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { MEDIA } from '@/lib/constants';

export default function S03_UrvashiEmerges() {
  const layerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="urvashi-emerges"
      data-section="urvashi-emerges"
      className="relative w-full h-0 pointer-events-none"
    >
      {/* 
        Persistent Urvashi Foreground Character Layer (using urvashi-scrolling.webp)
        Default style is strictly hidden (opacity: 0, visibility: hidden) to prevent 
        ANY flash or popup on page load or refresh.
      */}
      <div
        ref={layerRef}
        id="urvashi-character-layer"
        className="fixed inset-0 z-10 flex items-end justify-center pointer-events-none will-change-transform"
        data-urvashi-state="idle"
        style={{
          opacity: 0,
          visibility: 'hidden',
          transformOrigin: 'center bottom',
        }}
      >
        <div className="urvashi-img-wrapper relative h-[82vh] sm:h-[88vh] md:h-[94vh] max-h-[960px] aspect-[9/16] pointer-events-none will-change-transform">
          <Image
            src={MEDIA.urvashiPng}
            alt="Urvashi Rautela — Brand Ambassador for Harmony Harikesh"
            fill
            className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
            sizes="(max-width: 768px) 85vw, 45vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
