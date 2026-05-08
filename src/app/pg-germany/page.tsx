import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PGGermanyTestimonials } from "@/components/Testimonials/PGGermanyTestimonials";

export const metadata: Metadata = {
  title: "Medical PG in Germany | SAMEDUCATION",
  description: "Pursue your Medical PG in Germany after MBBS in India. Fully-paid on-the-job training, no competitive clinical exams.",
};

export default function PGGermanyPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1920&auto=format&fit=crop"
          alt="Medical PG in Germany"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="text-blue-400 font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">
            [ Mission Germany ]
          </span>
          <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight uppercase leading-[1.1] mb-6">
            Medical PG In Germany
          </h1>
          <p className="text-lg text-white/80 font-light max-w-2xl mx-auto">
            Super specialization without competitive MCQ exams. Fully-paid on-the-job training as a doctor in Germany.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 pointer-events-none -z-10" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-slate-900 mb-6">
              Why Medical PG in Germany is Unique
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              When you decide to train as a specialist in Germany for your medical PG, you get rid of all the challenges faced by doctors in India. You can pursue your PG in Germany after MBBS without competitive clinical exams or compromising on your choice of specialization.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              The German system offers an integrated pathway for super specialization and settlement. It allows you to work in a hospital/clinic as a fully-paid doctor (Assistenzarzt) while pursuing your Medical PG. The specialist degree (Facharzt) is a by-product of your employment.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl rounded-full">1</div>
                <div>
                  <h4 className="font-bold text-sm tracking-widest uppercase text-slate-900 mb-1">Language & Approbation</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Comprehensive B2/C1 medical German training and guidance for the Fachsprachprüfung (FSP) and Kenntnisprüfung (KP) to secure your medical license (Approbation).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl rounded-full">2</div>
                <div>
                  <h4 className="font-bold text-sm tracking-widest uppercase text-slate-900 mb-1">Observerships & Interviews</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Leverage our strong network with German hospitals to secure clinical observerships (Hospitation) and residency job interviews.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl rounded-full">3</div>
                <div>
                  <h4 className="font-bold text-sm tracking-widest uppercase text-slate-900 mb-1">Zero Tuition Fees</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Postgraduate medical training in Germany is a salaried job, meaning you earn while you learn with zero tuition fees.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[600px] w-full bg-slate-100 overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop"
              alt="Hospital in Germany"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Programs & Services Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-blue-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-slate-900 mb-4">
              Programs & Services
            </h2>
            <p className="text-sm font-bold tracking-widest uppercase text-gray-500">
              Offering Programs That Meet Your Goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 shadow-xl border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-sm mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
            </div>
            <h3 className="text-xl font-medium tracking-tight uppercase text-slate-900 mb-4">
              Why <span className="text-blue-600">MEDICAL PG</span> IN GERMANY is Such a Unique System?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              When you decide to train as a specialist in Germany for your medical PG, you get rid of all the challenges faced by doctors/dentists in India. Pursue your PG in Germany after MBBS in India without competitive clinical exams or compromising on specialization. Germany offers an integrated pathway for super specialization and settlement, plus a handsome salary even before specialization begins.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-grow">
              MissionGermany extends its helping hand through a no-cost, all-inclusive range of integrated service for Doctors, Dentists & Pharmacists.
            </p>
            <Link href="/contact" className="text-xs font-bold tracking-widest uppercase text-blue-600 hover:text-slate-900 transition-colors">Read More &rarr;</Link>
          </div>

          <div className="bg-white p-10 shadow-xl border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-sm mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </div>
            <h3 className="text-xl font-medium tracking-tight uppercase text-slate-900 mb-4">
              Why <span className="text-blue-600">MASTERS</span> IN GERMANY is Such a Unique System?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Many Indian graduates favor pursuing Master's degrees in Germany due to its prestigious education system, featuring globally acclaimed universities. Germany's cost-effective education, with most public universities offering tuition-free programs, is another significant draw.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-grow">
              Combining quality education, affordability, career prospects, and cultural immersion, compel Indian graduates to advance their academic and professional pursuits in Germany.
            </p>
            <Link href="/contact" className="text-xs font-bold tracking-widest uppercase text-blue-600 hover:text-slate-900 transition-colors">Read More &rarr;</Link>
          </div>
        </div>
      </div>
      </section>

      {/* Work - Earn - Learn Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-slate-900">
            Work - Earn - Learn
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-slate-900 text-white p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-light uppercase tracking-widest mb-4">Lerne Deutsch</h3>
            <p className="text-sm font-bold tracking-widest text-blue-400 mb-6 uppercase">Simplifying German Language Training</p>
            <p className="text-white/80 leading-relaxed text-sm">
              We offer preparatory German Language courses to help you achieve your academic/career requisites for Germany. The shortage of skilled workers in Germany opens doors for qualified professionals worldwide.
            </p>
          </div>
          <div className="bg-white border-y border-r border-gray-200 p-12 flex flex-col justify-center items-start">
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight uppercase text-slate-900 mb-8 leading-snug">
              Every new language <span className="text-blue-600">we learn,</span><br/>
              opens new possibilities.
            </h3>
            <Link href="/contact" className="bg-slate-900 text-white text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-4 hover:bg-blue-600 transition-colors">
              Enroll Today
            </Link>
          </div>
        </div>
      </section>

      {/* What do we do? Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-slate-900 mb-8">
              What do we do?
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm leading-relaxed">We do meaningful, constructive, and honest applications for medical PG in Germany.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm leading-relaxed">We take the guesswork out of your journey and offer a complete roadmap towards your goal.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm leading-relaxed">We collaborate with successful medical practitioners in Germany to mentor you.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">■</span>
                <span className="text-gray-700 text-sm leading-relaxed">We ensure reliable resources and planned timelines for your smooth transition.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-600 text-white p-10 shadow-2xl">
            <h3 className="text-2xl font-medium tracking-tight uppercase mb-6">
              So, what are you waiting for?
            </h3>
            <div className="space-y-4 mb-8">
              <p className="flex items-center gap-3 font-medium text-lg">
                <span>📞</span> +91 9615543210
              </p>
              <p className="flex items-center gap-3 font-medium text-lg">
                <span>📞</span> +49 1523 6172349
              </p>
            </div>
            <div className="pt-8 border-t border-white/20">
              <h4 className="text-xl font-bold uppercase tracking-widest mb-2">If U Change Nothing,</h4>
              <h4 className="text-xl font-bold uppercase tracking-widest mb-6">Nothing Will Change</h4>
              <Link href="/contact" className="inline-block bg-white text-blue-600 text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-4 hover:bg-slate-900 hover:text-white transition-colors">
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PGGermanyTestimonials />

      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-slate-900 text-white overflow-hidden border-t border-gray-800">
        {/* Subtle line pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase text-white mb-6">The Roadmap to Facharzt</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">A structured, predictable 5-step process to becoming a medical specialist in Germany.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 hover:-translate-y-2 transition-transform duration-300">
              <span className="text-5xl font-light text-blue-500 mb-6 block">01</span>
              <h4 className="text-xl font-medium tracking-tight uppercase text-white mb-4">German Language Mastery</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Master German from A1 to B2 level. Strong communication is non-negotiable for working in German hospitals.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 hover:-translate-y-2 transition-transform duration-300">
              <span className="text-5xl font-light text-blue-500 mb-6 block">02</span>
              <h4 className="text-xl font-medium tracking-tight uppercase text-white mb-4">Defizitbescheid & Visa Application</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Document assessment by the German medical council and applying for the correct medical visa.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 hover:-translate-y-2 transition-transform duration-300">
              <span className="text-5xl font-light text-blue-500 mb-6 block">03</span>
              <h4 className="text-xl font-medium tracking-tight uppercase text-white mb-4">Medical German (C1) & Fachsprachprüfung (FSP)</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Clear the specialized medical language exam (FSP) focusing on doctor-patient and doctor-doctor communication.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 hover:-translate-y-2 transition-transform duration-300 lg:col-start-1 lg:col-end-2 lg:translate-x-1/2">
              <span className="text-5xl font-light text-blue-500 mb-6 block">04</span>
              <h4 className="text-xl font-medium tracking-tight uppercase text-white mb-4">Temporary License (Berufserlaubnis) & Work</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Begin working as a paid assistant doctor while preparing for your final medical exam.</p>
            </div>
            
            <div className="bg-blue-600 border border-blue-500 p-8 hover:-translate-y-2 transition-transform duration-300 lg:col-start-2 lg:col-end-3 lg:translate-x-1/2 shadow-2xl shadow-blue-900/50">
              <span className="text-5xl font-light text-white mb-6 block">05</span>
              <h4 className="text-xl font-medium tracking-tight uppercase text-white mb-4">Kenntnisprüfung (KP) & Full Approbation</h4>
              <p className="text-sm text-blue-100 leading-relaxed">Clear the knowledge exam (KP) to receive your permanent medical license and continue your Facharzt training.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}