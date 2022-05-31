import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';
import About from './pages/About';
import Connexion from './pages/Connexion';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.css';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Router>
        <Routes>
          <Route path ='/' element = {<App/>}>
            <Route index  element = {<Home></Home>}></Route>
            <Route path='product' element = {<Product/> }></Route>
            <Route path='add-product' element = {<AddProduct/>} > </Route>
            <Route path='about' element = {<About/> }> </Route>
            <Route path='connexion' element = {<Connexion/>}> </Route>
            <Route path='/register' element = {<Register/> }> </Route>
          </Route>
        </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
