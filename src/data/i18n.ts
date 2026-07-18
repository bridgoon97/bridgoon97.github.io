// All UI labels in one place. To rename a label, edit here.
// Longer prose lives inline in pages as <span class="zh-only">/<span class="en-only">.

export type Lang = 'zh' | 'en';

export const i18n = {
  nav: {
    about:        { zh: '关于',   en: 'about' },
    publications: { zh: '论文',   en: 'publications' },
    blog:         { zh: '博客',   en: 'blog' },
    cv:           { zh: '简历',   en: 'cv' },
  },
  sections: {
    highlights:    { zh: '// 研究方向',  en: '// research highlights' },
    news:          { zh: '// 近期动态',  en: '// news' },
    selected_pubs: { zh: '// 代表论文',  en: '// selected publications' },
    contact:       { zh: '// 联系方式',  en: '// contact' },
    all:           { zh: '全部 →',       en: 'all →' },
  },
  page: {
    publications: {
      title: { zh: '论文', en: 'publications' },
      desc:  { zh: '同行评议的期刊与会议论文。',
               en: 'Peer-reviewed journal and conference publications.' },
    },
    blog: {
      title: { zh: '博客', en: 'blog' },
      desc:  { zh: '关于声学、信号处理、深度学习的零散思考。',
               en: 'Notes on acoustics, signal processing, and machine learning.' },
      empty: { zh: '暂无文章。',  en: 'No posts yet.' },
    },
  },
};
