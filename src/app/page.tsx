import { DATA } from "@/data/resume";
import { PersonSchema } from "@/components/schema/person-schema";
import { Metadata } from "next";
import { HomePageContent } from "@/components/home-page-content";

export const metadata: Metadata = {
  title: DATA.username,
  description: DATA.description,
  openGraph: {
    title: DATA.username,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.username,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DATA.username,
    description: DATA.description,
  },
};

export default function Page() {
  return (
    <>
      <PersonSchema />
      <HomePageContent />
    </>
  );
}
