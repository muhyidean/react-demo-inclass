
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <h1>Welcome to WAA</h1>
        <Dashboard />
      </div>
    </BrowserRouter>
  );
}

export default App;
