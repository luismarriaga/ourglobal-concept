import React from 'react';

const categoryContext = React.createContext({
    state: {
        categories:[], 
        modal: false
    }, 
    actions: {
        add(category){},
        enableModal(){}
    }
})

export default categoryContext;