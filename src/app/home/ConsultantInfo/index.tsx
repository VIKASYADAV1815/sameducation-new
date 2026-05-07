export const ConsultantInfo = () => {
  const services = [
    { id: "01", title: "Dependent Visa & Extension", desc: "End-to-end admission and visa filing assistance. We help file Dependent Visas, Visa Extensions, and handle documentation even after you have moved overseas." },
    { id: "02", title: "Airport Transfers", desc: "We facilitate airport pickups to your new home abroad, ensuring you reach your destination safely and comfortably with our welcoming staff." },
    { id: "03", title: "Accommodation", desc: "Assistance in finding safe housing arrangements through our large alumni network, giving your family peace of mind." },
    { id: "04", title: "Immigration Consulting", desc: "Expert representation for residence applications. We handle all aspects from documentation to visa filing and permit acquisition." },
    { id: "05", title: "Job Placement Assistance", desc: "Support in finding both part-time and full-time job opportunities within our extensive international organizational network." },
    { id: "06", title: "Pastoral Support", desc: "Ongoing support to ensure your general wellbeing and help improve your social and emotional transition in a new environment." },
    { id: "07", title: "Licensure Exam Prep", desc: "Comprehensive preparation for medical and professional licensure examinations with individual feedback and tailored study plans." },
    { id: "08", title: "Licensure Application", desc: "Dedicated assistance with your professional licensure application, ensuring every step is completed accurately and efficiently." },
    { id: "09", title: "IELTS / PTE Training", desc: "Expert training covering all modules with mock tests, personalized feedback, and proven strategies to achieve your target scores." }
  ];

  return (
    <section className="w-full bg-white text-slate-900 font-sans border-b border-gray-200">
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
        <div className="w-full lg:w-7/12 px-8 py-16 md:px-12 lg:py-24 xl:pr-24 flex flex-col justify-center bg-white h-full lg:h-[800px]">
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
