import NavbarPayment from "../../components/Payments/NavbarPayment";
import ProductDetailPayment from "../../components/Payments/ProductDetailPayment";
import CardItem from "../../components/Payments/CardItem";
import { MdLocationOn } from "react-icons/md";
import store from "../../assets/icons/store.png";
import pago_facil from "../../assets/icons/pago_facil.png";
import location from "../../assets/icons/location.png";

const PayConfirmed = () => {
  return (
    <>
      <NavbarPayment title="Revisá y confirmá tu compra" />

      <div className="bg-[#EEEEEE] flex flex-col lg:flex-row justify-center items-center lg:items-stretch lg:justify-around 2xl:h-[100vh]">
        <div className="my-10 mx-6 sm:ml-14 sm:mr-0">
          <h2 className="hidden sm:block text-[24px] font-[500] text-[#333333] mb-5">
            Revisá y confirmá tu compra
          </h2>
          <p className="text-lg text-[#333333] font-medium mb-3 text-center sm:text-left">
            Detalle de la entrega
          </p>
          <CardItem bg="bg-[#F5F5F5]" flex="flex-col justify-center sm:flex-row">
            <div>
              <div className="border rounded-full border-none bg-white w-[48px] h-[48px] flex items-center justify-center">
                <img src={location} alt="Icono de tienda" className="w-[13px] h-[18px]" />
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-normal text-[15px] text-center sm:text-left">
                Retirá en Punto Pickit - Supermercado
              </p>
              <p className="font-ligth text-[13px] text-[#737373] text-center sm:text-left">
                Av. San Martín Sur 2575 | , Godoy Cruz - Mendoza.
              </p>
              <p className="font-ligth text-[13px] text-[#737373] text-center sm:text-left">
                Lunes a domingo de 9 a 19 hs.
              </p>
            </div>

            <span className="text-ligthblue text-[13px] cursor-pointer sm:ml-auto">
              Modificar punto de retiro
            </span>
          </CardItem>

          <CardItem margin="mt-3" bg="bg-[#F5F5F5]" flex="flex-col justify-center sm:flex-row">
            <div>
              <div className="border rounded-full border-none bg-white w-[48px] h-[48px] flex items-center justify-center">
                <img src={store} alt="Icono de tienda" className="w-[24px] h-[14px]" />
              </div>
            </div>

            <p className="font-normal text-[15px] text-center sm:text-left">
              Llega al punto de retiro entre el 16 y 19 de mayo
            </p>

            <p className="text-ligthblue text-[13px] cursor-pointer sm:ml-auto text-center sm:text-left">
              Modificar método de entrega
            </p>
          </CardItem>

          <p className="text-lg text-[#333333] font-medium mb-3 mt-10 text-center sm:text-left">
            Detalle del pago
          </p>
          <CardItem bg="bg-[#F5F5F5]" flex="flex-col justify-center sm:flex-row">
            <div>
              <img
                src={pago_facil}
                alt="Icono de tienda"
                className="border rounded-full border-none bg-white p-[0.7rem] w-full h-[full]"
              />
            </div>

            <div className="relative">
              <p className="font-normal text-[15px] text-center sm:text-left">
                Pagás $ 184.999 en Pago Fácil
              </p>
              <p className="text-[13px] text-[#737373] text-center sm:text-left">
                Solamente en sucursales abiertas.
              </p>
            </div>

            <p className="text-ligthblue text-[13px] cursor-pointer sm:ml-auto text-center sm:text-left">
              Modificar medio de pago
            </p>
          </CardItem>
        </div>

        <ProductDetailPayment notification={true} />
      </div>
    </>
  );
};

export default PayConfirmed;
