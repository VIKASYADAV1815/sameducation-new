import { Metadata } from "next";
import Image from "next/image";
import { NursingTestimonials } from "@/components/Testimonials/NursingTestimonials";

export const metadata: Metadata = {
  title: "Nursing in Canada & UK | SAMEDUCATION",
  description: "Study and work as a Registered Nurse in Canada and the UK. Transition programs, Palliative Care, Leadership, and more.",
};

export default function NursingPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
        <Image
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1920&auto=format&fit=crop"
          alt="Nursing in Canada and UK"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="text-blue-400 font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">
            [ Global Nursing Pathway ]
          </span>
          <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight uppercase leading-[1.1] mb-6">
            Study & Work as a Nurse in Canada & UK
          </h1>
          <p className="text-lg text-white/80 font-light max-w-2xl mx-auto">
            Advance your nursing career globally. Upskill with specialized programs, clear licensure exams, and become a Registered Nurse abroad.
          </p>
        </div>
      </section>

      {/* Intro & Canada Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-slate-900 mb-6">
              Nursing in Canada
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Canada has an acute shortage of nurses, leading to a heavy reliance on internationally educated nursing talent. We provide specialized 1-year graduate certificate programs that conform to the latest healthcare practices in Canada, ensuring a smooth transition to becoming a Registered Nurse.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Partnering with top institutions like <strong>Seneca Polytechnic</strong> and <strong>Niagara College</strong>, we ensure you receive the highest quality education and clinical exposure.
            </p>
            
            <h3 className="text-sm font-bold tracking-widest uppercase text-slate-900 mb-4">Popular Programs</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">■</span>
                <span className="text-gray-700 text-sm">Palliative Care – Multidiscipline</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">■</span>
                <span className="text-gray-700 text-sm">Nursing Leadership & Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">■</span>
                <span className="text-gray-700 text-sm">Gerontology & Chronic Disease Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">■</span>
                <span className="text-gray-700 text-sm">Transition for Internationally Educated Nurses</span>
              </li>
            </ul>
            
            <div className="bg-slate-50 p-6 border border-slate-100">
              <h4 className="text-xs font-bold tracking-widest uppercase text-slate-900 mb-2">Requirements</h4>
              <p className="text-sm text-gray-600">IELTS score as low as 6.0 or PTE equivalent. Nursing Diploma/Degree from home country.</p>
            </div>
          </div>
          <div className="relative h-[600px] w-full bg-slate-100 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop"
              alt="Nursing Students"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Patterned Background - UK Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-slate-50 overflow-hidden border-t border-gray-200">
        {/* Subtle line pattern similar to pg-germany */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#e5e7eb_10px,#e5e7eb_11px)] opacity-30 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] w-full bg-white shadow-xl p-4">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop"
                  alt="UK Hospital"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-slate-900 mb-6">
                Nursing in the UK
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Practicing nursing in the UK opens a wealth of opportunities across diverse disciplines in hospitals, clinics, and community health centers. The NHS values skilled nurses and offers competitive salaries and resources for professional development.
              </p>
              
              <h3 className="text-sm font-bold tracking-widest uppercase text-slate-900 mb-4">Popular Programs</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">■</span>
                  <span className="text-gray-700 text-sm">BSc (Hons) Nursing Practice (Top Up)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">■</span>
                  <span className="text-gray-700 text-sm">MSc Nursing Practice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">■</span>
                  <span className="text-gray-700 text-sm">Direct Work Pathways (IELTS 7.0 / OET)</span>
                </li>
              </ul>

              <div className="bg-white p-6 shadow-sm border border-gray-100">
                <h4 className="text-xs font-bold tracking-widest uppercase text-slate-900 mb-2">The Pathway</h4>
                <p className="text-sm text-gray-600">Complete your degree in India, enroll in a specialized top-up program, apply for visa, and clear the licensure requirements to become a global nurse.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NursingTestimonials />

      {/* Global Pathway Steps */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-slate-900 mb-16">
          Your 5-Step Global Pathway
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {[
            { step: "01", title: "Complete Degree", desc: "Finish your nursing diploma/degree in your home country." },
            { step: "02", title: "Enroll Abroad", desc: "Enroll in specialized nursing programs in Canada or UK." },
            { step: "03", title: "Visa Process", desc: "Apply and secure visas to study & work abroad seamlessly." },
            { step: "04", title: "Licensure Exam", desc: "Prepare for and write the nursing licensure exam (e.g. NCLEX)." },
            { step: "05", title: "Global Nurse", desc: "Start your rewarding career as a Registered Global Nurse." }
          ].map((item, i) => (
            <div key={i} className="relative flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-light mb-6 relative z-10">
                {item.step}
              </div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-slate-900 mb-3">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              {i !== 4 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-[1px] bg-gray-200 -z-0" />
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}