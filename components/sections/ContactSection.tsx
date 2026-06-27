import { Github, Linkedin, Mail, FileDown } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "isr.ruwantha@gmail.com",
    href: "mailto:isr.ruwantha@gmail.com",
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/isururuwantha",
    href: "https://www.linkedin.com/in/isururuwantha/",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/isuru9732",
    href: "https://github.com/isuru9732",
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-label mb-3">Get in touch</p>
          <h2 className="section-heading mb-4">Let's work together</h2>
          <p className="text-secondary leading-relaxed mb-12">
            I'm currently open to Senior Software Engineer opportunities — full
            time or contract. If you're looking for someone who takes ownership
            from schema design to deployment, let's talk.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="card flex flex-col items-center gap-3 py-6 text-center group hover:border-accent/50"
              >
                <c.icon
                  size={22}
                  className="text-muted group-hover:text-accent transition-colors"
                />
                <div>
                  <p className="text-foreground text-sm font-medium font-display">
                    {c.label}
                  </p>
                  <p className="text-muted text-xs mt-0.5 break-all">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <a href="/CV_Isuru_Ruwantha.pdf" download className="btn-primary">
            <FileDown size={16} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
