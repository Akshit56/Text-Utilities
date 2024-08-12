import Navbar from './Components/Navbar';
import './App.css';
// import TextForm from './Components/TextForm';
import About from './Components/About'
import React, {useState} from 'react'

function App() {

  const [mode, setmode] = useState('light')
  const toggleMode = () => {
    if(mode === "light"){
      setmode('dark');
    }
    else{
      setmode('light');
    }
  }
  return (
    <>
      <Navbar title = 'TextUtils' about = "About Us" mode = {mode} toggleMode = {toggleMode}/>
      <div className="container my-3"> {/* Margin in y axis of value 3*/ }
        {/* <TextForm heading = "Enter text below"/> */}
      <About />
      </div>
    </>
  );
}

export default App;
