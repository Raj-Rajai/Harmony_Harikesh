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
      className="bg-surface section-padding"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Campaign hero image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={MEDIA.campaigns.rjKunal.hero}
                alt="RJ Kunal at Harmony Harikesh"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <span className="text-caption block mt-4">RJ Kunalbhai — Harmony Harikesh</span>
          </div>

          {/* Quote + Video */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quote */}
            <div className="mb-12">
              <span className="quote-mark">&ldquo;</span>
              <blockquote className="quote-editorial -mt-6">
                Ek Ghar ane Luxury Address Vachche No Difference.
              </blockquote>
            </div>

            {/* Campaign Video */}
            <div className="relative w-full aspect-video bg-dark overflow-hidden">
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

            {/* Supporting campaign stills */}
            <div className="grid grid-cols-3 gap-1 mt-1">
              {MEDIA.campaigns.rjKunal.stills.slice(0, 3).map((still, i) => (
                <div key={i} className="relative aspect-video overflow-hidden">
                  <Image
                    src={still}
                    alt={`RJ Kunal campaign frame ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 33vw, 20vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
