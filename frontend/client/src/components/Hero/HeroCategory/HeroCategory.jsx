import electrodomestic from "../../../assets/img/electrodomestic.png";
import phone from "../../../assets/img/phone.png";
import shoes from "../../../assets/img/shoes.png";
import house from "../../../assets/img/house.png";
const HeroCategory = () => {
  return (
    <div className="bg-black">
      <h2 className=" text-center text-3xl font-bold"> EXPLORÁ POR CATEGORÍA </h2>
      <div className="flex flex-row">
        <article className="">
          <img src={electrodomestic} alt="electrodomestic" />
        </article>
        <article className="">
          <img src={phone} alt="phone" />
        </article>
        <article className="">
          <img src={shoes} alt="shoes" />
        </article>
        <article className="">
          <img src={house} alt="house" />
        </article>
      </div>
    </div>
  );
};

export default HeroCategory;
