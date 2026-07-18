// Site-wide config — name, contact, social links, the "status" pill content.
// Single source of truth; edit here to change everywhere.

export const site = {
  name: {
    en: 'Yue Qiao',
    zh: '乔越',
  },
  email: 'yqiao@princeton.edu',

  // Top-of-hero status pill. Set to null to hide.
  status: {
    zh: '现居中国 · 寻找空间音频 / 音频 AI 方向的工业研究岗位',
    en: 'Based in China · Open to industry research roles in spatial audio / audio AI',
  },

  // Tagline below the name. Markdown links allowed.
  tagline: {
    zh: '普林斯顿大学 [3D3A 实验室](https://www.princeton.edu/3D3A/)博士候选人。我研究空间音频复现 —— 带头部追踪的「个人声区」系统，让多位听众在同一空间内、不戴耳机就能各自听到不同的声音。',
    en: 'PhD candidate at the [3D3A Lab](https://www.princeton.edu/3D3A/), Princeton. I build real-time spatial audio systems — head-tracked personal sound zones that deliver headphone-free, personalized audio to multiple listeners at once.',
  },

  // Quick-fact rows under the tagline. Each shows next to a small icon.
  quickfacts: {
    location: { zh: '中国 · 北京 / 上海',         en: 'China · Beijing / Shanghai' },
    advisor:  { zh: '导师：Edgar Choueiri 教授',   en: 'Advised by Edgar Choueiri' },
  },

  // Long-form bio shown under the hero. Markdown.
  bio: {
    zh: `我的研究位于声学、信号处理与深度学习的交叉点。博士期间我专注于开发头部追踪的个人声区（Personal Sound Zones, PSZ）系统 —— 让相邻而坐的多位听众，在同一房间内、不戴耳机的情况下，各自听到完全不同的声音，并且当他们自由转动头部时，声音的甜区会自动跟随。

我在北京大学获得物理学学士学位（辅修艺术史，2019），曾于 Meta Reality Labs（TED Audio Experience 团队）任研究工程师实习生。日常之外，我也是[普林斯顿笔记本电脑乐团（PLOrk）](https://plork.princeton.edu/)的演出成员，热爱作曲与电子音乐表演。

如果你对我的研究背景感兴趣，[这里有一篇普林斯顿 MAE 系的专访](https://mae.princeton.edu/about-mae/spotlight/yue-qiao-enhancing-sound-experience)。`,
    en: `My research sits at the intersection of acoustics, signal processing, and deep learning. During my PhD I have focused on head-tracked personal sound zone (PSZ) systems — delivering different audio streams to listeners sitting side by side, without headphones, while their heads move freely.

I received a B.S. in Physics with a minor in Art History from Peking University (2019), and was a research engineer intern at Meta Reality Labs (TED Audio Experience team). Outside the lab I'm a performing member of the [Princeton Laptop Orchestra (PLOrk)](https://plork.princeton.edu/), and I enjoy composing and performing electronic music.

If you'd like more context, here's a [Princeton MAE feature interview](https://mae.princeton.edu/about-mae/spotlight/yue-qiao-enhancing-sound-experience) about my work.`,
  },

  // Profile photo lives in /public/assets/img/
  profileImage: '/assets/img/Yue_summer_pic.jpg',

  // Resume / CV — direct PDF link
  resume: '/assets/pdf/YueQiao_resume.pdf',

  // Social handles
  social: {
    email: 'yqiao@princeton.edu',
    scholar: 'https://scholar.google.com/citations?user=8_uEXGUAAAAJ',
    github: 'https://github.com/bridgoon97',
    twitter: 'https://twitter.com/bridgoon',
    linkedin: 'https://www.linkedin.com/in/yue-qiao-509289119',
  },
};
