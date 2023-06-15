import "./sneakers.css";
import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import Cart from "../Cart/Cart";

function Sneakers() {
  const [clothes, setClothes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [cartItems, setCartItems] = useState(() => {
    // Get cartItems from local storage or default to an empty array
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };
  useEffect(() => {
    // Save cartItems to local storage when it changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://quinafashion.onrender.com/clothings")
      .then((resp) => resp.json())
      .then((data) => {
        setClothes(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    );
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = clothes.slice(indexOfFirstPost, indexOfLastPost);

  const renderCards = currentPosts.map((e) => (
    <Card
      key={e.id}
      type={e.weartype}
      amount={e.price}
      image={e.image}
      size={e.size}
      itemId={e.id}
      addToCart={handleAddToCart}
    />
  ));

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="fashion__container" id="fashions">
      <div className="sneaker__container">
        <div className="sneaker__header">
          <h2>Available Fashions</h2>
        </div>

        <div className="sneaer-card-container">{renderCards}</div>
      </div>
      <div className="paginate">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={clothes.length}
          onPageClick={handlePaginationClick}
          currentPage={currentPage}
        />
        <Cart cartItems={cartItems} removeItem={handleRemoveItem} />
      </div>
    </div>
  );
}

export default Sneakers;
