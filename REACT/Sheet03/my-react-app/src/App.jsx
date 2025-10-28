import { useState } from 'react'
import './App.css'
import Ex01 from './exercises/Ex01/Ex01'
import Ex02 from './exercises/Ex02/Ex02'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Ex01></Ex01> */}
      <Ex02></Ex02>
    </div>
  )
}

export default App
