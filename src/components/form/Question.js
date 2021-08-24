import React from 'react';
import FormContext from "../../context/Form";
import { v4 as uuidv4 } from "uuid";

export function Question({questions, setQuestions, setIsOpenQuestionForm, idCategory}){

    const nameRef = React.useRef();
    const rankRef = React.useRef();
    const weightRef = React.useRef();

    const formContext = React.useContext(FormContext)

    function handleAddQuestion(){

        debugger;
        const question = {
            id: uuidv4(),
            idCategory: idCategory, 
            name: nameRef.current.value, 
            rank: rankRef.current.value, 
            weight: weightRef.current.value
        }

        debugger;
        setIsOpenQuestionForm(false)
        setQuestions([...questions, question])
    }

    return(
        <div>
            <div class="field">
                <label class="label">Pregunta</label>
                <div class="control">
                    <input class="input" ref={nameRef} type="text" placeholder="Escriba el nombre de la pregunta..." />
                </div>
            </div>

            <div class="field">
                <label class="label">Rango de respuesta</label>
                <div class="control">
                    <input class="input" ref={rankRef} type="number" min="0" max="100" placeholder="Escriba el rango de opciones que desea de 1 a 10..." />
                </div>
            </div>

            <div class="field">
                <label class="label">Peso</label>
                <div class="control">
                    <input class="input" ref={weightRef} type="number" min="0" max="100" placeholder="Escriba el peso de la pregunta..." />
                </div>
            </div> 

            <button className="button is-danger" onClick={handleAddQuestion}> Adicionar </button>
        </div>
    )
}