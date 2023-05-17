import { useState } from "react";
import { SlLocationPin } from "react-icons/sl";

const DeliveryOptionPayment = () => {
  const [selectedOption, setSelectedOption] = useState("");
  console.log(selectedOption);

  const handleFirstChoice = () => {
    setSelectedOption("home delivery");
  };

  const handleSecondChoice = () => {
    setSelectedOption("mail delivery");
  };

  return (
    <section className="bg-[#eeeeee] flex grow">
      <div className="ml-24 font-medium text-[#504A4A] w-full max-w-[825px]">
        <h2 className="mt-12 mb-4 text-xl">¿Cómo querés recibir o retirar tu compra?</h2>

        <div>
          <div className="mb-6">
            <span>Domicilio</span>
          </div>

          <div className="flex items-center justify-between w-full max-w-[825px] bg-[#FAFAFA] h-[88px] rounded mb-6">
            <div className="flex items-center gap-10 ml-10">
              <SlLocationPin
                className="text-[#3483FA] border rounded-full border-none bg-white p-[0.3rem]"
                fontSize={28}
              />
              <span className="text-xs">Llega mañana a tu domicilio</span>
            </div>
            <div></div>
            <div className="mr-12">
              <span className="text-ligthblue text-xs cursor-pointer">Editar o elegir otro</span>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <span>Recibir compra</span>
          </div>

          <div
            className={`flex items-center justify-between w-full max-w-[825px] bg-[#FFFFFF] h-[60px] rounded mb-6 border-l-4 cursor-pointer ${
              selectedOption === "home delivery" ? "border-ligthblue" : "border-transparent"
            }`}
            onClick={handleFirstChoice}
          >
            <div className="flex items-center gap-12 ml-12">
              <input
                type="radio"
                name="delivery"
                id="delivery"
                value="option1"
                checked={selectedOption === "home delivery"}
                onChange={() => {}}
                className="cursor-pointer"
              />
              <span className="text-xs">Llega mañana a tu domicilio</span>
            </div>
            <div className="mr-12">
              <span className="text-green">Gratis</span>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <span>Retirar compra</span>
          </div>

          <div
            className={`flex items-center justify-between w-full max-w-[825px] bg-[#FFFFFF] h-[60px] rounded mb-6 border-l-4 cursor-pointer ${
              selectedOption === "mail delivery" ? "border-ligthblue" : "border-transparent"
            }`}
            onClick={handleSecondChoice}
          >
            <div className="flex items-center gap-12 ml-12">
              <input
                type="radio"
                name="delivery"
                id="delivery"
                value="option2"
                checked={selectedOption === "mail delivery"}
                onChange={() => {}}
                className="cursor-pointer"
              />
              <span className="text-xs">Retiro en correo y otros puntos</span>
            </div>
            <div className="mr-12">
              <span className="text-green">Gratis</span>
            </div>
          </div>
        </div>

        <div>
          <span className="font-normal text-xs">Beneficios Mercado Puntos</span>
        </div>

        <div className="flex justify-end mt-7">
          <button className="w-[188px] h-[48px] text-white rounded-md bg-ligthblue">
            Continuar
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeliveryOptionPayment;
