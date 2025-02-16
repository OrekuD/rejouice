"use client";

import {
  EightVCLogo,
  HyperFrameLogo,
  Logo,
  MoxionLogo,
  OuraLogo,
  OVLoopLogo,
  ProofLogo,
  RappiLogo,
  RivianLogo,
} from "@/components/icons";
import { useWindowResize } from "@/hooks/useWindowResize";
import {
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { motion } from "framer-motion";
import { HighlightCard } from "@/components/highlight-card";
import rivianImage from "../../public/images/rivian.webp";
import ouraImage from "../../public/images/oura.webp";
import moxionImage from "../../public/images/moxion.webp";
import React from "react";

const headerLinks = ["Home", "Work", "About", "Services", "Contact"];

const clients = [
  {
    scale: 1.3,
    logo: RivianLogo,
    name: "Rivian",
  },
  {
    scale: 1.3,
    logo: OuraLogo,
    name: "Oura",
  },
  {
    scale: 1.3,
    logo: MoxionLogo,
    name: "Moxion",
  },
  {
    scale: 0.9,
    logo: EightVCLogo,
    name: "8VC",
  },
  {
    scale: 0.3,
    logo: RappiLogo,
    name: "Rappi",
  },
  {
    scale: 0.3,
    logo: HyperFrameLogo,
    name: "HyperFrame",
  },
  {
    scale: 1.3,
    logo: OVLoopLogo,
    name: "OVLoop",
  },
  {
    scale: 0.35,
    logo: ProofLogo,
    name: "Proof",
  },
];

export default function Home() {
  const { scrollY } = useScroll();
  const { height } = useWindowResize();
  const showcaseReelRef = React.useRef<HTMLDivElement>(null);
  const showcaseReelInView = useInView(showcaseReelRef);
  const { scrollYProgress: showcaseReelScrollYProgress } = useScroll({
    target: showcaseReelRef,
    // offset: ["start end", "end start"],
    offset: ["start end", "end start"],
  });

  const showcaseReelClipPath = useTransform(
    showcaseReelScrollYProgress,
    [0, 0.4],
    ["inset(10%)", "inset(0%)"],
  );

  React.useEffect(() => {
    if (showcaseReelInView) {
      console.log("showcaseReelInView", showcaseReelInView);
    }
  }, [showcaseReelInView]);

  // useMotionValueEvent(showcaseReelScrollYProgress, "change", (v) => {
  //   console.log("-v", v);
  // });

  // useMotionValueEvent(showcaseReelClipPath, "change", (v) => {
  //   console.log("-cl", v);
  // });

  const videoContainerTranslateY = useTransform(
    scrollY,
    [0, height],
    [-height * 0.5, 0],
  );

  return (
    <div className="">
      <header className="fixed top-0 left-0 z-50 w-full flex items-center justify-between py-8 px-9 text-sm">
        <Logo size={70} className="mix-blend-difference text-white" />
        <div className="flex items-center gap-1 ml-44">
          {headerLinks.map((headerLink) => (
            <Link
              href="#"
              key={headerLink}
              className="mix-blend-difference text-white"
            >
              {headerLink}
            </Link>
          ))}
        </div>
        <p className="mix-blend-difference text-white">
          <span>↗ </span>Let's talk
          <span>↗</span>
        </p>
      </header>

      <motion.div
        className="pt-20 px-9 h-[90dvh] z-20 relative bg-black flex flex-col pb-8"
        style={{
          zIndex: 2,
        }}
      >
        <svg
          id="Calque_1"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 1358 217"
          fill="white"
          className="w-full"
          data-v-b7c81db9=""
        >
          <path d="M1358,102.2c0-50.7-30.6-101.4-97-102.2-57.6-.8-101,40.4-101,108.1s46.9,108.9,102.1,108.9,87.4-29.3,94.6-70.9h-35.8c-6.8,24.2-25.8,38.8-58,38.8s-63.2-19.8-66.4-65.3h160.2c.8-5.9,1.2-11.5,1.2-17.4ZM1197.4,89.5c5.2-40.8,30.2-57.4,62.8-57.4s56.4,16.2,60.8,57.4h-123.6Z"></path>
          <path d="M1045.4,32.1c31.4,0,57.6,12.7,62.4,50.7h35.4C1139.2,26.5,1097.5,0,1046.2,0s-102.1,39.2-102.1,108.1,46.9,108.9,102.5,108.9,92.6-31.7,96.6-88.7h-35.4c-5.2,38-30.2,56.6-62,56.6s-65.6-25.3-65.6-76.4,29.8-76.4,65.2-76.4Z"></path>
          <rect x="889.3" y="5.6" width="35" height="205.9"></rect>
          <path d="M826.5,122.4c0,45.9-22.7,63-54.8,63s-54.8-17-54.8-63V5.6h-35v123.9c0,63.4,48.5,87.5,89.8,87.5s89.8-24.2,89.8-87.5V5.6h-35v116.8Z"></path>
          <path d="M556.4,0c-54.8,0-102.5,39.2-102.5,108.1s47.7,108.9,102.5,108.9,102.5-40,102.5-108.9S611.2,0,556.4,0ZM556.4,184.9c-35.8,0-66.4-25.3-66.4-76.4s30.6-76.4,66.4-76.4,66.4,23.4,66.4,76.4-30.6,76.4-66.4,76.4Z"></path>
          <path d="M395,118.8c0,39.6-20.3,61-52.5,61h-21.5v34.1h20.7c42.5,0,88.2-26.9,88.2-92.3V5.6h-35v113.2Z"></path>
          <path d="M216.8,0c-57.6-.8-100.9,40.4-100.9,108.1s46.9,108.9,102.1,108.9,87.4-29.3,94.6-70.9h-35.8c-6.8,24.2-25.8,38.8-58,38.8s-63.2-19.8-66.4-65.3h160.2c.8-5.9,1.2-11.5,1.2-17.4C313.7,51.5,283.1.8,216.8,0ZM153.2,89.5c5.2-40.8,30.2-57.4,62.8-57.4s56.4,16.2,60.8,57.4h-123.6Z"></path>
          <path d="M0,95.4v116h35v-113.2c0-39.6,20.3-61,52.5-61h21.5V3.2h-20.7C45.7,3.2,0,30.1,0,95.4Z"></path>
        </svg>

        <div className="mt-auto flex items-end text-white/80 leading-[1] gap-10">
          <div>
            <p>Strategy, Design,</p>
            <p>and Performance.</p>
          </div>
          <div>
            <p>Two Engagement</p>
            <p>Models: Cash or Equity</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="none"
            viewBox="0 0 12 12"
            className="ml-auto"
          >
            <path
              fill="currentColor"
              d="m5.796 9.246-2.97-2.97-.762.782 4.356 4.356 4.356-4.356-.782-.782-2.96 2.96V1.039H5.806z"
            ></path>
          </svg>
        </div>
      </motion.div>
      <motion.div className="h-[105dvh] w-full -z-10 relative">
        <motion.video
          className="w-full h-full object-cover"
          loop={true}
          autoPlay={true}
          playsInline={true}
          draggable={false}
          muted={true}
          controls={false}
          style={{
            translateY: videoContainerTranslateY,
          }}
        >
          <source
            src="https://www.rejouice.com/static/reel-short.mp4"
            type="video/mp4"
          />
        </motion.video>
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center text-6xl text-white">
          Showreel
        </p>
      </motion.div>

      <div className="px-10 mb-48 pt-14 relative z-20">
        <p className="text-6xl leading-none">
          <span className="opacity-0">something</span> We blend the power of
          strategy, design, and performance marketing to transform founders'
          visions into remarkable brands. See <span>our services.</span>
        </p>
        <div className="w-full h-[1px] mt-14 bg-[#494949] " />
        <div className="pt-6 text-lg grid grid-cols-2">
          <p>Tomorrow's brands, today.</p>
          <div className="space-y-4 max-w-[340px]">
            <p>We are a growth accelerator.</p>
            <p>
              Since 2013, we have been recognized globally for helping founders
              build market-defining brands that drive sustainable revenue and
              shape culture.
            </p>
            <p>
              In 2023, we launched our Venture Model to further support
              founders.
            </p>
            <p>
              We partner with five clients a year to give each one the focus and
              care they deserve.
            </p>
            <p>Learn more</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-lg mt-40 mb-3">
          <p>Highlights</p>
          <p>See the work</p>
        </div>
        <div className="space-y-5">
          <HighlightCard
            image={rivianImage}
            logo={<RivianLogo scale={1.5} />}
            aspectRatio="136 / 87.3"
          />
          <div className="grid grid-cols-2 gap-5">
            <HighlightCard
              image={ouraImage}
              logo={<OuraLogo scale={1.5} />}
              aspectRatio="67 / 87"
            />
            <HighlightCard
              image={moxionImage}
              logo={<MoxionLogo scale={1.5} />}
              aspectRatio="67 / 87"
            />
          </div>
        </div>
      </div>
      <div className="bg-white text-black pt-44">
        <div className="flex items-center justify-between mb-44 px-14">
          {clients.map(({ logo: Logo, name, scale }) => {
            return <Logo scale={scale} key={name} color="black" />;
          })}
        </div>

        <div className="px-14 text-xl">
          <div className="h-[1px] w-full bg-[#C6C6C6]" />
          <div className="flex items-center justify-between flex-wrap pt-4">
            <p>Rejouice at a Glance.</p>
            <a href="#">hello@rejouice.com</a>
          </div>
          <div className="h-[400px] bg-black mt-6"></div>
          <p className="text-6xl leading-none mt-24 mb-24">Our approach.</p>
          <div className="h-[1px] w-full bg-[#C6C6C6]" />
          <div className="grid grid-cols-2 text-lg leading-tight pt-4">
            <div>
              <p>A simple philosopy:</p>
              <p>quality over quantity</p>
            </div>
            <p className="max-w-[400px]">
              We build brands that set new benchmarks. To do so, we don’t do
              volume. We partner with only five clients a year, ensuring
              unmatched focus, precision, and impact. Every detail is crafted,
              every decision strategic, and every outcome transformative.
            </p>
          </div>
          <div className="h-[1px] w-full bg-[#C6C6C6] mt-8" />
          <div className="grid grid-cols-2 text-lg leading-tight pt-4 mb-24">
            <div>
              <p>Performance & emotion.</p>
              <p>You need both.</p>
            </div>
            <p className="max-w-[400px]">
              Data is vital. Fostering an emotional connection with your
              audience is equally vital if you want to drive retention and
              advocacy. That’s why we create brands that not only captivate but
              also deliver measurable and sustainable growth.
            </p>
          </div>
          <div ref={showcaseReelRef}>
            <motion.div
              className=""
              style={{
                clipPath: showcaseReelClipPath,
              }}
            >
              <video
                className="w-full"
                style={{
                  aspectRatio: "1360 / 766",
                }}
                loop={true}
                autoPlay={true}
                playsInline={true}
                draggable={false}
                muted={true}
                controls={false}
              >
                <source
                  src={
                    "https://rejouice-2024.cdn.prismic.io/rejouice-2024/Z2BbT5bqstJ98kk6_REJOUICE-PORTFOLIO-LOOP-PROJECTS.mp4"
                  }
                  type="video/mp4"
                  className="w-full h-full"
                />
              </video>
            </motion.div>
          </div>
          <div
            className="py-72 text-center text-6xl underline"
            style={{
              textDecorationThickness: 2,
              textUnderlineOffset: 8,
            }}
          >
            <p className="pb-2">Get to know us</p>
          </div>
        </div>
      </div>
      <footer className="px-10 pb-10 pt-16 text-white">
        <div className="grid grid-cols-4 mb-36">
          <div className="col-span-3">
            <p className="text-4xl mb-16">Do it once. Do it right.</p>
            <p className="text-sm font-normal">New Business:</p>
            <a href="#" className="text-sm font-normal">
              hello@rejouice.com
            </a>
            <div className="mt-6">
              <p className="text-sm font-normal">
                Sign up for our newsletter (No spam)
              </p>
              <div className="flex items-center border-b border-white mt-4 w-fit">
                <input
                  type="text"
                  className="w-[340px] h-[40px] text-sm font-normal bg-none outline-none text-white placeholder:text-[#53575E]"
                  placeholder="Email"
                />
                <button>→</button>
              </div>
            </div>
          </div>
          <div className="lg:px-6">
            <div className="flex justify-between mb-24">
              <div>
                <Link href="#" className="block text-sm font-normal">
                  Home
                </Link>
                <Link href="#" className="block text-sm font-normal">
                  Work
                </Link>
                <Link href="#" className="block text-sm font-normal">
                  About
                </Link>
                <Link href="#" className="block text-sm font-normal">
                  Services
                </Link>
                <Link href="#" className="block text-sm font-normal">
                  Contact
                </Link>
              </div>
              <div>
                <Link href="#" className="block text-sm font-normal">
                  Instagram
                </Link>
                <Link href="#" className="block text-sm font-normal">
                  LinkedIn
                </Link>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="block">San Diego—USA</p>
                <p className="block">Paris—France</p>
              </div>
              <div>
                <p className="block">Terms of use</p>
                <p className="block">©13—25</p>
              </div>
            </div>
          </div>
        </div>
        <svg
          id="Calque_1"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 1358 217"
          fill="white"
          className="w-full"
          data-v-b7c81db9=""
        >
          <path d="M1358,102.2c0-50.7-30.6-101.4-97-102.2-57.6-.8-101,40.4-101,108.1s46.9,108.9,102.1,108.9,87.4-29.3,94.6-70.9h-35.8c-6.8,24.2-25.8,38.8-58,38.8s-63.2-19.8-66.4-65.3h160.2c.8-5.9,1.2-11.5,1.2-17.4ZM1197.4,89.5c5.2-40.8,30.2-57.4,62.8-57.4s56.4,16.2,60.8,57.4h-123.6Z"></path>
          <path d="M1045.4,32.1c31.4,0,57.6,12.7,62.4,50.7h35.4C1139.2,26.5,1097.5,0,1046.2,0s-102.1,39.2-102.1,108.1,46.9,108.9,102.5,108.9,92.6-31.7,96.6-88.7h-35.4c-5.2,38-30.2,56.6-62,56.6s-65.6-25.3-65.6-76.4,29.8-76.4,65.2-76.4Z"></path>
          <rect x="889.3" y="5.6" width="35" height="205.9"></rect>
          <path d="M826.5,122.4c0,45.9-22.7,63-54.8,63s-54.8-17-54.8-63V5.6h-35v123.9c0,63.4,48.5,87.5,89.8,87.5s89.8-24.2,89.8-87.5V5.6h-35v116.8Z"></path>
          <path d="M556.4,0c-54.8,0-102.5,39.2-102.5,108.1s47.7,108.9,102.5,108.9,102.5-40,102.5-108.9S611.2,0,556.4,0ZM556.4,184.9c-35.8,0-66.4-25.3-66.4-76.4s30.6-76.4,66.4-76.4,66.4,23.4,66.4,76.4-30.6,76.4-66.4,76.4Z"></path>
          <path d="M395,118.8c0,39.6-20.3,61-52.5,61h-21.5v34.1h20.7c42.5,0,88.2-26.9,88.2-92.3V5.6h-35v113.2Z"></path>
          <path d="M216.8,0c-57.6-.8-100.9,40.4-100.9,108.1s46.9,108.9,102.1,108.9,87.4-29.3,94.6-70.9h-35.8c-6.8,24.2-25.8,38.8-58,38.8s-63.2-19.8-66.4-65.3h160.2c.8-5.9,1.2-11.5,1.2-17.4C313.7,51.5,283.1.8,216.8,0ZM153.2,89.5c5.2-40.8,30.2-57.4,62.8-57.4s56.4,16.2,60.8,57.4h-123.6Z"></path>
          <path d="M0,95.4v116h35v-113.2c0-39.6,20.3-61,52.5-61h21.5V3.2h-20.7C45.7,3.2,0,30.1,0,95.4Z"></path>
        </svg>
      </footer>
    </div>
  );
}
