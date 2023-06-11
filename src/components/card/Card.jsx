import "./card.css";
import React from "react";

function Card({ description, image, gender, amount, size, type }) {
  return (
    <div className="cardmain__container">
      <div className="card__container">
        <img src={image} alt="" />
        <h2>{type}</h2>
        <p>Sizes: {size}</p>
        <h4>ksh {amount}</h4>
        <button className="primary-btn">View Details</button>
      </div>
    </div>
  );
}

export default Card;
