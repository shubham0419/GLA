import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import SearchForm from './Components/SearchForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <SearchForm/>
    </>
  )
}

export default App
