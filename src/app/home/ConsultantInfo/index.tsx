export const ConsultantInfo = () => {
  const services = [
    { id: "01", title: "Germany University Admissions", desc: "End-to-end assistance for Bachelors and Masters programs in Germany. We handle university shortlisting, APS certification, and blocked account setup." },
    { id: "02", title: "Ausbildung & Opportunity Card", desc: "Expert guidance for Germany's vocational training (Ausbildung) and the new Chancenkarte (Opportunity Card), connecting you with German employers." },
    { id: "03", title: "Medical PG (MS/MD/MDS)", desc: "Specialized consulting for postgraduate medical admissions globally, including Germany's Approbation and Fachsprachprüfung (FSP) processes." },
    { id: "04", title: "MBBS in Central America", desc: "Complete admission support for affordable, globally recognized medical degrees with direct pathways to USMLE and PLAB." },
    { id: "05", title: "Global Nursing Pathways", desc: "Comprehensive roadmap for nurses migrating to the USA, Canada, and Australia, including NCLEX-RN and OBA exam preparation." },
    { id: "06", title: "Credential Assessment", desc: "Dedicated assistance with NNAS (Canada), CGFNS (USA), and ANMAC (Australia) to ensure your nursing or medical degrees are globally recognized." },
    { id: "07", title: "Visa & Immigration Consulting", desc: "Expert representation for student, work, and residence applications. We handle all aspects from documentation to visa filing and permit acquisition." },
    { id: "08", title: "Language Proficiency Training", desc: "Expert training covering IELTS, PTE, and German language modules with mock tests, personalized feedback, and proven strategies." },
    { id: "09", title: "Post-Landing Support", desc: "Airport transfers, accommodation assistance, and pastoral care to ensure your general wellbeing and smooth transition in a new environment." }
  ];

  return (
    <section id="about" className="w-full bg-slate-50 text-slate-900 font-sans border-b border-gray-200">
      <div className="flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto items-center">
        
        {/* Left Content Area - Image */}
        <div className="w-full lg:w-5/12 p-8 md:p-12 lg:p-16 xl:p-24 relative">
          <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
              alt="Students consulting" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
          </div>
        </div>

        {/* Right Content Area - Text & Scrollable List */}
        <div className="w-full lg:w-7/12 px-8 py-16 md:px-12 lg:py-24 xl:pr-24 flex flex-col justify-center bg-slate-50 h-full lg:h-[800px]">
          <div className="max-w-2xl w-full flex flex-col h-full">
            <span className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-xs mb-6 block shrink-0">
              [ LEGAL & LICENSED ]
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-medium leading-[1.1] tracking-tight uppercase mb-12 shrink-0">
              Professional Support You Can Trust
            </h2>

            {/* Scrollable Services List - Hidden Scrollbar */}
            <div className="flex flex-col w-full border-t border-gray-200 overflow-y-auto pb-8 pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
              {services.map((service) => (
                <div key={service.id} className="flex flex-col py-6 border-b border-gray-200 group cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[13px] font-semibold tracking-wider uppercase text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <span className="text-[13px] font-semibold text-blue-600 tracking-widest ml-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                      [ {service.id} ]
                    </span>
                  </div>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-[12px] text-gray-500 font-medium leading-relaxed tracking-wide pr-12 pt-3">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
