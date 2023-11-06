import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Navbar from '../../components/navbar/Navbar';
import './hotels.css';
import SearchResultPage from '../../components/searchResult/SearchResaultPage';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import InnerSearchComponent from '../../components/innerSearchComponent/InnerSearchComponent';
import { axiosInstance } from '../../axios';
import { useSelector } from 'react-redux';

const Hotels = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const hotelName = params.get('hotelName');
  const cityName = params.get('cityName');
  const [filteredHotels, setFilteredHotels] = useState([]);
  const category = 'hotels';
  const innerSearchState = useSelector(
    state => state.innerSearch.initialSearchState
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        let queryParams = '';
        if (hotelName) {
          queryParams = `?hotelName=${hotelName}`;
        } else if (cityName) {
          queryParams = `?cityName=${cityName}`;
        }

        const response = await axiosInstance.get(
          `cities/hotels/${queryParams}`
        );
        const responseData = response.data.hotels;
        const dataToShow =
          innerSearchState.length > 0 ? innerSearchState : responseData;
        setFilteredHotels(dataToShow);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    if (hotelName || cityName) {
      fetchData();
    }
  }, [hotelName, cityName, innerSearchState]);

  const searchValue = hotelName || cityName;

  return (
    <div className="matched-hotels-component">
      <Navbar />
      <InnerSearchComponent searchValue={searchValue} category={category} />
      <div
        className="w-100"
        style={{ backgroundColor: '#F2F2F2', padding: '1px' }}
      >
        <div className="matched-hotel-section-container">
          <div className="matched-hotel-section bg-white ">
            <div className="d-flex justify-content-between align-items-center matchedHeaders">
              <h5 className="fw-bolder my-0">
                {hotelName ? `Hotel: "${hotelName}"` : `Hotels in ${cityName}`}
              </h5>
              <small>Is Travellia missing a place?</small>
            </div>
            {filteredHotels.length ? (
              filteredHotels.map((hotel, index) => (
                <SearchResultPage
                  key={index}
                  categoryId={hotel.id}
                  category={category}
                  name={hotel.name}
                  phone={hotel.phone}
                  image={hotel.images[0]}
                  address={hotel.location.locationName}
                  rating={hotel.rating}
                  description={hotel.description}
                  reviews={hotel.reviews}
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

export default Hotels;
