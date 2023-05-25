import React from "react";
import Carousel from "./components/Carousel";
import DescriptionAside from "./components/DescriptionAside";
import DescriptionBottom from "./components/DescriptionBottom";
import QuestionSection from "./components/QuestionSection";
import BuySection from "./BuySection";
import StoreDetail from "./StoreDetail";
import { useParams } from "react-router-dom";
import { Product } from "./components/Product";
import PaidSection from "./components/PaidSection";
const ProductDetail = () => {
  const { Id } = useParams();

  return (
    <div className="bg-grey flex justify-center content-center px-24 py-14 w-100">
      <div className="bg-white flex flex-col w-100">
        <div className="flex w-100 mx-16">
          <div className="bg-white w-3/6">
            <Carousel images={Product.images} />
          </div>
          <div className="bg-white w-3/6">
            <DescriptionAside
              name={Product.name}
              characteristics={Product.characteristics}
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
        <PaidSection/>
      </div>
    </div>
  );
};

export default ProductDetail;
