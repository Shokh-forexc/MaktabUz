import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:
      "https://maktab.uz/img/46dc2df013081edd2d6b8c6a15bbb63f.png"
  },
  //Second image url
  {
    url:
      "https://maktab.uz/img/65cdf67256c9f323f10d73383d14591f.png"
  },
  //Third image url
  {
    url:
      "https://maktab.uz/img/473c03dcc0bf6dfd091c313dce674654.png"
  },

  //Fourth image url

  {
    url:
      "https://maktab.uz/img/5f551b7703e9f09b1d1409d78a5fa160.png"
  }
];
const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        // showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
