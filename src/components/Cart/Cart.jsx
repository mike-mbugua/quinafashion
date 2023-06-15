import "./Cart.css";
import React from "react";

function Cart({ cartItems, removeItem }) {
  return (
    <div className="cart__main__container">
      <h2>Cart</h2>
      <div className="cart-container">
        {!cartItems || cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table>
            {cartItems.map((item) => (
              <div key={item.id} className="ul-cart-container">
                <div>
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <p>{item.type}</p>
                </div>
                <p>{item.amount}</p>
                <div>
                  <button
                    className="primary-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </table>
        )}
      </div>
    </div>
  );
}

export default Cart;
