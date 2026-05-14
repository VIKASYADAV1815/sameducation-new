"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { NursingTestimonials } from "@/components/Testimonials/NursingTestimonials";
import { ArrowUpRight } from "lucide-react";

export default function NursingPage() {
  const nursingPrograms = [
    {
      title: "FAMILY NURSE PRACTITIONER (FNP)",
      desc: "Advanced clinical training to provide comprehensive primary healthcare services to individuals and families across the lifespan. Family Nurse Practitioners are authorized to diagnose acute and chronic illnesses, prescribe medications, and manage patient care independently in many jurisdictions.",
      highlights: ["Primary Healthcare Delivery", "Diagnostic & Prescriptive Authority", "Autonomous Clinical Practice"]
    },
    {
      title: "CLINICAL NURSE SPECIALIST (CNS)",
      desc: "An advanced practice role focusing on specialized clinical expertise, nursing leadership, and healthcare consulting. Clinical Nurse Specialists work at the intersection of patient care, nursing practice, and healthcare systems to optimize clinical outcomes and safety standards.",
      highlights: ["Systems Leadership & Quality", "Evidence-Based Practice Research", "Specialized Clinical Consulting"]
    },
    {
      title: "PAEDIATRIC REGISTERED NURSE",
      desc: "Dedicated specialized care for infants, children, and adolescents. This pathway focuses on pediatric-specific pharmacology, developmental milestones, childhood illnesses, and family-centered care models in acute and community healthcare settings.",
      highlights: ["Neonatal & Pediatric Specialization", "Family-Centered Education", "Developmental Support Models"]
    },
    {
      title: "NURSING LEADERSHIP & HEALTH SYSTEMS",
      desc: "Designed for nurses aspiring to executive leadership and healthcare administration roles. The curriculum focuses on healthcare policy, organizational behavior, financial management, quality improvement, and strategic nursing workforce management.",
      highlights: ["Healthcare Administration", "Nursing Policy Development", "Strategic Resource Planning"]
    },
    {
      title: "GERONTOLOGICAL NURSING",
      desc: "Addressing the specialized physiological and psychological needs of the aging population. This specialization focuses on chronic disease management, palliative care, and the promotion of functional independence and quality of life for older adults.",
      highlights: ["Advanced Elderly Care", "Chronic Illness Management", "Palliative & End-of-Life Care"]
    },
    {
      title: "PSYCHIATRIC MENTAL HEALTH NURSE",
      desc: "Advanced practice in mental health assessment, diagnosis, and therapeutic interventions. This pathway prepares nurses to provide comprehensive psychiatric care and behavioral health services to individuals and groups across all ages.",
      highlights: ["Psychotherapeutic Counseling", "Crisis Intervention & Management", "Behavioral Health Integration"]
    }
  ];

  const destinations = [
    {
      id: "01",
      country: "UNITED STATES OF AMERICA",
      salary: "$93,600 - $125,000+ (Median Annual)",
      demand: "Critical shortage projected with 5% growth; intense demand in California, Texas, Florida, and New York.",
      visa: "EB-3 Permanent Residency (Green Card), H-1B Specialty Occupation Visa",
      exams: "National Council Licensure Examination (NCLEX-RN), CGFNS VisaScreen Certification",
      colleges: ["Johns Hopkins University", "University of Pennsylvania", "Duke University", "Emory University", "University of Washington", "Columbia University"],
      desc: "The United States remains the premier global destination for nursing professionals. With over 4.2 million Registered Nurses and a projected vacancy of over 200,000 positions by 2030, the U.S. healthcare system offers unparalleled career growth and high earning potential through direct Green Card pathways.",
      requirements: ["CGFNS Credentials Evaluation", "English Proficiency (IELTS 7.0/PTE)", "State Board of Nursing Registration", "NCLEX-RN Examination Success"]
    },
    {
      id: "02",
      country: "CANADA",
      salary: "CAD 110,000 - CAD 145,000+ (Senior RNs)",
      demand: "High priority demand nationwide; specialized immigration pathways via the Healthcare Category.",
      visa: "Express Entry Healthcare Pathway, Provincial Nominee Program (PNP), Atlantic Immigration Program",
      exams: "National Nursing Assessment Service (NNAS), NextGen NCLEX-RN Examination",
      colleges: ["University of Toronto", "University of British Columbia", "McGill University", "Seneca Polytechnic", "Niagara College", "University of Alberta"],
      desc: "Canada's 2024-2026 Immigration Levels Plan specifically prioritizes healthcare workers. The Canadian healthcare system offers robust public health benefits and a clear transition to Permanent Residency through federal and provincial categories designed for internationally educated nurses.",
      requirements: ["NNAS Credential Assessment", "IELTS Academic 7.0 / CELBAN Success", "Provincial Regulatory Body Application", "NextGen NCLEX-RN Success"]
    },
    {
      id: "03",
      country: "AUSTRALIA",
      salary: "AUD 85,000 - AUD 128,000+ (Graduate Entry)",
      demand: "Extreme shortage in urban and regional sectors; high demand in aged care and acute hospitals.",
      visa: "Skilled Independent Visa (Subclass 189), Skilled Nominated Visa (Subclass 190)",
      exams: "Outcome-Based Assessment (OBA), ANMAC Skills Assessment, NCLEX-RN + OSCE",
      colleges: ["Monash University", "University of Sydney", "University of Technology Sydney", "RMIT University", "Deakin University", "University of Melbourne"],
      desc: "Australia offers an exceptional quality of life and a streamlined registration process through the Australian Health Practitioner Regulation Agency (AHPRA). The Outcome-Based Assessment (OBA) model provides a transparent pathway for nurses to gain registration and secure skilled migration.",
      requirements: ["ANMAC Migration Skills Assessment", "AHPRA & NMBA Registration", "IELTS Academic 7.0 in all bands", "OBA (MCQ and Clinical OSCE)"]
    }
  ];

  const roadmapSteps = [
    { step: "01", title: "CREDENTIAL ASSESSMENT", desc: "Initiate formal degree and clinical evaluation via NNAS (Canada), CGFNS VisaScreen (USA), or ANMAC Skills Assessment (Australia)." },
    { step: "02", title: "LANGUAGE PROFICIENCY", desc: "Achievement of required scores in IELTS Academic (7.0 Band) or equivalent OET/PTE Academic assessments for global registration." },
    { step: "03", title: "BOARD REGISTRATION", desc: "Formal application to regulatory bodies such as AHPRA (Australia), NMBA, or specific Provincial/State Boards of Nursing in USA and Canada." },
    { step: "04", title: "LICENSURE EXAMINATION", desc: "Successful completion of the NextGen NCLEX-RN (USA/Canada) or the Outcome-Based Assessment (MCQ and Clinical OSCE) in Australia." },
    { step: "05", title: "MIGRATION & PLACEMENT", desc: "Finalization of skilled migration visa processing and securing advanced clinical placement in world-class healthcare facilities." }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-end pb-24 overflow-hidden bg-slate-900">
        <Image
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1920&auto=format&fit=crop"
          alt="Global Nursing Career Excellence"
          fill
          className="object-cover opacity-40 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <span className="text-blue-500 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block">
            [ GLOBAL NURSING CAREER PATHWAYS ]
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-white tracking-tight uppercase max-w-4xl">
            Pioneer Your Nursing Future Abroad
          </h1>
          <p className="mt-8 text-[13px] md:text-[15px] font-semibold tracking-wider text-gray-300 leading-relaxed max-w-2xl uppercase">
            Comprehensive guidance for M.Sc Nursing, Specialized Clinical Practice, and Direct Licensure pathways in the United States, Canada, and Australia.
          </p>
        </div>
      </section>

      {/* World-Class Destinations - Strict Grid */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto border-b border-gray-200">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#f8fafc_10px,#f8fafc_11px)] opacity-50 pointer-events-none -z-10" />
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block"
          >
            [ DESTINATIONS ]
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight uppercase"
          >
            World-Class Healthcare Markets
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-gray-200 bg-white/80 backdrop-blur-sm">
          {destinations.map((dest, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={dest.country} 
              className="flex flex-col border-r border-b border-gray-200 p-10 hover:bg-gray-50 transition-colors duration-500 group relative"
            >
              <div className="text-5xl md:text-6xl font-light text-slate-200 mb-8 transition-colors duration-500 group-hover:text-blue-600">
                {dest.id}
              </div>
              <h3 className="text-2xl font-medium tracking-tight uppercase text-slate-900 mb-6">
                {dest.country}
              </h3>
              <p className="text-[12px] text-gray-500 font-medium leading-relaxed tracking-wide mb-10 h-[100px]">
                {dest.desc}
              </p>

              <div className="space-y-6 flex-1">
                <div>
                  <span className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[10px] block mb-1">
                    [ COMPENSATION ]
                  </span>
                  <p className="text-[12px] font-bold text-slate-900 uppercase tracking-wider">{dest.salary}</p>
                </div>
                <div>
                  <span className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[10px] block mb-1">
                    [ VISAS ]
                  </span>
                  <p className="text-[12px] font-bold text-slate-900 uppercase tracking-wider">{dest.visa}</p>
                </div>
                <div>
                  <span className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[10px] block mb-1">
                    [ EXAMINATIONS ]
                  </span>
                  <p className="text-[12px] font-bold text-slate-900 uppercase tracking-wider">{dest.exams}</p>
                </div>
                <div>
                  <span className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[10px] block mb-1">
                    [ PREMIER INSTITUTIONS ]
                  </span>
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider leading-relaxed">
                    {dest.colleges.join(" • ")}
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <span className="text-slate-900 font-semibold tracking-[0.15em] uppercase text-[10px] block mb-4">
                  CRITICAL REGISTRATION STEPS
                </span>
                <ul className="space-y-3">
                  {dest.requirements.map((req, i) => (
                    <li key={i} className="flex items-start text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                      <span className="text-blue-600 mr-3">■</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute top-10 right-10 text-gray-300 group-hover:text-blue-600 transition-colors">
                <ArrowUpRight size={28} strokeWidth={1} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Roadmap - Editorial Style */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto border-b border-gray-200">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block"
          >
            [ THE GLOBAL ROADMAP ]
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight uppercase max-w-4xl"
          >
            Your Journey To Global Nursing Excellence
          </motion.h2>
        </div>

        <div className="flex flex-col">
          {roadmapSteps.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="group flex flex-col md:flex-row items-start md:items-center py-12 border-t border-gray-200 relative hover:bg-gray-50 transition-colors -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24"
            >
              <div className="text-5xl md:text-6xl font-light text-slate-900 w-24 md:w-48 shrink-0 mb-6 md:mb-0 transition-colors duration-500 group-hover:text-blue-600">
                {item.step}
              </div>
              <div className="flex-1 md:pr-16 flex flex-col justify-center">
                <h3 className="text-xl md:text-3xl font-medium tracking-tight uppercase text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-[12px] font-medium tracking-wider text-gray-500 leading-relaxed uppercase max-w-3xl">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-200" />
        </div>
      </section>

      {/* Specialized Career Pathways - Sharp Grid */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none -z-10" />
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block"
          >
            [ SPECIALIZATIONS ]
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight uppercase max-w-4xl"
          >
            Advanced Career Pathways
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-[12px] font-medium tracking-wider text-gray-500 leading-relaxed uppercase max-w-2xl"
          >
            Explore advanced practice roles that offer higher clinical autonomy, leadership opportunities, and enhanced compensation across the global healthcare sector.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-gray-200 bg-white/90 backdrop-blur-sm">
          {nursingPrograms.map((prog, idx) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx} 
              className="p-10 border-r border-b border-gray-200 hover:bg-slate-900 hover:text-white transition-colors duration-500 group flex flex-col"
            >
              <h3 className="text-xl font-medium tracking-tight uppercase text-slate-900 group-hover:text-white mb-6">
                {prog.title}
              </h3>
              <p className="text-[12px] text-gray-500 group-hover:text-gray-400 font-medium leading-relaxed tracking-wide mb-10 flex-1">
                {prog.desc}
              </p>
              <div className="pt-6 border-t border-gray-200 group-hover:border-gray-700">
                <span className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[10px] block mb-4">
                  [ KEY HIGHLIGHTS ]
                </span>
                <ul className="space-y-2">
                  {prog.highlights.map((h, i) => (
                    <li key={i} className="text-[11px] font-bold text-slate-900 group-hover:text-white uppercase tracking-wider">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <NursingTestimonials />

      {/* Final CTA - Sharp and Bold */}
      <section className="py-32 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          <div>
            <span className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block">
              [ TAKE ACTION ]
            </span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight uppercase text-slate-900 max-w-2xl leading-[1.1]">
              Begin Your Global Nursing Legacy
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button className="bg-black text-white text-[11px] font-bold tracking-[0.2em] uppercase px-10 py-5 hover:bg-gray-800 transition-colors">
              Book Consultation
            </button>
            <button className="bg-transparent border border-gray-200 text-slate-900 text-[11px] font-bold tracking-[0.2em] uppercase px-10 py-5 hover:bg-gray-50 transition-colors">
              Download Guide
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
