import React from "react";
import ProductCard from "../Products/ProductCard/ProductCard";
import FastSale from "./FastSale/FastSale";

const listSales = new Array(5).fill(null);
const listHotSale = new Array(5).fill(null);
const Sales = () => {
  return (
    <>
      <div className="">
        <h3 className="text-base text-center  pb-4 pt-6">
          🔥 OFERTAS IMPERDIBLES 🔥{" "}
          <span className="text-ligthblue cursor-pointer"> ver mas...</span>
        </h3>
        <div className="flex flex-wrap gap-5 justify-center min-h-[424px]">
          {listSales?.map((produc, i) => {
            return <ProductCard key={`${i}-sale`} />;
          })}
        </div>
        <h3 className="text-base pb-4 pt-6 text-center"> OFERTAS CON ENVÍOS RÁPIDOS </h3>{" "}
        <FastSale />
        <h3 className="text-base text-center mt-6 pb-4 pt-6">
          LO MEJOR DE ESTE HOT SALE ¡NO TE QUEDES SIN EL TUYO!{" "}
          <span className="text-ligthblue cursor-pointer "> ver mas...</span>
        </h3>
        <div className="flex flex-wrap gap-5 justify-center  min-h-[424px]">
          {listHotSale?.map((produc, i) => {
            return <ProductCard key={`${i}-hotsale`} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Sales;
