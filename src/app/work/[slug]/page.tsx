import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/portfolio-v5";
import { profile } from "@/data/portfolio";
import "../../portfolio-v5.css";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudies.map(study => ({ slug: study.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const study = caseStudies.find(item => item.slug === params.slug);
  if (!study) return { title: "Project not found" };
  return {
    title: `${study.title} | Engineering Case Study`,
    description: study.lead,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: { title: `${study.title} | Mohammed Masri`, description: study.lead }
  };
}

export default function CaseStudyPage({ params }: Props) {
  const study = caseStudies.find(item => item.slug === params.slug);
  if (!study) notFound();

  return (
    <main className="v5-site v5-case" id="top">
      <a className="v5-skip" href="#case-content">Skip to case study</a>
      <header className="v5-header">
        <div className="v5-shell v5-header-inner">
          <Link href="/" className="v5-logo" aria-label="Mohammed Masri — homepage">MM<span>.</span></Link>
          <nav aria-label="Case study navigation" className="v5-case-nav">
            <Link href="/#work">← All work</Link>
            <Link href="/cv">View Resume ↗</Link>
          </nav>
        </div>
      </header>
      <article className="v5-shell v5-case-content" id="case-content">
        <div className="v5-case-hero">
          <p className="v5-eyebrow">ENGINEERING CASE STUDY / {study.index}</p>
          <span className="v5-case-category">{study.category} / {study.organization}</span>
          <h1>{study.title}<em>{study.subtitle}.</em></h1>
          <p className="v5-case-lead">{study.lead}</p>
          <ul className="v5-case-tags" aria-label="Technologies and practice areas">
            {study.technologies.map(tech => <li key={tech}>{tech}</li>)}
          </ul>
        </div>
        <div className="v5-case-body">
          <aside className="v5-case-aside">
            <div><span className="v5-overline">ORGANIZATION</span><strong>{study.organization}</strong></div>
            <div><span className="v5-overline">MY ROLE</span><strong>{study.role}</strong></div>
            <Link href="/#work" className="v5-text-link">← Back to selected work</Link>
          </aside>
          <div className="v5-case-article">
            <section aria-labelledby="case-context">
              <p className="v5-eyebrow">01 / CONTEXT</p>
              <h2 id="case-context">The engineering challenge</h2>
              <p>{study.context}</p>
            </section>
            <section aria-labelledby="case-contribution">
              <p className="v5-eyebrow">02 / CONTRIBUTIONS</p>
              <h2 id="case-contribution">What I worked on</h2>
              <ul className="v5-case-contributions">
                {study.contribution.map(item => <li key={item}>{item}</li>)}
              </ul>
            </section>
            <section aria-labelledby="case-decisions">
              <p className="v5-eyebrow">03 / ENGINEERING THINKING</p>
              <h2 id="case-decisions">Design considerations</h2>
              <div className="v5-case-decisions">
                {study.decisions.map((decision, index) => (
                  <div key={decision.heading}>
                    <span>0{index+1}</span>
                    <div><h3>{decision.heading}</h3><p>{decision.detail}</p></div>
                  </div>
                ))}
              </div>
            </section>
            <section aria-labelledby="case-outcome">
              <p className="v5-eyebrow">04 / DELIVERY</p>
              <h2 id="case-outcome">What was delivered</h2>
              <p>{study.delivered}</p>
            </section>
          </div>
        </div>
        <nav className="v5-case-next" aria-label="Other projects">
          <p className="v5-eyebrow">MORE ENGINEERING WORK</p>
          <div>
            {caseStudies.filter(other => other.slug !== study.slug).map(other => (
              <Link href={`/work/${other.slug}`} key={other.slug}>
                <span>{other.category}</span>
                <strong>{other.title} ↗</strong>
              </Link>
            ))}
          </div>
        </nav>
      </article>
      <footer className="v5-footer v5-shell">
        <div><Link href="/" className="v5-logo">MM<span>.</span></Link><span>{profile.name} / Software Engineer</span></div>
        <div className="v5-footer-links"><a href={`mailto:${profile.email}`}>Email</a><Link href="/cv">Resume</Link><Link href="/#top">Back to homepage ↑</Link></div>
      </footer>
    </main>
  );
}
