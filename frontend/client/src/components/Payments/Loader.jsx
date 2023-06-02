import payment from "../../assets/img/logo-payment.png";
import useMediaQuery from "../../hooks/useMediaQuery.js";

const Loader = ({ size }) => {
  const isMobile = useMediaQuery("(max-width: 441px)");

  return (
    <div
      role="status"
      className={`flex flex-col gap-3 justify-center items-center ${
        isMobile && size ? "absolute right-10" : "relative right-0"
      }`}
    >
      <div
        className={`border-t-sky-600 rounded-full animate-spin ${
          size ? size : "w-16 h-16 border-8 border-white"
        }`}
      ></div>
      {!size && <img src={payment} alt="Logo Mercado Libre" />}
    </div>
  );
};

export default Loader;
