import React from "react";

import './App.css';
import { Route, Routes ,useNavigate,createSearchParams} from 'react-router-dom';
import { Navbar } from './components';
import { Product } from './pages/product';
import { Products } from './pages/products';
import { Cart } from './pages/cart';
import { NotFound } from './pages/not-found';
import Checkout from "./pages/checkout/checkout";
import { useCart } from './context/cart'

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
        <Route path='/' element={<Products />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
        <Route path="/checkout" element={<Checkout/>} /> 

      </Routes>
    </>
  );
}

export default App;
