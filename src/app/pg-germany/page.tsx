"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function PGGermanyPage() {
  const pathways = [
    {
      id: "01",
      title: "MD IN GERMANY",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
      desc: "For doctors targeting medicine-led specialist branches in Germany through a hospital-based training model rather than a conventional classroom PG seat.",
      highlights: ["Hospital-based specialist training", "Patient-facing medical pathway", "Structured branch planning", "Long-term career mobility"]
    },
    {
      id: "02",
      title: "MS IN GERMANY",
      img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1200&auto=format&fit=crop",
      desc: "Designed for applicants interested in surgical progression, disciplined hospital work culture, documentation rigor, and a serious clinical roadmap.",
      highlights: ["Surgical career orientation", "German hospital workflow", "Clinical documentation culture", "Strong progression framework"]
    },
    {
      id: "03",
      title: "MDS IN GERMANY",
      img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop",
      desc: "Focused counseling for dental graduates who need clarity on recognition, language, licensing, and the practical route toward dental training opportunities in Germany.",
      highlights: ["Dental recognition guidance", "Language-led readiness", "Licensing-first approach", "Case-specific pathway review"]
    },
    {
      id: "04",
      title: "APPROBATION ROADMAP",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
      desc: "The most important track on this page: recognition, medical German, FSP, hospital applications, temporary permission where applicable, and final licensing strategy.",
      highlights: ["Degree recognition support", "FSP and interview readiness", "Hospital application strategy", "KP and licensing planning"]
    }
  ];

  const roadmap = [
    {
      step: "01",
      title: "MBBS / BDS COMPLETION & REGISTRATION",
      desc: "Your core degree, internship, registration status, and supporting records are reviewed before any Germany planning begins."
    },
    {
      step: "02",
      title: "GERMAN LANGUAGE FOUNDATION",
      desc: "A1 to B2 progression is the base, while medical applicants usually prepare toward advanced communication standards required in hospital settings."
    },
    {
      step: "03",
      title: "DOCUMENT RECOGNITION & DEFICIT REVIEW",
      desc: "Academic papers, registration proofs, experience records, and legalized documents are prepared for evaluation by the relevant German authority."
    },
    {
      step: "04",
      title: "MEDICAL GERMAN, FSP & HOSPITAL APPLICATIONS",
      desc: "Candidates prepare for doctor-patient communication, clinical terminology, and focused hospital applications rather than a central entrance-exam seat."
    },
    {
      step: "05",
      title: "BERUFSERLAUBNIS / APPROBATION STRATEGY",
      desc: "Depending on the case, doctors may move through temporary permission, full licensing steps, and branch-specific entry planning."
    },
    {
      step: "06",
      title: "KP IF REQUIRED, THEN FACHARZT PROGRESSION",
      desc: "Where equivalence gaps remain, the knowledge exam route is prepared carefully so the candidate can continue toward specialist training."
    }
  ];

  const advantages = [
    "Germany medical PG is not a regular tuition-seat model. It is a supervised hospital-based specialist pathway.",
    "Selection depends on recognition, language readiness, and your ability to secure the right hospital opportunity.",
    "The route is attractive because training is career-linked, clinically immersive, and often more practical than exam-driven alternatives.",
    "Strong doctor-patient communication in German is not optional. It is central to the entire process."
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      <section className="relative flex min-h-[82vh] w-full items-end overflow-hidden bg-slate-950 pb-16 pt-32">
        <Image
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1920&auto=format&fit=crop"
          alt="Doctors in a clinical hospital discussion"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.24),transparent_28%),linear-gradient(to_top,rgba(2,6,23,0.95),rgba(2,6,23,0.78),rgba(2,6,23,0.48))]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-10 px-6 md:px-12 lg:px-24 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400"
            >
              [ GERMANY MEDICAL PATHWAY ]
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-5xl text-4xl font-medium uppercase leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[72px]"
            >
              MS / MD / MDS
              <br />
              In Germany
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-3xl text-[13px] font-medium leading-relaxed tracking-[0.14em] text-slate-200 uppercase md:text-[14px]"
            >
              Rebuilt around the actual Germany medical route: recognition, medical German, FSP, hospital
              applications, licensing, and specialist progression for doctors and dentists.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">Clinical Insight</p>
            <p className="mt-4 text-lg font-medium uppercase leading-relaxed tracking-[0.08em] text-white">
              Germany medical PG is a hospital-based specialist training route, not a standard classroom admission
              model.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] border-b border-blue-100 bg-blue-50 px-6 py-8 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-px border border-blue-100 bg-blue-100 md:grid-cols-4">
          {advantages.map((item) => (
            <div key={item} className="bg-white px-5 py-5">
              <p className="text-[11px] font-bold uppercase leading-relaxed tracking-[0.14em] text-slate-800">
                {item}
              </p>
            </div>
          ))}
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
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-600"
          >
            [ CLINICAL PATHWAYS ]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-medium uppercase leading-[1.08] tracking-tight text-slate-900 md:text-5xl lg:text-[56px]"
          >
            Richer Medical Content.
            <br />
            Cleaner Germany Positioning.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-2xl text-[13px] font-medium uppercase leading-relaxed tracking-[0.12em] text-gray-500"
          >
            The old mixed Germany page is now reshaped into a dedicated medical page for MS, MD, and MDS in
            Germany with mission-led information architecture and a more credible doctor-first tone.
          </motion.p>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-0 border-l border-t border-gray-200 bg-white/90 backdrop-blur-sm md:grid-cols-2">
          {pathways.map((pathway, idx) => (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              key={pathway.id}
              className="group relative flex flex-col border-b border-r border-gray-200 p-8 md:p-10"
            >
              <div className="relative mb-8 h-[240px] overflow-hidden rounded-sm">
                <Image
                  src={pathway.img}
                  alt={pathway.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <div className="absolute left-5 top-5 text-5xl font-light text-white/80">{pathway.id}</div>
              </div>
              <h3 className="mb-4 text-2xl font-medium uppercase tracking-tight text-slate-900">
                {pathway.title}
              </h3>
              <p className="mb-8 flex-1 text-[13px] font-medium leading-relaxed text-gray-600">
                {pathway.desc}
              </p>

              <div className="border-t border-gray-200 pt-6">
                <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-600">
                  [ KEY ADVANTAGES ]
                </span>
                <ul className="space-y-3">
                  {pathway.highlights.map((h, i) => (
                    <li key={i} className="flex items-start text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500">
                      <span className="mr-3 text-blue-600">■</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute right-8 top-8 text-gray-300 transition-colors group-hover:text-blue-600">
                <ArrowUpRight size={28} strokeWidth={1} />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] grid-cols-1 border-b border-gray-200 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="bg-white px-6 py-20 md:px-12 lg:px-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-600"
          >
            [ WHAT THIS PAGE EXPLAINS ]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-3xl font-medium uppercase leading-[1.08] tracking-tight text-slate-900 md:text-5xl"
          >
            Mission-Led Information,
            <br />
            But In Your Theme.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-10 text-[13px] font-medium leading-relaxed text-gray-600"
          >
            The content on this page now reflects the practical Germany medical journey discussed across
            MissionGermany-style resources: recognition, advanced language preparation, hospital applications,
            licensing, and specialist progression. It also removes the unrelated public-university and vocational
            pathways that were diluting the medical message.
          </motion.p>

          <div className="grid grid-cols-1 gap-0 border-l border-t border-gray-200">
            {[
              {
                title: "Earn While You Train Logic",
                desc: "The Germany route is attractive because medical training is tied to hospital work and professional growth rather than a conventional tuition-heavy PG seat."
              },
              {
                title: "Language Is Clinical, Not Cosmetic",
                desc: "Candidates need real doctor-patient communication ability in German for interviews, case discussions, and hospital documentation."
              },
              {
                title: "Recognition Comes Before Placement",
                desc: "A strong file starts with properly prepared documents, realistic timelines, and state-wise authority understanding."
              },
              {
                title: "Hospital Applications Matter",
                desc: "The route depends on targeted applications, a German-style profile, and branch-specific strategy rather than one exam score alone."
              }
            ].map((item) => (
              <div key={item.title} className="border-b border-r border-gray-200 p-6">
                <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-900">{item.title}</h3>
                <p className="text-[13px] font-medium leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[640px] overflow-hidden bg-slate-950">
          <Image
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop"
            alt="Doctor and patient consultation"
            fill
            className="object-cover opacity-72"
          />
        </div>
      </section>

      <section className="relative mx-auto max-w-[1600px] bg-slate-900 px-6 py-28 text-white md:px-12 lg:px-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1920&auto=format&fit=crop"
            alt="Medical roadmap background"
            fill
            className="object-cover opacity-10 mix-blend-screen"
          />
        </div>

        <div className="relative z-10 mb-16 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-400"
          >
            [ THE GERMANY ROADMAP ]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl text-3xl font-medium uppercase leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[56px]"
          >
            MS / MD / MDS In Germany
            <br />
            Step By Step
          </motion.h2>
        </div>

        <div className="relative z-10 flex flex-col">
          {roadmap.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.08 }}
              key={index}
              className="group relative flex flex-col border-t border-slate-800 py-10 md:flex-row md:items-start md:gap-10"
            >
              <div className="mb-4 w-24 shrink-0 text-5xl font-light text-slate-600 transition-colors duration-500 group-hover:text-blue-400 md:mb-0 md:w-32 md:text-6xl">
                {item.step}
              </div>
              <div className="max-w-4xl">
                <h3 className="mb-3 text-xl font-medium uppercase tracking-tight text-white md:text-3xl">
                  {item.title}
                </h3>
                <p className="text-[13px] font-medium uppercase leading-relaxed tracking-[0.12em] text-slate-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-slate-800" />
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 lg:px-24">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 text-3xl font-medium uppercase leading-[1.08] tracking-tight md:text-5xl lg:text-[56px]"
            >
              A Better Germany Page
              <br />
              For Medical Clients.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-10 text-[13px] font-medium leading-relaxed text-gray-600"
            >
              Your client complained about thin content, so this section now speaks directly to doctors and dental
              graduates: what the Germany route is, why language matters, how licensing works, and what kind of
              structured support serious applicants actually need.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-black px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-gray-800"
              >
                Request Profile Review
              </Link>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-slate-900 p-12 text-white lg:p-16">
              <h3 className="mb-8 text-2xl font-medium uppercase tracking-tight">
                Core Germany Takeaways
              </h3>
              <ul className="mb-10 space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">■</span>
                  <span className="text-[12px] font-medium uppercase leading-relaxed tracking-[0.12em] text-gray-300">
                    Remove the generic "PG in Germany" tone and present the route as MS / MD / MDS in Germany.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">■</span>
                  <span className="text-[12px] font-medium uppercase leading-relaxed tracking-[0.12em] text-gray-300">
                    Explain Approbation, FSP, hospital applications, and knowledge-exam planning in plain language.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">■</span>
                  <span className="text-[12px] font-medium uppercase leading-relaxed tracking-[0.12em] text-gray-300">
                    Keep the visuals premium and medical with doctors, patient care, stethoscope mood, and hospital depth.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">■</span>
                  <span className="text-[12px] font-medium uppercase leading-relaxed tracking-[0.12em] text-gray-300">
                    Keep expectations realistic: timing, language, paperwork, and approvals decide the pace.
                  </span>
                </li>
              </ul>
              <div className="border-t border-gray-800 pt-8">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500">
                  MEDICAL GERMAN + RECOGNITION + HOSPITAL FIT,
                </p>
                <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-white">
                  THAT IS THE REAL GERMANY ROADMAP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
