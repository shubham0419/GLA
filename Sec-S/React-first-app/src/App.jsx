import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar, { Navbar2 } from './components/Navbar'

function App() {
  const fullName = "shubham"
  let count = 0;
  return (
    <div>
    <Navbar name={fullName} count={count} val={"hiii"}/>
    {/* <Navbar2/> */}
    <h1>Hello {count}</h1>
    </div>
  )
}

export default App;
