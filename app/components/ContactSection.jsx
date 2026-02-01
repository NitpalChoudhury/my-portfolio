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
    <section className="relative w-full min-h-screen pt-24 px-3 md:px-6 text-white overflow-hidden">

      <ParticlesBG />

      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 success-card text-xs sm:text-sm md:text-base px-4 py-2">
          🎉 Message Sent Successfully!
        </div>
      )}

      {/* ERROR POPUP */}
      {error && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 error-card text-xs sm:text-sm md:text-base px-4 py-2">
          ⚠️ Something went wrong. Try again.
        </div>
      )}

      {/* Title */}
      <div className="text-center mt-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]">
          Contact Me
        </h2>
        <p className="mt-2 text-white/85 text-sm sm:text-base">
          Send me a message in seconds.
        </p>
      </div>

      {/* CONTACT BOX */}
      <div className="
        max-w-5xl 
        mx-auto 
        mt-10
        glass-contact 
        p-4 sm:p-6 md:p-10 
        rounded-2xl 
        border border-cyan-400/20 
        shadow-2xl 
        shine-form
      ">

        {/* GRID → Mobile 1 column, Desktop 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">

          {/* LEFT FORM */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

            <div>
              <label className="text-white/70 text-xs sm:text-sm">Full Name</label>
              <input type="text" name="name" className="contact-input text-sm sm:text-base" placeholder="Enter your name" required />
            </div>

            <div>
              <label className="text-white/70 text-xs sm:text-sm">Email Address</label>
              <input type="email" name="email" className="contact-input text-sm sm:text-base" placeholder="you@example.com" required />
            </div>

            <div>
              <label className="text-white/70 text-xs sm:text-sm">Subject</label>
              <input type="text" name="subject" className="contact-input text-sm sm:text-base" placeholder="How can I help you?" required />
            </div>

            <div>
              <label className="text-white/70 text-xs sm:text-sm">Message</label>
              <textarea rows="4" name="message" className="contact-input text-sm sm:text-base" placeholder="Write your message..." required></textarea>
            </div>

            <button
              disabled={loading}
              className="send-btn w-full flex items-center justify-center gap-2 mt-2 sm:mt-4 py-2 sm:py-3 rounded-xl text-sm sm:text-base"
            >
              {loading ? (
                <span className="loader"></span>
              ) : (
                <>
                  <Send size={18} className="sm:w-[20px] sm:h-[20px]" />
                  Send Message
                </>
              )}
            </button>

          </form>

          {/* RIGHT CONTACT INFO */}
          <div className="glass-info p-4 sm:p-6 rounded-xl space-y-5 sm:space-y-6">

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-300">Get in touch</h3>

            <div className="flex items-center gap-3 text-sm sm:text-base break-all">
              <Mail className="text-cyan-300 w-5 h-5" />
              <p>nitpalchoudhury@gmail.com</p>
            </div>

            <div className="flex items-center gap-3 text-sm sm:text-base">
              <Phone className="text-cyan-300 w-5 h-5" />
              <p>+91 9957356804</p>
            </div>

            <div className="flex items-center gap-3 text-sm sm:text-base">
              <MapPin className="text-cyan-300 w-5 h-5" />
              <p>India</p>
            </div>

            <div className="flex gap-5 pt-2 sm:pt-3">
              <a href="https://www.instagram.com/nitpal.builds" target="_blank" rel="noopener noreferrer">
                <Instagram className="icon-social w-6 h-6" />
              </a>
              <a href="https://github.com/NitpalChoudhury" target="_blank" rel="noopener noreferrer">
                <Github className="icon-social w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/nitpal-choudhury-b88155276" target="_blank" rel="noopener noreferrer">
                <Linkedin className="icon-social w-6 h-6" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
