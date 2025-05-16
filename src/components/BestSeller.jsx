"use client"
import Image from "next/image";
import React from "react";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const BestSeller = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cardContent = [
    {
      id: 1,
      image: "/bsimg2.png",
      primaryText: "Purple Sky Gradient",
      secondaryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkText: "Shop now",
    },
    {
      id: 2,
      image: "/bsimg2.png",
      primaryText: "Purple Sky Gradient",
      secondaryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkText: "Shop now",
    },
    {
      id: 3,
      image: "/bsimg2.png",
      primaryText: "Purple Sky Gradient",
      secondaryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkText: "Shop now",
    },
    {
      id: 4,
      image: "/bsimg2.png",
      primaryText: "Purple Sky Gradient",
      secondaryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkText: "Shop now",
    },
  ];

  return (
    <section className="bg-[#45413c] text-white pb-8 pt-8 " >
      <div className="bg-[url('/bsimg.png')] bg-no-repeat bg-center bg-[length:100%_100%] sm:bg-cover w-full">

        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 justify-items-center space-y-8">
            {cardContent.map((item) => (
              <div data-aos="zoom-in"> <div
                key={item.id}
                className="bg-[#1d1e1f] opacity-95 rounded-2xl shadow-lg p-2 flex items-center gap-4 w-full max-w-[280px] sm:max-w-[300px]"
              >

                <div className="min-w-[100px] sm:min-w-[100px]">
                  <Image
                    src={item.image}
                    alt={item.primaryText}
                    width={100}
                    height={100}
                    className="rounded-lg object-contain -mt-14"
                  />
                </div>  <div id="about"></div>
                <div className="text-sm">
                  <h3 className="font-semibold text-[13px] sm:text-[14px]">{item.primaryText}</h3>
                  <p className="text-gray-300 text-[10px] sm:text-[12px] mb-1">{item.secondaryText}</p>
                  <a
                    href="#"
                    className="text-[#3af96e] text-[11px] sm:text-sm font-medium hover:underline"
                  >
                    {item.linkText}
                  </a>
                </div>
              </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default BestSeller;
