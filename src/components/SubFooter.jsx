"use client"
import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SubFooter = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <section className="bg-[#1d1e1f] text-white px-16 pt-24   max-md:px-6 max-md:pt-24 max-md:pb-0 max-sm:px-4 max-sm:pt-16">
            <div data-aos="fade-up">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-10 lg:px-20 py-10">
                    <div className="flex justify-between items-center max-sm:flex-col">

                        <div className="max-w-[50%] max-sm:max-w-full">
                            <div className="flex items-center mb-4 max-sm:flex max-sm:justify-center">
                                <h4 className="text-[17px] max-md:text-[15px] max-sm:text-[12px] font-medium">
                                    Subscribe To Our News Letter
                                </h4>
                                <Image
                                    src="/icon1.png"
                                    alt="UK Flag"
                                    width={35}
                                    height={20}
                                    className="pl-2"
                                />
                            </div>

                            <h1 className="text-[50px] max-md:text-[35px] max-sm:text-[28px] font-semibold leading-tight max-sm:text-center">
                                Stay <span className="text-[#3af96e]">charged</span> and stay<br />
                                <span className="text-[#3af96e]">informed!</span>
                            </h1>

                            <p className="text-[15px] max-md:text-[12px] max-sm:text-[11px] font-thin mt-4 leading-relaxed max-sm:text-center">
                                Subscribe to our newsletter for the latest updates on EV technology,
                                exclusive offers on top-notch chargers, and eco-friendly driving tips.
                                Join our community of forward-thinkers committed to a sustainable future.
                                Don&apos;t miss out on the electrifying news – sign up now and plug into
                                the future of clean, green mobility!"
                            </p>
                        </div>
                        <div className="ml-10">
                            <div className="flex flex-col items-center space-y-4 max-sm:mt-10">

                                <div className="flex  max-sm:space-x-2 ">
                                    <Image src="/subfooterimg1.png" alt="" width={140} height={164} className="max-md:w-[100px] max-md:h-[100px] max-sm:w-[80px] max-sm:h-[80px]" />
                                    <Image src="/subfooterimg2.png" alt="" width={140} height={164} className="max-md:w-[100px] max-md:h-[100px] max-sm:w-[80px] max-sm:h-[80px]" />
                                    <Image src="/subfooterimg3.png" alt="" width={140} height={164} className="max-md:w-[100px] max-md:h-[100px] max-sm:w-[80px] max-sm:h-[80px]" />
                                </div>

                                <div className="flex items-center border-2 border-[#3af96e] rounded-3xl text-white  max-sm:space-x-1 max-sm:px-2 max-sm:py-1">

                                    <Input
                                        type="email"
                                        placeholder="Enter Your Email Address"
                                        className="w-80 max-md:w-48 max-sm:w-50 rounded-full px-4 py-2  text-black border-none text-[15px] max-md:text-[12px] max-sm:text-[10px]"
                                    />

                                    <Button
                                        className="text-[15px] max-md:text-[11px] max-sm:text-[8px] px-10 py-5 max-md:py-3  max-sm:px-6   bg-black border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-black transition-all" >
                                        Subscribe
                                    </Button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubFooter;



