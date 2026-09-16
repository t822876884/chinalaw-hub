export type City = {
  slug: string;
  name: string;
  tier: string;
};

export type Practice = {
  slug: string;
  name: string;
  blurb: string;
};

export type Lawyer = {
  slug: string;
  name: string;
  title: string;
  firm: string;
  city: string;
  practices: string[];
  languages: string[];
  barNumber: string;
  verified: boolean;
  verifiedAt: string;
  yearStarted: number;
  bio: string;
  highlights: string[];
  contact: {
    whatsapp?: string;
    wechat?: string;
    email?: string;
  };
  isSample?: boolean;
};

export const SITE_URL = "https://example.com";

export const SITE = {
  name: "ChinaLaw Hub",
  tagline: "Find a verified, English-speaking lawyer in China",
  description:
    "A free directory of PRC-licensed lawyers who work with foreign individuals and companies. Every profile is checked against the official Ministry of Justice register. Contact lawyers directly on WhatsApp.",
  verificationUrls: [
    {
      label: "Ministry of Justice lawyer register",
      url: "https://app.gjzwfw.gov.cn/jmopen/webapp/html5/lscx/",
    },
    {
      label: "National lawyer credit platform (ACLA)",
      url: "https://credit.acla.org.cn",
    },
    {
      label: "Lawyer identity verification (ACLA)",
      url: "https://passport.acla.org.cn",
    },
  ],
};

export const CITIES: City[] = [
  { slug: "beijing", name: "Beijing", tier: "Tier 1" },
  { slug: "shanghai", name: "Shanghai", tier: "Tier 1" },
  { slug: "shenzhen", name: "Shenzhen", tier: "Tier 1" },
  { slug: "guangzhou", name: "Guangzhou", tier: "Tier 1" },
  { slug: "hangzhou", name: "Hangzhou", tier: "Tier 2" },
  { slug: "chengdu", name: "Chengdu", tier: "Tier 2" },
  { slug: "nanjing", name: "Nanjing", tier: "Tier 2" },
];

export const PRACTICES: Practice[] = [
  {
    slug: "corporate",
    name: "Corporate & Investment",
    blurb:
      "Entity setup (WFOE, JV, rep office), M&A, corporate governance, market entry and exit.",
  },
  {
    slug: "employment",
    name: "Employment & Immigration",
    blurb:
      "Labour contracts, terminations, work permits and visas, non-compete and trade secrets.",
  },
  {
    slug: "ip",
    name: "Intellectual Property",
    blurb:
      "Trademark and patent filing, brand enforcement, customs recordation, trade secret protection.",
  },
  {
    slug: "dispute",
    name: "Dispute Resolution",
    blurb:
      "Contract disputes, international arbitration, debt recovery, enforcement of foreign judgments.",
  },
  {
    slug: "family",
    name: "Family & Private Client",
    blurb:
      "Divorce, child custody and visitation, property division, wills and succession for foreigners.",
  },
  {
    slug: "criminal",
    name: "Criminal Defence",
    blurb:
      "Detention and bail, criminal defence for foreign nationals, white-collar and compliance matters.",
  },
];

export const LAWYERS: Lawyer[] = [
  {
    slug: "li-wenjun",
    name: "Li Wenjun",
    title: "Senior Partner",
    firm: "Beichen Law Offices",
    city: "beijing",
    practices: ["corporate", "dispute"],
    languages: ["English", "Mandarin"],
    barNumber: "11101200810000000",
    verified: true,
    verifiedAt: "2026-08-20",
    yearStarted: 2008,
    bio: "Advises foreign investors on market entry, joint venture structuring and shareholder disputes. Has represented clients in over 60 CIETAC and BAC arbitration proceedings.",
    highlights: [
      "60+ arbitration cases at CIETAC and BAC",
      "Advised 30+ WFOE incorporations",
      "LLM, University of London",
    ],
    contact: { whatsapp: "8613800138000", wechat: "sample-beijing-01", email: "sample.beijing@example.com" },
    isSample: true,
  },
  {
    slug: "zhang-yiran",
    name: "Zhang Yiran",
    title: "Partner",
    firm: "Harborview Law Firm",
    city: "shanghai",
    practices: ["employment", "corporate"],
    languages: ["English", "Mandarin", "French"],
    barNumber: "13101201110000000",
    verified: true,
    verifiedAt: "2026-08-20",
    yearStarted: 2011,
    bio: "Handles employment matters for multinational employers, including mass layoffs, labour arbitration and cross-border transfer of employees. Also advises on HR compliance audits.",
    highlights: [
      "Labour arbitration defence for 40+ MNCs",
      "Regular speaker at AmCham Shanghai",
      "Dual qualified in PRC and New York",
    ],
    contact: { whatsapp: "8613800138001", wechat: "sample-shanghai-01", email: "sample.shanghai@example.com" },
    isSample: true,
  },
  {
    slug: "chen-haoyu",
    name: "Chen Haoyu",
    title: "Partner",
    firm: "Lanting IP Law",
    city: "shenzhen",
    practices: ["ip", "dispute"],
    languages: ["English", "Mandarin"],
    barNumber: "14403201310000000",
    verified: true,
    verifiedAt: "2026-08-21",
    yearStarted: 2013,
    bio: "Focuses on trademark and patent enforcement for foreign brands, including customs recordation, administrative raids and e-commerce takedowns on Chinese platforms.",
    highlights: [
      "Recovered 200+ infringing listings",
      "Customs recordation for 15 global brands",
      "Handles cross-border IP licensing",
    ],
    contact: { whatsapp: "8613800138002", wechat: "sample-shenzhen-01", email: "sample.shenzhen@example.com" },
    isSample: true,
  },
  {
    slug: "wu-siqi",
    name: "Wu Siqi",
    title: "Senior Lawyer",
    firm: "Yuheng Law Firm",
    city: "guangzhou",
    practices: ["dispute", "corporate"],
    languages: ["English", "Mandarin", "Cantonese"],
    barNumber: "14401201510000000",
    verified: true,
    verifiedAt: "2026-08-22",
    yearStarted: 2015,
    bio: "Represents foreign traders in supply chain disputes, non-payment claims and product quality litigation against Chinese manufacturers.",
    highlights: [
      "Debt recovery across 12 provinces",
      "Handles evidence notarisation for foreign clients",
      "Works with overseas counsel on enforcement",
    ],
    contact: { whatsapp: "8613800138003", wechat: "sample-guangzhou-01", email: "sample.guangzhou@example.com" },
    isSample: true,
  },
  {
    slug: "sun-mengyao",
    name: "Sun Mengyao",
    title: "Partner",
    firm: "Jingyuan Law Offices",
    city: "hangzhou",
    practices: ["corporate", "ip"],
    languages: ["English", "Mandarin"],
    barNumber: "13301201210000000",
    verified: true,
    verifiedAt: "2026-08-22",
    yearStarted: 2012,
    bio: "Advises cross-border e-commerce and consumer brands on supply agreements, platform compliance and IP portfolio management.",
    highlights: [
      "Cross-border e-commerce compliance",
      "Trademark portfolios for 50+ brands",
      "Distribution and agency agreements",
    ],
    contact: { whatsapp: "8613800138004", wechat: "sample-hangzhou-01", email: "sample.hangzhou@example.com" },
    isSample: true,
  },
  {
    slug: "huang-zhiwei",
    name: "Huang Zhiwei",
    title: "Senior Partner",
    firm: "Qinglu Law Firm",
    city: "chengdu",
    practices: ["criminal", "dispute"],
    languages: ["English", "Mandarin"],
    barNumber: "15101200610000000",
    verified: true,
    verifiedAt: "2026-08-23",
    yearStarted: 2006,
    bio: "Criminal defence lawyer representing foreign nationals in detention, bail applications and trial defence. Also handles white-collar compliance investigations.",
    highlights: [
      "Defended foreign nationals in 40+ cases",
      "Handles detention and bail applications",
      "Corporate criminal compliance reviews",
    ],
    contact: { whatsapp: "8613800138005", wechat: "sample-chengdu-01", email: "sample.chengdu@example.com" },
    isSample: true,
  },
  {
    slug: "zhao-peilin",
    name: "Zhao Peilin",
    title: "Lawyer",
    firm: "Mingze Law Offices",
    city: "nanjing",
    practices: ["family", "dispute"],
    languages: ["English", "Mandarin"],
    barNumber: "13201201610000000",
    verified: true,
    verifiedAt: "2026-08-23",
    yearStarted: 2016,
    bio: "Assists foreign residents with divorce, child custody, property division and succession matters, including recognition of foreign judgments.",
    highlights: [
      "Cross-border divorce and custody",
      "Recognition of foreign judgments",
      "Bilingual document preparation",
    ],
    contact: { whatsapp: "8613800138006", wechat: "sample-nanjing-01", email: "sample.nanjing@example.com" },
    isSample: true,
  },
  {
    slug: "feng-yuqing",
    name: "Feng Yuqing",
    title: "Partner",
    firm: "Beichen Law Offices",
    city: "shanghai",
    practices: ["employment", "criminal"],
    languages: ["English", "Mandarin", "German"],
    barNumber: "13101201010000000",
    verified: false,
    verifiedAt: "",
    yearStarted: 2010,
    bio: "Handles labour disputes and workplace compliance investigations for European employers operating in China.",
    highlights: [
      "Workplace compliance investigations",
      "Non-compete enforcement",
      "German-speaking client service",
    ],
    contact: { whatsapp: "8613800138007", wechat: "sample-shanghai-02" },
    isSample: true,
  },
];

export function cityBySlug(slug: string) {
  return CITIES.find((c) => c.slug === slug);
}

export function practiceBySlug(slug: string) {
  return PRACTICES.find((p) => p.slug === slug);
}

export function lawyerBySlug(slug: string) {
  return LAWYERS.find((l) => l.slug === slug);
}

export function lawyersByCity(slug: string) {
  return LAWYERS.filter((l) => l.city === slug);
}

export function lawyersByPractice(slug: string) {
  return LAWYERS.filter((l) => l.practices.includes(slug));
}

export function lawyersByCityAndPractice(city: string, practice: string) {
  return LAWYERS.filter((l) => l.city === city && l.practices.includes(practice));
}

export function cityName(slug: string) {
  return cityBySlug(slug)?.name ?? slug;
}

export function practiceName(slug: string) {
  return practiceBySlug(slug)?.name ?? slug;
}
