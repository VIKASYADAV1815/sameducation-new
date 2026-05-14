import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Study = () => {
  const pathways = [
    {
      id: "01",
      title: "NURSING in AMERICA • CANADA • AUSTRALIA",
      subtitle: "(M.Sc NURSING PATHWAYS)",
      desc: "Comprehensive M.Sc Nursing programs in USA, Canada, and Australia. 2-year duration, eligibility: B.Sc Nursing with IELTS 7 Band. Explore top universities and colleges.",
      img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop",
      link: "/nursing"
    },
    {
      id: "02",
      title: "MEDICAL PG",
      subtitle: "(POSTGRADUATE EXCELLENCE)",
      desc: "SPECIALIZE IN YOUR MEDICAL FIELD WITH FULL SUPPORT FOR YOUR POSTGRADUATE JOURNEY GLOBALLY.",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
      link: "/pg-germany"
    },
    {
      id: "03",
      title: "DENTAL PG",
      subtitle: "(ADVANCED DENTISTRY)",
      desc: "TAKE YOUR DENTAL CAREER TO THE NEXT LEVEL WITH OUR SPECIALIZED POSTGRADUATE DENTAL PATHWAYS.",
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
      link: "/ms-md-mds"
    }
  ];

  return (
    <section className="relative w-full bg-white text-slate-900 font-sans py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-gray-200">
      {/* Background Image with low opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1074&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-[0.25] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/95" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block">
            [ KNOW YOUR OPTIONS ]
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight uppercase max-w-3xl mx-auto">
            Explore The Education Pathway That Fits You
          </h2>
        </div>

        {/* Pathways List */}
        <div className="flex flex-col">
          {pathways.map((item, index) => (
            <Link 
              href={item.link}
              key={item.id}
              className="group flex flex-col md:flex-row items-start md:items-center py-12 border-t border-gray-200 relative hover:bg-gray-50 transition-colors -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24"
            >
              {/* Number */}
              <div className="text-5xl md:text-6xl font-light text-slate-900 w-24 shrink-0 mb-6 md:mb-0">
                {item.id}
              </div>

              {/* Image */}
              <div className="w-full md:w-[320px] h-[180px] relative shrink-0 overflow-hidden mb-6 md:mb-0">
                <Image 
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="flex-1 md:pl-16 flex flex-col justify-center h-full">
                <div className="flex items-baseline gap-2 mb-4">
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight uppercase text-slate-900">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-gray-500 tracking-wider">
                    {item.subtitle}
                  </span>
                </div>
                <p className="text-[11px] font-semibold tracking-wider text-gray-600 leading-relaxed max-w-md">
                  {item.desc}
                </p>
                
                {item.id === "01" && (
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-l-2 border-blue-600 pl-4 py-2">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase text-blue-600 mb-1">America</h4>
                      <p className="text-[10px] text-gray-500 uppercase">3 Uni + 2 Colleges<br/>IELTS 7 | 2 Years</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase text-blue-600 mb-1">Canada</h4>
                      <p className="text-[10px] text-gray-500 uppercase">3 Uni + 2 Colleges<br/>Same as USA | 2 Years</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase text-blue-600 mb-1">Australia</h4>
                      <p className="text-[10px] text-gray-500 uppercase">3 Uni + 2 Colleges<br/>Same as CAN | 2 Years</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Arrow */}
              <div className="absolute right-6 bottom-12 md:right-12 lg:right-24 md:bottom-auto text-gray-400 group-hover:text-slate-900 transition-colors">
                <ArrowUpRight size={28} strokeWidth={1} />
              </div>
            </Link>
          ))}
        </div>

        {/* Popular Programs in Nursing */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block px-6 py-2 border border-blue-600/20 rounded-full mb-6 bg-blue-50/50">
              <span className="text-blue-600 font-bold tracking-[0.25em] uppercase text-[10px]">
                [ POPULAR PROGRAMS IN NURSING ]
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight uppercase text-slate-900">
              Global Specializations
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              "FNP - Family Nurse Practitioner",
              "CNS - Clinical Nurse Specialist",
              "Paediatric Nurse",
              "Nursing Leadership",
              "Gerontology",
              "Psychiatric Mental Health"
            ].map((prog) => (
              <div key={prog} className="flex flex-col items-center">
                <div className="w-1 h-1 bg-blue-600 rounded-full mb-3" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800 leading-tight">
                  {prog}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Overview */}
        <div className="mt-8 border-t border-gray-200 pt-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <h3 className="text-2xl font-medium tracking-tight uppercase text-slate-900 mb-3">
              Full Education Overview
            </h3>
            <p className="text-[11px] font-semibold tracking-wider text-gray-500">
              Expand to view eligibility, steps, and documentation.
            </p>
          </div>
          
          <Link 
            href="/pathways"
            className="bg-black text-white text-[11px] font-bold tracking-[0.2em] uppercase px-10 py-4 hover:bg-gray-800 transition-colors"
          >
            View More
          </Link>
        </div>

      </div>
    </section>
  );
};
