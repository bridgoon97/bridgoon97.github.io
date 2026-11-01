export interface Video {
  title: { zh: string; en: string };
  category: { zh: string; en: string };
  description: { zh: string; en: string };
  bilibili: string;
  youtube?: string;
}

export const videos: Video[] = [
  {
    title: { zh: 'Stand In Waves · 驻波', en: 'Stand In Waves' },
    category: { zh: '空间音频装置 · 2024', en: 'SPATIAL AUDIO INSTALLATION · 2024' },
    description: {
      zh: '与普林斯顿笔记本电脑乐团（PLOrk）合作的空间音频装置，包含我创作的氛围音乐。用双耳麦克风记录在扬声器之间行走的听觉体验，建议戴耳机收听。',
      en: 'A spatial audio installation created with the Princeton Laptop Orchestra (PLOrk), featuring my ambient compositions. A first-person binaural recording captures the experience of walking among the loudspeakers. Headphones recommended.',
    },
    bilibili: 'https://www.bilibili.com/video/BV1Xq6hYJEmF/',
    youtube: 'https://www.youtube.com/watch?v=LpwrvuKdK64',
  },
  {
    title: { zh: 'Birthday song ambient', en: 'Birthday song ambient' },
    category: { zh: '合成器 · 2023', en: 'SYNTHESIZERS · 2023' },
    description: {
      zh: 'Typhoon / MiniBrute 2S 合成器氛围音乐演奏。',
      en: 'An ambient synthesizer performance with Typhoon / MiniBrute 2S.',
    },
    bilibili: 'https://www.bilibili.com/video/BV1Zw411X7TX/',
    youtube: 'https://www.youtube.com/watch?v=O-z_n1Mzzk0',
  },
  {
    title: { zh: '伍伍慧 · 等待的风', en: 'Waiting for the Wind · Satoshi Gogo' },
    category: { zh: '指弹吉他 · 2020', en: 'FINGERSTYLE GUITAR · 2020' },
    description: {
      zh: '我的指弹吉他翻弹。',
      en: 'My fingerstyle guitar cover.',
    },
    bilibili: 'https://www.bilibili.com/video/BV1eK4y1x73T/',
  },
];
