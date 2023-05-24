import { VscBell } from "react-icons/vsc";
import { BiUserCircle } from "react-icons/bi";
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsClockHistory } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiOutlineHeart } from "react-icons/ai";

const menu = [
  {
    name: "Inicio",
    icon: <GrHomeRounded size={25} className="opacity-60 cursor-pointer" />
  },
  { name: "Notificaciones", icon: <VscBell size={25} className="opacity-60 cursor-pointer" /> },
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
  { name: "Ayuda", icon: <TfiHeadphoneAlt size={25} className="opacity-60 cursor-pointer" /> }
];

const MenuMobile = () => {
  return (
    <div className="w-full h-full bg-white p-4">
      {menu.map((item, index) => (
        <div key={index} className="flex items-center py-3 px-4 gap-4">
          {item.icon}
          <div className="flex items-center space-x-2 text-lg">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default MenuMobile;
