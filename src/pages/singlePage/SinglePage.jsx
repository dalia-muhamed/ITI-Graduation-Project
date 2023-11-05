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
        .then((res) => {
          const data =
            res.data.todos || res.data.restaurants || res.data.hotels;
          console.log(data);
          setResponseData(data);
          console.log(responseData);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [category, responseData]);
  useEffect(() => {
    if (responseData.length > 0) {
      const filteredCategoryById = responseData.find(
        (res) => res.id === +categoryId
      );
      setSelectedCategory(filteredCategoryById);
    }
  }, [responseData, categoryId]);

  const {
    name,
    phone,
    rating,
    reviews,
    website,
    images,
    location,
    rank,
    description,
  } = selectedCategory;

  let locationName;
  if (location) {
    ({ locationName } = location);
  }
  let slidingImages;
  if (images) {
    slidingImages = images.slice(1);
  }
  console.log(selectedCategory);
  return (
    <div className="container-fluid ">
      <Navbar />
      <div className="singlePage-container">
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
                  <img src={map} className="singlePageIcon" alt="map" />

                  {locationName}
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
            <div className="row d-flex singlePage-randomImages-row my-4">
              <>
                {images && (
                  <div className="singlePage-main-image-container">
                    <div className="row">
                      <div className="col-lg-8 px-0 mb-1 h-100" style={{ height: "100%" }}>
                        <img
                          src={images[0]}
                          alt="singlePage-main-imag"
                          className="w-100 h-100"
                          height="100%"
                          style={{height:"100%"}}
                        />
                      </div>
                      <div className="col-lg-4 h-100">
                        {slidingImages.map((img) => (
                          <div className="d-flex flex-column my-1">
                            <img src={img} height={130} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </>
            </div>

            
            <div className="row">
              <div className="col-lg-6">
                <h2>About</h2>
                <p>{description}</p>
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        ) : (
          <LoadingComponent />
        )}
      </div>
    </div>
  );
};

export default SinglePage;
