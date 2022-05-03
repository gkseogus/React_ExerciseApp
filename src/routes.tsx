import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/NavBar';
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
          <Navbar/>
          <HomePage/>
        </div>
      }
    />
    <Route  
      path='/weight'
      element={
        <div>
          <Navbar/>
          <WeightPage/>
        </div>
      }
    />
    <Route  
      path='/routine'
      element={
        <div>
          <Navbar/>
          <RoutinePage/>
        </div>
      }
    />
    <Route  
      path='/protein'
      element={
        <div>
          <Navbar/>
          <ProteinPage/>
        </div>
      }
    />
    <Route  
      path='/notice'
      element={
        <div>
          <Navbar/>
          <NoticePage/>
        </div>
      }
    />
  </Routes>
);

export default React.memo(RoutesApp);