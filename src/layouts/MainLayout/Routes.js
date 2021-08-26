import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CategoryList } from '../../components/categories/CategoryList';
import { ProjectList } from '../../components/projects/ProjectList';
import { FormCarousel } from '../../components/form/FormCarousel';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={ProjectList} />
    <Route path="/projects/:id/categories/:categoryId/forms" component={FormCarousel} />
    <Route path="/projects/:id/categories" component={CategoryList} />
  </Switch>
);

export default Routes;
