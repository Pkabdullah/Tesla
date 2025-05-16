'use client';
import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="w-full bg-[#1d1e1f] text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center px-4 sm:px-10 lg:px-20 ">


        <div
          data-aos="fade-right"
          className="mt-10 lg:mt-20 text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start mb-2">
            <h2 className="text-base sm:text-lg">
              It's Just like <span className="text-[#3af96e]">Clothes</span> To Your Charger!!!
            </h2>
            <Image src="/icon1.png" alt="emoji" width={35} height={20} className="pl-2" />
          </div>

          <h1 className="text-4xl sm:text-5xl mt-10 md:text-6xl font-bold leading-tight ">
            Next Generation <br /> Charger Skins
          </h1>

          <h4 className="text-lg sm:text-xl md:text-2xl font-thin mt-4 mb-6">
            Say Hello to your charger’s New Identity
          </h4>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="/Shop">
              <Button className=" cursor-pointer border border-[#3af96e] rounded-full px-10 py-5 text-[#3af96e] bg-black text-sm sm:text-base  hover:bg-[#3af96e] hover:text-black">
                Shop Now
              </Button>
            </Link>
            <Link href="/">
              <Button className="cursor-pointer  border border-[#3af96e] rounded-full px-10 py-5 text-[#3af96e] bg-transparent text-sm sm:text-base hover:bg-[#3af96e] hover:text-black">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>


        <div
          data-aos="fade-left"
          className="pt-20 lg:mt-0 flex justify-center"
        >
          <Image
            src="/heroimg1.png"
            alt="hero-img"
            width={514}
            height={514}
            className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[514px] h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
