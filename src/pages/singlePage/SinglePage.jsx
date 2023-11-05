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
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="singlePageAddressIcon"
                />
                <span> {locationName}</span>
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

          <div className="row d-flex singlePage-randomImages-row">
            <>
              {images &&
                Array.isArray(images) && (
                  <div className=" singlePage-main-image-container">
                    {/* <div style={{ backgroundColor: 'red' }}>
                      <img
                        src="https://static.tacdn.com/img2/travelers_choice/2023/TC_L.svg"
                        alt="logo"
                        className="w-100"
                        style={{ backgroundColor: 'red' }}
                      />
                    </div> */}
                    <img
                      src={images[0]}
                      alt="singlePage-main-image"
                      className="w-100 "
                    />
                  </div>
                ) &&
                images.map(image => (
                  <div className="singlePage-secondary-images-container">
                    <img
                      src={image}
                      alt="secondary-images"
                      className="w-100 "
                    />
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
