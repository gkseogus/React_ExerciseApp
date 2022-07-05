import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import NoticePage from './components/NoticePage';
import ProteinPage from './components/ProteinPage';
import RoutinePage from './components/RoutinePage';
import WeightPage from './components/WeightPage';

const RoutesApp = () => (
  <Routes>
    <Route 
      path='/'
      element={
        <div>
          <NavBar/>
          <HomePage/>
        </div>
      }
    />
    <Route  
      path='/weight'
      element={
        <div>
          <NavBar/>
          <WeightPage/>
        </div>
      }
    />
    <Route  
      path='/routine'
      element={
        <div>
          <NavBar/>
          <RoutinePage/>
        </div>
      }
    />
    <Route  
      path='/protein'
      element={
        <div>
          <NavBar/>
          <ProteinPage/>
        </div>
      }
    />
    <Route  
      path='/notice'
      element={
        <div>
          <NavBar/>
          <NoticePage/>
        </div>
      }
    />
  </Routes>
);

export default React.memo(RoutesApp);