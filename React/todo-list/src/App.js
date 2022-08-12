import logo from './logo.svg';
import './App.css';   // here you uncomment css which are make more intreactive our website
//  {} use inside the javascipt
function App() {
  // let mainvarible=333; // here u create javascript varibles
  return (
    <div className="App">
      <header className="App-header">
        {/* <div>{44+3}</div> */}
        {/* <div>{mainvarible}</div> */}
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
