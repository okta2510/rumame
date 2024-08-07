// pages/index.js
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { library} from '@fortawesome/fontawesome-svg-core'
import { faPlayCircle  } from '@fortawesome/free-solid-svg-icons'
import { faInstagram  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faInstagram, faPlayCircle)


export default function Home() {
  const [cards, setCards] = useState([1,2,3,4,5]);
  
  useEffect(() => {
  }, []);

  return (
    <div className="wrapper py-[30px]">
      <div className='section-header mb-[24px]'>
        <div className='flex justify-between items-center text-[16px]'>
        <span className='flex items-center gap-[10px]'>
        <FontAwesomeIcon
          icon={faInstagram}
          className="ml-2 h-[32px] text-[#4C3494] capitalize"/>
          Reels
        </span>
        <span className='inline-block'>right action</span>
      </div>
    </div>
    <div className='section-content flex gap-2 max-w-[100%] overflow-x-auto pb-[20px]'>
      {cards.map((item, index) => (
        <div key={'card-reels-'+index} className='card'>
            <div className='box relative flex flex-col w-[370px] h-[475px] bg-[#ccc] rounded-md text-center'>
              <div className='w-full grow flex items-center justify-center'>
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  className="ml-2 h-[60px] text-[#fff] opacity-55"/>
              </div>
              <span name="title" className='reels-title block text-[#4C3494] text-left  w-full p-[30px] text-[28px] font-bold'>
              Rumah 5 Menit dari MRT  Tanpa Dp - {item} juta
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
