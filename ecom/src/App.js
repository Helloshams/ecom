import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import React from 'react'

import Navbar from './Components/Navbar'
import ShopCategory from './Pages/ShopCategory'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'
import men_banner from './Assets/banner_mens.png'
import women_banner from './Assets/banner_women.png'
import kids_banner from './Assets/banner_kids.png'

const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/men" element={<ShopCategory banner={men_banner}category="men"/>}/>
      <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>}/>
      <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>}/>
      <Route path="product/" element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
           </Route>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<LoginSignup/>}/>
    </Routes>
    <Footer/>

    </Router>
    
    </>
    
  )
}

export default App