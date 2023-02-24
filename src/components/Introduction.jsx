import './Introduction.css'

import React from 'react'
import Button from './Button'
import playIcon from '../assets/images/playicon.svg'
import rightSideImg from '../assets/images/profile.svg'

import Typed from 'react-typed';

const Introduction = () => {
  return (
    <div className='introduction-section row'>
        <div className='intro-left-side  col-12 col-md-6 '>
        <h6>NEXT GENERATION PLATFORM</h6>
        <Typed
        className='yaziEffekti'
                strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    loop >
                    
                </Typed>

        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <Button butonunIcindekiDeyer = "Get Started" klassAdi="btn btn-primary"/>
        <Button butonunIcindekiDeyer = "Watch Video" klassAdi="btn btn-primary" icon={playIcon}/>
        </div>
        <div className='intro-right-side col-12 col-md-6  d-flex justify-content-end'>
        <img src={rightSideImg} alt="" className='w-100' />
        </div>
        
    </div>

  )
}

export default Introduction