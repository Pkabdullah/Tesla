'use client'

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, openCart, setSelectedProduct } from '@/app/RTK/slice';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Product = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || 1;
  const [currentPage, setCurrentPage] = useState(Number(page));
  const [sortOption, setSortOption] = useState('');
  const productsPerPage = 9;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(openCart());
  };

  const handleClick = (item) => {
    dispatch(setSelectedProduct(item));
  };

  const productContent1 = [
    { id: 1, image: "/shopimg.png", primaryText: "Abdullah2 Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$1.00" },
    { id: 2, image: "/shopimg.png", primaryText: "Jamal Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$4.00" },
    { id: 3, image: "/shopimg.png", primaryText: "Purple Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$84.00" },
    { id: 4, image: "/shopimg.png", primaryText: "Purple Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$34.00" },
    { id: 5, image: "/shopimg.png", primaryText: "Purple Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$34.00" },
    { id: 6, image: "/shopimg.png", primaryText: "Purple Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$34.00" },
    { id: 7, image: "/shopimg.png", primaryText: "Purple Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$34.00" },
    { id: 8, image: "/shopimg.png", primaryText: "Purple Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$34.00" },
    { id: 9, image: "/shopimg.png", primaryText: "Noor Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$34.00" },
    { id: 10, image: "/shopimg.png", primaryText: "Purple Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$34.00" },
    { id: 11, image: "/shopimg.png", primaryText: "Purple Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$7.00" },
    { id: 12, image: "/shopimg.png", primaryText: "Purple Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$34.00" },
    { id: 13, image: "/shopimg.png", primaryText: "Uzair Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$34.00" },
    { id: 14, image: "/shopimg.png", primaryText: "Purple Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$34.00" },
    { id: 15, image: "/shopimg.png", primaryText: "Purple Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$134.00" },
    { id: 16, image: "/shopimg.png", primaryText: "Purple Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$34.00" },
    { id: 17, image: "/shopimg.png", primaryText: "Purple Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$34.00" },
    { id: 18, image: "/shopimg.png", primaryText: "Purple Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$34.00" },
    { id: 19, image: "/shopimg.png", primaryText: "ShahZain Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$9.00" },
    { id: 20, image: "/shopimg.png", primaryText: "Purple Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$34.00" },
    { id: 21, image: "/shopimg.png", primaryText: "Purple Sky", secondaryText: "Lorem ipsum dolor sit amet.", price: "$34.00" },

  ];


  const sortedProducts = [...productContent1].sort((a, b) => {
    if (sortOption === 'price-asc') {
      return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
    } else if (sortOption === 'price-desc') {
      return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
    } else if (sortOption === 'az') {
      return a.primaryText.localeCompare(b.primaryText);
    }
    return 0;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(productContent1.length / productsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.history.pushState(null, '', `${pathname}?page=${pageNumber}`);
  };

  return (
    <div className="bg-[#45413c] text-white pt-28 px-0 md:px-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-10 lg:px-20 py-10">
        <div className="flex justify-between items-center gap-4 flex-wrap">

          <div className="flex items-center gap-4">
            <Image src="/proimg1.png" alt="icon 1" width={33} height={44} />
            <Image src="/proimg2.png" alt="icon 2" width={33} height={44} />
            <h4 className="text-[20px] md:text-[23px]">
              Showing {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, productContent1.length)} of {productContent1.length} results
            </h4>
          </div>


          <div>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-transparent border border-green-500 text-green-500 px-4 py-2 rounded-md"
            >
              <option value="" >Sort By</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
              <option value="az">A-Z</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 justify-items-center mt-20">
          {currentProducts.map((item) => (
            <div key={item.id} className="relative w-[320px] h-[305px] max-md:w-[220px] max-md:h-[200px] bg-[#1e1e1e] px-4 py-8 rounded-xl border-3 border-green-500">
              <div className="flex justify-between items-start gap-4 pr-[160px]">
                <div className="flex-1 lg:min-w-0 max-sm:min-w-[110px]">
                  <h3 className="text-white text-[27px] max-md:text-[22px] font-semibold lg:truncate max-lg:whitespace-normal max-sm:text-[12px]">
                    {item.primaryText}
                  </h3>
                  <p className="text-gray-400 text-[12px] max-md:text-[9px] mt-1 lg:truncate max-lg:whitespace-normal">
                    {item.secondaryText}
                  </p>
                  <p className="text-white text-xl max-md:text-sm font-bold mt-2">{item.price}</p>
                </div>
              </div>
              <button
                className="cursor-pointer mt-14 max-md:mt-3 text-[12px] px-10 py-3 max-md:px-5 max-md:py-2 max-md:text-[10px] bg-black border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-black transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart(item);
                }}
              >
                Add To Cart
              </button>
              <div className="absolute -top-10 right-0 z-0" data-aos="fade-up">
                <Link href={`/DetailsPage/${item.id}`} onClick={() => handleClick(item)}>
                  <Image src={item.image} alt="Product" width={150} height={180} className="object-contain max-md:w-[80px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>


        <div className="flex justify-center mt-16">
          <nav aria-label="Page navigation">
            <ul className="inline-flex space-x-4 text-xl h-28">
              {pageNumbers.map((num) => (
                <li key={num}>
                  <Link href={`${pathname}?page=${num}`}>
                    <button
                      onClick={() => changePage(num)}
                      className={`flex items-center justify-center px-4 h-10 leading-tight ${currentPage === num ? 'bg-[#3af96e] text-white' : 'text-[#3af96e] border border-[#3af96e] hover:bg-[#3af96e] hover:text-white'
                        }`}
                    >
                      {num}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Product;
