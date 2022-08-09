import { Carousel } from 'antd';
import React from 'react';

export default function MovieCarousel() {
    return (
    <Carousel autoplay className="home-carousel">
        <div>
        <img
            alt="example"
            src={require("./assets/movie04.jpg")}
            className="carousel-img"
          />
        </div>
        <div>
        <img
            alt="example"
            src={require("./assets/movie01.jpg")}
            className="carousel-img"
          />
        </div>
        <div>
        <img
            alt="example"
            src={require("./assets/movie05.jpg")}
            className="carousel-img"
          />
        </div>
        <div>
        <img
            alt="example"
            src={require("./assets/movie03.jpg")}
            className="carousel-img"
          />
        </div>
    </Carousel>
  );
};
