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
            DATA.contact.social.X.url,
            DATA.contact.social.Zhihu.url,
            DATA.contact.social.Youtube.url,
          ],
          jobTitle: "Full Stack Developer",
          worksFor: {
            "@type": "Organization",
            name: "Freelance"
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Trident Academy Of Technology"
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Odisha",
            addressCountry: "India"
          },
          email: DATA.contact.email,
          knowsAbout: DATA.skills
        })
      }}
    />
  );
}
