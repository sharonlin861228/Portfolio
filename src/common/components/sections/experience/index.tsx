'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from 'next-themes';
import { useHasMounted, useSectionInView } from '@/common/lib/hooks';
import SectionHeading from '@/common/components/shared/section-heading';
//import { experiencesData } from '@/common/lib/data';
import SectionDivider from '@/common/components/shared/section-divider';
import CV_Sharon from './CV_Sharon.pdf';
import { Tag } from 'primereact/tag';


export default function Experience() {
  const { ref } = useSectionInView('experience');
  return (
    <section
    id="experience"
    ref={ref}
    className="w-full scroll-mt-28 items-center dark:bg-darkBg dark:text-white"
  >
{/* <section
      className="flex min-h-screen w-full scroll-mt-28 flex-col items-center justify-center dark:bg-darkBg dark:text-white"
      id="projects"
      ref={ref}
    ></section> */}

    <SectionHeading>My experience</SectionHeading>
    {/* 父容器：左右佈局 */}
        <div className="my-36 grid grid-col-1 gap-0 sm:grid-cols-2">
          {/* <div class="my-24 grid grid-cols-1 gap-6 sm:grid-cols-2"> */}
          
          {/* 左邊 PDF 預覽 */}
          <div className="w-8/9 flex flex-col space-y-4 ml-72">
            <iframe
              src="CV_Sharon.pdf"
              width="100%"
              height="1120px"
              className="rounded-lg shadow-md"
            />
          </div>
      
          {/* 右邊補充內容 */}
          <div className="w-2/3 flex flex-col space-y-4 ml-40">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">1984</time>
                  <div className="text-lg font-black">First Macintosh computer</div>
                  The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
                  personal computer. It played a pivotal role in establishing desktop publishing as a general
                  office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
                  in a beige case with integrated carrying handle; it came with a keyboard and single-button
                  mouse.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <time className="font-mono italic">1998</time>
                  <div className="text-lg font-black">iMac</div>
                  iMac is a family of all-in-one Mac desktop computers 
                  <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
                <li
                  className="rounded-full bg-[#ffcbb4] px-3 py-1 text-[0.7rem] uppercase tracking-wider dark:bg-[#ddbea9] dark:text-black"
                  key={1}>
                  {"hi"}
                </li>
                <li
                  className="rounded-full bg-[#ffcbb4] px-3 py-1 text-[0.7rem] uppercase tracking-wider dark:bg-[#ddbea9] dark:text-black"
                  key={1}>
                  {"hi2"}
                </li>
                <li
                  className="rounded-full bg-[#ffcbb4] px-3 py-1 text-[0.7rem] uppercase tracking-wider dark:bg-[#ddbea9] dark:text-black"
                  key={1}>
                  {"hi3"}
                </li>
            
            </ul>
                </div>
            
                  
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2001</time>
                  <div className="text-lg font-black">iPod</div>
                  The iPod is a discontinued series of portable media players and multi-purpose mobile devices
                  designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
                  8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
                  million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
                  over 20 years, the iPod brand is the oldest to be discontinued by Apple
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <time className="font-mono italic">2007</time>
                  <div className="text-lg font-black">iPhone</div>
                  iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
                  operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
                  January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
                  of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
                  accounts for 15.6% of global smartphone market share
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2015</time>
                  <div className="text-lg font-black">Apple Watch</div>
                  The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
                  tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
                  iOS and other Apple products and services
                </div>
              </li>
            </ul>
          </div>
        </div>
    <SectionDivider />
  </section>
  );
}
