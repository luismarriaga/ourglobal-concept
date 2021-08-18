import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TodoList } from '../../components/TodoList';

const Routes = () => (
  <Switch>
    <Route path="/"  exact>
        <TodoList></TodoList>
    </Route>
  </Switch>
);

export default Routes;
