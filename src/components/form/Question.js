import React from 'react';

export function Question(){

    const nameRef = React.useRef();
    const weightRef = React.useRef(); 
    const rangoRef = React.useRef(); 

    return(
        <div>
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
                            <input class="input" ref={rangoRef} type="number" min="0" max="100" placeholder="Escriba el rango de opciones que desea de 1 a 10..." />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Peso</label>
                        <div class="control">
                            <input class="input" ref={weightRef} type="number" min="0" max="100" placeholder="Escriba el peso de la pregunta..." />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Peso</label>
                        <div class="control">
                            <input class="input" ref={weightRef} type="number" min="0" max="100" placeholder="Escriba el peso de la pregunta..." />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Peso</label>
                        <div class="control">
                            <input class="input" ref={weightRef} type="number" min="0" max="100" placeholder="Escriba el peso de la pregunta..." />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Peso</label>
                        <div class="control">
                            <input class="input" ref={weightRef} type="number" min="0" max="100" placeholder="Escriba el peso de la pregunta..." />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Peso</label>
                        <div class="control">
                            <input class="input" ref={weightRef} type="number" min="0" max="100" placeholder="Escriba el peso de la pregunta..." />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Peso</label>
                        <div class="control">
                            <input class="input" ref={weightRef} type="number" min="0" max="100" placeholder="Escriba el peso de la pregunta..." />
                        </div>
                    </div>


                </section>
        </div>
    )
}