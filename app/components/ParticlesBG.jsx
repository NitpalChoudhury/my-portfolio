"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBG() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="galaxy-stars"
      init={particlesInit}
      className="absolute inset-0 -z-10 pointer-events-none"
      options={{
        fullScreen: false,
        background: { color: "transparent" },
        fpsLimit: 120,

        particles: {
          number: {
            value: 220,
            density: { enable: true, area: 900 },
          },

          color: { value: "#ffffff" },

          shape: { type: "circle" },

          opacity: {
            value: 1,
            random: true,
            animation: {
              enable: true,
              speed: 0.7,
              minimumValue: 0.2,
            },
          },

          size: {
            value: { min: 0.8, max: 2.6 },
          },

          move: {
            enable: true,
            speed: 0.55,
            direction: "top-right",   // ⭐ STAR DRIFT MOTION
            random: true,
            straight: false,
            outModes: { default: "out" },

            // ⭐ Extra smooth drift wobble
            trail: {
              enable: false,
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: { distance: 140, duration: 0.4 },
          },
        },

        detectRetina: true,
      }}
    />
  );
}
