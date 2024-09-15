/* eslint-disable no-unused-vars */
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Collection/>} />
        <Route path='/' element={<About/>} />
        <Route path='/' element={<Contact/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/' element={<PlaceOrder/>}/>
        <Route path='/' element={<Product/>}/>
        <Route path='/' element={<Cart/>}/>
        <Route path='/' element={<Orders/>}/>
      </Routes>
    </div>
  )
}

export default App
