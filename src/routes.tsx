import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MainNavbar from './components/MainNavbar';
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
          <MainNavbar/>
          <HomePage/>
        </div>
      }
    />
    <Route  
      path='/weight'
      element={
        <div>
          <MainNavbar/>
          <WeightPage/>
        </div>
      }
    />
    <Route  
      path='/routine'
      element={
        <div>
          <MainNavbar/>
          <RoutinePage/>
        </div>
      }
    />
    <Route  
      path='/protein'
      element={
        <div>
          <MainNavbar/>
          <ProteinPage/>
        </div>
      }
    />
    <Route  
      path='/notice'
      element={
        <div>
          <MainNavbar/>
          <NoticePage/>
        </div>
      }
    />
  </Routes>
);

export default React.memo(RoutesApp);