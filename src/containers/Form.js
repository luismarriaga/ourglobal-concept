import React from 'react';
import FormContext from '../context/Form'

const Forms = ({ children }) => {
    const [forms, setForms] = React.useState([]);
    const [modal, setModal] = React.useState({});
    const [questionModal, setQuestionModal] = React.useState({})

    function add(form) {
        const newForms = [...forms, form]
        setForms(newForms)
    }

    function enableModal(key) {
        setModal({...modal,[key]:!modal[key]})
    }

    function enableQuestionModal(key){
        setQuestionModal({...questionModal, [key]:!questionModal[key]})
    }

    function addAnswers(answer, idForm){
    
        let poderadoFormulario = 0
        let ques = forms
        .find(form => idForm === form.id)
        .questions
        .map(questi => ({...questi, answer:answer[questi.id], ponderadoQuestion: answer[questi.id]/questi.rank*questi.weight})) 

        ques.map(q => {
            poderadoFormulario = poderadoFormulario + q.ponderadoQuestion
        })

        let formWithNewAnswers = ({...forms.find(form => idForm === form.id), questions:ques, ponderadoForm: poderadoFormulario})
        
        const formIndex = forms.findIndex(form => form.id === idForm)

        const newForms = [...forms]
        
        newForms[formIndex] = formWithNewAnswers
        
        
        setForms(newForms)
        console.log(forms);

    }

    function addQuestions(questions, id){
        let ques = forms
        .find(form => id === form.id)
        .questions

        let newQuestions = [...ques, questions]
        
        let newForm = ({...forms.find(form => id === form.id), questions:newQuestions})

        const formIndex = forms.findIndex(form => form.id === id)

        const newForms = [...forms]
        
        newForms[formIndex] = newForm

        console.log(newForm);
        
        setForms(newForms)

    }

    return (
        <FormContext.Provider
            value={{
                state: { 
                    forms, 
                    modal,
                    questionModal
                },
                actions: { 
                    add, 
                    enableModal,
                    enableQuestionModal,
                    addAnswers,
                    addQuestions
                }
            }}
        >
            {children}
        </FormContext.Provider>
    )
}

export default Forms;