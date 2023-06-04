import React from "react";
import { BsTruck, BsArrowReturnLeft } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiCheckShield } from "react-icons/bi";
import { IoMdRibbon } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function BuySection() {
  const navigate = useNavigate()
  return (
    <div className="border-solid border w-[25rem] p-4 rounded-xl">
      <div className="flex">
        <BsTruck className="text-green text-2xl mr-3" />
        <div className="">
          <div className="inline-flex items-center">
            <p className="text-green text-[15px] font-medium"> Envios gratis a todo el pais</p>
            <AiFillThunderbolt className="text-green text-xl ml-10" />
            <p className="text-green italic font-bold"> FULL</p>
          </div>
          <p className="text-[13px]">Conocé los tiempos y las formas de envío</p>
          <span className="flex items-center">
            <GoLocation className="text-blue-500  " />
            <a className="text-blue-500 text-[13px]" href="#">
              Calcular cuando llega
            </a>
          </span>
        </div>
      </div>
      <div>
        <p className="text-[13px] mt-8">
          Tienda oficial{" "}
          <a className="text-blue-500 text-[13px]" href="#">
            Mercado Libre Electronica
          </a>{" "}
        </p>
        <p className="text-[13px]"> +100 mil ventas </p>
        <span className="text-gray-400 text-[11px]">Hace Factura A</span>
      </div>
      <div className="mt-8">
        <span className="text-[15px]">Cantidad: </span>
        <span className="text-[15px] font-medium">1 Unidad</span>
        <p className="text-[13px] text-gray-400">Podés comprar solo 1 unidad </p>
        <div>
          <button onClick={()=> navigate('/pay/warranty')} className="bg-blue-500 hover:bg-blue-700 text-white text-[16px] font-medium w-full py-4 px-20 my-8 rounded">
            Comprar ahora
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex">
            <BsArrowReturnLeft size={25} className="mr-4" />

            <p className="text-[13px]">
              {" "}
              <span className="text-blue-500 whitespace-nowrap">Devolución gratis.</span> Tenés 30
              días desde que lo recibís.
            </p>
          </div>

          <div className="flex">
            <BiCheckShield size={25} className="mr-4" />

            <p className="text-[13px]">
              {" "}
              <span className="text-blue-500 break-normal whitespace-nowrap">
                Compra Protegida,
              </span>{" "}
              recibí el producto que esperabas o te devolvemos tu dinero
            </p>
          </div>

          <div className="flex">
            <IoMdRibbon size={25} className="mr-4" />
            <p className="text-[13px]">12 meses de garantia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuySection;
