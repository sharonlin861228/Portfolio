"use client";

import React from 'react'
import Image from 'next/image'
import heroimage1 from '../public/images/hero-image1.png'
import { TypeAnimation } from 'react-type-animation';




const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7' place-self-center>
          <h1 className='text-white mb-4  text-4xl sm:text-5xl lg:text-6xl font-extrabold sm:text-left'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Hello, I‘m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Sharon',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
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
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
              my name is shaoen fjisdjlvjfknerkjwnkfnkj felnfknfklwnfk efllerglkeldkmwlm;fe
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>hire me</button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 border-white mt-3'>
              <span className='block text-white bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
              download cv
              </span>
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image
              src={heroimage1}
              alt='hero image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={350}
              height={350}
              />
          </div>
        </div>
      </div>
       

    </section>
     
  )
}

export default HeroSection