import React from 'react';

const FormContext = React.createContext({
    state: {
        forms:[], 
        modal: {}
    }, 
    actions: {
        add(form){},
        enableModal(){}, 
        addAnswers(answer, idForm){}
    }
})

export default FormContext;