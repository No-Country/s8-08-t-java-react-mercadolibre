import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MercadoLibreLogo from "../../../assets/img/mercadolibrelogo.svg";
import MercadoLibreLogo_solo from "../../../assets/img/mercadolibrelogo_solo.svg";
import DisneyAd from "../../../assets/img/disney.svg";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const NavbarSearch = ({ openMenuMobile, setOpenMenuMobile }) => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSearch = event => {
    if (event.keyCode === 13) {
      if (input) {
        navigate(`/product-list/${input}`);
      }
    }
  };

  return (
    <div className="flex gap-3 justify-between items-center w-full sm:gap-9">
      <Link to={"/"} className="min-w-20">
        <img
          src={MercadoLibreLogo}
          alt="MercadoLibreLogo"
          className="h-8 hidden sm:flex w-[13rem] min-w-[8rem]"
        />
        <img
          src={MercadoLibreLogo_solo}
          alt="MercadoLibreLogo_solo"
          className="h-8 flex sm:hidden w-16"
        />
      </Link>
      <div className="relative w-full">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className=" w-full sm:w-full sm:max-w-full shadow py-2 pl-4 pr-8 md:pr-10 rounded-sm outline-none placeholder:font-light placeholder:opacity-90"
          placeholder="Buscar productos, marcas y más..."
          onKeyDown={handleSearch}
        />
        <BsSearch
          size={20}
          className="w-12 absolute right-2 md:right-3 bottom-3 opacity-60 border-l pl-4 cursor-pointer"
        />
      </div>
      <div className="hidden sm:flex">
        <img src={DisneyAd} alt="DisneyAd" className="h-10" />
      </div>
      <div className="flex sm:hidden gap-4">
        {!openMenuMobile ? (
          <AiOutlineMenu
            size={22}
            onClick={() => setOpenMenuMobile(true)}
            className="opacity-60 cursor-pointer"
          />
        ) : (
          <AiOutlineClose
            size={22}
            onClick={() => setOpenMenuMobile(false)}
            className="opacity-60 cursor-pointer"
          />
        )}
        <FiShoppingCart size={22} className="opacity-60 cursor-pointer" />
      </div>
    </div>
  );
};

export default NavbarSearch;
