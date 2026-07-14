"use client";

import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { education, experiences, languages, profile, skillGroups } from "@/data/portfolio";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#eef1f2] px-4 py-6 text-slate-900 print:bg-white print:p-0 sm:px-8 sm:py-10">
      <div className="mx-auto mb-5 flex max-w-5xl items-center justify-between gap-4 print:hidden">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5">
          ← Back to portfolio
        </Link>
        <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
          Print / Save PDF
          <Icon name="download" className="h-4 w-4" />
        </button>
      </div>

      <article className="resume-sheet mx-auto max-w-5xl bg-white px-7 py-9 shadow-2xl print:max-w-none print:shadow-none sm:px-12 sm:py-12">
        <header className="border-b-2 border-slate-950 pb-7">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">{profile.name}</h1>
              <p className="mt-2 text-lg font-semibold text-emerald-700">{profile.role}</p>
            </div>
            <div className="space-y-1 text-sm text-slate-600 sm:text-right">
              <p>{profile.location}</p>
              <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
              <p><a href={`tel:${profile.phoneHref}`}>{profile.phone}</a></p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </header>

        <section className="resume-section">
          <h2 className="resume-heading">Profile</h2>
          <div className="space-y-3 text-[0.92rem] leading-6 text-slate-700">
            {profile.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-heading">Professional Experience</h2>
          <div className="space-y-7">
            {experiences.map((experience) => (
              <article key={`${experience.company}-${experience.period}`} className="break-inside-avoid">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">{experience.role}</h3>
                    <p className="font-semibold text-emerald-700">{experience.company}</p>
                  </div>
                  <div className="text-sm text-slate-500 sm:text-right">
                    <p>{experience.period}</p>
                    <p>{experience.location}</p>
                  </div>
                </div>
                <ul className="mt-3 space-y-1.5 pl-5 text-[0.9rem] leading-6 text-slate-700">
                  {experience.achievements.map((achievement) => <li key={achievement} className="list-disc">{achievement}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section break-inside-avoid">
          <h2 className="resume-heading">Skills</h2>
          <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="text-[0.9rem] leading-6">
                <span className="font-bold text-slate-950">{group.title}: </span>
                <span className="text-slate-700">{group.skills.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-8 sm:grid-cols-2">
          <section className="resume-section break-inside-avoid">
            <h2 className="resume-heading">Education</h2>
            <h3 className="font-bold text-slate-950">{education.degree}</h3>
            <p className="mt-1 text-emerald-700">{education.institution}</p>
            <p className="mt-1 text-sm text-slate-500">{education.year} · {education.location}</p>
          </section>
          <section className="resume-section break-inside-avoid">
            <h2 className="resume-heading">Languages</h2>
            <div className="space-y-2 text-sm">
              {languages.map((language) => (
                <p key={language.name}><span className="font-bold text-slate-950">{language.name}: </span><span className="text-slate-600">{language.level}</span></p>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
