export interface SkillCategory {
  label: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Backend",
    icon: "⚙️",
    skills: [
      "Java",
      "Spring Boot",
      "Hibernate / JPA",
      "REST APIs",
      "JWT",
      "Microservices",
      "Node.js / Express.js",
      "PHP",
      "Laravel",
      "CodeIgniter",
    ],
  },
  {
    label: "Frontend",
    icon: "🖥️",
    skills: [
      "Next.js",
      "React",
      "Angular",
      "TypeScript",
      "JavaScript",
      "RxJS",
      "Tailwind CSS",
      "HTML / CSS",
    ],
  },
  {
    label: "Database",
    icon: "🗄️",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Query Optimisation",
      "Schema Design",
      "Multi-Tenancy",
    ],
  },
  {
    label: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      "Docker",
      "Docker Compose",
      "AWS (EC2, S3)",
      "GitHub Actions",
      "Azure DevOps",
      "CI/CD",
      "Linux",
    ],
  },
  {
    label: "Architecture",
    icon: "🏗️",
    skills: [
      "Microservices",
      "Multi-Tenancy",
      "System Design",
      "Authentication & Authorization",
      "Keycloak",
      "API Gateway",
      "SaaS Design",
    ],
  },
  {
    label: "Tools",
    icon: "🛠️",
    skills: [
      "Git",
      "Postman",
      "Swagger",
      "Jira",
      "Claude AI / Claude Code",
      "Firebase Studio",
    ],
  },
];
