import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Todos from './containers/Todo';

const App = () => (


  <Todos>
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </Todos>
  

);

export default App;
