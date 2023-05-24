const PopularCategories = ({ card }) => {
  return (
    <>
      <article
        className={`w-[100%] h-[100%] bg-white hover:bg-[#8db2e9] text-[#3483FA] hover:text-white shadow-2xl `}
      >
        <div className="flex flex-col items-center">
          <figure className="mt-5 mb-5">
            <img src={card.image} alt={card.name} />
          </figure>
          <div className=" ">
            <h2 className=" text-base">{card.name}</h2>
          </div>
        </div>
      </article>
    </>
  );
};

export default PopularCategories;
