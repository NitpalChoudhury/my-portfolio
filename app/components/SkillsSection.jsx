"use client";

import {
  Code,
  Layers,
  Smartphone,
  Cpu,
  Cog,
  Brain,
} from "lucide-react";

import ParticlesBG from "./ParticlesBG";

export default function SkillsSection() {
  return (
    <section className="relative w-full min-h-screen pt-28 px-6 text-white">
      <ParticlesBG />
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Page Title */}
        <h2 className="text-5xl font-bold drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
          Skills
        </h2>
        <p className="mt-3 text-white/80 text-lg">
          My Areas of Expertise
        </p>

        {/* Skill Cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-10">
          <SkillCard
            icon={<Code size={40} />}
            title="Web Development"
            desc="Modern responsive websites. React, Next.js, Tailwind."
          />

          <SkillCard
            icon={<Layers size={40} />}
            title="MERN Stack"
            desc="MongoDB, Express, React, Node.js web ecosystems."
          />

          <SkillCard
            icon={<Smartphone size={40} />}
            title="App Development"
            desc="Cross-platform apps. React Native & modern UI systems."
          />

          <SkillCard
            icon={<Cpu size={40} />}
            title="API & Automation"
            desc="AI automations, workflow bots & smart integrations."
          />

          <SkillCard
            icon={<Brain size={40} />}
            title="AI Engineering"
            desc="LLMs, RAG systems, LangChain, vector DB workflows."
          />

          <SkillCard
            icon={<Cog size={40} />}
            title="Generative AI"
            desc="AI applications, automations & intelligent systems."
          />
        </div>
      </div>
    </section>
  );
}

/* --- CARD COMPONENT --- */
function SkillCard({ icon, title, desc }) {
  return (
    <div className="neon-skill-card p-8 rounded-2xl text-center">
      <div className="text-cyan-300 mb-5 flex justify-center">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
