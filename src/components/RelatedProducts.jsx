import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { addToCart, openCart } from '@/app/RTK/slice';
import { useDispatch } from 'react-redux';

const RelatedProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(openCart());

  };
  const productContent1 = [
    {
      id: 1,
      image: "/shopimg.png",
      primaryText: "Purple Sky",
      secondaryText:
        ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      id: 2,
      image: "/shopimg.png",
      primaryText: "Purple Sky",
      secondaryText:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      image: "/shopimg.png",
      primaryText: "Purple Sky",
      secondaryText:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (

    <section className="bg-[#1d1e1f] text-white pt-28 px-0 md:px-10">


      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="flex justify-center">
          <h1 className="text-[50px] max-md:text-[35px]">
            Related <span className="text-[#3af96e]">Products</span>
          </h1>

        </div>
        <div className='flex justify-center mt-4 max-sm:text-center'>
          <p>We offer a wide variety of items, allowing you to recreate the mall-shopping experience online!</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center mt-20 ml-10">
          {productContent1.map((item) => (


            <div className="relative w-[320px] h-[305px] max-md:w-[220px] max-md:h-[200px] bg-[#1e1e1e] px-4 py-8 rounded-xl border-3 border-green-500">


              <div className="flex justify-between items-start gap-4 pr-[160px]">
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-[27px] max-md:text-[22px] font-semibold truncate">
                    {item.primaryText}
                  </h3>
                  <p className="text-gray-400 text-[12px] max-md:text-[9px] mt-1 truncate">
                    {item.secondaryText}
                  </p>
                  <p className="text-white text-xl max-md:text-sm font-bold mt-2">
                    $34.00
                  </p>
                </div> </div>
              <button className=" cursor-pointer mt-14 max-md:mt-3 w-auto text-[12px] px-10 py-3 max-md:px-5 max-md:py-2 max-md:text-[10px] bg-black border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-black transition-all"
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
                  className=""
                >
                  <Image
                    src={item.image}
                    alt="Product"
                    width={150}
                    height={180}
                    className="object-contain max-md:w-[80px]"
                  />  </Link>
              </div>


            </div>


          ))}
        </div>

        <div className='flex justify-center mt-22'>
          <button className="text-[12px] max-md:text-[10px] px-14 py-3 max-md:px-8 max-md:py-2  bg-black border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-black transition-all">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
