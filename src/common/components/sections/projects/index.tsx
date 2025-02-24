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

      <div className="my-24 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <div className="mt-[-50px]">
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
