'use client';

import { useRef } from 'react';
import { productsData } from '@/common/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

type ProductProps = (typeof productsData)[number];

export default function Product({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProductProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 last:mb-0 sm:mb-6"
    >
      <Link href={link} target="_blank">
        <section
          className={
            'relative max-w-[58rem] overflow-hidden rounded-lg border transition hover:bg-gray-200 dark:hover:bg-primary-foreground sm:h-[9rem]'
          }
        >
          <div className="flex h-full flex-col px-5 pb-7 sm:max-w-[80%] sm:pl-10 sm:pr-10 sm:pt-5 sm:group-even:ml-[10rem]">
            <h3 className="text-2xl pt-1 font-semibold uppercase"> {title}</h3>
            <p className="text-base mt-2 leading-relaxed">{description}</p>
            <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="rounded-full bg-[#ffcbb4] px-3 py-1 text-[0.7rem] uppercase tracking-wider dark:bg-[#ddbea9] dark:text-black"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Products"
            quality={95}
            className="absolute right-14 top-5 mb-3 hidden w-[6rem] rounded-t-lg transition group-even:left-12 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
          />
        </section>
      </Link>
    </motion.div>
  );
}
