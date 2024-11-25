import './App.css';
import Navbar from './components/Navbar';

function App() {
  let name = "shubham";


  return (
    <div>
    <Navbar userName={name} count={20}/>
      Hiiiii 
      <span className='bg-inherit'>
      this is {name}</span>
    </div>
  )
}

export default App
