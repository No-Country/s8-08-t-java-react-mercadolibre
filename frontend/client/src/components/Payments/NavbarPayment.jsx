import logo from "../../assets/img/logo-payment.png";

const NavbarPayment = () => {
  return (
    <>
      <div className="bg-secondary h-[103px] flex items-center">
        <nav className="flex w-full mx-24">
          <div className="flex items-center justify-between w-full">
            <div>
              <img src={logo} alt="Mercado Libre logo" />
            </div>
            <div>
              <span className="font-light">Ayuda</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarPayment;
