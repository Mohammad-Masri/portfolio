import Image from "next/image";
import PortfolioNavigation from "@/components/portfolio/PortfolioNavigation";
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

function revealDelay(index: number) {
  return `reveal-delay-${Math.min(index, 5)}`;
}

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
    <div className="reveal max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-5">{title}</h2>
      {description ? (
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: IconName }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={label}
      className="social-link"
    >
      <Icon name={icon} className="h-5 w-5" />
    </a>
  );
}

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main id="top" className="relative overflow-hidden">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="site-grid pointer-events-none fixed inset-0 -z-30" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-left pointer-events-none fixed -z-20" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-right pointer-events-none fixed -z-20" aria-hidden="true" />

      <PortfolioNavigation email={profile.email} />

      <section className="hero-shell mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:pb-20 lg:pt-28">
        <div className="hero-intro relative z-10">
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
        </div>

        <div className="hero-portrait relative mx-auto w-full max-w-[31rem] lg:mx-0 lg:justify-self-end">
          <div className="hero-orbit hero-orbit-outer" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-inner" aria-hidden="true" />
          <div className="absolute -inset-10 rounded-[4rem] bg-emerald-300/[0.08] blur-3xl" aria-hidden="true" />

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
              <div className="portrait-grid absolute inset-0" aria-hidden="true" />
              <Image
                src="/assets/images/my-photo.png"
                alt="Mohammed Masri"
                fill
                priority
                quality={82}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 500px, 480px"
                className="object-contain object-bottom pt-12"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#05080a] via-[#05080a]/85 to-transparent px-6 pb-7 pt-28">
                <p className="text-2xl font-semibold tracking-[-0.03em] text-white">{profile.name}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Building robust digital ecosystems from architecture to release.
                </p>
              </div>
            </div>
          </div>

          <div className="floating-card float-slow absolute -bottom-6 -left-3 sm:-left-12">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-500">Experience</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-white">6+ years</p>
            <p className="mt-1 text-xs text-slate-500">Production engineering</p>
          </div>

          <div className="floating-card float-slow-reverse absolute -right-3 top-24 hidden sm:block sm:-right-10">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-300">
                <Icon name="layers" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-slate-500">Current focus</p>
                <p className="mt-1 text-sm font-semibold text-white">Architecture + AI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8">
        <div className="metrics-panel reveal mx-auto grid max-w-7xl md:grid-cols-3">
          {metrics.map((metric, index) => (
            <div key={metric.label} className="metric-item relative px-7 py-7 sm:px-9 sm:py-9">
              <span className="text-xs font-semibold text-emerald-300/70">0{index + 1}</span>
              <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{metric.value}</p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">{metric.label}</p>
            </div>
          ))}
        </div>
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

          <div className="reveal">
            <div className="space-y-6 text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              {profile.summary.map((paragraph, index) => (
                <p key={paragraph} className={index === 0 ? "text-white" : "text-slate-400"}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              {principles.map((item, index) => (
                <div key={item} className={`principle-card reveal ${revealDelay(index)}`}>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-300/15 bg-emerald-300/[0.08] text-emerald-300">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="section-shell render-optimized scroll-mt-28 pt-8">
        <SectionIntro
          eyebrow="Core expertise"
          title="Full-lifecycle capability for demanding digital platforms."
          description="From system boundaries and integration contracts to polished interfaces and automated delivery pipelines, I work across the complete product lifecycle."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-12">
          {capabilities.map((capability, index) => (
            <article
              key={capability.title}
              className={`capability-card reveal group ${revealDelay(index)} ${capabilityLayout[index] ?? "xl:col-span-4"}`}
            >
              <div className="capability-glow" aria-hidden="true" />
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
            </article>
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
              <article
                key={`${experience.company}-${experience.period}`}
                className={`experience-card reveal ${revealDelay(index)} ${
                  "featured" in experience && experience.featured ? "experience-card-featured" : ""
                }`}
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section-shell render-optimized scroll-mt-28 pt-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionIntro
            eyebrow="Selected work"
            title="Enterprise work shaped around real operational complexity."
            description="Systems and product areas I have architected, delivered, or supported across education, communication, media, and enterprise operations."
          />
          <p className="max-w-xs text-sm leading-6 text-slate-600">
            Selected work is presented by capability and outcome where project confidentiality applies.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {selectedWork.map((project, index) => {
            const isWide = index === 0 || index === selectedWork.length - 1;

            return (
              <article
                key={project.title}
                className={`project-card reveal group ${revealDelay(index)} ${isWide ? "lg:col-span-2" : ""}`}
              >
                <div className="project-card-grid" aria-hidden="true" />
                <div className="project-orb" aria-hidden="true" />
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
              </article>
            );
          })}
        </div>
      </section>

      <section id="skills" className="section-shell render-optimized scroll-mt-28 pt-8">
        <SectionIntro
          eyebrow="Technology"
          title="A broad toolkit, applied with architectural discipline."
          description="Technology choices are guided by product constraints, maintainability, team capability, and operational needs—not trends alone."
        />

        <div className="marquee mt-12" aria-label="Featured technologies">
          <div className="marquee-track">
            {[...featuredTechnologies, ...featuredTechnologies].map((technology, index) => (
              <span key={`${technology}-${index}`} className="marquee-item" aria-hidden={index >= featuredTechnologies.length}>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/70" />
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <article key={group.title} className={`skill-card reveal ${revealDelay(index)}`}>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">{group.title}</h3>
                <span className="text-xs text-slate-700">{String(group.skills.length).padStart(2, "0")}</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell render-optimized pt-8">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="credential-card reveal">
            <div className="relative">
              <p className="eyebrow">Education</p>
              <h2 className="mt-8 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{education.degree}</h2>
              <p className="mt-4 text-lg text-emerald-300">{education.institution}</p>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/[0.07] pt-6 text-sm text-slate-500">
                <span>{education.year}</span>
                <span>{education.location}</span>
              </div>
            </div>
          </article>

          <article className="credential-card reveal reveal-delay-1">
            <p className="eyebrow">Languages</p>
            <div className="mt-8 space-y-7">
              {languages.map((language) => (
                <div key={language.name} className="flex items-end justify-between gap-6 border-b border-white/[0.07] pb-6 last:border-0 last:pb-0">
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">{language.name}</h2>
                  <p className="max-w-[12rem] text-right text-sm leading-6 text-slate-500">{language.level}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="section-shell render-optimized scroll-mt-28 pb-14 pt-8 sm:pb-20">
        <div className="contact-panel reveal relative overflow-hidden">
          <div className="contact-grid" aria-hidden="true" />
          <div className="contact-orb" aria-hidden="true" />
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
        </div>
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
