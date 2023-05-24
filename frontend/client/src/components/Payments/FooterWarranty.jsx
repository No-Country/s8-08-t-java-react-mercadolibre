import { useNavigate } from "react-router-dom";

const FooterWarranty = () => {
  const navigate = useNavigate()

  return (
    <div className=" bg-white flex flex-col text-center py-3 gap-2 md:flex-row justify-between items-center sm:h-[80px] px-5">
      <p className=" text-[#504A4A] font-[500] text-[12px]">
        Al continuar aceptás el envío digital de la póliza y los{" "}
        <span className=" text-ligthblue">términos y condiciones del seguro.</span>{" "}
      </p>
      <div className="flex gap-4 items-center">
        <p className="text-[16px] text-ligthblue font-[400] cursor-pointer">No, gracias</p>
        <button onClick={()=>navigate('/delivery-type')} className="px-5 bg-ligthblue text-white text-[16px] rounded-md h-[30px] hover:bg-sky-700">
          Agregar seguro
        </button>
      </div>
    </div>
  );
};

export default FooterWarranty;
