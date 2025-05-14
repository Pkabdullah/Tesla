'use client';

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { RiMenu2Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { closeCart, openCart, removeFromCart } from "@/app/RTK/slice";
import { AiOutlineDelete } from "react-icons/ai";
const Navbar = () => {
  const [navbar, setNavBar] = useState(false);
  // const [isCartOpen, setIsCartOpen] = useState(false);
  const isCartOpen = useSelector((state) => state.product.isCartOpen);
  const cart = useSelector((state) => state.product.cartItems);
  const dispatch = useDispatch()
  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));

  };


  return (
    <header className="bg-[#1d1e1f] text-white w-full z-20 fixed">
      <section className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-4">

        <Link href="/" onClick={() => setNavBar(false)}>
          <Image
            src="/logo.png"
            alt="logo"
            width={110}
            height={50}
            className="max-md:w-[60px]"
          />
        </Link>


        <ul className="hidden md:flex gap-10 text-white ml-10">
          <Link href="/Shop">
            <li className="list-none hover:underline hover:text-green-400 transition-all duration-300 ease-in-out">Shop</li>
          </Link>
          <Link href="/#about">
            <li className="list-none hover:underline hover:text-green-400 transition-all duration-300 ease-in-out">About</li>
          </Link>
        </ul>


        <div className="hidden md:flex justify-center gap-2 w-full">
          <h2 className="text-[15px] whitespace-nowrap">Customize your charge with our skins</h2>
          <Image src="/icon1.png" alt="UK Flag" width={35} height={20} />
        </div>


        <div className="hidden md:flex gap-6">
          <Link href="/" >
            <Button className="cursor-pointer border-2 border-[#3af96e] rounded-full px-8 py-3 bg-black text-[15px] hover:bg-[#3af96e] hover:text-black">
              Contact Us
            </Button>
          </Link>

          <Link href="/">
            <Button className="cursor-pointer border-2 border-[#3af96e] rounded-full  py-2 bg-transparent gap-2 flex items-center text-[15px] hover:bg-[#3af96e] hover:text-black">
              UK
              <Image src="/icon2.svg" alt="UK Flag" width={30} height={20} />
            </Button>
          </Link>


          <div className="mt-1 cursor-pointer" onClick={() => dispatch(openCart())}>

            <div
              className="relative  mr-2 cursor-pointer"
              onClick={() => dispatch(openCart())}
            >
              <FaCartShopping className="text-green-400 text-3xl" />

              <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-red-600 rounded-full">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>

          </div>
        </div>


        <div className="md:hidden ml-auto">
          <button onClick={() => setNavBar(!navbar)} className="text-white">
            {navbar ? <GrClose size={24} /> : <RiMenu2Fill size={24} />}
          </button>
        </div>
      </section>


      {navbar && (
        <section className="fixed top-0 right-0 w-[300px] h-full z-50 bg-[#1d1e1f] px-4 py-6 shadow-lg overflow-y-auto text-white">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={() => setNavBar(false)} className="cursor-pointer">
              <GrClose className="text-white text-xl" />
            </button>
          </div>

          <ul className="flex flex-col gap-5">
            <li>
              <Link
                href="/Shop"
                onClick={() => setNavBar(false)}
                className="hover:text-green-400 transition-all"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setNavBar(false)}
                className="hover:text-green-400 transition-all"
              >
                About
              </Link>
            </li>
            <li>
              <Button className="border-2 border-[#3af96e] rounded-full px-4 py-2 bg-black text-[15px] w-fit">
                Contact
              </Button>
            </li>
            <li>
              <Button className="border-2 border-[#3af96e] rounded-full px-3 py-2 bg-transparent flex items-center gap-2 text-[15px] w-fit">
                UK
                <Image src="/icon2.svg" alt="UK Flag" width={30} height={20} />
              </Button>
            </li>
            <li>
              <div
                className="relative cursor-pointer w-fit"
                onClick={() => dispatch(openCart())}
              >
                <FaCartShopping className="text-green-400 text-3xl" />
                <span className="absolute -top-1 left-5 flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-red-600 rounded-full">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </div>
            </li>
          </ul>
        </section>
      )}




      <div
        className={`fixed top-0 right-0 w-[300px] h-full bg-[#111] text-white p-4 shadow-lg z-50 overflow-y-auto transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={() => dispatch(closeCart())} className="cursor-pointer">
            <GrClose className="text-white text-xl" />
          </button>
        </div>

        {cart?.length > 0 ? (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 border-b border-gray-600 pb-3"
              >
                <Image
                  src={item.image}
                  alt={item.primaryText}
                  width={60}
                  height={60}
                  className="object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">{item.primaryText}</p>
                  <p className="text-green-400 text-sm">$34.00</p>
                  <p className="text-sm">Qty: {item.quantity}</p>
                  <AiOutlineDelete
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 text-sm mt-2 cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">Your cart is empty.</p>
        )}
      </div>


    </header>
  );
};

export default Navbar;
