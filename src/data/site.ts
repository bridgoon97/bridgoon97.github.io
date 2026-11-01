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
    zh: '音频算法，两个方向：用多扬声器还原和增强人的听觉体验，用多麦克风阵列加强设备对空间的感知。博士期间研究声场控制与双耳渲染，现在做消费终端的多麦语音前端。计划将二者应用于真实场景的人机交互。',
    en: 'I work on audio algorithms: using loudspeaker arrays to reproduce and enhance listening experiences, and microphone arrays to help devices perceive their acoustic surroundings. My PhD focused on sound field control and binaural rendering; I now develop multi-microphone speech front ends for consumer devices. I plan to bring both areas into human–machine interaction in real-world settings.',
  },

  // Quick-fact rows under the tagline. Each shows next to a small icon.
  quickfacts: {
    location: { zh: '中国 · 深圳',                 en: 'Shenzhen, China' },
    advisor:  { zh: '普林斯顿大学博士（3D3A 实验室）', en: 'PhD, Princeton (3D3A Lab)' },
  },

  // Long-form bio shown under the hero. Markdown.
  bio: {
    zh: `我于 2024 年在普林斯顿大学 [3D3A 实验室](https://www.princeton.edu/3D3A/)获得机械与航空航天工程博士学位，目前在华为 2012 实验室担任音频算法工程师。我的工作涉及声学、信号处理与深度学习。

现在，我负责消费终端的多麦克风语音前端，覆盖助听与对话增强、通话、AI 语音交互和定向录音等场景。我参与拾音算法链路的方案设计与网络架构优化，在边缘 NPU 的算力和内存约束下完成端侧部署，并分析量化、定点化以及真机与仿真之间的效果差异。我也基于声学仿真构造训练数据、验证算法效果，并据此指导麦克风硬件布局。此前主导的座舱空间音频渲染算法已落地尊界 S800。常用工具包括 Python、PyTorch、C++、MATLAB 和 COMSOL。

博士期间，我专注于头部追踪的独立音区（Personal Sound Zones, PSZ）系统：让相邻而坐的多位听众不戴耳机就能各自听到不同的声音，并在头部转动时保持各自的听音区域。这段研究包括声场控制、双耳渲染，以及基于神经网络的空间声学建模。

我在北京大学获得物理学学士学位（辅修艺术史，2019）。读博期间，我曾在 Meta Reality Labs（TED Audio Experience 团队）和腾讯 AI Lab（Tencent AI Lab）担任研究实习生，研究基于深度学习的空间音频质量评估与 Ambisonics 编码。日常之外，我也曾是[普林斯顿笔记本电脑乐团（PLOrk）](https://plork.princeton.edu/)的演出成员，热爱作曲与电子音乐表演。

如果你对我的研究背景感兴趣，[这里有一篇普林斯顿 MAE 系的专访](https://mae.princeton.edu/about-mae/spotlight/yue-qiao-enhancing-sound-experience)。`,
    en: `I received my Ph.D. in Mechanical and Aerospace Engineering from Princeton's [3D3A Lab](https://www.princeton.edu/3D3A/) in 2024 and now work as an audio algorithm engineer at Huawei's 2012 Laboratories. My work combines acoustics, signal processing, and deep learning.

I develop multi-microphone speech front ends for consumer devices, covering hearing assistance, conversation enhancement, calls, AI voice interaction, and directional recording. My responsibilities include processing-chain design, neural network architecture optimization, and deployment within the compute and memory limits of edge NPUs. I investigate quality losses from quantization and fixed-point implementation, as well as gaps between simulation and device performance. I also use acoustic simulation to generate training data, validate algorithms, and guide microphone hardware layouts. I led the development of a cabin spatial audio rendering algorithm deployed in the Maextro S800. My tools include Python, PyTorch, C++, MATLAB, and COMSOL.

For my PhD, I focused on head-tracked personal sound zone (PSZ) systems: delivering different audio streams to listeners sitting side by side, without headphones, while maintaining their listening zones as their heads move. This research covered sound field control, binaural rendering, and neural spatial acoustic modeling.

I received a B.S. in Physics with a minor in Art History from Peking University (2019). During my PhD I was a research intern at Meta Reality Labs (TED Audio Experience team) and Tencent AI Lab, working on machine-learning-based spatial audio quality evaluation and neural Ambisonics encoding. Outside the lab I was a performing member of the [Princeton Laptop Orchestra (PLOrk)](https://plork.princeton.edu/), and I enjoy composing and performing electronic music.

If you'd like more context, here's a [Princeton MAE feature interview](https://mae.princeton.edu/about-mae/spotlight/yue-qiao-enhancing-sound-experience) about my work.`,
  },

  // Profile photo lives in /public/assets/img/
  profileImage: '/assets/img/yue_profile_2026.jpg',

  // Resume / CV — direct PDF link
  resume: {
    zh: '/assets/pdf/YueQiao_resume_cn.pdf',
    en: '/assets/pdf/YueQiao_resume.pdf',
  },

  // Social handles
  social: {
    email: 'bridgoon97@gmail.com',
    scholar: 'https://scholar.google.com/citations?user=aYYVny8AAAAJ',
    github: 'https://github.com/bridgoon97',
    bilibili: 'https://space.bilibili.com/35423841',
    youtube: 'https://www.youtube.com/@bridgoon',
    twitter: 'https://twitter.com/bridgoon',
    linkedin: 'https://www.linkedin.com/in/yue-qiao-509289119',
  },
};
