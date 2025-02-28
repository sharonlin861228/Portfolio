"use client";

import "next-cloudinary/dist/cld-video-player.css";
import SectionDivider from "@/common/components/shared/section-divider";
import { useSectionInView } from "@/common/lib/hooks";
import { useActiveSectionContext } from "@/common/stores/active-section";
import { smoothScrollTo } from "@/common/lib/utils";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import Image from "next/image";
import portfolioImg from "@/../public/images/photo.jpg";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";

export default function Hero() {
  const { ref } = useSectionInView("home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <>
      <section
        className="relative flex h-screen w-full scroll-mt-36 flex-col items-center justify-center"
        id="home"
        ref={ref}
      >
        {/* <div
          className={
            "absolute left-0 top-0 h-screen w-full dark:bg-[#8a7e7e7c]"
          }
        ></div> */}
        <video
          width="480"
          height="720"
          preload="none"
          autoPlay
          crossOrigin="anonymous"
          muted
          loop
          className="absolute -z-0 h-screen w-screen object-cover"
        >
          <source src="/layout.mp4"/>
        </video>

        <div className="mb-24 mt-36 grid sm:grid-cols-2">
          {/* <div class="my-24 grid grid-cols-1 gap-6 sm:grid-cols-2"> */}
          
          {/* 左邊 PDF 預覽 */}
            <div className="w-full space-y-4">
        <div className="container flex flex-col items-start justify-center tracking-wide text-black dark:text-white">
          
          <div className="container relative flex h-full w-full flex-col">
          {/* <div className="container relative flex h-full w-full flex-col">
            <h1 className='text-white mb-20 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-left inline-block'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                Hello, I‘m{" "}
              </span>
            </h1>
          </div> */}
            <div className="container absolute mb-20 flex h-full w-full flex-col">
            <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold text-left inline-block'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                Hello, I‘m{" "}
              </span> 
            </h1>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold text-left'>
                <TypeAnimation
                  sequence={[
                    'Sharon',
                    1000,
                    'jwifjeklfl',
                    1000,
                    'Pqwertyuio;lkjhrgevbwankml,',
                    1000,
                    'hihi',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
            </h1>
            </div>
            
          </div>
            
        <div className="flex gap-4 -z-0 mt-40 ml-16">
                <a
                  className="group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-darkBg px-7 py-3 text-white outline-none transition hover:bg-lightBeige hover:text-black hover:dark:text-black sm:w-auto"
                  onClick={(e) => {
                    smoothScrollTo({ e, id: "contact" });
                    setActiveSection("contact");
                    setTimeOfLastClick(Date.now());
                                  }}
                >
                  <span>Contact me here</span>
                </a>
     
                <a
                  className="borderBlack group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-black outline-none transition hover:bg-gray-100 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:w-auto"
                  href="/CV_Sharon.pdf"
                  download
                >
                  <span>Download CV</span>
                </a>

                <a
                  className="borderBlack flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-2 text-black transition hover:bg-gray-100 hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20"
                  href="https://www.linkedin.com/in/sharon-lin-896aa91b6/"
                  target="_blank"
                >
                  <Linkedin />
                </a>

                <a
                  className="borderBlack flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-2 text-gray-700 transition hover:bg-gray-100 hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20"
                  href="https://github.com/bbyc4kes"
                  target="_blank"
                >
                  <Github />
                </a>
        </div>
      </div>     
      </div>
          <div className="w-2/3 ml-40">  
                <div className='ml-auto col-span-5 -mt-0 lg:-mt-8'> {/* Negative margin to move it up further */}
                  <div className='rounded-full w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] relative ml-auto'>
                    <Image
                      src={portfolioImg}
                      alt='hero image1'
                      className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    />
                  </div>
                </div>

            {/* </motion.div> */}
          </div>
        </div>

      </section>

      
      
      <SectionDivider />
    </>
  );
}
