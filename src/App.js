import logo from './logo.svg';
import './App.css';
import { Button } from './stories/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            backgroundColor="#34733d"
            label="Batgdf"
            onClick={() => {}}
            primary
            size="large"
          />
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
