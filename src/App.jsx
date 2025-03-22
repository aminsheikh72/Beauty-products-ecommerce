import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import { ToastContainer } from 'react-toastify'
import ProductCategory from './pages/ProductCategory'
import SingleProduct from './pages/SingleProduct'
import SpecificProduct from './pages/SpecificProduct'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=' bg-pink-200 min-h-screen'>
     <BrowserRouter>
     <Navbar/>
    
     <Routes>
     
     <Route path='/' element={<Home/>} />
     <Route path='/products' element={<Products/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/productCategory/:categories' element={<ProductCategory/>}/>
     <Route path='/product/:id' element={<SingleProduct/>}/>
     <Route path='/products/:id' element={<SpecificProduct/>}/>
     <Route path='/register' element={<Register/>} />
     <Route path='/cart' element={<Cart/>} />
     </Routes>
     <Footer/>
<ToastContainer/>
     </BrowserRouter>
    </div>
  )
}

export default App
