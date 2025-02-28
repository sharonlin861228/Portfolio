"use client";

import React from "react";
import { useSectionInView } from "@/common/lib/hooks";
import { productsData } from "@/common/lib/data";
import Product from "./_components/product";
import SectionHeading from "@/common/components/shared/section-heading";
import SectionDivider from "@/common/components/shared/section-divider";
import { Button } from "@/common/components/ui/button"
import Link from "next/link";
import { Github } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image";
import productImg from "@/../public/images/software-product-development-steps-and-methodologies.jpg";


export default function Products() {
  const { ref } = useSectionInView("products", 0.25);

  return (
    <section
      className="flex min-h-screen w-full scroll-mt-28 flex-col items-center justify-center dark:bg-darkBg dark:text-white"
      id="products"
      ref={ref}
    >
      {/* <SectionHeading>Products</SectionHeading> */}

      {/* <div className="px-5 pb-7 pt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"> */}

         {/* 父容器：左右佈局 */}
         <div className="mb-24 mt-36 grid grid-col-1 gap-0 sm:grid-cols-2">
          {/* <div class="my-24 grid grid-cols-1 gap-6 sm:grid-cols-2"> */}
          
          {/* 左邊 PDF 預覽 */}
            <div className="w-8/9 flex flex-col space-y-4 ml-72">
            <div className="container mx-auto my-0 mt-96 relative flex h-full w-full flex-col">
            <h1 className='text-black mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold sm:text-left'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Product Roadmap
              </span>
            <br></br>
                {/* <TypeAnimation
                  sequence={[
                    'Sharon',
                    1000,
                    'Product Manager',
                    1000,
                    'Project Manager',
                    1000,
                    'Full-Stack Developer',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                /> */}
            </h1>
            <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-4xl font-extrabold sm:text-left">
            A 6 Steps Approach for Product Management
            </h1>
            
          </div>
            </div>
      
          {/* 右邊補充內容 */}
          <div className="w-2/3 ml-40">
        {productsData.map((project, index) => (
          <React.Fragment key={index}>
            <Product {...project} />
          </React.Fragment>
        ))}
        </div>
      </div>



       {/* <div className="my-0 ml-0 grid grid-cols-1 gap-6 sm:grid-cols-2">
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
        </div> */}




      
      <div className="mt-[0px]">
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
