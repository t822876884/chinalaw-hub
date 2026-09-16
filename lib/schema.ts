import {
  SITE,
  SITE_URL,
  cityName,
  practiceName,
  type Lawyer,
  type Practice,
} from "./data";

type Crumb = { name: string; path: string };

export function breadcrumbSchema(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE_URL,
    description: SITE.description,
    inLanguage: "en",
  };
}

export function lawyerSchema(lawyer: Lawyer) {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: lawyer.name,
    url: `${SITE_URL}/lawyers/${lawyer.slug}`,
    jobTitle: lawyer.title,
    description: lawyer.bio,
    knowsLanguage: lawyer.languages.map(langToCode),
    worksFor: {
      "@type": "LegalService",
      name: lawyer.firm,
      address: {
        "@type": "PostalAddress",
        addressLocality: cityName(lawyer.city),
        addressCountry: "CN",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName(lawyer.city),
      addressCountry: "CN",
    },
    areaServed: { "@type": "Country", name: "China" },
    knowsAbout: lawyer.practices.map(practiceName),
    foundingDate: String(lawyer.yearStarted),
  };
}

export function itemListSchema(
  lawyers: Lawyer[],
  listName: string,
  listPath: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    url: `${SITE_URL}${listPath}`,
    numberOfItems: lawyers.length,
    itemListElement: lawyers.map((l, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/lawyers/${l.slug}`,
      name: l.name,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function practiceSchema(practice: Practice) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${practice.name} legal services in China`,
    serviceType: practice.name,
    description: practice.blurb,
    areaServed: { "@type": "Country", name: "China" },
    provider: { "@type": "Organization", name: SITE.name, url: SITE_URL },
  };
}

function langToCode(language: string) {
  const map: Record<string, string> = {
    English: "en",
    Mandarin: "zh-CN",
    Cantonese: "yue",
    French: "fr",
    German: "de",
    Spanish: "es",
    Japanese: "ja",
    Korean: "ko",
    Russian: "ru",
  };
  return map[language] ?? language;
}

