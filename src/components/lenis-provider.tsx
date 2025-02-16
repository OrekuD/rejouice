"use client";

import Lenis from "@studio-freight/lenis";
import React from "react";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
