"use client";

import { useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  const options = useMemo(
    () => ({
      background: { color: "transparent" },
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 400, density: { enable: true, area: 400 } },
        color: { value: ["#F7D26B", "#C0C0C0", "#F0EAD6"] },
        shape: { type: "circle" },
        opacity: { value: 0.8, random: { enable: true, minimumValue: 0.4 } },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          color: "#F7D26B",
          opacity: 0.3,
          distance: 140,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          outModes: { default: "bounce" },
        },
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: { enable: true, mode: ["grab", "slow"] },
          onClick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 180, links: { opacity: 0.6 } },
          slow: { factor: 2, radius: 120 },
          push: { quantity: 2 },
        },
      },
    }),
    []
  );

  if (!engineReady) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      <Particles id="tsparticles" options={options} />
    </div>
  );
}
