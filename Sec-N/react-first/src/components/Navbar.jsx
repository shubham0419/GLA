import "./Navbar.css"
import React from 'react'

const Navbar = ({userName,count})=>{

  return (
    <div className="navbar">
      Hii from {userName} - {count}
    </div>
  )
}

export default Navbar;