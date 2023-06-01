import { useEffect, useState } from "react";
import { MdWork } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { locationRequest } from "../../utils/LocationRequest";
import useMediaQuery from "../../hooks/useMediaQuery.js";

const FormNewAdress = () => {
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isRequestFailed, setIsRequestFailed] = useState(false);
  const isMobile = useMediaQuery("(max-width: 451px)");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      zip_code: "",
      state: "",
      city: "",
      street: "",
      number: "",
      no_number: false,
      floor: "",
      street1: "",
      street2: "",
      place: "",
      phone: "",
      indications: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Completá este dato."),
      zip_code: Yup.string()
        .length(4, "Ingresá un código postal válido.")
        .required("Completá este dato."),
      city: Yup.string().required("Completá este dato."),
      street: Yup.string().required("Completá este dato."),
      no_number: Yup.boolean(),
      number: Yup.string().when("no_number", {
        is: false,
        then: () =>
          Yup.string().required("Completá este dato.").max(5, "Ingresa un máximo de 5 caracteres")
      }),
      place: Yup.string().required("Completá este dato."),
      phone: Yup.string()
        .required("Completá este dato.")
        .max(12, "Ingresa un máximo de 12 caracteres")
    }),
    onSubmit: (values, { setErrors }) => {
      console.log(values);
      navigate("/pay/pay-method");
    }
  });

  const getLocation = async event => {
    if (event.target.value.length === 4) {
      setIsLoading(true);

      try {
        const response = await locationRequest("/api/v1/provinces?zipcode=", event.target.value);
        if (response) {
          setIsLoading(false);
          setLocation(response);
        }
      } catch (error) {
        setIsLoading(false);
        setIsRequestFailed(true);
      }
    } else {
      setIsRequestFailed(false);
      setLocation({});
    }
  };

  useEffect(() => {
    //Hacer focus al input que generó error al hacer submit
    if (!formik.isSubmitting) return;
    if (Object.keys(formik.errors).length > 0) {
      document.getElementsByName(Object.keys(formik.errors)[0])[0].focus();
    }
  }, [formik]);

  return (
    <section className="mx-0 sm:mx-24 lg:ml-14 lg:mr-0 sm:mt-12 flex grow">
      <div className="w-full max-w-[752px] flex flex-col sm:justify-center">
        <h2 className="font-medium text-2xl hidden sm:block">Agregá un domicilio</h2>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="bg-white rounded-md p-10 sm:mt-7">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="name"
                className={`text-sm ml-2 ${
                  formik.errors.name !== undefined ? "text-red" : "text-black"
                }`}
              >
                Nombre y apellido
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formik.values.name}
                className={`w-full max-w-[412px] h-12 rounded-md border p-3 focus:outline-none focus:border-2 ${
                  formik.errors.name !== undefined
                    ? "border-red focus:border-red"
                    : "border-[#bfbfbf] focus:border-ligthblue"
                }`}
                onChange={formik.handleChange}
                error={formik.errors.name}
              />
              {formik.errors.name !== undefined ? (
                <div className="flex items-center ml-1">
                  <RiErrorWarningFill className="text-red" />
                  <span className="text-xs text-[#0000008c] p-2 text-red">
                    {formik.errors.name}
                  </span>
                </div>
              ) : (
                <span className="text-xs text-[#0000008c] p-2">Tal cual figure en el DNI.</span>
              )}
            </div>

            <div className="flex flex-col mb-8 relative">
              <label
                htmlFor="zip_code"
                className={`text-sm ml-2 ${
                  formik.errors.zip_code !== undefined ? "text-red" : "text-black"
                }`}
              >
                Código Postal (Argentina)
              </label>
              <div className="flex items-center gap-3 relative">
                <input
                  type="number"
                  name="zip_code"
                  id="zip_code"
                  value={formik.values.zip_code}
                  className={`w-full max-w-[323px] h-12 rounded-md border p-3 [&::-webkit-inner-spin-button]:appearance-none focus:outline-none focus:border-2 ${
                    formik.errors.zip_code !== undefined
                      ? "border-red focus:border-red"
                      : "border-[#bfbfbf] focus:border-ligthblue"
                  }`}
                  onChange={event => {
                    formik.handleChange(event);
                    getLocation(event);
                  }}
                  error={formik.errors.zip_code}
                />
                {isLoading && (
                  <div
                    role="status"
                    className={`${isMobile ? "absolute right-10" : "relative right-0"}`}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                )}
              </div>
              {isRequestFailed && (
                <div className="flex items-center absolute bottom-[-30px] left-1">
                  <RiErrorWarningFill className="text-red" />
                  <span className="text-xs text-[#0000008c] p-2 text-red">
                    Error. Código postal inválido.
                  </span>
                </div>
              )}
              {formik.errors.zip_code !== undefined && (
                <div className="flex items-center absolute bottom-[-30px] left-1">
                  <RiErrorWarningFill className="text-red" />
                  <span className="text-xs text-[#0000008c] p-2 text-red">
                    {formik.errors.zip_code}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-5">
              <div className="flex flex-col sm:mb-8 w-full max-w-[323px]">
                <label htmlFor="state" className="text-sm ml-2">
                  Provincia
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={location.name || formik.values.state}
                  placeholder="Provincia"
                  className="h-12 rounded-md border border-[#bfbfbf] p-3 border-dashed cursor-not-allowed"
                  disabled
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-col mb-8 w-full max-w-[323px] relative">
                <label htmlFor="city" className="text-sm ml-2">
                  Localidad o barrio
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={location.locality || formik.values.city}
                  placeholder="Localidad"
                  className="h-12 rounded-md border p-3 focus:outline-none focus:border-2"
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            <div className="flex gap-8 sm:gap-5 flex-col sm:flex-row">
              <div className="flex flex-col sm:mb-8 w-full max-w-[323px] relative">
                <label
                  htmlFor="street"
                  className={`text-sm ml-2 ${
                    formik.errors.street !== undefined ? "text-red" : "text-black"
                  }`}
                >
                  Calle/Avenida
                </label>
                <input
                  type="text"
                  name="street"
                  id="street"
                  className={`h-12 rounded-md border p-3 focus:outline-none focus:border-2 ${
                    formik.errors.street !== undefined
                      ? "border-red focus:border-red"
                      : "border-[#bfbfbf] focus:border-ligthblue"
                  }`}
                  onChange={formik.handleChange}
                />
                {formik.errors.street !== undefined && (
                  <div className="flex items-center absolute bottom-[-30px] left-1">
                    <RiErrorWarningFill className="text-red" />
                    <span className="text-xs text-[#0000008c] p-2 text-red">
                      {formik.errors.street}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-col mb-8 w-full max-w-[323px] relative">
                <label
                  htmlFor="number"
                  className={`text-sm ml-2 ${
                    formik.errors.number !== undefined ? "text-red" : "text-black"
                  }`}
                >
                  Número
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="SN"
                    className={`h-12 rounded-md border p-3 [&::-webkit-inner-spin-button]:appearance-none focus:outline-none focus:border-2 w-full max-w-[323px] ${
                      formik.errors.number !== undefined
                        ? "border-red focus:border-red"
                        : "border-[#bfbfbf] focus:border-ligthblue"
                    } ${formik.values.no_number && "cursor-not-allowed"}`}
                    onChange={formik.handleChange}
                    disabled={formik.values.no_number}
                  />
                  <div className="absolute right-4 top-4 flex items-center gap-1">
                    <input
                      type="checkbox"
                      name="no_number"
                      id="no_number"
                      checked={formik.values.no_number}
                      onChange={formik.handleChange}
                    />
                    <label htmlFor="no_number" className="text-xs text-ligthblue">
                      Sin número
                    </label>
                  </div>
                </div>
                {formik.errors.number !== undefined && (
                  <div className="flex items-center absolute bottom-[-30px] left-1">
                    <RiErrorWarningFill className="text-red" />
                    <span className="text-xs text-[#0000008c] p-2 text-red">
                      {formik.errors.number}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="floor" className="text-sm ml-2">
                Piso/Departamento (opcional)
              </label>
              <input
                type="text"
                name="floor"
                id="floor"
                className="w-full max-w-[323px] h-12 rounded-md border border-[#bfbfbf] p-3 focus:border-ligthblue focus:outline-none focus:border-2"
                onChange={formik.handleChange}
              />
            </div>

            <div className="mt-8 mb-8 gap-5">
              <span className="text-sm ml-2">¿Entre qué calles está? (opcional)</span>
              <div className="flex mt-3 gap-5 flex-col sm:flex-row">
                <div className="flex flex-col mb-2 w-full max-w-[323px]">
                  <label htmlFor="street1" className="text-sm ml-2">
                    Calle 1
                  </label>
                  <input
                    type="text"
                    name="street1"
                    id="street1"
                    className="h-12 rounded-md border border-[#bfbfbf] p-3 focus:border-ligthblue focus:outline-none focus:border-2"
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="flex flex-col mb-2 w-full max-w-[323px]">
                  <label htmlFor="street2" className="text-sm ml-2">
                    Calle 2
                  </label>
                  <input
                    type="text"
                    name="street2"
                    id="street2"
                    className="h-12 rounded-md border border-[#bfbfbf] p-3 focus:border-ligthblue focus:outline-none focus:border-2"
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col mb-5">
              <span className="text-sm ml-2">¿Es tu trabajo o tu casa?</span>
              <div className="flex items-center gap-10 mt-2 ml-4 mb-2">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="place"
                    id="work"
                    value="work"
                    className="cursor-pointer"
                    onChange={formik.handleChange}
                  />
                  <MdWork className="text-[#4A4A4A] text-base" />
                  <label
                    htmlFor="work"
                    className={`text-base cursor-pointer ${
                      formik.errors.place !== undefined ? "text-red" : "text-black"
                    }`}
                  >
                    Trabajo
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="place"
                    id="home"
                    value="home"
                    className="cursor-pointer"
                    onChange={formik.handleChange}
                  />
                  <IoMdHome className="text-[#4A4A4A] text-lg" />
                  <label
                    htmlFor="home"
                    className={`text-base cursor-pointer ${
                      formik.errors.place !== undefined ? "text-red" : "text-black"
                    }`}
                  >
                    Casa
                  </label>
                </div>
              </div>
              {formik.errors.place !== undefined && (
                <div className="flex items-center ml-1">
                  <RiErrorWarningFill className="text-red" />
                  <span className="text-xs text-[#0000008c] p-2 text-red">
                    {formik.errors.place}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col mb-10 relative">
              <label
                htmlFor="phone"
                className={`text-sm ml-2 ${
                  formik.errors.phone !== undefined ? "text-red" : "text-black"
                }`}
              >
                Teléfono de contacto
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Ej.: 1123456789"
                className={`w-full max-w-[323px] h-12 rounded-md border p-3 font-base [&::-webkit-inner-spin-button]:appearance-none focus:outline-none focus:border-2 ${
                  formik.errors.phone !== undefined
                    ? "border-red focus:border-red"
                    : "border-[#bfbfbf] focus:border-ligthblue"
                }`}
                onChange={formik.handleChange}
              />
              {formik.errors.phone !== undefined && (
                <div className="flex items-center absolute bottom-[-30px] left-1">
                  <RiErrorWarningFill className="text-red" />
                  <span className="text-xs text-[#0000008c] p-2 text-red">
                    {formik.errors.phone}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="indications" className="text-sm font-medium mb-2">
                Indicaciones adicionales de esta dirección (opcional)
              </label>
              <textarea
                name="indications"
                id="indications"
                cols="30"
                rows="10"
                maxLength="128"
                placeholder="Descripción de la fachada, puntos de referencia para encontrarla, indicaciones de seguridad, etc."
                className="w-full max-w-[675px] h-[95px] sm:h-[70px] rounded-md border border-[#bfbfbf] p-3 font-base overflow-hidden focus:border-ligthblue focus:outline-none focus:border-2"
                onChange={formik.handleChange}
              ></textarea>
              <span className="text-sm text-end p-1 text-[#0000008c]">
                {formik.values.indications.length} / 128
              </span>
            </div>
          </div>

          <div className="flex justify-center sm:justify-end mt-6 lg:mb-20">
            <input
              type="submit"
              value="Continuar"
              className="w-full max-w-[323px] sm:w-[118px] h-[48px] text-white rounded-md bg-ligthblue cursor-pointer"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormNewAdress;
