import React from 'react'

const Navbar = ({setter}) => {
  return (
    <div>
      hii Navbar
      <button onClick={(e)=>{setter((prev)=>{return prev+1})}}>nacbar click</button>
    </div>
  )
}

export default Navbar