import { Metadata } from "next";
import { Hero, Features, Testimonials, CTA, Coaching, Study, ConsultantInfo, GlobalIndian, FAQ } from "./home";

export const metadata: Metadata = {
  title: "SAMEDUCATION | Premium Educational Guidance & Study Abroad Services",
  description: "Navigate your academic journey seamlessly. Get expert university admissions and study abroad consulting with guaranteed worldwide support.",
  openGraph: {
    title: "SAMEDUCATION | Premium Educational Guidance",
    description: "Expert educational guidance and admissions support.",
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
    "description": "Premium educational guidance, university admissions, and study abroad consulting.",
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
        <GlobalIndian />
        <Coaching />
        <Study />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
