"use client";

import { useEffect } from "react";

export default function GlobalTilt() {
  useEffect(() => {
    const TILT_MAX = 10;

    function bind(card: HTMLElement) {
      if (card.dataset.tiltBound) return;
      card.dataset.tiltBound = "1";

      // Inject the mouse-position specular shimmer overlay
      const shimmer = document.createElement("div");
      shimmer.className = "tilt-shimmer";
      shimmer.setAttribute("aria-hidden", "true");
      card.appendChild(shimmer);

      card.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;

        const rotateX = ((y - cy) / cy) * -TILT_MAX;
        const rotateY = ((x - cx) / cx) * TILT_MAX;

        // CSS variables in % format for the shimmer gradient
        card.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
        card.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        shimmer.style.opacity = "1";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        shimmer.style.opacity = "0";
      });
    }

    // Bind all existing .glass-card elements (excluding elements that opt out)
    document
      .querySelectorAll<HTMLElement>(".glass-card:not([data-no-tilt])")
      .forEach(bind);

    // Re-bind whenever FadeInSection reveals new cards
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (
            node.classList.contains("glass-card") &&
            !node.dataset.noTilt
          ) {
            bind(node);
          }
          node
            .querySelectorAll<HTMLElement>(".glass-card:not([data-no-tilt])")
            .forEach(bind);
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
