import React from 'react';

const categoryContext = React.createContext({
    state: {
        categories:[], 
        modal: {}
    }, 
    actions: {
        add(category){},
        enableModal(){},
        addPonderado(forms){}
    }
})

export default categoryContext;