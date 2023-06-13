import React from "react";
import "./details.css";

function Details({
  description,
  genderType,
  image,
  price,
  size,
  available,
  wearType,
  itemId,
}) {
  return (
    <div className="details__container">
      <div className="item__desc">
        <img src={image} alt="" />
        <h2>{wearType}</h2>
        <div className="item__descriptions">
          <span>
            <span className="headers">Available Size:</span> {size}
          </span>
          <p>
            <span className="headers">price:</span> ksh {price}
          </p>
          <h3>Item Description</h3>
          <p>{description}</p>
        </div>
        <button className="primary-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default Details;
