import { useState } from "react";
import NavbarPayment from "../components/Payments/NavbarPayment";
import ReportProblem from "../components/Login/ReportProblem";
import account from "../assets/icons/account.png";

const Login = () => {
  const [isUser, setIsUser] = useState(false);

  const getUser = () => {
    setIsUser(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <NavbarPayment />

      <section className="h-[100vh] mx-44 mt-14">
        <div className="flex justify-center gap-10">
          <div>
            <h2 className="font-medium text-3xl">
              {isUser ? (
                <>
                  ¡Hola, Franco! Ingresá tu
                  <br />
                  contraseña de
                  <br />
                  Mercado Libre
                </>
              ) : (
                <>
                  Ingresá tu e‑mail,
                  <br />
                  teléfono o usuario de
                  <br />
                  Mercado Libre
                </>
              )}
            </h2>

            {isUser && (
              <div className="flex items-center mt-5 border rounded-full w-[220px] p-2 gap-3">
                <div>
                  <img src={account} alt="Icono de persona" />
                </div>
                <div className="flex flex-col text-[11px]">
                  <p>francobuceta95@gmail.com</p>
                  <p className="text-ligthblue">Cambiar cuenta</p>
                </div>
              </div>
            )}

            <ReportProblem />
          </div>

          <div>
            <form action="" onSubmit={handleSubmit}>
              <div className="w-full max-w-[489px] h-[248px] border border-solid border-slate-200 rounded-md">
                <div className="p-10">
                  <div>
                    <label htmlFor={isUser ? "password" : "user"} className="text-sm">
                      {isUser ? "Contraseña" : "E‑mail, teléfono o usuario"}
                    </label>
                    <input
                      type={isUser ? "password" : "text"}
                      name={isUser ? "password" : "user"}
                      id={isUser ? "password" : "user"}
                      className="w-[408px] h-[48px] p-5 rounded-md border border-slate-400"
                    />
                  </div>
                  {isUser ? (
                    <div className="flex items-center gap-2 mt-10">
                      <input
                        type="submit"
                        value="Iniciar sesión"
                        className="w-[169px] h-[48px] text-white text-[15px] rounded-md bg-ligthblue font-medium cursor-pointer"
                      />
                      <button className="w-[230px] h-[48px] text-ligthblue text-[15px] rounded-md bg-[#4189E626] font-medium">
                        ¿Olvidaste tu contraseña?
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 mt-10">
                      <input
                        type="submit"
                        value="Continuar"
                        className="w-[119px] h-[48px] text-white text-[15px] rounded-md bg-ligthblue font-medium cursor-pointer"
                        onClick={getUser}
                      />
                      <button className="w-[119px] h-[48px] text-ligthblue text-[15px] rounded-md bg-transparent font-medium">
                        Crear Cuenta
                      </button>
                    </div>
                  )}
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
