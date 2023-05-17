import { useState } from "react";
import MercadoLibreLogo from "../../../assets/img/mercadolibrelogo.svg";
import MercadoLibreLogo_solo from "../../../assets/img/mercadolibrelogo_solo.svg";
import DisneyAd from "../../../assets/img/disney.svg";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const NavbarSearch = () => {
  const [input, setInput] = useState("");
  return (
    <div className="flex gap-3 justify-between items-center w-full sm:gap-9">
      <a
        href="https://www.mercadolibre.com.ar/"
        rel="noreferrer"
        target="_blank"
        className="min-w-20"
      >
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
      </a>
      <div className="relative w-full mx-4">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="w-full min-w-[10rem] shadow py-2 pl-4 pr-8 md:pr-10 rounded-sm outline-none placeholder:font-light placeholder:opacity-90"
          placeholder="Buscar productos, marcas y más..."
        />
        <BsSearch className="absolute right-2 md:right-3 bottom-3 h-4 w-10 opacity-60 border-l pl-4 cursor-pointer" />
      </div>
      <img src={DisneyAd} alt="DisneyAd" className="h-10 hidden sm:flex" />
      <div className="flex sm:hidden">
        <AiOutlineMenu className="h-6 w-12 opacity-60 cursor-pointer" />
        <FiShoppingCart className="h-6 w-12 opacity-60 cursor-pointer" />
      </div>
    </div>
  );
};

export default NavbarSearch;
