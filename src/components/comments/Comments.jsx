import React from 'react';
import './Comments.css';
import Slider from 'react-slick';
import user1 from './media/user1.jpeg';
import user3 from './media/user3.jpeg';
import user4 from './media/user4.jpeg';
import user5 from './media/user5.jpeg';
import user7 from './media/user7.jpeg';
import user6 from './media/user6.jpeg';

function Comments() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div
      className="container py-5"
      style={{ maxWidth: '70%', marginBottom: '4rem' }}
    >
      <h2 className="comments-header">Our Sutisfied Customers</h2>
      <Slider {...settings}>
        <div className="user-comment">
          <div className="img-comment-container">
            <img src={user1} alt="user" className="img-user" />
          </div>
          <p className="comment-text">
            Great we we're not able to use the transfer from the airport, well
            organised Great package offered and I'm so excited! She was also
            very honest!.
          </p>
        </div>

        <div className="user-comment ">
          <div className="img-comment-container">
            <img src={user5} alt="user" className="img-user" />
          </div>
          <p className="comment-text">
            Tinker was fantastic. We are not very tech. minded and she organised
            everything.We look forward to more trips no year. ward to more trips
            next year.
          </p>
        </div>
        <div className="user-comment ">
          <div className="img-comment-container">
            <img src={user3} alt="user" className="img-user" />
          </div>
          <p className="comment-text">
            we we're not able to use the transfer from the airport, however
            Kristy was able to look into it for us and allowed the transfer to
            be from our.
          </p>
        </div>
        <div className="user-comment ">
          <div className="img-comment-container">
            <img src={user4} alt="user" className="img-user" />
          </div>
          <p className="comment-text">
            Tinker was fantastic. We are not very tech. minded and she organised
            everything.We look forward to more trips no year. ward to more trips
            next year.
          </p>
        </div>
        <div className="user-comment ">
          <div className="img-comment-container">
            <img src={user7} alt="user" className="img-user" />
          </div>
          <p className="comment-text">
            First time using TravelOnline and will be using again. booking,
            process was easy. Resort chosen was beautiful, package great.
          </p>
        </div>
        <div className="user-comment ">
          <div className="img-comment-container">
            <img src={user6} alt="user" className="img-user" />
          </div>
          <p className="comment-text">
            First time using TravelOnline and will be using again booking
            process was easy. Resort chosen was beautiful, package great.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default Comments;
