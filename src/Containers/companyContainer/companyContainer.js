import React from 'react'
import './companyContainer.css'

function companyContainer(props) {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

    return (
        <div className="company__container">
      <div className="img_height">
        <img className="img__container" src={props.image} alt="abc" />
      </div>

      <div>
        <h3>{props.name}</h3>
        <p>{truncate(props.description, 100)}</p>
        <button className="btn1">{props.button}</button>
      </div>
    </div>
    )
}

export default companyContainer
