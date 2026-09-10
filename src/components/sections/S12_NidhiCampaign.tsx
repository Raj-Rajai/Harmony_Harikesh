'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { MEDIA } from '@/lib/constants';

export default function S12_NidhiCampaign() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      id="nidhi"
      data-section="nidhi-campaign"
      className="relative z-20 bg-background section-padding"
    >
      <div className="content-max">
        {/* Campaign header */}
        <div className="mb-16 md:mb-24">
          <span className="text-metadata block mb-4">Campaign</span>
          <h2 className="heading-editorial text-3xl md:text-5xl lg:text-6xl">
            Nidhi × Harmony Harikesh
          </h2>
          <div className="rule-accent mt-8" />
        </div>

        {/* Reverse editorial layout — video first on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Video + Stills */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start">
            {/* Campaign Video — 100% original proportion (9:16 vertical) */}
            <div className="relative w-full max-w-[440px] aspect-[9/16] bg-dark overflow-hidden shadow-lg">
              <video
                ref={videoRef}
                src={MEDIA.campaigns.nidhi.video}
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster={MEDIA.campaigns.nidhi.hero}
                playsInline
              />
            </div>

            {/* Supporting campaign stills moved down below stretched video */}
            <div className="grid grid-cols-4 gap-2 mt-4 w-full max-w-[440px]">
              {MEDIA.campaigns.nidhi.stills.slice(0, 4).map((still, i) => (
                <div key={i} className="relative aspect-video overflow-hidden bg-dark/10">
                  <Image
                    src={still}
                    alt={`Nidhi campaign frame ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 25vw, 12vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Quote + Content */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {/* Primary Quote */}
            <div className="mb-8">
              <span className="quote-mark">&ldquo;</span>
              <blockquote className="quote-editorial -mt-6">
                Luxury isn&apos;t measured by the square feet&hellip;<br />
                It&apos;s measured by the life you live, every single day.
              </blockquote>
            </div>

            {/* Campaign hero image */}
            <div className="relative aspect-[3/4] overflow-hidden mb-6">
              <Image
                src={MEDIA.campaigns.nidhi.hero}
                alt="Nidhi at Harmony Harikesh"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 35vw"
                priority
              />
            </div>
            <span className="text-caption">Nidhi — Harmony Harikesh</span>

            {/* Placeholder for video line extraction */}
            <div className="mt-8 pt-6 border-t border-line">
              <p className="text-metadata mb-2">From the Campaign</p>
              <p className="text-muted text-sm italic leading-relaxed">
                &ldquo;—&rdquo;
              </p>
            </div>

            {/* Placeholder for secondary quote */}
            <div className="mt-4">
              <p className="text-light text-xs italic">
                &ldquo;—&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
