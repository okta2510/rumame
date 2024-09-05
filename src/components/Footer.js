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
    <footer className="py-8">
    <div className="container px-[15px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-lg font-bold mb-4">Rumame</h3>
          <div className='flex flex-wrap space-y-4'>
            <div className='flex flex-wrap space-y-1'>
              <h4 className='font-bold'>PT. Ruma Me Indonesia</h4>
              <p>
                AKR Tower Jl. Panjang No.5 Kebon Jeruk, 
                Special Capital Region of Jakarta, Jakarta Barat
              </p>
            </div>
            <div className=''>
              <h4 className='font-bold'>Customer Service</h4>
              <p>
              081-000-000-002<br></br>Senin - Minggu, 08.00-18.00
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Properti</h3>
          <ul>
            <li><a href="#" className="hover:underline">Service 1</a></li>
            <li><a href="#" className="hover:underline">Service 2</a></li>
            <li><a href="#" className="hover:underline">Service 3</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Products</h3>
          <ul>
            <li><a href="#" className="hover:underline">Kpr dan Take Over</a></li>
            <li><a href="#" className="hover:underline">Product 2</a></li>
            <li><a href="#" className="hover:underline">Product 3</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Bantuan</h3>
          <ul>
            <li><a href="#" className="hover:underline">Syarat dan Ketentuan</a></li>
            <li><a href="#" className="hover:underline">Artikel</a></li>
            <li><a href="#" className="hover:underline">Karir</a></li>
            <li><a href="#" className="hover:underline">Rekan Agen</a></li>
            <li><a href="#" className="hover:underline">Kerjasama</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Nav;