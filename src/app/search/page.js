// import Image from "next/image";
'use client'
import styles from './search.module.scss';
import Image from 'next/image'
import { useState } from 'react';

export default function Search() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneNumberChange = (e) => {
    // let formattedPhoneNumber = e.target.value.trim();
    let formattedPhoneNumber = e.target.value;
    // // Remove any non-numeric characters from the input
    // formattedPhoneNumber = formattedPhoneNumber.replace(/\D/g, '');
    // // Limit the input to a maximum of 16 digits
    // formattedPhoneNumber = formattedPhoneNumber.slice(0, 16);
    setPhoneNumber(formattedPhoneNumber);
  };
  const handleClick = () => {
    setIsLoading(true)
   // Your WhatsApp phone number
    // const text = encodeURIComponent(`from: ${phoneNumber} : Halo, Saya ingin dibantu cari properti. perkenalkan nama saya, ...`);

    const adminPhone = 'hello.tanyaruma@gmail.com';
    const text = `mailto:${adminPhone}?subject=Cari property berikut, ${phoneNumber}`
    // const walink = `https://api.whatsapp.com/send?phone=${adminPhone}&text=${text}`
    // const currentTime = new Date().toISOString();
    // const postData = {
    //   "email": "noemail@now.com",
    //   "logged_at": currentTime,
    //   "name": "no name",
    //   "phone": phoneNumber
    // }

    // fetch('https://rumame.adiyatmubarak.web.id/v1/contents/contacts', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(postData)
    // })
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
    //   setPhoneNumber('');
    //   window.open(walink, '_blank');
    //   return response;
    // })
    // .then(data => {
    //   console.log('Success:', data);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // }).finally(()=>{
      
      setIsLoading(false)
    // });
    window.open(`${text}`, '_blank');
  };
  return (
    <main className={`relative items-center flex min-h-screen ${styles.searchComponent} w-full pb-10`}>
      <div className='container flex flex-wrap items-center w-full pt-10 mx-auto'>
        <div className='w-full px-4 md:w-8/12 lg:w-6/12 xl:w-6/12'>
          <Image
            src="/logo-h-white.svg"
            width={300}
            height={300}
            alt="Picture of the author"
          />
          <p className='text-white text-[30px] mb-[30px]'> Wujudkan Rumah Impian mu<br/>Dengan berbagai pilihan Terlengkap !</p>
          <div className='md:flex items-center justify-start gap-[15px]'>
          {[1,2,3].map((item, index) => (
                <Image
                  key={index}
                  src={`/comingsoon/icon-${item}.svg`}
                  width={46}
                  height={46}
                  className='w-[auto] h-[34px] md:h-[46px] mb-5 md:mb-0'
                  alt="Picture of the author"
                />
              ))}
          </div>
        </div>
        <div className='w-full px-4 pt-12'>
          <div className="lg:flex text-gray-600 lg:bg-white  w-full lg:w-8/12 rounded-full items-center lg:pl-[24px] lg:gap-[20px] outline-none border-0 text-center justify-center lg:p-[10px]">
            <input className="border-gray-300 bg-white h-10 rounded-full lg:rounded-lg focus:outline-none border-0 flex-grow text-[20px] mb-5 lg:mb-0 mx-auto w-full px-5 py-8 lg:py-0"
              type="text" name="search" placeholder="Masukkan Pencarian..." id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} disabled={isLoading}/>
            <button type="submit" className={"right-0 top-0 bg-blue-800 text-white lg:py-4 py-4 px-[20px] w-full lg:w-auto lg:px-[20px] rounded-full text-[20px] hover:cursor-pointer hover:bg-blue-900 lg:min-w-[200px] "+ (!phoneNumber ? 'disabled text-slate-400' : '')} onClick={handleClick} disabled={!phoneNumber}>
              {isLoading ? 'Mohon Tunggu...' : 'Cari Rumah'}
            </button>
          </div>
        </div>
      </div>
      {/* <Image width={100} height={100} className="absolute top-0 right-0 w-10/12 pt-16 -mt-48 b-auto sm:w-6/12 sm:mt-0" src={"https://www.creative-tim.com/learning-lab/tailwind-starter-kit/Image/ill_header_3.png"} alt="..."/> */}
    </main>
  );
}
