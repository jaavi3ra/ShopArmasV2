import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

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
  const [count, setCount] = useState(0)

  return (
   <>
    <div>
      <Header />
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stash" element={<Stash />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <main>
        <Home/>

      </main>
      <Footer />
    </div>
   </>
  )
}

export default App