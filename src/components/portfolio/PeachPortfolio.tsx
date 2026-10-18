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

function HeroIllustration() {
  return (
    <svg className="peach-hero-art" viewBox="0 0 670 575" role="img" aria-label="Flat illustration of a software engineer working at a laptop with connected code, cloud, analytics, and application windows">
      <defs>
        <linearGradient id="peach-scene" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FFE2CC"/><stop offset="1" stopColor="#FFA976"/></linearGradient>
        <linearGradient id="peach-card" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FFFFFF"/><stop offset="1" stopColor="#FFF4E9"/></linearGradient>
        <filter id="peach-shadow" x="-30%" y="-30%" width="160%" height="175%"><feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#C77655" floodOpacity=".15"/></filter>
      </defs>
      <path d="M130 81C201 34 260 64 327 45s176 21 207 98c27 69 76 102 47 189-19 59-51 119-116 145-66 26-130-1-190 27-84 39-202-20-236-111C1 285 58 126 130 81Z" fill="url(#peach-scene)"/>
      <circle cx="530" cy="74" r="19" fill="#FFCDA8"/><circle cx="60" cy="337" r="13" fill="#FF9773"/><circle cx="546" cy="447" r="25" fill="#FFE2CC"/>
      <g opacity=".6" fill="#FF996A">{[0,1,2,3,4,5].map(i=>[0,1,2].map(j=><circle key={i+"-"+j} cx={65+i*16} cy={134+j*16} r="2.5"/>))}</g>
      <path d="M84 222C103 155 181 148 218 176M495 167c37 10 55 35 65 72" stroke="#F7895D" strokeWidth="2" fill="none" strokeDasharray="5 10" strokeLinecap="round"/>
      <g filter="url(#peach-shadow)">
        <rect x="92" y="103" width="159" height="102" rx="17" fill="url(#peach-card)"/>
        <circle cx="109" cy="119" r="3" fill="#FF9C82"/><circle cx="121" cy="119" r="3" fill="#FFD0A9"/><circle cx="133" cy="119" r="3" fill="#FFD0A9"/>
        <path d="m124 164 24-20-24 20 24 20M197 144l24 20-24 20M179 139l-17 51" stroke="#F26F4D" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </g>
      <g filter="url(#peach-shadow)">
        <rect x="423" y="65" width="160" height="113" rx="17" fill="url(#peach-card)"/>
        <circle cx="447" cy="91" r="5" fill="#FFB39A"/><rect x="460" y="87" width="79" height="9" rx="4" fill="#FBE1CF"/>
        <path d="M447 142h110" stroke="#F2D8C5" strokeWidth="2"/>
        <path d="m448 135 25-19 18 12 22-27 19 13 24-28" stroke="#FA8160" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </g>
      <g filter="url(#peach-shadow)">
        <rect x="487" y="203" width="98" height="93" rx="20" fill="#FFFAF5"/>
        <path d="M510 248c0-11 8-18 18-18 3-13 15-18 25-10 6 4 8 10 8 17 15 2 21 26 3 30h-45c-12 0-17-10-9-19Z" fill="#FB966F"/>
      </g>
      <g filter="url(#peach-shadow)">
        <rect x="67" y="262" width="150" height="112" rx="17" fill="#FFFCF8"/>
        <rect x="87" y="283" width="77" height="10" rx="5" fill="#FFD4C0"/><rect x="87" y="302" width="107" height="7" rx="3" fill="#F4E1D5"/>
        <path d="M90 349v-25M107 349v-13M124 349v-34M141 349v-20M158 349v-31M175 349v-44M192 349v-29" stroke="#FD956B" strokeWidth="8" strokeLinecap="round"/>
      </g>
      <ellipse cx="352" cy="483" rx="245" ry="34" fill="#E88C64" opacity=".18"/>
      <path d="M181 468q6-116 83-141l154-2q81 28 103 143Z" fill="#EF7859"/>
      <path d="M223 461 204 362q-7-42 48-63l42-10 63 19 58-11q58 24 63 66l-20 101Z" fill="#FF925F"/>
      <path d="M294 286q4 27 31 32t39-29l-14-42h-47Z" fill="#ECA079"/>
      <path d="M267 212c-17-47 13-92 64-92 62 0 79 45 67 93-7 34-29 71-65 77-40-4-58-34-66-78Z" fill="#F4AE83"/>
      <path d="M268 216c-30-39-8-86 28-98 18-38 91-28 106 16 27 15 24 59-2 77-5-21-15-41-37-40-29 0-44-16-53-32-2 23-15 37-42 39Z" fill="#30273F"/>
      <path d="M302 231q12-11 24 0M358 231q12-11 24 0" stroke="#4F3540" strokeWidth="4" strokeLinecap="round" fill="none"/>
      <path d="M334 245q5 10 11 0" stroke="#DB8869" strokeWidth="3" strokeLinecap="round"/>
      <path d="M323 257q22 12 39-1" stroke="#703944" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <rect x="275" y="225" width="54" height="30" rx="14" fill="none" stroke="#352E40" strokeWidth="5"/>
      <rect x="351" y="225" width="54" height="30" rx="14" fill="none" stroke="#352E40" strokeWidth="5"/>
      <path d="M329 236q11-6 22 0" stroke="#352E40" strokeWidth="5"/><path d="M274 238h-12m144 0h12" stroke="#352E40" strokeWidth="4"/>
      <path d="M255 363q-36 23-11 60l37 35h76l-18-35-48-36M434 359q31 31 9 61l-39 36h-63l23-41 38-31" fill="#F4AE83"/>
      <path d="M160 405h334l-25 69H192Z" fill="#382F4A"/>
      <rect x="221" y="342" width="240" height="138" rx="13" fill="#46405A" stroke="#625A75" strokeWidth="2"/>
      <path d="M221 342h240l-15 132H234Z" fill="#4D4763"/>
      <circle cx="339" cy="404" r="19" fill="#FFDDCC"/><path d="m330 400-8 5 8 6m18-11 8 5-8 6" stroke="#F27A5C" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M162 478h337v16H162Z" fill="#B85F4F"/>
      <g><rect x="502" y="409" width="49" height="75" rx="8" fill="#F9A67D"/><path d="M526 417v-44m0 25q-27-32-26-46 30 5 26 46Zm1-20q20-27 42-19-14 26-42 19Zm-1 41q-32-16-34-38 38 3 34 38Z" fill="#5BAE8E"/></g>
      <path d="M144 480h443" stroke="#F9A87E" strokeWidth="9" strokeLinecap="round"/>
      <path d="M133 489h462" stroke="#FEC9AA" strokeWidth="6" strokeLinecap="round"/>
      <g transform="translate(92 426)"><rect width="39" height="58" rx="7" fill="#7C7487"/><path d="M39 10h6q13 0 13 14T39 38" fill="none" stroke="#7C7487" strokeWidth="7"/></g>
      <g filter="url(#peach-shadow)"><rect x="434" y="297" width="76" height="58" rx="14" fill="#FFF9F5"/><path d="M457 323h30m-30 9h19" stroke="#F4AA89" strokeWidth="6" strokeLinecap="round"/></g>
    </svg>
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

function SectionTitle({ label, title, note }: { label: string; title: string; note?: string }) {
  return <div className="peach-section-title"><div><span className="peach-eyebrow">{label}</span><h2>{title}</h2></div>{note&&<p>{note}</p>}</div>;
}

export default function PeachPortfolio() {
  const [menuOpen,setMenuOpen] = useState(false);
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
        <a href="#top" className="peach-logo" aria-label="Mohammed Masri, back to top">Mohammed <span>Masri<span className="peach-logo-dot">.</span></span><small>Senior Full Stack Developer & Technical Lead</small></a>
        <nav id="peach-nav" className={"peach-nav"+(menuOpen?" is-open":"")} aria-label="Main navigation">
          {[["Home","#top"],["Work","#work"],["Expertise","#expertise"],["Experience","#experience"],["About","#about"],["Contact","#contact"]].map(([label,href])=><a key={href} href={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}
        </nav>
        <a className="peach-pill peach-pill-header" href={"mailto:"+profile.email}>Let's talk <Arrow size={16}/></a>
        <button aria-label={menuOpen?"Close navigation":"Open navigation"} aria-expanded={menuOpen} aria-controls="peach-nav" className="peach-menu" type="button" onClick={()=>setMenuOpen(!menuOpen)}><span/><span/><span/></button>
      </div>
    </header>

    <section className="peach-hero peach-container" aria-labelledby="peach-hero-title">
      <div className="peach-hero-copy">
        <motion.div initial={reduced?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="peach-location"><span className="peach-location-spark">✳</span> FULL STACK ENGINEERING · DUBAI, UAE</motion.div>
        <motion.h1 id="peach-hero-title" initial={reduced?false:{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.75,delay:.08}}>Building digital<br/>products with<br/><span>clarity.</span></motion.h1>
        <motion.p initial={reduced?false:{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.75,delay:.16}} className="peach-hero-description">I'm Mohammed, a Senior Full Stack Developer and Technical Lead. I architect enterprise platforms, connect complex systems, and build meaningful digital products.</motion.p>
        <motion.div initial={reduced?false:{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:.75,delay:.25}} className="peach-actions">
          <a href="#work" className="peach-pill peach-pill-primary">Explore my work <Arrow/></a>
          <a href="/cv" className="peach-pill peach-pill-outline">View résumé <ExternalArrow/></a>
        </motion.div>
        <div className="peach-hero-note"><span className="peach-note-dot"/> ARCHITECTURE · PRODUCT ENGINEERING · LEADERSHIP</div>
      </div>
      <motion.div className="peach-hero-graphic" initial={reduced?false:{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.12}}>
        <HeroIllustration/>
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

    <section className="peach-about peach-container" id="about">
      <motion.div {...entrance} className="peach-about-photo"><div className="peach-photo-circle"/><Image src="/assets/images/my-photo.png" alt="Mohammed Masri" fill sizes="(max-width: 800px) 100vw, 480px" className="peach-portrait-img"/><span className="peach-photo-label">MOHAMMED MASRI / DUBAI</span></motion.div>
      <motion.div {...entrance} className="peach-about-copy"><span className="peach-eyebrow">BEYOND THE CODE</span><h2>Curiosity meets<br/><span>craft.</span></h2><p>My work lives at the intersection of software architecture, problem-solving, and collaboration. I enjoy translating complex requirements into thoughtful solutions and helping teams deliver systems that are practical to maintain.</p><p>Clean architecture, SOLID principles, and a focus on real business needs guide how I build.</p><a href={profile.linkedin} rel="noopener noreferrer" target="_blank" className="peach-inline-link">Find me on LinkedIn <ExternalArrow/></a></motion.div>
    </section>

    <section className="peach-contact" id="contact"><div className="peach-container peach-contact-inner"><div><span className="peach-eyebrow">LET'S MAKE SOMETHING MEANINGFUL</span><h2>Have a complex idea?<br/><span>Let's make it clear.</span></h2></div><a href={"mailto:"+profile.email} className="peach-pill peach-pill-dark">Start a conversation <Arrow/></a><div className="peach-contact-decoration" aria-hidden="true">✳</div></div></section>
    <footer className="peach-footer peach-container"><a href="#top" className="peach-footer-brand">Mohammed <span>Masri.</span></a><span>© {new Date().getFullYear()} Mohammed Masri</span><div><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="/cv">Résumé</a></div></footer>
  </main>;
}
