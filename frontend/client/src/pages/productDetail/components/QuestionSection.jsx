import { AiOutlineSearch, AiOutlineQuestionCircle } from "react-icons/ai";
import { RxCornerBottomLeft } from "react-icons/rx";
import { BsChevronCompactDown } from "react-icons/bs";
import { useState } from "react";
const QuestionSection = () => {
  const question = [
    {
      pregunta: "Lo voy a volver hacer en un rato",
      respuesta: "Hola. Entendemos lo que nos indicas, aguardamos tu compra. Saludos."
    },
    {
      pregunta: "No me toma el pago",
      respuesta: "Fijate si pagaste tu tarjeta, Gracias!"
    },
    {
      pregunta: "Sirve para encontrar mi primer empleo IT",
      respuesta: "Claro!, siempre y cuando hagas las emulaciones de NoCountry, Gracias!"
    },
    {
      pregunta: "Tienen stock??",
      respuesta: "Para vos siempre <3, Gracias!"
    },
    {
      pregunta: "Que colores tienen disponible?",
      respuesta: "Hola, nos queda en Blanco, Negro, Rosa y Azul, Gracias!"
    },
    {
      pregunta: "Hacen permuta por auto o terreno?",
      respuesta: "Si!, con papeles al día y sin deudas!, Gracias!"
    },
    {
      pregunta: "Puedo usarlo por un tiempo y pedir el reembolso gratis?",
      respuesta: "Por supuesto, nosotros te cancelamos el reembolso con gusto para que puedas usarlo mas tiempo ;), Gracias!"
    },
    {
      pregunta: "Cuanto sale?",
      respuesta: "Para ti te lo dejo a precio dolar por MP, Gracias!"
    }
  ];
  const [moreQ, setMoreQ] = useState(false);
  const changeQ = () => {
    moreQ ? setMoreQ(false) : setMoreQ(true);
  };
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-3xl">Preguntas y respuestas</h3>
      <h4 className="text-xl font-bold py-2">¿Qué querés saber?</h4>
      <div className="w-100 py-5">
        <button className="bg-blue-100 text-ligthblue text-xl p-2 mx-1 rounded-md">
          Costo y tiempo de envío
        </button>
        <button className="bg-blue-100 text-ligthblue text-xl p-2 mx-1 rounded-md">
          Devoluciones gratis
        </button>
        <button className="bg-blue-100 text-ligthblue text-xl p-2 mx-1 rounded-md">
          Medios de pago y promociones
        </button>
        <button className="bg-blue-100 text-ligthblue text-xl p-2 mx-1 rounded-md">Garantía</button>
      </div>
      <h4 className="text-xl font-bold py-2">Buscá lo que querés saber</h4>
      <div className="inline-flex w-9/12 my-2 border border-gray-400 rounded">
        <input
          type="text"
          placeholder="Escribí una pregunta o palabra clave..."
          className="w-11/12 p-3 text-gray-500 rounded"
        />
        <div className="bg-ligthblue p-3 w-1/12 flex justify-center content-center items-center text-3xl cursor-pointer">
          <AiOutlineSearch className="text-white" />
        </div>
      </div>
      <h4 className="text-xl font-bold py-2 my-2">Últimas realizadas</h4>
      <div className="">
        <div key={0} className="p-2">
          <p className="text-black text-lg">{question[0].pregunta}</p>
          <p className="text-gray-500 mx-8 text-lg flex">
            <RxCornerBottomLeft /> {question[0].respuesta}
          </p>
        </div>
        {moreQ &&
          question.map(elem => {
            if (question.indexOf(elem) !== 0) {
              return (
                <div key={question.indexOf(elem)} className="p-2">
                  <p className="text-black text-lg">{elem.pregunta}</p>
                  <p className="text-gray-500 mx-8 text-lg flex">
                    <RxCornerBottomLeft />
                    {elem.respuesta}
                  </p>
                </div>
              );
            }
          })}
        <button
          onClick={() => {
            changeQ();
          }}
          className="text-ligthblue text-xl my-3 flex items-center"
        >
          <p>Ver {!moreQ ? question.length - 1 + " preguntas más" : "Menos"}</p>
          <BsChevronCompactDown className={`mx-2 ${moreQ && "rotate-180"}`}/>
        </button>
      </div>
      <div className="bg-blue-100 text-ligthblue text-2xl w-5/12 my-3 flex justify-center items-center rounded-md">
        <AiOutlineQuestionCircle />
        <button className="py-3 mx-1">¿Cómo pregunto al vendedor?</button>
      </div>
    </div>
  );
};
export default QuestionSection;
