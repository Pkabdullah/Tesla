'use client'
import Product from '@/components/Product';
import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Shop = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="bg-[#1d1e1f] text-white w-full">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-start px-6 md:px-10 lg:px-20">
          <div
            data-aos="fade-right"
            className="pl-0 max-md:pl-0 mt-44"
          >
            <div className="flex items-center ">
              <h3 className="text-[17px] max-md:text-[15px]">
                Shop Clothes For Your Charger Your Charger!!!
              </h3>
              <Image
                src="/icon1.png"
                alt="UK Flag"
                width={35}
                height={20}
                className="pl-2"
              />
            </div>

            <h1 className="text-[50px] max-md:text-[35px] leading-tight w-auto">
              <span className="text-[#3af96e]">Power up</span> your journey <br />
              with our cutting-edge <br />
              <span className="text-[#3af96e]">EV chargers!</span>
            </h1>

            <div className="mt-4 mb-8">
              <h4 className="text-[30px] max-md:text-[18px] font-thin">
                Say Hello to your charger’s New Identity
              </h4>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex mt-32 max-md:mt-24 mx-auto max-w-[50%] max-md:max-w-[90%] max-sm:max-w-[95%] justify-between gap-4"
          >
            <Image
              src="/shopimg8.png"
              alt="hero img"
              width={315}
              height={352}
              className="w-full max-md:w-[175px] max-sm:w-[100px] h-auto"
            />
            <Image
              src="/shopimg7.png"
              alt="hero img"
              width={315}
              height={352}
              className="w-full max-md:w-[175px] max-sm:w-[100px] h-auto"
            />
          </div>
        </div>


        <Product />
      </div>
    </div>
  );
};

export default Shop;
