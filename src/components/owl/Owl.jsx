import React, { useState, useEffect } from 'react';
import './owl.css';
import Rating from './Rating';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../axios';

const Owl = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axiosInstance.get('/restaurants');
        const allRestaurants = response.data.restaurants;
        const randomRestaurants = getRandomRestaurants(allRestaurants, 10);
        setRestaurants(randomRestaurants);
      } catch (error) {
        console.log('Error while fetching restaurants:', error);
      }
    };
    fetchRestaurants();
  }, []);
  const navigate = useNavigate();
  const getRandomRestaurants = (array, count) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  };
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const dragConstraints =
        screenWidth < 770
          ? { right: 1330, left: -1330 }
          : { right: 1100, left: -1100 };
      setDragConstraints(dragConstraints);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [dragConstraints, setDragConstraints] = useState({
    right: 0,
    left: -2000,
  });
  return (
    <div className="owl-container">
      {restaurants && (
        <div className="container owl">
          <h4>Worldwide Top Rated Restaurants</h4>
          <motion.div className="carousel d-flex justify-content-center align-items-center flex-column">
            <motion.div
              drag="x"
              dragConstraints={dragConstraints}
              className="inner-carousel"
            >
              {restaurants.map(restaurant => (
                <motion.div className="item" key={restaurant.id}>
                  <img
                    src={restaurant.images[0]}
                    alt="Restaurant-img"
                    style={{ objectFit: 'cover' }}
                    onClick={() => {
                      navigate(`/get/Restaurants/details/${restaurant.id}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
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
          </motion.div>{' '}
        </div>
      )}
    </div>
  );
};

export default Owl;
