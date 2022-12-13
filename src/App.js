import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Header, Home, Footer } from "./components/index"
import Register from './page/register/register';
import Login from './page/login/login';
import Shopping from './page/shopping/shopping'

//App
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/homepage" />} />
            <Route path='homepage' element={<Home />}></Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/shopping' element={<Shopping />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>

  );
};

export default Item
