import React from "react";
import { BsTruck,BsArrowReturnLeft } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import {BiCheckShield} from "react-icons/bi"
import {IoMdRibbon} from "react-icons/io"
function BuySection() {
  return (
    <div className="bg-white rounded-xl">
      <div>
      <div class="inline-flex items-baseline">
      <BsTruck className="text-green text-2xl mr-3" /> 
        <p className="text-green">
          {" "}
          Envios gratis a todo el pais
        </p>
        <AiFillThunderbolt className="text-green text-xl ml-10" />
        <p className="text-green italic font-bold">
          {" "}
          
          FULL
        </p>
        </div>
        <p>Conocé los tiempos de entrega y las formas de envío</p>
        <span className="inline-flex items-baseline">
        <GoLocation className="text-blue-500 mr-3 " /> 
        <a className="text-blue-500" href="#">
          Calcular cuando llega
        </a>
        </span>
      </div>
      <div>
        <p>
          Tienda oficial{" "}
          <a className="text-blue-500" href="#">
            Mercado Libre Electronica
          </a>{" "}
          +100 mil ventas{" "}
        </p>
        <span className="text-gray-200">Hace Factura A</span>
      </div>
      <div>
        <span>Cantidad: 1 Unidad</span>
        <p>Podés comprar solo 1 unidad</p>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white  py-4 px-20 rounded">
            Comprar ahora
          </button>
        </div>

        <div className="inline-flex items-baseline">
        <BsArrowReturnLeft/>
        <p className="text-blue-500">Devolución gratis</p>
        <p>. Tenés 30 días desde que lo recibís.</p>
        </div>
        <br/>
        <span className="inline-flex items-baseline">
        <BiCheckShield size="20px"/>
        <p className="text-blue-500">Compra Protegida,</p>
        <p> recibí el producto que esperabas o te devolvemos tu dinero.</p>
        </span>
        <br/>
        <span className="inline-flex items-baseline">
        <IoMdRibbon/>
        <p>12 meses de garantia</p>
        </span>
      </div>
    </div>
  );
}

export default BuySection;
