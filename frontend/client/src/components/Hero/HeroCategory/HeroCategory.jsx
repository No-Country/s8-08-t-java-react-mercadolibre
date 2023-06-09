import electrodomestic from "../../../assets/img/electrodomestic.png";
import phone from "../../../assets/img/phone.png";
import shoes from "../../../assets/img/shoes.png";
import house from "../../../assets/img/house.png";
import style from "./heroCategory.module.css";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 16,
    name: "Electrodomésticos y Aires Ac.",
    image: electrodomestic
  },
  {
    id: 11,
    name: "Celulares y Teléfonos",
    image: phone
  },
  {
    id: 28,
    name: "Ropa y Accesorios",
    image: shoes
  },
  {
    id: 20,
    name: "Hogar, Muebles y Jardín",
    image: house
  }
];
const HeroCategory = () => {
  return (
    <div>
      <h2 className=" text-center text-base font-medium pt-6 tracking-[1.6px]">
        {" "}
        EXPLORÁ POR CATEGORÍA{" "}
      </h2>
      <div className=" flex flex-col sm:flex-row items-center justify-center gap-9 my-10 gro pb-6">
        {categories?.map(category => {
          return (
            <Link
              key={`cat-${category.id}`}
              to={`product-list/category/${category.id}/${category.name}`}
            >
              <article
                className={`${style.article} w-[284px] sm:w-[284px] shadow-lg shadow-slate-600 rounded-lg`}
              >
                <img className="w-full" src={category.image} alt={category.name} />
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HeroCategory;
