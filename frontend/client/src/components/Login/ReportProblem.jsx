import account2 from "../../assets/icons/account2.png";
import cellphone from "../../assets/icons/cellphone.png";
import arrow from "../../assets/icons/arrow-right.png";

const ReportProblem = () => {
  return (
    <div className="mt-10 w-full lg:w-[224px]">
      <p className="font-medium text-[11px] mb-4">Reportar un problema</p>
      <div className="flex items-center gap-2 text-[#0000008c] text-sm h-[40px] hover:bg-[#f5f5f5] cursor-pointer">
        <img src={cellphone} alt="Icono de celular" />
        <p>Robo o pérdida de teléfono</p>
        <img src={arrow} alt="Flecha señalando hacia la derecha" className="ml-auto" />
      </div>
      <hr />
      <div className="flex items-center gap-2 text-[#0000008c] text-sm ml-[-4px] h-[40px] hover:bg-[#f5f5f5] cursor-pointer">
        <img src={account2} alt="Icono de persona" />
        <p>Robo de cuenta</p>
        <img src={arrow} alt="Flecha señalando hacia la derecha" className="ml-auto" />
      </div>
      <p className="text-[13px] text-ligthblue mt-6">Necesito ayuda con otros temas</p>
    </div>
  );
};

export default ReportProblem;
