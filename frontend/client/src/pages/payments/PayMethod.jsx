import React from "react";
import CardItem from "../../components/Payments/CardItem";
import { RiVisaFill } from "react-icons/ri";
import { CiCreditCard1, CiCreditCard2 } from "react-icons/ci";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import NavbarPayment from "../../components/Payments/NavbarPayment";
import ProductDetailPayment from "../../components/Payments/ProductDetailPayment";
import { useNavigate } from "react-router-dom";
// metodo de pago
const PayMethod = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavbarPayment title=" ¿Como queres pagar?" />
      <div className=" bg-[#EEEEEE] flex flex-col items-stretch lg:flex-row lg:justify-around min-h-[calc(100vh-136px)]  ">
        <div className="my-10">
          <div className="flex justify-between md:mx-5 lg:mx-5 xl:mx-0">
            <h2 className="hidden md:block  lg:text-[20px] xl:text-[24px] font-[500] text-[#333333] mb-5">
              ¿Como queres pagar?
            </h2>
            <p className="text-ligthblue lg:text-[]">
              Ver promociones con el mismo precio en cuotas
            </p>
          </div>
          <p className="md:mx-5 lg:mx-5 xl:mx-0 text-lg text-[#333333] mb-3">
            Con debito o crédito
          </p>
          <CardItem>
            <input type="radio" />
            <RiVisaFill className=" text-4xl text-ligthblue" />
            <p>Visa debito **** 8325</p>
          </CardItem>

          <CardItem>
            <input type="radio" />
            <CiCreditCard1 className=" text-4xl text-ligthblue" />
            <div>
              <p>Nueva tarjeta de crédito </p>
              <span className=" text-[12px] text-green">Mismo precio en gasta 6 cuotas</span>
            </div>
          </CardItem>

          <CardItem>
            <input type="radio" />
            <CiCreditCard2 className=" text-4xl text-ligthblue" />
            <p>Nueva tarjeta de crédito </p>
          </CardItem>
          <p className="md:mt-10 md:mx-5 lg:mt-10 lg:mx-5 xl:mx-0 text-lg text-[#333333] mb-3">
            Con otras formas de pago
          </p>

          <CardItem>
            <input type="radio" />
            <FaRegMoneyBillAlt className=" text-4xl text-ligthblue" />
            <p>Efectivo en puntos de pago </p>
          </CardItem>
          <div className="flex justify-end mt-4">
            <button
              onClick={() => navigate("/payment")}
              className="w-[150px] h-[30px] md:mr-5 xl:mr-0 md:w-[200px] md:h-[35px] xl:w-[316px] xl:h-[48px] text-white rounded-md bg-ligthblue font-medium"
            >
              Continuar
            </button>
          </div>
        </div>
        <ProductDetailPayment />
      </div>
    </>
  );
};

export default PayMethod;
