import Holbertonlogo from './Holberton logo.jpg'
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={Holbertonlogo} className="App-logo" alt="logo" />
       <h1>School dashboard</h1>
      </header>

       <div className="horizontal-line"></div>

      <div className='App-body'>
        <p className='body'>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button>OK</button>
      </div>

      <label input="email"></label>

      <div className="hr-bottom"></div>


      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </>
  );
}

export default App;