import React from "react";
import NavbarPayment from "../../components/Payments/NavbarPayment";
import ProductDetailPayment from "../../components/Payments/ProductDetailPayment";
import CardItem from "../../components/Payments/CardItem";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import rapi from "../../assets/img/rapi.png";
import facil from "../../assets/img/facil.png";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-stretch min-h-screen">
      <NavbarPayment title=" ¿Como queres pagar?" />
      <div className="bg-[#EEEEEE] flex flex-col lg:flex-row  lg:justify-around  ">
        <div className="py-16 lg:min-h-[calc(100vh-56px)]">
          <h2 className="hidden md:ml-5 md:block  lg:text-[20px] xl:text-[24px] font-[500] text-[#333333] mb-5">
            ¿Como queres pagar?
          </h2>
          <CardItem bg="bg-[#F5F5F5]">
            <FaRegMoneyBillAlt className=" text-4xl text-ligthblue" />
            <p>Efectivo en puntos de pago</p>
            <p className="text-ligthblue ml-auto">Modificar</p>
          </CardItem>
          <h2 className="mt-10 ml-3 md:ml-5 md:block  lg:text-[20px] xl:text-[24px] font-[500] text-[#333333] mb-5">
            ¿Donde queres pagar?
          </h2>
          <CardItem>
            <input type="radio" />
            <div className="w-[48px] h-[48px] bg-[#F5F5F5] rounded-full flex justify-center items-center">
              <img src={rapi} alt="" />
            </div>
            <div>
              <p>Rapipago</p>
              <span className="text-[12px] text-[#737373]">Solo en sucursales abiertas ahora.</span>
            </div>
          </CardItem>
          <CardItem>
            <input type="radio" />
            <div className="w-[48px] h-[48px] bg-[#F5F5F5] rounded-full flex justify-center items-center">
              <img src={facil} alt="" />
            </div>
            <div>
              <p>Pago Fácil</p>
              <span className="text-[12px] text-[#737373]">Solo en sucursales abiertas ahora.</span>
            </div>
          </CardItem>
          <div className="flex justify-end mt-4 md:mr-5 xl:mr-0">
            <button
              onClick={() => navigate("/pay-confirmed")}
              className="w-[150px] h-[30px]   md:w-[200px] md:h-[35px] xl:w-[316px] xl:h-[48px]  text-white rounded-md bg-ligthblue font-medium"
            >
              Continuar
            </button>
          </div>
        </div>
        <ProductDetailPayment />
      </div>
    </div>
  );
};

export default Payment;
