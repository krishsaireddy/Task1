import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import LoginPage from './LoginPage';
import Details from './detail';

function App() {
  return (
    <div className="App">
   <Navbar/>
  <div className='dd1'>
  <LoginPage/>
   <Details/>
  </div>
    </div>
  );
}

export default App;
