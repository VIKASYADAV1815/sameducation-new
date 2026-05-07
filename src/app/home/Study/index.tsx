import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Study = () => {
  const pathways = [
    {
      id: "01",
      title: "GERMANY",
      subtitle: "(BACHELORS/MASTERS/AUSBILDUNG)",
      desc: "FULL SUPPORT FOR YOUR STUDY JOURNEY IN GERMANY, FROM COURSE SELECTION TO VISA APPROVAL.",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
      link: "/study/germany"
    },
    {
      id: "02",
      title: "MBBS IN CENTRAL AMERICA",
      subtitle: "(GLOBAL RECOGNITION)",
      desc: "AFFORDABLE MEDICAL DEGREES WITH GLOBAL RECOGNITION. START YOUR JOURNEY TO BECOMING A DOCTOR.",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
      link: "/study/mbbs"
    },
    {
      id: "03",
      title: "MS / MD / MDS",
      subtitle: "(POSTGRADUATE MEDICAL)",
      desc: "POSTGRADUATE MEDICAL ADMISSIONS MADE SEAMLESS. SECURE YOUR SPECIALIZATION.",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
      link: "/study/ms-md-mds"
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
              </div>

              {/* Arrow */}
              <div className="absolute right-6 bottom-12 md:right-12 lg:right-24 md:bottom-auto text-gray-400 group-hover:text-slate-900 transition-colors">
                <ArrowUpRight size={28} strokeWidth={1} />
              </div>
            </Link>
          ))}
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
