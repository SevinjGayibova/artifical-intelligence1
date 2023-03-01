
import './Data.css'
import React from 'react'
import phoneImg from '../assets/images/phone.svg'

const Data = () => {
  return (
    <div className="data-section">
    <div className="data-left-side col-12 col md-6 ">
        <img src={phoneImg} alt=""  />
    </div>
    <div className="data-right-side col-12 col md-6 ">
        <h6>Apply AI, Deep Learning and Data Sciece to solve</h6>
        <h2>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</h2>
    </div>

</div>
  )
}

export default Data

