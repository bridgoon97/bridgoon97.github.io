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
    badge: { zh: '语音前端', en: 'SPEECH' },
    title: {
      zh: '多麦克风语音前端与端侧部署',
      en: 'Multi-microphone speech front ends',
    },
    desc: {
      zh: '面向消费终端设计拾音算法链路与神经网络，完成边缘 NPU 部署；通过声学仿真和算法效果验证，指导麦克风硬件布局。',
      en: 'Processing-chain and neural network design for consumer devices, with edge NPU deployment. Acoustic simulation and algorithm evaluation guide microphone hardware layouts.',
    },
  },
  {
    badge: { zh: 'PSZ', en: 'PSZ' },
    title: {
      zh: '头部追踪的独立音区',
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
    badge: { zh: 'Ambisonics', en: 'AMBISONICS' },
    title: {
      zh: '神经网络 Ambisonics 编码',
      en: 'Neural Ambisonic encoding',
    },
    desc: {
      zh: '面向多说话人场景，用两级神经网络将圆形麦克风阵列信号编码为 Ambisonics（腾讯 AI Lab 实习工作）。',
      en: 'A two-stage neural network that encodes circular microphone array signals into Ambisonics for multi-speaker scenes (Tencent AI Lab internship).',
    },
    href: 'https://bridgoon97.github.io/NeuralAmbisonicEncoding/',
  },
];
