import './App.css';
import LoadingBar from 'react-redux-loading';
import Login from './components/Login/Login';


function App() {
  return (
    <div className="">
      {/* <LoadingBar/> */}
      <Login />
    </div>
  );
}

export default App;

{/* <header className="App-header">
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
</header> */}