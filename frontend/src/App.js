import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import ApiKey from './pages/ApiKey';
import Welcome from './pages/Welcome';
import CreateProduct from './pages/CreateProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateEvent from './pages/CreateEvent';
import Events from './pages/Events';
import CreateSigns from './pages/CreateSigns';
import Signs from './pages/Signs';
import CreatePhrase from './pages/CreatePhrase';
import Phrases from './pages/Phrases';
import Section18A from './pages/Section18A';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Welcome}/>
          <Route path='/products' Component={Products}/>
          <Route path='/createProduct' Component={CreateProduct}/>
          <Route path='/login' Component={Login}/>
          <Route path='register' Component={Register}/>
          <Route path='/events' Component={Events}/>
          <Route path='/createEvent' Component={CreateEvent}/>
          <Route path='/createSign' Component={CreateSigns}/>
          <Route path='/signs' Component={Signs}/>
          <Route path='/createPhrase' Component={CreatePhrase}/>
          <Route path='/phrases' Component={Phrases}/>
          <Route path='/section18a' Component={Section18A}/>
          <Route path='/home' Component={Home}/>
          
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
