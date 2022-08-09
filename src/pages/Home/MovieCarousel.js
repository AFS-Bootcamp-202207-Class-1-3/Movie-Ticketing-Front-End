<<<<<<< HEAD
import { Carousel } from 'antd';
import React from 'react';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function MovieCarousel() {
    return (
    <Carousel autoplay>
        <div>
            <h3 style={contentStyle}>1</h3>
        </div>
        <div>
            <h3 style={contentStyle}>2</h3>
        </div>
        <div>
            <h3 style={contentStyle}>3</h3>
        </div>
        <div>
            <h3 style={contentStyle}>4</h3>
        </div>
    </Carousel>
  );
};
=======
import { Carousel } from "antd";
import React from "react";

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
}
>>>>>>> ccb085996238d2637c4d2256e7ab303ca5e6a7c9
