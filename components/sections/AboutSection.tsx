const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "2", label: "Companies worked at" },
  { value: "4", label: "Roles progressed through" },
  { value: "BSc", label: "Hons Computing, UK" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">About Me</p>
            <h2 className="section-heading mb-6">
              Building things that{" "}
              <span className="gradient-text">actually work</span>
            </h2>
            <div className="space-y-4 text-secondary leading-relaxed">
              <p>
                I&apos;m a Senior Software Engineer with 5+ years of experience
                delivering scalable, production-grade applications. My primary
                expertise is in{" "}
                <span className="text-foreground font-medium">
                  Java, Spring Boot microservices, Next.js, PostgreSQL,
                </span>{" "}
                and scalable system architecture.
              </p>
              <p>
                Most of my career has been focused on{" "}
                <span className="text-foreground font-medium">
                  enterprise-level systems in the education domain
                </span>
                . I&apos;ve been a key engineer on a multi-tenant School Resource
                Planning platform supporting multiple branches with centralised
                operations, Keycloak authentication, automated surcharge
                processing, and microservices architecture. I&apos;ve also built a
                Tutor Management Platform that automated the entire tuition class
                lifecycle — for individual tutors, institutes, and parents
                tracking student progress.
              </p>
              <p>
                Beyond education, I&apos;ve delivered e-commerce and event management
                applications, giving me exposure to different business domains
                and architectures. In my current role I don&apos;t just write code — I
                mentor junior developers, conduct code reviews, own complex
                production modules, and collaborate closely with architects and
                DevOps teams.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Java",
                "Spring Boot",
                "Next.js",
                "Angular",
                "PostgreSQL",
                "Docker",
                "Keycloak",
                "AWS",
              ].map((tech) => (
                <span key={tech} className="skill-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card flex flex-col items-center justify-center text-center py-8"
              >
                <span className="font-display text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </span>
                <span className="text-muted text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
