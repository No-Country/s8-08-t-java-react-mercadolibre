import electrodomestic from "../../../assets/img/electrodomestic.png";
import phone from "../../../assets/img/phone.png";
import shoes from "../../../assets/img/shoes.png";
import house from "../../../assets/img/house.png";
import style from "./heroCategory.module.css";
const HeroCategory = () => {
  return (
    <div>
      <h2 className=" text-center text-3xl font-bold pt-6"> EXPLORÁ POR CATEGORÍA </h2>
      <div className=" flex flex-col sm:flex-row items-center sm:justify-around gap-9 my-10 gro pb-6">
        <article
          className={`${style.article} w-[300px] sm:w-96 shadow-lg shadow-slate-600 rounded-lg`}
        >
          <figure>
            <img className="w-full" src={electrodomestic} alt="electrodomestic" />
          </figure>
        </article>
        <article
          className={`${style.article} w-[300px] sm:w-96 shadow-lg shadow-slate-600 rounded-lg`}
        >
          <img className="w-full" src={phone} alt="phone" />
        </article>
        <article
          className={`${style.article} w-[300px] sm:w-96 shadow-lg shadow-slate-600 rounded-lg`}
        >
          <img className="w-full" src={shoes} alt="shoes" />
        </article>
        <article
          className={`${style.article} w-[300px] sm:w-96 shadow-lg shadow-slate-600 rounded-lg`}
        >
          <img className="w-full" src={house} alt="house" />
        </article>
      </div>
    </div>
  );
};

export default HeroCategory;
