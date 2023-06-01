import React from "react";
import baby from "../../assets/img/interestSemanaBebe.png";
import estufa from "../../assets/img/interestStufa.png";

const Interest = () => {
  return (
    <>
      <div className="w-full">
        <h3 className="lg:w-full w-[211px] h-[37px] font-light text-[26px] text-[#666666]">
          Te puede interesar
        </h3>
        <div className="w-full mx-auto flex flex-col lg:flex-row lg:justify-between gap-3 mt-5">
          <article className="flex justify-between w-full lg:w-[584px] h-[250px] bg-white hover:shadow-2xl">
            <div className="flex flex-col w-[328px] h-[32px] ml-8 mt-14">
              <h4 className="text-[#4B4B4B] text-xs font-semibold uppercase leading-3 tracking-[4px]">
                Semana del Bebe
              </h4>

              <p className="text-[#4B4B4B] mt-[13px]  font-semibold lg:text-[28px] leading-8 uppercase">
                HASTA 30% OFF Y ENVÍOS RÁPIDOS{" "}
              </p>
              <button className="bg-ligthblue w-[96px] h-8 mt-[13px] text-white border-2 ">
                ver mas
              </button>
            </div>
            <figure className="w-[150px] lg:w-auto flex items-center ">
              <img src={baby} alt="bebe" />
            </figure>
          </article>
          <article className="flex justify-between w-full lg:w-[584px] h-[250px] bg-white hover:shadow-2xl">
            <div className="flex flex-col w-[328px] h-[32px] ml-8 mt-14">
              <h4 className="text-[#4B4B4B] text-xs font-semibold uppercase leading-3 tracking-[4px]">
                preparate para el frío
              </h4>

              <p className="text-[#4B4B4B] mt-[13px]  font-semibold lg:text-[28px] leading-8 uppercase">
                Hasta 25% off y hasta 6 Cuotas
              </p>
              <button className="bg-ligthblue w-[96px] h-8 mt-[13px] text-white border-2 ">
                ver mas
              </button>
            </div>
            <figure className="w-[150px] lg:w-auto flex items-center ">
              <img src={estufa} alt="bebe" />
            </figure>
          </article>
        </div>
      </div>
    </>
  );
};

export default Interest;
