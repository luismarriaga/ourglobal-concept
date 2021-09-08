import React from "react";
import CategoryContext from "../../context/Category";
import { v4 as uuidv4 } from "uuid";

export function CategoryModal({project}) {

    const categoryContext = React.useContext(CategoryContext)

    const nameRef = React.useRef();
    const weightRef = React.useRef(); 
    const descriptionRef = React.useRef(); 

    function onCancel (){
        categoryContext.actions.enableModal(project.id)
    }

    function onCreate(){
        debugger;
        const category = { 
            id: uuidv4(),
            projectId: project.id, 
            name: nameRef.current.value, 
            weight:weightRef.current.value, 
            description:descriptionRef.current.value,
            ponderadoCategory: 0
        }
        ((categoryContext.state.categories.length === 1 && weightRef.current.value === "100") || validateCreated ) ? alert("No se puede agregar")
        : categoryContext.actions.add(category)
        categoryContext.actions.enableModal(project.id)
    }


    const validateCreated = () => {
        if(categoryContext.state.categories.length === 1){
            if(categoryContext.state.categories[0].weight === "100"){
                return true;
            }
        }
        return false;
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
                    <div className="field">
                        <label className="label">Nombre</label>
                        <div className="control">
                            <input className="input" ref={nameRef} type="text" placeholder="Escriba el nombre de la categoría..." />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Peso</label>
                        <div className="control">
                            <input className="input" ref={weightRef} type="number" min="0" max="100" placeholder="Escriba el peso de la categoría..." />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Descripción</label>
                        <div className="control">
                            <textarea className="textarea" ref={descriptionRef} placeholder="Escriba una descripción de la categoría..."></textarea>
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