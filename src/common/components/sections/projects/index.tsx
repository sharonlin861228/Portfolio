"use client";

import React from "react";
import { useSectionInView } from "@/common/lib/hooks";
import { projectsData } from "@/common/lib/data";
import Project from "./_components/project";
import SectionHeading from "@/common/components/shared/section-heading";
import SectionDivider from "@/common/components/shared/section-divider";
import { Button } from "@/common/components/ui/button"
import Link from "next/link";
import { Github } from "lucide-react";


export default function Projects() {
  const { ref } = useSectionInView("projects", 0.25);

  return (
    <section
      className="flex min-h-screen w-full scroll-mt-28 flex-col items-center justify-center dark:bg-darkBg dark:text-white"
      id="projects"
      ref={ref}
    >
      <SectionHeading>Projects</SectionHeading>

      <div className="px-5 pb-7 pt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>



       <div className="my-0 ml-0 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <section
          className={
            'relative justify-content max-h-screen max-w-screen-lg overflow-hidden rounded-lg border transition hover:bg-gray-200 dark:hover:bg-primary-foreground'
          }
        >

          <div className="flex max-h-full flex-col sm:max-w-[100%] sm:group-even:ml-[18rem]">
            <iframe
              className="mx-auto my-0"
              width="832"
              height="650"
              src="https://embed.figma.com/design/nrPSsILSYjesyc5UHjYYa4?embed-host=figma-embed-docs"
              allow="fullscreen">
            </iframe>

            <h3 className="text-2xl sm:pl-10 sm:pr-2 sm:pt-2 font-semibold uppercase"> {"hi"}</h3>
            <p className="text-base sm:pl-10 sm:pr-2 sm:pt-2 leading-relaxed">{"hihi"}</p>
            <ul className="mt-4 mb-6 sm:pl-8 sm:pr-2 flex flex-wrap gap-2 sm:mt-auto">
 
                <li
                  className="rounded-full bg-[#ffcbb4] px-3 py-1 text-[0.7rem] uppercase tracking-wider dark:bg-[#ddbea9] dark:text-black">
                 HIHIHIhhhhhhh
                </li>
              </ul>
          </div>
        </section>
        <section
          className={
            'relative justify-content max-h-full max-w-fit overflow-hidden rounded-lg border transition hover:bg-gray-200 dark:hover:bg-primary-foreground'
          }
        >

          <div className="flex h-full flex-col sm:max-w-[100%] sm:group-even:ml-[18rem]">
            <iframe
              className="mx-auto my-0"
              width="832"
              height="650"
              src="https://embed.figma.com/design/nrPSsILSYjesyc5UHjYYa4?embed-host=figma-embed-docs"
              allow="fullscreen">
            </iframe>

            <h3 className="text-2xl sm:pl-10 sm:pr-2 sm:pt-2 font-semibold uppercase"> {"hi"}</h3>
            <p className="text-base sm:pl-10 sm:pr-2 sm:pt-2 leading-relaxed">{"hihi"}</p>
            <ul className="mt-4 mb-6 sm:pl-8 sm:pr-2 flex flex-wrap gap-2 sm:mt-auto">
 
                <li
                  className="rounded-full bg-[#ffcbb4] px-3 py-1 text-[0.7rem] uppercase tracking-wider dark:bg-[#ddbea9] dark:text-black">
                 HIHIHIhhhhhhh
                </li>
              </ul>
          </div>
        </section>
        </div>




      
      <div className="mt-[50px]">
        <Button variant="outline" size="lg" style={{ fontSize: '1.5rem', padding: '20px 30px' }}>
          <Link href="https://github.com/sharonlin861228" style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            Load More <Github style={{ width: '24px', height: '24px' }} />
          </Link>
        </Button>
      </div>
      



      <SectionDivider />
    </section>
  );
}
