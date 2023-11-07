import React, { useEffect, useState } from "react";
import { axiosInstance } from "../axios";
import Slider from "react-slick";
import "./SlickComponent.css";
import { useNavigate } from "react-router-dom";
const SlickComponent = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axiosInstance.get("/hotels");
        const allHotels = response.data.hotels;
        const randomHotels = getRandomHotels(allHotels, 12);
        setHotels(randomHotels);
      } catch (error) {
        console.log("Error while fetching hotels:", error);
      }
    };
    fetchHotels();
  }, []);

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
        breakpoint: 600,
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
  const navigate = useNavigate();
  const getRandomHotels = (array, count) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  };

  return (
    <div className="container SlickContainer">
      <h4
        className="owl-title mb-4"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        Worldwide Top Rated Restaurants
      </h4>
      <Slider {...settings}>
        {hotels &&
          hotels.map((hotel) => (
            <div
              onClick={() => navigate(`/cities/hotels/details/${hotel.id}`)}
              className="SlickItem"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img src={hotel.images[1]} alt={hotel.name} />
              <div className="overlay"></div>
              <h5 className="text-white">{hotel.name}</h5>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default SlickComponent;
