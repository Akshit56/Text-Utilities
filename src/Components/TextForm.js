import React from 'react'

export default function TextForm(props) {
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className="bt btn-submit">Convert to Uppercase</button>
    </div>
  )
}
