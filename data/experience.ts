export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "full-time" | "intern";
  description: string;
  tech: string[];
}

export const experience: Experience[] = [
  {
    id: "senior-eng",
    role: "Senior Software Engineer",
    company: "Techcess Business Solutions",
    location: "Nugegoda, Sri Lanka",
    period: "Aug 2023 – Present",
    type: "full-time",
    description:
      "Designing and building full-stack applications with Java (Spring Boot microservices) and Next.js. Technical lead for the School Resource Planning SaaS — architecting multi-tenant microservices, integrating Keycloak auth, and containerising deployments with Docker and Azure DevOps CI/CD. Mentoring junior developers, conducting code reviews, and driving engineering standards across the team.",
    tech: ["Java 17", "Spring Boot 3.1", "Next.js", "PostgreSQL", "Keycloak", "Docker", "Azure DevOps", "Microservices"],
  },
  {
    id: "software-eng",
    role: "Software Engineer",
    company: "Techcess Business Solutions",
    location: "Nugegoda, Sri Lanka",
    period: "Jan 2022 – Aug 2023",
    type: "full-time",
    description:
      "Developed and maintained web applications using CodeIgniter 3 (PHP). Owned the Fee Module in a live production system — handling enhancements, complex bug fixes, and technical decisions. Collaborated closely with the team to improve existing system behaviour and maintain consistent coding standards.",
    tech: ["PHP", "CodeIgniter 3", "MySQL", "JavaScript"],
  },
  {
    id: "infact",
    role: "Software Developer",
    company: "Infact Solutions PVT Ltd",
    location: "Pepiliyana, Sri Lanka",
    period: "Dec 2019 – Jan 2022",
    type: "full-time",
    description:
      "Developed and maintained web applications using Laravel and Angular. Implemented reactive frontend features with RxJS, designed and consumed RESTful APIs, and collaborated with cross-functional teams to deliver features on schedule. Applied strong code quality practices throughout.",
    tech: ["Laravel", "Angular", "RxJS", "PHP", "REST APIs", "JavaScript"],
  },
  {
    id: "intern",
    role: "Intern Software Developer",
    company: "OpenArc Systems Management (Pvt) Ltd",
    location: "Kirulapone, Sri Lanka",
    period: "May 2019 – Dec 2019",
    type: "intern",
    description:
      "Developed and maintained frontend features using Angular 7 and JavaScript. Assisted in translating functional requirements into working solutions, debugged frontend issues, and collaborated with senior developers to learn best practices, coding standards, and application architecture.",
    tech: ["Angular 7", "JavaScript", "HTML", "CSS"],
  },
];
