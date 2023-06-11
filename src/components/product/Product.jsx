import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./product.css";
import airmax from "../../assets/images/yeezy.jpeg";
import hoodie from "../../assets/images/hoodieDisplay.jpg";
import handbag from "../../assets/images/handbag3.jpg";
import slide from "../../assets/images/slidesIcon.jpg";
import airforce from "../../assets/images/airfoce1white.jpg";
import { responsive } from "./carouselsetting";
function Product() {
  return (
    <div className="productsection__container">
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .4"
        transitionDuration={100}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet"]}
      >
        <div className="product__container">
          <img className="product__image" src={airmax} alt="" />
          <h3>Air max</h3>
          <p>$29.99</p>
          <button className="primary-btn">Add To cart</button>
        </div>

        <div className="product__container">
          <img className="product__image" src={hoodie} alt="" />
          <h3>Hoodie</h3>
          <p>$19.99</p>
          <button className="primary-btn">Add To cart</button>
        </div>

        <div className="product__container">
          <img className="product__image" src={handbag} alt="" />
          <h3>handbags</h3>
          <p>$29.99</p>
          <button className="primary-btn">Add To cart</button>
        </div>

        <div className="product__container">
          <img className="product__image" src={airforce} alt="" />
          <h3>Air force</h3>
          <p>$29.99</p>
          <button className="primary-btn">Add To cart</button>
        </div>

        <div className="product__container">
          <img className="product__image" src={airmax} alt="" />
          <h3>Air max</h3>
          <p>$29.99</p>
          <button className="primary-btn">Add To cart</button>
        </div>

        <div className="product__container">
          <img className="product__image" src={slide} alt="" />
          <h3>Slide</h3>
          <p>$0.99</p>
          <button className="primary-btn">Add To cart</button>
        </div>
      </Carousel>
    </div>
  );
}

export default Product;
