import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { ApplicationState } from './store';
import { Store } from 'redux';
import RoutesApp from './routes';
interface MainProps {
  store: Store<ApplicationState>; // 현재 상태를 store에 저장
}

const App: React.FC<MainProps> = ({ store }) => {
  return (
    <Provider store={store}> 
          <RoutesApp />
    </Provider>
  );
};

export default App;
