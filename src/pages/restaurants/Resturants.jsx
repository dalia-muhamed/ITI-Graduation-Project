import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Navbar from '../../components/navbar/Navbar';
import SearchResultPage from '../../components/searchResult/SearchResaultPage';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import InnerSearchComponent from '../../components/innerSearchComponent/InnerSearchComponent';
import { useSelector } from 'react-redux';
import { Axios } from '../../axios';

const Restaurants = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const queryName = params.get('queryName');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const category = 'Restaurants';

  const innerSearchState = useSelector(
    state => state.innerSearch.initialSearchState
  );
  const cities = ['cairo', 'rome', 'lebanon', 'greece', 'dubai'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Axios(category, queryName);
        setFilteredRestaurants(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredRestaurants(innerSearchState);
  }, [innerSearchState]);

  return (
    <div className="matched-hotels-component">
      <Navbar />
      <InnerSearchComponent category={category} categoryValue={queryName} />
      <div
        className="w-100"
        style={{ backgroundColor: '#F2F2F2', padding: '1px' }}
      >
        <div className="matched-hotel-section-container">
          <div className="matched-hotel-section bg-white">
            <div className="d-flex align-items-center justify-content-center matchedHeaders">
              <div className="row w-100 justify-content-between p-0">
                <h5 className="fw-bolder my-0 col-sm-6 mb-2">
                  {cities.includes(queryName)
                    ? `Hotels in ${queryName}`
                    : `Hotel: "${queryName}"`}
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
                  address={restaurant.location?.locationName}
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
