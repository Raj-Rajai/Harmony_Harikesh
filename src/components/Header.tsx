'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MEDIA, SITE } from '@/lib/constants';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Architecture', href: '#architecture' },
    { label: 'Lifestyle', href: '#lifestyle' },
    { label: 'Location', href: '#location' },
    { label: 'Campaigns', href: '#rj-kunal' },
  ];

  return (
    <header
      id="site-header"
      className="fixed top-0 left-0 right-0 z-[100] header-visible"
      data-component="header"
    >
      {/* Warm architectural backdrop with blur */}
      <div className="absolute inset-0 bg-[#FAF7F2]/90 backdrop-blur-md" />

      {/* Subtle bottom architectural line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E0D8CC]" />

      <div className="relative content-max flex items-center justify-between h-18 md:h-22">
        {/* Actual Logo from Logo.webp */}
        <a href="#" className="flex items-center gap-3.5 shrink-0 py-2 group">
          <div className="relative h-10 w-10 md:h-12 md:w-12 flex items-center justify-center">
            <Image
              src={MEDIA.logo}
              alt={SITE.name}
              width={48}
              height={48}
              className="h-9 w-9 md:h-11 md:w-11 object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase text-[#2C2C2C]">
              Harmony
            </span>
            <span className="text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-[#C09A6B] font-light">
              Harikesh
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#2C2C2C]/75 hover:text-[#C09A6B] transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#enquire"
            className="text-[11px] font-medium tracking-[0.2em] uppercase bg-[#C09A6B] text-white px-7 py-3 hover:bg-[#A07D52] transition-colors duration-300 shadow-sm"
          >
            Enquire
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-[#2C2C2C] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`block w-5 h-px bg-[#2C2C2C] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-[#2C2C2C] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#FAF7F2]/98 backdrop-blur-xl border-b border-[#E0D8CC] transition-all duration-400 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="content-max py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs font-medium tracking-[0.15em] uppercase text-[#2C2C2C]/80 hover:text-[#C09A6B]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#enquire"
            onClick={() => setMenuOpen(false)}
            className="text-xs font-medium tracking-[0.2em] uppercase bg-[#C09A6B] text-white px-6 py-3.5 text-center hover:bg-[#A07D52] transition-colors"
          >
            Enquire
          </a>
        </nav>
      </div>
    </header>
  );
}
