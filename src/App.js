import Navbar from './Components/Navbar';
import './App.css';
// import TextForm from './Components/TextForm';
import About from './Components/About'

function App() {
  return (
    <>
      <Navbar title = 'TextUtils' about = "About Us" />
      <div className="container my-3"> {/* Margin in y axis of value 3*/ }
        {/* <TextForm heading = "Enter text below"/> */}
      <About />
      </div>
    </>
  );
}

export default App;
