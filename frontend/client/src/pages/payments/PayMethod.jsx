import React from "react";
import CardItem from "../../components/Payments/CardItem";
import { RiVisaFill } from "react-icons/ri";
import NavbarPayment from "../../components/Payments/NavbarPayment";
import ProductDetailPayment from "../../components/Payments/ProductDetailPayment";
// metodo de pago
const PayMethod = () => {
  return (
    <>
      <NavbarPayment />
      <div className=" bg-[#EEEEEE] flex justify-around">
        <div className="my-10">
          <div className="flex justify-between">
            <h2 className=" text-[24px] font-[500] text-[#333333] mb-5">¿Como queres pagar?</h2>
            <p className="text-ligthblue">Ver promociones con el mismo precio en cuotas</p>
          </div>
          <p className=" text-lg text-[#333333] mb-3">Con debito o crédito</p>
          <CardItem>
            <input type="radio" />
            <RiVisaFill className=" text-4xl text-ligthblue" />
            <p>Visa debito **** 8325</p>
          </CardItem>

          <CardItem>
            <input type="radio" />
            <RiVisaFill className=" text-4xl" />
            <p>Nueva tarjeta de crédito <span>Mismo precio en gasta 6 cuotas</span></p>
          </CardItem>


        </div>
        <ProductDetailPayment />
      </div>
    </>
  );
};

export default PayMethod;
