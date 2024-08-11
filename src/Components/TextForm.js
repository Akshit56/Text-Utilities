import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    console.log('Uppercase button was clicked')
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleOnChange = (event) => {
    console.log('On Change')
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter Text');
  // setText = ("Enter text here")
  return (
    
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value = {text} onChange={handleOnChange}></textarea>
      </div>
      <button className="bt btn-submit" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
