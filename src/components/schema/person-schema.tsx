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
          url: DATA.url,
          sameAs: [
            DATA.contact.social.GitHub.url,
            DATA.contact.social.Bilibili.url,
            DATA.contact.social.Douyin.url,
            DATA.contact.social.Xiaohongshu.url,
            DATA.contact.social.NetEase.url,
          ],
          jobTitle: "Full Stack Developer",
          worksFor: {
            "@type": "Organization",
            name: "Independent Developer"
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
