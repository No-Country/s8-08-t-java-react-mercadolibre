import { useState } from "react";
import NavbarSearch from "./NavbarSearch/NavbarSearch";
import NavbarMenues from "./NavbarMenues/NavbarMenues";
import useMediaQuery from "../../hooks/useMediaQuery";
import MenuMobile from "./MenuMobile/MenuMobile";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  return (
    <nav className="flex flex-col items-center bg-[#FFF159] shadow w-full">
      <div className="flex flex-col items-center p-2 w-full sm:w-[90%]">
        <NavbarSearch openMenuMobile={openMenuMobile} setOpenMenuMobile={setOpenMenuMobile} />
        {!isMobile && <NavbarMenues />}
      </div>
      {openMenuMobile && <MenuMobile />}
    </nav>
  );
};
export default Navbar;
