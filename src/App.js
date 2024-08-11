import Navbar from './Components/Navbar';
import './App.css';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title = 'Navbar2' about = "About Us" />
      <div className="container my-3"> {/* Margin in y axis of value 3*/ }
        <TextForm heading = "Enter text below"/>
      </div>
    </>
    
  );
}

export default App;
