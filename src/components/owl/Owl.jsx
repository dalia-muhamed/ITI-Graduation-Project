import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './owl.css';
import Rating from './Rating';
import { motion } from 'framer-motion';

const Owl = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          'https://travelya.onrender.com/restaurants/'
        );
        const restaurants = await response.data.restaurants;
        setRestaurants(restaurants);
      } catch (error) {
        console.log('Error while fetching restaurants:', error);
      }
    };
    fetchRestaurants();
  }, []);
  return (
    <div>
      {restaurants && (
        <div className="container owl">
          <h4 className="owl-title">Worldwide Top Rated Restaurants</h4>
          <motion.div className="carousel">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -14900 }}
              className="inner-carousel"
            >
              {restaurants.map(restaurant => (
                <motion.div className="item" key={restaurant.id}>
                  <img src={restaurant.images[0]} alt="Restaurant-img" />
                  <h2 className="restaurant">{restaurant.name}</h2>
                  <Rating
                    rating={restaurant.rating}
                    reviews={restaurant.reviews}
                    rank={restaurant.rank}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>{' '}
        </div>
      )}
    </div>
  );
};

export default Owl;
