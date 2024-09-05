// pages/index.js
"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { library} from '@fortawesome/fontawesome-svg-core'
import { faPlayCircle  } from '@fortawesome/free-solid-svg-icons'
import { faInstagram  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
library.add(faInstagram, faPlayCircle)


export default function Reels() {
  const [cards, setCards] = useState([1,2,3,4,5,6,7,8,9,10]);

  const testClick = function(e){
    console.log(e)
  }
  useEffect(() => {

  }, []);

  

  return (
    <div className="wrapper min-h-[400px]">
      {/* <div className='section-header mb-[24px]'>
          <div className='flex justify-between items-center text-[16px]'>
          <span className='flex items-center gap-[10px]'>
          <FontAwesomeIcon
            icon={faInstagram}
            className="ml-2 h-[32px] text-[#4C3494] capitalize"/>
            Reels
          </span>
          <span className='inline-block'>right action</span>
        </div>
      </div> */}
      <div
        className='section-content flex gap-3 max-w-[100%] overflow-x-auto pb-[20px]'
      >
      <Carousel className='custom-carousel'  showStatus={false} showArrows={true} autoPlay={true} onChange={testClick} onClickItem={testClick} onClickThumb={testClick} showThumbs={false} infiniteLoop={true} interval={3000}>
                <div>
                    <Image width={900} height={420} src="/slider.png" alt='slider-image' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <Image width={900} height={420} src="/slider.png" alt='slider-image' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <Image width={900} height={420} src="/slider.png" alt='slider-image' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
      </div>
    </div>
  );
}
