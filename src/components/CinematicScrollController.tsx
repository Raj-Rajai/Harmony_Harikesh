'use client';

import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── Precise Finger Anchor on urvashi-scrolling.webp ── */
/* Pixel-verified fingertip on (3375, 6000) canvas at x=2925, y=2559 */
const FINGER_ANCHOR = { x: 0.8667, y: 0.4265 };

const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768;

export default function CinematicScrollController() {
  const ctxRef = useRef<gsap.Context | null>(null);

  /* Calculate exact fingertip position in viewport or target relative coordinates */
  const getFingertipCoordinates = useCallback((urvashiWrapper: HTMLElement, targetContainer?: HTMLElement) => {
    const uRect = urvashiWrapper.getBoundingClientRect();
    const fingerVx = uRect.left + uRect.width * FINGER_ANCHOR.x;
    const fingerVy = uRect.top + uRect.height * FINGER_ANCHOR.y;

    if (!targetContainer) {
      return { x: fingerVx, y: fingerVy };
    }

    const tRect = targetContainer.getBoundingClientRect();
    const relX = ((fingerVx - tRect.left) / tRect.width) * 100;
    const relY = ((fingerVy - tRect.top) / tRect.height) * 100;

    return {
      x: Math.max(0, Math.min(100, relX)),
      y: Math.max(0, Math.min(100, relY)),
    };
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const cleanupFns: (() => void)[] = [];

    const ctx = gsap.context(() => {
      /* ── Cache Key Elements ───────────────────────── */
      const header = document.getElementById('site-header');
      const whatsapp = document.getElementById('whatsapp-concierge');

      const sHero = document.querySelector('[data-section="hero"]') as HTMLElement;
      const sVideo = document.querySelector('[data-section="campaign-video"]') as HTMLElement;
      const sArtwork = document.querySelector('[data-section="campaign-artwork"]') as HTMLElement;
      const sTravel = document.querySelector('[data-section="urvashi-travels"]') as HTMLElement;
      const sTower = document.querySelector('[data-section="tower-reveal"]') as HTMLElement;
      const sArchitecture = document.querySelector('[data-section="architecture"]') as HTMLElement;
      const sReturns = document.querySelector('[data-section="urvashi-returns"]') as HTMLElement;
      const sLifestyle = document.querySelector('[data-section="move-settle-point-reveal"]') as HTMLElement;
      const sLocation = document.querySelector('[data-section="location"]') as HTMLElement;

      const urvashiLayer = document.getElementById('urvashi-character-layer') as HTMLElement;
      const urvashiWrapper = urvashiLayer?.querySelector('.urvashi-img-wrapper') as HTMLElement;

      if (!sHero || !sVideo || !sArtwork || !urvashiLayer) return;

      const mobile = isMobile();

      /* ── INITIAL RESET: STRICTLY HIDE URVASHI ─────────── */
      /* Prevents any popup/flash on page load or refresh */
      gsap.set(urvashiLayer, {
        autoAlpha: 0,
        x: 0,
        y: 60,
        scale: mobile ? 0.8 : 0.88,
        rotation: 0,
      });

      /* ══════════════════════════════════════════════════════
         01 — ARCHITECTURAL HERO
         ══════════════════════════════════════════════════════ */
      const heroBg = sHero.querySelector('.hero-bg-container');
      const heroHeading = sHero.querySelector('h1');

      if (heroHeading) {
        gsap.from(heroHeading, {
          y: 40,
          opacity: 0,
          duration: 1.4,
          delay: 0.2,
          ease: 'power3.out',
        });
      }

      if (heroBg) {
        gsap.to(heroBg, {
          yPercent: 18,
          scale: 1.08,
          ease: 'none',
          scrollTrigger: {
            trigger: sHero,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      /* Header & WhatsApp: Visible on Hero, hidden during cinematic acts, returns at Architecture */
      ScrollTrigger.create({
        trigger: sHero,
        start: 'bottom 25%',
        onEnter: () => {
          if (header) header.classList.replace('header-visible', 'header-hidden');
          if (whatsapp) whatsapp.classList.add('whatsapp-hidden');
        },
        onLeaveBack: () => {
          if (header) header.classList.replace('header-hidden', 'header-visible');
          if (whatsapp) whatsapp.classList.remove('whatsapp-hidden');
        },
      });

      /* ══════════════════════════════════════════════════════
         02 — DEDICATED CAMPAIGN VIDEO (Urvashi_Rautela.mp4)
         Directly below Section 01 (3-building hero).
         ══════════════════════════════════════════════════════ */
      const video = sVideo.querySelector('.video-player-element') as HTMLVideoElement;
      const videoContainer = sVideo.querySelector('.video-window-container') as HTMLElement;

      if (video) {
        video.muted = true;
        video.playsInline = true;
      }

      /* 
        1. Real-Time >= 5% Visibility Playback Controller:
        - When video window is >= 5% visible in viewport (even when entering at bottom or leaving at top): PLAY!
        - Plays continuously during scrolling, mid-scrolling, or paused.
        - When less than 5% (4% ~ 2% or 0%) is visible: PAUSE!
        - Strict natural 1x continuous playback (no currentTime scrubbing).
      */
      const checkVideoVisibility = () => {
        if (!video) return;
        const rect = video.getBoundingClientRect();
        const vh = window.innerHeight;

        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(vh, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibleRatio = rect.height > 0 ? visibleHeight / rect.height : 0;

        if (visibleRatio >= 0.05) {
          if (video.paused) {
            video.play().catch(() => {});
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      };

      cleanupFns.push(() => {
        window.removeEventListener('scroll', checkVideoVisibility);
        window.removeEventListener('resize', checkVideoVisibility);
        videoObserver.disconnect();
      });

      window.addEventListener('scroll', checkVideoVisibility, { passive: true });
      window.addEventListener('resize', checkVideoVisibility, { passive: true });

      const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.05) {
            if (video && video.paused) video.play().catch(() => {});
          } else {
            if (video && !video.paused) video.pause();
          }
        });
      }, {
        threshold: [0, 0.02, 0.03, 0.04, 0.05, 0.06, 0.1, 0.25, 0.5, 0.75, 1.0],
      });
      videoObserver.observe(video);
      checkVideoVisibility();

      /* Video container scroll behavior: clean, unhijacked native scrolling */
      if (videoContainer) {
        gsap.fromTo(videoContainer, {
          scale: 0.96,
          y: 20,
        }, {
          scale: 1.0,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sVideo,
            start: 'top 85%',
            end: 'center center',
            scrub: 0.8,
            onEnter: () => {
              // Strictly keep Urvashi hidden inside video section to avoid double Urvashi
              gsap.set(urvashiLayer, { autoAlpha: 0 });
              checkVideoVisibility();
            },
            onEnterBack: () => {
              gsap.set(urvashiLayer, { autoAlpha: 0 });
              checkVideoVisibility();
            },
          },
        });
      }

      /* ══════════════════════════════════════════════════════
         03 — URVASHI EMERGES FROM VIDEO (EXACT OVERLAP → -X, -Y TRANSLATION)
         Starts exactly superimposed on video Urvashi with matching scale.
         Condition: Opacity is 0 inside the video area, then animates 0 -> 1 
         as she translates in -x, -y direction emerging out into S04.
         ══════════════════════════════════════════════════════ */
      const emergenceTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sVideo,
          start: 'bottom 85%',
          endTrigger: sArtwork,
          end: 'top 25%',
          scrub: 0.6,
        },
      });

      // Starting state on video: exactly scaled and superimposed on the video Urvashi
      emergenceTimeline.fromTo(urvashiLayer, {
        autoAlpha: 0, // Opacity 0 while inside video area
        x: mobile ? '0vw' : '-0.7vw',
        y: mobile ? '-8vh' : '-12.2vh',
        scale: mobile ? 0.78 : 0.84,
        rotation: 0,
      }, {
        autoAlpha: 1, // Becomes fully visible as she emerges outside video area
        x: mobile ? '-6vw' : '-16vw', // Translates in -x direction
        y: mobile ? '-10vh' : '-12vh', // Translates in -y direction
        scale: mobile ? 0.84 : 0.92,
        ease: 'power1.out',
        duration: 1,
      });

      /* ══════════════════════════════════════════════════════
         04 — DEDICATED CAMPAIGN ARTWORK (background-main.webp)
         Zoomed-out 31-storey wireframe towers, right-hand typography plate,
         and Urvashi scrolling down with this image!
         ══════════════════════════════════════════════════════ */
      const neonBg = sArtwork.querySelector('.neon-bg-img') as HTMLElement;
      const neonText = sArtwork.querySelector('.neon-text-plate') as HTMLElement;

      const artworkTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sArtwork,
          start: 'top 25%',
          end: 'bottom 20%',
          scrub: 0.8,
          onLeaveBack: () => {
            // Smoothly hand back to emergence timeline
          },
        },
      });

      /* 
        Urvashi continues as she is going:
        Positioned on the left-center, gesturing towards the wireframe towers & right-hand text.
        Vertical scrub moves smoothly downward across the section scroll distance.
      */
      artworkTimeline.fromTo(urvashiLayer, {
        autoAlpha: 1,
        opacity: 1,
        x: mobile ? '-6vw' : '-16vw',
        y: mobile ? '-10vh' : '-12vh',
        scale: mobile ? 0.84 : 0.92,
        rotation: 0,
      }, {
        autoAlpha: 1,
        opacity: 1,
        x: mobile ? '-28vw' : '-33vw',
        y: mobile ? '12vh' : '14vh',
        scale: mobile ? 0.82 : 0.88,
        rotation: -1.5,
        ease: 'power1.out',
        duration: 1,
      }, 0);

      /* Zoomed-out wireframe artwork has subtle, elegant optical breathing */
      if (neonBg) {
        artworkTimeline.fromTo(neonBg, {
          scale: 0.96,
        }, {
          scale: 1.02,
          ease: 'none',
          duration: 1,
        }, 0);
      }

      /* Right-hand editorial typography plate animates into place */
      if (neonText) {
        artworkTimeline.fromTo(neonText, {
          opacity: 0.2,
          x: 35,
        }, {
          opacity: 1,
          x: 0,
          ease: 'power2.out',
          duration: 0.6,
        }, 0.1);
      }

      /* ══════════════════════════════════════════════════════
         05 — URVASHI TRAVELS WITH SCROLL (THE REVEAL)
         Holds at 100% opacity in frame before the red line,
         fades through middle opacity (50%), then to 0% at the red line.
         ══════════════════════════════════════════════════════ */
      if (sTravel) {
        const travelText = sTravel.querySelector('.travel-backdrop-text');

        const travelTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: sTravel,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.8,
            onLeave: () => {
              gsap.set(urvashiLayer, { autoAlpha: 0, opacity: 0, visibility: 'hidden' });
            },
          },
        });

        /* Text reveals immediately on entry */
        if (travelText) {
          travelTimeline.to(travelText, {
            opacity: 1,
            y: -15,
            duration: 0.25,
            ease: 'power2.out',
          }, 0);
        }

        /* 1. Holds at 100% opacity before the red line */
        travelTimeline
          .to(urvashiLayer, {
            opacity: 1,
            autoAlpha: 1,
            x: mobile ? '-28vw' : '-33vw',
            y: mobile ? '12vh' : '14vh',
            scale: mobile ? 0.82 : 0.88,
            rotation: -1.5,
            duration: 0.45,
            ease: 'none',
          }, 0)

          /* 2. Reaching red line: smooth fading through middle opacity (50%) */
          .to(urvashiLayer, {
            opacity: 0.5,
            duration: 0.3,
            ease: 'power1.inOut',
          })

          /* 3. At / after the red line: fades completely to 0% opacity (autoAlpha: 0) */
          .to(urvashiLayer, {
            autoAlpha: 0,
            opacity: 0,
            duration: 0.25,
            ease: 'power1.out',
          });
      }

      /* ══════════════════════════════════════════════════════
         06 — TOWER REVEAL (ELEVATION OF THE THREE TOWERS)
         Urvashi is now faded out; reveal unfolds smoothly.
         ══════════════════════════════════════════════════════ */
      if (sTower) {
        const towerMask = sTower.querySelector('.tower-reveal-mask') as HTMLElement;
        const towerImgContainer = sTower.querySelector('.tower-img-container') as HTMLElement;

        /* Strictly ensure Urvashi stays hidden */
        ScrollTrigger.create({
          trigger: sTower,
          start: 'top bottom',
          onEnter: () => {
            gsap.set(urvashiLayer, { autoAlpha: 0, opacity: 0, visibility: 'hidden' });
          },
          onEnterBack: () => {
            gsap.set(urvashiLayer, { autoAlpha: 0, opacity: 0, visibility: 'hidden' });
          },
        });

        if (towerMask) {
          const towerTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: sTower,
              start: 'top 85%',
              end: 'bottom 15%',
              scrub: 1,
              onUpdate: (self) => {
                const radius = self.progress * 160;
                towerMask.style.clipPath = `circle(${radius}% at 50% 50%)`;
                towerMask.style.opacity = `${Math.min(1, self.progress * 2.5)}`;
              },
            },
          });

          towerTimeline.fromTo(towerImgContainer, {
            scale: 1.12,
          }, {
            scale: 1.0,
            duration: 1,
            ease: 'none',
          });
        }
      }

      /* ══════════════════════════════════════════════════════
         07 — ARCHITECTURE BECOMES THE CINEMATIC EXPERIENCE
         ══════════════════════════════════════════════════════ */
      if (sArchitecture) {
        /* Header returns as Architecture chapter starts; Urvashi strictly hidden throughout */
        ScrollTrigger.create({
          trigger: sArchitecture,
          start: 'top 95%',
          end: 'bottom 5%',
          onEnter: () => {
            if (header) header.classList.replace('header-hidden', 'header-visible');
            if (whatsapp) whatsapp.classList.remove('whatsapp-hidden');
            gsap.set(urvashiLayer, { autoAlpha: 0 });
          },
          onEnterBack: () => {
            if (header) header.classList.replace('header-hidden', 'header-visible');
            if (whatsapp) whatsapp.classList.remove('whatsapp-hidden');
            gsap.set(urvashiLayer, { autoAlpha: 0 });
          },
          onLeaveBack: () => {
            if (header) header.classList.replace('header-visible', 'header-hidden');
            if (whatsapp) whatsapp.classList.add('whatsapp-hidden');
          },
          onToggle: (self) => {
            if (self.isActive) {
              gsap.set(urvashiLayer, { autoAlpha: 0 });
            }
          },
        });

        /* Each architectural stage has cinematic camera movement */
        const archStages = sArchitecture.querySelectorAll('.arch-journey-stage');

        archStages.forEach((stage) => {
          const visualFrame = stage.querySelector('.arch-visual-frame') as HTMLElement;
          const archImg = stage.querySelector('.arch-img') as HTMLElement;
          const contentPlate = stage.querySelector('.arch-content-plate') as HTMLElement;

          if (visualFrame && archImg) {
            /* Cinematic Frame Reveal */
            gsap.fromTo(visualFrame, {
              clipPath: 'inset(8% 4% 8% 4%)',
              scale: 0.94,
              opacity: 0.85,
            }, {
              clipPath: 'inset(0% 0% 0% 0%)',
              scale: 1.0,
              opacity: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: stage,
                start: 'top 85%',
                end: 'top 25%',
                scrub: 1,
              },
            });

            /* Parallax within visual frame */
            gsap.fromTo(archImg, {
              yPercent: -10,
              scale: 1.12,
            }, {
              yPercent: 10,
              scale: 1.0,
              ease: 'none',
              scrollTrigger: {
                trigger: stage,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            });
          }

          /* Content Plate Entrance */
          if (contentPlate) {
            gsap.from(contentPlate.children, {
              y: 35,
              opacity: 0,
              stagger: 0.1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: stage,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              },
            });
          }
        });
      }

      /* ══════════════════════════════════════════════════════
         08 — CHAPTER 02 TRANSITION (URVASHI REMOVED)
         ══════════════════════════════════════════════════════ */
      if (sReturns) {
        const returnText = sReturns.querySelector('.return-backdrop-text');

        /* Strictly keep Urvashi hidden */
        ScrollTrigger.create({
          trigger: sReturns,
          start: 'top bottom',
          onEnter: () => {
            gsap.set(urvashiLayer, { autoAlpha: 0, opacity: 0, visibility: 'hidden' });
          },
          onEnterBack: () => {
            gsap.set(urvashiLayer, { autoAlpha: 0, opacity: 0, visibility: 'hidden' });
          },
        });

        const returnTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: sReturns,
            start: 'top 70%',
            end: 'bottom bottom',
            scrub: 1,
          },
        });

        if (returnText) {
          returnTimeline.to(returnText, {
            opacity: 1,
            y: -15,
            duration: 0.6,
            ease: 'power2.out',
          });
        }
      }

      /* ══════════════════════════════════════════════════════
         09 — LIFESTYLE EDITORIAL REVEAL (URVASHI REMOVED)
         ══════════════════════════════════════════════════════ */
      if (sLifestyle) {
        const revealContainer = sLifestyle.querySelector('.reveal-content-container') as HTMLElement;

        /* Strictly keep Urvashi hidden */
        ScrollTrigger.create({
          trigger: sLifestyle,
          start: 'top bottom',
          onEnter: () => {
            gsap.set(urvashiLayer, { autoAlpha: 0, opacity: 0, visibility: 'hidden' });
          },
          onEnterBack: () => {
            gsap.set(urvashiLayer, { autoAlpha: 0, opacity: 0, visibility: 'hidden' });
          },
        });

        if (revealContainer) {
          const lifestyleTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: sLifestyle,
              start: 'top 80%',
              end: 'center 40%',
              scrub: 1,
            },
          });

          lifestyleTimeline.to(revealContainer, {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            onUpdate: function () {
              const progress = this.progress();
              const radius = progress * 160;
              revealContainer.style.clipPath = `circle(${radius}% at 50% 50%)`;
            },
          });
        }
      }

      /* ══════════════════════════════════════════════════════
         10 — LOCATION / CARTOGRAPHY
         ══════════════════════════════════════════════════════ */
      if (sLocation) {
        ScrollTrigger.create({
          trigger: sLocation,
          start: 'top 80%',
          onEnter: () => {
            gsap.set(urvashiLayer, { autoAlpha: 0 });
          },
        });

        /* Road line drawing animation */
        const roadLines = sLocation.querySelectorAll('line, path');
        roadLines.forEach((line) => {
          const length = (line as SVGGeometryElement).getTotalLength?.();
          if (length) {
            gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
            gsap.to(line, {
              strokeDashoffset: 0,
              duration: 1.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sLocation,
                start: 'top 70%',
                toggleActions: 'play none none reverse',
              },
            });
          }
        });

        /* Pulsing gold Harmony Harikesh marker */
        const marker = sLocation.querySelector('circle[fill="#C09A6B"]');
        if (marker) {
          gsap.from(marker, {
            scale: 0,
            transformOrigin: 'center center',
            duration: 1,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: sLocation,
              start: 'top 65%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      }

      /* ══════════════════════════════════════════════════════
         11–13 — CAMPAIGN SECTIONS (EDITORIAL REVEALS)
         ══════════════════════════════════════════════════════ */
      const campaignSections = document.querySelectorAll(
        '[data-section="rj-kunal-campaign"], [data-section="nidhi-campaign"], [data-section="dhruvik-campaign"]'
      );

      campaignSections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top bottom',
          onEnter: () => {
            if (urvashiLayer) gsap.set(urvashiLayer, { autoAlpha: 0 });
          },
          onEnterBack: () => {
            if (urvashiLayer) gsap.set(urvashiLayer, { autoAlpha: 0 });
          },
        });

        const heading = section.querySelector('.heading-editorial');
        if (heading) {
          gsap.from(heading, {
            y: 35,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          });
        }

        const quote = section.querySelector('.quote-editorial');
        if (quote) {
          gsap.from(quote, {
            y: 25,
            opacity: 0,
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: quote,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      });
    });

    ctxRef.current = ctx;

    return () => {
      cleanupFns.forEach((fn) => fn());
      ctx.revert();
    };
  }, [getFingertipCoordinates]);

  return null;
}
