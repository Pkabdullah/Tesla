"use client"
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { usePathname } from 'next/navigation';
import RelatedProducts from "@/components/RelatedProducts";
import Image from "next/image";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { addToCart } from "@/app/RTK/slice";

const DetailsPage = () => {
    const router = useRouter();
    const product = useSelector((state) => state.product.selectedProduct);
    const pathname = usePathname();
    const parts = pathname.split('/');
    const id = parts[parts.length - 1];
  const dispatch = useDispatch();

    useEffect(() => {
        if (!product?.id) {
            router.replace("/");
        }
    }, [product, router]);

    if (!product?.id) {
        return (
            <div className="flex justify-center products-center h-screen text-white">
                <p>Loading product details...</p>
            </div>
        );
    }
    const thumbnails = [
        product.image,
        product.image,
        product.image,
        product.image,
    ];
    const [quantity, setQuantity] = useState(1);
    const handleIncrement = () => setQuantity((prev) => prev + 1);
    const handleDecrement = () => {
        if (quantity > 1) setQuantity((prev) => prev - 1);
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
      };
    return (
        <div className="bg-[#45413c] text-white">

            <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 products-start">


                    <div className="flex flex-col products-center sm:products-start ">
                        <div className="w-full max-w-[400px] border-2 border-green-400">
                            <Image
                                src={product.image}
                                alt={product.primaryText}
                                width={200}
                                height={400}
                                className="rounded-xl mx-auto"
                            />
                        </div>
                        {thumbnails.length > 0 && (
                            <div className="flex justify-center sm:justify-start mt-4 gap-3 overflow-x-auto">
                                {thumbnails.map((thumb, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-center border-2 border-green-400 w-[90px] h-[135px] cursor-pointer p-1"
                                        onClick={() => setMainImage(thumb)}
                                    >
                                        <Image
                                            src={thumb}
                                            alt={`Thumbnail ${index + 1}`}
                                            width={55}
                                            height={70}
                                            className="rounded-lg"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>


                    <div className=" text-center sm:text-left">
                        <h1 className="text-[30px] sm:text-[40px] md:text-[50px] font-semibold mb-4">{product.primaryText}</h1>
                        <p className="mb-6 text-[14px] sm:text-[16px] md:text-[18px] text-gray-300 leading-relaxed">
                            {product.secondaryText}
                        </p>

                        <p className="text-xl mb-4">Price: <strong>$34.00</strong></p>


                        <div className="flex items-center justify-center md:justify-start mb-6">
                            <button
                                onClick={handleDecrement}
                                className="px-4 py-1 text-lg bg-transparent border border-white rounded-l-full hover:bg-white hover:text-black"
                            >
                                -
                            </button>
                            <span className="px-5 py-1 text-lg border-t border-b border-white">
                                {quantity}
                            </span>
                            <button
                                onClick={handleIncrement}
                                className="px-4 py-1 text-lg bg-transparent border border-white rounded-r-full hover:bg-white hover:text-black"
                            >
                                +
                            </button>
                        </div>

                        <button className="bg-[#1d1e1f] hover:bg-green-500 text-white py-3 px-16 rounded-full border border-[#3af96e] text-sm transition-all"
                         onClick={(e) => {
                            e.preventDefault(); 
                            handleAddToCart(product);
                          }}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </section>


            <RelatedProducts />
        </div>

    );
};

export default DetailsPage;
