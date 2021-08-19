import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Projects from './containers/Project';
import Categories from './containers/Category';
import 'bulma/css/bulma.min.css';

const App = () => (
  <Projects>
    <Categories> 
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </Categories>
  </Projects>
);

export default App;
