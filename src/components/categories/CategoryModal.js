import React from "react";
import CategoryContext from "../../context/Category";

export function CategoryModal({project}) {

    const categoryContext = React.useContext(CategoryContext)

    const nameRef = React.useRef();
    const weightRef = React.useRef(); 
    const descriptionRef = React.useRef(); 

    function onCancel (){
        categoryContext.actions.enableModal(project.id)
    }

    function onCreate(){
        const category = { 
            projectId: project.id, 
            name: nameRef.current.value, 
            weight:weightRef.current.value, 
            description:descriptionRef.current.value
        }
        categoryContext.actions.add(category)
        categoryContext.actions.enableModal(project.id)
    }

    return (
        <div className= {categoryContext.state.modal[project.id] ? "modal is-active" : "modal" }>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Crear Categoría</p>
                    <button onClick={onCancel} className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <div class="field">
                        <label class="label">Nombre</label>
                        <div class="control">
                            <input class="input" ref={nameRef} type="text" placeholder="Escriba el nombre de la categoría..." />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Peso</label>
                        <div class="control">
                            <input class="input" ref={weightRef} type="number" min="0" max="100" placeholder="Escriba el peso de la categoría..." />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Descripción</label>
                        <div class="control">
                            <textarea class="textarea" ref={descriptionRef} placeholder="Escriba una descripción de la categoría..."></textarea>
                        </div>
                    </div>

                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success" onClick={onCreate}>Crear </button>
                    <button onClick={onCancel} className="button">Cancelar</button>
                </footer>
            </div>
        </div>
    );
}