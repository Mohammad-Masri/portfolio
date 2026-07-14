"use client";

import Image from "next/image";
import { useState } from "react";
import Icon, { type IconName } from "@/components/ui/Icon";
import {
  capabilities,
  education,
  experiences,
  languages,
  metrics,
  profile,
  selectedWork,
  skillGroups,
} from "@/data/portfolio";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
] as const;

function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {description ? <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">{description}</p> : null}
    </div>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: IconName }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-emerald-200">
      <Icon name={icon} className="h-5 w-5" />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <main id="top" className="relative overflow-hidden">
      <div className="site-grid pointer-events-none fixed inset-0 -z-20" />
      <div className="pointer-events-none fixed left-1/2 top-[-24rem] -z-10 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[150px]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#05080a]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="group flex items-center gap-3" aria-label="Back to top">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 text-sm font-bold tracking-tight text-emerald-200 transition group-hover:rotate-3 group-hover:border-emerald-300/40">MM</span>
            <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">Mohammed Masri</span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => <a key={item.href} href={item.href} className="text-sm font-medium text-slate-400 transition hover:text-white">{item.label}</a>)}
          </nav>
          <a href={`mailto:${profile.email}`} className="hidden items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-emerald-300/40 hover:bg-emerald-300/10 lg:inline-flex">
            Let&apos;s talk <Icon name="arrowUpRight" className="h-4 w-4" />
          </a>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
            <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
        {menuOpen ? (
          <nav className="border-t border-white/[0.06] bg-[#070b0d] px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-base font-medium text-slate-300 transition hover:bg-white/[0.05] hover:text-white">{item.label}</a>)}
              <a href={`mailto:${profile.email}`} onClick={() => setMenuOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-300 px-4 py-3 font-semibold text-emerald-950">Let&apos;s talk <Icon name="arrowUpRight" className="h-4 w-4" /></a>
            </div>
          </nav>
        ) : null}
      </header>

      <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-5 pb-20 pt-36 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:pb-24 lg:pt-32">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-4 py-2 text-sm font-medium text-emerald-200">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" /></span>
            Building enterprise software in the UAE
          </div>
          <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
            I design systems that turn complex operations into <span className="text-gradient">dependable products.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">{profile.role} specializing in scalable architecture, secure integrations, real-time platforms, and high-performance product experiences.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-3.5 text-sm font-bold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-emerald-200">Explore selected work <Icon name="arrowUpRight" className="h-4 w-4" /></a>
            <a href="/cv" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]">View résumé <Icon name="arrowUpRight" className="h-4 w-4" /></a>
          </div>
          <div className="mt-9 flex items-center gap-3">
            <SocialLink href={profile.github} label="GitHub profile" icon="github" />
            <SocialLink href={profile.linkedin} label="LinkedIn profile" icon="linkedin" />
            <SocialLink href={`mailto:${profile.email}`} label="Send email" icon="mail" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[31rem] lg:mx-0 lg:justify-self-end">
          <div className="absolute -inset-8 rounded-[3rem] bg-emerald-300/10 blur-3xl" />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-gradient-to-b from-slate-800 to-slate-950">
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5">
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300 backdrop-blur">Technical Lead</span>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.9)]" />
              </div>
              <Image src="/assets/images/my-photo.png" alt="Mohammed Masri" fill priority sizes="(max-width: 1024px) 90vw, 480px" className="object-contain object-bottom pt-14" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#05080a] via-[#05080a]/80 to-transparent px-6 pb-6 pt-24">
                <p className="text-2xl font-semibold tracking-tight text-white">{profile.name}</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-slate-400"><Icon name="location" className="h-4 w-4 text-emerald-300" />{profile.location}</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-7 -left-4 rounded-2xl border border-white/10 bg-[#0b1012]/90 p-4 shadow-2xl backdrop-blur-xl sm:-left-10">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">Current focus</p>
            <p className="mt-2 text-sm font-semibold text-white">Enterprise architecture + AI</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl gap-px px-5 sm:px-8 md:grid-cols-3">
          {metrics.map((metric) => <div key={metric.label} className="px-2 py-9 md:px-8 md:py-11"><p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{metric.value}</p><p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">{metric.label}</p></div>)}
        </div>
      </section>

      <section id="about" className="section-shell scroll-mt-24">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionIntro eyebrow="About" title="Architecture thinking, product ownership, and hands-on engineering." />
          <div>
            <div className="space-y-6 text-lg leading-8 text-slate-300">{profile.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {["Translate business complexity into clear technical systems", "Build reusable foundations instead of one-off solutions", "Balance delivery speed with long-term maintainability", "Own quality from architecture through deployment"].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-300/10 text-emerald-300"><Icon name="check" className="h-3.5 w-3.5" /></span><p className="text-sm leading-6 text-slate-300">{item}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="section-shell scroll-mt-24 pt-0">
        <SectionIntro eyebrow="Core expertise" title="End-to-end capability for demanding digital platforms." description="From system boundaries and integration contracts to polished interfaces and automated delivery pipelines, I work across the full product lifecycle." />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((capability, index) => (
            <article key={capability.title} className="group rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/25 hover:bg-emerald-300/[0.035]">
              <div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.08] text-emerald-300 transition group-hover:scale-105"><Icon name={capability.icon as IconName} className="h-6 w-6" /></span><span className="text-xs font-medium text-slate-600">0{index + 1}</span></div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight text-white">{capability.title}</h3><p className="mt-4 text-sm leading-7 text-slate-400">{capability.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-shell scroll-mt-24 pt-4">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionIntro eyebrow="Experience" title="More than six years delivering software across enterprise environments." />
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200">Full career on LinkedIn <Icon name="arrowUpRight" className="h-4 w-4" /></a>
        </div>
        <div className="relative mt-14">
          <div className="absolute bottom-4 left-[0.45rem] top-4 w-px bg-gradient-to-b from-emerald-300/60 via-white/10 to-transparent md:left-[12.5rem]" />
          <div className="space-y-6">
            {experiences.map((experience) => (
              <article key={`${experience.company}-${experience.period}`} className="relative grid gap-5 pl-9 md:grid-cols-[11rem_1fr] md:gap-10 md:pl-0">
                <div className="hidden pt-8 text-right md:block"><p className="text-sm font-semibold text-slate-300">{experience.period}</p><p className="mt-2 text-xs text-slate-600">{experience.location}</p></div>
                <span className="absolute left-0 top-9 h-4 w-4 rounded-full border-4 border-[#05080a] bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.45)] md:left-[12.05rem]" />
                <div className={`rounded-3xl border p-6 sm:p-8 ${"featured" in experience && experience.featured ? "border-emerald-300/20 bg-emerald-300/[0.035]" : "border-white/[0.07] bg-white/[0.025]"}`}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div><p className="text-sm font-medium text-emerald-300">{experience.company}</p><h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{experience.role}</h3></div><div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 md:hidden"><span className="inline-flex items-center gap-1.5"><Icon name="calendar" className="h-3.5 w-3.5" />{experience.period}</span><span className="inline-flex items-center gap-1.5"><Icon name="location" className="h-3.5 w-3.5" />{experience.location}</span></div></div>
                  <ul className="mt-6 space-y-3">{experience.achievements.map((achievement) => <li key={achievement} className="flex gap-3 text-sm leading-7 text-slate-400"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300/80" />{achievement}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section-shell scroll-mt-24 pt-4">
        <SectionIntro eyebrow="Selected work" title="Platforms built around real operational complexity." description="A selection of systems and product areas I have architected, delivered, or supported across education, communication, media, and enterprise operations." />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {selectedWork.map((project, index) => (
            <article key={project.title} className="group relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-gradient-to-br from-white/[0.045] to-transparent p-7 sm:p-9">
              <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-emerald-300/[0.06] blur-2xl transition group-hover:bg-emerald-300/10" />
              <div className="relative"><div className="flex items-center justify-between gap-5"><span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-400">{project.label}</span><span className="text-2xl font-light text-slate-700">0{index + 1}</span></div><h3 className="mt-8 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.title}</h3><p className="mt-5 text-base leading-8 text-slate-400">{project.description}</p><div className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-slate-300">{tag}</span>)}</div><div className="mt-8 border-t border-white/[0.07] pt-6"><p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">Outcome</p><p className="mt-2 text-sm leading-6 text-slate-300">{project.impact}</p></div></div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-shell scroll-mt-24 pt-4">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <SectionIntro eyebrow="Technology" title="A broad toolkit, applied with architectural discipline." description="Technology choices are guided by product constraints, maintainability, team capability, and operational needs—not trends alone." />
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => <article key={group.title} className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6"><h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">{group.title}</h3><div className="mt-5 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="rounded-lg border border-white/[0.06] bg-black/20 px-3 py-2 text-sm text-slate-300">{skill}</span>)}</div></article>)}
          </div>
        </div>
      </section>

      <section className="section-shell pt-4">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-white/[0.07] bg-white/[0.025] p-8 sm:p-10"><p className="eyebrow">Education</p><h2 className="mt-6 text-3xl font-semibold tracking-tight text-white">{education.degree}</h2><p className="mt-3 text-lg text-emerald-300">{education.institution}</p><div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/[0.07] pt-6 text-sm text-slate-500"><span>{education.year}</span><span>{education.location}</span></div></article>
          <article className="rounded-[2rem] border border-white/[0.07] bg-white/[0.025] p-8 sm:p-10"><p className="eyebrow">Languages</p><div className="mt-6 space-y-6">{languages.map((language) => <div key={language.name} className="flex items-end justify-between gap-6 border-b border-white/[0.07] pb-5 last:border-0 last:pb-0"><h2 className="text-2xl font-semibold tracking-tight text-white">{language.name}</h2><p className="text-right text-sm text-slate-500">{language.level}</p></div>)}</div></article>
        </div>
      </section>

      <section id="contact" className="section-shell scroll-mt-24 pb-14 pt-4 sm:pb-20">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-emerald-300/15 bg-emerald-300/[0.055] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow">Contact</p><h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">Have a complex product or platform to build?</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">Let&apos;s discuss the architecture, integration strategy, delivery plan, and engineering foundations that will make it dependable.</p></div><a href={`mailto:${profile.email}`} className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-emerald-300 px-8 text-base font-bold text-emerald-950 transition hover:-translate-y-1 hover:bg-emerald-200">Start a conversation <Icon name="arrowUpRight" className="h-5 w-5" /></a></div>
          <div className="relative mt-12 grid gap-3 border-t border-white/[0.08] pt-8 md:grid-cols-3"><a href={`mailto:${profile.email}`} className="contact-link"><Icon name="mail" className="h-5 w-5 text-emerald-300" /><span className="truncate">{profile.email}</span></a><a href={`tel:${profile.phoneHref}`} className="contact-link"><Icon name="phone" className="h-5 w-5 text-emerald-300" /><span>{profile.phone}</span></a><div className="contact-link cursor-default"><Icon name="location" className="h-5 w-5 text-emerald-300" /><span>{profile.location}</span></div></div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-8"><p>© {currentYear} Mohammed Masri. Built with Next.js and TypeScript.</p><div className="flex items-center gap-5"><a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-slate-300">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-slate-300">LinkedIn</a><a href="#top" className="transition hover:text-slate-300">Back to top ↑</a></div></div>
      </footer>
    </main>
  );
}
