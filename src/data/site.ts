// Site-wide config — name, contact, social links, the "status" pill content.
// Single source of truth; edit here to change everywhere.

export const site = {
  name: {
    en: 'Yue Qiao',
    zh: '乔越',
  },
  email: 'bridgoon97@gmail.com',

  // Top-of-hero status pill. Set to null to hide.
  status: null,

  // Tagline below the name. Markdown links allowed.
  tagline: {
    zh: '音频算法工程师，普林斯顿大学 [3D3A 实验室](https://www.princeton.edu/3D3A/)博士（2024）。读博期间我研究声场控制 —— 带头部追踪的「独立音区」系统，让多位听众在同一空间内、不戴耳机就能各自听到不同的声音。',
    en: 'Audio algorithm engineer. PhD from the [3D3A Lab](https://www.princeton.edu/3D3A/) at Princeton (2024), where I worked on real-time sound field control — head-tracked personal sound zones that deliver headphone-free, personalized audio to multiple listeners at once.',
  },

  // Quick-fact rows under the tagline. Each shows next to a small icon.
  quickfacts: {
    location: { zh: '中国 · 深圳',                 en: 'Shenzhen, China' },
    advisor:  { zh: '普林斯顿大学博士（3D3A 实验室）', en: 'PhD, Princeton (3D3A Lab)' },
  },

  // Long-form bio shown under the hero. Markdown.
  bio: {
    zh: `我的研究位于声学、信号处理与深度学习的交叉点。博士期间，我专注于头部追踪的独立音区（Personal Sound Zones, PSZ）系统 —— 让相邻而坐的多位听众，在同一房间内、不戴耳机的情况下，各自听到完全不同的声音，并且当他们自由转动头部时，声音的甜区会自动跟随。我于 2024 年在普林斯顿大学获得机械与航空航天工程博士学位，目前从事音频算法研究，方向包括空间音频采集与渲染、语音增强与分离、麦克风阵列信号处理等。

我在北京大学获得物理学学士学位（辅修艺术史，2019）。读博期间，我曾在 Meta Reality Labs（TED Audio Experience 团队）和腾讯 AI Lab（Tencent AI Lab）担任研究实习生，研究基于深度学习的空间音频质量评估与 Ambisonics 编码。日常之外，我也曾是[普林斯顿笔记本电脑乐团（PLOrk）](https://plork.princeton.edu/)的演出成员，热爱作曲与电子音乐表演。

如果你对我的研究背景感兴趣，[这里有一篇普林斯顿 MAE 系的专访](https://mae.princeton.edu/about-mae/spotlight/yue-qiao-enhancing-sound-experience)。`,
    en: `My research sits at the intersection of acoustics, signal processing, and deep learning. For my PhD I focused on head-tracked personal sound zone (PSZ) systems — delivering different audio streams to listeners sitting side by side, without headphones, while their heads move freely. I received my Ph.D. in Mechanical and Aerospace Engineering from Princeton in 2024, and now work as an audio algorithm engineer in industry, spanning spatial audio capture and rendering, speech enhancement and separation, and microphone array signal processing.

I received a B.S. in Physics with a minor in Art History from Peking University (2019). During my PhD I was a research intern at Meta Reality Labs (TED Audio Experience team) and Tencent AI Lab, working on machine-learning-based spatial audio quality evaluation and neural Ambisonics encoding. Outside the lab I was a performing member of the [Princeton Laptop Orchestra (PLOrk)](https://plork.princeton.edu/), and I enjoy composing and performing electronic music.

If you'd like more context, here's a [Princeton MAE feature interview](https://mae.princeton.edu/about-mae/spotlight/yue-qiao-enhancing-sound-experience) about my work.`,
  },

  // Profile photo lives in /public/assets/img/
  profileImage: '/assets/img/yue_profile_2026.jpg',

  // Resume / CV — direct PDF link
  resume: '/assets/pdf/YueQiao_resume.pdf',

  // Social handles
  social: {
    email: 'bridgoon97@gmail.com',
    scholar: 'https://scholar.google.com/citations?user=aYYVny8AAAAJ',
    github: 'https://github.com/bridgoon97',
    twitter: 'https://twitter.com/bridgoon',
    linkedin: 'https://www.linkedin.com/in/yue-qiao-509289119',
  },
};
