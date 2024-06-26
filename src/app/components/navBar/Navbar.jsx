'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import NavMenuOverlay from './NavMenuOverlay'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const navLinks = [
  {
    title: 'About',
    path: '#about'
  },
  {
    title: 'Projects',
    path: '#projects'
  },
  {
    title: 'Contact',
    path: '#contact'
  }
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100'>
      <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <nav>
          <a
            href={'/'}
            className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 text-2xl md:text-4xl font-semibold'
          >
            Lucas
          </a>
        </nav>
        <div className='mobile-menu block md:hidden'>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center'>
          <a href='https://github.com/Lu-Whale' className='mr-4'>
            <FaGithub size={30} className='text-white hover:text-gray-400'/>
          </a>
          <a href='https://www.linkedin.com/in/lucas-jingyu-lu/' className='mr-4'>
            <FaLinkedin size={30} className='text-white hover:text-gray-400'/>
          </a>
        </div>
      </div>
      {navbarOpen && <NavMenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />}
    </nav>

  )
}

export default Navbar
