// News items, in reverse chronological order (sorted automatically by date).
// Each item is one sentence; HTML links are allowed in the string.
// To add a new item, copy the template at the bottom of this file.

export interface NewsItem {
  date: string;          // YYYY-MM-DD
  zh: string;            // Chinese version (HTML allowed)
  en: string;            // English version (HTML allowed)
}

export const news: NewsItem[] = [
  {
    date: '2024-05-09',
    zh: '荣获 <a href="https://researchday.princeton.edu/present/awards/2024-award-winners">普林斯顿研究日 2024</a> 颁发的「创新与企业家精神奖」。可以观看我们的<a href="https://mediacentral.princeton.edu/media/t/1_zgdy60td">获奖视频</a>。',
    en: 'I was given the Innovation and Entrepreneurial Mindset Award at <a href="https://researchday.princeton.edu/present/awards/2024-award-winners">Princeton Research Day 2024</a>. Check out our <a href="https://mediacentral.princeton.edu/media/t/1_zgdy60td">award-winning video</a>.',
  },
  {
    date: '2023-12-08',
    zh: '在 Acoustics Sydney 2023 上做了关于<a href="https://pubs.aip.org/asa/jasa/article/154/4_supplement/A182/2924110/Experimental-evaluation-of-bilateral-Ambisonics">双侧 Ambisonics 实验评估</a>的报告，讨论了其用于合成双耳房间传递函数（BRTF）以及在个人声区中的应用。(<a href="/assets/pdf/Slides_Acoustics_Sydney_2023.pdf">slides</a>)',
    en: 'I gave a presentation at Acoustics Sydney 2023 on our <a href="https://pubs.aip.org/asa/jasa/article/154/4_supplement/A182/2924110/Experimental-evaluation-of-bilateral-Ambisonics">latest work</a> on experimental evaluation of bilateral Ambisonics for synthesizing BRTFs in personal sound zones. (<a href="/assets/pdf/Slides_Acoustics_Sydney_2023.pdf">slides</a>)',
  },
  {
    date: '2023-10-27',
    zh: '我们的<a href="https://aes2.org/publications/elibrary-page/?id=22312">最新工作</a>在 AES 155 上展示，讨论了如何用神经网络建模并插值带头部追踪的双耳房间冲激响应。',
    en: 'Our <a href="https://aes2.org/publications/elibrary-page/?id=22312">latest work</a> was presented at AES 155. We discussed using neural networks to model and interpolate binaural room impulse responses with head tracking.',
  },
  {
    date: '2023-09-07',
    zh: '在 I3DA 2023 会议上展示了我们的<a href="https://ieeexplore.ieee.org/abstract/document/10289558">工作</a>「带串扰消除的个人声区性能优化」。',
    en: 'I presented our <a href="https://ieeexplore.ieee.org/abstract/document/10289558">work</a> "Performance Optimization of Personal Sound Zones with Crosstalk Cancellation" at 2023 I3DA Conference.',
  },
  {
    date: '2023-08-16',
    zh: '荣获本年度 AES 教育基金会奖学金（AES Educational Foundation Scholarship）。详见<a href="https://aes2.org/news/aes-educational-foundation-announces-awardees-for-the-2023-2024-academic-year/">官方公告</a>。',
    en: 'I was awarded AES Educational Foundation Scholarship Recognition this year. Check out the <a href="https://aes2.org/news/aes-educational-foundation-announces-awardees-for-the-2023-2024-academic-year/">official announcement</a>.',
  },
  {
    date: '2023-05-15',
    zh: '我们关于个人声区的<a href="https://www.aes.org/e-lib/browse.cfm?elib=22071">最新工作</a>在芬兰阿尔托大学举办的 AES 154 上展示，讨论了头部追踪个人声区的最优空间采样方案。',
    en: 'Our <a href="https://www.aes.org/e-lib/browse.cfm?elib=22071">latest work</a> on personal sound zones was presented at AES 154 at Aalto University in Finland. We discussed optimal spatial sampling scheme for head-tracked personal sound zones.',
  },
  {
    date: '2022-10-26',
    zh: '我在 Meta 实习期间的<a href="https://www.aes.org/e-lib/browse.cfm?elib=21931">工作</a>在 AES 153 上展示，提出了一种基于机器学习的空间音频质量评估模型。',
    en: 'My <a href="https://www.aes.org/e-lib/browse.cfm?elib=21931">internship work</a> at Meta was presented at the AES 153 Convention. We proposed a machine-learning-based model for the evaluation of spatial audio quality.',
  },
  {
    date: '2022-08-16',
    zh: '在 <a href="https://aes2.org/events-calendar/avar-2022/">AES AVAR 2022 会议</a>主持了 workshop「Personal Sound Zones for AR/VR Applications」。(<a href="/assets/pdf/Slides_AVAR2022.pdf">slides</a>)',
    en: 'I presented in a <a href="https://emamo.com/event/avar-2022-international-conference-on-audio-for-virtual-and-augmented-reality/s/personal-sound-zones-for-arvr-applications-WQYGXW">workshop</a> titled "Personal Sound Zones for AR/VR Applications" at the <a href="https://aes2.org/events-calendar/avar-2022/">AES AVAR 2022 Conference</a>. (<a href="/assets/pdf/Slides_AVAR2022.pdf">slides</a>)',
  },
  {
    date: '2022-05-19',
    zh: '我们在第 152 届 AES Convention 上展示的<a href="https://www.aes.org/e-lib/browse.cfm?elib=21692">会议论文</a>获得了「最佳学生论文奖」。可参考 MAE 系的<a href="https://mae.princeton.edu/about-mae/news/yue-qiao-receives-best-student-paper-award-aes-convention">报道</a>。',
    en: 'Our <a href="https://www.aes.org/e-lib/browse.cfm?elib=21692">conference paper</a> presented at the 152nd AES Convention won the best student paper award. See also the <a href="https://mae.princeton.edu/about-mae/news/yue-qiao-receives-best-student-paper-award-aes-convention">post</a> from our department.',
  },
  {
    date: '2022-05-16',
    zh: '开始在 Meta Reality Labs 担任研究工程师实习生（TED Audio Experience 团队，与 <a href="https://www.linkedin.com/in/pafaho/">Pablo F. Hoffmann</a> 合作）。',
    en: 'Started my summer internship as a research engineer intern at Meta Reality Labs, working with <a href="https://www.linkedin.com/in/pafaho/">Pablo F. Hoffmann</a> in the TED Audio Experience Team.',
  },
  {
    date: '2021-08-05',
    zh: '我们关于用 SDM 方法实现个人声场传递的<a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=8_uEXGUAAAAJ&citation_for_view=8_uEXGUAAAAJ:9yKSN-GCB0IC">短论文</a>已被接收，将在第 151 届 AES Convention 上展示。',
    en: 'Our <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=8_uEXGUAAAAJ&citation_for_view=8_uEXGUAAAAJ:9yKSN-GCB0IC">E-brief paper</a> on using SDM method for personal sound delivery is accepted and will be presented at the 151st AES Convention.',
  },
];

/* ------------------------------------------------------------------ TEMPLATE
{
  date: '2026-01-15',
  zh: '中文动态...',
  en: 'English news...',
},
--------------------------------------------------------------------- */
