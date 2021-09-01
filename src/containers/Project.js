import React, {useState} from 'react';
import ProjectContext from '../context/Project'
import { v4 as uuidv4 } from "uuid";

const Projects = ({children}) => {
    const [projects, setProjects] = useState([{
        id: uuidv4(),
        title: 'Proyecto Principal', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem vel vestibulum netus volutpat ullamcorper praesent. Risus sed pretium id aenean.', 
        initialDate: '28/08/2021', 
        projectLeader: 'Alexander Jimenez', 
        client: 'Western Union',
        teammates:["Luis Marriaga", "Angie Vargas", "Donald Torres", "Rosa Lina"],
        ponderadoProjects: 0     
    }, 
    {
        id: uuidv4(),
        title: 'Proyecto Principal', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem vel vestibulum netus volutpat ullamcorper praesent. Risus sed pretium id aenean.', 
        initialDate: '28/08/2021', 
        projectLeader: 'Alexander Jimenez',  
        client: 'Western Union',
        teammates:["Luis Marriaga", "Angie Vargas", "Donald Torres", "Rosa Lina"],
        ponderadoProjects: 0    
    }, 
    ]);

    function changePonderado(ponderado){
        
    }

    return (
        <ProjectContext.Provider
            value={{
                state:{projects},
                actions:{changePonderado}
            }}
        >
            {children}
        </ProjectContext.Provider>
    )
}

export default Projects;