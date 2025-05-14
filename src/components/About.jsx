import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="bg-[#1d1e1f] px-4 py-10 md:px-8 lg:px-20 text-white" >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-start gap-6 flex-col-reverse md:flex-row md:items-center text-center md:text-left">
          <div className="hidden md:flex flex-col items-center ">
            <Image
              src="/Arrow 2.png"
              alt="arrow"
              width={20}
              height={100}
              className="object-contain animate-mymove"
            />
            <h6 className="text-[#3af96e] mt-6 -rotate-90">Scroll</h6>
          </div>
          <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
            <div className="flex items-center mb-2 justify-center md:justify-start">
              <h3 className="text-[17px] md:text-[18px] font-medium">Who We Are</h3>
              <Image src="/icon1.png" alt="emoji" width={24} height={24} className="ml-2" />
            </div>

            <h1 className="text-[28px] md:text-[36px] lg:text-[45px] text-gray-300 font-bold leading-tight">
              Adding the <span className="text-[#3af96e]">new</span> look to <br className="hidden md:block" />
              <span className="text-[#3af96e]">old</span> school{" "}
              <span className="text-[#3af96e]">Ev Chargers</span>
            </h1>

            <p className="text-[13px] md:text-[15px] text-gray-400 mt-4 leading-relaxed max-w-[700px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis
              vestibulum ligula, ac fringilla orci mollis quis. Nam consequat eleifend justo,
              maximus consectetur erat dapibus non. Aenean finibus auctor ante, vitae tempor dolor
              dapibus non. Mauris feugiat accumsan ante eu auctor.
            </p>
          </div>


          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/abtimg2.png"
              alt="illustration"
              width={520}
              height={314}
              className="rounded-xl border border-[#3af96e] max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
