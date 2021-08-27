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
        let ques = forms
        .find(form => idForm === form.id)
        .questions
        .map(questi => ({...questi, answer:answer[questi.id]})) 

        let formWithNewAnswers = ({...forms.find(form => idForm === form.id), questions:ques})
        
        const formIndex = forms.findIndex(form => form.id = idForm)

        const newForms = [...forms]
        
        newForms[formIndex] = formWithNewAnswers
        
        console.log(newForms)

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
                    addAnswers
                }
            }}
        >
            {children}
        </FormContext.Provider>
    )
}

export default Forms;