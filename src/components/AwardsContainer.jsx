import React from 'react'
import Award from './Award'

import mukafatMelumatlari from '../awardsInfo.json'

const AwardsContainer = () => {
  return (
    <div className='row awards-container'>
        {
            mukafatMelumatlari.map(melumat => (
                <Award kartinBasligi={melumat.title} meqaleKartininShekli={melumat.image} meqaleMetni={melumat.text}/>
            ))
        }
        <Award/>
    </div>
  )
}

export default AwardsContainer