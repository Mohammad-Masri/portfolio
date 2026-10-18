"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { experiences, profile, selectedWork } from "@/data/portfolio";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

const domains = [
  {
    name: "Platforms",
    caption: "Independent by design",
    description: "Microservices and microfrontends that let enterprise applications evolve, release, and scale independently.",
    tags: ["Microservices", "Microfrontends", "Clean Architecture"],
  },
  {
    name: "Intelligence",
    caption: "AI with a purpose",
    description: "Generative AI applied to real business workflows, including strategic planning, recommendations, and automation.",
    tags: ["Generative AI", "Workflows", "Strategy"],
  },
  {
    name: "Integrations",
    caption: "Connected ecosystems",
    description: "Secure system-to-system integrations between identity, CRM, HCM, SIS, LMS, and operational platforms.",
    tags: ["S2S APIs", "Identity", "Data flows"],
  },
  {
    name: "Cloud",
    caption: "Reliable by default",
    description: "Cloud infrastructure, automated delivery, and reusable foundations for secure and maintainable applications.",
    tags: ["AWS", "Docker", "CI/CD"],
  },
  {
    name: "Experiences",
    caption: "Crafted for people",
    description: "Responsive web applications and real-time products built with modern frontend and backend technologies.",
    tags: ["React", "Next.js", "WebRTC"],
  },
] as const;

const caseDetails = [
  {
    scope: "Enterprise ecosystem / architecture",
    challenge: "Bring several institutional domains together without coupling their release cycles or compromising long-term maintainability.",
    contribution: "Led the platform architecture and delivery of independently deployable services and frontend applications, established shared foundations, and developed secure integrations across institutional systems.",
    outcome: "A unified digital ecosystem supporting strategy, HR, attendance, legal management, and service-catalog workflows.",
  },
  {
    scope: "AI-enabled enterprise application",
    challenge: "Make organizational strategy planning, KPIs, initiatives, and objectives easier to manage in one connected workflow.",
    contribution: "Developed an AI-powered strategy management application with generative recommendations and workflow automation.",
    outcome: "A centralized approach to strategic planning supported by AI-assisted recommendations and actions.",
  },
  {
    scope: "Real-time communication / full-stack",
    challenge: "Support interactive conferencing with responsive experiences and low-latency voice and video.",
    contribution: "Engineered React and Node.js features, implemented WebRTC and Socket.io communication, and integrated optimized GraphQL APIs.",
    outcome: "Full-stack capabilities for an enterprise web-conferencing application.",
  },
  {
    scope: "Content management / cloud delivery",
    challenge: "Support content operations through dependable services and responsive administrative tools.",
    contribution: "Built CMS and content-server backend features using NestJS, developed React management interfaces, and supported AWS, Docker, and Nginx delivery.",
    outcome: "A connected content-management and delivery foundation for the Vidnik application.",
  },
] as const;

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {diagonal ? <><path d="M7 17 17 7"/><path d="M8 7h9v9"/></> : <><path d="M4 12h16"/><path d="m13 5 7 7-7 7"/></>}
    </svg>
  );
}

function SectionHeading({ kicker, title, description }: { kicker: string; title: React.ReactNode; description?: string }) {
  return (
    <div className="p2-section-heading">
      <span className="p2-eyebrow"><span className="p2-eyebrow-dot" />{kicker}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function SystemVisual() {
  const [active, setActive] = useState(0);
  return (
    <div className="p2-system" aria-label="Interactive illustration of engineering capabilities">
      <div className="p2-system-aura" aria-hidden="true" />
      <div className="p2-system-globe" aria-hidden="true" />
      <div className="p2-system-ring p2-system-ring-one" aria-hidden="true" />
      <div className="p2-system-ring p2-system-ring-two" aria-hidden="true" />
      <svg className="p2-system-lines" viewBox="0 0 600 600" fill="none" aria-hidden="true">
        <circle cx="300" cy="300" r="177" stroke="#8695F9" strokeOpacity=".13" strokeDasharray="3 8" />
        <circle cx="300" cy="300" r="238" stroke="#8695F9" strokeOpacity=".11" />
        <path d="M300 300 150 148 M300 300 452 144 M300 300 82 338 M300 300 470 384 M300 300 298 499" stroke="#A8B3FF" strokeOpacity=".4" strokeWidth="1.4" strokeDasharray="5 7" />
        <path d="M150 148Q310 40 452 144Q548 240 470 384Q400 535 298 499Q95 475 82 338Q65 225 150 148Z" stroke="#879CFF" strokeOpacity=".24" strokeWidth="1.2"/>
        <path d="M82 338Q280 460 470 384 M150 148Q270 245 452 144" stroke="#859BFE" strokeOpacity=".15" />
      </svg>
      <div className="p2-system-core" aria-hidden="true">
        <span className="p2-core-logo">M<span>M</span></span>
        <span className="p2-core-label">SYSTEMS THINKING</span>
      </div>
      {domains.map((domain, index) => (
        <button
          key={domain.name}
          type="button"
          className={"p2-system-node p2-system-node-" + index + (active === index ? " is-active" : "")}
          onClick={() => setActive(index)}
          aria-pressed={active === index}
          aria-label={"Explore " + domain.name}
        >
          <span className="p2-node-indicator" aria-hidden="true"><span /></span>
          <span className="p2-node-copy"><strong>{domain.name}</strong><small>{domain.caption}</small></span>
        </button>
      ))}
      <div className="p2-system-detail" aria-live="polite">
        <div className="p2-system-detail-title"><span className="p2-online-dot" />{domains[active].name}<span className="p2-detail-number">0{active + 1}/05</span></div>
        <p>{domains[active].description}</p>
      </div>
      <span className="p2-visual-corner p2-visual-corner-top" aria-hidden="true">INTERACTIVE / SYSTEM 001</span>
      <span className="p2-visual-corner p2-visual-corner-bottom" aria-hidden="true">SELECT A NODE TO EXPLORE ↗</span>
    </div>
  );
}

function ProjectArt({ index }: { index: number }) {
  return (
    <div className={"p2-art p2-art-" + index} aria-hidden="true">
      <div className="p2-art-halo" />
      <div className="p2-ui-window">
        <div className="p2-ui-topbar"><div className="p2-ui-dots"><i/><i/><i/></div><span>{["SEA / ECOSYSTEM", "STRATEGY / INTELLIGENCE", "O-CONNECT / REALTIME", "VIDNIK / CONTENT"][index]}</span><span>↗</span></div>
        {index === 0 && <div className="p2-ui-platform">
          <div className="p2-ui-sidebar"><b>SEA</b><i/><i/><i/><i/></div>
          <div className="p2-ui-dashboard"><span className="p2-ui-line p2-ui-line-lg"/><span className="p2-ui-line"/>
            <div className="p2-ui-mini-grid"><span/><span/><span/></div>
            <div className="p2-ui-chart"><i/><i/><i/><i/><i/><i/><i/></div>
          </div>
        </div>}
        {index === 1 && <div className="p2-ui-ai">
          <div className="p2-ui-ai-head"><span className="p2-ui-line p2-ui-line-lg"/><span className="p2-ai-spark">✦</span></div>
          <div className="p2-ui-ai-bars"><i/><i/><i/><i/><i/><i/></div>
          <div className="p2-ui-ai-bottom"><span/><span/><span/></div>
        </div>}
        {index === 2 && <div className="p2-ui-meeting">
          <div className="p2-ui-call-grid"><span>MM</span><span>AR</span><span>JS</span><span>SK</span></div>
          <div className="p2-ui-call-controls"><i/><i/><i/><i/></div>
        </div>}
        {index === 3 && <div className="p2-ui-content">
          <span className="p2-ui-line p2-ui-line-lg"/><div className="p2-ui-content-grid"><i/><i/><i/><i/><i/><i/></div>
        </div>}
      </div>
      <span className="p2-art-note">ILLUSTRATIVE SYSTEM VISUAL</span>
    </div>
  );
}

export default function PortfolioExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();
  const reveal = { initial: reducedMotion ? false : { opacity: 0, y: 34 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: reducedMotion ? 0 : 0.75, ease: "easeOut" as const } };

  return (
    <main className="p2-site" id="top">
      <div className="p2-noise" aria-hidden="true" />
      <header className="p2-header">
        <div className="p2-header-inner">
          <a className="p2-logo" href="#top" aria-label="Mohammed Masri — back to top">M<span>M</span><span className="p2-logo-period">.</span></a>
          <nav className={"p2-nav" + (menuOpen ? " is-open" : "")} aria-label="Main navigation" id="main-nav">
            {navigation.map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
            <a className="p2-mobile-contact" href={"mailto:" + profile.email} onClick={() => setMenuOpen(false)}>Let's talk <Arrow diagonal /></a>
          </nav>
          <a className="p2-header-cta" href={"mailto:" + profile.email}>Let's talk <Arrow diagonal /></a>
          <button className="p2-menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-controls="main-nav" aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
            <span/><span/>
          </button>
        </div>
      </header>

      <section className="p2-hero" aria-labelledby="hero-title">
        <div className="p2-hero-atmosphere" aria-hidden="true"/>
        <div className="p2-container p2-hero-inner">
          <motion.div className="p2-hero-copy" initial={reducedMotion ? false : {opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
            <div className="p2-hero-overline"><span className="p2-online-dot"/>MOHAMMED MASRI <span className="p2-overline-separator">/</span> SENIOR SOFTWARE ENGINEER</div>
            <h1 id="hero-title"><span>I architect</span><span className="p2-gradient-text">what others</span><span>build upon<span className="p2-title-point">.</span></span></h1>
            <p className="p2-hero-role">Senior Full Stack Developer <span>/</span> Technical Lead</p>
            <p className="p2-hero-summary">I turn complex business challenges into scalable enterprise platforms, intelligent applications, and software designed to last.</p>
            <div className="p2-hero-actions">
              <a href="#work" className="p2-button p2-button-primary">Explore my work <Arrow diagonal /></a>
              <a href="/cv" className="p2-button p2-button-ghost">View résumé <Arrow diagonal /></a>
            </div>
            <div className="p2-hero-footnote"><span className="p2-status-led"/> BUILDING ENTERPRISE SOFTWARE IN THE UAE <span className="p2-footnote-index">01 / 06</span></div>
          </motion.div>
          <motion.div className="p2-hero-visual" initial={reducedMotion ? false : {opacity:0,scale:0.93}} animate={{opacity:1,scale:1}} transition={{duration:1.1,delay:0.15}}>
            <SystemVisual />
          </motion.div>
        </div>
        <div className="p2-hero-bottom p2-container"><span>SCROLL TO DISCOVER <span aria-hidden="true">↓</span></span><span>ARCHITECTURE · ENGINEERING · IMPACT</span></div>
      </section>

      <div className="p2-trust-strip" aria-label="Engineering focus">
        <div className="p2-container p2-trust-inner"><span>6+ YEARS IN SOFTWARE</span><i/><span>ENTERPRISE ARCHITECTURE</span><i/><span>FULL-STACK PRODUCT ENGINEERING</span><i/><span>CLOUD & AI</span></div>
      </div>

      <section className="p2-section p2-work-section" id="work" aria-labelledby="work-heading">
        <div className="p2-container">
          <motion.div {...reveal} className="p2-section-intro">
            <div><span className="p2-eyebrow"><span className="p2-eyebrow-dot"/>01 / FEATURED WORK</span><h2 id="work-heading">Complex challenges.<br/><span className="p2-gradient-text">Considered solutions.</span></h2></div>
            <p>A selection of enterprise platforms and products I have built, architected, or helped deliver. The emphasis is on decisions, responsibilities, and real-world context.</p>
          </motion.div>
          <div className="p2-project-grid">
            {selectedWork.map((project, index) => (
              <motion.article {...reveal} key={project.title} className={"p2-project" + (index === 0 ? " p2-project-featured" : "")}>
                <ProjectArt index={index} />
                <div className="p2-project-content">
                  <div className="p2-project-top"><span>0{index + 1} / {project.label}</span><span className="p2-project-arrow" aria-hidden="true"><Arrow diagonal /></span></div>
                  <h3>{index === 0 ? "SEA Platform" : index === 1 ? "AI Strategy Management" : index === 2 ? "O-Connect" : "Vidnik App"}</h3>
                  <p>{project.description}</p>
                  <div className="p2-project-tags">{project.tags.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}</div>
                  <button className="p2-case-toggle" aria-expanded={expandedProject === index} aria-controls={"case-study-" + index} type="button" onClick={() => setExpandedProject(expandedProject === index ? null : index)}>
                    {expandedProject === index ? "Close case study" : "Explore case study"} <Arrow diagonal />
                  </button>
                  {expandedProject === index && <motion.div className="p2-case-content" id={"case-study-" + index} initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} transition={{duration:reducedMotion ? 0 : 0.3}}>
                    <span className="p2-case-scope">{caseDetails[index].scope}</span>
                    <dl><div><dt>The challenge</dt><dd>{caseDetails[index].challenge}</dd></div><div><dt>My contribution</dt><dd>{caseDetails[index].contribution}</dd></div><div><dt>The result</dt><dd>{caseDetails[index].outcome}</dd></div></dl>
                  </motion.div>}
                </div>
              </motion.article>
            ))}
          </div>
          <p className="p2-work-disclaimer">Project visuals are conceptual illustrations. Some proprietary work is described without internal screenshots or confidential information.</p>
        </div>
      </section>

      <section className="p2-section p2-expertise-section" id="expertise" aria-labelledby="expertise-heading">
        <div className="p2-container">
          <motion.div {...reveal}><SectionHeading kicker="02 / UNDER THE HOOD" title={<>Systems thinking.<br/><span className="p2-gradient-text">End-to-end ownership.</span></>} description="The work is multidisciplinary by nature. Architecture, product engineering, integrations, and delivery are parts of the same system." /></motion.div>
          <div className="p2-expertise-layout">
            <motion.div {...reveal} className="p2-architecture-card">
              <div className="p2-architecture-header"><span>ENGINEERING BLUEPRINT</span><span>FIG. 02 — CONNECTED SYSTEMS</span></div>
              <svg viewBox="0 0 640 400" className="p2-architecture-svg" role="img" aria-label="Conceptual diagram showing API gateway connecting frontend applications, services, databases, and external integrations">
                <defs><linearGradient id="p2-arch-line" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#5B6AF6"/><stop offset="1" stopColor="#ACB7FF"/></linearGradient></defs>
                <g stroke="url(#p2-arch-line)" strokeWidth="1.5" opacity=".55" fill="none"><path d="M320 185 116 88M320 185 320 64M320 185 524 88M320 185 116 317M320 185 320 341M320 185 524 317" strokeDasharray="5 6"/></g>
                {[
                  {x:35,y:45,t:"WEB / MOBILE",s:"APPLICATIONS"},
                  {x:239,y:22,t:"FRONTEND",s:"MICROFRONTENDS"},
                  {x:443,y:45,t:"IDENTITY",s:"ACCESS CONTROL"},
                  {x:35,y:271,t:"INTEGRATIONS",s:"CRM · HCM · SIS"},
                  {x:239,y:299,t:"SERVICES",s:"DOMAIN LOGIC"},
                  {x:443,y:271,t:"CLOUD",s:"AWS · CI/CD"}
                ].map((n,i)=><g key={i}><rect x={n.x} y={n.y} width="162" height="78" rx="13" fill="#151D36" stroke="#6878C2" strokeOpacity=".65"/><text x={n.x+81} y={n.y+31} fill="#E7E9FF" fontSize="11" fontWeight="600" textAnchor="middle">{n.t}</text><text x={n.x+81} y={n.y+50} fill="#8897C2" fontSize="9" textAnchor="middle">{n.s}</text></g>)}
                <circle cx="320" cy="185" r="61" fill="#121C39" stroke="#7A88F3" strokeWidth="2"/>
                <circle cx="320" cy="185" r="47" fill="#4C59C5" fillOpacity=".14" stroke="#8997F4" strokeOpacity=".5"/>
                <text x="320" y="180" fill="#F1F2FF" fontSize="16" fontWeight="700" textAnchor="middle">PLATFORM</text>
                <text x="320" y="200" fill="#AAB7FF" fontSize="9" textAnchor="middle">CORE</text>
              </svg>
              <div className="p2-architecture-footer"><span><span className="p2-online-dot"/> MODULAR BY DESIGN</span><span>ILLUSTRATIVE ARCHITECTURE</span></div>
            </motion.div>
            <div className="p2-expertise-list">
              {[
                {num:"01",title:"Enterprise architecture",body:"Microservices, microfrontends, modular boundaries, shared libraries, and clean design."},
                {num:"02",title:"System integrations",body:"Secure connections between CRM, SIS, HCM, identity providers, LMS, and operational services."},
                {num:"03",title:"Product engineering",body:"React, Next.js, NestJS, Node.js, API design, real-time interfaces, and enterprise UX."},
                {num:"04",title:"Cloud & delivery",body:"AWS, Docker, Nginx, CI/CD pipelines, and reliable application deployment."},
                {num:"05",title:"Technical leadership",body:"Turning stakeholder requirements into maintainable solutions and guiding delivery from design to release."}
              ].map(item=><motion.div {...reveal} className="p2-expertise-item" key={item.num}><span>{item.num}</span><div><h3>{item.title}</h3><p>{item.body}</p></div><Arrow diagonal /></motion.div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="p2-section p2-experience-section" id="experience" aria-labelledby="experience-heading">
        <div className="p2-container">
          <motion.div {...reveal} className="p2-section-intro"><div><span className="p2-eyebrow"><span className="p2-eyebrow-dot"/>03 / EXPERIENCE</span><h2 id="experience-heading">A career built on<br/><span className="p2-gradient-text">ownership & delivery.</span></h2></div><p>From full-stack product delivery to enterprise platform architecture and technical leadership across education, media, and communication.</p></motion.div>
          <div className="p2-timeline">
            {experiences.map((item,index)=><motion.article {...reveal} className="p2-timeline-item" key={item.company}><div className="p2-timeline-date"><span className="p2-timeline-dot"/><span>{item.period}</span></div><div className="p2-timeline-body"><div className="p2-timeline-heading"><div><span className="p2-timeline-index">0{index+1} / CAREER</span><h3>{item.company}</h3><p className="p2-timeline-role">{item.role}</p></div>{index===0&&<span className="p2-current-label">CURRENT ROLE</span>}</div><p className="p2-timeline-summary">{item.achievements[0]}</p><div className="p2-timeline-location">{item.location}</div></div></motion.article>)}
          </div>
        </div>
      </section>

      <section className="p2-section p2-about-section" id="about" aria-labelledby="about-heading">
        <div className="p2-container p2-about-grid">
          <motion.div {...reveal} className="p2-about-portrait"><div className="p2-portrait-glow"/><Image src="/assets/images/my-photo.png" alt="Portrait of Mohammed Masri" fill sizes="(max-width: 800px) 90vw, 520px" className="p2-portrait-image"/><div className="p2-portrait-signature">MM <span>/ ENGINEER & TECHNICAL LEAD</span></div></motion.div>
          <motion.div {...reveal} className="p2-about-copy">
            <span className="p2-eyebrow"><span className="p2-eyebrow-dot"/>04 / THE PERSON BEHIND THE SYSTEMS</span>
            <h2 id="about-heading">More than code.<br/><span className="p2-gradient-text">A commitment to impact.</span></h2>
            <p>I'm Mohammed, a software engineer based in Dubai with over six years of experience building products and enterprise applications. I enjoy transforming complex organizational needs into systems that teams can understand, maintain, and grow.</p>
            <p>I believe in pragmatic architecture, reusable foundations, thoughtful experiences, and owning the full journey from a conversation with stakeholders to a dependable production release.</p>
            <div className="p2-values"><span>Clean architecture</span><span>Engineering craft</span><span>Team leadership</span><span>Continuous learning</span></div>
            <a href="/cv" className="p2-text-link">Explore my résumé <Arrow diagonal /></a>
          </motion.div>
        </div>
      </section>

      <section className="p2-contact-section" id="contact" aria-labelledby="contact-heading">
        <div className="p2-container">
          <motion.div {...reveal} className="p2-contact-panel">
            <div className="p2-contact-orb" aria-hidden="true"/><span className="p2-eyebrow"><span className="p2-eyebrow-dot"/>05 / LET'S CONNECT</span>
            <h2 id="contact-heading">Have something<br/><span>ambitious in mind?</span></h2>
            <p>Let's turn a complex challenge into something clear, scalable, and meaningful.</p>
            <a className="p2-button p2-button-primary" href={"mailto:" + profile.email}>Start a conversation <Arrow diagonal /></a>
            <div className="p2-contact-links"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /></a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a><a href="/cv">Résumé <Arrow diagonal /></a></div>
          </motion.div>
        </div>
      </section>
      <footer className="p2-footer"><div className="p2-container p2-footer-inner"><a className="p2-logo" href="#top">M<span>M</span><span className="p2-logo-period">.</span></a><span>© {new Date().getFullYear()} Mohammed Masri</span><a href="#top">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}
