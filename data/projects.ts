export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  highlights: string[];
  github?: string;
  live?: string;
  image?: string;
  featured: boolean;
  category: "backend" | "fullstack" | "devops" | "mobile";
}

export const projects: Project[] = [
  {
    id: "srp",
    title: "School Resource Planning System",
    description:
      "Multi-tenant, microservices-based enterprise SaaS platform for school management — designed and led from the ground up.",
    longDescription:
      "Led the full design and development of a School Resource Planning SaaS, rebuilding a legacy system into a scalable multi-tenant platform. Supports 7 branches with schema-level tenant isolation, async surcharge processing via SQS, and Keycloak-based authentication across all services.",
    tech: [
      "Java 17",
      "Spring Boot 3.1",
      "Microservices",
      "PostgreSQL",
      "Next.js",
      "Keycloak",
      "Docker",
      "AWS SQS",
      "Multi-Tenancy",
    ],
    highlights: [
      "Architected schema-level multi-tenancy supporting 7 school branches",
      "Integrated Keycloak for unified auth and RBAC across all microservices",
      "Async surcharge generation via AWS SQS message queues",
      "Modern Next.js frontend with reusable, modular components",
      "Led the team as key technical lead from initial setup through production",
    ],
    github: "https://github.com/isuru9732",
    featured: true,
    category: "fullstack",
  },
  {
    id: "tutor-platform",
    title: "Tutor Management Platform",
    description:
      "End-to-end platform automating tuition class management for individual tutors, institutes, and parents.",
    longDescription:
      "A full-featured education SaaS platform that automated the complete tuition class management lifecycle. Tutors could join individually or as institutes, manage their classes and schedules, while parents could track student progress and activities in real time.",
    tech: ["Spring Boot", "Next.js", "PostgreSQL", "Docker", "REST APIs"],
    highlights: [
      "Dual onboarding — individual tutors and institutes with separate workflows",
      "Parent portal for real-time student progress and activity tracking",
      "Automated class scheduling, attendance, and fee management",
      "Role-based access control across tutors, admins, students, and parents",
      "Deep domain understanding of educational workflows and user needs",
    ],
    github: "https://github.com/isuru9732",
    featured: true,
    category: "fullstack",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description:
      "Modular Angular e-commerce frontend with lazy-loaded modules, reactive state, and RESTful API integration.",
    longDescription:
      "Built a modular e-commerce web application using Angular. Focused on performance through lazy loading, reactive data management with RxJS, and a clean modular architecture designed for scalability and maintainability.",
    tech: ["Angular", "RxJS", "TypeScript", "REST APIs", "Lazy Loading"],
    highlights: [
      "Angular lazy loading for fast initial load times",
      "RxJS reactive data flows for async operations",
      "Modular architecture for independent feature development",
      "RESTful API integration across product, cart, and order modules",
    ],
    github: "https://github.com/isuru9732",
    featured: true,
    category: "fullstack",
  },
  {
    id: "spring-microservices",
    title: "Spring Boot Microservices Architecture",
    description:
      "Enterprise-grade microservices reference project with API Gateway, service discovery, JWT auth, and async notifications.",
    longDescription:
      "A production-pattern microservices architecture using Spring Boot and Spring Cloud. Features Eureka service discovery, Spring Cloud Gateway with JWT filter chain, a dedicated auth service, and an async notification service.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "PostgreSQL",
      "Docker Compose",
      "JWT",
    ],
    highlights: [
      "Eureka service discovery for dynamic service registration",
      "Spring Cloud API Gateway with JWT validation filter",
      "Dedicated authentication service with token refresh",
      "Async notification service decoupled via message queues",
      "Docker Compose orchestration for local and staging environments",
    ],
    github: "https://github.com/isuru9732",
    featured: true,
    category: "backend",
  },
  {
    id: "devops",
    title: "Docker & CI/CD Deployment Pipeline",
    description:
      "End-to-end deployment infrastructure with Docker, AWS EC2, NGINX reverse proxy, SSL, and Azure DevOps CI/CD.",
    longDescription:
      "Hands-on DevOps implementation covering containerisation, cloud provisioning, and automated pipelines. Used across multiple production projects at Techcess Business Solutions.",
    tech: ["Docker", "Docker Compose", "AWS EC2", "NGINX", "Azure DevOps", "GitHub Actions", "Linux"],
    highlights: [
      "Zero-downtime deployments via Azure DevOps pipelines",
      "NGINX reverse proxy with SSL termination",
      "Docker Compose multi-service orchestration",
      "AWS EC2 provisioning and image management",
      "GitHub Actions workflows for open-source projects",
    ],
    github: "https://github.com/isuru9732",
    featured: true,
    category: "devops",
  },
];
