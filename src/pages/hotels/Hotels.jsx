import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Navbar from '../../components/navbar/Navbar';
import './hotels.css';
import SearchResultPage from '../../components/searchResult/SearchResaultPage';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import InnerSearchComponent from '../../components/innerSearchComponent/InnerSearchComponent';
import { useSelector } from 'react-redux';
import Footer from '../../footer/Footer';
import Ads from '../../components/Adds/ads/Ads';
import adImage from '../../components/Adds/ads/ad1.jpg';
import { Axios } from '../../axios';
const Hotels = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const queryName = params.get('queryName');
  const [filteredHotels, setFilteredHotels] = useState([]);
  const category = 'Hotels';
  const innerSearchState = useSelector(
    state => state.innerSearch.initialSearchState
  );
  const cities = ['cairo', 'rome', 'lebanon', 'greece', 'dubai'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Axios(category, queryName);
        setFilteredHotels(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredHotels(innerSearchState);
  }, [innerSearchState]);

  return (
    <div>
      <div className="matched-hotels-component">
        <Navbar sticky={false} myClass="" navbarItem="NavbarItems-container" />
        <div style={{ height: '80px' }}></div>
        <Ads
          text="Journey through Tucson’s desertscapes and bustling downtown streets in adventure-packed Arizona. From outdoor explorations among sky-high cacti to inviting museum experiences that captivate the kids, see what makes Tucson a must for you and your crew."
          header="Make family memories in beautiful Arizona"
          imgPath={adImage}
          btnText="View now"
          backgroundColor="#FFF7E1"
        />
        <InnerSearchComponent category={category} categoryValue={queryName} />
        <div
          className="w-100"
          style={{ backgroundColor: '#F2F2F2', padding: '1px' }}
        >
          <div className="matched-hotel-section-container">
            <div className="matched-hotel-section bg-white ">
              <div className="d-flex justify-content-between align-items-center matchedHeaders">
                <h5 className="fw-bolder my-0">
                  {cities.includes(queryName)
                    ? `Hotels in ${queryName}`
                    : `Hotel: "${queryName}"`}
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
