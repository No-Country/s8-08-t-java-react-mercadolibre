import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import style from "./slider.module.css";

import { Grid, Pagination } from "swiper";

import { TiChevronRight } from "react-icons/ti";
import { TiChevronLeft } from "react-icons/ti";
import getCard from "../../../utils/card.json";
import PopularCategories from "../PopularCategorie/PopularCategories.jsx";

const SliderIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log(isHovered);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="w-full" onMouseLeave={handleMouseLeave}>
      <Swiper
        breakpoints={{
          410: {
            slidesPerView: 1,
            spaceBetween: 5,
            height: 340,
            grid: {
              rows: 1
            },
            pagination: {
              clickable: false
            }
          },
          700: {
            slidesPerView: 4,
            spaceBetween: 2,
            grid: {
              rows: 2
            },
            pagination: {
              clickable: true
            }
          },

          1280: {
            slidesPerView: 7,
            spaceBetween: 2,
            grid: {
              rows: 2
            },
            pagination: {
              clickable: true
            }
          }
        }}
        modules={[Grid, Pagination]}
        className="relative">
        {getCard.map((card, index) => (
          <SwiperSlide
            onMouseOver={handleMouseEnter}
            key={`${index}-card`}
            className={style.swiperSlide}>
            <PopularCategories card={card} />
          </SwiperSlide>
        ))}

        {isHovered && (
          <>
            <div
              className=" sm:flex items-center absolute top-[132px] bottom-0 right-0  cursor-pointer 
  w-[50px] h-[50px] justify-center rounded-full z-[2]">
              <SlideNextButton />
            </div>
            <div
              className="hidden sm:flex items-center absolute top-[132px] bottom-0 left-0 cursor-pointer
   w-[50px] h-[50px] justify-center rounded-full z-[8]">
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
      className=" bg-white shadow-xl w-10 rounded-full h-10  flex items-center justify-center">
      <TiChevronRight className=" text-[#4695fd] hover:text-[#4695fd] text-xl" />
    </button>
  );
};

const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slidePrev()}
      className=" bg-white shadow-xl w-10 rounded-full h-10 flex items-center justify-center">
      <TiChevronLeft className=" text-[#4695fd] hover:text-[#4695fd] text-xl" />
    </button>
  );
};

export default SliderIcon;
