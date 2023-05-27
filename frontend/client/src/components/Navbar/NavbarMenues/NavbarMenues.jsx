import { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { VscBell } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";

const menu = [
  {
    name: "Categorías",
    icon: () => <BsChevronCompactDown className="h-5 opacity-60 cursor-pointer" />
  },
  { name: "Ofertas", icon: () => null },
  { name: "Historial", icon: () => null },
  { name: "Supermercado", icon: () => null },
  { name: "Moda", icon: () => null },
  { name: "Vender", icon: () => null },
  { name: "Ayuda", icon: () => null }
];

const NavbarMenues = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [openMenuCategory, setOpenMenuCategory] = useState(false);
  const menuUser = () => {
    let listMenu = [];
    if (isRegister) {
      listMenu = [
        {
          name: JSON.parse(localStorage.getItem('user'))?.name ?? "Usuario",
          icon: () => <BiUserCircle size={25} className="opacity-60 cursor-pointer" />
        },
        { name: "Mis compras", icon: () => null },
        {
          name: "Favoritos",
          icon: () => <BsChevronCompactDown className="h-5 opacity-60 cursor-pointer" />
        },
        { name: null, icon: () => <VscBell className="h-5 opacity-60 cursor-pointer" /> },
        { name: null, icon: () => <FiShoppingCart className="h-5 opacity-60 cursor-pointer" /> }
      ];
    } else {
      listMenu = [
        { name: "Creá tu cuenta", icon: () => null },
        { name: "Ingresá", icon: () => null },
        { name: "Mis compras", icon: () => null },
        { name: null, icon: () => <FiShoppingCart className="h-5 opacity-60 cursor-pointer" /> }
      ];
    }
    return listMenu;
  };

  return (
    <div className="flex mt-4 w-full">
      <div className="hidden sm:flex justify-between items-center w-full gap-4">
        <div className="flex gap-2 items-center font-light">
          <FiMapPin size={28} className="opacity-60 cursor-pointer" />
          <div className="flex flex-col">
            <p className="opacity-60 hover:opacity-90 cursor-pointer text-[0.8rem]">
              Enviar a {JSON.parse(localStorage.getItem('user'))?.name ?? ''}
            </p>

            <p className="font-medium whitespace-nowrap">Capital Federal</p>
          </div>
        </div>
        <ul className="flex flex-wrap items-center gap-4 font-light text-sm relative min-w-[16rem]">
          {menu.map((item, i) => (
            <li
              key={`${i}-menu`}
              className={`${item.icon() ? "flex items-center gap-1" : ""}`}
              onClick={item.name === "Categorías" ? () => setOpenMenuCategory(false) : null}
              onMouseOver={item.name === "Categorías" ? () => setOpenMenuCategory(true) : null}
            >
              {item.name && (
                <p className="opacity-60 hover:opacity-90 cursor-pointer">{item.name}</p>
              )}
              {item?.icon() && item.icon()}
            </li>
          ))}
          {openMenuCategory && (
            <div
              className="absolute top-9 bg-black w-60 rounded-md text-white"
              onMouseLeave={() => setOpenMenuCategory(false)}
            >
              <div className="flex flex-col font-medium gap-1 mt-5 mb-5">
                <p className="cursor-pointer p-2 hover:bg-ligthblue pl-7">Vehiculos</p>
                <p className="cursor-pointer p-2 hover:bg-ligthblue pl-7">Inmuebles</p>
                <p className="cursor-pointer p-2 hover:bg-ligthblue pl-7">Supermercado</p>
                <p className="cursor-pointer p-2 hover:bg-ligthblue pl-7">Tecnología</p>
                <p className="cursor-pointer p-2 hover:bg-ligthblue pl-7">Electrodomésticos</p>
                <p className="cursor-pointer p-2 hover:bg-ligthblue pl-7">Herramientas</p>
              </div>
            </div>
          )}
        </ul>
        <ul className="flex flex-wrap justify-end items-center gap-4 font-light text-sm min-w-[12rem]">
          {menuUser().map((item, i) => (
            <li key={`${i}-menuUser`} className={`${item.icon() ? "flex items-center gap-1" : ""}`}>
              {item?.icon() && i === 0 && item.icon()}
              {item.name && (
                <p className="opacity-60 hover:opacity-90 cursor-pointer whitespace-nowrap">
                  {item.name}
                </p>
              )}
              {item?.icon() && i !== 0 && item.icon()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarMenues;
