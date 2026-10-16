import { useState } from 'react'

import './App.css'
import { Header } from './components/organism/header'
import { Footer } from './components/organism/footer'

import './styles/global.css'
import { Routes, Route } from 'react-router-dom';
import { Home }   from './pages/home';
import { Login }  from './pages/login';
import { Stash }  from './pages/stash';
import { Product }from './pages/product';


function App() {

   const [stashQuantity, setStashQuantity] = useState(0);
  return (
   <>
    <div>
      <Header stashQuantity={stashQuantity}/>
      <main className="main-content">
        <Routes>
        <Route path="/" element={<Home  setStashQuantity={setStashQuantity}/>} />
        <Route path="/home" element={<Home setStashQuantity={setStashQuantity}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/stash" element={<Stash />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      
        

      </main>
      <Footer />
    </div>
   </>
  )
}

export default App