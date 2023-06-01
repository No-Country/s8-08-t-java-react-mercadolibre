import { useEffect, useState } from "react";
import NavbarSearch from "./NavbarSearch/NavbarSearch";
import NavbarMenues from "./NavbarMenues/NavbarMenues";
import useMediaQuery from "../../hooks/useMediaQuery";
import MenuMobile from "./MenuMobile/MenuMobile";
import { getAllCategories } from "../../store/state/categoriesSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("USEEFECT");
    dispatch(getAllCategories());
  }, []);

  const allCategories = () => {
    getAllCategories();
  };

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
