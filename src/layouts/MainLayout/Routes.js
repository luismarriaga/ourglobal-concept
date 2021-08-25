import React from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import { CategoryList } from '../../components/categories/CategoryList';
import { ProjectList } from '../../components/projects/ProjectList';

const Routes = () => (
  <Switch>
    <Route path="/"  exact>
        <ProjectList></ProjectList>
    </Route>
    <Route path="/projects/:id/categories">
      <CategoryList />
    </Route>
  </Switch>
);

export default Routes;
