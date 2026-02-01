"use client";
import Image from "next/image";
import ParticlesBG from "./ParticlesBG";


export default function Hero() {
  return (
    <div className="w-full min-h-screen flex  flex-col items-center text-center pt-32 px-6">
       <ParticlesBG />

      {/* Heading Section */}
      <h1 className="text-5xl md:text-6xl font-bold text-white hero-glow drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
        Hi, I'm <span className="text-cyan-400">Nitpal</span>
      </h1>

      <h2 className="text-2xl md:text-3xl mt-3 font-semibold text-white/90">
        Full Stack Developer & <span className="text-purple-300">AI Engineer</span>
      </h2>

      <p className="mt-4 max-w-2xl text-white/80 text-lg">
        Crafting modern websites, Shopify stores, apps & AI systems.
      </p>

      {/* Buttons */}
      <div className="flex gap-5 mt-8">
        <button 
        onClick={() => window.location.href = "/projects"}
        className="px-8 py-3 rounded-xl neon-btn btn-shine">
          View Portfolio
        </button>

        <button 
        onClick={() => window.location.href = "/contact"}
        className="px-8 py-3 rounded-xl neon-outline btn-shine">
          Hire Me
        </button>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl w-full">

        {/* Card 1 */}
        <div className="service-card float-card">
          <Image src="/icons/webdev.png" width={55} height={55} alt="icon" className="mx-auto icon-pop" />
          <h3 className="text-xl mt-4 font-bold">Web Development</h3>
          <p className="text-white/70 mt-2 text-sm">
            Building responsive & dynamic websites using React, Next.js & modern technologies.
          </p>
        </div>

        {/* Card 2 */}
        <div className="service-card float-card">
          <Image src="/icons/shopify.png" width={55} height={55} alt="shopify" className="mx-auto icon-pop" />
          <h3 className="text-xl mt-4 font-bold">Shopify Development</h3>
          <p className="text-white/70 mt-2 text-sm">
            Creating high-converting e-commerce stores with custom themes & apps.
          </p>
        </div>

        {/* Card 3 */}
        <div className="service-card float-card">
          <Image src="/icons/ai.png" width={55} height={55} alt="ai" className="mx-auto icon-pop" />
          <h3 className="text-xl mt-4 font-bold">App Development & AI</h3>
          <p className="text-white/70 mt-2 text-sm">
            Cross-platform apps & innovative AI-powered automations.
          </p>
        </div>

      </div>

    </div>
  );
}
