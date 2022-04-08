import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import ProteinPage from './components/ProteinPage';

const Routes: React.SFC = () => (
  <div>
    {/* 첫 번째 route */}
    <Route exact 
      path='/'
      render={() => 
        <div>
          <Navbar/>
          <HomePage/>
        </div>
      } 
    />
    {/* 두 번째 route */}
    <Route exact 
      path='/protein'
      render={() => 
        <div>
          <Navbar/>
          <ProteinPage/>
        </div>
      } 
    />
  </div>
);

export default Routes;