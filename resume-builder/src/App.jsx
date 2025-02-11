import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="title">
        <h1> Nate's Resume Builder </h1>
      </div>
    </>
  )
}

export default App
