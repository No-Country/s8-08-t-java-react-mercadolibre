import { useEffect } from "react";
import { MdWork } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormNewAdress = () => {

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
            zip_code: Yup.string().length(4, "Ingresá un código postal válido.").required("Completá este dato."),
            city: Yup.string().required("Completá este dato."),
            street: Yup.string().required("Completá este dato."),
            no_number: Yup.boolean(),
            number: Yup.string().when("no_number", {
                is: false,
                then: () => Yup.string().required("Completá este dato.").max(5, "Ingresa un máximo de 5 caracteres"),
            }),
            place: Yup.string().required("Completá este dato."),
            phone: Yup.string().required("Completá este dato.").max(12, "Ingresa un máximo de 12 caracteres"),
        }),
        onSubmit: (values, {setErrors}) => {
            //console.log(formData);
        },
    })

    useEffect(() => {
        //Hacer focus al input que generó error al hacer submit
        if (!formik.isSubmitting) return;
        if (Object.keys(formik.errors).length > 0) {
            document.getElementsByName(Object.keys(formik.errors)[0])[0].focus();
        }
    }, [formik]);

    return (
        <section className="mx-10 sm:mx-24 lg:ml-24 lg:mr-0 mt-12 flex grow">
            <div className="w-full max-w-[752px]">
                <h2 className="font-medium text-2xl">Agregá un domicilio</h2>
                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="bg-white rounded-md  p-10 mt-7">
                        <div className="flex flex-col mb-2">
                            <label htmlFor="name" className={`text-sm ml-2 ${formik.errors.name !== undefined ? "text-red" : "text-black"}`}>
                                Nombre y apellido
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formik.values.name}
                                className={`w-full max-w-[412px] h-12 rounded-md border p-3 focus:outline-none focus:border-2 ${formik.errors.name !== undefined ? "border-red focus:border-red" : "border-[#bfbfbf] focus:border-ligthblue"}`}
                                onChange={formik.handleChange}
                                error={formik.errors.name}
                            />
                            {
                                formik.errors.name !== undefined ?
                                    <div className="flex items-center ml-1">
                                        <RiErrorWarningFill className="text-red" />
                                        <span className="text-xs text-[#0000008c] p-2 text-red">{formik.errors.name}</span>
                                    </div>
                                    :
                                    <span className="text-xs text-[#0000008c] p-2">Tal cual figure en el DNI.</span>
                            }
                        </div>

                        <div className="flex flex-col mb-8 relative">
                            <label htmlFor="zip_code" className={`text-sm ml-2 ${formik.errors.zip_code !== undefined ? "text-red" : "text-black"}`}>
                                Código Postal
                            </label>
                            <input
                                type="number"
                                name="zip_code"
                                id="zip_code"
                                className={`w-full max-w-[323px] h-12 rounded-md border p-3 [&::-webkit-inner-spin-button]:appearance-none focus:outline-none focus:border-2 ${formik.errors.zip_code !== undefined ? "border-red focus:border-red" : "border-[#bfbfbf] focus:border-ligthblue"}`}
                                onChange={formik.handleChange}
                                error={formik.errors.zip_code}
                            />
                            {
                                formik.errors.zip_code !== undefined &&
                                <div className="flex items-center absolute bottom-[-30px] left-1">
                                    <RiErrorWarningFill className="text-red" />
                                    <span className="text-xs text-[#0000008c] p-2 text-red">{formik.errors.zip_code}</span>
                                </div>
                            }
                        </div>

                        <div className="flex gap-5">
                            <div className="flex flex-col mb-8 w-full max-w-[323px]">
                                <label htmlFor="state" className="text-sm ml-2">
                                    Provincia
                                </label>
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    className="h-12 rounded-md border border-[#bfbfbf] p-3 border-dashed cursor-not-allowed"
                                    disabled
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="flex flex-col mb-8 w-full max-w-[323px] relative">
                                <label htmlFor="city" className={`text-sm ml-2 ${formik.errors.city !== undefined ? "text-red" : "text-black"}`}>
                                    Localidad o barrio
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    className={`h-12 rounded-md border p-3 focus:outline-none focus:border-2 ${formik.errors.city !== undefined ? "border-red focus:border-red" : "border-[#bfbfbf] focus:border-ligthblue"}`}
                                    onChange={formik.handleChange}
                                />
                                {
                                    formik.errors.city !== undefined &&
                                    <div className="flex items-center absolute bottom-[-30px] left-1">
                                        <RiErrorWarningFill className="text-red" />
                                        <span className="text-xs text-[#0000008c] p-2 text-red">{formik.errors.city}</span>
                                    </div>
                                }
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="flex flex-col mb-8 w-full max-w-[323px] relative">
                                <label htmlFor="street" className={`text-sm ml-2 ${formik.errors.street !== undefined ? "text-red" : "text-black"}`}>
                                    Calle/Avenida
                                </label>
                                <input
                                    type="text"
                                    name="street"
                                    id="street"
                                    className={`h-12 rounded-md border p-3 focus:outline-none focus:border-2 ${formik.errors.street !== undefined ? "border-red focus:border-red" : "border-[#bfbfbf] focus:border-ligthblue"}`}
                                    onChange={formik.handleChange}
                                />
                                {
                                    formik.errors.street !== undefined &&
                                    <div className="flex items-center absolute bottom-[-30px] left-1">
                                        <RiErrorWarningFill className="text-red" />
                                        <span className="text-xs text-[#0000008c] p-2 text-red">{formik.errors.street}</span>
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col mb-8 w-full max-w-[323px] relative">
                                <label htmlFor="number" className={`text-sm ml-2 ${formik.errors.number !== undefined ? "text-red" : "text-black"}`}>
                                    Número
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        name="number"
                                        id="number"
                                        placeholder="SN"
                                        className={`h-12 rounded-md border p-3 [&::-webkit-inner-spin-button]:appearance-none focus:outline-none focus:border-2 w-full max-w-[323px] ${formik.errors.number !== undefined ? "border-red focus:border-red" : "border-[#bfbfbf] focus:border-ligthblue"} ${formik.values.no_number && "cursor-not-allowed"}`}
                                        onChange={formik.handleChange}
                                        disabled={formik.values.no_number}
                                    />
                                    <div className="absolute right-4 top-4 flex items-center gap-1">
                                        <input type="checkbox" name="no_number" id="no_number"  checked={formik.values.no_number} onChange={formik.handleChange} />
                                        <label htmlFor="no_number" className="text-xs text-ligthblue">
                                            Sin número
                                        </label>
                                    </div>
                                </div>
                                {
                                    formik.errors.number !== undefined &&
                                    <div className="flex items-center absolute bottom-[-30px] left-1">
                                        <RiErrorWarningFill className="text-red" />
                                        <span className="text-xs text-[#0000008c] p-2 text-red">{formik.errors.number}</span>
                                    </div>
                                }
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
                            <div className="flex mt-3 gap-5">
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

                        <div className="flex flex-col mb-7 relative">
                            <span className="text-sm ml-2">¿Es tu trabajo o tu casa?</span>
                            <div className="flex items-center gap-10 mt-2 ml-4 mb-2">
                                <div className="flex items-center gap-2">
                                    <input type="radio" name="place" id="work" value="work" className="cursor-pointer" onChange={formik.handleChange} />
                                    <MdWork className="text-[#4A4A4A] text-base" />
                                    <label htmlFor="work" className={`text-base cursor-pointer ${formik.errors.place !== undefined ? "text-red" : "text-black"}`}>
                                        Trabajo
                                    </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="radio" name="place" id="home" value="home" className="cursor-pointer" onChange={formik.handleChange} />
                                    <IoMdHome className="text-[#4A4A4A] text-lg" />
                                    <label htmlFor="home" className={`text-base cursor-pointer ${formik.errors.place !== undefined ? "text-red" : "text-black"}`}>
                                        Casa
                                    </label>
                                </div>
                            </div>
                            {
                                formik.errors.place !== undefined &&
                                <div className="flex items-center absolute bottom-[-30px] left-1">
                                    <RiErrorWarningFill className="text-red" />
                                    <span className="text-xs text-[#0000008c] p-2 text-red">{formik.errors.place}</span>
                                </div>
                            }
                        </div>

                        <div className="flex flex-col mb-10 relative mt-10">
                            <label htmlFor="phone" className={`text-sm ml-2 ${formik.errors.phone !== undefined ? "text-red" : "text-black"}`}>
                                Teléfono de contacto
                            </label>
                            <input
                                type="number"
                                name="phone"
                                id="phone"
                                placeholder="Ej.: 1123456789"
                                className={`w-full max-w-[323px] h-12 rounded-md border p-3 font-base [&::-webkit-inner-spin-button]:appearance-none focus:outline-none focus:border-2 ${formik.errors.phone !== undefined ? "border-red focus:border-red" : "border-[#bfbfbf] focus:border-ligthblue"}`}
                                onChange={formik.handleChange}
                            />
                            {
                                formik.errors.phone !== undefined &&
                                <div className="flex items-center absolute bottom-[-30px] left-1">
                                    <RiErrorWarningFill className="text-red" />
                                    <span className="text-xs text-[#0000008c] p-2 text-red">{formik.errors.phone}</span>
                                </div>
                            }
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
                                className="w-full max-w-[675px] h-[70px] rounded-md border border-[#bfbfbf] p-3 font-base overflow-hidden focus:border-ligthblue focus:outline-none focus:border-2"
                                onChange={formik.handleChange}
                            >
                            </textarea>
                            <span className="text-sm text-end p-1 text-[#0000008c]">{formik.values.indications.length} / 128</span>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6 mb-20">
                        <input
                            type="submit"
                            value="Continuar"
                            className="w-[118px] h-[48px] text-white rounded-md bg-ligthblue cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default FormNewAdress;
