import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleListComponent from './ToggleListComponent'
import LifecycleLoggerComponent from './LifecycleLoggerComponent'
import Forms from './Forms'
import Addform from './AddFroms'
import AuthForm from './AuthForm'


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

        {/* <h1>Forms in react</h1> */}
        {/* <ToggleListComponent/> */}
        {/* <LifecycleLoggerComponent watchedProp="Hi Amulya" /> */}
        {/* <Forms/> */}
        {/* <Addform/> */}

        <AuthForm/>

    </>
  )
}

export default App
