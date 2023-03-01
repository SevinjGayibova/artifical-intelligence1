import React from 'react'
import './Award.css'

const Award = ({kartinBashligi, meqaleKartininShekli, meqaleMetni}) => {
  return (
    <div className="card col-12 col-md-4 col-lg-2" >
  <img src={meqaleKartininShekli} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{kartinBashligi}</h5>
    <p className="card-text">{meqaleMetni}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}

export default Award