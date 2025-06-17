import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

import Landing from './pages/Landing'
import Products from './pages/Products'
import Layout from './pages/Layout'
import Product from './pages/Product'
import { Toaster } from 'react-hot-toast'
import Categories from './pages/Categories'
import Cart from './pages/Cart'
import Loader from './components/Loader'


function App() {
  return (
    <BrowserRouter>
      <Toaster position='top-center' />
      <Suspense fallback={<Loader/>} >

        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Landing />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<Product />} />
            <Route path='/categories/:id' element={<Categories />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App