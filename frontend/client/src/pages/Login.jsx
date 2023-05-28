import { useEffect, useState } from "react";
import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import LoginNavbar from "../components/Login/LoginNavbar";
import LoginFooter from "../components/Login/LoginFooter";
import ReportProblem from "../components/Login/ReportProblem";
import account from "../assets/icons/account.png";
import { postRequestLogin } from "../services/httpRequest";
import { useDispatch } from "react-redux";
import { setLogin } from "../store/state/authSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { RiErrorWarningFill } from "react-icons/ri";

const Login = () => {
  const [isUser, setIsUser] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let TOKEN = localStorage.getItem("token") ?? "";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("El Email ser un formato valido").required("Es requerido")
    }),
    onSubmit: (values, { setErrors }) => {
      setEmail(values.email);
      setIsUser(true);
      if (values.password) {
        setIsLoading(true);
        console.log(values);
        postRequestLogin(values, "/auth/login")
          .then(res => {
            console.log(res);
            const user = {
              id: res.id,
              name: res.firstName,
              lastname: res.lastName,
              email: res.email,
              role: ""
            };
            dispatch(setLogin({ token: res.token, user }));
            setTimeout(() => {
              setIsLoading(false);
            }, 2000);
            localStorage.setItem("token", res.token);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
          })
          .catch(err => {
            alert("Credenciales Invalidas");
            console.log(err);
          });
      }
    }
  });

  return (
    <>
      <LoginNavbar />

      {TOKEN ? (
        <Navigate to="/" />
      ) : (
        <section className="lg:h-[100vh] mx-10 lg:mx-44 mt-14">
          <div className="flex flex-col lg:flex-row justify-center gap-10">
            <div>
              <h2 className="font-medium text-3xl w-full">
                {isUser ? (
                  <>
                    ¡Hola, {email.split("@")[0].toString().toUpperCase()}! Ingresá tu{" "}
                    <br className="hidden lg:block" />
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
                    <p>{email}</p>
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
                      <label htmlFor={isUser ? "password" : "email"} className="text-sm">
                        {isUser ? "Contraseña" : "E‑mail, teléfono o usuario"}
                      </label>
                      <input
                        type={isUser ? "password" : "text"}
                        name={isUser ? "password" : "email"}
                        id={isUser ? "password" : "email"}
                        value={isUser ? formik.values.password : formik.values.email}
                        onChange={formik.handleChange}
                        className={`w-full lg:w-[408px] h-[48px] p-5 rounded-md border focus:outline-none focus:border-2 border-[#bfbfbf] focus:border-ligthblue ${
                          formik.errors.email !== undefined
                            ? "border-red focus:border-red"
                            : "border-[#bfbfbf] focus:border-ligthblue"
                        }`}
                        error={formik.errors.email}
                      />
                      {formik.errors.email !== undefined && (
                        <span className="text-xs text-[#0000008c] p-2 text-red">
                          {formik.errors.email}
                        </span>
                      )}
                    </div>
                    {isUser ? (
                      <div className="flex flex-col lg:flex-row items-center gap-2 mt-10">
                        <button
                          type="submit"
                          // value="Iniciar sesión"
                          className={`w-full lg:w-[169px] h-[48px] text-[15px] rounded-md font-medium ${
                            formik.values.password.length < 1
                              ? "bg-[#E5E5E5] text-[#B3B9C3]"
                              : "bg-ligthblue text-white cursor-pointer"
                          }`}
                          disabled={formik.values.password.length < 1 ? true : false}
                        >
                          {isLoading ? (
                            <div className="flex items-center justify-center">
                              <div className="border-2 border-white border-t-ligthblue rounded-full w-5 h-5 animate-spin"></div>
                            </div>
                          ) : (
                            "Iniciar Sesión"
                          )}
                        </button>

                        <button className="w-full lg:w-[230px] h-[48px] text-ligthblue text-[15px] rounded-md bg-[#4189E626] font-medium">
                          ¿Olvidaste tu contraseña?
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col lg:flex-row items-center gap-2 mt-10">
                        <input
                          type="submit"
                          value="Continuar"
                          className={`w-full lg:w-[119px] h-[48px] text-[15px] rounded-md font-medium ${
                            formik.values.email.length < 1
                              ? "bg-[#E5E5E5] text-[#B3B9C3]"
                              : "bg-ligthblue text-white cursor-pointer"
                          }`}
                          disabled={formik.values.email.length < 1 ? true : false}
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
      )}

      <LoginFooter />
    </>
  );
};

export default Login;
