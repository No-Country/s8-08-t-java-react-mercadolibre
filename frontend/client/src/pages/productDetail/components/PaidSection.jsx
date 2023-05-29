import React from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import MercadoCredito from "../../../assets/img/mercado_credito.png";
import Visa from "../../../assets/img/VISA-Logo.png";
import Mastercard from "../../../assets/img/mastercard-logo-7.png";
import Naranja from "../../../assets/img/Logo_Naranja.png";
import AmericanExpress from "../../../assets/img/logo-American-Express.png";
import VisaDebito from "../../../assets/img/VISA-Debito.png";
import MastercardDebito from "../../../assets/img/Mastercad-Debito.png";
import Maestro from "../../../assets/img/png-transparent-mastercard-maestro-credit-card-debit-card-payment-mastercard-blue-text-logo.png";
import CabalDebito from "../../../assets/img/debcabal.png";
import Rapipago from "../../../assets/img/Rapipago.png";
import PagoFacil from "../../../assets/img/PagoFacil.png";
function PaidSection() {
  return (
    <div className="border-solid border w-[25rem] p-4 rounded-xl">
      <h2 className="text-[17px] pb-7">Medios de pago</h2>
      <div className="bg-[#39B54A] w-50 h-20 p-4 rounded-md flex ">
        {" "}
        <AiOutlineCreditCard size={25} color="#ffff" />
        <p className="text-white text-center pl-5">
          ¡Pagá el mismo precio en{" "}
          <strong>
            hasta 6 <br />
            cuotas!
          </strong>{" "}
        </p>
      </div>
      <div>
        <div>
          <h2 className="text-[15px] pt-7"> Hasta 12 coutas fijas</h2>
          <img src={MercadoCredito} alt="img-MC" width={"105px"} height={"25px"}></img>
        </div>
        <div>
          <h2 className="text-[15px] pt-7 pb-3"> Tarjetas de crédito</h2>
          <div className="flex gap-2">
            <img src={Visa} alt="img-VS" width={"55px"} height={"55px"}></img>
            <img src={AmericanExpress} alt="img-VS" width={"55px"} height={"55px"}></img>
            <img src={Naranja} alt="img-VS" width={"55px"} height={"55px"}></img>
            <img src={Mastercard} alt="img-VS" width={"55px"} height={"55px"}></img>
          </div>
        </div>
        <div>
          <h2 className="text-[15px] pt-7"> Tarjetas de débito</h2>
          <div className="flex gap-2">
            <img src={VisaDebito} alt="img-VS" width={"55px"} height={"55px"}></img>
            <img src={Maestro} alt="img-VS" width={"55px"} height={"55px"}></img>
            <img src={MastercardDebito} alt="img-VS" width={"55px"} height={"55px"}></img>
            <img src={CabalDebito} alt="img-VS" width={"55px"} height={"55px"}></img>
          </div>
        </div>
        <div>
          <h2 className="text-[15px] pt-7"> Efectivo</h2>
          <div className="flex gap-2">
            <img src={PagoFacil} alt="img-VS" width={"35px"} height={"35px"}></img>
            <img src={Rapipago} alt="img-VS" width="90" height="15" className=" object-fill"></img>
          </div>
        </div>
      </div>
      <h2 className="text-blue-500 mt-7 text-[15px]">Conocé otros medios de pago </h2>
    </div>
  );
}

export default PaidSection;
