import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import { useEffect } from 'react';

function App() {
  // let count = 0;

  // const incriment = ()=>{
  //   count++;
  //   console.log(count);
  // }   

  let [count,setCount] = useState(0);

  useEffect(()=>{
    console.log("useEffect is called");
  },[count]);

  return (
    <div>
    <Navbar setter={setCount}/>
      hiiii {count}
      {/* <button onClick={(e)=>{incriment()}}>Click</button> */}
      {/* <button onClick={(e)=>{setCount(count+1)}}>Click</button> */}
      <button onClick={(e)=>{setCount((prev)=>{
        return prev+1;
      })}}>Click</button>
    </div>
  )
}

export default App;

