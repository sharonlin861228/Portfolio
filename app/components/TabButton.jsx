import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Link from 'next/link'

const TabButton = ({active, selectTab, children}) => {

const buttonClasses = active 
? "text-white border-b border-purple-400"
: "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semi-bold hover:text-white ${buttonClasses}`}>
        {children}
    </p>
    </button>

  )
}

export default TabButton