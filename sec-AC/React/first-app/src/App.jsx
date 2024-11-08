import { useEffect, useState } from 'react'
import './App.css'
import { Navbar, Navbar2 } from './components/Navbar';

function App() {
  let [count,setcount] = useState(0);

  // useEffect cb can't be a asynchronous function
  // useEffect(async ()=>{
  //   console.log("hiii");
  // },[count]);

  useEffect(()=>{
    console.log("hiii");
    // setcount(count=>{   //trigger infinite loop
    //   return ++count
    // });
  },[count]);

  function incriment(){
    setcount((cnt)=>{
      return ++cnt;
    });
    // console.log(a);
  }

  return (
    <div className='ps-10'>
      <p>d</p>
      <p>d</p>
      <p>d</p>
      <p>d</p>
      <p>d</p>
      <Navbar count={count} setcount={setcount}/>
      <Navbar2 user={"Shubham"} user1={"choudhary"}/>
      {count}
      <button onClick={incriment}>click</button>
      <h1 className='text-3xl text-red-400'>hiiii</h1>
    </div>
  )
}

export default App
