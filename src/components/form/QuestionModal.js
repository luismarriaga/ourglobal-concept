import React from "react";
import FormContext from "../../context/Form";
import { v4 as uuidv4 } from "uuid";
import "./Form.css"


export function QuestionModal({form}) {

    const formContext = React.useContext(FormContext)

    const { id } = form;

    const nameRef = React.useRef();
    const rankRef = React.useRef();
    const weightRef = React.useRef();
    
    function onCancel (){
        formContext.actions.enableQuestionModal(id)
    }

    function onCreate(){

        const question = {
            id: uuidv4(),
            name: nameRef.current.value, 
            rank: rankRef.current.value, 
            weight: weightRef.current.value,
            answer: 1,
            ponderadoQuestion: 0
        }
        formContext.actions.addQuestions(question, id)
        formContext.actions.enableQuestionModal(id)
    }

    return (
        <div className= {formContext.state.questionModal[id] ? "modal is-active" : "modal" }>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Añadir Pregunta</p>
                    <button onClick={onCancel} className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <div class="field">
                        <label class="label">Pregunta</label>
                        <div class="control">
                            <input class="input" ref={nameRef} type="text" placeholder="Escriba el nombre de la pregunta..." />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Rango de respuesta</label>
                        <div class="control">
                            <input class="input" ref={rankRef} type="number" min="0" max="10" placeholder="Escriba el rango de opciones que desea de 1 a 10..." />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Peso</label>
                        <div class="control">
                            <input class="input" ref={weightRef} type="number" min="0" max="100" placeholder="Escriba el peso de la pregunta..." />
                        </div>
                    </div> 
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-danger" onClick={onCreate}>Crear </button>
                    <button onClick={onCancel} className="button">Cancelar</button>
                </footer>
            </div>
        </div>
    );
}