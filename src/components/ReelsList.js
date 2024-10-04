// pages/index.js
"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { library} from '@fortawesome/fontawesome-svg-core'
import { faPlayCircle  } from '@fortawesome/free-solid-svg-icons'
import { faInstagram  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faInstagram, faPlayCircle)


export default function Reels() {
  const [cards, setCards] = useState([1,2,3,4,5,6,7,8,9,10]);
  const scrollContainerRef = useRef(null);
  const scrollSpeed = 2; // Adjust the scroll speed as needed

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval = -1;

    const startScrolling = () => {
      if (!scrollInterval|| scrollInterval === -1) {
        stopScrolling()
        scrollInterval = -1
        scrollInterval = setInterval(() => {
          const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
          if ((scrollContainer.scrollLeft + 10) >= maxScrollLeft) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += scrollSpeed;
          }
        }, 50); // Adjusted for smoother performance
      }
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
      scrollInterval = -1
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('mouseenter', stopScrolling);
      scrollContainer.addEventListener('mouseleave', startScrolling);
      startScrolling();
    }

    return () => {
      clearInterval(scrollInterval);
      scrollInterval = -1
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', stopScrolling);
        scrollContainer.removeEventListener('mouseleave', startScrolling);
      }
    };
  }, [scrollContainerRef]);

  

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
    <div
      className='section-content flex gap-3 max-w-[100%] overflow-x-scroll pb-[20px]'
      ref={scrollContainerRef}
    >
      {cards.map((item, index) => (
        <div key={'card-reels-' + index} className='card'>
          <style jsx>{`
            .box-reels {
              background: url('/reels.png');
              background-size: cover;
              background-position: center;
            }
          `}</style>
          <div className='box box-reels relative flex flex-col w-[370px] h-[475px] bg-[#ccc] rounded-md text-center'>
            <div className='flex items-center justify-center w-full grow'>
              <Link href={'#'}>
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  className="h-[60px] text-[#fff] opacity-55 p-10 hover:cursor-pointer"
                />
              </Link>
            </div>
            {/* <Link href={'#'} name="title" className='reels-title block text-[#4C3494] text-left w-full p-[30px] text-[28px] font-bold'>
              Rumah 5 Menit dari MRT Tanpa Dp - {item} juta
            </Link> */}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
