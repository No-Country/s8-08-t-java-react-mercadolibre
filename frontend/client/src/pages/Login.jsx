import NavbarPayment from "../components/Payments/NavbarPayment";

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
          </div>
          <div></div>
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
