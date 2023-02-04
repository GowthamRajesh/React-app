import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
        <img src="./images/ZEE5_logo.png" className="img-logo" alt="" />
      </div>
      <div className="starhub-logo">
        <img src="./images/starhub-logo.png" className="str-logo" alt="" />
      </div>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className="subscribe-msg">
          <p>Failed to login. Please try login with valid credentials</p>
        </div>

      </header>
    </div>
  );
}

export default App;
