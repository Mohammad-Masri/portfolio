export type CapabilityIcon =
  | "layers"
  | "integration"
  | "code"
  | "cloud"
  | "realtime"
  | "leadership";

export const profile = {
  name: "Mohammed Masri",
  role: "Senior Full Stack Developer & Technical Lead",
  location: "Dubai, United Arab Emirates",
  email: "mouhammed.almasri.cm7@gmail.com",
  phone: "+971 55 873 0223",
  phoneHref: "+971558730223",
  linkedin: "https://www.linkedin.com/in/mohammed-masri-421a831aa",
  github: "https://github.com/Mohammad-Masri",
  summary: [
    "I architect and deliver secure, scalable enterprise platforms that connect complex business workflows with reliable, high-performance user experiences.",
    "Across more than six years of professional experience, I have led teams, designed microservice and microfrontend ecosystems, built real-time products, managed cloud infrastructure, and delivered critical system-to-system integrations across education, HR, CRM, and communication platforms.",
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
      "Developed backend infrastructure for the Vidnik App CMS and content server using Node.js and NestJS.",
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
    label: "Enterprise platform",
    title: "Education Digital Ecosystem",
    description:
      "A modular multi-application architecture connecting student, employee, identity, HR, attendance, strategy, and operational workflows across the academy.",
    tags: ["Microservices", "Microfrontends", "S2S Integrations", "AWS"],
    impact: "Independent delivery across multiple institutional domains",
  },
  {
    label: "AI-enabled product",
    title: "Organizational Strategy Hub",
    description:
      "A centralized platform for goals, KPIs, objectives, and tasks, enhanced with generative AI recommendations, intelligent form filling, and action generation.",
    tags: ["Generative AI", "Product Architecture", "Enterprise UX", "Automation"],
    impact: "Turned strategic planning into an intelligent operational workflow",
  },
  {
    label: "Real-time communication",
    title: "O-Connect Conferencing",
    description:
      "Full-stack engineering for an enterprise conferencing product with efficient GraphQL data access and low-latency voice and video communication.",
    tags: ["WebRTC", "Socket.io", "GraphQL", "React", "Node.js"],
    impact: "Responsive communication experiences at enterprise scale",
  },
  {
    label: "Content platform",
    title: "Vidnik Management Ecosystem",
    description:
      "Backend services, CMS workflows, content delivery infrastructure, and responsive management experiences for a modern media application.",
    tags: ["NestJS", "React", "Docker", "Nginx", "AWS"],
    impact: "Reliable content operations from authoring to delivery",
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
