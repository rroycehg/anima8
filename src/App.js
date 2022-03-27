import "./App.css";
import Navbar from "./navfold/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar className="my-nav" />
      <header className="App-header">
        <img
          src={
            "https://i.kym-cdn.com/photos/images/original/001/747/652/48d.gif"
          }
          className="App-logo"
          alt="logo"
        />
        <p>Hey There!</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
