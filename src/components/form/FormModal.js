import React, {useState} from "react";
import FormContext from "../../context/Form";
import { Question } from "./Question";
import { v4 as uuidv4 } from "uuid";
import "./Form.css"


export function FormModal({category}) {

    const formContext = React.useContext(FormContext)

    const [isOpenQuestionForm, setIsOpenQuestionForm] = useState(false);
    const [questions, setQuestions] = useState([])

    const { id } = category;

    const nameRef = React.useRef();
    const weightRef = React.useRef(); 
    const descriptionRef = React.useRef(); 
    
    function onCancel (){
        formContext.actions.enableModal(id)
    }

    function onCreate(){
        const form = {
            id: uuidv4(), 
            categoryId: id,
            name: nameRef.current.value, 
            weight: weightRef.current.value, 
            description: descriptionRef.current.value, 
            questions,
            ponderadoForm: 0
        }
        
        formContext.actions.add(form)
        formContext.actions.enableModal(id)

    }

    function handleAddQuestion(){
        setIsOpenQuestionForm(!isOpenQuestionForm)
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
                            <input class="input" ref={nameRef} type="text" placeholder="Escriba el nombre del formulario..." />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Peso</label>
                        <div class="control">
                            <input class="input" ref={weightRef} type="number" min="0" max="100" placeholder="Escriba el peso de la pregunta..." />
                        </div>
                    </div> 

                    <div class="field">
                        <label class="label">Descripcion</label>
                        <div class="control">
                            <textarea class="textarea" maxLength="200" ref={descriptionRef} placeholder="Escriba la descripción del formulario..." />
                        </div>
                    </div>
                    
                    <div style={{display:"flex", justifyContent:"flex-start", marginBottom:"2%"}}>
                        <p onClick={handleAddQuestion} className="add-question" >+ Agregar pregunta</p>
                    </div>

                    {questions.length > 0 ? <label class="label">Preguntas</label> : <></>}
                    <div class="field questions-list">
                        <ol>
                            {questions.map((item) => (
                            <li>{item.name}</li>
                            ))}
                        </ol>
                    </div>
                    <br/>
                    {isOpenQuestionForm ? <Question questions={questions} setQuestions={setQuestions} />:  <></> }
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-danger" onClick={onCreate}>Crear </button>
                    <button onClick={onCancel} className="button">Cancelar</button>
                </footer>
            </div>
        </div>
    );
}