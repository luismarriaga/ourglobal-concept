import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProjectList } from '../../components/ProjectList';

const Routes = () => (
  <Switch>
    <Route path="/"  exact>
        <ProjectList></ProjectList>
    </Route>
  </Switch>
);

export default Routes;
