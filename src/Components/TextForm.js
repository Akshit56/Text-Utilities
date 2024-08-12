import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log('Uppercase button was clicked')
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = () => {
    // console.log('Uppercase button was clicked')
    let newText = text.toLowerCase();
    setText(newText)
  }

  const clearText = () => {
    // console.log('Uppercase button was clicked')
    let newText = '';
    setText(newText)
  }

  const handleOnChange = (event) => {
    // console.log('On Change')
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter Text');
  // setText = ("Enter text here")
  return (
    
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        {/* <h1>{text}</h1> */}
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value = {text} onChange={handleOnChange}></textarea>
      </div>
      <button className="bt btn-submit mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="bt btn-submit mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="bt btn-submit mx-2" onClick={clearText}>Clear Text</button>
    <h2> Summary</h2>
    <p>{text.split(" ").length} Words {text.length} Characters</p>
    <p>{text.split(" ").length *0.008} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
  )
}
