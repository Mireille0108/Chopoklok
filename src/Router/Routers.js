


import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../Pages/Home';
import AllFoods from '../Pages/AllFoods';
import FoodDetails from '../Pages/FoodDetails';
import Cart from '../Pages/Cart_checkout';
import Checkout from '../Pages/Checkout';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Cart_checkout from '../Pages/Cart_checkout';


  

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/home'/>} />
    <Route path='/home' element={< Home/>} />
    <Route path='/foods' element={<AllFoods/>} />
    <Route path='/foods/:id' element={<FoodDetails/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/Cart_checkout' element={<Cart_checkout/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/contact' element={<Contact/>} />
    {/* <Route path='/sale' element={<Checkout/>} /> */}
    


  </Routes>
}

export default Routers