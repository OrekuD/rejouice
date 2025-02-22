"use client";

import { useMotionValue } from "framer-motion";
import React from "react";

export function useMousePosition() {
  const positionX = useMotionValue(0);
  const positionY = useMotionValue(0);

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      positionX.set(event.clientX);
      positionY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [positionX, positionY]);

  return {
    positionX,
    positionY,
  };
}
