import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import { useEffect } from 'react';

function App() {

  const [count,setCount] = useState(0);

  let [first,secound] = [10,11,29,13]; // spread operators

  // let count2 = 0;
  // function incriment(){
  //   count2++;
  //   console.log(count2);
  // }

  useEffect(()=>{
    console.log("use effect called");
    // setCount(count+1); //wrong - infinite loop
  },[count]);

  return (
    <>
      {/* hiii {count2}
      <button onClick={(e)=>{incriment()}}>Click</button> */}
      <Navbar setter={setCount}/>
        hiii {count}
      {/* <button onClick={(e)=>{setCount(count+1)}}>Click</button> */}
      <button onClick={() => setCount((prev)=>{return prev+1})}>Click</button>
    </>
  )
}

export default App
