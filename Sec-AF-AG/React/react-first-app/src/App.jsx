import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import axios from "axios"

function App() {

  const name = "Shubham Choudhary"

  let [count,setCount] = useState(0);

  const getUsers = async ()=>{
    let data = await axios.get("https://api.github.com/users/shubham0419");
    console.log(data.data);
  }

  useEffect(()=>{
    console.log("useEffect is called");
    // setCount(count+1); // never call setter of dependency getter
    getUsers();
  },[count]);

  return (
    <div>
      {/* {Navbar()} */}
      {/* <Navbar name="Shubham"/> */}
      <Navbar name={name} setter={setCount}/>
      hiii from react {count}
      {/* <button onClick={()=>{setCount(++count)}}>Incriment</button> */}
      <button onClick={()=>{setCount((cnt)=>{
        return cnt+1;
      })}}>Incriment</button>
      <h1>Shubham</h1>
    </div>
  )
}

export default App
