'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { MEDIA } from '@/lib/constants';

export default function S11_RJKunalCampaign() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      id="rj-kunal"
      data-section="rj-kunal-campaign"
      className="relative z-20 bg-surface section-padding"
    >
      <div className="content-max">
        {/* Campaign header */}
        <div className="mb-16 md:mb-24">
          <span className="text-metadata block mb-4">Campaign</span>
          <h2 className="heading-editorial text-3xl md:text-5xl lg:text-6xl">
            RJ Kunal × Harmony Harikesh
          </h2>
          <div className="rule-accent mt-8" />
        </div>

        {/* Editorial layout — asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Campaign hero image + Stills moved down where pointed */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={MEDIA.campaigns.rjKunal.hero}
                alt="RJ Kunal at Harmony Harikesh"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
            <span className="text-caption block mt-4 mb-6">RJ Kunalbhai — Harmony Harikesh</span>

            {/* Supporting campaign stills moved down below hero image */}
            <div className="grid grid-cols-3 gap-2">
              {MEDIA.campaigns.rjKunal.stills.slice(0, 3).map((still, i) => (
                <div key={i} className="relative aspect-video overflow-hidden bg-dark/10">
                  <Image
                    src={still}
                    alt={`RJ Kunal campaign frame ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 33vw, 15vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Quote + Video */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* Quote */}
            <div className="mb-8">
              <span className="quote-mark">&ldquo;</span>
              <blockquote className="quote-editorial -mt-6">
                Ek Ghar ane Luxury Address Vachche No Difference.
              </blockquote>
            </div>

            {/* Campaign Video — 100% original proportion (9:16 vertical) */}
            <div className="relative w-full max-w-[440px] aspect-[9/16] bg-dark overflow-hidden mx-auto lg:mx-0 shadow-lg">
              <video
                ref={videoRef}
                src={MEDIA.campaigns.rjKunal.video}
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster={MEDIA.campaigns.rjKunal.hero}
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
