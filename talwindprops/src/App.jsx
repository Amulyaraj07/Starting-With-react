import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Talwind test</h1>
      <Card username="Amulya" btnText='Click me'/>
      <Card/>
      <Card/>

    </>
  )
}

export default App
