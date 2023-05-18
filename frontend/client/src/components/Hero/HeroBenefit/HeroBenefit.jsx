import boom from "../../../assets/icons/boom.svg";
import coupon from "../../../assets/icons/coupon.svg";
import credict_card from "../../../assets/icons/credict_card.svg";
import fire from "../../../assets/icons/fire.svg";
import full from "../../../assets/icons/full.svg";
import porcents from "../../../assets/icons/porcents.svg";
import shoes from "../../../assets/icons/shoes.svg";
import thunder from "../../../assets/icons/thunder.svg";
const HeroBenefit = () => {
  return (
    <div className="h-1/4 ">
      <h2 className=" text-center text-base font-medium pt-6 tracking-[1.6px]">
        DISFRUTÁ DE LOS MEJORES BENEFICIOS
      </h2>
      <div className="flex flex-wrap  justify-center mt-4 gap-10">
        <article className="mb-8 flex flex-col justify-center items-center">
          <div className="bg-white rounded-full border-[10px] border-white">
            <img className="rounded-full" src={fire} alt="fire" />
          </div>
          <p className="mt-4 text-center w-[96px] text-xs">¡OFERTAS SÓLO POR HOY!</p>
        </article>
        <article className="mb-8 flex flex-col justify-center items-center">
          <div className="bg-white rounded-full border-[10px] border-white">
            <img className="rounded-full" src={thunder} alt="thunder" />
          </div>
          <p className="mt-4 text-center w-[96px] text-xs">OFERTAS RELÁMPAGO</p>
        </article>
        <article className="mb-8 flex flex-col justify-center items-center">
          <div className="bg-white rounded-full border-[10px] border-white">
            <img className="rounded-full" src={porcents} alt="porcents" />
          </div>
          <p className="mt-4 text-center w-[96px] text-xs">¡LOS MAS VENDIDOS!</p>
        </article>
        <article className="mb-8 flex flex-col justify-center items-center">
          <div className="bg-white rounded-full border-[10px] border-white">
            <img className="rounded-full" src={boom} alt="boom" />
          </div>
          <p className="mt-4 text-center w-[96px] text-xs">¡MEGA BOMBAS DEL HOT SALE!</p>
        </article>
        <article className="mb-8 flex flex-col justify-center items-center">
          <div className="bg-white rounded-full border-[10px] border-white">
            <img className="rounded-full" src={credict_card} alt="credict_card" />
          </div>
          <p className="mt-4 text-center w-[96px] text-xs">¡COMPRÁ EN 6 CUOTAS FIJAS!</p>
        </article>
        <article className="mb-8 flex flex-col justify-center items-center">
          <div className="bg-white rounded-full border-[10px] border-white">
            <img className="rounded-full" src={coupon} alt="coupon" />
          </div>
          <p className="mt-4 text-center w-[96px] text-xs">¡CUPONES CON DESCUENTO!</p>
        </article>
        <article className="mb-8 flex flex-col justify-center items-center">
          <div className="bg-white rounded-full border-[10px] border-white">
            <img className="rounded-full" src={shoes} alt="shoes" />
          </div>
          <p className="mt-4 text-center w-[96px] text-xs">¡SELECCIONADOS DE ADIDAS!</p>
        </article>
        <article className="mb-8 flex flex-col justify-center items-center">
          <div className="bg-white rounded-full border-[10px] border-white">
            <img className="rounded-full" src={full} alt="full" />
          </div>
          <p className="mt-4 text-center w-[96px] text-xs">¡LOS ENVÍOS MÁS RÁPIDOS!</p>
        </article>
      </div>
    </div>
  );
};

export default HeroBenefit;
