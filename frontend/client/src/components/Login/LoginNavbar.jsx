import logo from "../../assets/img/logo-payment.png";
import { useNavigate } from "react-router-dom";

const LoginNavbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" bg-secondary h-[103px] sm:h-[56px] flex items-center">
        <nav className="flex w-full mx-6 sm:mx-24">
          <div className="flex items-center justify-between w-full">
            <div>
              <img
                src={logo}
                alt="Mercado Libre logo"
                onClick={() => navigate("/")}
                className="cursor-pointer"
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default LoginNavbar;
