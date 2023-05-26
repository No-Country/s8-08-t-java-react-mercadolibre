import React from "react";
import { BsChatSquare } from "react-icons/bs";
import { TfiAlarmClock } from "react-icons/tfi";
import { AiFillCheckCircle } from "react-icons/ai";
import LogoTienda from "../../assets/img/mercadolibrelogo_solo.svg";
function StoreDetail() {
  return (
    <div className="border-solid border w-[25rem] p-4 rounded-xl">
      <h2 className="font-medium text-lg">Información de la tienda</h2>
      <div className="flex gap-3">
        <img src={LogoTienda} alt={"Logo"} className="w-12 h-12"></img>
        <div>
          <p>Mercado Libre Electrónica</p>
          <p className="text-[#9aa0a6] text-[13px]">Tienda oficial de Mercado Libre</p>
        </div>
      </div>
      <div className="inline-block my-4">
        <ul className="inline-flex items-center gap-2 ">
          <li className="bg-[#FFF0F0] w-12 h-2"></li>
          <li className="bg-[#FFF5E8] w-12 h-2"></li>
          <li className="bg-[#FFFCDA] w-12 h-2"></li>
          <li className="bg-[#F1FDD7] w-12 h-2"></li>
          <li className="bg-[#39B54A] w-14 h-4"></li>
        </ul>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col items-center justify-start text-start">
          <p className="text-[22px]">+ 100mil</p>
          <p className="flex text-center text-[11px] mt-1">Ventas en los ultimos 60 dias</p>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="relative">
            <BsChatSquare size={22} className="mt-2" />
            <AiFillCheckCircle size={15} color={"#39B54A"} className="absolute left-3 top-6" />
          </div>
          <p className="flex text-center text-[11px] mt-2">Brinda buena atención</p>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="relative">
            <TfiAlarmClock size={25} className="mt-2" />
            <AiFillCheckCircle size={15} color={"#39B54A"} className="absolute left-3 top-7" />
          </div>
          <p className="flex text-center text-[11px] mt-2">Despacha sus productos a tiempo</p>
        </div>
      </div>
      <p className="text-blue-500 mt-3 text-[13px]">Ver mas datos de este vendedor</p>
    </div>
  );
}

export default StoreDetail;
