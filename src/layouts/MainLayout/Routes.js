import React from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import { ProjectList } from '../../components/projects/ProjectList';

const Holamundo = () => {
  const params = useParams()
  return <pre>{JSON.stringify(params)}</pre>
}

const Routes = () => (
  <Switch>
    <Route path="/"  exact>
        <ProjectList></ProjectList>
    </Route>
    <Route path="/proyectos/:id/categorias">
      <Holamundo />
    </Route>
  </Switch>
);

export default Routes;
