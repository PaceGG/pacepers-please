"use client";

import { useState } from "react";

export type AnimationDirection = "up" | "down" | "left" | null;

export function usePassportAnimation() {
  const [direction, setDirection] = useState<AnimationDirection>(null);
  const [key, setKey] = useState(0);

  const triggerEnter = () => {
    setKey((k) => k + 1);
  };

  const triggerExit = (dir: Exclude<AnimationDirection, null>) => {
    setDirection(dir);

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setDirection(null);
        resolve();
      }, 300);
    });
  };

  return {
    direction,
    key,
    triggerEnter,
    triggerExit,
  };
}
