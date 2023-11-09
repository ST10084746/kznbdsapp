import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import ApiKey from './pages/ApiKey';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Products}/>
          <Route path='/login' Component={Login}/>
          <Route path='register' Component={Register}/>
          <Route path='/apikey' Component={ApiKey}/>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
