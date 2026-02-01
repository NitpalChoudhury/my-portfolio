"use client";

// rebuild fix


import { useState } from "react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    if (data.success) {
      window.location.href = "/admin/dashboard";
    } else {
      setError("Incorrect password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-white">
      <form onSubmit={handleLogin} className="glass p-10 rounded-xl max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Login</h1>

        <input
          type="password"
          placeholder="Enter password"
          className="contact-input"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="neon-btn w-full mt-5 py-3 rounded-xl">
          Login
        </button>

        {error && <p className="text-red-400 text-center mt-4">{error}</p>}
      </form>
    </div>
  );
}
