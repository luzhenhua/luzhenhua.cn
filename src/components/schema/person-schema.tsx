import { DATA } from "@/data/resume";

export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: DATA.username,
          alternateName: [DATA.username],
          description: DATA.description,
          image: `${DATA.url}/portfolio.png`,
          url: DATA.url,
          sameAs: [
            DATA.contact.social.GitHub.url,
            DATA.contact.social.Bilibili.url,
            DATA.contact.social.Douyin.url,
          ],
          jobTitle: "全栈开发者",
          worksFor: {
            "@type": "Organization",
            name: "独立开发者"
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: DATA.location,
            addressCountry: "CN"
          },
          email: DATA.contact.email,
          knowsAbout: DATA.skills
        })
      }}
    />
  );
}
