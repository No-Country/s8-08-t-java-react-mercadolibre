import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../../../store/state/authSlice";
import { VscBell } from "react-icons/vsc";
import { BiUserCircle, BiExit, BiLogIn } from "react-icons/bi";
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsClockHistory, BsPersonAdd } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiOutlineHeart } from "react-icons/ai";

const MenuMobile = () => {
  const { user, token } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menu = () => {
    const menuUserLogged = [
      {
        name: "Inicio",
        icon: <GrHomeRounded size={25} className="opacity-60 cursor-pointer" />
      },
      {
        name: "Notificaciones",
        icon: <VscBell size={25} className="opacity-60 cursor-pointer" />
      },
      {
        name: "Mis Compras",
        icon: <HiOutlineShoppingBag size={25} className="opacity-60 cursor-pointer" />
      },
      {
        name: "Favoritos",
        icon: <AiOutlineHeart size={25} className="opacity-60 cursor-pointer" />
      },
      { name: "Ofertas", icon: <CiDiscount1 size={25} className="opacity-60 cursor-pointer" /> },
      {
        name: "Historial",
        icon: <BsClockHistory size={25} className="opacity-60 cursor-pointer" />
      },
      {
        name: "Mi cuenta",
        icon: <BiUserCircle size={28} className="opacity-60 cursor-pointer" />
      },
      {
        name: "Ayuda",
        icon: <TfiHeadphoneAlt size={25} className="opacity-60 cursor-pointer" />
      },
      {
        name: "Salir",
        icon: <BiExit size={25} className="opacity-60 cursor-pointer" />,
        action: () => {
          dispatch(setLogout());
        }
      }
    ];

    const menuNotLogged = [
      {
        name: "Inicio",
        icon: <GrHomeRounded size={25} className="opacity-60 cursor-pointer" />
      },
      {
        name: "Creá tu cuenta",
        icon: <BsPersonAdd size={25} className="opacity-60 cursor-pointer" />
      },
      {
        name: "Ingresá",
        icon: <BiLogIn size={25} className="opacity-60 cursor-pointer" />,
        action: () => {
          navigate("/auth/login");
        }
      },
      { name: "Ofertas", icon: <CiDiscount1 size={25} className="opacity-60 cursor-pointer" /> },
      {
        name: "Ayuda",
        icon: <TfiHeadphoneAlt size={25} className="opacity-60 cursor-pointer" />
      }
    ];

    if (token) return menuUserLogged;

    return menuNotLogged;
  };
  return (
    <div className="w-full h-full bg-white p-4">
      {token && (
        <div className="flex p-4 items-center">
          <BiUserCircle size={50} className="opacity-60 cursor-pointer" />
          <div className="flex flex-col">
            <span className="px-2">Hola {user.name}</span>
            <span className="font-medium text-base px-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              Nivel 2 - Mercado Puntos {">"}
            </span>
          </div>
        </div>
      )}
      {menu().map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center py-3 px-4 gap-4"
            onClick={item?.action ? item.action : null}
          >
            {item.icon}
            <div className="flex items-center space-x-2 text-lg">{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuMobile;
