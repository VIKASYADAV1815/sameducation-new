import { Metadata } from "next";
import { Hero, Features, Testimonials, CTA, Coaching, Study, ConsultantInfo, GlobalIndian, FAQ, NursingPrograms } from "./home";

export const metadata: Metadata = {
  title: "SAMEDUCATION | Germany & Medical Study Guidance",
  description: "Focused support for Nursing pathways, MBBS medical universities abroad, and the Germany medical route for MS, MD, MDS, Approbation, and hospital applications.",
  openGraph: {
    title: "SAMEDUCATION | Germany & Medical Study Guidance",
    description: "Focused support for Nursing pathways, MBBS medical universities abroad, and the Germany medical route for MS, MD, MDS, Approbation, and hospital applications.",
    url: "https://sameducation.com",
    siteName: "SAMEDUCATION",
    images: [
      {
        url: "https://sameducation.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "SAMEDUCATION",
    "url": "https://sameducation.com",
    "logo": "https://sameducation.com/logo.png",
    "description": "Premium educational guidance for nursing, MBBS, and Germany medical admissions pathways.",
    "sameAs": [
      "https://facebook.com/sameducation",
      "https://twitter.com/sameducation",
      "https://linkedin.com/company/sameducation"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <Hero />
        <ConsultantInfo />
        <Study />
        <NursingPrograms />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
