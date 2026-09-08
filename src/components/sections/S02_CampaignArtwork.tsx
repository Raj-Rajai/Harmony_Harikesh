'use client';

import { useRef } from 'react';
import { MEDIA } from '@/lib/constants';

export default function S02_CampaignArtwork() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      id="campaign-video"
      data-section="campaign-video"
      className="relative w-full min-h-[85vh] md:min-h-screen bg-[#070A10] flex items-center justify-center py-10 md:py-16 px-3 sm:px-6 md:px-8"
    >
      {/* 
        Dedicated Luxury Video Window
        Clean, separate area for video playback without merged artwork.
      */}
      <div className="video-window-container relative w-full max-w-[1520px] aspect-[16/9] max-h-[86vh] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.85)] bg-black will-change-transform">
        <video
          ref={videoRef}
          src={MEDIA.urvashiVideo}
          className="video-player-element absolute inset-0 w-full h-full object-cover object-center will-change-transform"
          muted
          playsInline
          loop
          preload="auto"
          poster={MEDIA.campaignArtwork}
        />

        {/* Subtle cinematic gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

        {/* Live Autoplay Indicator Badge */}
        <div className="video-live-badge absolute top-6 sm:top-8 left-6 sm:left-10 z-20 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[9px] font-mono tracking-widest text-white uppercase">CINEMATIC CAMPAIGN PREVIEW</span>
        </div>
      </div>
    </section>
  );
}

