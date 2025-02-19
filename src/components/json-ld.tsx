import {DATA} from "@/data/resume";

export function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: DATA.username,
    givenName: DATA.username,
    familyName: DATA.username,
    url: DATA.url,
    jobTitle: '全栈开发者',
    worksFor: {
      '@type': 'Organization',
      name: 'Self-Employed'
    },
    sameAs: [
      'https://github.com/hellokaton',
      'https://x.com/hellokaton'
    ],
    knowsAbout: [
      'Web Development',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Full Stack Development'
    ],
    description: DATA.description
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
