import { useDispatch } from "react-redux";
import { setLogout } from "../../../store/state/authSlice";
import { BiUserCircle } from "react-icons/bi";

const MenuUser = ({ firstname }) => {
  const dispatch = useDispatch();
  const menu = [
    {
      name: "Compras",
      action: () => {}
    },
    { name: "Preguntas", action: () => {} },
    {
      name: "Opiniones",
      action: () => {}
    },
    {
      name: "separator"
    },
    { name: "Cupones", action: () => {} },
    {
      name: "Préstamos",
      action: () => {}
    },
    {
      name: "Peliculas y series",
      action: () => {}
    },
    {
      name: "separator"
    },
    { name: "Mi perfil", action: () => {} },
    {
      name: "separator"
    },
    { name: "Vender", action: () => {} },
    {
      name: "separator"
    },
    {
      name: "Salir",
      action: () => {
        dispatch(setLogout());
      }
    }
  ];
  return (
    <div className="w-[19rem] h-auto bg-white py-2 absolute z-10 top-10 left-[-120px] shadow-xl">
      <div className="w-4 h-4 bg-white absolute rotate-45 top-[-8px] left-[124px]"></div>
      <div className="flex p-4 items-center">
        <BiUserCircle size={50} className="opacity-60 cursor-pointer" />
        <div className="flex flex-col">
          <span className="px-2">Hola {firstname}</span>
          <span className="font-medium text-base px-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            Nivel 2 - Mercado Puntos {">"}
          </span>
        </div>
      </div>
      <div className=" border-b w-full"></div>
      {menu.map((item, index) => (
        <div key={index} className="flex items-center py-1 gap-4 cursor-pointer hover:bg-gray-100">
          {item.name === "separator" ? (
            <div className=" border-b w-full"></div>
          ) : (
            <div className="flex items-center text-sm ml-6 py-1 w-full" onClick={item.action}>
              {item.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuUser;
