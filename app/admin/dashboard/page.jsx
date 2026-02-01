"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadMessages() {
    const res = await fetch("/api/admin/messages");
    const data = await res.json();
    setMessages(data);
    setLoading(false);
  }

  async function handleLogout() {
    await fetch("/api/admin/logout");
    window.location.href = "/admin/login";
  }

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div className="min-h-screen px-4 md:px-10 py-10 text-white">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h1 className="text-3xl md:text-4xl font-bold drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]">
          Admin Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-500/20 border border-red-400/50 text-red-300 rounded-xl hover:bg-red-500/30 transition-all"
        >
          Logout
        </button>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-white/70 mt-10 text-lg">Loading messages...</p>
      )}

      {/* EMPTY STATE */}
      {!loading && messages.length === 0 && (
        <p className="text-center text-white/60 mt-10 text-lg">
          No messages yet.
        </p>
      )}

      {/* MESSAGE LIST */}
      <div className="grid gap-6 mt-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="glass p-6 rounded-xl border border-cyan-400/20 shadow-lg hover:shadow-cyan-500/20 transition-all"
          >
            {/* Header row (name + time) */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h2 className="text-xl font-bold text-cyan-300 break-all">
                {msg.name}
              </h2>

              <span className="text-sm text-white/50">
                {new Date(msg.created_at).toLocaleString()}
              </span>
            </div>

            {/* Email + Subject */}
            <div className="mt-3 text-white/80 space-y-1 break-all">
              <p>📧 {msg.email}</p>
              <p>📝 {msg.subject}</p>
            </div>

            {/* Message */}
            <p className="mt-4 text-white/90 leading-relaxed break-words">
              {msg.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
