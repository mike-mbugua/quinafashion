import "./sneakers.css";
import React, { useState, useEffect } from "react";
import Card from "../card/Card";

function Sneakers({ data }) {
  const [clothes, setClothes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://quinafashion.onrender.com/clothings").then((resp) =>
      resp
        .json()
        .then((data) => {
          setClothes(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        })
    );
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    );
  }

  let cloth = clothes.map((e) => {
    return (
      <Card
        key={e.id}
        type={e.weartype}
        amount={e.price}
        image={e.image}
        size={e.size}
      />
    );
  });

  return (
    <div className="sneaker__container">
      <div className="sneaker__header">
        <h2>Sneakers</h2>
      </div>

      <div className="sneaer-card-container">
        {data
          ? data &&
            data.map((e) => {
              return (
                <Card
                  key={e.id}
                  type={e.weartype}
                  amount={e.price}
                  image={e.image}
                  size={e.size}
                />
              );
            })
          : cloth}
      </div>
    </div>
  );
}

export default Sneakers;
