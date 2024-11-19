import React from "react";
import NavbarList from "./NavbarList";

const Navbar = ({name,count})=>{
  //{name} is a prop
  return (
    <div>
      Hiii from Navbar {name} {count}
      <NavbarList count={count}/>
    </div>
  )
}

export const Navbar2 = ()=>{
  return (
    <div>
      Hiii from Navbar2
    </div>
  )
}

export default Navbar;