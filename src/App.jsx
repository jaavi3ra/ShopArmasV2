import { useState } from 'react'
import './App.css'
import { ProducTemplate } from './components/template/ProducTemplate'; // 👈 Importamos el template

import './styles/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProducTemplate />
    </>
  )
}

export default App