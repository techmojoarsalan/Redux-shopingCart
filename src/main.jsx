import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from "./Redux/store"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Provider } from "react-redux"
import Products from './Component/Products';
import Cart from './Component/Cart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Login from './Component/Login';
import ProductsDetails from './Component/ProductsDetails';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './Component/Checkout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<ProductsDetails/>}/>
          <Route path="/checkout" element={<Checkout/>}/>

        </Routes>
      </Router>

    </Provider>
  </React.StrictMode>
)
