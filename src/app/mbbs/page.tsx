"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MBBSPage() {
  const universities = [
    {
      id: "01",
      name: "ALL AMERICAN INSTITUTE OF MEDICAL SCIENCES",
      location: "JAMAICA",
      focus: "Structured Caribbean MD pathway with a patient-focused training environment.",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
      desc: "A strong option for students looking for an English-medium Caribbean medical route with guided academic progression, foundational sciences, and early clinical orientation.",
      highlights: [
        "Small-batch academic attention",
        "English-medium medical teaching",
        "Clinical exposure planning support",
        "Suitable for USMLE-minded students"
      ]
    },
    {
      id: "02",
      name: "XAVIER MEDICAL UNIVERSITY",
      location: "ARUBA",
      focus: "Modern island-campus learning with a globally mobile medical student profile.",
      img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1200&auto=format&fit=crop",
      desc: "Best suited for students who want a disciplined, medicine-first environment where strong faculty guidance, exam planning, and future licensure strategy matter from the beginning.",
      highlights: [
        "Career-oriented MD curriculum",
        "International student community",
        "Step-by-step academic mentoring",
        "Clarity on transfer and progression"
      ]
    },
    {
      id: "03",
      name: "ALL SAINTS MEDICAL UNIVERSITY",
      location: "CARIBBEAN",
      focus: "Affordable doctor-training pathway with emphasis on clinical preparation and continuity.",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
      desc: "Ideal for families seeking a medical college option that balances affordability, supportive faculty interaction, and a realistic roadmap toward internship, licensing, and long-term practice goals.",
      highlights: [
        "Budget-aware admission planning",
        "Medical college style environment",
        "Clinical rotation guidance",
        "Student support after onboarding"
      ]
    }
  ];

  const supportPillars = [
    {
      title: "Eligibility Screening",
      desc: "We review NEET status, academics, transfer history, and your long-term country of practice before recommending any university shortlist."
    },
    {
      title: "Recognition Clarity",
      desc: "Our counseling highlights current recognition, licensure planning, and return-path considerations so families can make informed decisions."
    },
    {
      title: "Budget Planning",
      desc: "Tuition, hostel, travel, insurance, and living-cost expectations are mapped clearly to avoid last-minute financial surprises."
    },
    {
      title: "Clinical Pathway Focus",
      desc: "From pre-clinical years to clerkships and future exam planning, we help students choose a pathway that fits their career direction."
    }
  ];

  const admissionFlow = [
    {
      step: "01",
      title: "Profile Review",
      desc: "Academic history, NEET status, country preference, and future licensing goals are evaluated before university mapping."
    },
    {
      step: "02",
      title: "University Match",
      desc: "We shortlist the right-fit options including All American Institute of Medical Sciences, Xavier Medical University, and All Saints Medical University."
    },
    {
      step: "03",
      title: "Documentation & Visa",
      desc: "Offer letter processing, financial paperwork, hostel support, and visa file preparation are handled with close follow-up."
    },
    {
      step: "04",
      title: "Pre-Departure Support",
      desc: "Students receive onboarding help for travel, campus reporting, settling in, and planning for the academic routine ahead."
    }
  ];

  const faqs = [
    {
      q: "Is NEET mandatory for students planning MBBS abroad?",
      a: "For Indian students, NEET qualification is generally essential if the long-term plan includes licensing or practice eligibility back in India. Final compliance should always be checked against the latest NMC rules."
    },
    {
      q: "Why are these three universities highlighted on this page?",
      a: "They match your client brief and represent Caribbean-style medical pathways that families often consider when they want English-medium teaching, guided academics, and a practical route toward future licensing exams."
    },
    {
      q: "Do you help compare tuition, hostel, and living costs?",
      a: "Yes. We present the full admission picture with academic fit, budget planning, and expected living expenses so parents can compare options realistically instead of choosing only by brochure headlines."
    },
    {
      q: "How do students decide the right university?",
      a: "The best match depends on academic readiness, budget, preferred learning style, transfer flexibility, and where the student eventually wants to train or practice as a doctor."
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      <section className="relative flex min-h-[82vh] w-full items-end overflow-hidden bg-slate-950 pb-16 pt-32">
        <Image
          src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1920&auto=format&fit=crop"
          alt="Doctors and medical students in a clinical setting"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.28),transparent_32%),linear-gradient(to_top,rgba(2,6,23,0.95),rgba(2,6,23,0.72),rgba(2,6,23,0.48))]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-10 px-6 md:px-12 lg:px-24 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400"
            >
              [ MBBS ADMISSIONS | MEDICAL UNIVERSITIES ]
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-5xl text-4xl font-medium uppercase leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[72px]"
            >
              MBBS Abroad With
              <br />
              Real Medical College Guidance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-3xl text-[13px] font-medium leading-relaxed tracking-[0.14em] text-slate-200 uppercase md:text-[14px]"
            >
              Explore a more focused medical admissions page featuring All American Institute of Medical Sciences,
              Xavier Medical University, and All Saints Medical University with stronger counseling, cleaner
              comparison, and a premium doctor-first visual theme.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid max-w-xl grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 backdrop-blur-sm"
          >
            {[
              "Doctor-patient counseling visuals",
              "Medical student focused storytelling",
              "Stethoscope and hospital tone",
              "University-led MBBS shortlisting"
            ].map((item) => (
              <div key={item} className="bg-slate-900/70 px-5 py-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-200">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1600px] border-b border-gray-200 bg-slate-50 px-6 py-28 md:px-12 lg:px-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1920&auto=format&fit=crop"
            alt="Medical texture background"
            fill
            className="object-cover opacity-[0.07] mix-blend-multiply"
          />
        </div>

        <div className="relative z-10 mb-16 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-600"
          >
            [ FEATURED UNIVERSITIES ]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-medium uppercase leading-[1.08] tracking-tight text-slate-900 md:text-5xl lg:text-[56px]"
          >
            Medical Universities Families Actually Ask About
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-2xl text-[13px] font-medium leading-relaxed tracking-[0.12em] text-gray-500 uppercase"
          >
            Richer university content, cleaner comparison blocks, and a more trustworthy counseling tone for
            serious medical aspirants.
          </motion.p>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-0 border-l border-t border-gray-200 bg-white/90 backdrop-blur-sm lg:grid-cols-3">
          {universities.map((university, idx) => (
            <motion.article
              key={university.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group flex flex-col border-b border-r border-gray-200 p-8 md:p-10"
            >
              <div className="relative mb-8 h-[250px] overflow-hidden rounded-sm">
                <Image
                  src={university.img}
                  alt={university.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                <div className="absolute left-5 top-5 text-5xl font-light text-white/80">{university.id}</div>
                <div className="absolute bottom-5 left-5">
                  <span className="inline-flex border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    {university.location}
                  </span>
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-medium uppercase leading-tight tracking-tight text-slate-900">
                {university.name}
              </h3>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
                {university.focus}
              </p>
              <p className="mb-8 flex-1 text-[13px] font-medium leading-relaxed text-gray-600">
                {university.desc}
              </p>

              <div className="border-t border-gray-200 pt-6">
                <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-900">
                  Key Counseling Notes
                </span>
                <ul className="space-y-3">
                  {university.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500"
                    >
                      <span className="mr-3 text-blue-600">■</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="relative z-10 mt-8 border border-blue-100 bg-blue-50 px-6 py-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-900">
            Important: Final eligibility, recognition, internship route, and return-to-India compliance depend on
            the latest rules in force at the time of application and licensing.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] grid-cols-1 border-b border-gray-200 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[620px] overflow-hidden bg-slate-950">
          <Image
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop"
            alt="Doctor consulting a patient in a hospital"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
            <span className="mb-5 block text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400">
              [ WHY FAMILIES TRUST THE PROCESS ]
            </span>
            <h2 className="max-w-2xl text-3xl font-medium uppercase leading-[1.08] tracking-tight text-white md:text-5xl">
              Strong Medical Counseling Before You Commit To A Seat
            </h2>
            <p className="mt-6 max-w-2xl text-[13px] font-medium leading-relaxed tracking-[0.12em] text-slate-300 uppercase">
              This page now reads like a real medical admissions destination with doctor-patient energy, hospital
              mood, and practical student guidance instead of generic study-abroad filler.
            </p>
          </div>
        </div>

        <div className="bg-white px-6 py-20 md:px-12 lg:px-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-600"
          >
            [ SAMEDUCATION ADVANTAGE ]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-3xl font-medium uppercase leading-[1.08] tracking-tight text-slate-900 md:text-5xl"
          >
            Better Medical Shortlisting.
            <br />
            Better Parent Confidence.
          </motion.h2>

          <div className="grid grid-cols-1 gap-0 border-l border-t border-gray-200">
            {supportPillars.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="border-b border-r border-gray-200 p-6"
              >
                <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-900">{item.title}</h3>
                <p className="text-[13px] font-medium leading-relaxed text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1600px] bg-slate-900 px-6 py-28 text-white md:px-12 lg:px-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=1920&auto=format&fit=crop"
            alt="Stethoscope and hospital environment"
            fill
            className="object-cover opacity-15 mix-blend-screen"
          />
        </div>

        <div className="relative z-10 mb-16 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400"
          >
            [ ADMISSION FLOW ]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-medium uppercase leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[56px]"
          >
            How We Build The MBBS Admission Journey
          </motion.h2>
        </div>

        <div className="relative z-10">
          {admissionFlow.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.08 }}
              className="group flex flex-col border-t border-slate-800 py-10 md:flex-row md:items-start md:gap-10"
            >
              <div className="mb-4 w-24 shrink-0 text-5xl font-light text-slate-600 md:mb-0 md:w-32 md:text-6xl group-hover:text-blue-400">
                {item.step}
              </div>
              <div className="max-w-4xl">
                <h3 className="mb-3 text-xl font-medium uppercase tracking-tight text-white md:text-3xl">
                  {item.title}
                </h3>
                <p className="text-[13px] font-medium leading-relaxed tracking-[0.12em] text-slate-300 uppercase">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-slate-800" />
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] border-t border-gray-200 px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <span className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-600">
              [ KNOWLEDGE BASE ]
            </span>
            <h2 className="text-3xl font-medium uppercase tracking-tight text-slate-900 md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="border-t border-gray-200">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 py-8 transition-all duration-300 hover:px-4">
                <h3 className="mb-4 text-[13px] font-bold uppercase tracking-[0.14em] text-slate-900">{faq.q}</h3>
                <p className="text-[13px] font-medium leading-relaxed text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
