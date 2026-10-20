export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  organization: string;
  category: string;
  lead: string;
  context: string;
  role: string;
  contribution: readonly string[];
  decisions: readonly { heading: string; detail: string }[];
  delivered: string;
  technologies: readonly string[];
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "sea-platform",
    index: "01",
    title: "SEA Platform",
    subtitle: "Engineering a connected digital ecosystem",
    organization: "Sharjah Education Academy",
    category: "Enterprise architecture",
    lead: "A modular ecosystem connecting student, employee, identity, HR, attendance and institutional workflows.",
    context: "Different institutional systems need to exchange information reliably without forcing every application into one tightly coupled deployment.",
    role: "Senior Full Stack Developer — platform architecture, integrations and delivery.",
    contribution: [
      "Developed decoupled microservices and microfrontends supporting modular applications and independent deployments.",
      "Built shared libraries for data contracts, reusable interface elements and common utilities.",
      "Engineered student-lifecycle synchronization between HubSpot CRM and Creatrix SIS.",
      "Connected Azure Active Directory and Oracle Fusion HCM for employee identity and HR workflows.",
      "Supported AWS infrastructure and CI/CD processes for production delivery."
    ],
    decisions: [
      { heading: "Modular boundaries", detail: "Separate application and service responsibilities so different institutional domains can evolve independently." },
      { heading: "Shared foundations", detail: "Standardize common contracts and building blocks to reduce duplication across the platform." },
      { heading: "Integration reliability", detail: "Treat CRM, SIS, identity and HR connections as important system boundaries rather than incidental API calls." }
    ],
    delivered: "A modular platform foundation and integrations supporting multiple institutional workflows. No unverified performance or adoption metrics are claimed.",
    technologies: ["Microservices", "Microfrontends", "System integrations", "AWS", "CI/CD"]
  },
  {
    slug: "strategy-hub",
    index: "02",
    title: "Strategy Hub",
    subtitle: "Making organizational strategy more actionable",
    organization: "Sharjah Education Academy",
    category: "AI-enabled enterprise application",
    lead: "A structured planning platform that connects strategic objectives, KPIs and tasks with AI-assisted workflows.",
    context: "Organizational strategy spans goals, measures, actions and team responsibilities. Connecting those elements in software helps turn plans into practical workflows.",
    role: "Software engineering and AI-enabled application design within Sharjah Education Academy.",
    contribution: [
      "Designed an AI-enabled application for goals, objectives, KPIs and tasks.",
      "Built workflows that bring strategic planning and operational tracking together.",
      "Developed functionality for intelligent recommendations and action generation.",
      "Integrated AI-assisted form completion into relevant user workflows."
    ],
    decisions: [
      { heading: "Structured planning", detail: "Represent objectives, KPIs and tasks as connected parts of the planning process." },
      { heading: "Assistance in context", detail: "Bring AI suggestions into existing forms and workflows instead of treating AI as a separate destination." },
      { heading: "Human oversight", detail: "Present assistance as recommendations that users can evaluate and act on." }
    ],
    delivered: "A planning experience combining structured organizational workflows with AI-assisted features. No numerical impact is asserted.",
    technologies: ["Enterprise UX", "Generative AI", "Workflow automation", "Application design"]
  },
  {
    slug: "o-connect",
    index: "03",
    title: "O-Connect",
    subtitle: "Engineering real-time communication",
    organization: "Onpassive",
    category: "Full-stack and real-time systems",
    lead: "Contributions to an enterprise conferencing product with voice, video and efficient client data access.",
    context: "Real-time conferencing requires responsive front-end behavior, dependable communication flows and APIs that avoid unnecessary data transfer.",
    role: "Full Stack Developer — React and Node.js feature engineering.",
    contribution: [
      "Engineered backend and frontend functionality for an enterprise web conferencing product.",
      "Implemented WebRTC and Socket.io communication workflows.",
      "Designed and integrated GraphQL APIs for more efficient client data access."
    ],
    decisions: [
      { heading: "Real-time communication", detail: "Use WebRTC and Socket.io in their appropriate communication and signaling roles." },
      { heading: "Efficient data access", detail: "Structure GraphQL queries around the data the client needs." },
      { heading: "Full-stack coordination", detail: "Align interface requirements with backend communication and data flows." }
    ],
    delivered: "Production-oriented conferencing features and real-time workflows. No unverified latency or scale figures are claimed.",
    technologies: ["React", "Node.js", "WebRTC", "Socket.io", "GraphQL"]
  }
];

export const engineeringDomains = [
  { title: "Architecture & system design", description: "Microservices, microfrontends, reusable libraries, clean boundaries and maintainable integrations." },
  { title: "Full-stack engineering", description: "React, Next.js, TypeScript, Node.js, NestJS and practical API design." },
  { title: "Enterprise integrations", description: "Identity, CRM, HR and student-information workflows across institutional systems." },
  { title: "Cloud & delivery", description: "AWS, Docker, Nginx, CI/CD and release processes for production systems." },
  { title: "Technical leadership", description: "Stakeholder collaboration, implementation guidance and accountability for delivery." }
] as const;

export const engineeringProcess = [
  { number: "01", short: "Understand", title: "Clarity before code.", description: "Explore the real requirements, people, constraints and business objectives before committing to an implementation." },
  { number: "02", short: "Architect", title: "Design for change.", description: "Establish clear boundaries and reliable integrations so the system remains understandable as requirements evolve." },
  { number: "03", short: "Engineer", title: "Build with care.", description: "Develop clear, testable software with practical standards, thoughtful reviews and attention to production quality." },
  { number: "04", short: "Deliver", title: "Own the outcome.", description: "Support releases, incorporate feedback and improve the system beyond the first successful deployment." }
] as const;
