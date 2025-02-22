"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { useTransform, motion, useSpring, SpringOptions } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";

// const springOptions: SpringOptions = {
//   stiffness: 250,
//   damping: 30,
//   mass: 1,
// };

const springOptions: SpringOptions = {
  stiffness: 200,
  damping: 30,
  mass: 1,
};

// const springOptions: SpringOptions = {
//   stiffness: 150,
//   damping: 40,
//   mass: 1.2,
// };

export function HighlightCard({
  image,
  logo,
  aspectRatio,
  videoUrl,
  label,
}: {
  label: string;
  videoUrl: string;
  aspectRatio: string;
  image: StaticImageData;
  logo: React.ReactNode;
}) {
  const mousePosition = useMousePosition();
  const positionX = useSpring(mousePosition.positionX, springOptions);
  const positionY = useSpring(mousePosition.positionY, springOptions);
  const isHovered = useSpring(0, springOptions);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const labelRef = React.useRef<HTMLParagraphElement>(null);
  const [dimensions, setDimensions] = React.useState({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    labelWidth: 0,
  });

  React.useEffect(() => {
    if (!containerRef.current || !labelRef.current) return;

    setDimensions({
      width: containerRef.current.offsetWidth,
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
      height: containerRef.current.offsetHeight,
      labelWidth: labelRef.current.offsetWidth,
    });
  }, []);

  const translateXInput = [
    dimensions.left + 80,
    dimensions.left + 80 + dimensions.width - 80,
  ];
  const translateXOutput = [0, dimensions.width - 80 - 80 - 300];

  const translateYInput = [0, dimensions.height];
  const translateYOutput = [
    -160,
    dimensions.height - 80 - 80 - 300 * (389 / 303),
  ];

  const containerTranslateX = useTransform(
    positionX,
    translateXInput,
    translateXOutput,
  );

  const labelTranslateX = useTransform(positionX, translateXInput, [
    0,
    300 - dimensions.labelWidth,
  ]);

  const containerTranslateY = useTransform(
    positionY,
    translateYInput,
    translateYOutput,
  );

  return (
    <div
      className="w-full relative cursor-pointer group"
      style={{
        aspectRatio,
      }}
      onMouseOver={() => isHovered.set(1)}
      onMouseLeave={() => isHovered.set(0)}
      ref={containerRef}
    >
      <Image src={image} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 w-full h-full bg-black/40 z-10 transition-opacity duration-300 opacity-0 hover:opacity-100" />
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-5 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
        {logo}
      </div>
      <motion.div
        className="absolute left-20 top-20 w-[300px] z-10 pointer-events-none"
        style={{
          translateX: containerTranslateX,
          translateY: containerTranslateY,
        }}
      >
        <motion.p
          className="w-fit"
          style={{
            opacity: isHovered,
            translateX: labelTranslateX,
          }}
          ref={labelRef}
        >
          {label}
        </motion.p>
        <motion.div
          className="w-full bg-red-700"
          style={{
            aspectRatio: "303 / 389",
            opacity: isHovered,
            scale: isHovered,
          }}
        >
          <motion.video
            className="w-full object-cover"
            loop={true}
            autoPlay={true}
            playsInline={true}
            draggable={false}
            muted={true}
            controls={false}
            style={{
              aspectRatio: "303 / 389",
            }}
          >
            <source src={videoUrl} type="video/mp4" />
          </motion.video>
        </motion.div>
      </motion.div>
    </div>
  );
}
