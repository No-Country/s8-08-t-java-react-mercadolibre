import { MdWork } from "react-icons/md";
import { IoMdHome } from "react-icons/io";

const FormNewAdress = () => {
  return (
    <section className="mx-10 sm:mx-24 lg:ml-24 lg:mr-0 mt-12 flex grow">
      <div className="w-full max-w-[752px]">
        <h2 className="font-medium text-2xl">Agregá un domicilio</h2>
        <form action="">
          <div className="bg-white rounded-md  p-10 mt-7">
            <div className="flex flex-col mb-2">
              <label htmlFor="name" className="text-sm ml-2">
                Nombre y apellido
              </label>
              <input
                type="text"
                name=""
                id="name"
                className="w-full max-w-[412px] h-12 rounded-md border border-[#bfbfbf] p-3 focus:border-ligthblue focus:outline-none focus:border-2"
              />
              <span className="text-xs text-[#0000008c]">Tal cual figure en el DNI.</span>
            </div>

            <div className="flex flex-col mb-8">
              <label htmlFor="zip_code" className="text-sm ml-2">
                Código Postal
              </label>
              <input
                type="number"
                name=""
                id="zip_code"
                className="w-full max-w-[323px] h-12 rounded-md border border-[#bfbfbf] p-3 [&::-webkit-inner-spin-button]:appearance-none focus:border-ligthblue focus:outline-none focus:border-2"
              />
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col mb-8 w-full max-w-[323px]">
                <label htmlFor="state" className="text-sm ml-2">
                  Provincia
                </label>
                <input
                  type="text"
                  name=""
                  id="state"
                  className="h-12 rounded-md border border-[#bfbfbf] p-3"
                />
              </div>
              <div className="flex flex-col mb-8 w-full max-w-[323px]">
                <label htmlFor="city" className="text-sm ml-2">
                  Localidad o barrio
                </label>
                <input
                  type="text"
                  name=""
                  id="city"
                  className="h-12 rounded-md border border-[#bfbfbf] p-3 focus:border-ligthblue focus:outline-none focus:border-2"
                />
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col mb-8 w-full max-w-[323px]">
                <label htmlFor="street" className="text-sm ml-2">
                  Calle/Avenida
                </label>
                <input
                  type="text"
                  name=""
                  id="street"
                  className="h-12 rounded-md border border-[#bfbfbf] p-3 focus:border-ligthblue focus:outline-none focus:border-2"
                />
              </div>
              <div className="flex flex-col mb-8 w-full max-w-[323px]">
                <label htmlFor="number" className="text-sm ml-2">
                  Número
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name=""
                    id="number"
                    placeholder="SN"
                    className="h-12 rounded-md border border-[#bfbfbf] p-3 [&::-webkit-inner-spin-button]:appearance-none focus:border-ligthblue focus:outline-none focus:border-2 w-full max-w-[323px]"
                  />
                  <div className="absolute right-4 top-4 flex items-center gap-1">
                    <input type="checkbox" name="" id="no_number" />
                    <label htmlFor="no_number" className="text-xs text-ligthblue">
                      Sin número
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="floor" className="text-sm ml-2">
                Piso/Departamento (opcional)
              </label>
              <input
                type="text"
                name=""
                id="floor"
                className="w-full max-w-[323px] h-12 rounded-md border border-[#bfbfbf] p-3 focus:border-ligthblue focus:outline-none focus:border-2"
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
                    name=""
                    id="street1"
                    className="h-12 rounded-md border border-[#bfbfbf] p-3 focus:border-ligthblue focus:outline-none focus:border-2"
                  />
                </div>
                <div className="flex flex-col mb-2 w-full max-w-[323px]">
                  <label htmlFor="street2" className="text-sm ml-2">
                    Calle 2
                  </label>
                  <input
                    type="text"
                    name=""
                    id="street2"
                    className="h-12 rounded-md border border-[#bfbfbf] p-3 focus:border-ligthblue focus:outline-none focus:border-2"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col mb-7">
              <span className="text-sm ml-2">¿Es tu trabajo o tu casa?</span>
              <div className="flex items-center gap-10 mt-2 ml-4">
                <div className="flex items-center gap-2">
                  <input type="radio" name="place" id="work" className="cursor-pointer" />
                  <MdWork className="text-[#4A4A4A] text-base" />
                  <label htmlFor="work" className="text-base">
                    Trabajo
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" name="place" id="home" className="cursor-pointer" />
                  <IoMdHome className="text-[#4A4A4A] text-lg" />
                  <label htmlFor="home" className="text-base">
                    Casa
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col mb-7">
              <label htmlFor="phone" className="text-sm ml-2">
                Teléfono de contacto
              </label>
              <input
                type="number"
                name=""
                id="phone"
                placeholder="Ej.: 1123456789"
                className="w-full max-w-[323px] h-12 rounded-md border border-[#bfbfbf] p-3 font-base [&::-webkit-inner-spin-button]:appearance-none focus:border-ligthblue focus:outline-none focus:border-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="indications" className="text-sm font-medium mb-2">
                Indicaciones adicionales de esta dirección (opcional)
              </label>
              <textarea
                name=""
                id="indications"
                cols="30"
                rows="10"
                placeholder="Descripción de la fachada, puntos de referencia para encontrarla, indicaciones de seguridad, etc."
                className="w-full max-w-[675px] h-[70px] rounded-md border border-[#bfbfbf] p-3 font-base overflow-hidden focus:border-ligthblue focus:outline-none focus:border-2"
              ></textarea>
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
