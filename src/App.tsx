import React from 'react';
import './App.css';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './routes';
interface MainProps {
  history: History; // 현재까지 이동한 url 경로들이 담겨있다.
}

const App: React.FC<MainProps> = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
        <Routes />
    </ConnectedRouter>
  );
};

export default App;