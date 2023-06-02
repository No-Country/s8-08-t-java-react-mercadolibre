import { useEffect } from "react";
import imgProductsTested from "../../assets/img/productos_testeado.svg";
import imgProductsInterest from "../../assets/img/products_18_interest.svg";
import imgProductsFull from "../../assets/img/products_full.svg";

import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/Products/ProductCard/ProductCard";
import { getAllProducts } from "../../store/state/productSlice";
import Collection from "../../components/Collection/Collection";

const ProductsList = () => {
  const listProduct = useSelector(store => store.product.list);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="bg-[#EDEDED] pb-6">
      <section className="mx-auto w-full bg-[#2567c9] h-[140px] flex justify-center items-center">
        <h1 className="text-white font-medium text-2xl uppercase"> titulo de la categoria</h1>
      </section>
      <section className="mx-auto max-w-[1200px] mt-8">
        <h3 className="text-base mt-6 pb-4 pt-6 uppercase">
          estos son los productos encontrados!
          <span className="text-ligthblue cursor-pointer lowercase"> ver mas...</span>
        </h3>

        <div className=" flex flex-wrap gap-2">
          {listProduct.map((product, index) => (
            <div key={`${index}-card`} className="min-h-[424px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-8 w-full">
          <img className="w-full" src={imgProductsTested} alt="productos testeados" />
        </div>
        <div className="mt-8 w-full">
          <Collection />
        </div>

        <div className="my-[50px] flex gap-3 justify-between">
          <div>
            <img src={imgProductsInterest} alt="productos interesados" />
          </div>
          <div>
            <img src={imgProductsFull} alt="productos en venta" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsList;
