import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './pages/Events';
import Signs from './pages/Signs';
import Phrases from './pages/Phrases';
import Section18A from './pages/Section18A';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login}/>
          <Route path='/products' Component={Products}/>
          <Route path='/login' Component={Login}/>
          <Route path='register' Component={Register}/>
          <Route path='/events' Component={Events}/>
          <Route path='/signs' Component={Signs}/>
          <Route path='/phrases' Component={Phrases}/>
          <Route path='/section18a' Component={Section18A}/>
          <Route path='/home' Component={Home}/>
          
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
