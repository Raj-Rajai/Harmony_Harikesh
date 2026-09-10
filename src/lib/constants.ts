/* ── Site-wide constants ─────────────────────────────── */

export const SITE = {
  name: 'Harmony Harikesh',
  tagline: 'Identity of Science City',
  developer: 'Advaitya Projects',
  type: '4 BHK Sky Living',
  features: ['2 Living Room Concept', '360° Panoramic Views'],
  status: 'Ready to Move',
  rera: 'RAA09838',
} as const;

export const CONTACT = {
  phone: '+919998906506',
  phoneDisplay: '99 98 906 506',
  whatsapp: '+919998906506',
  email: 'info@harmonyharikesh.com',
  address: 'Science City Road, Ahmedabad, Gujarat, India',
} as const;

export const MAPS_URL =
  'https://maps.google.com/?q=Harmony+Harikesh+Science+City+Road+Ahmedabad';

export const SOCIAL = {
  instagram: '#',
  facebook: '#',
  youtube: '#',
} as const;

/* ── Media paths ─────────────────────────────────────── */

export const MEDIA = {
  logo: '/media/website-images/Logo.webp',

  campaignArtwork: '/media/Urvashi/Thumbnail.jpg',
  neonBackground: '/media/website-images/background-main.webp',
  urvashiPng: '/media/Urvashi/urvashi-scrolling.webp',
  urvashiVideo:
    'https://lmslhpm3dkciwcny.public.blob.vercel-storage.com/Urvashi_Rautela.mp4',

  towers: {
    front: '/media/website-images/hero-towers-front.jpg',
    angled: '/media/website-images/hero-towers-angled.jpg',
    skyline: '/media/website-images/hero-building-skyline.jpg',
  },

  architecture: {
    skyDeck: '/media/website-images/sky-deck-aerial.jpg',
    clubhouse: '/media/website-images/clubhouse-lounge.jpg',
    entrance: '/media/website-images/entrance-foyer.jpg',
  },

  campaigns: {
    rjKunal: {
      video:
        'https://lmslhpm3dkciwcny.public.blob.vercel-storage.com/RJ%20Kunalbhai%20X%20Harmony%20harikesh.mp4',
      hero: '/media/campaign-images/RJ_Kunalbhai_X_Harmony__010.0s__presenter_close.jpg',
      stills: [
        '/media/campaign-images/RJ_Kunalbhai_X_Harmony__002.0s__presenter_exterior.jpg',
        '/media/campaign-images/RJ_Kunalbhai_X_Harmony__016.0s__tower_context.jpg',
        '/media/campaign-images/RJ_Kunalbhai_X_Harmony__026.0s__presenter_interior.jpg',
        '/media/campaign-images/RJ_Kunalbhai_X_Harmony__042.0s__living_room.jpg',
        '/media/campaign-images/RJ_Kunalbhai_X_Harmony__050.0s__skywalk.jpg',
        '/media/campaign-images/RJ_Kunalbhai_X_Harmony__058.0s__city_view_presenter.jpg',
        '/media/campaign-images/RJ_Kunalbhai_X_Harmony__064.0s__brand_end_frame.jpg',
      ],
    },
    nidhi: {
      video:
        'https://lmslhpm3dkciwcny.public.blob.vercel-storage.com/Harmony%20Harikesh-Nidhi-1.mp4',
      hero: '/media/campaign-images/Harmony_Harikesh_Nidhi__010.0s__presenter_full.jpg',
      stills: [
        '/media/campaign-images/Harmony_Harikesh_Nidhi__002.0s__presenter_living_room.jpg',
        '/media/campaign-images/Harmony_Harikesh_Nidhi__006.0s__presenter_apartment.jpg',
        '/media/campaign-images/Harmony_Harikesh_Nidhi__014.0s__living_room.jpg',
        '/media/campaign-images/Harmony_Harikesh_Nidhi__022.0s__presenter_feature_wall.jpg',
        '/media/campaign-images/Harmony_Harikesh_Nidhi__026.0s__living_room_wide.jpg',
        '/media/campaign-images/Harmony_Harikesh_Nidhi__030.0s__master_bedroom.jpg',
        '/media/campaign-images/Harmony_Harikesh_Nidhi__038.0s__tower_aerial.jpg',
        '/media/campaign-images/Harmony_Harikesh_Nidhi__044.0s__amenities_presenter.jpg',
        '/media/campaign-images/Harmony_Harikesh_Nidhi__048.0s__clubhouse.jpg',
        '/media/campaign-images/Harmony_Harikesh_Nidhi__050.0s__sports_amenity.jpg',
        '/media/campaign-images/Harmony_Harikesh_Nidhi__054.0s__final_presenter.jpg',
      ],
    },
    dhruvik: {
      video:
        'https://lmslhpm3dkciwcny.public.blob.vercel-storage.com/Harmony%20Harikesh%20X%20Dhruvik%20Parekh.mp4',
    },
  },
} as const;
