import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar, { Navbar2 } from './components/Navbar'

function App() {
  const name = "shubham"
  let count = 0;
  return (
    <div>
    <Navbar name={name} count={count}/>
    <Navbar2/>
    <h1>Hello {name}</h1>
      hiiiii {name}
    </div>
  )
}

export default App
