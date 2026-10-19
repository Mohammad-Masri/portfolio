"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { capabilities, experiences, profile, selectedWork } from "@/data/portfolio";

function Arrow({ size = 18 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>;
}

function ExternalArrow() {
  return <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M7 17 17 7M8 7h9v9"/></svg>;
}

function HeroPhoto() {
  return (
    <div className="peach-photo-stage">
      <div className="peach-photo-blob" aria-hidden="true" />
      <div className="peach-photo-orbit peach-photo-orbit-one" aria-hidden="true" />
      <div className="peach-photo-orbit peach-photo-orbit-two" aria-hidden="true" />
      <div className="peach-photo-frame">
        <Image
          src="/assets/images/my-photo.png"
          alt="Portrait of Mohammed Masri"
          fill
          priority
          quality={88}
          sizes="(max-width: 600px) 88vw, (max-width: 900px) 75vw, (max-width: 1200px) 46vw, 600px"
          className="peach-photo-person"
        />
      </div>
      <div className="peach-photo-spark peach-photo-spark-one" aria-hidden="true">✳</div>
      <div className="peach-photo-spark peach-photo-spark-two" aria-hidden="true">✦</div>
      <div className="peach-float-card peach-float-code" aria-hidden="true">
        <span className="peach-float-icon peach-float-icon-code">{"</>"}</span>
        <span className="peach-float-copy"><strong>Full-stack</strong><small>TypeScript · React</small></span>
      </div>
      <div className="peach-float-card peach-float-analytics" aria-hidden="true">
        <span className="peach-float-icon peach-float-icon-chart">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 19 9 13l4 3L23 6"/><path d="M18 6h5v5"/></svg>
        </span>
        <span className="peach-float-copy"><strong>Architecture</strong><small>Built for scale</small></span>
      </div>
      <div className="peach-float-card peach-float-cloud" aria-hidden="true">
        <span className="peach-float-icon peach-float-icon-cloud">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M7 20h12a5 5 0 0 0 .4-10 7 7 0 0 0-13-1.2A5.5 5.5 0 0 0 7 20Z"/></svg>
        </span>
        <span className="peach-float-copy"><strong>Cloud &amp; APIs</strong><small>AWS · Integrations</small></span>
      </div>
      <span className="peach-photo-caption" aria-hidden="true">BUILD · CONNECT · SCALE</span>
    </div>
  );
}

function PlatformPreview() {
  const modules = ["Strategy", "HR", "Student attendance", "Employee attendance", "Legal", "Service catalog"];
  return (
    <div className="peach-platform-preview" role="img" aria-label="Conceptual interface illustrating Sharjah Education Academy's unified platform and its strategy, HR, attendance, legal and services modules">
      <div className="peach-browser">
        <div className="peach-browser-bar"><div className="peach-window-dots"><i/><i/><i/></div><span>SEA PLATFORM / CONCEPTUAL VIEW</span><span className="peach-browser-symbol">⌘</span></div>
        <div className="peach-browser-inner">
          <aside className="peach-browser-side"><span className="peach-sea-mark">SEA<span>.</span></span><div className="peach-side-active"/><div className="peach-side-dot"/><div className="peach-side-dot"/><div className="peach-side-dot"/></aside>
          <div className="peach-browser-dashboard">
            <div className="peach-dashboard-top"><div><small>SHARJAH EDUCATION ACADEMY</small><h4>Connected workspace</h4></div><span>↗</span></div>
            <div className="peach-module-grid">{modules.map((name,i)=><div className="peach-module" key={name}><span className={"peach-module-icon peach-module-icon-"+i}>{["◎","▦","◷","◉","≡","✳"][i]}</span><span>{name}</span></div>)}</div>
            <div className="peach-dashboard-bottom"><div className="peach-dash-line"/><div className="peach-dash-line short"/><div className="peach-dashboard-flow"><i/><i/><i/><i/><i/></div></div>
          </div>
        </div>
      </div>
      <div className="peach-preview-sticker peach-preview-sticker-one">Connected systems <span>✦</span></div>
      <div className="peach-preview-sticker peach-preview-sticker-two">Built to scale <span>↗</span></div>
    </div>
  );
}

function ProjectGlyph({ index }: { index: number }) {
  return <div aria-hidden="true" className={"peach-project-glyph peach-project-glyph-"+index}>
    {index===0 ? <svg viewBox="0 0 90 90"><circle cx="45" cy="39" r="17" fill="none" stroke="currentColor" strokeWidth="5"/><path d="M45 22V11m0 56V56M28 39H17m56 0H62m-29-9-8-8m31 33-8-8m8-17 8-8M25 55l8-8" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/><circle cx="45" cy="39" r="5" fill="currentColor"/></svg> : index===1 ? <svg viewBox="0 0 90 90" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round"><path d="m35 34 18-18c9-9 23 5 14 14L50 47m-10 10L23 74C14 83 1 69 10 60l17-17"/><path d="M29 60 61 29"/></svg> : <svg viewBox="0 0 90 90"><rect x="12" y="14" width="66" height="62" rx="17" fill="none" stroke="currentColor" strokeWidth="5"/><path d="m36 29 26 17-26 17Z" fill="currentColor"/></svg>}
  </div>;
}

const approachSteps = [
  {
    eyebrow: "01 / UNDERSTAND",
    title: "Understand the problem",
    summary: "Start with people, workflows, and business goals.",
    statement: "Clarity before code.",
    detail: "I listen to stakeholders, map real requirements, and identify what a solution actually needs to achieve before thinking about implementation.",
  },
  {
    eyebrow: "02 / DESIGN",
    title: "Architect for change",
    summary: "Build foundations that can evolve.",
    statement: "Structure that scales.",
    detail: "I define boundaries, contracts, and reusable patterns so systems can grow without becoming harder for teams to understand and maintain.",
  },
  {
    eyebrow: "03 / BUILD",
    title: "Engineer with care",
    summary: "Make quality part of daily delivery.",
    statement: "Quality, by design.",
    detail: "I combine practical full-stack engineering with clean architecture, collaborative reviews, and automation to deliver dependable software.",
  },
  {
    eyebrow: "04 / DELIVER",
    title: "Own the outcome",
    summary: "Stay accountable beyond the last commit.",
    statement: "From idea to impact.",
    detail: "I support the complete journey—from architecture and implementation to cloud delivery, stakeholder feedback, and continuous improvement.",
  },
] as const;

function SectionTitle({ label, title, note }: { label: string; title: string; note?: string }) {
  return <div className="peach-section-title"><div><span className="peach-eyebrow">{label}</span><h2>{title}</h2></div>{note&&<p>{note}</p>}</div>;
}

export default function PeachPortfolio() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [selectedApproach, setSelectedApproach] = useState(0);
  const [openProject,setOpenProject] = useState<number | null>(null);
  const reduced = useReducedMotion();
  const entrance = { initial: reduced ? false : {opacity:0,y:26}, whileInView: {opacity:1,y:0}, viewport:{once:true,amount:0.12}, transition:{duration:reduced?0:0.6,ease:"easeOut" as const} };
  const otherProjects = [
    {title:"AI Strategy Management",subtitle:"AI-powered strategic planning and workflow automation",caption:"Generative AI · Enterprise UX"},
    {title:"O-Connect",subtitle:"Enterprise voice and video conferencing",caption:"WebRTC · Socket.io · GraphQL"},
    {title:"Vidnik App",subtitle:"Content management and delivery infrastructure",caption:"NestJS · React · AWS"},
  ] as const;
  return <main className="peach-site" id="top">
    <div className="peach-ambient peach-ambient-one" aria-hidden="true"/><div className="peach-ambient peach-ambient-two" aria-hidden="true"/>
    <header className="peach-header">
      <div className="peach-container peach-nav-wrap">
        <a href="#top" className="peach-logo" aria-label="Mohammed Masri, back to top">Mohammed <span>Masri<span className="peach-logo-dot">.</span></span><small>Software Engineer</small></a>
        <nav id="peach-nav" className={"peach-nav"+(menuOpen?" is-open":"")} aria-label="Main navigation">
          {[["Home","#top"],["Work","#work"],["Expertise","#expertise"],["Experience","#experience"],["Approach","#about"],["Contact","#contact"]].map(([label,href])=><a key={href} href={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}
        </nav>
        <a className="peach-pill peach-pill-header" href={"mailto:"+profile.email}>Let's talk <Arrow size={16}/></a>
        <button aria-label={menuOpen?"Close navigation":"Open navigation"} aria-expanded={menuOpen} aria-controls="peach-nav" className="peach-menu" type="button" onClick={()=>setMenuOpen(!menuOpen)}><span/><span/><span/></button>
      </div>
    </header>

    <section className="peach-hero peach-container" aria-labelledby="peach-hero-title">
      <div className="peach-hero-copy">
        <motion.div initial={reduced?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="peach-location"><span className="peach-location-spark">✳</span> FULL STACK ENGINEERING · DUBAI, UAE</motion.div>
        <motion.h1 id="peach-hero-title" initial={reduced?false:{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.75,delay:.08}}>Building digital<br/>products with<br/><span>clarity.</span></motion.h1>
        <motion.p initial={reduced?false:{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.75,delay:.16}} className="peach-hero-description">I'm Mohammed, a Software Engineer experienced in full-stack development and technical leadership. I architect enterprise platforms, connect complex systems, and build meaningful digital products.</motion.p>
        <motion.div initial={reduced?false:{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:.75,delay:.25}} className="peach-actions">
          <a href="#work" className="peach-pill peach-pill-primary">Explore my work <Arrow/></a>
          <a href="/cv" className="peach-pill peach-pill-outline">View résumé <ExternalArrow/></a>
        </motion.div>
        <div className="peach-hero-note"><span className="peach-note-dot"/> ARCHITECTURE · PRODUCT ENGINEERING · LEADERSHIP</div>
      </div>
      <motion.div className="peach-hero-graphic" initial={reduced?false:{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.12}}>
        <HeroPhoto/>
        <span className="peach-art-label peach-art-label-one">IDEAS <span>→</span> PRODUCTS</span>
        <span className="peach-art-label peach-art-label-two">BUILD · CONNECT · SCALE</span>
      </motion.div>
    </section>

    <section className="peach-stats peach-container" aria-label="Professional highlights">
      <div><strong>6+</strong><span>Years of experience</span></div>
      <div><strong>4</strong><span>Engineering organizations</span></div>
      <div><strong>Full stack</strong><span>Architecture through delivery</span></div>
      <div className="peach-stats-quote"><span>“</span> Software should make the complex feel simple.</div>
    </section>

    <section className="peach-featured peach-container" id="work">
      <motion.div {...entrance} className="peach-featured-card">
        <div className="peach-featured-copy">
          <span className="peach-eyebrow"><span className="peach-eyebrow-line"/> FEATURED WORK / 01</span>
          <h2>SEA Platform<span className="peach-title-star">✳</span></h2>
          <h3>Sharjah Education Academy</h3>
          <p>A unified enterprise ecosystem connecting institutional applications across strategy management, HR, student and employee attendance, legal management, and service catalog workflows.</p>
          <div className="peach-featured-tags"><span>Microservices</span><span>Microfrontends</span><span>Enterprise Integrations</span><span>AWS</span></div>
          <a href="#sea-details" className="peach-inline-link">Explore the platform <Arrow/></a>
        </div>
        <PlatformPreview/>
      </motion.div>
      <p className="peach-illustration-disclaimer">Conceptual visualization for portfolio presentation; not an actual Sharjah Education Academy product screenshot.</p>
    </section>

    <section className="peach-projects peach-container" aria-labelledby="peach-projects-heading">
      <motion.div {...entrance}><SectionTitle label="SELECTED WORK / 02—04" title="More things I've built." note="Enterprise platforms, real-time communication, and content experiences—different challenges, the same attention to quality."/></motion.div>
      <div className="peach-project-grid">
        {otherProjects.map((project,i)=><motion.article {...entrance} className="peach-project-card" key={project.title}>
          <div className="peach-project-top"><span>0{i+2}</span><ExternalArrow/></div>
          <ProjectGlyph index={i}/>
          <h3>{project.title}</h3><p>{project.subtitle}</p><span className="peach-project-caption">{project.caption}</span>
          <button type="button" className="peach-project-more" aria-expanded={openProject===i} aria-controls={"peach-project-detail-"+i} onClick={()=>setOpenProject(openProject===i?null:i)}>{openProject===i?"Show less":"Learn more"} <Arrow size={15}/></button>
          {openProject===i&&<p className="peach-project-extra" id={"peach-project-detail-"+i}>{selectedWork[i+1].description}</p>}
        </motion.article>)}
      </div>
    </section>

    <section className="peach-focus-section" id="sea-details">
      <div className="peach-container peach-focus-grid">
        <motion.div {...entrance} className="peach-focus-copy">
          <span className="peach-eyebrow">A CLOSER LOOK / SHARJAH EDUCATION ACADEMY</span>
          <h2>One connected ecosystem.<br/><span>Many moving parts.</span></h2>
          <p>At Sharjah Education Academy, I led the architecture and delivery of SEA Platform—a modular foundation for institutional applications, reusable UI components, shared libraries, and secure integrations.</p>
          <p>My work spans microservices, microfrontends, cloud deployments, and system-to-system connections involving platforms such as HubSpot, Creatrix, Azure Active Directory, Oracle Fusion HCM, and Canvas LMS.</p>
          <div className="peach-focus-tags"><span>Enterprise architecture</span><span>Secure integrations</span><span>Platform delivery</span></div>
        </motion.div>
        <motion.div {...entrance} className="peach-ecosystem-visual" aria-label="Simplified conceptual view of platform application domains">
          <span className="peach-ecosystem-title">SEA / PLATFORM DOMAINS</span>
          <div className="peach-domain-core">SEA<span>Platform</span></div>
          {["Strategy","HR","Attendance","Legal","Services","Integrations"].map((name,i)=><div key={name} className={"peach-domain peach-domain-"+i}><span>✦</span>{name}</div>)}
          <span className="peach-ecosystem-caption">Illustrative architecture · not an internal system diagram</span>
        </motion.div>
      </div>
    </section>

    <section className="peach-expertise peach-container" id="expertise">
      <motion.div {...entrance}><SectionTitle label="HOW I WORK" title="Built from first principles." note="From understanding the problem to designing systems that teams can confidently extend."/></motion.div>
      <div className="peach-capability-grid">
        {[capabilities[0],capabilities[1],capabilities[2],capabilities[3]].map((cap,i)=><motion.article {...entrance} className="peach-capability" key={cap.title}><span className="peach-cap-num">0{i+1}</span><span className="peach-cap-icon">{["◎","↗","⌘","☼"][i]}</span><h3>{cap.title}</h3><p>{cap.description}</p></motion.article>)}
      </div>
    </section>

    <section className="peach-experience" id="experience">
      <div className="peach-container">
        <motion.div {...entrance}><SectionTitle label="MY JOURNEY" title="Experience that adds up." note="Six-plus years across enterprise education, communication, media, and digital products."/></motion.div>
        <div className="peach-timeline">{experiences.map((role,i)=><motion.article {...entrance} className="peach-timeline-row" key={role.company}><span className="peach-time-index">0{i+1} / {role.period}</span><div><h3>{role.company}</h3><p>{role.role} · {role.location}</p><small>{role.achievements[0]}</small></div><span className="peach-time-mark">↗</span></motion.article>)}</div>
      </div>
    </section>

    <section className="peach-approach-section peach-container" id="about" aria-labelledby="peach-approach-title">
      <motion.div {...entrance} className="peach-approach-intro">
        <div>
          <span className="peach-eyebrow">BEHIND THE WORK / MY APPROACH</span>
          <h2 id="peach-approach-title">Great products start<br />with <span>good questions.</span></h2>
        </div>
        <p>I believe thoughtful engineering is about more than choosing technologies. It is understanding people, shaping reliable systems, and owning the result from idea to release.</p>
      </motion.div>
      <div className="peach-approach-layout">
        <motion.div {...entrance} className="peach-approach-canvas">
          <div className="peach-approach-canvas-top">
            <span>MM / ENGINEERING MINDSET</span>
            <span>0{selectedApproach + 1} — 04</span>
          </div>
          <div className="peach-approach-path" aria-hidden="true">
            <span className="peach-approach-path-line" />
            {approachSteps.map((step, index) => (
              <span key={step.title} className={"peach-approach-path-node" + (selectedApproach === index ? " is-active" : "")}>
                <span>{index + 1}</span>
              </span>
            ))}
          </div>
          <div className="peach-approach-canvas-body" aria-live="polite">
            <span className="peach-approach-current-step">{approachSteps[selectedApproach].eyebrow}</span>
            <h3>{approachSteps[selectedApproach].statement}</h3>
            <p>{approachSteps[selectedApproach].detail}</p>
          </div>
          <div className="peach-approach-canvas-bottom">
            <span>UNDERSTAND</span>
            <span>DESIGN</span>
            <span>BUILD</span>
            <span>DELIVER</span>
          </div>
          <span className="peach-approach-watermark" aria-hidden="true">✳</span>
        </motion.div>
        <motion.div {...entrance} className="peach-approach-steps" role="group" aria-label="Explore my engineering approach">
          {approachSteps.map((step, index) => (
            <button
              key={step.title}
              type="button"
              className={"peach-approach-step" + (selectedApproach === index ? " is-active" : "")}
              aria-pressed={selectedApproach === index}
              onClick={() => setSelectedApproach(index)}
            >
              <span className="peach-approach-number">0{index + 1}</span>
              <span className="peach-approach-step-copy">
                <strong>{step.title}</strong>
                <small>{step.summary}</small>
              </span>
              <span className="peach-approach-step-arrow" aria-hidden="true">↗</span>
            </button>
          ))}
          <a className="peach-approach-link" href={profile.linkedin} rel="noopener noreferrer" target="_blank">Explore my professional journey <ExternalArrow /></a>
        </motion.div>
      </div>
    </section>

    <section className="peach-contact" id="contact"><div className="peach-container peach-contact-inner"><div><span className="peach-eyebrow">LET'S MAKE SOMETHING MEANINGFUL</span><h2>Have a complex idea?<br/><span>Let's make it clear.</span></h2></div><a href={"mailto:"+profile.email} className="peach-pill peach-pill-dark">Start a conversation <Arrow/></a><div className="peach-contact-decoration" aria-hidden="true">✳</div></div></section>
    <footer className="peach-footer peach-container"><a href="#top" className="peach-footer-brand">Mohammed <span>Masri.</span></a><span>© {new Date().getFullYear()} Mohammed Masri</span><div><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="/cv">Résumé</a></div></footer>
  </main>;
}
