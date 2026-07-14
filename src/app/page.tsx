"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
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

const principles = [
  "Translate business complexity into clear technical systems",
  "Build reusable foundations instead of one-off solutions",
  "Balance delivery speed with long-term maintainability",
  "Own quality from architecture through deployment",
] as const;

const featuredTechnologies = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "AWS",
  "Microservices",
  "GraphQL",
  "WebRTC",
  "Docker",
] as const;

const capabilityLayout = [
  "xl:col-span-5",
  "xl:col-span-7",
  "xl:col-span-4",
  "xl:col-span-4",
  "xl:col-span-4",
  "xl:col-span-12",
] as const;

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      className="max-w-3xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-5">{title}</h2>
      {description ? (
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: IconName }) {
  const isExternal = href.startsWith("http");

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={label}
      className="social-link"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Icon name={icon} className="h-5 w-5" />
    </motion.a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(navigation[0].href);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <main id="top" className="relative overflow-hidden">
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-200"
        style={{ scaleX: smoothProgress }}
      />
      <div className="site-grid pointer-events-none fixed inset-0 -z-30" />
      <div className="ambient-glow ambient-glow-left pointer-events-none fixed -z-20" />
      <div className="ambient-glow ambient-glow-right pointer-events-none fixed -z-20" />

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
        <div className="nav-shell mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-4">
          <a href="#top" className="group flex items-center gap-3" aria-label="Back to top">
            <span className="brand-mark">MM</span>
            <span className="hidden text-sm font-semibold tracking-[-0.01em] text-white sm:block">
              Mohammed Masri
            </span>
          </a>

          <nav className="hidden items-center rounded-full border border-white/[0.06] bg-black/20 p-1 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive ? "text-white" : "text-slate-500 hover:text-slate-200"
                  }`}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-0 -z-10 rounded-full border border-white/[0.08] bg-white/[0.07]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a href={`mailto:${profile.email}`} className="nav-cta hidden lg:inline-flex">
              Let&apos;s talk <Icon name="arrowUpRight" className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] lg:hidden"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
            >
              <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.nav
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="nav-shell mobile-nav-shell mx-auto mt-2 max-w-7xl overflow-hidden p-2 lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-1 p-1">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={`mailto:${profile.email}`}
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-300 px-4 py-3 font-bold text-emerald-950"
                >
                  Let&apos;s talk <Icon name="arrowUpRight" className="h-4 w-4" />
                </a>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>

      <section className="hero-shell mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:pb-20 lg:pt-28">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="availability-pill">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
            </span>
            Senior engineering leadership · UAE
          </div>

          <p className="mt-9 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Enterprise architecture · Product engineering · Delivery
          </p>
          <h1 className="mt-5 max-w-4xl text-balance text-[3.35rem] font-semibold leading-[0.98] tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl xl:text-[5.45rem]">
            Complex systems,
            <span className="block text-gradient">made dependable.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            I&apos;m a {profile.role} designing scalable platforms, secure integrations, real-time products, and engineering foundations that teams can confidently build on.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="primary-button">
              Explore selected work <Icon name="arrowUpRight" className="h-4 w-4" />
            </a>
            <a href="/cv" className="secondary-button">
              View résumé <Icon name="arrowUpRight" className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <SocialLink href={profile.github} label="GitHub profile" icon="github" />
              <SocialLink href={profile.linkedin} label="LinkedIn profile" icon="linkedin" />
              <SocialLink href={`mailto:${profile.email}`} label="Send email" icon="mail" />
            </div>
            <span className="hidden h-6 w-px bg-white/10 sm:block" />
            <p className="text-sm text-slate-500">Based in {profile.location}</p>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[31rem] lg:mx-0 lg:justify-self-end"
          initial={{ opacity: 0, scale: 0.96, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-orbit hero-orbit-outer" />
          <div className="hero-orbit hero-orbit-inner" />
          <div className="absolute -inset-10 rounded-[4rem] bg-emerald-300/[0.08] blur-3xl" />

          <div className="portrait-frame relative overflow-hidden rounded-[2.25rem] p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-[#172025] to-[#070a0c]">
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5">
                <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-300 backdrop-blur-xl">
                  Technical Lead
                </span>
                <span className="flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-slate-300 backdrop-blur-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.9)]" />
                  Dubai
                </span>
              </div>
              <div className="portrait-grid absolute inset-0" />
              <Image
                src="/assets/images/my-photo.png"
                alt="Mohammed Masri"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-contain object-bottom pt-12"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#05080a] via-[#05080a]/85 to-transparent px-6 pb-7 pt-28">
                <p className="text-2xl font-semibold tracking-[-0.03em] text-white">{profile.name}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Building robust digital ecosystems from architecture to release.</p>
              </div>
            </div>
          </div>

          <motion.div
            className="floating-card absolute -bottom-6 -left-3 sm:-left-12"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-500">Experience</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-white">6+ years</p>
            <p className="mt-1 text-xs text-slate-500">Production engineering</p>
          </motion.div>

          <motion.div
            className="floating-card absolute -right-3 top-24 hidden sm:block sm:-right-10"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-300">
                <Icon name="layers" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-slate-500">Current focus</p>
                <p className="mt-1 text-sm font-semibold text-white">Architecture + AI</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="px-5 pb-8 sm:px-8">
        <motion.div
          className="metrics-panel mx-auto grid max-w-7xl md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          {metrics.map((metric, index) => (
            <div key={metric.label} className="metric-item relative px-7 py-7 sm:px-9 sm:py-9">
              <span className="text-xs font-semibold text-emerald-300/70">0{index + 1}</span>
              <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{metric.value}</p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">{metric.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section id="about" className="section-shell scroll-mt-28">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionIntro eyebrow="About" title="Engineering judgment beyond the codebase." />
            <div className="mt-9 hidden items-center gap-3 text-sm text-slate-500 lg:flex">
              <span className="h-px w-10 bg-emerald-300/50" />
              Architecture through delivery
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <div className="space-y-6 text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              {profile.summary.map((paragraph, index) => (
                <p key={paragraph} className={index === 0 ? "text-white" : "text-slate-400"}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              {principles.map((item, index) => (
                <motion.div
                  key={item}
                  className="principle-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-300/15 bg-emerald-300/[0.08] text-emerald-300">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="expertise" className="section-shell scroll-mt-28 pt-8">
        <SectionIntro
          eyebrow="Core expertise"
          title="Full-lifecycle capability for demanding digital platforms."
          description="From system boundaries and integration contracts to polished interfaces and automated delivery pipelines, I work across the complete product lifecycle."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-12">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.title}
              className={`capability-card group ${capabilityLayout[index]}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.045 }}
            >
              <div className="capability-glow" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-5">
                  <span className="capability-icon">
                    <Icon name={capability.icon as IconName} className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.18em] text-slate-700">0{index + 1}</span>
                </div>
                <h3 className="mt-9 text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl">{capability.title}</h3>
                <p className={`mt-4 text-sm leading-7 text-slate-400 ${index === 5 ? "max-w-3xl" : ""}`}>
                  {capability.description}
                </p>
                <div className="mt-auto pt-8">
                  <div className="h-px w-full bg-gradient-to-r from-emerald-300/30 via-white/[0.06] to-transparent" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-shell scroll-mt-28 pt-8">
        <div className="grid gap-14 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionIntro eyebrow="Experience" title="A career built around ownership and delivery." />
            <p className="mt-6 max-w-md text-base leading-7 text-slate-500">
              More than six years delivering software across enterprise education, communication, media, and digital product environments.
            </p>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-link mt-8">
              Full career on LinkedIn <Icon name="arrowUpRight" className="h-4 w-4" />
            </a>
          </div>

          <div className="space-y-5">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.period}`}
                className={`experience-card ${"featured" in experience && experience.featured ? "experience-card-featured" : ""}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.6, delay: index * 0.04 }}
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-sm font-semibold text-emerald-300">{experience.company}</p>
                      {"featured" in experience && experience.featured ? (
                        <span className="rounded-full border border-emerald-300/15 bg-emerald-300/[0.07] px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-emerald-200">
                          Current
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">{experience.role}</h3>
                  </div>
                  <div className="shrink-0 text-sm text-slate-500 sm:text-right">
                    <p className="font-medium text-slate-300">{experience.period}</p>
                    <p className="mt-1">{experience.location}</p>
                  </div>
                </div>

                <ul className="mt-7 grid gap-3">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-sm leading-7 text-slate-400">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300/80" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section-shell scroll-mt-28 pt-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionIntro
            eyebrow="Selected work"
            title="Enterprise work shaped around real operational complexity."
            description="Systems and product areas I have architected, delivered, or supported across education, communication, media, and enterprise operations."
          />
          <p className="max-w-xs text-sm leading-6 text-slate-600">Selected work is presented by capability and outcome where project confidentiality applies.</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {selectedWork.map((project, index) => {
            const isWide = index === 0 || index === selectedWork.length - 1;
            return (
              <motion.article
                key={project.title}
                className={`project-card group ${isWide ? "lg:col-span-2" : ""}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.62, delay: index * 0.05 }}
              >
                <div className="project-card-grid" />
                <div className="project-orb" />
                <div className={`relative h-full ${isWide ? "lg:grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-14" : ""}`}>
                  <div>
                    <div className="flex items-center justify-between gap-5">
                      <span className="project-label">{project.label}</span>
                      <span className="text-3xl font-light tracking-[-0.05em] text-slate-700">0{index + 1}</span>
                    </div>
                    <h3 className="mt-9 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">{project.title}</h3>
                  </div>

                  <div className={isWide ? "mt-6 lg:mt-0" : ""}>
                    <p className="text-base leading-8 text-slate-400">{project.description}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="technology-tag">{tag}</span>
                      ))}
                    </div>
                    <div className="mt-8 border-t border-white/[0.07] pt-6">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-emerald-300">Outcome</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{project.impact}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="skills" className="section-shell scroll-mt-28 pt-8">
        <SectionIntro
          eyebrow="Technology"
          title="A broad toolkit, applied with architectural discipline."
          description="Technology choices are guided by product constraints, maintainability, team capability, and operational needs—not trends alone."
        />

        <div className="marquee mt-12" aria-label="Featured technologies">
          <div className="marquee-track">
            {[...featuredTechnologies, ...featuredTechnologies].map((technology, index) => (
              <span key={`${technology}-${index}`} className="marquee-item">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/70" />
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              className="skill-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">{group.title}</h3>
                <span className="text-xs text-slate-700">{String(group.skills.length).padStart(2, "0")}</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell pt-8">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.article
            className="credential-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <p className="eyebrow">Education</p>
              <h2 className="mt-8 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{education.degree}</h2>
              <p className="mt-4 text-lg text-emerald-300">{education.institution}</p>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/[0.07] pt-6 text-sm text-slate-500">
                <span>{education.year}</span>
                <span>{education.location}</span>
              </div>
            </div>
          </motion.article>

          <motion.article
            className="credential-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <p className="eyebrow">Languages</p>
            <div className="mt-8 space-y-7">
              {languages.map((language) => (
                <div key={language.name} className="flex items-end justify-between gap-6 border-b border-white/[0.07] pb-6 last:border-0 last:pb-0">
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">{language.name}</h2>
                  <p className="max-w-[12rem] text-right text-sm leading-6 text-slate-500">{language.level}</p>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </section>

      <section id="contact" className="section-shell scroll-mt-28 pb-14 pt-8 sm:pb-20">
        <motion.div
          className="contact-panel relative overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-grid" />
          <div className="contact-orb" />
          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Let&apos;s build something that has to work exceptionally well.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                From architecture and integration strategy to delivery foundations and product execution, I&apos;m ready to discuss the next complex challenge.
              </p>
            </div>
            <a href={`mailto:${profile.email}`} className="contact-button">
              Start a conversation <Icon name="arrowUpRight" className="h-5 w-5" />
            </a>
          </div>

          <div className="relative mt-14 grid gap-3 border-t border-white/[0.08] pt-8 md:grid-cols-3">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <Icon name="mail" className="h-5 w-5 text-emerald-300" />
              <span className="truncate">{profile.email}</span>
            </a>
            <a href={`tel:${profile.phoneHref}`} className="contact-link">
              <Icon name="phone" className="h-5 w-5 text-emerald-300" />
              <span>{profile.phone}</span>
            </a>
            <div className="contact-link cursor-default">
              <Icon name="location" className="h-5 w-5 text-emerald-300" />
              <span>{profile.location}</span>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {currentYear} Mohammed Masri. Designed and built with Next.js and TypeScript.</p>
          <div className="flex items-center gap-5">
            <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-slate-300">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-slate-300">LinkedIn</a>
            <a href="#top" className="transition hover:text-slate-300">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
