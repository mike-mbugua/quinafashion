import Details from "../item details/details";
import "./card.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Card({ description, image, gender, amount, size, type, itemId }) {
  return (
    <div className="cardmain__container">
      <div className="card__container">
        <img src={image} alt="" />
        <h2>{type}</h2>
        <p>Sizes: {size}</p>
        <h4>ksh {amount}</h4>
        <Link className="primary-btn" to={`/fashions/${itemId}`}>
          View Details
        </Link>
      </div>
    </div>
  );
}

export default Card;
