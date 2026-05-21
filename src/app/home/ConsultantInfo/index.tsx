export const ConsultantInfo = () => {
  const services = [
    { id: "01", title: "MS / MD / MDS IN GERMANY", desc: "Structured medical guidance for Germany's clinical pathway with realistic planning around recognition, hospital applications, and long-term specialist training." },
    { id: "02", title: "APPROBATION ROADMAP", desc: "Practical support for document preparation, authority-facing paperwork, language readiness, FSP strategy, and case-by-case licensing progression." },
    { id: "03", title: "MBBS MEDICAL UNIVERSITIES", desc: "Focused counseling for the MBBS universities highlighted by your client, including shortlist clarity, budget planning, and long-term licensing direction." },
    { id: "04", title: "GLOBAL NURSING PATHWAYS", desc: "Comprehensive planning for USA, Canada, and Australia nursing routes covering academics, registration, licensure, and migration sequence." },
    { id: "05", title: "CREDENTIAL ASSESSMENT", desc: "Dedicated support for profile evaluation, academic document review, and regulatory pathway clarity across nursing and medical applications." },
    { id: "06", title: "LANGUAGE & EXAM READINESS", desc: "Targeted IELTS, PTE, and German preparation with a stronger focus on clinical communication, documentation, and interview confidence." },
    { id: "07", title: "VISA & IMMIGRATION SUPPORT", desc: "End-to-end assistance for visa documentation, financial file readiness, pre-departure compliance, and travel planning." },
    { id: "08", title: "POST-LANDING SUPPORT", desc: "Guidance for accommodation, airport pickup, onboarding coordination, and smoother academic or professional transition after arrival." }
  ];

  return (
    <section id="about" className="w-full bg-slate-50 text-slate-900 font-sans border-b border-gray-200">
      <div className="flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto items-center">
        
        {/* Left Content Area - Image */}
        <div className="w-full lg:w-5/12 p-8 md:p-12 lg:p-16 xl:p-24 relative">
          <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop" 
              alt="Doctor explaining a medical pathway to students" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply" />
          </div>
        </div>

        {/* Right Content Area - Text & Scrollable List */}
        <div className="w-full lg:w-7/12 px-8 py-16 md:px-12 lg:py-24 xl:pr-24 flex flex-col justify-center bg-slate-50 h-full lg:h-[800px]">
          <div className="max-w-2xl w-full flex flex-col h-full">
            <span className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-xs mb-6 block shrink-0">
              [ MEDICAL ADMISSION SUPPORT ]
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-medium leading-[1.1] tracking-tight uppercase mb-12 shrink-0">
              Medical Guidance Families Can Trust
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
