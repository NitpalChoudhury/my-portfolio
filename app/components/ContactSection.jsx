"use client";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Send
} from "lucide-react";

import { useState } from "react";
import ParticlesBG from "./ParticlesBG";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      form.reset();
      setTimeout(() => setSuccess(false), 3000);
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  }

  return (
    <section className="relative w-full min-h-screen pt-28 md:pt-32 px-4 md:px-6 text-white">

      <ParticlesBG />

      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 success-card text-sm md:text-base px-6 py-3">
          🎉 Message Sent Successfully!
        </div>
      )}

      {/* ERROR POPUP */}
      {error && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 error-card text-sm md:text-base px-6 py-3">
          ⚠️ Something went wrong. Try again.
        </div>
      )}

      {/* Title */}
      <div className="text-center px-2">
        <h2 className="text-4xl md:text-5xl font-bold drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]">
          Contact Me
        </h2>
        <p className="mt-3 text-white/85 text-base md:text-lg">
          Send me a message in seconds.
        </p>
      </div>

      {/* Glass Contact Box */}
      <div className="max-w-5xl mx-auto mt-12 md:mt-16 glass-contact p-6 md:p-10 rounded-2xl 
                      border border-cyan-400/20 shadow-2xl shine-form">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-white/70 text-sm md:text-base">Full Name</label>
              <input type="text" name="name" className="contact-input" placeholder="Enter your name" required />
            </div>

            <div>
              <label className="text-white/70 text-sm md:text-base">Email Address</label>
              <input type="email" name="email" className="contact-input" placeholder="you@example.com" required />
            </div>

            <div>
              <label className="text-white/70 text-sm md:text-base">Subject</label>
              <input type="text" name="subject" className="contact-input" placeholder="How can I help you?" required />
            </div>

            <div>
              <label className="text-white/70 text-sm md:text-base">Message</label>
              <textarea rows="4" name="message" className="contact-input" placeholder="Write your message..." required></textarea>
            </div>

            <button
              disabled={loading}
              className="send-btn w-full flex items-center justify-center gap-2 mt-4 py-3 rounded-xl"
            >
              {loading ? (
                <span className="loader"></span>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* RIGHT CONTACT INFO */}
          <div className="glass-info p-5 md:p-6 rounded-xl space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-cyan-300">Get in touch</h3>

            <div className="flex items-center gap-3 text-sm md:text-base break-all">
              <Mail className="text-cyan-300" />
              <p>nitpalchoudhury@gmail.com</p>
            </div>

            <div className="flex items-center gap-3 text-sm md:text-base">
              <Phone className="text-cyan-300" />
              <p>+91 9957356804</p>
            </div>

            <div className="flex items-center gap-3 text-sm md:text-base">
              <MapPin className="text-cyan-300" />
              <p>India</p>
            </div>

            <div className="flex gap-5 pt-3 md:pt-4 text-sm md:text-base">

              <a href="https://www.instagram.com/nitpal.builds" target="_blank" rel="noopener noreferrer">
                <Instagram className="icon-social" />
              </a>

              <a href="https://github.com/NitpalChoudhury" target="_blank" rel="noopener noreferrer">
                <Github className="icon-social" />
              </a>

              <a href="https://www.linkedin.com/in/nitpal-choudhury-b88155276" target="_blank" rel="noopener noreferrer">
                <Linkedin className="icon-social" />
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
