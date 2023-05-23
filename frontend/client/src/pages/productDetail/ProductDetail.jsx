import React from "react";
import Carousel from "./components/Carousel";
import DescriptionAside from "./components/DescriptionAside";
import DescriptionBottom from "./components/DescriptionBottom";
import QuestionSection from "./components/QuestionSection";
import BuySection from "./BuySection";
import StoreDetail from "./StoreDetail";
import { useParams } from "react-router-dom";
import { Product } from "./components/Product";
import banner from "../../assets/img/banner.svg";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <div className="bg-grey flex flex-col justify-center content-center px-24 py-14 w-100">
        <div className="flex justify-between w-100 my-2">
          <div>
            <button>Volver</button>
            <span className="mx-1">|</span>
            <button className="text-ligthblue">Celulares y teléfonos</button>
            <span className="mx-1 text-ligthblue">-</span>
            <button className="text-ligthblue">Celulares y smartphones</button>
          </div>
          <div>
            <button className="text-ligthblue">Compartir</button>
            <span className="text-ligthblue mx-1">|</span>
            <button className="text-ligthblue">Vender uno igual</button>
          </div>
        </div>
        <div className="flex">
          <div className="bg-white flex flex-col w-100 py-14">
            <div className="flex w-100 mx-16">
              <div className="bg-white w-3/6">
                <Carousel images={Product.images} />
              </div>
              <div className="bg-white w-3/6">
                <DescriptionAside
                  name={Product.name}
                  characteristics={Product.characteristics}
                  specification={Product.specification}
                  price={Product.price}
                  off={Product.off}
                />
              </div>
            </div>
            <hr className="flex mx-16 my-8" />
            <div className="w-100 mx-16">
              <DescriptionBottom description={Product.description} />
            </div>
            <hr className="flex mx-16 my-8" />
            <div className="mx-16">
              <QuestionSection />
            </div>
          </div>
          <div className="bg-white w-4/12 flex flex-col pt-6 pr-6 gap-4">
            <BuySection />
            <StoreDetail />
          </div>
        </div>
        <div>Sugerencias</div>
        <div className="flex justify-center w-100">
          <img src={banner} alt="banner" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
