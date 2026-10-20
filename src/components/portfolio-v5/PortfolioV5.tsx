import Image from "next/image";
import Link from "next/link";
import { experiences, profile } from "@/data/portfolio";
import { caseStudies, engineeringDomains } from "@/data/portfolio-v5";
import MobileNav from "./MobileNav";
import ApproachSelector from "./ApproachSelector";

function Arrow({ external = false }: { external?: boolean }) {
  return <span aria-hidden="true" className="v5-arrow">{external ? "↗" : "→"}</span>;
}

function SectionHeading({ eyebrow, title, note, id }: { eyebrow: string; title: string; note?: string; id?: string }) {
  return (
    <div className="v5-section-heading">
      <div><p className="v5-eyebrow">{eyebrow}</p><h2 id={id}>{title}</h2></div>
      {note && <p className="v5-section-intro">{note}</p>}
    </div>
  );
}

function SystemMap() {
  return (
    <div className="v5-system-map" aria-label="Conceptual illustration of connected institutional domains. Not a product screenshot." role="img">
      <div className="v5-map-heading"><span>SYSTEM ARCHITECTURE</span><span>CONCEPTUAL VIEW / SEA</span></div>
      <div className="v5-system-diagram" aria-hidden="true">
        <div className="v5-map-core">SEA<span>PLATFORM</span></div>
        <div className="v5-map-satellite v5-sat-one">STUDENT<br/>SYSTEMS</div>
        <div className="v5-map-satellite v5-sat-two">CRM<br/>INTEGRATION</div>
        <div className="v5-map-satellite v5-sat-three">IDENTITY<br/>&amp; HR</div>
        <div className="v5-map-satellite v5-sat-four">ATTENDANCE<br/>&amp; OPS</div>
        <span className="v5-map-wire v5-wire-one" />
        <span className="v5-map-wire v5-wire-two" />
      </div>
      <div className="v5-map-footer"><span>MODULAR SERVICES</span><span>INDEPENDENT DELIVERY</span></div>
    </div>
  );
}

const supportingProjects = caseStudies.filter(study => study.slug !== "sea-platform");
const experienceSummary = [
  "Enterprise applications, microservices, microfrontends and cross-system integrations for institutional workflows.",
  "Real-time voice/video communication and efficient full-stack API design for conferencing.",
  "Backend services, React content-management interfaces and cloud deployment infrastructure.",
  "Led cross-functional delivery and built full-stack applications, infrastructure and reusable solutions."
];

export default function PortfolioV5() {
  const featured = caseStudies[0];

  return (
    <div className="v5-site" id="top">
      <a className="v5-skip" href="#main-content">Skip to content</a>
      <header className="v5-header">
        <div className="v5-shell v5-header-inner">
          <a href="#top" className="v5-logo" aria-label="Mohammed Masri, back to top">MM<span>.</span></a>
          <nav className="v5-desktop-nav" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#expertise">Expertise</a>
            <a href="#experience">Experience</a>
            <a href="#approach">Approach</a>
          </nav>
          <div className="v5-header-actions">
            <Link href="/cv" className="v5-header-resume">Resume <Arrow external /></Link>
            <a className="v5-header-contact" href={`mailto:${profile.email}`}>Let&apos;s talk <Arrow /></a>
            <MobileNav />
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="v5-hero v5-shell" aria-labelledby="v5-hero-title">
          <div className="v5-hero-copy">
            <p className="v5-eyebrow">MOHAMMED MASRI / SOFTWARE ENGINEER / DUBAI, UAE</p>
            <h1 id="v5-hero-title"><span>Complex systems.</span><em>Thoughtfully engineered<span className="v5-full-stop">.</span></em></h1>
            <p className="v5-hero-description">
              I&apos;m Mohammed Masri, a Software Engineer based in Dubai with over six years of experience building enterprise platforms, scalable applications, and connected digital systems.
            </p>
            <p className="v5-hero-detail">From system architecture and secure integrations to full-stack engineering and production delivery.</p>
            <div className="v5-hero-actions">
              <a className="v5-button v5-button-primary" href="#work">Explore selected work <Arrow /></a>
              <Link href="/cv" className="v5-button v5-button-outline">View Resume <Arrow external /></Link>
            </div>
          </div>
          <div className="v5-hero-art">
            <div className="v5-portrait-halo" aria-hidden="true" />
            <div className="v5-portrait-orbit" aria-hidden="true"><i /></div>
            <div className="v5-portrait-holder">
              <Image
                src="/assets/images/my-photo.png"
                alt="Mohammed Masri, Software Engineer"
                fill
                priority
                sizes="(max-width: 620px) 86vw, (max-width: 960px) 64vw, 490px"
                className="v5-portrait"
              />
            </div>
            <p className="v5-photo-caption">BUILD · CONNECT · DELIVER</p>
          </div>
        </section>

        <div className="v5-proof v5-shell" aria-label="Professional highlights">
          <div><strong>6+ years</strong><span>Professional software engineering</span></div>
          <div><strong>Enterprise systems</strong><span>Architecture through production</span></div>
          <div><strong>Dubai, UAE</strong><span>Engineering across multiple domains</span></div>
        </div>

        <section className="v5-work v5-shell v5-section" id="work" aria-labelledby="v5-work-heading">
          <SectionHeading
            eyebrow="01 / SELECTED WORK"
            id="v5-work-heading"
            title="Systems I've helped build."
            note="Selected engineering contributions spanning enterprise architecture, AI-enabled workflows and real-time communication."
          />
          <div className="v5-work-grid">
            <article className="v5-project-featured">
              <div className="v5-featured-copy">
                <span className="v5-overline">FEATURED / {featured.organization.toUpperCase()}</span>
                <h3>{featured.title}<span> — {featured.subtitle}</span></h3>
                <p>{featured.lead}</p>
                <div className="v5-tag-list">{featured.technologies.map(tag=><span key={tag}>{tag}</span>)}</div>
                <Link href={`/work/${featured.slug}`} className="v5-featured-link">Explore the case study <Arrow external /></Link>
              </div>
              <SystemMap />
            </article>
            <div className="v5-supporting-projects">
              {supportingProjects.map((study, index) => (
                <article className="v5-small-project" key={study.slug}>
                  <div className="v5-small-icon" aria-hidden="true">{index === 0 ? "◫" : "◎"}</div>
                  <div className="v5-small-copy">
                    <p className="v5-overline">{study.category}</p>
                    <h3>{study.title}</h3>
                    <p>{study.lead}</p>
                    <span>{study.technologies.slice(0,3).join(" · ")}</span>
                  </div>
                  <Link href={`/work/${study.slug}`} className="v5-round-link" aria-label={`Read ${study.title} case study`}><Arrow external /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="v5-expertise v5-shell v5-section" id="expertise" aria-labelledby="v5-expertise-heading">
          <SectionHeading eyebrow="02 / ENGINEERING EXPERTISE" id="v5-expertise-heading" title="Beyond writing code." note="Engineering complete solutions — from reliable boundaries to production delivery." />
          <div className="v5-expertise-grid">
            {engineeringDomains.map((domain,index)=>(
              <article key={domain.title} className="v5-domain">
                <span className="v5-index">0{index+1}</span>
                <h3>{domain.title}</h3>
                <p>{domain.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="v5-experience v5-section" id="experience" aria-labelledby="v5-experience-heading">
          <div className="v5-shell v5-experience-layout">
            <div className="v5-experience-intro">
              <p className="v5-eyebrow">03 / PROFESSIONAL EXPERIENCE</p>
              <h2 id="v5-experience-heading">Experience shaped by <em>real-world complexity.</em></h2>
              <p>Across education, communication and digital products, my work spans technical implementation, system integrations and delivery.</p>
              <Link href="/cv" className="v5-text-link">View full experience &amp; Resume <Arrow external /></Link>
            </div>
            <ol className="v5-timeline">
              {experiences.map((experience,index)=>(
                <li key={experience.company}>
                  <div className="v5-time">{experience.period}</div>
                  <div className="v5-time-content">
                    <h3>{experience.company}</h3>
                    <p className="v5-job">{experience.role} · {experience.location}</p>
                    <p>{experienceSummary[index]}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="v5-approach v5-shell v5-section" id="approach" aria-labelledby="v5-approach-heading">
          <SectionHeading eyebrow="04 / HOW I WORK" id="v5-approach-heading" title="Good software starts with understanding." note="The same principles guide architecture, implementation and delivery." />
          <ApproachSelector />
        </section>

        <section className="v5-contact v5-shell v5-section" id="contact" aria-labelledby="v5-contact-heading">
          <div className="v5-contact-panel">
            <div className="v5-contact-copy">
              <p className="v5-eyebrow">05 / LET&apos;S CONNECT</p>
              <h2 id="v5-contact-heading">Let&apos;s engineer <em>what&apos;s next.</em></h2>
              <p>I&apos;m interested in meaningful engineering challenges, thoughtful technical discussions and opportunities to build software that solves real problems.</p>
              <a href={`mailto:${profile.email}`} className="v5-contact-email">Start a conversation <Arrow external /></a>
            </div>
            <div className="v5-contact-links" aria-label="Contact links">
              <a href={`mailto:${profile.email}`}><strong>Email</strong><span>Start a conversation</span><Arrow external /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><strong>LinkedIn</strong><span>Professional profile</span><Arrow external /></a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer"><strong>GitHub</strong><span>Explore repositories</span><Arrow external /></a>
              <Link href="/cv"><strong>Resume</strong><span>Experience &amp; skills</span><Arrow external /></Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="v5-footer v5-shell">
        <div><a href="#top" className="v5-logo" aria-label="Back to top">MM<span>.</span></a><span>Mohammed Masri / Software Engineer</span></div>
        <div className="v5-footer-links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><Link href="/cv">Resume</Link><a href="#top">Back to top ↑</a></div>
      </footer>
    </div>
  );
}
