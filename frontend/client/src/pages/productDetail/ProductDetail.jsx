import React, { useEffect } from "react";
import Carousel from "./components/Carousel";
import DescriptionAside from "./components/DescriptionAside";
import DescriptionBottom from "./components/DescriptionBottom";
import QuestionSection from "./components/QuestionSection";
import BuySection from "./components/BuySection";
import StoreDetail from "./components/StoreDetail";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/img/banner.svg";
import PaidSection from "./components/PaidSection";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail } from "../../store/state/productSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const { detail: product } = useSelector(store => store.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetail(id));
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div>
      <div className="bg-grey flex flex-col justify-center content-center px-0 sm:px-24 py-6 w-100">
        <div className="flex justify-between w-100 mx-4 my-2">
          <div>
            <Link to="/">Volver</Link>
            <span className="mx-1">|</span>
            <Link
              to={`/product-list/category/${product?.category?.id}/${product?.category?.name}`}
              className="text-ligthblue"
            >
              {product.category?.name}
            </Link>
            <span className="mx-1 text-ligthblue">-</span>
            <button className="text-ligthblue">{product.subcategory?.name}</button>
          </div>
          <div>
            <button className="text-ligthblue">Compartir</button>
            <span className="text-ligthblue mx-1">|</span>
            <button className="text-ligthblue">Vender uno igual</button>
          </div>
        </div>
        <div className="flex flex-col  md:flex-row ">
          <div className="bg-white flex flex-col w-100 py-14">
            <div className="flex flex-col md:flex-row w-100 mx-6 md:mx-16">
              <div className="bg-white w-full md:w-3/6">
                <Carousel images={product.images} />
              </div>
              <div className="bg-white w-full md:w-3/6">
                <DescriptionAside
                  name={product.title}
                  characteristics={product?.descriptionRelevant}
                  colors={product.colors || []}
                  price={product.price}
                  priceDiscount={product.priceDiscount.toFixed(2) || ""}
                  discount={product.discount}
                />
              </div>
            </div>
            <hr className="flex mx-6 md:mx-16 my-6" />
            <div className="w-100 mx-6 md:mx-16">
              <DescriptionBottom description={product?.descriptionGeneric} />
            </div>
            <hr className="flex mx-6 md:mx-16 my-6" />
            <div className="mx-6 md:mx-16">
              <QuestionSection />
            </div>
          </div>
          <div className="bg-white w-full md:max-w-[26rem] flex flex-col items-center pt-3 p-2 gap-4">
            <BuySection />
            <StoreDetail />
            <PaidSection quotes={product.numberQuotas} />
          </div>
        </div>
        <div className="flex gap-4 w-100 h-100 justify-evenly py-14">
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
        <div className="flex justify-center w-100 my-14">
          <img src={banner} alt="banner" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
