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
    kpr: false,
    products: false,
  });
  const [collapse, setCollapse] = useState({
    kpr: false,
    products: false,
  });
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const ToggleCollapse = (dropdown) => {
    setCollapse((prevState) => ({
      ...prevState,
      [dropdown]: !collapse[dropdown],
    }));
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
      <div className="container px-[15px] mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 md:flex align-middle items-center">
            <Link className='md:mr-[30px]' href="/">
              <span className="text-xl font-bold text-gray-900">
                <Image src='/logo.png' width={145} height={49} alt="logo" className='w-auto h-[49px]'></Image>
              </span>
            </Link>
            <div className='hidden md:flex md:space-x-4 nav-link mt-[10px]'>
              <div className="relative w-100 py-2" onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={() => handleMouseLeave('products')}>
                <button className="text-gray-800 hover:text-gray-900 focus:outline-none w-100">
                    Cari Properti <FontAwesomeIcon
                    icon={dropdowns.products ? faAngleUp : faAngleDown}
                    className="ml-2 h-[20px]"/>
                  </button>
                  {dropdowns.products && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-10 rounded-b-md">
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
              <div className="relative w-100 py-2" onMouseEnter={() => handleMouseEnter('kpr')}
              onMouseLeave={() => handleMouseLeave('kpr')}>
                <button className="text-gray-800 hover:text-gray-900 focus:outline-none w-100">
                Kpr & Take Over <FontAwesomeIcon
                    icon={dropdowns.kpr ? faAngleUp : faAngleDown}
                    className="ml-2 h-[20px]"/>
                </button>
                {dropdowns.kpr && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-10 rounded-b-md">
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
                <span className="text-gray-800 hover:text-gray-900 inline-block py-2">Rumame For Business</span>
              </Link>
              <Link href="/refferal">
                <span className="text-gray-800 hover:text-gray-900 inline-block py-2">Refferal</span>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex md:space-x-4">
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
          <Link className="!mb-3 block" href="#" onClick={() => ToggleCollapse('products')}>
            <span className="block text-gray-800 hover:text-gray-900">Cari Properti <FontAwesomeIcon
                    icon={collapse.products ? faAngleUp : faAngleDown}
                    className="ml-2 h-[20px]"/></span>
          </Link>
          {collapse.products && (
            <div className="!mb-3 left-0 mt-2 w-full">
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
          <Link className="!mb-3 block" href="#" onClick={() => ToggleCollapse('kpr')}>
          <span className="block text-gray-800 hover:text-gray-900"> Kpr & Take Over <FontAwesomeIcon
                    icon={collapse.kpr ? faAngleUp : faAngleDown}
                    className="ml-2 h-[20px]"/></span>
          </Link>
            {collapse.kpr && (
            <div className="!mb-3 left-0 mt-2 w-full">
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