import { experience } from "@/data/experience";
import { MapPin } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-3">Career</p>
        <h2 className="section-heading mb-14">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border md:left-1/2" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <div
                key={exp.id}
                className={`relative flex gap-8 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-3.5 md:left-1/2 md:-translate-x-1/2 top-3 w-3 h-3 rounded-full bg-accent border-2 border-bg z-10" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="card group">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div>
                        <h3 className="font-display font-semibold text-foreground text-lg">
                          {exp.role}
                        </h3>
                        <p className="text-accent text-sm font-medium mt-0.5">
                          {exp.company}
                        </p>
                        <p className="flex items-center gap-1 text-muted text-xs mt-1">
                          <MapPin size={11} />
                          {exp.location}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <span className="text-xs text-muted font-body border border-border rounded-full px-3 py-1 whitespace-nowrap">
                          {exp.period}
                        </span>
                        {exp.type === "intern" && (
                          <span className="text-xs text-secondary bg-surface border border-border rounded-full px-2 py-0.5">
                            Internship
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-secondary text-sm leading-relaxed mb-4 mt-3">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span key={t} className="skill-chip text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
