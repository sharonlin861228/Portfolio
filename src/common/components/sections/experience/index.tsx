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




export default function Experience() {
  const { ref } = useSectionInView('experience');
  const { theme } = useTheme();
  const ihasMounted = useHasMounted();

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full scroll-mt-20 dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>My experience</SectionHeading>

      <iframe
        src= "CV_Sharon.pdf"
        width="100%"
        height="1000px"
      >
  <p>Your browser does not support iframes. You can <a href="/path/to/your/file.pdf">download the PDF</a> instead.</p>
</iframe>
      
    </section>
  );
}
