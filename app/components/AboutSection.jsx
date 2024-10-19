"use client";
import React, {useTransition, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import heroimage from '../public/images/hero-image.png'
import TabButton from '../components/TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id:"skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>nodejs</li>
                <li>jave</li>
                <li>figma</li>
                <li>javascript</li>
                <li>nodejs</li>
                <li>nodejs</li>
            </ul>
        )
    },
    {
        title: "Education",
        id:"education",
        content: (
            <ul className='list-disc pl-2'>
                <li>nodejs</li>
                <li>jave</li>
                <li>my</li>
                <li>javascript</li>
                <li>nodejs</li>
                <li>nodejs</li>
            </ul>
        )

    },
    {
        title: "haha",
        id:"haha",
        content: (
            <ul className='list-disc pl-2'>
                <li>nodejs</li>
                <li>sharon</li>
                <li>figma</li>
                <li>javascript</li>
                <li>nodejs</li>
                <li>nodejs</li>
            </ul>
        )

    },{
        title: "yoyo",
        id:"yoyo",
        content: (
            <ul className='list-disc pl-2'>
                <li>nodejs</li>
                <li>jave</li>
                <li>figma</li>
                <li>javascript</li>
                <li>nodejs</li>
                <li>nodejs</li>
            </ul>
        )

    }
]


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };


  return (
    <section className='text-white '>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image
                src={heroimage}
                width={500}
                height={500}
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>
                    About me
                </h2>
                <p className='text-base lg:text-lg'>
                    hkfkenkfnejfkjerngkfjvrnjfknwrke Visual Studio Code MacOS 快捷键速查图 ... 14. **代码折叠/展开展开代码块。 15. **查找
                    Missing: 外面
                </p>
                <div className='flex flex-row mt-8'>
                    <TabButton
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}
                    >
                        Skills
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}
                    >
                        Skills
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("haha")}
                        active={tab === "haha"}
                    >
                        haha
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("yoyo")}
                        active={tab === "yoyo"}
                    >
                        yoyo
                    </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
           
            </div>


        </div>

    </section>
  )
}

export default AboutSection