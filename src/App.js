import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './Component/Products';
import Product from './Component/Product';
import SignUp from './Component/Auth/SignUp';
import Login from './Component/Auth/Login';
import Contact from './Component/Contact';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/contact' Component={Contact}/>
        <Route exact path='/login' Component={Login}/>
        <Route exact path='/register' Component={SignUp}/>
        <Route exact path='/products' Component={Products}/>
        <Route exact path='/products:id' Component={Product}/>
      </Routes>
    </>
  );
}

export default App;
