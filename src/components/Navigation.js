"use client";

import React, { useState }  from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 md:flex align-middle items-center">
            <Link className='lg:mr-[30px]' href="/">
              <span className="text-xl font-bold text-gray-900">
                <Image src='/logo.png' width={145} height={49} alt="logo" className='w-auto h-[49px]'></Image>
              </span>
            </Link>
            <div className='hidden md:flex md:space-x-4 nav-link mt-[10px]'>
              <Link href="/">
                <span className="text-gray-800 hover:text-gray-900">Home</span>
              </Link>
              <Link href="/about">
                <span className="text-gray-800 hover:text-gray-900">About</span>
              </Link>
              <Link href="/services">
                <span className="text-gray-800 hover:text-gray-900">Services</span>
              </Link>
              <Link href="/contact">
                <span className="text-gray-800 hover:text-gray-900">Contact</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-4">
            <Link href="/">
              <Image src='/button-cta-nav.png' width={145} height={49} alt="btn-cta" className='w-auto h-[49px]'></Image>
            </Link>
          </div>
          <div className="flex md:hidden" name="button-toggle">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-900 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <span className="block text-gray-800 hover:text-gray-900">Home</span>
          </Link>
          <Link href="/about">
            <span className="block text-gray-800 hover:text-gray-900">About</span>
          </Link>
          <Link href="/services">
            <span className="block text-gray-800 hover:text-gray-900">Services</span>
          </Link>
          <Link href="/contact">
            <span className="block text-gray-800 hover:text-gray-900">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;