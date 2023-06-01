import React from "react";
import SliderProduct from "../Products/SliderProduct/SliderProduct";

const Sales = () => {
  return (
    <>
      <div className="">
        <h3 className="text-base pb-4 pt-6">
          🔥 OFERTAS IMPERDIBLES 🔥{" "}
          <span className="text-ligthblue cursor-pointer"> ver mas...</span>
        </h3>
        <div className="min-h-[424px]">
          <SliderProduct />
        </div>

        <h3 className="text-base mt-6 pb-4 pt-6 uppercase">
          ultimos productos cargados!
          <span className="text-ligthblue cursor-pointer lowercase"> ver mas...</span>
        </h3>
        <div className="min-h-[424px]">
          <SliderProduct />
        </div>
      </div>
    </>
  );
};

export default Sales;
