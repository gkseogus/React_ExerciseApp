import { Routes } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import './App.css';

interface MainProps {
  history: History;
}

const App: React.FC<MainProps> = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Routes/>
    </ConnectedRouter>
  );
}

export default App;
