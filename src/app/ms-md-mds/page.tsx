import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MS / MD / MDS | SAMEDUCATION",
  description: "Postgraduate medical admissions made seamless. Secure your specialization in top institutions.",
};

export default function MSMDMDSPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
        <Image
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1920&auto=format&fit=crop"
          alt="MS MD MDS"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="text-blue-400 font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">
            [ Postgraduate Medical ]
          </span>
          <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight uppercase leading-[1.1] mb-6">
            MS / MD / MDS Admissions
          </h1>
          <p className="text-lg text-white/80 font-light max-w-2xl mx-auto">
            Secure your medical or dental specialization. We make the complex postgraduate admission process seamless and predictable.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-slate-900 mb-6">
              Strategic Specialization Planning
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Gaining admission into top MS, MD, or MDS programs requires more than just good scores. It demands strategic planning, flawless documentation, and expert guidance. 
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Whether you are looking for clinical or non-clinical branches, we provide end-to-end support to ensure you secure a seat in your desired specialization without the usual stress.
            </p>
            <div className="flex gap-4 mt-8">
              <div className="bg-slate-50 px-6 py-3 border border-slate-200">
                <span className="block text-xl font-medium text-slate-900">MD</span>
                <span className="text-xs tracking-widest uppercase text-gray-500">Doctor of Medicine</span>
              </div>
              <div className="bg-slate-50 px-6 py-3 border border-slate-200">
                <span className="block text-xl font-medium text-slate-900">MS</span>
                <span className="text-xs tracking-widest uppercase text-gray-500">Master of Surgery</span>
              </div>
              <div className="bg-slate-50 px-6 py-3 border border-slate-200">
                <span className="block text-xl font-medium text-slate-900">MDS</span>
                <span className="text-xs tracking-widest uppercase text-gray-500">Master of Dental Surgery</span>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] w-full bg-slate-100 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
              alt="Surgical Team"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-slate-900 mb-4">
              Top Specializations in Demand
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We guide students into high-demand clinical and non-clinical branches across top medical institutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "General Medicine", img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=400&auto=format&fit=crop" },
              { title: "Radiodiagnosis", img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=400&auto=format&fit=crop" },
              { title: "Dermatology", img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=400&auto=format&fit=crop" },
              { title: "Pediatrics", img: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=400&auto=format&fit=crop" },
              { title: "Orthopedics", img: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=400&auto=format&fit=crop" },
              { title: "Obstetrics", img: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=400&auto=format&fit=crop" },
              { title: "General Surgery", img: "https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=400&auto=format&fit=crop" },
              { title: "Anesthesiology", img: "https://images.unsplash.com/photo-1582719471328-98e6c75c87f9?q=80&w=400&auto=format&fit=crop" },
            ].map((spec, i) => (
              <div key={i} className="relative h-[250px] bg-slate-900 border border-gray-100 hover:border-blue-500 transition-colors group cursor-pointer flex flex-col items-center justify-end text-center overflow-hidden rounded-sm">
                <Image src={spec.img} alt={spec.title} fill sizes="100vw" className="object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <h4 className="relative z-10 text-sm font-bold tracking-widest uppercase text-white mb-6 px-4">{spec.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-slate-900 text-white overflow-hidden">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-white mb-16">
            Our 3-Step Admission Strategy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/5 p-10 border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <div className="text-5xl font-light text-blue-400 mb-6">01</div>
              <h3 className="text-xl font-medium tracking-tight uppercase text-white mb-4">Profile Evaluation</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                We rigorously analyze your academic background, NEET PG/MDS test scores, and clinical experience to shortlist the best-fit institutions and programs for your specialization goals.
              </p>
            </div>
            
            <div className="bg-white/5 p-10 border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <div className="text-5xl font-light text-blue-400 mb-6">02</div>
              <h3 className="text-xl font-medium tracking-tight uppercase text-white mb-4">Application Strategy</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Our experts assist with crafting compelling statements of purpose, optimizing your medical resume, and ensuring all documentation meets the strict criteria of top medical boards and universities.
              </p>
            </div>

            <div className="bg-white/5 p-10 border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <div className="text-5xl font-light text-blue-400 mb-6">03</div>
              <h3 className="text-xl font-medium tracking-tight uppercase text-white mb-4">Counseling & Placement</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                From mock interview preparation to final seat allocation and counseling rounds, we stand by your side, ensuring you navigate the competitive admission landscape with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}