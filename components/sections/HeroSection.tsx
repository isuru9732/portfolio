"use client";

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="section-label mb-6 animate-fade-up opacity-0 animate-delay-100">
            Available for Senior Roles
          </p>

          {/* Name with cursor blink */}
          <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05] mb-2 animate-fade-up opacity-0 animate-delay-200">
            Isuru
            <br />
            <span className="gradient-text cursor">Ruwantha</span>
          </h1>

          {/* Title */}
          <p className="font-display text-xl md:text-2xl text-muted font-light mt-4 mb-6 animate-fade-up opacity-0 animate-delay-300">
            Senior Software Engineer
          </p>

          {/* Tag line */}
          <p className="text-secondary text-base md:text-lg leading-relaxed max-w-xl mb-10 animate-fade-up opacity-0 animate-delay-400">
            Specialising in{" "}
            <span className="text-accent-light">Java · Spring Boot · Next.js · PostgreSQL</span>{" "}
            and scalable system architecture. 5+ years building enterprise-level
            platforms in the education domain and beyond — from microservices to
            production deployments.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-14 animate-fade-up opacity-0 animate-delay-400">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="/CV_Isuru_Ruwantha.pdf" download className="btn-ghost">
              Download CV
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 animate-fade-up opacity-0 animate-delay-400">
            <a
              href="https://github.com/isuru9732"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm group"
            >
              <Github size={18} className="group-hover:text-accent transition-colors" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/isururuwantha/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm group"
            >
              <Linkedin size={18} className="group-hover:text-accent transition-colors" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:isr.ruwantha@gmail.com"
              className="flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm group"
            >
              <Mail size={18} className="group-hover:text-accent transition-colors" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors flex flex-col items-center gap-1 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
