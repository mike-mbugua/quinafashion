import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../item details/details";

function ItemDetailsPage({}) {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://quinafashion.onrender.com/clothings/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setSelectedItem(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <Details
      itemId={selectedItem.id}
      image={selectedItem.image}
      wearType={selectedItem.weartype}
      description={selectedItem.description}
      genderType={selectedItem.genderType}
      price={selectedItem.price}
      size={selectedItem.size}
      available={selectedItem.available}
    />
  );
}

export default ItemDetailsPage;
