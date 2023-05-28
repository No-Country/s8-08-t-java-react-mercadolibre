import { useEffect, useState } from "react";
import Loader from "../../components/Payments/Loader";
import NavbarPayment from "../../components/Payments/NavbarPayment";
import PurchaseCard from "../../components/Payments/PurchaseCard";
import useMediaQuery from "../../hooks/useMediaQuery";

const Purchases = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulación de una tarea asíncrona
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center bg-white h-screen w-screen">
          <Loader />
        </div>
      ) : null}

      {!isMobile ? (
        <>
          <NavbarPayment />
          <section className="bg-green w-full h-[150px] flex items-center justify-center">
            <div>
              <p className="text-white font-medium text-2xl">
                Pagá $184.999 en Pago Fácil para reservar tu compra
              </p>
            </div>
          </section>
        </>
      ) : (
        <section className="bg-green w-full h-[110px] flex items-center justify-center">
          <div className="p-12">
            <p className="text-white font-medium text-xl">
              Pagá $184.999 en Pago Fácil para reservar tu compra
            </p>
          </div>
        </section>
      )}

      <section className="bg-[#eeeeee] h-[100vh]">
        <div className="flex justify-center items-center pt-11">
          <PurchaseCard />
        </div>

        <div className="flex justify-center items-center mt-3 gap-1">
          <div>
            <button className="w-[182px] h-[48px] text-white rounded-md bg-ligthblue font-medium text-base">
              Ver sucursales
            </button>
          </div>
          <div>
            <button className="w-[182px] h-[48px] text-ligthblue rounded-md bg-[#4189e626] font-medium text-base">
              Mis compras
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Purchases;
