"use client";

import { Brain, Cpu, Book, Rocket, Sparkles } from "lucide-react";
import ParticlesBG from "./ParticlesBG";
export default function AIJourneySection() {
  return (
    <section className="relative w-full min-h-screen pt-32 px-6 text-white">
      <ParticlesBG />
      <div className="text-center">
        <h2 className="text-5xl font-bold drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]">
          AI Journey
        </h2>
        <p className="mt-3 text-white/80 text-lg">
          My learning path & evolution in Artificial Intelligence.
        </p>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="max-w-5xl mx-auto mt-16 space-y-10">
        <JourneyCard
          year="2024"
          icon={<Book size={34} className="text-cyan-300" />}
          title="Learning Python"
          text="Started exploring Python fundamentals, syntax, data structures & automation scripts."
        />

        <JourneyCard
          year="2024"
          icon={<Brain size={34} className="text-cyan-300" />}
          title="Machine Learning"
          text="Learned ML algorithms, model training, sklearn, XGBoost and real-world prediction tasks."
        />

        <JourneyCard
          year="2025"
          icon={<Cpu size={34} className="text-cyan-300" />}
          title="AI Automation & Agents"
          text="Built automations using AI APIs, custom datasets, web tools & multi-agent workflows."
        />

        <JourneyCard
          year="2025"
          icon={<Sparkles size={34} className="text-cyan-300" />}
          title="LangChain / RAG Systems"
          text="Developed RAG chatbots, embeddings, vector DB, prompt workflows and agent systems."
        />

        <JourneyCard
          year="2026"
          icon={<Rocket size={34} className="text-cyan-300" />}
          title="AI Apps & Products"
          text="Building full AI-powered applications, dashboards, automation tools and SaaS platforms."
        />
      </div>

    </section>
  );
}

/* -----------------------------------
   REUSABLE JOURNEY CARD COMPONENT
----------------------------------- */
function JourneyCard({ year, icon, title, text }) {
  return (
    <div className="journey-card p-6 rounded-2xl flex gap-6 items-start">
      <div className="icon-box">{icon}</div>
      <div>
        <p className="text-cyan-300 font-bold text-xl">{year}</p>
        <h3 className="text-2xl font-semibold mt-1">{title}</h3>
        <p className="text-white/75 mt-2 max-w-xl">{text}</p>
      </div>
    </div>
  );
}
