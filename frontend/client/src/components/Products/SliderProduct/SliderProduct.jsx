import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { TiChevronRight } from "react-icons/ti";
import { TiChevronLeft } from "react-icons/ti";

import listProduct from "../../../utils/listProduct.json";
import ProductCard from "../ProductCard/ProductCard";

const SliderProduct = ({ products }) => {
  console.log(products);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="w-[100%]" onMouseLeave={handleMouseLeave}>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 5
          },
          410: {
            slidesPerView: 1.5,
            spaceBetween: 5
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 6
          },

          1100: {
            slidesPerView: 3.3,
            spaceBetween: 6
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 4
          },
          1400: {
            slidesPerView: 4.5,
            spaceBetween: 4
          },
          1650: {
            slidesPerView: 5,
            spaceCenter: 2
          }
        }}
        modules={[Pagination]}
        className=""
      >
        {products.map((product, index) => (
          <SwiperSlide onMouseOver={handleMouseOver} key={`${index}-card`}>
            <div className=" w-full flex justify-between">
              <ProductCard product={product} />
            </div>
          </SwiperSlide>
        ))}

        {isHovered && (
          <>
            <div
              className=" sm:flex items-center absolute top-[132px] bottom-0 right-0  cursor-pointer 
  w-[50px] h-[50px] justify-center rounded-full z-[2]"
            >
              <SlideNextButton />
            </div>
            <div
              className="hidden sm:flex items-center absolute top-[132px] bottom-0 left-0 cursor-pointer
   w-[50px] h-[50px] justify-center rounded-full z-[8]"
            >
              <SlidePrevButton />
            </div>
          </>
        )}
      </Swiper>
    </div>
  );
};

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideNext()}
      className=" bg-white shadow-xl w-10 rounded-full h-10  flex items-center justify-center"
    >
      <TiChevronRight className=" text-[#4695fd] hover:text-[#4695fd] text-xl" />
    </button>
  );
};

const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slidePrev()}
      className=" bg-white shadow-xl w-10 rounded-full h-10 flex items-center justify-center"
    >
      <TiChevronLeft className=" text-[#4695fd] hover:text-[#4695fd] text-xl" />
    </button>
  );
};

export default SliderProduct;
