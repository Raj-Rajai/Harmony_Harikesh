'use client';

import { useRef } from 'react';
import { MEDIA } from '@/lib/constants';

export default function S13_DhruvikCampaign() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      id="dhruvik"
      data-section="dhruvik-campaign"
      className="bg-surface section-padding"
    >
      <div className="content-max">
        {/* Campaign header */}
        <div className="mb-16 md:mb-24">
          <span className="text-metadata block mb-4">Campaign</span>
          <h2 className="heading-editorial text-3xl md:text-5xl lg:text-6xl">
            Dhruvik Parekh × Harmony Harikesh
          </h2>
          <div className="rule-accent mt-8" />
        </div>

        {/* Full-width video composition */}
        <div className="relative w-full aspect-video bg-dark overflow-hidden mb-12">
          <video
            ref={videoRef}
            src={MEDIA.campaigns.dhruvik.video}
            className="w-full h-full object-cover"
            controls
            preload="metadata"
            playsInline
          />
        </div>

        {/* Editorial content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Quote / Strong line */}
          <div>
            <span className="text-metadata block mb-4">From the Campaign</span>
            {/* VIDEO LINE PLACEHOLDER — Insert extracted line from Dhruvik's video here */}
            <blockquote className="quote-editorial">
              &ldquo;—&rdquo;
            </blockquote>
          </div>

          {/* Supporting content */}
          <div className="flex flex-col justify-center">
            <p className="text-muted text-sm leading-relaxed mb-6">
              An authentic perspective on modern luxury living at Harmony Harikesh, through the eyes of Dhruvik Parekh.
            </p>
            {/* SECONDARY QUOTE PLACEHOLDER */}
            <div className="pt-6 border-t border-line">
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
