import React, { useContext } from "react";
import "./details.css";
import Cart from "../Cart/Cart";
import { CartContext } from "../Cart/CartContext";
import Sneakers from "../sneakers/Sneakers";
import { Link } from "react-router-dom";
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
  const { cart, addToCart, removeItem } = useContext(CartContext);

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
        <Link
          className="primary-btn"
          to={"/"}
          onClick={() => addToCart({ itemId, wearType, price, size, image })}
        >
          add to cart
        </Link>
      </div>

      {/* <Sneakers /> */}
      {/* <Cart cartItems={cart} removeItem={removeItem} /> */}
    </div>
  );
}

export default Details;
