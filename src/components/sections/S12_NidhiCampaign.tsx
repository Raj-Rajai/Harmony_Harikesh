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
      className="bg-background section-padding"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Video + Stills */}
          <div className="lg:col-span-7">
            {/* Campaign Video */}
            <div className="relative w-full aspect-video bg-dark overflow-hidden">
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

            {/* Supporting campaign stills */}
            <div className="grid grid-cols-4 gap-1 mt-1">
              {MEDIA.campaigns.nidhi.stills.slice(0, 4).map((still, i) => (
                <div key={i} className="relative aspect-video overflow-hidden">
                  <Image
                    src={still}
                    alt={`Nidhi campaign frame ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 25vw, 15vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Quote + Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Primary Quote */}
            <div className="mb-10">
              <span className="quote-mark">&ldquo;</span>
              <blockquote className="quote-editorial -mt-6">
                Luxury isn&apos;t measured by the square feet&hellip;<br />
                It&apos;s measured by the life you live, every single day.
              </blockquote>
            </div>

            {/* Campaign hero image */}
            <div className="relative aspect-[3/4] overflow-hidden mb-8">
              <Image
                src={MEDIA.campaigns.nidhi.hero}
                alt="Nidhi at Harmony Harikesh"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
            </div>
            <span className="text-caption">Nidhi — Harmony Harikesh</span>

            {/* Placeholder for video line extraction */}
            <div className="mt-10 pt-8 border-t border-line">
              <p className="text-metadata mb-3">From the Campaign</p>
              {/* VIDEO LINE PLACEHOLDER — Insert extracted line from Nidhi's video here */}
              <p className="text-muted text-sm italic leading-relaxed">
                &ldquo;—&rdquo;
              </p>
            </div>

            {/* Placeholder for secondary quote */}
            <div className="mt-6">
              {/* SECONDARY QUOTE PLACEHOLDER */}
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
