import { useEffect, useState } from "react";
import { MdWork } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { locationRequest } from "../../utils/LocationRequest";
import { postRequest } from "../../services/httpRequest";
import { userAddress } from "../../store/state/authSlice";
import { useDispatch } from "react-redux";
import { getLocalStorage } from "../../utils/LocalStorageFunctions";
import Loader from "./Loader";

const FormNewAdress = () => {
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isRequestFailed, setIsRequestFailed] = useState(false);
  const localStorageData = getLocalStorage("auth");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      contact: "",
      locality: "",
      street: "",
      number: "",
      status: true,
      residential: "",
      phone: "",
      comment: "",
      user_id: localStorageData.user.id,
      zip_code: "",
      province_id: 0,
      floor_apartment: "",
      num_street_init: "",
      num_street_end: "",
      no_number: false
    },
    validationSchema: Yup.object({
      contact: Yup.string().required("Completá este dato."),
      zip_code: Yup.string()
        .length(4, "Ingresá un código postal válido.")
        .required("Completá este dato."),
      locality: Yup.string().required("Completá este dato."),
      street: Yup.string().required("Completá este dato."),
      no_number: Yup.boolean(),
      number: Yup.string().when("no_number", {
        is: false,
        then: () =>
          Yup.string().required("Completá este dato.").max(5, "Ingresa un máximo de 5 caracteres")
      }),
      residential: Yup.boolean().required("Completá este dato."),
      phone: Yup.string()
        .required("Completá este dato.")
        .max(12, "Ingresa un máximo de 12 caracteres")
    }),
    onSubmit: values => {
      const zipCodeAsString = values.zip_code.toString();
      const numberAsString = values.number.toString();
      const phoneAsString = values.phone.toString();
      const residentialAsBool = JSON.parse(values.residential);

      let updatedValues = {
        ...values,
        zip_code: zipCodeAsString,
        number: numberAsString,
        phone: phoneAsString,
        residential: residentialAsBool
      };
      delete updatedValues.no_number;

      postUserAddress(updatedValues);
      navigate("/pay/delivery-type");
    }
  });

  const postUserAddress = async formValues => {
    try {
      const response = await postRequest(formValues, "/api/v1/address");
      dispatch(userAddress(response));
    } catch (error) {
      console.log(error);
    }
  };

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
    if (location.id !== undefined) {
      formik.setFieldValue("province_id", location.id);
      formik.setFieldValue("locality", location.locality);
    }
    //Focus the input to fix the error when sending
    if (!formik.isSubmitting) return;
    if (Object.keys(formik.errors).length > 0) {
      document.getElementsByName(Object.keys(formik.errors)[0])[0].focus();
    }
  }, [formik.errors, formik.isSubmitting, location]);

  return (
    <section className="mx-0 sm:mx-24 lg:ml-14 lg:mr-0 sm:mt-12 flex grow">
      <div className="w-full max-w-[752px] flex flex-col sm:justify-center">
        <h2 className="font-medium text-2xl hidden sm:block">Agregá un domicilio</h2>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="bg-white rounded-md p-10 sm:mt-7">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="contact"
                className={`text-sm ml-2 ${
                  formik.errors.contact !== undefined ? "text-red" : "text-black"
                }`}
              >
                Nombre y apellido
              </label>
              <input
                type="text"
                name="contact"
                id="contact"
                value={formik.values.contact}
                className={`w-full max-w-[412px] h-12 rounded-md border p-3 focus:outline-none focus:border-2 ${
                  formik.errors.contact !== undefined
                    ? "border-red focus:border-red"
                    : "border-[#bfbfbf] focus:border-ligthblue"
                }`}
                onChange={formik.handleChange}
                error={formik.errors.contact}
              />
              {formik.errors.contact !== undefined ? (
                <div className="flex items-center ml-1">
                  <RiErrorWarningFill className="text-red" />
                  <span className="text-xs text-[#0000008c] p-2 text-red">
                    {formik.errors.contact}
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
                {isLoading && <Loader styles="w-5 h-5 border-2 border-grey" />}
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
                  value={location.name || ""}
                  placeholder="Provincia"
                  className="h-12 rounded-md border border-[#bfbfbf] p-3 border-dashed cursor-not-allowed"
                  disabled
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-col mb-8 w-full max-w-[323px] relative">
                <label htmlFor="locality" className="text-sm ml-2">
                  Localidad o barrio
                </label>
                <input
                  type="text"
                  name="locality"
                  id="locality"
                  value={location.locality || formik.values.locality}
                  placeholder="Localidad"
                  className="h-12 rounded-md border border-[#bfbfbf] p-3 border-dashed cursor-not-allowed"
                  disabled
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
              <label htmlFor="floor_apartment" className="text-sm ml-2">
                Piso/Departamento (opcional)
              </label>
              <input
                type="text"
                name="floor_apartment"
                id="floor_apartment"
                className="w-full max-w-[323px] h-12 rounded-md border border-[#bfbfbf] p-3 focus:border-ligthblue focus:outline-none focus:border-2"
                onChange={formik.handleChange}
              />
            </div>

            <div className="mt-8 mb-8 gap-5">
              <span className="text-sm ml-2">¿Entre qué calles está? (opcional)</span>
              <div className="flex mt-3 gap-5 flex-col sm:flex-row">
                <div className="flex flex-col mb-2 w-full max-w-[323px]">
                  <label htmlFor="num_street_init" className="text-sm ml-2">
                    Calle 1
                  </label>
                  <input
                    type="text"
                    name="num_street_init"
                    id="num_street_init"
                    className="h-12 rounded-md border border-[#bfbfbf] p-3 focus:border-ligthblue focus:outline-none focus:border-2"
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="flex flex-col mb-2 w-full max-w-[323px]">
                  <label htmlFor="num_street_end" className="text-sm ml-2">
                    Calle 2
                  </label>
                  <input
                    type="text"
                    name="num_street_end"
                    id="num_street_end"
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
                    name="residential"
                    id="work"
                    value={false}
                    className="cursor-pointer"
                    onChange={formik.handleChange}
                  />
                  <MdWork className="text-[#4A4A4A] text-base" />
                  <label
                    htmlFor="work"
                    className={`text-base cursor-pointer ${
                      formik.errors.residential !== undefined ? "text-red" : "text-black"
                    }`}
                  >
                    Trabajo
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="residential"
                    id="home"
                    value={true}
                    className="cursor-pointer"
                    onChange={formik.handleChange}
                  />
                  <IoMdHome className="text-[#4A4A4A] text-lg" />
                  <label
                    htmlFor="home"
                    className={`text-base cursor-pointer ${
                      formik.errors.residential !== undefined ? "text-red" : "text-black"
                    }`}
                  >
                    Casa
                  </label>
                </div>
              </div>
              {formik.errors.residential !== undefined && (
                <div className="flex items-center ml-1">
                  <RiErrorWarningFill className="text-red" />
                  <span className="text-xs text-[#0000008c] p-2 text-red">
                    {formik.errors.residential}
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
              <label htmlFor="comment" className="text-sm font-medium mb-2">
                Indicaciones adicionales de esta dirección (opcional)
              </label>
              <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="10"
                maxLength="128"
                placeholder="Descripción de la fachada, puntos de referencia para encontrarla, indicaciones de seguridad, etc."
                className="w-full max-w-[675px] h-[95px] sm:h-[70px] rounded-md border border-[#bfbfbf] p-3 font-base overflow-hidden focus:border-ligthblue focus:outline-none focus:border-2"
                onChange={formik.handleChange}
              ></textarea>
              <span className="text-sm text-end p-1 text-[#0000008c]">
                {formik.values.comment.length} / 128
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
