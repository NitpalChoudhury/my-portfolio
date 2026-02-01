  "use client";
  import ParticlesBG from "./ParticlesBG";
  import Image from "next/image";
  import {
    Home,
    User,
    Briefcase,
    Layers,
    Code,
    Cpu,
    Mail
  } from "lucide-react";

  export default function AboutSection() {
    return (
      <section className="relative w-full min-h-screen pt-32 px-6 text-white">
        <ParticlesBG />
        {/* Main container */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT — Glowing Profile Frame */}
          <div className="flex justify-center">
     <div className="profile-glow-frame">
  <Image
    src="/profile.png"
    width={420}
    height={420}
    alt="profile"
    className="profile-img"
    unoptimized
  />
</div>


        </div>

          {/* RIGHT — Text + Timeline */}
          <div>
            <h2 className="text-5xl font-bold drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
              About Me
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/85 max-w-xl">
              Passionate full-stack developer & AI engineer creating
              innovative solutions with MERN stack, Shopify development,
              app development, and generative AI systems.
            </p>

            {/* TIMELINE */}
            <div className="mt-10 space-y-6">
              <TimelineItem year="2022–2023" text="Web Development" />
              <TimelineItem year="2023–2024" text="Shopify Development" />
              <TimelineItem year="2024–2025" text="App Development" />
              <TimelineItem year="2025–2026" text="AI Engineering" />
            </div>
          </div>
        </div>

        {/* ICON ROW */}
        <div className="mt-16 glass-iconbar w-full max-w-4xl mx-auto py-5 px-6 rounded-xl grid grid-cols-7 gap-6 text-center text-white/80">
          <IconLink href="/" icon={<Home size={26} />} />
          <IconLink href="/about" icon={<User size={26} />} />
          <IconLink href="/services" icon={<Briefcase size={26} />} />
          <IconLink href="/skills" icon={<Layers size={26} />} />
          <IconLink href="/projects" icon={<Code size={26} />} />
          <IconLink href="/aijourney" icon={<Cpu size={26} />} />
          <IconLink href="/contact" icon={<Mail size={26} />} />
        </div>
      </section>
    );
  }

  /* --- TIMELINE COMPONENT --- */
  function TimelineItem({ year, text }) {
    return (
      <div className="glass-timeline p-4 rounded-xl border border-cyan-500/30 shadow-dark">
        <p className="text-xl font-bold text-cyan-300">{year}</p>
        <p className="text-white/80 mt-1">{text}</p>
      </div>
    );
  }

  /* --- ICON LINK --- */
  function IconLink({ href, icon }) {
    return (
      <a href={href} className="hover:text-cyan-400 transition-all duration-200">
        {icon}
      </a>
    );
  }
