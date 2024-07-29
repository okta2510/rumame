"use client";

import React, { useState }  from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { library} from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faAngleDown, faAngleUp  } from '@fortawesome/free-solid-svg-icons'
import { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faCoffee)

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    services: false,
    products: false,
  });
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleMouseEnter = (dropdown) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [dropdown]: true,
    }));
  };

  const handleMouseLeave = (dropdown) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [dropdown]: false,
    }));
  };

  return (
    <nav className="block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 md:flex align-middle items-center">
            <Link className='md:mr-[30px]' href="/">
              <span className="text-xl font-bold text-gray-900">
                <Image src='/logo.png' width={145} height={49} alt="logo" className='w-auto h-[49px]'></Image>
              </span>
            </Link>
            <div className='hidden md:flex md:space-x-4 nav-link mt-[10px]'>
              <div className="relative w-100" onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={() => handleMouseLeave('products')}>
                <button className="text-gray-800 hover:text-gray-900 focus:outline-none w-100">
                    Cari Properti <FontAwesomeIcon
                    icon={dropdowns.products ? faAngleUp : faAngleDown}
                    className="ml-2 h-[20px]"/>
                  </button>
                  {dropdowns.products && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-10">
                      <Link href="/services/service1">
                        <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Products 1</span>
                      </Link>
                      <Link href="/services/service2">
                        <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Products 2</span>
                      </Link>
                      <Link href="/services/service3">
                        <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Products 3</span>
                      </Link>
                    </div>
                  )}
              </div>
              <div className="relative w-100" onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={() => handleMouseLeave('services')}>
                <button className="text-gray-800 hover:text-gray-900 focus:outline-none w-100">
                  Services <FontAwesomeIcon
                    icon={dropdowns.services ? faAngleUp : faAngleDown}
                    className="ml-2 h-[20px]"/>
                </button>
                {dropdowns.services && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-10">
                    <Link href="/services/service1">
                      <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Service 1</span>
                    </Link>
                    <Link href="/services/service2">
                      <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Service 2</span>
                    </Link>
                    <Link href="/services/service3">
                      <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Service 3</span>
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/inquiry">
                <span className="text-gray-800 hover:text-gray-900">Rumame For Business</span>
              </Link>
              <Link href="/refferal">
                <span className="text-gray-800 hover:text-gray-900">Refferal</span>
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
        <div className="px-6 pt-2 space-y-1">
          <Link className="!mb-3 block" href="/">
            <span className="block text-gray-800 hover:text-gray-900">Home <FontAwesomeIcon icon="coffee" /></span>
          </Link>
          <Link className="!mb-3 block" href="/about">
            <span className="block text-gray-800 hover:text-gray-900">About</span>
          </Link>
          <Link className="!mb-3 block" href="/services">
            <span className="block text-gray-800 hover:text-gray-900">Services</span>
          </Link>
          <Link className="" href="/contact">
            <span className="block text-gray-800 hover:text-gray-900">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;