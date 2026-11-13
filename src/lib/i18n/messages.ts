import type { PublicationStatus } from '@/types/publication';

export interface LocaleMessages {
  common: {
    all: string;
    copyToClipboard: string;
  };
  navigation: {
    openMainMenu: string;
  };
  theme: {
    system: string;
    light: string;
    dark: string;
    currentTheme: string;
    cycleTheme: string;
  };
  profile: {
    email: string;
    location: string;
    workAddress: string;
    click: string;
    googleMap: string;
    send: string;
    sendEmail: string;
    researchInterests: string;
    like: string;
    liked: string;
    thanks: string;
  };
  home: {
    about: string;
    news: string;
    selectedPublications: string;
    viewAll: string;
    noPublications: string;
    noNews: string;
  };
  publications: {
    searchPlaceholder: string;
    filters: string;
    year: string;
    type: string;
    noResults: string;
    empty: string;
    abstract: string;
    bibtex: string;
    code: string;
    authorPosition: string;
    authorPositions: Record<number, string>;
    statuses: Record<PublicationStatus, string>;
  };
  footer: {
    lastUpdated: string;
    builtWithPrism: string;
  };
}

const en: LocaleMessages = {
  common: {
    all: 'All',
    copyToClipboard: 'Copy to clipboard',
  },
  navigation: {
    openMainMenu: 'Open main menu',
  },
  theme: {
    system: 'System',
    light: 'Light',
    dark: 'Dark',
    currentTheme: 'Current theme',
    cycleTheme: 'Click to cycle theme',
  },
  profile: {
    email: 'Email',
    location: 'Location',
    workAddress: 'Work Address',
    click: 'Click',
    googleMap: 'Google Map',
    send: 'Send',
    sendEmail: 'Send Email',
    researchInterests: 'Research Interests',
    like: 'Like',
    liked: 'Liked',
    thanks: 'Thanks!',
  },
  home: {
    about: 'About',
    news: 'News',
    selectedPublications: 'Selected Publications',
    viewAll: 'View All',
    noPublications: 'No publications yet. Future work will be shared here.',
    noNews: 'Research and academic updates will appear here.',
  },
  publications: {
    searchPlaceholder: 'Search publications...',
    filters: 'Filters',
    year: 'Year',
    type: 'Type',
    noResults: 'No publications found matching your criteria.',
    empty: 'No publications yet. Future work will be shared here.',
    abstract: 'Abstract',
    bibtex: 'BibTeX',
    code: 'Code',
    authorPosition: 'Author position',
    authorPositions: { 1: 'First author', 2: 'Second author', 3: 'Third author' },
    statuses: {
      published: 'Published',
      accepted: 'Accepted',
      'under-review': 'Under review',
      submitted: 'Submitted',
      'in-preparation': 'In preparation',
      draft: 'Draft',
    },
  },
  footer: {
    lastUpdated: 'Last updated',
    builtWithPrism: 'Built with PRISM',
  },
};

const zh: LocaleMessages = {
  common: {
    all: '全部',
    copyToClipboard: '复制到剪贴板',
  },
  navigation: {
    openMainMenu: '打开主菜单',
  },
  theme: {
    system: '跟随系统',
    light: '浅色',
    dark: '深色',
    currentTheme: '当前主题',
    cycleTheme: '点击切换主题',
  },
  profile: {
    email: '邮箱',
    location: '地址',
    workAddress: '办公地址',
    click: '点击',
    googleMap: '谷歌地图',
    send: '发送',
    sendEmail: '发送邮件',
    researchInterests: '研究兴趣',
    like: '点赞',
    liked: '已点赞',
    thanks: '感谢支持！',
  },
  home: {
    about: '关于我',
    news: '动态',
    selectedPublications: '精选论文',
    viewAll: '查看全部',
    noPublications: '暂无论文，后续研究成果将在这里更新。',
    noNews: '研究进展与学术动态将在这里更新。',
  },
  publications: {
    searchPlaceholder: '搜索论文...',
    filters: '筛选',
    year: '年份',
    type: '类型',
    noResults: '没有找到符合条件的论文。',
    empty: '暂无论文，后续研究成果将在这里更新。',
    abstract: '摘要',
    bibtex: 'BibTeX',
    code: '代码',
    authorPosition: '作者排序',
    authorPositions: { 1: '第一作者', 2: '第二作者', 3: '第三作者' },
    statuses: {
      published: '已发表',
      accepted: '已录用',
      'under-review': '审稿中',
      submitted: '投稿中',
      'in-preparation': '准备中',
      draft: '草稿',
    },
  },
  footer: {
    lastUpdated: '最近更新',
    builtWithPrism: '由 PRISM 构建',
  },
};

export const messages: Record<string, LocaleMessages> = {
  en,
  zh,
};

export function getMessages(locale: string): LocaleMessages {
  return messages[locale] || en;
}
