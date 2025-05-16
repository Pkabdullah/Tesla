"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart, openCart, setSelectedProduct } from "@/app/RTK/slice";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Shop = () => {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(setSelectedProduct(item));
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(openCart());
  };

  const productContent1 = [
    {
      id: 1,
      image: "/shopimg.png",
      primaryText: "Abdullah Sky",
      secondaryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image: "/shopimg.png",
      primaryText: "Purple Sky",
      secondaryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      image: "/shopimg.png",
      primaryText: "Purple Sky",
      secondaryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const productContent2 = [
    {
      id: 4,
      image: "/shopimg1.png",
      primaryText: "bcde Sky",
      secondaryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      image: "/shopimg2.png",
      primaryText: "Purple Sky",
      secondaryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      image: "/shopimg3.png",
      primaryText: "Purple Sky",
      secondaryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const productContent3 = [
    {
      id: 7,
      image: "/shopimg4.png",
      primaryText: "Purple Sky",
      secondaryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 8,
      image: "/shopimg5.png",
      primaryText: "Purple Sky",
      secondaryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 9,
      image: "/shopimg6.png",
      primaryText: "Purple Sky",
      secondaryText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const renderProductCards = (products) =>
    products.map((item) => (


      <div className="relative w-[330px] h-[305px] max-md:w-[220px] max-md:h-[200px] bg-[#1e1e1e] px-4 py-8 rounded-xl border-3 border-green-500">
        <div className="flex justify-between items-start gap-4 pr-[160px]">

          <div className="flex-1 min-w-0  ">
            <h3 className="text-white text-[27px] max-md:text-[22px] font-semibold lg:truncate max-sm:text-[12px]">
              {item.primaryText}
            </h3>
            <p className="text-gray-400 text-[12px] max-md:text-[9px] mt-1 truncate  ">
              {item.secondaryText}
            </p>
            <p className="text-white text-xl max-md:text-sm font-bold mt-2">$34.00</p>
          </div>


        </div>
        <button className="cursor-pointer mt-14 max-md:mt-3 w-auto text-[12px] px-10 py-3 max-md:px-5 max-md:py-2 max-md:text-[10px] bg-black border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-black transition-all"
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart(item);

          }}

        >
          Add To Cart
        </button>


        <div className="absolute -top-10 right-0 z-0" data-aos="fade-up">
          <Link
            key={item.id}
            href={`/DetailsPage/${item.id}`}
            onClick={() => handleClick(item)}
          >  <Image
              src={item.image}
              alt="Product"
              width={150}
              height={180}
              className="object-contain max-md:w-[80px]"
            /></Link>
        </div>
      </div>


    ));

  return (
    <section className="bg-[#45413c] py-22 text-white" id="products">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-10 lg:px-20 py-10 max-sm:py-0">
        <div className="flex justify-center mb-2">
          <h3 className="text-[17px] max-md:text-[15px]">Shop Now</h3>
          <Image src="/icon1.png" alt="UK Flag" width={35} height={20} className="pl-2" />
        </div>

        <div className="flex justify-center">
          <h1 className="text-[50px] max-md:text-[35px] max-sm:text-[25px] max-sm:text-justify leading-tight">
            <span className="text-[#3af96e]">Power up</span> your journey with
            <br /> our cutting-edge <span className="text-[#3af96e]">EV chargers!</span>
          </h1>
        </div>


        <div className="flex justify-center mt-22 gap-4 max-sm:flex-col max-sm:items-center max-sm:space-y-10">
          {renderProductCards(productContent1)}
        </div>


        <div className="pl-16 max-md:pl-2 max-sm:pl-6 mt-4">
          <div className="flex items-center max-sm:flex-col max-sm:gap-3 text-center">
            <hr className="w-[5%] max-sm:w-[35%] border border-[#3af96e] max-sm:mx-auto" />
            <button className="text-[12px] max-sm:text-[9px] px-14 py-3 bg-black border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-black transition-all">
              Explore Collection
            </button>
            <hr className="w-[40%] max-sm:w-[33%] border border-[#3af96e] max-sm:mx-auto" />
            <h1 className="text-[55px] max-md:text-[50px] max-sm:text-[20px] font-bold leading-tight text-white">
              3D SERIES
            </h1>
            <hr className="w-[5%] max-sm:w-[20%] border border-[#3af96e] max-sm:mx-auto" />
          </div>
        </div>


        <div className="flex justify-center mt-22 gap-4 max-sm:flex-col max-sm:items-center  max-sm:space-y-10">
          {renderProductCards(productContent2)}
        </div>


        <div className="pl-16 max-md:pl-2 max-sm:pl-6 mt-4">
          <div className="flex items-center max-sm:flex-col max-sm:gap-3 text-center">
            <hr className="w-[5%] max-sm:w-[33%] border border-[#3af96e] max-sm:mx-auto" />
            <button className="text-[12px] max-sm:text-[9px] px-14 py-3 bg-black border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-black transition-all">
              Explore Collection
            </button>
            <hr className="w-[25%] max-sm:w-[33%] border border-[#3af96e] max-sm:mx-auto" />
            <h1 className="text-[55px] max-md:text-[50px] max-sm:text-[20px] font-bold leading-tight text-white">
              ATHLETIC SERIES
            </h1>
            <hr className="w-[3%] max-sm:w-[20%] border border-[#3af96e] max-sm:mx-auto" />
          </div>
        </div>


        <div className="flex justify-center mt-22 gap-4 max-sm:flex-col max-sm:items-center  max-sm:space-y-10">
          {renderProductCards(productContent3)}
        </div>
      </div>
    </section>
  );
};

export default Shop;
