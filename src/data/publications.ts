// Publications, in reverse chronological order.
// Paper titles, author names and venues stay in their original language.
// To add a new publication, copy the template at the bottom of this file.

export interface Publication {
  year: number;
  title: string;
  authors: string[];          // "Yue Qiao" will be auto-bolded as the author of this site
  venue: string;              // short tag, e.g. "JAES", "AES 155"
  venueFull?: string;         // full venue name, e.g. "Journal of the Audio Engineering Society"
  selected?: boolean;         // show on home "selected publications" block
  links?: {
    pdf?: string;             // path under /assets/pdf/ or full URL
    html?: string;
    slides?: string;
    code?: string;
    website?: string;
  };
}

export const publications: Publication[] = [
  {
    year: 2025,
    title: 'SANN-PSZ: Spatially Adaptive Neural Network for Head-Tracked Personal Sound Zones',
    authors: ['Yue Qiao', 'Edgar Choueiri'],
    venue: 'IEEE/ACM TASLP',
    venueFull: 'IEEE/ACM Transactions on Audio, Speech, and Language Processing',
    selected: true,
    links: { html: 'https://ieeexplore.ieee.org/document/11045429', pdf: 'https://arxiv.org/pdf/2411.00772' },
  },
  {
    year: 2025,
    title: 'Neural Ambisonic Encoding for Multi-Speaker Scenarios Using a Circular Microphone Array',
    authors: ['Yue Qiao', 'Vinay Kothapally', 'Meng Yu', 'Dong Yu'],
    venue: 'ICASSP',
    venueFull: 'IEEE International Conference on Acoustics, Speech and Signal Processing',
    selected: true,
    links: {
      html: 'https://ieeexplore.ieee.org/document/10890048',
      pdf: 'https://arxiv.org/pdf/2409.06954',
      website: 'https://bridgoon97.github.io/NeuralAmbisonicEncoding/',
    },
  },
  {
    year: 2024,
    title: 'Personal Sound Zone Rendering with Listener Individualization and Head Tracking',
    authors: ['Yue Qiao'],
    venue: 'PhD Thesis',
    venueFull: 'Ph.D. Dissertation, Princeton University',
  },
  {
    year: 2024,
    title: 'Spatial Sampling of Binaural Room Transfer Functions for Head-Tracked Personal Sound Zones',
    authors: ['Yue Qiao', 'Jessica Luo', 'Edgar Choueiri'],
    venue: 'JAES',
    venueFull: 'Journal of the Audio Engineering Society, vol. 72, no. 7/8',
    selected: true,
  },
  {
    year: 2024,
    title: 'A multi-loudspeaker binaural room impulse response dataset with high-resolution translational and rotational head coordinates in a listening room',
    authors: ['Yue Qiao', 'Ryan Miguel Gonzales', 'Edgar Choueiri'],
    venue: 'Frontiers SP',
    venueFull: 'Frontiers in Signal Processing, vol. 4',
    selected: true,
  },
  {
    year: 2023,
    title: 'The effects of individualized binaural room transfer functions for personal sound zones',
    authors: ['Yue Qiao', 'Edgar Choueiri'],
    venue: 'JAES',
    venueFull: 'Journal of the Audio Engineering Society, vol. 71, no. 12',
    selected: true,
  },
  {
    year: 2023,
    title: 'Neural modeling and interpolation of binaural room impulse responses with head tracking',
    authors: ['Yue Qiao', 'Edgar Choueiri'],
    venue: 'AES 155',
    venueFull: 'Audio Engineering Society Convention 155',
    selected: true,
  },
  {
    year: 2023,
    title: 'Experimental evaluation of bilateral Ambisonics-based binaural room transfer function synthesis with application to personal sound zones',
    authors: ['Yue Qiao', 'Edgar Choueiri'],
    venue: 'ASA',
    venueFull: 'The Journal of the Acoustical Society of America, vol. 154',
    links: { slides: 'Slides_Acoustics_Sydney_2023.pdf' },
  },
  {
    year: 2023,
    title: 'Performance Optimization of Personal Sound Zones with Crosstalk Cancellation',
    authors: ['Yue Qiao', 'Edgar Choueiri'],
    venue: 'I3DA 2023',
    venueFull: 'Immersive and 3D Audio: from Architecture to Automotive (IEEE)',
  },
  {
    year: 2023,
    title: 'Optimal Spatial Sampling of Plant Transfer Functions for Head-Tracked Personal Sound Zones',
    authors: ['Yue Qiao', 'Edgar Choueiri'],
    venue: 'AES 154',
    venueFull: 'Audio Engineering Society Convention 154',
    links: { pdf: 'Qiao_AES154_paper.pdf', slides: 'Qiao_AES154_slides.pdf' },
  },
  {
    year: 2022,
    title: 'Prediction of timbral, spatial, and overall audio quality with independent auditory feature mapping',
    authors: ['Yue Qiao', 'Nick Zacharov', 'Pablo F. Hoffmann'],
    venue: 'AES 153',
    venueFull: 'Audio Engineering Society Convention 153',
  },
  {
    year: 2022,
    title: 'Isolation performance metrics for personal sound zone reproduction systems',
    authors: ['Yue Qiao', 'Léo Guadagnin', 'Edgar Choueiri'],
    venue: 'JASA-EL',
    venueFull: 'JASA Express Letters, vol. 2, no. 10',
    selected: true,
  },
  {
    year: 2022,
    title: 'The Performance of A Personal Sound Zone System with Generic and Individualized Binaural Room Transfer Functions',
    authors: ['Yue Qiao', 'Edgar Choueiri'],
    venue: 'AES 152',
    venueFull: 'Audio Engineering Society Convention 152',
    links: { pdf: 'Qiao_AES152_paper.pdf', slides: 'Qiao_AES152_slides.pdf' },
  },
  {
    year: 2021,
    title: 'Real-time Implementation of the Spectral Division Method for Binaural Personal Audio Delivery with Head Tracking',
    authors: ['Yue Qiao', 'Edgar Choueiri'],
    venue: 'AES 151',
    venueFull: 'Audio Engineering Society Convention 151',
    links: { slides: 'Qiao_AES151_slides.pdf' },
  },
  {
    year: 2019,
    title: 'Distance-dependent modeling of head-related transfer functions',
    authors: ['Mengfan Zhang', 'Yue Qiao', 'Xihong Wu', 'Tianshu Qu'],
    venue: 'ICASSP',
    venueFull: 'IEEE International Conference on Acoustics, Speech and Signal Processing',
  },
  {
    year: 2018,
    title: 'Subjective evaluation of virtual room auralization system based on the ambisonics matching projection decoding method',
    authors: ['Zhongshu Ge', 'Yue Qiao', 'Shusen Wang', 'Xihong Wu', 'Tianshu Qu'],
    venue: 'AES 145',
    venueFull: 'Audio Engineering Society Convention 145',
  },
  {
    year: 2018,
    title: 'Matching projection decoding method for ambisonics system',
    authors: ['Tianshu Qu', 'Zhichao Huang', 'Yue Qiao', 'Xihong Wu'],
    venue: 'ICASSP',
    venueFull: 'IEEE International Conference on Acoustics, Speech and Signal Processing',
  },
];

/* ------------------------------------------------------------------ TEMPLATE
{
  year: 2026,
  title: '',
  authors: ['Yue Qiao'],
  venue: '',
  venueFull: '',
  selected: false,
  links: { pdf: '', slides: '' },
},
--------------------------------------------------------------------- */
