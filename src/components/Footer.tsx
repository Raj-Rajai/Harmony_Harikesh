import Image from 'next/image';
import { SITE, CONTACT, MEDIA, SOCIAL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer
      id="footer"
      data-section="footer"
      className="bg-dark text-white/80"
    >
      {/* Top rule */}
      <div className="w-full h-px bg-white/10" />

      <div className="content-max py-16 md:py-24">
        {/* Upper: Brand + Nav + Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src={MEDIA.logo}
                alt={SITE.name}
                width={48}
                height={48}
                className="w-11 h-11 object-contain"
              />
              <div>
                <span className="block text-sm font-medium tracking-[0.2em] uppercase text-white/90">Harmony</span>
                <span className="block text-[10px] tracking-[0.25em] uppercase text-white/50">Harikesh</span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Gujarat&apos;s first iconic project. {SITE.type} with {SITE.features[0]} and {SITE.features[1]} at Science City Road, Ahmedabad.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/30 mb-6">Navigate</h4>
            <nav className="flex flex-col gap-3">
              {['Architecture', 'Lifestyle', 'Location', 'Campaigns'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Private Sales Desk */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/30 mb-6">Private Sales Desk</h4>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${CONTACT.phone}`}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {CONTACT.phoneDisplay}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {CONTACT.email}
              </a>
              <p className="text-sm text-white/40 leading-relaxed mt-2">
                {CONTACT.address}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-12" />

        {/* Bottom: Legal + Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-[10px] tracking-[0.1em] uppercase text-white/30">
              RERA Registration No: {SITE.rera}
            </p>
            <p className="text-[10px] tracking-[0.1em] uppercase text-white/30">
              {SITE.developer}
            </p>
          </div>
          <p className="text-[10px] tracking-[0.1em] uppercase text-white/30">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
