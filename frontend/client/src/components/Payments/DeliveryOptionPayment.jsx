import { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import useMediaQuery from "../../hooks/useMediaQuery.js";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../../utils/LocalStorageFunctions.js";
import axios from "axios";
import { postRequest } from "../../services/httpRequest.js";

const DeliveryOptionPayment = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const isMobile = useMediaQuery("(max-width: 640px)");
  const localStorageData = getLocalStorage("auth");

  const handleFirstChoice = () => {
    setSelectedOption("home delivery");
  };

  const handleSecondChoice = () => {
    setSelectedOption("mail delivery");
  };

  const handleSubmit = async () => {
    const res = await postRequest(
      {
        title: "Samsung Galaxy A54 5g 256gb",
        quantity: 1,
        price: 184
      },
      "/api/v1/mercadopago/pay"
    );
    window.location.href = `https:${res.split(":")[2]}`;
  };

  return (
    <section className="bg-[#eeeeee] flex grow">
      <div className="mx-10 sm:mx-24 lg:ml-14 lg:mr-0 font-medium text-[#504A4A] w-full max-w-[825px]">
        {!isMobile && (
          <h2 className="mt-12 mb-4 text-xl">¿Cómo querés recibir o retirar tu compra?</h2>
        )}

        <div>
          <div className="mb-6 mt-8 sm:mt-0">
            <span>Domicilio</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-between gap-3 sm:gap-0 w-full max-w-[825px] bg-[#FAFAFA] h-[88px] rounded mb-6">
            <div className="flex items-center gap-10 ml-5 sm:ml-10">
              <SlLocationPin
                className="text-[#3483FA] border rounded-full border-none bg-white p-[0.3rem] hidden sm:block"
                fontSize={28}
              />
              <span className="text-xs">
                {
                  localStorageData.user.address
                  ? localStorageData.user.address.province.name
                  : "Agregar domicilio"
                }
              </span>
            </div>

            <div className="mr-12 ml-5 sm:ml-0">
              <span
                className="text-ligthblue text-xs cursor-pointer"
                onClick={() => navigate("/pay/home-delivery")}
              >
                Editar o elegir otro
              </span>
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
            <div className="flex items-center gap-12 ml-5 sm:ml-12">
              <input
                type="radio"
                name="delivery"
                id="delivery"
                value="option1"
                checked={selectedOption === "home delivery"}
                onChange={() => {}}
                className="cursor-pointer hidden sm:block"
              />
              <span className="text-xs">Llega mañana a tu domicilio</span>
            </div>
            <div className="mr-5 sm:mr-12">
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
            <div className="flex items-center gap-12 ml-5 sm:ml-12">
              <input
                type="radio"
                name="delivery"
                id="delivery"
                value="option2"
                checked={selectedOption === "mail delivery"}
                onChange={() => {}}
                className="cursor-pointer hidden sm:block"
              />
              <span className="text-xs">Retiro en correo y otros puntos</span>
            </div>
            <div className="mr-5 sm:mr-12">
              <span className="text-green">Gratis</span>
            </div>
          </div>
        </div>

        <div className="text-center sm:text-left">
          <span className="font-normal text-xs">Beneficios Mercado Puntos</span>
        </div>

        <div className="flex justify-center sm:justify-end mt-7 lg:mb-12">
          <button
            onClick={handleSubmit}
            className="w-[188px] h-[48px] text-white rounded-md bg-ligthblue"
          >
            Continuar
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeliveryOptionPayment;
