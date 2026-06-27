import { ExternalLink, Award } from "lucide-react";

const certifications = [
  {
    title: "Developing Front-End Apps with React",
    issuer: "Coursera",
    href: "https://www.coursera.org/account/accomplishments/certificate/9G8W8XAJN2DC",
  },
  {
    title: "Server-side Development with NodeJS, Express and MongoDB",
    issuer: "Coursera",
    href: "https://www.coursera.org/account/accomplishments/certificate/F56C2QFUR75C",
  },
  {
    title: "Front-End JavaScript Frameworks: Angular",
    issuer: "Coursera",
    href: "https://www.coursera.org/account/accomplishments/certificate/BJA6TMW5LEW2",
  },
];

const education = [
  {
    degree: "BSc (Hons) Computing",
    institution: "Wrexham Glyndŵr University",
    location: "London, United Kingdom",
    year: "2022",
  },
  {
    degree: "Higher National Diploma in Information Technology",
    institution: "Advanced Technological Institute",
    location: "Tangalle, Sri Lanka",
    year: "2019",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <p className="section-label mb-3">Education</p>
            <h2 className="section-heading mb-8">Degrees</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.degree} className="card">
                  <p className="font-display font-semibold text-foreground mb-1">
                    {edu.degree}
                  </p>
                  <p className="text-accent text-sm font-medium">{edu.institution}</p>
                  <p className="text-muted text-xs mt-1">
                    {edu.location} · {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="section-label mb-3">Certifications</p>
            <h2 className="section-heading mb-8">Courses</h2>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-start gap-3 group hover:border-accent/50"
                >
                  <Award
                    size={18}
                    className="text-accent shrink-0 mt-0.5"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-medium text-foreground text-sm group-hover:text-accent transition-colors">
                      {cert.title}
                    </p>
                    <p className="text-muted text-xs mt-0.5">{cert.issuer}</p>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-muted group-hover:text-accent transition-colors shrink-0 mt-0.5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
