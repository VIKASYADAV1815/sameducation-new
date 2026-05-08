import { Metadata } from "next";
import Image from "next/image";
import { MBBSTestimonials } from "@/components/Testimonials/MBBSTestimonials";

export const metadata: Metadata = {
  title: "MBBS Abroad & India | SAMEDUCATION",
  description: "Study MBBS exclusively in Central America, Europe, and India. Affordable degrees with global recognition.",
};

export default function MBBSPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
        <Image
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1920&auto=format&fit=crop"
          alt="MBBS in Central America and Europe"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="text-blue-400 font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">
            [ Medipedia Overseas ]
          </span>
          <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight uppercase leading-[1.1] mb-6">
            Study MBBS Abroad & In India
          </h1>
          <p className="text-lg text-white/80 font-light max-w-2xl mx-auto">
            Exclusive opportunities to pursue your medical degree in Central America, Europe, and top institutions in India. Global recognition and premium education.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-slate-900 mb-6">
              Why Choose Central America & Europe?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We focus exclusively on Central America and Europe for MBBS abroad because these regions offer an unparalleled combination of clinical exposure, globally recognized curriculum (USMLE/PLAB aligned), and affordability.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our partner universities are WHO recognized and approved by major medical councils worldwide. We ensure that you study in state-of-the-art facilities with access to international clinical rotations.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-sm text-gray-700">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span> USMLE / PLAB Aligned Curriculum
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span> WHO Recognized Universities
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span> Affordable Tuition Fees
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span> Global Clinical Rotations
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[300px] w-full mt-12">
              <Image
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop"
                alt="Doctor studying"
                fill
                sizes="100vw"
                className="object-cover rounded-sm shadow-lg"
              />
            </div>
            <div className="relative h-[300px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                alt="Medical Laboratory"
                fill
                sizes="100vw"
                className="object-cover rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-slate-50 overflow-hidden border-t border-gray-200">
        {/* Subtle line pattern similar to pg-germany */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#e5e7eb_10px,#e5e7eb_11px)] opacity-30 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-slate-900 mb-6">
              Our Primary Destinations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 shadow-xl p-8 hover:-translate-y-1 transition-transform">
              <div className="text-4xl text-blue-600 font-light mb-6">01</div>
              <h3 className="text-xl font-medium tracking-tight uppercase text-slate-900 mb-4">Central America</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Experience an American-aligned curriculum designed to help you ace the USMLE. Benefit from clinical rotations in top-tier hospitals and a pathway that opens doors to residency programs in the USA and globally.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 shadow-xl p-8 hover:-translate-y-1 transition-transform">
              <div className="text-4xl text-blue-600 font-light mb-6">02</div>
              <h3 className="text-xl font-medium tracking-tight uppercase text-slate-900 mb-4">Europe</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Study in a culturally rich environment with state-of-the-art medical infrastructure. European medical degrees are highly respected worldwide and offer a strong foundation for both clinical practice and medical research.
              </p>
            </div>

            <div className="bg-white border border-gray-200 shadow-xl p-8 hover:-translate-y-1 transition-transform">
              <div className="text-4xl text-blue-600 font-light mb-6">03</div>
              <h3 className="text-xl font-medium tracking-tight uppercase text-slate-900 mb-4">India</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                For those preferring to stay closer to home, we provide expert admission guidance for top medical colleges in India, ensuring you navigate the competitive landscape effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-slate-900 text-white overflow-hidden">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase mb-6">
              Awarded Best Medical Consultant - 18 Years of Success
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Transparent Fee Structure", icon: "💰" },
                { title: "Budget-friendly counseling", icon: "💳" },
                { title: "NRI Seat Assistance & Loans", icon: "🏦" },
                { title: "Hassle-Free Admission", icon: "✅" },
                { title: "Documentation Assistance", icon: "📄" },
                { title: "Updates on Counseling & Cut-offs", icon: "📈" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-2xl">{item.icon}</div>
                  <span className="text-sm font-medium tracking-wide">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-8 items-center text-center">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">350+</div>
                <div className="text-xs tracking-widest uppercase text-white/70">Counselors</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">600+</div>
                <div className="text-xs tracking-widest uppercase text-white/70">University Tie-ups</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">31k+</div>
                <div className="text-xs tracking-widest uppercase text-white/70">Success Stories</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">99%</div>
                <div className="text-xs tracking-widest uppercase text-white/70">Visa Success Ratio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MBBSTestimonials />

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Everything you need to know about MBBS abroad.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "Is NEET mandatory for studying MBBS abroad?", a: "Yes, for Indian students, qualifying NEET is mandatory to study MBBS abroad if you intend to return and practice in India." },
              { q: "Are the universities WHO recognized?", a: "Absolutely. We exclusively partner with universities that are recognized by WHO, WDOMS, and approved by the NMC (National Medical Commission)." },
              { q: "What is the medium of instruction?", a: "All our partner universities in Central America and Europe offer the MBBS program entirely in English." },
              { q: "Do you help with education loans?", a: "Yes, our documentation and finance team provides complete assistance in securing education loans from major Indian banks." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}