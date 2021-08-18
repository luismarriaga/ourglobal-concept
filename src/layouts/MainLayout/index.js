import React from 'react';
import './index.css'
import Routes from './Routes'

const MainLayout = () => {
  return (
    <div>
      <div id='navbar'>
        <div id='logo' /> 
      </div>

      <div id='main-content'>
        <div id='content'> 
          <Routes />
        </div>
      </div>

    </div>

  );
};

export default MainLayout;
