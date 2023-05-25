import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper";
import { TiChevronRight } from "react-icons/ti";
import { TiChevronLeft } from "react-icons/ti";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const listOffers = [
  {
    id: 1,
    title: "Offer 1",
    image: "https://http2.mlstatic.com/D_NQ_686793-MLA69502727164_052023-OO.webp"
  },
  {
    id: 2,
    title: "Offer 2",
    image: "https://http2.mlstatic.com/D_NQ_842114-MLA69578209362_052023-OO.webp"
  },
  {
    id: 3,
    title: "Offer 3",
    image: "https://http2.mlstatic.com/D_NQ_940356-MLA69502413146_052023-OO.webp"
  },
  {
    id: 4,
    title: "Offer 4",
    image: "https://http2.mlstatic.com/D_NQ_747697-MLA69445407027_052023-OO.webp"
  },
  {
    id: 5,
    title: "Offer 5",
    image: "https://http2.mlstatic.com/D_NQ_726276-MLA69536484001_052023-OO.webp"
  }
];

const SliderInitial = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="w-full" onMouseLeave={handleMouseLeave}>
      <Swiper
        slidesPerView={1}
        spaceBetween={2}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true, bulletActiveClass: "bulletActive" }}
        effect="fade"
        modules={[Autoplay, Pagination, EffectFade]}
        className="relative">
        {listOffers.map((offer, index) => (
          <SwiperSlide onMouseOver={handleMouseOver} key={`${index}-offer`} className={""}>
            <div className="w-full">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-[7.5rem] sm:h-auto object-cover"
              />
            </div>
          </SwiperSlide>
        ))}

        {isHovered && (
          <>
            <div className="sm:flex absolute top-[50%] bottom-0 right-0 cursor-pointer w-[50px] h-[50px] justify-center rounded-full z-[5]">
              <SlideNextButton />
            </div>
            <div className="sm:flex absolute top-[50%] bottom-0 left-0 cursor-pointer w-[50px] h-[50px] justify-center rounded-full z-[5]">
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

export default SliderInitial;
