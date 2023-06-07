import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery.js";
import { useSelector } from "react-redux";
import { getLocalStorage } from "../../utils/LocalStorageFunctions.js";

const ProductDetailPayment = ({ coupon, notification }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 640px)");
  const { cart } = useSelector(store => store.cart);

  return (
    <>
      {!isMobile ? (
        <aside className="bg-[#F5F5F5] font-light text-[#333333] w-full max-w-[400px] flex flex-col items-center mx-24 lg:mr-14 lg:ml-0 sm:mb-8 sm:pb-12 lg:mb-0 lg:pb-0">
          <div className={`divide-y divide-slate-200 ${!notification && "sticky top-0"}`}>
            <div className="flex justify-center items-center flex-col mt-12 w-[330px]">
              <img
                src={cart.images[0].imageUrl}
                alt="Producto"
                className="w-12 h-12 rounded-full"
              />
              <p className="mt-3 mb-1 w-56 leading-5">{cart.title} </p>
              <span className="text-sm">Cantidad: 1</span>
            </div>

            <div
              className={`flex justify-between items-center w-[350px] mt-8 gap-48 relative ${
                coupon && "pb-7"
              }`}
            >
              <div>
                <p className="mt-4 font-normal">Producto</p>
                <p className="mt-4 font-normal">Envío</p>
                {coupon && (
                  <div className="absolute top-20 p-1">
                    <p className="text-base text-ligthblue">Ingresar código de cupón</p>
                  </div>
                )}
              </div>
              <div>
                <p className="mt-4 font-normal">$ {cart.price}</p>
                <p className="mt-4 font-normal text-green text-right">Gratis</p>
              </div>
            </div>

            <div className="flex justify-between items-center w-[350px] mt-4 gap-48 font-normal text-lg">
              <p className="mt-4">Pagás</p>
              <p className="mt-4 font-medium">$ {cart.price}</p>
            </div>
          </div>

          {notification && (
            <div className="flex flex-col items-center justify-center mt-10 gap-8">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="notification"
                  id="notification"
                  className="cursor-pointer"
                />
                <label htmlFor="notification" className="text-xs leading-5">
                  Mantenete al día recibiendo notificaciones por
                  <br />
                  WhatsApp y SMS.
                </label>
              </div>
              <div>
                <p className="text-xs text-[#737373]">
                  Conocé nuestros <span className="text-ligthblue">avisos legales</span>
                </p>
              </div>
              <div className="lg:pb-10">
                <button
                  onClick={() => navigate("/pay/purchases")}
                  className="w-[316px] h-[48px] text-white rounded-md bg-ligthblue font-medium"
                >
                  Confirmar Compra
                </button>
              </div>
            </div>
          )}
        </aside>
      ) : (
        <div
          className="flex justify-between items-center w-full font-normal text-lg p-5 bg-[#f7f7f7]"
          style={{ boxShadow: "0px -6px 6px -2px rgba(0, 0, 0, 0.1)" }}
        >
          <p className="mt-4 text-[#666666]">Pagás</p>
          <p className="mt-4 text-[#333333]">$ {detail.price}</p>
          {isMobile && notification && (
            <div>
              <button
                onClick={() => navigate("/pay/purchases")}
                className="w-[188px] h-[48px] text-white rounded-md bg-ligthblue font-medium"
              >
                Confirmar Compra
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProductDetailPayment;
