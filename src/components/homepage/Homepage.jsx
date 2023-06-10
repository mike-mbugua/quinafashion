import "./homepage.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import sneaker from "../../assets/images/sneakericon.jpg";
import handbag from "../../assets/images/handbagIcon.jpg";
import hoodie from "../../assets/images/hoodieIcon.jpg";
import slide from "../../assets/images/slidesIcon.jpg";
import Product from "../product/Product";

function Homepage() {
  return (
    <div className="homepage__container">
      {/*  there are two main divs in this section  our category and a carousel*/}

      {/* this will hold the our category section  */}
      <div className="left__container">
        <h3>Our category</h3>
        <div className="category__container">
          <div className="category1">
            <div className="image1">
              <img src={sneaker} alt="" />
            </div>{" "}
            Sneakers
          </div>

          <div className="category1">
            <div className="image1">
              <img src={hoodie} alt="" />
            </div>{" "}
            Clothes
          </div>

          <div className="category1">
            <div className="image1">
              <img src={handbag} alt="" />
            </div>{" "}
            Handbags
          </div>

          <div className="category1">
            <div className="image1">
              <img src={slide} alt="" />
            </div>{" "}
            Slides
          </div>
        </div>
      </div>

      {/* the right container will hold the carousel */}
      <div className="right_container">
        <Product />
      </div>
    </div>
  );
}

export default Homepage;
