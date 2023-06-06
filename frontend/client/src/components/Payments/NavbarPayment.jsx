import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo-payment.png";
import useMediaQuery from "../../hooks/useMediaQuery.js";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";

const NavbarPayment = ({ title, url }) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const productId = useSelector(store => store.product.detail.id);
  const navigate = useNavigate();

  const handleRedirection = (direction, id) => {
    if(direction === "/pay/warranty") {
      navigate("/pay/warranty");
      window.scroll({ top: 0, behavior: 'smooth' });
    } else {
      navigate(`/product-detail/${id}`);
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <>
      <div className=" bg-secondary h-[103px] sm:h-[56px] flex items-center">
        <nav className="flex w-full mx-6 sm:mx-24">
          {isMobile ? (
            <div className="text-center w-full flex items-center justify-center">
              <BsArrowLeft size="25px" onClick={() => handleRedirection(url, productId)} />
              <p className="text-2xl font-light p-10">{title}</p>
            </div>
          ) : (
            <div className="flex items-center justify-between w-full">
              <div>
                <img
                  src={logo}
                  alt="Mercado Libre logo"
                  className="cursor-pointer"
                  onClick={() => navigate("/")}
                />
              </div>
              <div>
                <span className="font-light">Ayuda</span>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavbarPayment;
