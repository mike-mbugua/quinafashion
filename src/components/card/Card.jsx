import "./card.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card({
  description,
  image,
  gender,
  amount,
  size,
  type,
  itemId,
  addToCart,
}) {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = () => {
    const item = {
      id: itemId,
      type,
      amount,
      size,
      image,
    };
    setCartItems([...cartItems, item]);
    addToCart(item);
    // console.log(item); // Pass the item to the parent component's addToCart function
  };

  return (
    <div className="cardmain__container">
      <div className="card__container">
        <img src={image} alt="" />
        <h2>{type}</h2>
        <p>Sizes: {size}</p>
        <h4>ksh {amount}</h4>
        <div className="card-btns">
          <Link className="details-lins" to={`/fashions/${itemId}`}>
            View Details
          </Link>
          <button className="primary-btn" onClick={handleAddToCart}>
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
