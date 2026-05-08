import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Services | SAMEDUCATION",
  description: "Comprehensive end-to-end services including Visa Assistance, Airport Transfers, Accommodation, and Job Placement.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "01",
      title: "Dependent Visa / Visa Extension Assistance",
      desc: "We have an efficient and experienced Operations Team that gives end-to-end admission and visa filing assistance. Our team is spread across domestic and international offices. Once you move overseas, we continue to help you in filing Dependent Visas, Visa Extensions, and taking admission in new study programs in Canada. We handhold you not only in your home country but even after you move.",
      icon: "🛂"
    },
    {
      id: "02",
      title: "Airport Transfers",
      desc: "We facilitate airport pickups from Toronto airport to your new home in Canada. We make sure that you reach your destination safely and comfortably. A staff member is present at the airport to welcome you.",
      icon: "✈️"
    },
    {
      id: "03",
      title: "Accommodation",
      desc: "We assist you in finding safe and comfortable housing arrangements in any country you go to. In Canada, we help you through our large alumni network so your family can rest knowing you will stay in pleasant surroundings at convenient locations.",
      icon: "🏠"
    },
    {
      id: "04",
      title: "Immigration Consulting",
      desc: "Our in-house Regulated Canadian Immigration Consultant is licensed by the College of Immigration and Citizenship Consultants (CICC) to represent you in Temporary and Permanent Residence applications. With deep knowledge of immigration laws, we ensure a smooth process from documentation to permit acquisition.",
      icon: "⚖️"
    },
    {
      id: "05",
      title: "Job Placement Assistance",
      desc: "We help you find both part-time and full-time job opportunities. As one of our students, you can also look forward to job opportunities within our international organizational network.",
      icon: "💼"
    },
    {
      id: "06",
      title: "Pastoral Support",
      desc: "We provide pastoral support to ensure your general wellbeing and to improve your social, emotional, as well as behavioural skills in an environment that is new and alien to you.",
      icon: "🤝"
    },
    {
      id: "07",
      title: "NCLEX-RN Exam Preparation",
      desc: "Our trainers prepare you to pass the National Council Licensure Examination (NCLEX-RN). You will be provided with individual feedback and a study plan. We also assist with the application process from the NNAS stage to obtaining licensure in the Canadian Province of your choice.",
      icon: "📝"
    },
    {
      id: "08",
      title: "Nursing Licensure Application",
      desc: "At our Canada facility, we offer comprehensive assistance with the nursing licensure application. Our dedicated team is equipped to guide you through every step, ensuring that your application is completed accurately and efficiently.",
      icon: "📜"
    },
    {
      id: "09",
      title: "IELTS / PTE Training",
      desc: "We offer comprehensive IELTS and PTE training tailored specifically for nurses. Our expert trainers cover all four modules, providing personalized feedback and proven strategies. Training includes regular mock tests to simulate the actual exam environment.",
      icon: "🗣️"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920&auto=format&fit=crop"
          alt="Our Services"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="text-blue-400 font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">
            [ End-to-End Support ]
          </span>
          <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight uppercase leading-[1.1] mb-6">
            Our Premium Services
          </h1>
          <p className="text-lg text-white/80 font-light max-w-2xl mx-auto">
            From the moment you decide to study abroad to long after you land, our comprehensive suite of services ensures your journey is smooth, secure, and successful.
          </p>
        </div>
      </section>

      <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight uppercase text-slate-900 mb-6">
            Comprehensive Global Support
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            We don't just secure your admission; we manage your entire transition. Our dedicated teams across multiple countries ensure you are never alone on your journey.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto pb-16">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-blue-100 transform md:-translate-x-1/2" />
          
          <div className="space-y-16">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={service.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Number / Node */}
                  <div className="absolute left-8 md:left-1/2 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl transform -translate-x-1/2 shadow-xl z-10 border-4 border-white">
                    {service.id}
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className="bg-white p-8 border border-gray-100 shadow-lg rounded-xl hover:-translate-y-2 transition-transform duration-300 relative group">
                      <div className={`text-4xl mb-4 group-hover:scale-110 transition-transform ${isEven ? 'md:origin-right' : 'md:origin-left'} origin-left`}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold tracking-tight uppercase text-slate-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight uppercase mb-6">
              With You, <br/><span className="text-blue-400">Every Step of the Way.</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Our support doesn't end when you board your flight. With a robust international network and local offices in key destination countries, we provide on-the-ground pastoral care, accommodation assistance, and emergency support.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="text-3xl font-light mb-1">24/7</div>
                <div className="text-xs tracking-widest uppercase text-white/50">Emergency Support</div>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="text-3xl font-light mb-1">10+</div>
                <div className="text-xs tracking-widest uppercase text-white/50">Global Offices</div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] w-full border border-white/10 p-4">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px]" />
             <div className="relative h-full w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop"
                  alt="Global Network"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}