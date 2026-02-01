"use client";

import Image from "next/image";
import ParticlesBG from "./ParticlesBG";

export default function ProjectsSection() {
  return (
    <section className="relative w-full min-h-screen pt-28 px-6 text-white">
      <ParticlesBG />
      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-5xl font-bold drop-shadow-[0_0_25px_rgba(255,255,255,0.45)]">
          Projects
        </h2>
        <p className="mt-3 text-white/80 text-lg">
          Portfolio Showcase
        </p>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">

          <ProjectCard
            img="/projects/aichat.png"
            title="AI Chat Tool"
            tag="AI / Automation"
          />

          <ProjectCard
            img="/projects/ecommerce.png"
            title="E-commerce Store"
            tag="Shopify / MERN"
          />

          <ProjectCard
            img="/projects/portfolio.png"
            title="Personal Portfolio"
            tag="Next.js / Tailwind"
          />

          <ProjectCard
            img="/projects/mobileapp.png"
            title="Mobile App"
            tag="React Native"
          />

          <ProjectCard
            img="/projects/dashboard.png"
            title="Advanced Dashboard"
            tag="Full-Stack App"
          />

          <ProjectCard
            img="/projects/automation.png"
            title="Automation AI Tool"
            tag="Python / AI"
          />

        </div>
      </div>
    </section>
  );
}

/* PROJECT CARD COMPONENT */
function ProjectCard({ img, title, tag }) {
  return (
    <div className="neon-project-card p-5 shine-card rounded-2xl bg-white/5 
      backdrop-blur-xl border border-cyan-400/20
      shadow-[0_0_25px_rgba(0,200,255,0.25),_inset_0_0_20px_rgba(0,200,255,0.15)]
      hover:shadow-[0_0_35px_rgba(0,200,255,0.35),_inset_0_0_25px_rgba(0,200,255,0.25)]
      transition-all duration-300 cursor-pointer">

      <Image
        src={img}
        width={400}
        height={260}
        alt={title}
        className="rounded-xl border border-white/10 shadow-md"
      />

      <h3 className="mt-4 text-xl font-semibold text-cyan-300">
        {title}
      </h3>
      <p className="text-white/70 text-sm mt-1">{tag}</p>
    </div>
  );
}
