import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';

const Routes: React.SFC = () => (
  <div>
    {/* 첫 번째 route */}
    <Route exact 
      path='/'
      render={() => 
        <div>
          <HomePage/>
        </div>
      } 
    />
  </div>
);

export default Routes;