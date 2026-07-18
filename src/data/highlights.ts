// Research highlight cards shown on the home page.
// Edit / add / remove freely. Each entry renders one card.

export interface Highlight {
  badge: { zh: string; en: string };
  title: { zh: string; en: string };
  desc:  { zh: string; en: string };
  href?: string;
}

export const highlights: Highlight[] = [
  {
    badge: { zh: 'PSZ', en: 'PSZ' },
    title: {
      zh: '头部追踪的个人声区',
      en: 'Head-tracked personal sound zones',
    },
    desc: {
      zh: '实时音频 DSP 系统，让相邻而坐的多位听众各自听到不同的声音，且能稳定追随头部运动。',
      en: 'Real-time DSP systems delivering different audio streams to listeners side-by-side without headphones, robust to head motion.',
    },
  },
  {
    badge: { zh: '神经网络', en: 'NEURAL' },
    title: {
      zh: '神经网络建模双耳房间冲激响应',
      en: 'Neural BRIR modeling',
    },
    desc: {
      zh: '使用紧凑的神经网络在头部位置之间插值 BRIR，替代密集的物理测量网格。',
      en: 'Compact networks that interpolate binaural room impulse responses across head positions — replacing dense measurement grids.',
    },
  },
  {
    badge: { zh: '数据集', en: 'DATA' },
    title: {
      zh: '开源 BRIR 数据集',
      en: 'Open BRIR dataset',
    },
    desc: {
      zh: '多扬声器、高分辨率头部平移与旋转坐标的双耳房间冲激响应数据集，已开源供学界使用。',
      en: 'High-resolution multi-loudspeaker BRIRs with translational and rotational head coordinates, released for the research community.',
    },
  },
];
