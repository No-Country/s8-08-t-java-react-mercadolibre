import { AiOutlineHeart } from "react-icons/ai";
const DescriptionAside = ({ name, characteristics, price, off }) => {
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
      <div className="my-2 p-1">
        <p className="line-through text-gray-500">${price}</p>
        <div className="flex items-center ">
          <h3 className="text-4xl font-light">${price - off}</h3>
          <p className="text-green mx-2 text-lg">{off}% OFF</p>
        </div>
      </div>
      <div>
        <p className="text-ligthblue my-2">
          <a href="">Ver los medios de pago</a>
        </p>
        <p className="bg-ligthblue text-white text-sm inline p-1 rounded">
          <a href="">OFERTA DEL DIA</a>
        </p>
      </div>
      <div className="my-2 p-1">
        <ul>
          {characteristics.map(elem => {
            return (
              <li
                key={characteristics.indexOf(elem)}
                className="list-disc py-1 text-gray-500 text-sm"
              >
                {elem}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default DescriptionAside;
