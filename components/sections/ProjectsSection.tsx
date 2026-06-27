import { projects } from "@/data/projects";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-3">Work</p>
        <h2 className="section-heading mb-14">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <div
                key={project.id}
                className={`card group flex flex-col ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                {/* Top bar */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase tracking-widest text-accent font-semibold border border-accent/30 bg-accent/5 rounded px-2 py-0.5">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-foreground text-xl mt-2">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-foreground transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-foreground transition-colors"
                        aria-label="Live"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-secondary text-sm leading-relaxed mb-4 flex-grow">
                  {i === 0 ? project.longDescription : project.description}
                </p>

                {/* Highlights for featured first card */}
                {i === 0 && (
                  <ul className="mb-5 space-y-1.5">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-secondary"
                      >
                        <ArrowRight
                          size={14}
                          className="text-accent mt-0.5 shrink-0"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="skill-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
