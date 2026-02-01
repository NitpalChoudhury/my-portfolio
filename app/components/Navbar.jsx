"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 glass-nav border-cyan-400/10 nav-font py-4 px-6 md:px-10 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">
          <span className="text-cyan-300 logo-glow">Nitpal.dev</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li><Link href="/" className="nav-link">Home</Link></li>
          <li><Link href="/about" className="nav-link">About</Link></li>
          <li><Link href="/services" className="nav-link">Services</Link></li>
          <li><Link href="/skills" className="nav-link">Skills</Link></li>
          <li><Link href="/projects" className="nav-link">Projects</Link></li>
          <li><Link href="/aijourney" className="nav-link">AI Journey</Link></li>
          <li><Link href="/contact" className="nav-link">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-300"
          onClick={() => setOpen(true)}
        >
          <Menu size={32} />
        </button>
      </nav>

      {/* MOBILE DRAWER OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        ></div>
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-[320px] glass-nav border-l border-cyan-400/20 z-50 p-6 transform transition-all duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          className="text-cyan-300 mb-6"
          onClick={() => setOpen(false)}
        >
          <X size={32} />
        </button>

        {/* Menu Items */}
        <ul className="flex flex-col gap-6 text-xl font-medium">
          <li><Link onClick={() => setOpen(false)} href="/" className="nav-link">Home</Link></li>
          <li><Link onClick={() => setOpen(false)} href="/about" className="nav-link">About</Link></li>
          <li><Link onClick={() => setOpen(false)} href="/services" className="nav-link">Services</Link></li>
          <li><Link onClick={() => setOpen(false)} href="/skills" className="nav-link">Skills</Link></li>
          <li><Link onClick={() => setOpen(false)} href="/projects" className="nav-link">Projects</Link></li>
          <li><Link onClick={() => setOpen(false)} href="/aijourney" className="nav-link">AI Journey</Link></li>
          <li><Link onClick={() => setOpen(false)} href="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </>
  );
}
