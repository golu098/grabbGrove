import React from "react";

import './App.css';
import { Route, Routes ,useNavigate,createSearchParams} from 'react-router-dom';
import { Navbar } from './components';
import { Product } from './pages/product';
import { Products } from './pages/products';
import { Cart } from './pages/cart';
import { NotFound } from './pages/not-found';
import Checkout from "./pages/checkout/checkout";
import { useCart } from './context/cart';
import Home from './pages/home/home';
import Login from "./pages/login/login";
import footer from "./pages/footer/footer";

function App() {
  const navigate=useNavigate();
  const { cartItemCount } = useCart()

  const onSearch=(searchQuery)=>{
    navigate(`/?${createSearchParams({q:searchQuery})}`)
  }
  return (
    <>
      <Navbar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <Routes>
      <Route path='/' element={<Home/>} />

        <Route path='/upshot' element={<Products />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
        <Route path="/checkout" element={<Checkout/>} /> 
        <Route path="/login" element={<Login/>} /> 


      </Routes>
      <footer/>
    </>
  );
}

export default App;
