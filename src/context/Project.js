import React from 'react';

const projectContext = React.createContext({
    state: {
        projects:[]
    }
})

export default projectContext;