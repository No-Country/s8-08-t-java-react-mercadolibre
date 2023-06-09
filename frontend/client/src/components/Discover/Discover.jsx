import React from "react";
import car from "../../assets/img/discoverVehiculos.png";
import supplements from "../../assets/img/discoverSuplementos.png";

const Discover = () => {
  return (
    <>
      <div className="w-full">
        <h3 className=" lg:w-full w-[211px] h-[37px] font-light text-[26px] text-[#666666]">
          Descubrir
        </h3>

        <div className="w-full mx-auto flex flex-col lg:flex-row lg:justify-between gap-3 mt-5">
          <article className="flex justify-between w-full lg:w-[584px] h-[250px] bg-white hover:shadow-2xl">
            <div className="flex flex-col justify-center lg:justify-normal  w-[250px] lg:w-[328px]  h-[200px] ml-4 lg:ml-8 lg:mt-14">
              <h4 className="text-[#4B4B4B] text-xs font-semibold uppercase leading-3 tracking-[4px]">
                tu vehículo en marcha
              </h4>

              <p className="text-[#4B4B4B] mt-[13px] font-semibold lg:text-[28px] lg:leading-8 uppercase">
                Hasta 20% off ¡Aprovechá!
              </p>
              <button className="bg-ligthblue w-[96px] h-8 mt-[13px] mb-2 text-white border-2 ">
                ver mas
              </button>
            </div>
            <figure className="w-[150px] lg:w-auto flex items-center">
              <img src={car} className="w-full" alt="car" />
            </figure>
          </article>
          <article className="flex justify-between  w-full lg:w-[584px] h-[250px] bg-white  hover:shadow-2xl">
            <div className="flex flex-col justify-center lg:justify-normal w-[250px] h-[200px] lg:w-[328px] ml-4 lg:ml-8  lg:mt-14">
              <h4 className="text-[#4B4B4B] text-xs font-semibold uppercase leading-3 tracking-[4px]">
                SUPLEMENTOS
              </h4>

              <p className="text-[#4B4B4B] mt-[13px]  font-semibold lg:text-[28px] lg:leading-8 uppercase">
                Hasta 25% off y hasta 6 Cuotas
              </p>
              <button className="bg-ligthblue w-[96px] h-8 mt-[13px] mb-2 text-white border-2 ">
                ver mas
              </button>
            </div>
            <figure className="w-[150px] lg:w-auto flex items-center ">
              <img src={supplements} className="w-full" alt="bebe" />
            </figure>
          </article>
        </div>
      </div>
    </>
  );
};

export default Discover;
