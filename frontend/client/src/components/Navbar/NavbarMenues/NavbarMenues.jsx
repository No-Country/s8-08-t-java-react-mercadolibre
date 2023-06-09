import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuUser from "../MenuUser/MenuUser";
import ModalNotification from "../ModalNotification/ModalNotification";
import { BsChevronCompactDown } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
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
  const [openMenuUser, setOpenMenuUser] = useState(false);
  const [openMenuCategory, setOpenMenuCategory] = useState(false);
  const { user, token } = useSelector(store => store.auth);
  const { list: listCategories } = useSelector(store => store.categories);

  const navigate = useNavigate();

  const menuUser = () => {
    let listMenu = [];
    if (token) {
      listMenu = [
        {
          name: user.firstName,
          icon: () => (
            <BiUserCircle
              size={25}
              className="opacity-60 cursor-pointer relative"
              onClick={() => setOpenMenuUser(!openMenuUser)}
            />
          )
        },
        { name: "Mis compras", icon: () => null },
        {
          name: "Favoritos",
          icon: () => <BsChevronCompactDown className="h-5 opacity-60 cursor-pointer" />
        },
        { name: null, icon: () => <ModalNotification /> },
        { name: null, icon: () => <FiShoppingCart className="h-5 opacity-60 cursor-pointer" /> }
      ];
    } else {
      listMenu = [
        { name: "Creá tu cuenta", icon: () => null, url: "/auth/register" },
        { name: "Ingresá", icon: () => null, url: "/auth/login" },
        { name: "Mis compras", icon: () => null, url: "" },
        {
          name: null,
          icon: () => <FiShoppingCart className="h-5 opacity-60 cursor-pointer" />,
          url: ""
        }
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
              Enviar a {user.firstName ?? null}
            </p>
            {user.address ? (
              <div>
                <p className="font-medium text-base whitespace-nowrap">{user?.address?.locality}</p>
                <p className=" font-normal text-sm whitespace-nowrap">
                  {user.address.street} {user?.address?.number}
                </p>
              </div>
            ) : (
              <p className="font-medium whitespace-nowrap">Capital Federal</p>
            )}
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
              className="absolute top-9 bg-black w-60 rounded-md text-white z-50"
              onMouseLeave={() => setOpenMenuCategory(false)}
            >
              <div className="flex flex-col font-medium gap-1 mt-5 mb-5 ">
                {listCategories.map(category => {
                  return (
                    <p
                      key={category.id}
                      id={category.id}
                      className="cursor-pointer p-2 hover:bg-ligthblue pl-7"
                      onClick={() =>
                        navigate(`product-list/category/${category.id}/${category.name}`)
                      }
                    >
                      {category.name}
                    </p>
                  );
                })}
                <Link to={"/all-categories"}>
                  <p className="cursor-pointer p-2 hover:bg-ligthblue pl-7">Todas las Categorias</p>
                </Link>
              </div>
            </div>
          )}
        </ul>
        <ul className="flex flex-wrap justify-end items-center gap-4 font-light text-sm min-w-[12rem]">
          {menuUser().map((item, i) => (
            <li key={`${i}-menuUser`} className={`${item.icon() ? "flex items-center gap-1" : ""}`}>
              {item?.icon() && i === 0 && (
                <div className="relative">
                  {item.icon()} {openMenuUser && <MenuUser firstname={user.firstName} />}
                </div>
              )}
              {item.name && (
                <Link to={item.url}>
                  <p
                    className="opacity-60 hover:opacity-90 cursor-pointer whitespace-nowrap"
                    onMouseOver={i === 0 ? () => setOpenMenuUser(true) : null}
                  >
                    {item.name}
                  </p>
                </Link>
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
