import { Link } from "react-router-dom";

const PopularCategories = ({ card }) => {
  return (
    <>
      <article
        className={`flex justify-center items-center w-[100%] h-[100%] bg-white hover:bg-[#8db2e9] text-[#3483FA] hover:text-white shadow-2xl cursor-pointer`}
      >
        <Link to={`product-list/category/${card.id}/${card.name}`} className="h-full w-full">
          <div className="flex flex-col items-center justify-center h-full sm:h-auto">
            <figure className="mt-0 mb-5 sm:mt-5">
              <img src={card.image} alt={card.name} />
            </figure>
            <div className=" ">
              <h2 className=" text-base">{card.name}</h2>
            </div>
          </div>
        </Link>
      </article>
    </>
  );
};

export default PopularCategories;
