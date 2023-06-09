import { useState } from "react";
import LoginNavbar from "../components/Login/LoginNavbar";
import { RiErrorWarningFill } from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postRequest } from "../services/httpRequest";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      conditions: false
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Ingrese un correo electrónico válido")
        .required("Completá este dato."),
      firstName: Yup.string().required("Completá este dato."),
      lastName: Yup.string().required("Completá este dato."),
      password: Yup.string()
        .required("Completá este dato.")
        .min(6, "Ingresa un mínimo de 6 caracteres")
        .max(20, "Ingresa un máximo de 20 caracteres"),
      conditions: Yup.boolean().oneOf([true], "Debés aceptar los Términos y Condiciones").required()
    }),
    onSubmit: values => {
      delete values.conditions;
      postRegister(values);
      navigate("/auth/login");
    }
  });

  const postRegister = async formValues => {
    try {
      const response = await postRequest(formValues, "/api/v1/auth/register");
      return response;
    } catch (error) {
      response.code !== 201 && setRegisterError(true);
    }
  };

  return (
    <div className="bg-white sm:bg-[#eeeeee] xl:h-[100vh]">
      <LoginNavbar />

      <section className="mx-0 sm:mx-24 lg:ml-14 lg:mr-0 sm:mt-12 flex justify-center">
        <div className="w-full max-w-[752px] flex flex-col sm:justify-center">
          <h2 className="font-medium text-2xl mt-5 sm:mt-0 sm:mb-4 text-center sm:text-left">
            Completá tus datos
          </h2>
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="bg-white rounded-md p-10 sm:mt-0 pb-14">
              <div className="flex flex-col sm:flex-row justify-start items-center gap-5 mb-2">
                <div className="flex flex-col w-[294px]">
                  <label
                    htmlFor="firstName"
                    className={`text-sm ml-2 ${
                      formik.errors.firstName !== undefined ? "text-red" : "text-black"
                    }`}
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formik.values.firstName}
                    className={`w-full max-w-[294px] h-12 rounded-md border p-3 focus:outline-none focus:border-2 ${
                      formik.errors.firstName !== undefined
                        ? "border-red focus:border-red"
                        : "border-[#bfbfbf] focus:border-ligthblue"
                    }`}
                    onChange={formik.handleChange}
                    error={formik.errors.firstName}
                  />
                  {formik.errors.firstName !== undefined ? (
                    <div className="flex items-center ml-1">
                      <RiErrorWarningFill className="text-red" />
                      <span className="text-xs text-[#0000008c] p-2 text-red">
                        {formik.errors.firstName}
                      </span>
                    </div>
                  ) : (
                    <span className="text-xs text-[#0000008c] p-2">Tal cual figure en el DNI.</span>
                  )}
                </div>

                <div className="flex flex-col w-[294px]">
                  <label
                    htmlFor="lastName"
                    className={`text-sm ml-2 ${
                      formik.errors.lastName !== undefined ? "text-red" : "text-black"
                    }`}
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formik.values.lastName}
                    className={`w-full max-w-[294px] h-12 rounded-md border p-3 focus:outline-none focus:border-2 ${
                      formik.errors.lastName !== undefined
                        ? "border-red focus:border-red"
                        : "border-[#bfbfbf] focus:border-ligthblue"
                    }`}
                    onChange={formik.handleChange}
                    error={formik.errors.lastName}
                  />
                  {formik.errors.lastName !== undefined ? (
                    <div className="flex items-center ml-1">
                      <RiErrorWarningFill className="text-red" />
                      <span className="text-xs text-[#0000008c] p-2 text-red">
                        {formik.errors.lastName}
                      </span>
                    </div>
                  ) : (
                    <span className="text-xs text-[#0000008c] p-2">Tal cual figure en el DNI.</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-start items-center gap-5 mb-2">
                <div className="flex flex-col w-[294px]">
                  <label
                    htmlFor="email"
                    className={`text-sm ml-2 ${
                      formik.errors.email !== undefined ? "text-red" : "text-black"
                    }`}
                  >
                    E-mail
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    className={`w-full max-w-[294px] h-12 rounded-md border p-3 focus:outline-none focus:border-2 ${
                      formik.errors.email !== undefined
                        ? "border-red focus:border-red"
                        : "border-[#bfbfbf] focus:border-ligthblue"
                    }`}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                  />
                  {formik.errors.email !== undefined ? (
                    <div className="flex items-center ml-1">
                      <RiErrorWarningFill className="text-red" />
                      <span className="text-xs text-[#0000008c] p-2 text-red">
                        {formik.errors.email}
                      </span>
                    </div>
                  ) : (
                    <span className="text-xs text-[#0000008c] p-2">Asegurate que sea válido.</span>
                  )}
                </div>

                <div className="flex flex-col w-[294px]">
                  <label
                    htmlFor="password"
                    className={`text-sm ml-2 ${
                      formik.errors.password !== undefined ? "text-red" : "text-black"
                    }`}
                  >
                    Clave
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formik.values.password}
                    className={`w-full max-w-[294px] h-12 rounded-md border p-3 focus:outline-none focus:border-2 ${
                      formik.errors.password !== undefined
                        ? "border-red focus:border-red"
                        : "border-[#bfbfbf] focus:border-ligthblue"
                    }`}
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                  />
                  {formik.errors.password !== undefined ? (
                    <div className="flex items-center ml-1">
                      <RiErrorWarningFill className="text-red" />
                      <span className="text-xs text-[#0000008c] p-2 text-red">
                        {formik.errors.password}
                      </span>
                    </div>
                  ) : (
                    <span className="text-xs text-[#0000008c] p-2">
                      Usá entre 6 y 20 caracteres
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col mt-8 sm:mt-5 relative">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="conditions"
                    id="conditions"
                    checked={formik.values.no_number}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="conditions" className="text-xs text-[#0000008c]">
                    Acepto los <span className="text-ligthblue">Términos y Condiciones</span> y
                    autorizo el uso de mis datos de acuerdo a la{" "}
                    <span className="text-ligthblue">Declaración de Privacidad.</span>
                  </label>
                </div>

                {formik.errors.conditions !== undefined && (
                  <div className="flex items-center absolute bottom-[-30px] left-1">
                    <RiErrorWarningFill className="text-red" />
                    <span className="text-xs text-[#0000008c] p-2 text-red">
                      {formik.errors.conditions}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end mt-6 mb-10 lg:mb-20 gap-5">
              {registerError && (
                <p className="font-medium text-xs sm:text-sm justify-center mx-5">
                  Hubo un error al procesar el envío. Revisá los datos ingresados o intenta más
                  tarde.
                </p>
              )}
              <input
                type="submit"
                value="Continuar"
                className="w-full max-w-[323px] sm:w-[118px] h-[48px] text-white rounded-md bg-ligthblue cursor-pointer"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
