import React, {useState} from "react";
import FormContext from "../../context/Form";
import { Question } from "./Question";
import "./Form.css"


export function QuestionModal({form}) {

    const formContext = React.useContext(FormContext)

    const [questions, setQuestions] = useState([])

    const { id } = form;
    
    function onCancel (){
        formContext.actions.enableQuestionModal(id)
    }

    function onCreate(){
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
                    <Question questions={questions} setQuestions={setQuestions} />
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-danger" onClick={onCreate}>Crear </button>
                    <button onClick={onCancel} className="button">Cancelar</button>
                </footer>
            </div>
        </div>
    );
}