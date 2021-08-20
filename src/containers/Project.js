import React, {useState} from 'react';
import ProjectContext from '../context/Project'

const Projects = ({children}) => {
    const [projects, setProjects] = useState([{
        id: '1',
        title: 'Proyecto Principal', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem vel vestibulum netus volutpat ullamcorper praesent. Risus sed pretium id aenean.', 
        initialDate: '28/08/2021', 
        projectLeader: 'Alexander Jimenez', 
        client: 'Western Union',        
    }, 
    {
        id: '2',
        title: 'Proyecto Principal', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem vel vestibulum netus volutpat ullamcorper praesent. Risus sed pretium id aenean.', 
        initialDate: '28/08/2021', 
        projectLeader: 'Alexander Jimenez', 
        client: 'Western Union',
    }]);

    return (
        <ProjectContext.Provider
            value={{
                state:{projects}
            }}
        >
            {children}
        </ProjectContext.Provider>
    )
}

export default Projects;