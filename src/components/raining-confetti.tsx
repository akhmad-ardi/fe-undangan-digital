"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function RainingConfetti() {
  useEffect(() => {
    const container = document.createElement("div");
    container.className =
      "fixed top-0 left-0 w-full h-full pointer-events-none z-50";
    document.body.appendChild(container);

    const colors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF9F1C"];

    // buat 50 confetti
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.className = "w-2 h-4 rounded-sm absolute";
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.top = "-10px";
      container.appendChild(confetti);

      gsap.to(confetti, {
        y: "110vh",
        rotation: Math.random() * 720,
        x: `+=${Math.random() * 100 - 50}`,
        duration: Math.random() * 3 + 2,
        ease: "power1.in",
        repeat: -1,
        delay: Math.random() * 5,
      });
    }

    return () => {
      container.remove();
    };
  }, []);

  return null;
}
