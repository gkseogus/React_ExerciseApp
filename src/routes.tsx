import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import ProteinPage from './components/ProteinPage';

const Routes: React.SFC = () => (
  <div>
    <Route exact 
      path='/'
      render={() => 
        <div>
          <Navbar/>
          <HomePage/>
        </div>
      } 
    />
    <Route  
      path='/weight'
      render={() => 
        <div>
          <Navbar/>
          <HomePage/>
        </div>
      } 
    />
    <Route exact 
      path='/routine'
      render={() => 
        <div>
          <Navbar/>
          <HomePage/>
        </div>
      } 
    />
    <Route  
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