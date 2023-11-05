/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../axios';
import './SinglePage.css';
import pen from './singlePageIcons/pen.png';
import telephone from './singlePageIcons/telephone.png';
import map from './singlePageIcons/map.png';
import web from './singlePageIcons/web.png';
import Navbar from '../../components/navbar/Navbar';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import Rating from '../../components/owl/Rating';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SinglePage = () => {
  const params = useParams();
  const [responseData, setResponseData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const { category, categoryId } = params;
  useEffect(() => {
    const fetchData = () => {
      axiosInstance
        .get(`/cities/${category}`)
        .then(res => {
          const data =
            res.data.todos || res.data.restaurants || res.data.hotels;
          console.log(data);
          setResponseData(data);
          console.log(responseData);
        })
        .catch(err => console.log(err));
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (responseData.length > 0) {
      const filteredCategoryById = responseData.find(
        res => res.id === +categoryId
      );
      setSelectedCategory(filteredCategoryById);
    }
  }, [responseData]);

  const { name, phone, rating, reviews, website, images, location, rank } =
    selectedCategory;

  let locationName;
  if (location) {
    ({ locationName } = location);
  }

  console.log(selectedCategory);
  return (
    <div className="container-fluid singlePage-container ">
      <Navbar />
      {selectedCategory ? (
        <div className="container category-details">
          <div className="row">
            <div className="col-12">
              {<h1 className="details-heading">{name}</h1>}
            </div>
          </div>
          <div className="row">
            <div className="col-8 d-flex singlePage-ratingReview-container">
              <div className="singlePageRatingReviews">
                <Rating rating={rating} reviews={reviews} />
              </div>
              {rank && (
                <>
                  <span className="singlePageHr"></span>
                  <div className="">{rank}</div>
                </>
              )}
            </div>
          </div>
          <div className="row">
            {location && (
              <div className="col-12 singlePage-address-header">
                <FontAwesomeIcon icon={faLocationDot} />
                {locationName}
                {/* <img src={map} className="singlePageIcon" alt="map" />
                {locationName} */}
              </div>
            )}
          </div>
          <div className="row singlePage-heading-contacts-container">
            <div className="col-8 d-flex singlePage-heading-contacts">
              <div className="singlePage-website-header">
                <img
                  src={web}
                  className="singlePageIcon"
                  alt="singlePageIcon"
                />
                <a
                  className="website-link"
                  href={website}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit hotel website
                </a>
              </div>
              {phone && (
                <div className="singlePage-phone-header">
                  <img
                    src={telephone}
                    className="singlePageIcon"
                    alt="singlePageIcon"
                  />
                  <a href={`tel: ${phone}`} className="phone-link">
                    {phone}
                  </a>
                </div>
              )}
              <div className="singlePage-pen-header">
                <img
                  src={pen}
                  className="singlePageIcon"
                  alt="singlePageIcon"
                />
                Write a review
              </div>
            </div>
            <div className="col-3 availabilityButton-container">
              <button className="btn btn-warning availabilityButton">
                Check availability
              </button>
            </div>
          </div>

          <div className="row">
            <>
              {images &&
                Array.isArray(images) && (
                  <div className="col-6 singlePage-main-image">
                    <img src={images[0]} alt="singlePage-main-image" />
                  </div>
                ) &&
                images.map(image => (
                  <div className="col-lg-4 flex-column">
                    <img src={image} alt="Small Picture 1" className="w-100 " />
                  </div>
                ))}
            </>
          </div>
        </div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

export default SinglePage;
