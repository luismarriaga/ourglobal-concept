import React from 'react';

const projectContext = React.createContext({
    state: {
        projects:[]
    },
    actions:{
        changePonderado(categories){}
    }
})

export default projectContext;