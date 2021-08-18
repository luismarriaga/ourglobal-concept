import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Projects from './containers/Project';
import 'bulma/css/bulma.min.css';

const App = () => (
  <Projects>
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </Projects>
);

export default App;
