import React, { useState, useEffect } from 'react';
import { Axios, axiosInstance } from '../../axios';
import Rating from '../owl/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../pages/Favourites/FavouriteSlice';
import './NearbyPlaces.css';

const NearbyPlaces = () => {
  const [location, setLocation] = useState(null);
  const [nearestCity, setNearestCity] = useState(null);
  const [hotels, setHotels] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        error => {
          console.error('Error getting location:', error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);
  useEffect(() => {
    const compareWithCities = async () => {
      const citiesResponse = await axiosInstance.get('/cities');
      const cities = citiesResponse.data.cities;

      if (location) {
        let minDistance = Infinity;
        let nearestCity = null;

        cities.forEach(city => {
          const distance = getDistanceFromLatLonInKm(
            location.latitude,
            location.longitude,
            city.latitude,
            city.longitude
          );

          if (distance < minDistance) {
            minDistance = distance;
            nearestCity = city;
          }
        });
        setNearestCity(nearestCity);
      }
    };
    if (location) {
      compareWithCities();
    }
  }, [location]);

  useEffect(() => {
    const fetchRomeHotels = async () => {
      try {
        const data = await Axios('Hotels', 'rome');
        const randomHotels = getRandomHotels(data, 3);
        setHotels(randomHotels);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRomeHotels();
  }, []);

  const getRandomHotels = (array, count) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  };
  let nearCityName;
  useEffect(() => {
    if (nearestCity) {
      const nearCity = nearestCity.name;
      nearCityName = nearCity;
      const fetchHotels = async () => {
        const data = await Axios('Hotels', nearCityName);
        const randomHotels = getRandomHotels(data, 6);
        setHotels(randomHotels);
      };
      fetchHotels();
    }
  }, [nearestCity]);

  const favorites = useSelector(state => state.favorites.favorites);
  const isFavorite = todoId => {
    return favorites.some(item => item.id === todoId);
  };

  const handleFavoriteToggle = todo => {
    if (isFavorite(todo.id)) {
      dispatch(removeFromFavorites(todo.id));
    } else {
      dispatch(addToFavorites(todo));
    }
  };

  return (
    <div className="">
      <div
        className="randomToDo "
        style={{
          backgroundColor: 'white',
          padding: '30px 0px',
          margin: '30px 0px',
        }}
      >
        <div className="container randomToDoContainer">
          {nearestCity ? (
            <h4
              className="nearbyHeader"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            >
              Nearby Hotels in {nearestCity.name}
            </h4>
          ) : (
            <h4
              className="nearbyHeader"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            >
              Rome Hotels
            </h4>
          )}
          <div className="row" style={{ maxWidth: '90%', margin: '0 auto' }}>
            {hotels &&
              hotels.map(todo => (
                <div
                  className="RandomTodoRalative col-lg-4 col-md-6 mb-4"
                  key={todo.id}
                >
                  <div className="LikeRounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="gray"
                      className={`w-6 h-6 likeImage ${
                        isFavorite(todo.id) ? 'favorite' : ''
                      }`}
                      onClick={() => handleFavoriteToggle(todo)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </div>
                  <div
                    onClick={() => {
                      navigate(`/get/Hotels/details/${todo.id}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <div className="card">
                      <img src={todo.images[0]} className="card-img-top" />
                      <div className="card-body flex-column">
                        <Rating rating={todo.rating} reviews={todo.reviews} />
                        <h6 className="card-title mt-2">{todo.name}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NearbyPlaces;
