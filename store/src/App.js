import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Slider from './Slider';
import Productslist from './Productslist';
import Products from './Products';
import {useEffect, useState} from "react";
import {Route,Routes,Link} from "react-router-dom";
import About from './About';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route 
        path="/" 
        element={
          <>
          <Slider/>
          <Productslist/>
          </>
        }
        />
        <Route path="About" element={<About/>}/>
        <Route path="product/:productID/:term" element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
