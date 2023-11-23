import React from 'react';
import './Comments.css';

function Comments() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <h3 className="comments-header">Our Sutisfied Customers</h3>
      <Slider {...settings}>
        <div className="user-comment">
          <div className="img-comment-container">
            <img src="" alt="user" />
          </div>
          <p>
            Travellia is a well-known platform for travel reviews. Users can
            share their experiences with various travel services, including
            travel agencies. Visit the TripAdvisor website and search for the
            specific travel agency to read reviews.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default Comments;
