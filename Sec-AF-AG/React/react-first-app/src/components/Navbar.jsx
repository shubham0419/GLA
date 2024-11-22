import "./Navbar.css"
import { NavbarList } from "./NavbarList";

const Navbar = ({name,setter})=>{

  return (
    <h1 className="w-screen text-3xl bg-black text-white fixed top-0 p-5">
      This is Navbar {name}
      <button onClick={()=>setter((count)=>{
        return count+1;
      })}>Click me</button>
      <NavbarList/>
    </h1>
  )
}
export default Navbar;