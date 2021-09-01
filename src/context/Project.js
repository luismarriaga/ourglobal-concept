import React from 'react';

const projectContext = React.createContext({
    state: {
        projects:[]
    },
    actions:{
        changePonderado(ponderado){}
    }
})

export default projectContext;