import { Carousel } from "antd";
import React from "react";

export default function MovieCarousel() {
  return (
    <Carousel autoplay className="home-carousel">
      <div>
        <img
          alt="example"
          src={require("./assets/movie1.png")}
          className="carousel-img"
        />
      </div>
      <div>
        <img
          alt="example"
          src={require("./assets/movie2.png")}
          className="carousel-img"
        />
      </div>
      <div>
        <img
          alt="example"
          src={require("./assets/movie3.png")}
          className="carousel-img"
        />
      </div>
    </Carousel>
  );
}
