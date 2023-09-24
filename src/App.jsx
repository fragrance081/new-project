import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
// import Card from './components/Card'



function App() {
  const [counter, setCounter] = useState(15)
  
const addValue = () => {
  setCounter(counter + 1);

}

  const removeValue = () => {
    setCounter(counter - 1);
  }


  return (
    <>
    <h1>Chair aur react</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue} >remove Value {counter} </button>
    <p>footer: {counter} </p>
    </>
  )
}

export default App
