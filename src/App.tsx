import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList/ProductList'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from './components/Cart'
function App() {

  return (
    <>
   <div className="om">
  <div className="left-column">
    <h1>Product</h1>
    <ProductList/>
  </div>
  <div className="right-column">
    <h1>Cart</h1>
    <Cart/>
  </div>
</div>

    </>
  )
}

export default App
