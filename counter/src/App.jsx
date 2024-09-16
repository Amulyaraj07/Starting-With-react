import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(15);


  const addVal=()=>{
    setCounter(counter+1);
  }
  const decVal=()=>{
    setCounter(counter-1);
  }

  //let counter=5;

  return (
    <>
        <h1>Code with Amulya</h1>
        <h2>Counter Value: {counter}</h2>

        <button onClick={addVal}>Increase Val</button><br />
        <button onClick={decVal}>Decrease Val</button>
    </>
  )
}

export default App
