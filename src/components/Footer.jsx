"use client"
import Image from "next/image";
import React from "react";
import {
    SlSocialInstagram,
    SlSocialTwitter,
    SlSocialFacebook,
    SlSocialYoutube,
} from "react-icons/sl";
import { FaRegCopyright } from "react-icons/fa6";
import Link from "next/link";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    const socialMedia = [
        { icon: SlSocialInstagram, label: "Instagram" },
        { icon: SlSocialTwitter, label: "Twitter" },
        { icon: SlSocialFacebook, label: "Facebook" },
        { icon: SlSocialYoutube, label: "Youtube" },
    ];
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <footer className=" bg-[#1d1e1f] text-white px-16 pb-6 max-md:px-8 max-sm:px-4 max-sm:pb-4">
            <div data-aos="fade-up">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-10 lg:px-20 ">
                    <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start">

                        <div className="max-w-[50%] max-sm:max-w-full">
                            <Image src={"/logo.png"} alt="logo" width={80} height={50} />
                            <p className="text-[15px] max-md:text-[12px] max-sm:text-[10px]">
                                we're transforming the way you charge your Tesla with our exclusive line of stylish and customizable skins for Tesla chargers. Elevate your charging experience with our premium designs that not only protect but also express your unique style. We understand that your Tesla is more than just a car; it's a statement. Our skins seamlessly blend aesthetics with functionality, providing a sleek and personalized touch to your charging station. Embrace innovation, protect your investment, and make a statement with [Your Business Name]. Redefine your Tesla charging experience – because charging should be as unique as your ride.
                            </p>
                        </div>

                        <div className="flex flex-col mr-16 max-md:mr-0 max-md:ml-10 max-sm:mt-10">
                            <div className="flex space-x-4 gap-6 mt-16 max-sm:gap-3 max-sm:space-x-0 max-sm:flex-col">

                                <ul className="flex flex-col space-y-2">
                                    <h6 className="text-[20px] max-md:text-[15px] max-sm:text-[14px] mb-4 ">Categories</h6>
                                    <Link href="#products">  <li className="text-[15px] max-md:text-[12px] max-sm:text-[11px] list-none  hover:text-green-400 transition-all duration-300 ease-in-out">3D Series</li></Link>
                                    <Link href="#products"> <li className="text-[15px] max-md:text-[12px] max-sm:text-[11px]  list-none  hover:text-green-400 transition-all duration-300 ease-in-out">Atheletic Series</li></Link>
                                    <Link href="#products"> <li className="text-[15px] max-md:text-[12px] max-sm:text-[11px]  list-none  hover:text-green-400 transition-all duration-300 ease-in-out">Cyberpunk Series</li></Link>
                                    <Link href="#products"> <li className="text-[15px] max-md:text-[12px] max-sm:text-[11px]  list-none  hover:text-green-400 transition-all duration-300 ease-in-out">Misc Series</li></Link>
                                    <Link href="#products"><li className="text-[15px] max-md:text-[12px] max-sm:text-[11px]  list-none  hover:text-green-400 transition-all duration-300 ease-in-out">Pastel Series</li></Link>
                                    <Link href="#products"> <li className="text-[15px] max-md:text-[12px] max-sm:text-[11px]  list-none  hover:text-green-400 transition-all duration-300 ease-in-out">Retro Series</li></Link>
                                </ul>

                                <ul className="flex flex-col space-y-2">
                                    <h6 className="text-[20px] max-md:text-[15px] max-sm:text-[14px] mb-4">Legal</h6>
                                    <Link href="">     <li className="text-[15px] max-md:text-[12px] max-sm:text-[11px] list-none  hover:text-green-400 transition-all duration-300 ease-in-out">Terms & Conditions</li></Link>
                                    <Link href="">        <li className="text-[15px] max-md:text-[12px] max-sm:text-[11px] list-none  hover:text-green-400 transition-all duration-300 ease-in-out">Privacy Policy</li></Link>

                                    <h6 className="text-[20px] mt-8 max-md:text-[15px] max-sm:text-[14px]">Follow Us</h6>

                                    <div className="flex flex-row gap-4 text-white">
                                        {socialMedia.map((item, i) => (
                                            <Link href="/" key={i}>
                                                <div className="flex items-center justify-center w-10 h-10 bg-[#3af96e] text-black rounded-full transition-transform duration-300 transform hover:-translate-y-1">
                                                    <item.icon size={20} />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>

                                </ul>

                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <hr className="border-1 border-[#3af96e] w-full mt-8 max-sm:mt-4" />
                    </div>

                    <div className="w-full text-center text-white">


                        <h2 className="mt-4 flex justify-center items-center gap-1 text-[15px] max-sm:text-[13px]">
                            <FaRegCopyright /> 2025<Link href="/"> <span className="text-[#3af96e]">Tesla</span>.</Link> All rights reserved
                        </h2>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
