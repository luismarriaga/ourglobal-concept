import React, {useState} from "react";
import CategoryContext from "../../context/Category";
import FormContext from "../../context/Form";
import { Question } from "./Question";
import "./Form.css"
import { useParams } from "react-router-dom";


export function FormModal({category}) {

    const formContext = React.useContext(FormContext)

    const [isOpenQuestionForm, setIsOpenQuestionForm] = useState(false);
    const [questions, setQuestions] = useState([])

    const { id } = category;

    const nameRef = React.useRef();
    const weightRef = React.useRef(); 
    const rankRef = React.useRef(); 
    
    function onCancel (){
        formContext.actions.enableModal(id)
    }

    function onCreate(){
        
    }

    function handleAddQuestion(){
        setIsOpenQuestionForm(true)
    }

    function handleRemoveQuestion(){
        setIsOpenQuestionForm(false)
    }

    return (
        <div className= {formContext.state.modal[id] ? "modal is-active" : "modal" }>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Crear Formulario</p>
                    <button onClick={onCancel} className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <div class="field">
                        <label class="label">Nombre</label>
                        <div class="control">
                            <input class="input" ref={nameRef} type="text" placeholder="Escriba el nombre de la pregunta..." />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Descripcion</label>
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
                        {questions .map((item) => (
                        <>
                        {item.name}
                        <br/>
                        </>
                        ))}
                    <div style={{display:"flex", justifyContent:"space-evenly"}}>
                        <button onClick={handleAddQuestion} className="button question-button">Agregar pregunta</button>
                        <button onClick={handleRemoveQuestion} className="button cancel-question-button ">Remover</button>
                    </div>
                    <br/>
                    {isOpenQuestionForm ? <Question questions={questions} setQuestions={setQuestions} setIsOpenQuestionForm={setIsOpenQuestionForm} idCategory={id}/>:  <></> }
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-danger" onClick={onCreate}>Crear </button>
                    <button onClick={onCancel} className="button">Cancelar</button>
                </footer>
            </div>
        </div>
    );
}