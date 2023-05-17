import logo from "../../assets/img/logo-payment.png";
import useMediaQuery from "../../hooks/useMediaQuery.js";

const NavbarPayment = () => {

  const isMobile = useMediaQuery('(max-width: 630px)');

  return (
    <>
      <div className="bg-secondary h-[103px] flex items-center">
        <nav className="flex w-full sm:mx-24">
          {
            isMobile
              ? <div className="text-center w-full">
                <p className="text-2xl font-light">¿Cómo quéres recibir o retirar<br />tu compra?</p>
              </div>

              : <div className="flex items-center justify-between w-full">
                <div>
                  <img src={logo} alt="Mercado Libre logo" />
                </div>
                <div>
                  <span className="font-light">Ayuda</span>
                </div>
              </div>
          }
        </nav>
      </div>
    </>
  );
};

export default NavbarPayment;
