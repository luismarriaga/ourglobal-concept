import React from 'react';

const FormContext = React.createContext({
    state: {
        forms:[], 
        modal: {}, 
        questionModal:{}
    }, 
    actions: {
        add(form){},
        enableModal(){}, 
        enableQuestionModal(){},
        addAnswers(answer, idForm){},
        addQuestions(questions, id){}
    }
})

export default FormContext;