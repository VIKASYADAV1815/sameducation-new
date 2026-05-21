import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Study = () => {
  const pathways = [
    {
      id: "01",
      title: "MS IN GERMANY",
      subtitle: "(CLINICAL SPECIALIZATION PATHWAY)",
      desc: "Understand the Germany medical route through recognition, hospital applications, medical German, and structured clinical progression.",
      img: "https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=1200&auto=format&fit=crop",
      link: "/pg-germany",
      points: ["Clinical hospital route", "Medical German focus", "Branch planning"]
    },
    {
      id: "02",
      title: "APPROBATION ROADMAP",
      subtitle: "(FSP • KP • LICENSING)",
      desc: "See the practical Germany process from degree review and document preparation to FSP readiness, KP planning, and long-term licensing strategy.",
      img: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?q=80&w=1200&auto=format&fit=crop",
      link: "/pg-germany",
      points: ["Recognition-first planning", "FSP and interview prep", "Licensing clarity"]
    },
    {
      id: "03",
      title: "MBBS MEDICAL UNIVERSITIES",
      subtitle: "(AAIMS • XAVIER • ALL SAINTS)",
      desc: "Explore a cleaner MBBS pathway page featuring the specific medical universities your client asked to highlight with stronger counseling content.",
      img: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop",
      link: "/mbbs",
      points: ["University-focused shortlisting", "Budget and visa planning", "Parent-friendly clarity"]
    }
  ];

  return (
    <section className="relative w-full bg-slate-900 text-white font-sans py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-slate-800">
      {/* Background Image with low opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1454117096348-e4abbeba002c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Background pattern" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-blue-400 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block">
            [ MEDICAL SPOTLIGHT ]
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight uppercase max-w-3xl mx-auto text-white">
            Explore The Medical Pathway That Fits You
          </h2>
        </div>

        {/* Pathways List */}
        <div className="flex flex-col">
          {pathways.map((item, index) => (
            <Link 
              href={item.link}
              key={item.id}
              className="group flex flex-col md:flex-row items-start md:items-center py-12 border-t border-slate-700 relative hover:bg-slate-800/50 transition-colors -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24"
            >
              {/* Number */}
              <div className="text-5xl md:text-6xl font-light text-slate-600 w-24 shrink-0 mb-6 md:mb-0 group-hover:text-blue-400 transition-colors">
                {item.id}
              </div>

              {/* Image */}
              <div className="w-full md:w-[320px] h-[180px] relative shrink-0 overflow-hidden mb-6 md:mb-0 rounded-sm">
                <Image 
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="flex-1 md:pl-16 flex flex-col justify-center h-full">
                <div className="flex items-baseline gap-2 mb-4">
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight uppercase text-white">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-slate-400 tracking-wider">
                    {item.subtitle}
                  </span>
                </div>
                <p className="text-[11px] font-semibold tracking-wider text-slate-300 leading-relaxed max-w-md">
                  {item.desc}
                </p>
                
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-l-2 border-blue-500 pl-4 py-2">
                  {item.points.map((point) => (
                    <div key={point}>
                      <h4 className="text-[10px] font-bold uppercase text-blue-400 mb-1">{point}</h4>
                      <p className="text-[10px] text-slate-400 uppercase">Focused support with better medical positioning</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute right-6 bottom-12 md:right-12 lg:right-24 md:bottom-auto text-slate-600 group-hover:text-white transition-colors">
                <ArrowUpRight size={28} strokeWidth={1} />
              </div>
            </Link>
          ))}
        </div>



        {/* Footer Overview */}
        {/* <div className="mt-8 border-t border-slate-700 pt-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <h3 className="text-2xl font-medium tracking-tight uppercase text-white mb-3">
              Ready to Start?
            </h3>
          </div>
          
          <Link 
            href="/pathways"
            className="bg-blue-600 text-white text-[11px] font-bold tracking-[0.2em] uppercase px-10 py-4 hover:bg-blue-700 transition-colors"
          >
            View More
          </Link>
        </div> */}

      </div>
    </section>
  );
};
