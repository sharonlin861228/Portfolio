"use client";

import React from "react";
import { skillsData } from "@/common/lib/data";
import { useSectionInView } from "@/common/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/common/components/shared/section-heading";
import SectionDivider from "@/common/components/shared/section-divider";


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("certificates");

  return (
    <section
      id="certificates"
      ref={ref}
      className="flex w-full flex-col items-center justify-center py-24 pb-[150px] text-center dark:bg-darkBg dark:text-white sm:pb-40"
    >
      <SectionHeading>My certificates</SectionHeading>

      <div className="flex gap-20 flex-wrap justify-center items-center">

        <div className="card w-96 shadow-xl ml-25 rounded-xl  bg-gray-200 px-5 py-3 dark:bg-white/10 dark:text-white/80">
          <figure className="px-15 pt-15">
            <img
              src="/images/pmp.jpg"
              alt="pmp"
              className="rounded-xl" />
          </figure>
          <div className=" card-body items-center text-center">
            <h2 className="card-title text-3xl font-bold bg-clip-text bg-gradient-to-r pt-4">PMP</h2>
            <div className="card-actions">
              <button className="btn bg-gray-200 text-black px-5 py-3 dark:bg-white/10 dark:text-white/80">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl ml-25 rounded-xl">
          <figure className="px-15 pt-15">
            <img
              src="/images/pmp.jpg"
              alt="pmp"
              className="rounded-xl" />
          </figure>
          <div className=" card-body items-center text-center">
            <h2 className="card-title text-3xl font-bold bg-clip-text bg-gradient-to-r pt-4">PMP</h2>
            <div className="card-actions mt-4">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl ml-25 rounded-xl">
          <figure className="px-15 pt-15">
            <img
              src="/images/pmp.jpg"
              alt="pmp"
              className="rounded-xl" />
          </figure>
          <div className=" card-body items-center text-center">
          <h2 className="card-title text-3xl font-bold bg-clip-text bg-gradient-to-r pt-4">PMP</h2>
            <div className="card-actions mt-2 py-2">
              <button className="btn btn-primary">Link</button>
            </div>
          </div>
        </div>

    </div>
    

      <ul className="my-26 mb-[150px] flex max-w-[53rem] flex-wrap items-center justify-center gap-2 text-lg text-gray-800 pt-10">
        {skillsData.map((skill, index) => (
          <motion.li
            className="borderBlack flex items-center justify-center rounded-xl bg-gray-200 px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Image
              src={skill[1]}
              alt={skill[0]}
              width={24}
              height={24}
              className="mr-2 inline h-6 w-6"
            />
            {skill[0]}
          </motion.li>
        ))}
      </ul>
      
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </section>
  );
}
