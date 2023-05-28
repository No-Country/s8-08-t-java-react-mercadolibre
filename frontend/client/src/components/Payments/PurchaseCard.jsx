import { AiOutlineClockCircle } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";

const PurchaseCard = () => {
  return (
    <article className="font-normal border flex flex-col w-full max-w-[365px] bg-white rounded-lg h-[255px]">
      <div>
        <h3 className="text-[16px] text-[#151515] font-medium p-4 pl-5">Pago $184.999</h3>

        <hr className="mb-2" />

        <h4 className="text-[12px] text-[#151515] mb-2 p-2 pl-5">Samsung Galaxy A54</h4>

        <p className="text-[12px] text-[#151515] pl-5">Referencia:</p>
        <p className="text-[12px] text-[#999999] mb-4 pl-5">0123456789</p>

        <div className="flex items-center gap-2 pl-5 text-[#151515]">
          <AiOutlineClockCircle className="text-[18px]" />
          <p className="text-[12px]">Pagas y se acredita dentro de 2 horas</p>
        </div>

        <hr className="mb-2 mt-3" />

        <div className="flex items-center gap-2 p-4 pl-5 text-ligthblue">
          <BsDownload className="text-[18px]" />
          <p className="text-[12px]">Descarga estos datos</p>
        </div>
      </div>
    </article>
  );
};

export default PurchaseCard;
