import "./Navbar.css"
import { NavbarList } from "./NavbarList";

const Navbar = ({name})=>{

  return (
    <h1 className="w-screen text-3xl bg-black text-white fixed top-0 p-5">
      This is Navbar {name}
      <NavbarList/>
    </h1>
  )
}
export default Navbar;