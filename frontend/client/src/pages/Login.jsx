import NavbarPayment from "../components/Payments/NavbarPayment";
import account from "../assets/icons/account.png";
import account2 from "../assets/icons/account2.png";
import cellphone from "../assets/icons/cellphone.png";
import arrow from "../assets/icons/arrow-right.png";

const Login = () => {
  return (
    <>
      <NavbarPayment />

      <section className="h-[100vh] mx-44 mt-14">
        <div className="flex justify-center gap-10">
          <div>
            <h2 className="font-medium text-3xl">
              ¡Hola, Franco! Ingresá tu
              <br />
              contraseña de
              <br />
              Mercado Libre
            </h2>

            <div className="flex items-center mt-5 border rounded-full w-[220px] p-2 gap-3">
              <div>
                <img src={account} alt="Icono de persona" />
              </div>
              <div className="flex flex-col text-[11px]">
                <p>francobuceta95@gmail.com</p>
                <p className="text-ligthblue">Cambiar cuenta</p>
              </div>
            </div>

            <div className="mt-10 w-[224px]">
              <p className="font-medium text-[11px] mb-4">Reportar un problema</p>
              <div className="flex items-center gap-2 text-[#0000008c] text-sm">
                <img src={cellphone} alt="Icono de celular" />
                <p>Robo o pérdida de teléfono</p>
                <img src={arrow} alt="Flecha señalando hacia la derecha" className="ml-auto"/>
              </div>
              <hr className="my-2"/>
              <div className="flex items-center gap-2 text-[#0000008c] text-sm ml-[-4px]">
                <img src={account2} alt="Icono de persona" />
                <p>Robo de cuenta</p>
                <img src={arrow} alt="Flecha señalando hacia la derecha" className="ml-auto"/>
              </div>
              <p className="text-[13px] text-ligthblue mt-6">Necesito ayuda con otros temas</p>
            </div>
          </div>

          <div>
            <form action="">
              <div className="w-full max-w-[489px] h-[248px] border border-solid border-slate-200 rounded-md">
                <div className="p-10">
                  <div>
                    <label htmlFor="password" className="text-sm">
                      Contraseña
                    </label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      className="w-full max-w-[408px] h-[48px] p-5 rounded-md border border-slate-400"
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-10">
                    <button className="w-[169px] h-[48px] text-white text-[15px] rounded-md bg-ligthblue font-medium">
                      Iniciar sesión
                    </button>
                    <button className="w-[230px] h-[48px] text-ligthblue text-[15px] rounded-md bg-[#4189E626] font-medium">
                      ¿Olvidaste tu contraseña?
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
