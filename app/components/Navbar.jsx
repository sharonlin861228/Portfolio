import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

const navLinks = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/blog", title: "Blog" },
    { path: "/contact", title: "Contact" }
];

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
            <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'>
                logo
            </Link>
                <div className='menu md:w-auto' id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link, index) => (
                        <li key={index}>
                        <NavLink href={link.path} title={link.title} />
                        </li>
                        ))
                    }
                    </ul>
                </div>    
        </div>
    </nav>
  )
}

export default Navbar