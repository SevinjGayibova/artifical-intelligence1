import React from 'react'

const Button = ({butonunIcindekiDeyer, klassAdi, icon}) => {
 
  return (
    <button className={klassAdi}>{icon && <img src={icon}/>}{butonunIcindekiDeyer}</button>
  )
}

export default Button