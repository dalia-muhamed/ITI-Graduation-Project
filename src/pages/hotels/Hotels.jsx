import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Navbar from '../../components/navbar/Navbar';
import './hotels.css';
import SearchResultPage from '../../components/searchResult/SearchResaultPage';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import InnerSearchComponent from '../../components/innerSearchComponent/InnerSearchComponent';
import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import Ads from '../../components/Adds/ads/Ads';
import adImage from '../../components/Adds/ads/ad1.jpg';
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
        const dataToShow = innerSearchState.length > 0 ? innerSearchState : [];
        setFilteredHotels(dataToShow);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    if (hotelName || cityName) {
      fetchData();
    }
  }, [hotelName, cityName, innerSearchState]);

  return (
    <div>
      <div className="matched-hotels-component">
        <Ads
          text="Journey through Tucson’s desertscapes and bustling downtown streets in adventure-packed Arizona. From outdoor explorations among sky-high cacti to inviting museum experiences that captivate the kids, see what makes Tucson a must for you and your crew."
          header="Make family memories in beautiful Arizona"
          imgPath={adImage}
          btnText="View now"
          backgroundColor="#FFF7E1"
        />
        <Navbar navbarItem="" sticky={true} myClass="sticky" />
        <InnerSearchComponent
          cityName={cityName}
          category={category}
          categoryValue={hotelName || cityName}
          categoryName="hotelName"
        />
        <div
          className="w-100"
          style={{ backgroundColor: '#F2F2F2', padding: '1px' }}
        >
          <div className="matched-hotel-section-container">
            <div className="matched-hotel-section bg-white ">
              <div className="d-flex justify-content-between align-items-center matchedHeaders">
                <h5 className="fw-bolder my-0">
                  {hotelName
                    ? `Hotel: "${hotelName}"`
                    : `Hotels in ${cityName}`}
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
                    address={hotel.location?.locationName}
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
      <Footer />
    </div>
  );
};

export default Hotels;
