import electrodomestic from "../../../assets/img/electrodomestic.png";
import phone from "../../../assets/img/phone.png";
import shoes from "../../../assets/img/shoes.png";
import house from "../../../assets/img/house.png";
import style from "./heroCategory.module.css";
const HeroCategory = () => {
  return (
    <div>
      <h2 className=" text-center text-base font-medium pt-6 tracking-[1.6px]">
        {" "}
        EXPLORÁ POR CATEGORÍA{" "}
      </h2>
      <div className=" flex flex-col sm:flex-row items-center justify-center gap-9 my-10 gro pb-6">
        <article
          className={`${style.article} w-[284px] sm:w-[284px] shadow-lg shadow-slate-600 rounded-lg`}
        >
          <img className="w-full" src={electrodomestic} alt="electrodomestic" />
        </article>
        <article
          className={`${style.article} w-[284px] sm:w-[284px] shadow-lg shadow-slate-600 rounded-lg`}
        >
          <img className="w-full" src={phone} alt="phone" />
        </article>
        <article
          className={`${style.article} w-[284px] sm:w-[284px] shadow-lg shadow-slate-600 rounded-lg`}
        >
          <img className="w-full" src={shoes} alt="shoes" />
        </article>
        <article
          className={`${style.article} w-[284px]  sm:w-[284px] shadow-lg shadow-slate-600 rounded-lg`}
        >
          <img className="w-full" src={house} alt="house" />
        </article>
      </div>
    </div>
  );
};

export default HeroCategory;
