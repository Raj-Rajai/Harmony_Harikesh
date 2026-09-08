import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppConcierge from '@/components/WhatsAppConcierge';
import EnquiryModal from '@/components/EnquiryModal';
import CinematicScrollController from '@/components/CinematicScrollController';

import S01_OpeningVideo from '@/components/sections/S01_OpeningVideo';
import S02_CampaignArtwork from '@/components/sections/S02_CampaignArtwork';
import S03_UrvashiEmerges from '@/components/sections/S03_UrvashiEmerges';
import S04_FullscreenVideo from '@/components/sections/S04_FullscreenVideo';
import S05_UrvashiTravels from '@/components/sections/S05_UrvashiTravels';
import S06_TowerReveal from '@/components/sections/S06_TowerReveal';
import S07_Architecture from '@/components/sections/S07_Architecture';
import S08_UrvashiReturns from '@/components/sections/S08_UrvashiReturns';
import S09_MoveSettlePointReveal from '@/components/sections/S09_MoveSettlePointReveal';
import S10_Location from '@/components/sections/S10_Location';
import S11_RJKunalCampaign from '@/components/sections/S11_RJKunalCampaign';
import S12_NidhiCampaign from '@/components/sections/S12_NidhiCampaign';
import S13_DhruvikCampaign from '@/components/sections/S13_DhruvikCampaign';

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* ── LOCKED SECTION ORDER ─────────────────────────── */}

        {/* 01 — Architectural Hero */}
        <S01_OpeningVideo />

        {/* 02 — Scroll With Urvashi — Campaign Artwork */}
        <S02_CampaignArtwork />

        {/* 03 — Urvashi Emerges */}
        <S03_UrvashiEmerges />

        {/* 04 — Fullscreen Campaign Video */}
        <S04_FullscreenVideo />

        {/* 05 — Urvashi Travels With Scroll */}
        <S05_UrvashiTravels />

        {/* 06 — Tower Reveal */}
        <S06_TowerReveal />

        {/* 07 — Building / Architecture Content */}
        <S07_Architecture />

        {/* 08 — Urvashi Returns */}
        <S08_UrvashiReturns />

        {/* 09 — Move → Settle → Point → Reveal Content */}
        <S09_MoveSettlePointReveal />

        {/* 10 — Location / Cartography */}
        <S10_Location />

        {/* 11 — RJ Kunal Campaign */}
        <S11_RJKunalCampaign />

        {/* 12 — Nidhi Campaign */}
        <S12_NidhiCampaign />

        {/* 13 — Dhruvik Parekh Campaign */}
        <S13_DhruvikCampaign />

        {/* Quick Enquiry */}
        <EnquiryModal />
      </main>

      {/* 14 — Footer */}
      <Footer />

      {/* Floating WhatsApp Concierge */}
      <WhatsAppConcierge />

      {/* Phase 2: Cinematic Scroll Orchestration */}
      <CinematicScrollController />
    </>
  );
}
