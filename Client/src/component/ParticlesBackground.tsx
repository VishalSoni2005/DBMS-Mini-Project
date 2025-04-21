import React from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

const ParticlesBackground = () => {
  const particlesInit = async (engine: any) => {
    await loadStarsPreset(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "stars",
        background: {
          color: "#000",
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: { value: 300, density: { enable: true, area: 1000 } },
          color: {
            value: ["#ffffff", "#00ffff", "#ffcc00", "#ff0000", "#121343"],
          },
          shape: { type: ["circle", "star"] },
          opacity: {
            value: 1,
            random: true,
            anim: { enable: true, speed: 0.5, opacity_min: 0.3, sync: false },
          },
          size: { value: 1.5, random: true },
          move: {
            enable: true,
            speed: 0.1,
            direction: "none",
            outModes: { default: "bounce" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
