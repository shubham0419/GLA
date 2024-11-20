import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  const name = "Shubham Choudhary"

  return (
    <div>
      {/* {Navbar()} */}
      {/* <Navbar name="Shubham"/> */}
      <Navbar name={name}/>
      hiii from react
      <h1>Shubham</h1>
    </div>
  )
}

export default App
