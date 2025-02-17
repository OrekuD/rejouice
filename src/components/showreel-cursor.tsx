import { AnimatePresence, cubicBezier, motion } from "framer-motion";
import { interpolate } from "flubber";
import { useMousePosition } from "@/hooks/useMousePosition";
import React from "react";

// const path1 = {
//   d2: "M 16 8 L 4 15 L 4 1 L 16 8Z",
//   d1: "M 1 0 L 9 8 L 17 16 L 9 8 L 1 0Z",
// };

// const path2 = {
//   d2: "M 16 8 L 4 15 L 4 1 L 16 8Z",
//   d1: "M 17 0 L 9 8 L 1 16 L 9 8 L 17 0Z",
// };

const path1 = {
  d1: "M 16 8 L 4 15 L 4 1 L 16 8Z",
  d2: "M 1 0 L 9 8 L 17 16 L 9 8 L 1 0Z",
};

const path2 = {
  d1: "M 16 8 L 4 15 L 4 1 L 16 8Z",
  d2: "M 17 0 L 9 8 L 1 16 L 9 8 L 17 0Z",
};

const interpolator1 = interpolate(path1.d1, path1.d2, {
  maxSegmentLength: 1,
});
const interpolator2 = interpolate(path2.d1, path2.d2, {
  maxSegmentLength: 1,
});

export function ShowreelCursor({
  isVideoPreviewOpen,
  isVisible,
}: {
  isVideoPreviewOpen: boolean;
  isVisible: boolean;
}) {
  const mousePosition = useMousePosition();
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-[7px] left-[40px] z-50 flex gap-2 mix-blend-difference transition-transform duration-300 pointer-events-none ease-cubic-bezier-cursor"
          style={{
            // transform: `translate(${mousePosition.x + 40}px, ${mousePosition.y + 7}px)`,
            translateX: mousePosition.positionX,
            translateY: mousePosition.positionY,
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          exit={{
            opacity: 0,
          }}
        >
          <svg
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-[10px] mt-[6px]"
          >
            <motion.path
              fill="currentColor"
              stroke="currentColor"
              initial={false}
              animate={{
                d: isVideoPreviewOpen ? path1.d2 : path1.d1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                d: {
                  duration: 0.5,
                  ease: "easeInOut",
                  transform: (progress: number) =>
                    isVideoPreviewOpen
                      ? interpolator1(progress)
                      : interpolator1(1 - progress),
                },
              }}
            />
            <motion.path
              fill="currentColor"
              stroke="currentColor"
              initial={false}
              animate={{
                d: isVideoPreviewOpen ? path2.d2 : path2.d1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                d: {
                  duration: 0.5,
                  ease: "easeInOut",
                  transform: (progress: number) =>
                    isVideoPreviewOpen
                      ? interpolator2(progress)
                      : interpolator2(1 - progress),
                },
              }}
            />
          </svg>
          <div className="">
            <AnimatePresence mode="popLayout">
              <motion.p
                key={isVideoPreviewOpen ? "close" : "play"}
                initial={{ opacity: 0, translateY: "100%" }}
                animate={{ opacity: 1, translateY: "0%" }}
                exit={{ opacity: 0, translateY: "-100%" }}
                transition={{
                  duration: 0.5,
                  ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
                }}
                className="text-sm font-normal text-white"
              >
                {isVideoPreviewOpen ? "Close Reel" : "Play Reel"}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
