"use client";

import { useEffect } from "react";

// Одноразовий IntersectionObserver для всіх [data-aos] на сторінці:
// коли елемент з'являється у в'юпорті — ставимо data-aos-state="animated",
// а CSS (globals.scss) вже сам програє fade-up перехід.
export function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      "[data-aos]:not([data-aos-state='animated'])"
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => el.setAttribute("data-aos-state", "animated"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-aos-state", "animated");
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
