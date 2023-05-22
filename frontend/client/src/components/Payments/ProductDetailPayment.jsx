import useMediaQuery from "../../hooks/useMediaQuery.js";

const ProductDetailPayment = ({ coupon, notification }) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <>
      {!isMobile ? (
        <aside className="bg-[#F5F5F5] font-light text-[#333333] w-full max-w-[400px] flex flex-col items-center mx-24 lg:mr-14 lg:ml-0 sm:mb-8 sm:pb-12 lg:mb-0 lg:pb-0">
          <div className={`divide-y divide-slate-200 ${!notification && "sticky top-0"}`}>
            <div className="flex justify-center items-center flex-col mt-12 w-[330px]">
              <img
                src="https://www.cetrogar.com.ar/media/catalog/product/s/m/sm-a546_galaxy-a54-5g_awesome-graphite_front.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"
                alt="Producto"
                className="w-12 h-12 rounded-full"
              />
              <p className="mt-3 mb-1 w-56 leading-5">
                Samsung Galaxy A54 5g 256gb 8gb Ram Awesome Graphite
              </p>
              <span className="text-sm">Cantidad: 1</span>
            </div>

            <div
              className={`flex justify-between items-center w-[330px] mt-8 gap-48 relative ${
                coupon && "pb-7"
              }`}
            >
              <div>
                <p className="mt-4 font-normal">Producto</p>
                <p className="mt-4 font-normal">Envío</p>
                {/* Render cupón de descuento */}
                {coupon && (
                  <div className="absolute top-20 p-1">
                    <p className="text-base text-ligthblue">Ingresar código de cupón</p>
                  </div>
                )}
              </div>
              <div>
                <p className="mt-4 font-normal">$ 184.999</p>
                <p className="mt-4 font-normal text-green text-right">Gratis</p>
              </div>
            </div>

            <div className="flex justify-between items-center w-[330px] mt-4 gap-48 font-normal text-lg">
              <p className="mt-4">Pagás</p>
              <p className="mt-4 font-medium">$ 184.999</p>
            </div>
          </div>

          {/* Render de notificaciones y avisos legales */}
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
              <div>
                <button className="w-[316px] h-[48px] text-white rounded-md bg-ligthblue font-medium">
                  Confirmar Compra
                </button>
              </div>
            </div>
          )}
        </aside>
      ) : (
        <div
          className="flex justify-between items-center w-full font-normal text-lg p-5 bg-[#f7f7f7] shadow-inner shadow-black"
          style={{ boxShadow: "0px -6px 6px -2px rgba(0, 0, 0, 0.1)" }}
        >
          <p className="mt-4 text-[#666666]">Pagás</p>
          <p className="mt-4 text-[#333333]">$ 184.999</p>
        </div>
      )}
    </>
  );
};

export default ProductDetailPayment;
