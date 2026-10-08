import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App