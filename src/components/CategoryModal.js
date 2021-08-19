import React from "react";
import CategoryContext from "../context/Category";

export function CategoryModal() {

    const modalContext = React.useContext(CategoryContext)

    function onCancel (){
        modalContext.actions.enableModal()
    }

    return (
        <div className= { modalContext.state.modal ? "modal" : "modal is-active"}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Crear Categoría</p>
                    <button onClick={onCancel} className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    contenido
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success">Crear </button>
                    <button onClick={onCancel} className="button">Cancelar</button>
                </footer>
            </div>
        </div>
    );
}