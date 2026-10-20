export type CapabilityIcon =
  | "layers"
  | "integration"
  | "code"
  | "cloud"
  | "realtime"
  | "leadership";

export const profile = {
  name: "Mohammed Masri",
  role: "Software Engineer",
  location: "Dubai, United Arab Emirates",
  email: "mouhammed.almasri.cm7@gmail.com",
  phone: "+971 55 873 0223",
  phoneHref: "+971558730223",
  linkedin: "https://www.linkedin.com/in/mohammed-masri-421a831aa",
  github: "https://github.com/Mohammad-Masri",
  summary: [
    "I architect and deliver secure, scalable enterprise platforms that connect complex business workflows with reliable, high-performance user experiences.",
    "With more than six years of professional experience, I work across enterprise architecture, secure system integrations, full-stack applications, real-time communication and production delivery.",
    "My engineering approach is grounded in clean architecture, SOLID principles, reusable systems, pragmatic delivery, and close collaboration with product and business stakeholders.",
  ],
} as const;

export const metrics = [
  { value: "6+", label: "Years building production software" },
  { value: "4", label: "Professional engineering roles" },
  { value: "UAE", label: "Enterprise experience in Dubai & Sharjah" },
] as const;

export const capabilities: ReadonlyArray<{
  icon: CapabilityIcon;
  title: string;
  description: string;
}> = [
  {
    icon: "layers",
    title: "Enterprise Architecture",
    description:
      "Microservices, microfrontends, shared core libraries, domain isolation, clean architecture, and independently deployable applications.",
  },
  {
    icon: "integration",
    title: "System Integrations",
    description:
      "Secure S2S data flows across CRM, SIS, identity, HR, biometric, LMS, and corporate platforms with resilient synchronization strategies.",
  },
  {
    icon: "code",
    title: "Full-Stack Product Engineering",
    description:
      "Production-grade web and mobile experiences using React, Next.js, React Native, Node.js, NestJS, GraphQL, and modern data platforms.",
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    description:
      "AWS infrastructure, Docker, Nginx, CI/CD pipelines, secure environment management, observability, and dependable release workflows.",
  },
  {
    icon: "realtime",
    title: "Real-Time Systems",
    description:
      "Low-latency communication products and event-driven services built with WebRTC, Socket.io, WebSockets, RabbitMQ, and Apache Kafka.",
  },
  {
    icon: "leadership",
    title: "Technical Leadership",
    description:
      "Architecture ownership, team guidance, stakeholder discovery, cross-functional planning, reusable standards, and delivery accountability.",
  },
];

export const experiences = [
  {
    company: "Sharjah Education Academy",
    role: "Senior Full Stack Developer",
    period: "Nov 2024 — Present",
    location: "Sharjah, UAE",
    featured: true,
    achievements: [
      "Engineered an enterprise multi-application platform using decoupled microservices and microfrontends for modular scalability and independent deployment.",
      "Architected secure integrations between HubSpot CRM and Creatrix SIS for student lifecycle synchronization.",
      "Orchestrated employee identity provisioning, access control, and HR data flows between Azure Active Directory and Oracle Fusion HCM.",
      "Designed an AI-enabled Strategy Hub for organizational goals, KPIs, objectives, tasks, recommendations, automated form completion, and key action generation.",
      "Delivered and supported core education applications covering Canvas LMS student attendance, biometric employee attendance, graduation operations, and nursery management.",
      "Established platform-wide shared libraries for standardized DTOs, reusable UI primitives, and centralized utilities.",
      "Managed AWS deployments and high-scale CI/CD pipelines while partnering with stakeholders to convert institutional requirements into production-ready solutions.",
    ],
  },
  {
    company: "Onpassive",
    role: "Full Stack Developer",
    period: "Jan 2024 — Jun 2024",
    location: "Dubai, UAE",
    achievements: [
      "Engineered backend and frontend capabilities for O-Connect, an enterprise web conferencing platform built with Node.js and React.",
      "Implemented WebRTC and Socket.io workflows for low-latency real-time voice and video communication.",
      "Designed and integrated optimized GraphQL APIs to reduce client payloads and improve rendering performance.",
    ],
  },
  {
    company: "Step By Tech",
    role: "Full Stack Developer",
    period: "Aug 2022 — Jan 2024",
    location: "Dubai, UAE",
    achievements: [
      "Developed backend infrastructure for content management and delivery systems using Node.js and NestJS.",
      "Built responsive, high-fidelity React management interfaces for content operations.",
      "Managed Nginx, Docker, AWS infrastructure, and secure deployment environments.",
      "Delivered the Step By Tech and Mark Media websites with React and Next.js and owned Jest-based automated quality coverage.",
    ],
  },
  {
    company: "Darsoft",
    role: "Full Stack Developer & Team Lead",
    period: "Jan 2020 — Jul 2022",
    location: "Damascus, Syria",
    achievements: [
      "Led the cross-functional delivery of the Tolerance Real Estate website, coordinating sprints and delivery timelines.",
      "Owned end-to-end development of Sky Education, I Tabib, and Gloss And Glow using Node.js, NestJS, and Next.js.",
      "Managed AWS EC2, S3, and Nginx infrastructure to improve scalability and reliability.",
    ],
  },
] as const;

export const selectedWork = [
  {
    label: "Enterprise architecture",
    title: "SEA Platform",
    description: "A modular digital ecosystem at Sharjah Education Academy, connecting institutional applications through microservices, microfrontends and system integrations.",
    tags: ["Microservices", "Microfrontends", "Integrations", "AWS"],
    impact: "Shared platform architecture and connected institutional workflows",
  },
  {
    label: "AI-enabled product",
    title: "Strategy Hub",
    description: "An organizational planning application connecting objectives, KPIs and tasks with AI-assisted recommendations and workflow automation.",
    tags: ["Generative AI", "Enterprise applications", "Automation"],
    impact: "Structured strategy planning and AI-enabled assistance",
  },
  {
    label: "Real-time communication",
    title: "O-Connect",
    description: "Engineering contributions to an enterprise conferencing product with voice, video and efficient GraphQL client data access.",
    tags: ["WebRTC", "Socket.io", "GraphQL", "React", "Node.js"],
    impact: "Full-stack real-time collaboration workflows",
  },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Java", "Python"],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion",
      "Material UI",
      "JavaFX",
    ],
  },
  {
    title: "Backend & Architecture",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Spring Boot",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Microfrontends",
      "Clean Architecture",
    ],
  },
  {
    title: "Data & Messaging",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Mongoose",
      "Sequelize",
      "WebRTC",
      "Socket.io",
      "WebSockets",
      "RabbitMQ",
      "Apache Kafka",
    ],
  },
  {
    title: "Cloud & Delivery",
    skills: ["AWS", "Docker", "Nginx", "CI/CD", "Git", "GitHub", "GitLab"],
  },
  {
    title: "Engineering Practice",
    skills: [
      "SOLID Principles",
      "OOP",
      "System Design",
      "S2S Integrations",
      "Agile Delivery",
      "Technical Leadership",
    ],
  },
] as const;

export const education = {
  degree: "Bachelor of Software Engineering",
  institution: "Damascus University",
  year: "2022",
  location: "Damascus, Syria",
} as const;

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
] as const;
