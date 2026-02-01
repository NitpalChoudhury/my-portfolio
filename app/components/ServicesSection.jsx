"use client";

import Image from "next/image";
import ParticlesBG from "./ParticlesBG";

export default function ServicesSection() {
  return (
    <section className="relative w-full min-h-screen pt-28 px-6 text-white">
      <ParticlesBG />
      <div className="max-w-6xl mx-auto text-center">

        {/* Page Title */}
        <h2 className="text-5xl font-bold drop-shadow-[0_0_25px_rgba(255,255,255,0.45)]">
          Services
        </h2>
        <p className="mt-3 text-white/80 text-lg">
          I help brands and businesses grow with modern technology.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          <ServiceCard
            icon="/icons/webdev.svg"
            title="Full-Stack Web Development"
            text="Custom high-performance websites using MERN & Next.js."
          />

          <ServiceCard
            icon="/icons/shopify.svg"
            title="Shopify Development"
            text="Shopify stores, custom themes, speed optimization & automation."
          />

          <ServiceCard
            icon="/icons/app.svg"
            title="App Development"
            text="Cross-platform mobile apps with smooth UI & fast performance."
          />
        </div>

        {/* Tech Stack */}
        <h3 className="text-3xl font-semibold mt-20 drop-shadow-lg">
          Tech Stack
        </h3>

        <div className="flex justify-center flex-wrap gap-8 mt-10 text-white/85 text-lg">

          <TechItem icon="/icons/html.svg" name="HTML" />
          <TechItem icon="/icons/css.svg" name="CSS" />
          <TechItem icon="/icons/js.svg" name="JavaScript" />
          <TechItem icon="/icons/react.svg" name="React" />
          <TechItem icon="/icons/next.svg" name="Next.js" />
          <TechItem icon="/icons/node.svg" name="Node.js" />
          <TechItem icon="/icons/mongodb.svg" name="MongoDB" />
          <TechItem icon="/icons/shopify.svg" name="Shopify" />
          <TechItem icon="/icons/firebase.svg" name="Firebase" />
          <TechItem icon="/icons/python.svg" name="Python" />
        </div>
      </div>
    </section>
  );
}

/* SERVICE CARD COMPONENT */
function ServiceCard({ icon, title, text }) {
  return (
    <div className="neon-service-card p-6 rounded-2xl flex flex-col items-center text-center">
      <Image
        src={icon}
        width={70}
        height={70}
        alt={title}
        className="neon-animated-icon mb-4"
        unoptimized
      />
      <h4 className="text-xl font-bold text-cyan-300">{title}</h4>
      <p className="text-white/70 mt-2 text-sm max-w-xs">{text}</p>
    </div>
  );
}

/* TECH ICON COMPONENT */
function TechItem({ icon, name }) {
  return (
    <div className="tech-pill flex items-center gap-2">
      <Image
        src={icon}
        width={28}
        height={28}
        alt={name}
        className="neon-animated-icon"
        unoptimized
      />
      <span>{name}</span>
    </div>
  );
}
