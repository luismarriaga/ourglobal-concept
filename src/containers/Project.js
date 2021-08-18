import React from 'react';
import ProjectContext from '../context/Project'

const Projects = ({children}) => {
    const [projects, setProjects] = React.useState([{
        title: 'Proyecto Principal', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem vel vestibulum netus volutpat ullamcorper praesent. Risus sed pretium id aenean.', 
        initialDate: '28/08/2021', 
        projectLeader: 'Alexander Jimenez', 
        client: 'Western Union',
        image: 'https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2019/12/banner-lecciones-aprendidas-proyectos-desarrollo-2019.jpg'
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