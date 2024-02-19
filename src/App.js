import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Product } from './pages/product';
import { Products } from './pages/products';
import { Cart } from './pages/cart';
import { NotFound } from './pages/not-found';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
