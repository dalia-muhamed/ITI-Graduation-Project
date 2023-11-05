import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Navbar from '../../components/navbar/Navbar';
import SearchResultPage from '../../components/searchResult/SearchResaultPage';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import InnerSearchComponent from '../../components/innerSearchComponent/InnerSearchComponent';
import { axiosInstance } from '../../axios';

const Restaurants = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const restaurantName = params.get('restaurantName');
  const cityName = params.get('cityName');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const category = 'restaurants';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`cities/restaurants`, {
          params: {
            restaurantName,
            cityName,
          },
        });
        const responseData = response.data.restaurants;
        setFilteredRestaurants(responseData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    if (restaurantName || cityName) {
      fetchData();
    }
  }, [restaurantName, cityName]);

  const searchValue = cityName || restaurantName;

  return (
    <div className="matched-hotels-component">
      <Navbar />
      <InnerSearchComponent searchValue={searchValue} />
      <div
        className="w-100"
        style={{ backgroundColor: '#F2F2F2', padding: '1px' }}
      >
        <div className="matched-hotel-section-container">
          <div className="matched-hotel-section bg-white">
            <div className="d-flex align-items-center justify-content-center matchedHeaders">
              <div className="row w-100 justify-content-between p-0">
                <h5 className="fw-bolder my-0 col-sm-6 mb-2">
                  {restaurantName
                    ? `Restaurant: "${restaurantName}"`
                    : `Restaurants in "${cityName}"`}
                </h5>
                <small className="col-sm-6 mb-2 align-self-end missingPlace">
                  Is Travellia missing a place?
                </small>
              </div>
            </div>
            {filteredRestaurants.length ? (
              filteredRestaurants.map((restaurant, index) => (
                <SearchResultPage
                  key={index}
                  categoryId={restaurant.id}
                  category={category}
                  name={restaurant.name}
                  phone={restaurant.phone}
                  image={restaurant.images[0]}
                  address={restaurant.location.locationName}
                  rating={restaurant.rating}
                  rank={restaurant.rank}
                  reviews={restaurant.reviews}
                />
              ))
            ) : (
              <LoadingComponent />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
