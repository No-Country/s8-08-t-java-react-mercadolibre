import { AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from "react";

const DescriptionAside = ({ name, characteristics, colors, price, priceDiscount, discount }) => {
  const [colorHover, setColorHover] = useState("");
  const [colorSelected, setColorSelected] = useState("");
  useEffect(() => {
    setColorHover(colors[0]?.name);
    setColorSelected(colorHover);
  }, [colors]);
  const active = "border-ligthblue border-2";
  return (
    <div className="flex flex-col p-2">
      <div className="flex justify-between p-1 text-gray-500 text-sm">
        <p>Nuevo | +1000 vendidos</p>
        <p className="text-3xl text-ligthblue cursor-pointer">
          <AiOutlineHeart />
        </p>
      </div>
      <div className="my-2 p-1">
        <h2 className="font-bold text-2xl">{name}</h2>
      </div>
      {discount !== 0 ? (
        <div className="my-2 p-1">
          <p className="line-through text-gray-500">${price}</p>
          <div className="flex items-center ">
            <h3 className="text-4xl font-light">${priceDiscount}</h3>
            <p translate="no" className="text-green mx-2 text-lg">
              {discount}% OFF
            </p>
          </div>
        </div>
      ) : (
        <div className="my-2 p-1">
          <div className="flex items-center ">
            <h3 className="text-4xl font-light">${price}</h3>
          </div>
        </div>
      )}

      <div>
        <p className="text-ligthblue my-2">
          <a href="">Ver los medios de pago</a>
        </p>
        {discount !== 0 && (
          <p className="bg-ligthblue text-white text-sm inline p-1 rounded">
            <a href="">OFERTA DEL DIA</a>
          </p>
        )}
      </div>
      {colors.length > 0 && (
        <div className="py-3">
          <p className="text-black text-lg">
            Color: <span>{colorHover}</span>
          </p>
          <div className="flex py-2 flex-wrap">
            {colors?.map(elem => {
              return (
                <button
                  key={colors.indexOf(elem)}
                  onClick={() => {
                    setColorSelected(elem.name);
                  }}
                  onMouseEnter={() => {
                    setColorHover(elem.name);
                  }}
                  onMouseOut={() => {
                    setColorHover(colorSelected);
                  }}
                  className={`hover:border-ligthblue ${
                    elem.name == colorSelected && active
                  } mx-2 my-1 py-2 px-3 rounded-lg border hover:border-ligthblue`}
                >
                  {elem.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
      <div className="my-2 p-1">
        <ul>
          {characteristics.map(descrip => {
            return (
              <li
                key={characteristics.indexOf(descrip)}
                className="list-disc py-1 text-gray-500 text-sm"
              >
                {descrip.content}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default DescriptionAside;
