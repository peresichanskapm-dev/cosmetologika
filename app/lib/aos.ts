import type { CSSProperties } from "react";

// Крок та база для каскадної затримки data-aos всередині секції (мс).
const STEP = 60;
const BASE = 80;
const MAX_STEPS = 5; // довгі списки не чекають довше ~5 кроків

export function aosDelay(index: number): CSSProperties {
  const ms = BASE + Math.min(index, MAX_STEPS - 1) * STEP;
  return { "--aos-delay": `${ms}ms` } as CSSProperties;
}
