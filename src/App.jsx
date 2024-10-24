
import './App.css'



import { Route, Routes } from 'react-router-dom'
import Wishlist from './pages/Wishlist'
import Home from '../src/pages/Home'
import Cart from '../src/pages/Cart'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {
 

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
   <Footer/>
  
    </>
  )
}

export default App
