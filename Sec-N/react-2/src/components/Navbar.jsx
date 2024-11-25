import React from 'react'

const Navbar = ({setter})=>{

  return (
    <div className="navbar">
      Hii from Navbar 
      <button onClick={(e)=>{setter((prev)=>{
        return prev+1;
      })}}>Navbar click</button>
    </div>
  )
}

export default Navbar;