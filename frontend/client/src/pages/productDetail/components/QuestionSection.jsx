import {AiOutlineSearch, AiOutlineQuestionCircle} from "react-icons/ai"
const QuestionSection=()=>{
    const question=[
        {
            pregunta:"¿cómo te llamas?",
            respuesta:"Miguel"
        },
        {
            pregunta:"¿De dónde eres?",
            respuesta:"Argentina"
        },
        {
            pregunta:"¿Qué comiste?",
            respuesta:"Milanesas"
        }

    ]
    return(
        <div className="flex flex-col">
            <h3 className="text-3xl">Preguntas y respuestas</h3>
            <h4 className="text-xl font-bold py-2">¿Qué querés saber?</h4>
            <div className="w-100 py-5">
                <button className="bg-blue-100 text-ligthblue text-lg p-2 mx-1 rounded-md">Costo y tiempo de envío</button>
                <button className="bg-blue-100 text-ligthblue text-lg p-2 mx-1 rounded-md">Devoluciones gratis</button>
                <button className="bg-blue-100 text-ligthblue text-lg p-2 mx-1 rounded-md">Medios de pago y promociones</button>
                <button className="bg-blue-100 text-ligthblue text-lg p-2 mx-1 rounded-md">Garantía</button>
            </div>
            <h4 className="text-xl font-bold py-2">Buscá lo que querés saber</h4>
            <div className="inline-flex w-9/12 my-2 border border-gray-400 rounded">
                <input
                    type="text"
                    placeholder="Escribí una pregunta o palabra clave..."
                    className="w-11/12 p-3 text-gray-500"
                />
                <div className="bg-ligthblue p-3 w-1/12 flex justify-center content-center items-center text-3xl cursor-pointer">
                    <AiOutlineSearch className="text-white"/>
                </div>
            </div>
            <h4 className="text-xl font-bold py-2 my-2">Últimas realizadas</h4>
            <div className="">
                {question.map(elem=>{
                    return(
                        <div className="p-2">
                            <p className="text-black text-lg">{elem.pregunta}</p>
                            <p className="text-gray-500 mx-8 text-lg">¬ {elem.respuesta}</p>
                        </div>
                    )
                })}
                <button className="text-ligthblue text-xl my-3">Ver {question.length} resultados más V</button>
            </div>
            <div className="bg-blue-100 text-ligthblue text-2xl w-5/12 my-3 flex justify-center items-center">
                <AiOutlineQuestionCircle/>
                <button className="py-3 mx-1">¿Cómo pregunto al vendedor?</button>
            </div>


        </div>

    )
}
export default QuestionSection