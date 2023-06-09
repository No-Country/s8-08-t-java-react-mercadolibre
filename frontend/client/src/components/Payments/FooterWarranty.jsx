import { useNavigate } from "react-router-dom";

const FooterWarranty = () => {
  const navigate = useNavigate();

  const handleRedirection = () => {
    navigate("/pay/delivery-type");
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <div className=" bg-white flex flex-col text-center py-3 gap-2 md:flex-row justify-between items-center sm:h-[80px] px-5">
      <p className=" text-[#504A4A] font-[500] text-[12px]">
        Al continuar aceptás el envío digital de la póliza y los{" "}
        <span className=" text-ligthblue">términos y condiciones del seguro.</span>{" "}
      </p>
      <div className="flex gap-4 items-center">
        <p
          className="text-[16px] text-ligthblue font-[400] cursor-pointer"
          onClick={handleRedirection}
        >
          No, gracias
        </p>
        <button
          onClick={handleRedirection}
          className="px-5 bg-ligthblue text-white text-[16px] rounded-md h-[30px] hover:bg-sky-700"
        >
          Agregar seguro
        </button>
      </div>
    </div>
  );
};

export default FooterWarranty;
