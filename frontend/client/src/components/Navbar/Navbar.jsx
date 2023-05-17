import NavbarSearch from "./NavbarSearch/NavbarSearch";
import NavbarMenues from "./NavbarMenues/NavbarMenues";

const Navbar = () => {
  return (
    <nav className="flex flex-col bg-[#FFF159] p-2 pb-1 shadow items-center">
      <div className="flex flex-col gap-5 sm:w-[85%]">
        <NavbarSearch />
        <NavbarMenues />
      </div>
    </nav>
  );
};
export default Navbar;
