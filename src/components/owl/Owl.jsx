import React, { useState, useEffect } from "react";
import "./owl.css";
import Rating from "./Rating";
import { motion } from "framer-motion";
import {  useNavigate } from "react-router-dom";
import { axiosInstance } from "../../axios";

const Owl = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axiosInstance.get("/restaurants");
        const allRestaurants = response.data.restaurants;
        const randomRestaurants = getRandomRestaurants(allRestaurants, 10);
        setRestaurants(randomRestaurants);
      } catch (error) {
        console.log("Error while fetching restaurants:", error);
      }
    };
    fetchRestaurants();
  }, []);
  const navigate = useNavigate();
  const getRandomRestaurants = (array, count) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  };

  return (
    <div className="owl-container">
      {restaurants && (
        <div className="container owl">
          <h4
            className="owl-title"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Worldwide Top Rated Restaurants
          </h4>
          <motion.div className="carousel">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -2000 }}
              className="inner-carousel"
            >
              {restaurants.map((restaurant) => (
                <motion.div
                  className="item"
                  key={restaurant.id}
                  data-aos="fade-up"
                  data-aos-duration="1800"
                >
                  <img
                    src={restaurant.images[0]}
                    alt="Restaurant-img"
                    onClick={() =>
                      navigate(`/cities/restaurants/details/${restaurant.id}`)
                    }
                  />

                  <h2 className="restaurant">{restaurant.name}</h2>
                  <Rating
                    rating={restaurant.rating}
                    reviews={restaurant.reviews}
                    rank={restaurant.rank}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>{" "}
        </div>
      )}
    </div>
  );
};

export default Owl;
