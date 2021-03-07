import React from 'react'
import './companyContainer.css'


function companyContainer(props) {
    return (
        <div className="company__container">
      <div className="img_height">
        <img className="img__container" src={props.image} alt="abc" />
      </div>

      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
    )
}

export default companyContainer
