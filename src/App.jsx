import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Header } from './components/organism/header'
import { Footer } from './components/organism/footer'
import './styles/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <div>
      <Header />
      <main>
        <h1>cosa aca</h1>
        <div className="card">
        </div>

      </main>
      <Footer />
    </div>
   </>
  )
}

export default App
