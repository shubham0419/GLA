import './App.css';
import Navbar from './components/Navbar';

function App() {
  let name = "shubham";

  return (
    <div>
    <Navbar/>
      Hiiiii 
      <span className='bg-inherit'>
      this is {name}</span>
    </div>
  )
}

export default App
