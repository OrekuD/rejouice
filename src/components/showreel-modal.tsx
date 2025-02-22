import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useLocalStorage } from "usehooks-ts";

const videoUrl = "https://www.rejouice.com/static/reel-full.mp4";

// const easing = cubicBezier(0.52, 0, 0, 1);
const easing = "easeInOut";
// const easing = cubicBezier(0.25, 0.46, 0.45, 0.94);
// const easing = cubicBezier(0.16, 1, 0.32, 1);
// const easing = cubicBezier(0.87, 0, 0.13, 1);

const duration = 1;
const videoProgressDuration = 0.3;

type VideoState = {
  isPlaying: boolean;
  isAudioEnabled: boolean;
};

export const ShowreelModal = ({
  isVisible,
  onClose,
  hideCustomCursor,
  showCustomCursor,
}: {
  isVisible: boolean;
  onClose: () => void;
  hideCustomCursor: () => void;
  showCustomCursor: () => void;
}) => {
  const [videoState, setVideoState] = React.useState<VideoState>({
    isPlaying: true,
    isAudioEnabled: true,
  });
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [videoCurrentTime, setVideoCurrentTime] = useLocalStorage(
    "showreel-full-current-time",
    0,
  );

  React.useEffect(() => {
    if (!videoRef.current || !isVisible) return;
    const node = videoRef.current;
    videoRef.current.currentTime = videoCurrentTime;

    return () => {
      if (!node) return;
      setVideoCurrentTime(node.currentTime);
    };
  }, [isVisible, videoCurrentTime, setVideoCurrentTime]);

  const update = React.useCallback(
    <T extends keyof VideoState>(key: T, value: VideoState[T]) => {
      setVideoState((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    },
    [],
  );

  const onTimeUpdate = React.useCallback(() => {
    const root: any = document.querySelector(":root");

    if (!videoRef.current || !root) return;
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    const progress = currentTime / duration;
    root.style.setProperty("--video-progress", `${progress * 100}%`);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 w-screen h-screen z-[100] cursor-pointer"
          onClick={onClose}
          initial={{
            opacity: 0,
            pointerEvents: "none",
          }}
          animate={{
            opacity: 1,
            pointerEvents: "all",
            transition: {
              duration,
              ease: easing,
            },
          }}
          exit={{
            opacity: 0,
            pointerEvents: "none",
            transition: {
              delay: videoProgressDuration + duration * 0.7,
              duration: duration * 0.3,
              ease: easing,
            },
          }}
        >
          <motion.div
            className="absolute inset-0 h-full w-full bg-black/95"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration,
                ease: easing,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: videoProgressDuration,
                duration,
                ease: easing,
              },
            }}
          >
            <motion.div
              className="absolute inset-0 h-full w-full bg-black flex flex-col items-center justify-center"
              initial={{
                rotate: "-30deg",
                clipPath: "inset(50%)",
              }}
              animate={{
                rotate: "0deg",
                clipPath: "inset(0%)",
                transition: {
                  duration,
                  ease: easing,
                },
              }}
              exit={{
                rotate: "-30deg",
                clipPath: "inset(50%)",
                transition: {
                  delay: videoProgressDuration,
                  duration,
                  ease: easing,
                },
              }}
            >
              <div className="max-h-[90%] w-[90%] aspect-video relative">
                <motion.video
                  className="w-full h-full aspect-video"
                  ref={videoRef}
                  initial={{
                    rotate: "30deg",
                    scale: 1.2,
                  }}
                  animate={{
                    rotate: "0deg",
                    scale: 1,
                    transition: {
                      duration,
                      ease: easing,
                    },
                  }}
                  exit={{
                    rotate: "30deg",
                    scale: 1.2,
                    transition: {
                      delay: videoProgressDuration,
                      duration,
                      ease: easing,
                    },
                  }}
                  loop={true}
                  autoPlay={true}
                  playsInline={true}
                  draggable={false}
                  muted={!videoState.isAudioEnabled}
                  controls={false}
                  onTimeUpdate={onTimeUpdate}
                >
                  <source
                    src={videoUrl}
                    type="video/mp4"
                    className="w-auto h-auto inline"
                  />
                </motion.video>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: duration,
                      duration: 0.4,
                      ease: easing,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: videoProgressDuration,
                      ease: easing,
                    },
                  }}
                  className="absolute w-3/5 flex items-center bottom-16 left-1/2 -translate-x-1/2 mix-blend-difference"
                  onClick={(e) => e.stopPropagation()}
                  onMouseOver={hideCustomCursor}
                  onMouseLeave={showCustomCursor}
                >
                  <button
                    className="w-8 h-6 flex items-center justify-center"
                    onClick={() => {
                      if (videoRef.current) {
                        if (videoState.isPlaying) {
                          videoRef.current.pause();
                        } else {
                          videoRef.current.play();
                        }
                      }
                      update("isPlaying", !videoState.isPlaying);
                    }}
                  >
                    {videoState.isPlaying ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="11"
                        fill="none"
                        viewBox="0 0 9 11"
                      >
                        <path
                          stroke="#fff"
                          strokeWidth="3"
                          d="M2 0v11M7 0v11"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16.5"
                        height="20.25"
                        fill="none"
                        viewBox="0 0 110 135"
                      >
                        <path
                          fill="#fff"
                          fillRule="evenodd"
                          d="M21 35.12c0-5.566 6.121-8.964 10.871-6.058l53.727 32.875c4.535 2.778 4.535 9.348 0 12.125l-53.727 32.875c-4.75 2.906-10.871-.492-10.871-6.058z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    )}
                  </button>

                  <div
                    className="flex-1 h-[14px] flex items-center"
                    onClick={(e) => {
                      if (videoRef.current) {
                        videoRef.current.currentTime =
                          (e.nativeEvent.offsetX /
                            e.currentTarget.offsetWidth) *
                          videoRef.current.duration;
                      }
                    }}
                  >
                    <div className="flex-1 h-[2px] flex bg-white/20">
                      <div className="h-full bg-white pointer-events-none transition-all ease-linear duration-200 w-[--video-progress]" />
                    </div>
                  </div>
                  <button
                    className="w-8 h-6 flex items-center justify-center"
                    onClick={() => {
                      update("isAudioEnabled", !videoState.isAudioEnabled);
                    }}
                  >
                    {!videoState.isAudioEnabled ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="18.9"
                        fill="none"
                        viewBox="0 0 100 126"
                      >
                        <path
                          fill="#fff"
                          d="M71.4 15 36.6 43.5l-22.1 2.1v33.3l56.9-41.8zM71.4 56.1l24-17.6-6.1-8.2L5 92.1l6.1 8.301 25.6-18.8L71.4 110z"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="18.9"
                        fill="none"
                        viewBox="0 0 100 126"
                      >
                        <path
                          fill="#fff"
                          d="m48.6 23.764-26.4 21.6-14.8 1.4c-3.1.3-5.4 2.9-5.4 5.9v20c0 3.1 2.3 5.7 5.4 5.9l14.8 1.4 26.4 21.6c2.2 1.8 5.4.2 5.4-2.6v-72.7c-.1-2.7-3.3-4.3-5.4-2.5M73.5 38.565c-.7-.9-2.1-1.1-3-.3l-3.6 3.2c-.8.7-.9 1.9-.2 2.8 4 5 6.4 11.4 6.4 18.3s-2.4 13.3-6.4 18.3c-.7.8-.6 2.1.2 2.8l3.6 3.2c.9.8 2.2.7 3-.3 5.3-6.6 8.5-15 8.5-24.1s-3.1-17.3-8.5-23.9"
                        ></path>
                        <path
                          fill="#fff"
                          d="M84.5 28.365c-.7-.9-2.1-.9-2.9-.2l-3.6 3.3c-.8.7-.9 2-.2 2.8 6.4 7.7 10.2 17.6 10.2 28.3s-3.8 20.6-10.2 28.3c-.7.9-.6 2.1.2 2.8l3.6 3.3c.8.8 2.2.7 2.9-.2 7.8-9.3 12.5-21.2 12.5-34.3s-4.7-24.8-12.5-34.1"
                        ></path>
                      </svg>
                    )}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
