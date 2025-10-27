import { useState } from 'react'
import './App.css'
import MensajePersonalizado from './exersices/Ex01/MensajePersonalizado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MensajePersonalizado color='green' texto='Hola me llamo hipopotamo'/>



    </div>    
  )
}

export default App
