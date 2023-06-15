import React, { useEffect, useState } from "react";
import "./Cart.css";

function Cart({ cartItems, removeItem }) {
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    // Save cartItems to local storage when it changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    const amount = cartItems.reduce((total, item) => total + item.amount, 0);
    setTotalAmount(amount);
  }, [cartItems]);

  return (
    <div className="cart__main__container">
      <h2>Cart</h2>
      <div className="cart-container">
        {!cartItems || cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table className="table">
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="ul-cart-container">
                  <td>
                    <div>
                      <img src={item.image} alt="" />
                    </div>
                  </td>
                  <td>
                    <div>
                      <p>{item.type}</p>
                    </div>
                  </td>
                  <td>{item.amount}</td>
                  <td>
                    <div>
                      <button
                        className="primary-btn"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <h3>Total to be paid: {totalAmount}</h3>
            <div className="order-container">
              <button className="primary-btn">Order</button>
            </div>
          </table>
        )}
      </div>
    </div>
  );
}

export default Cart;
