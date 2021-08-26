import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Projects from './containers/Project';
import Categories from './containers/Category';
import Form from './containers/Form'
import 'bulma/css/bulma.min.css';
import "react-alice-carousel/lib/alice-carousel.css";

const App = () => (
  <Projects>
    <Categories> 
      <Form>
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </Form>
    </Categories>
  </Projects>
);

export default App;
