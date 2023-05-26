import { useState } from "react";
import { useFormik } from "formik";
import LoginNavbar from "../components/Login/LoginNavbar";
import LoginFooter from "../components/Login/LoginFooter";
import ReportProblem from "../components/Login/ReportProblem";
import account from "../assets/icons/account.png";

const Login = () => {
  const [isUser, setIsUser] = useState(false);

  const formik = useFormik({
    initialValues: {
      user: "",
      password: ""
    },
    onSubmit: (values, { setErrors }) => {
      console.log(values);
      setIsUser(true);
    }
  });

  return (
    <>
      <LoginNavbar />

      <section className="lg:h-[100vh] mx-10 lg:mx-44 mt-14">
        <div className="flex flex-col lg:flex-row justify-center gap-10">
          <div>
            <h2 className="font-medium text-3xl w-full">
              {isUser ? (
                <>
                  ¡Hola, Franco! Ingresá tu <br className="hidden lg:block" />
                  contraseña de <br className="hidden lg:block" />
                  Mercado Libre
                </>
              ) : (
                <>
                  Ingresá tu e‑mail, <br className="hidden lg:block" />
                  teléfono o usuario de <br className="hidden lg:block" />
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

          <div className="pb-10">
            <form action="" onSubmit={formik.handleSubmit}>
              <div className="w-full lg:max-w-[489px] h-[290px] lg:h-[248px] border border-solid border-slate-200 rounded-md">
                <div className="p-10">
                  <div>
                    <label htmlFor={isUser ? "password" : "user"} className="text-sm">
                      {isUser ? "Contraseña" : "E‑mail, teléfono o usuario"}
                    </label>
                    <input
                      type={isUser ? "password" : "text"}
                      name={isUser ? "password" : "user"}
                      id={isUser ? "password" : "user"}
                      value={isUser ? formik.values.password : formik.values.user}
                      onChange={formik.handleChange}
                      className="w-full lg:w-[408px] h-[48px] p-5 rounded-md border focus:outline-none focus:border-2 border-[#bfbfbf] focus:border-ligthblue"
                    />
                  </div>
                  {isUser ? (
                    <div className="flex flex-col lg:flex-row items-center gap-2 mt-10">
                      <input
                        type="submit"
                        value="Iniciar sesión"
                        className="w-full lg:w-[169px] h-[48px] text-white text-[15px] rounded-md bg-ligthblue font-medium cursor-pointer"
                        disabled={formik.values.password.length < 1 ? true : false}
                      />
                      <button className="w-full lg:w-[230px] h-[48px] text-ligthblue text-[15px] rounded-md bg-[#4189E626] font-medium">
                        ¿Olvidaste tu contraseña?
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col lg:flex-row items-center gap-2 mt-10">
                      <input
                        type="submit"
                        value="Continuar"
                        className="w-full lg:w-[119px] h-[48px] text-white text-[15px] rounded-md bg-ligthblue font-medium cursor-pointer"
                        disabled={formik.values.user.length < 1 ? true : false}
                      />
                      <button className="w-full lg:w-[119px] h-[48px] text-ligthblue text-[15px] rounded-md bg-transparent font-medium">
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

      <LoginFooter />
    </>
  );
};

export default Login;
