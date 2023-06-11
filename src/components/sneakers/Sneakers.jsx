import "./sneakers.css";
import React, { useState, useEffect } from "react";
import Card from "../card/Card";

function Sneakers({ data }) {
  const [clothes, setClothes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let fetchData = async () => {
      setIsLoading(true);

      try {
        let response = await fetch(
          "https://quinafashion.onrender.com/clothings"
        );

        let data = await response.json();
        setClothes(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading ...</p>
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
