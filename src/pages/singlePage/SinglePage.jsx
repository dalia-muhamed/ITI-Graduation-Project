import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../axios';
import './SinglePage.css';
import pen from './singlePageIcons/pen.png';
import telephone from './singlePageIcons/telephone.png';
import web from './singlePageIcons/web.png';
import Navbar from '../../components/navbar/Navbar';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import Rating from '../../components/owl/Rating';
import {
  faClipboard,
  faClock,
  faLocationDot,
  faPersonRunning,
  faTicketSimple,
} from '@fortawesome/free-solid-svg-icons';
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
  }, [category, responseData]);
  useEffect(() => {
    if (responseData.length > 0) {
      const filteredCategoryById = responseData.find(
        res => res.id === +categoryId
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
    about,
    duration,
    recommendation,
    cancellation,
    money,
    tours,
    address,
  } = selectedCategory;

  let locationName, locationAddress;

  if (location) {
    ({ locationName, locationAddress } = location);
  }
  let slidingImages;
  if (images) {
    slidingImages = images.slice(1);
  }
  let locationColumn;
  if (!description && !about) {
    locationColumn = 'col-lg-12';
  } else {
    locationColumn = 'col-lg-5';
  }
  return (
    <div className="container-fluid px-0">
      <Navbar />
      <div className="singlePage-container">
        {selectedCategory ? (
          <div className="container category-details">
            <div className="row">
              <div className="col-12">
                {<h1 className="details-heading">{name}</h1>}
              </div>
            </div>
            <div className="row d-flex singlePage-ratingReview-container my-0">
              <div className="singlePageRatingReviews col-md-4 mb-2">
                <Rating rating={rating} reviews={reviews} />
              </div>
              {rank && (
                <div className="col-md-8">
                  <div className="">{rank}</div>
                </div>
              )}
              {recommendation && (
                <div className="col-md-8">
                  <FontAwesomeIcon icon={faClipboard} />{' '}
                  <span>{recommendation}</span>
                </div>
              )}
            </div>
            <div className="row my-1">
              {location && (
                <div className="col-12 singlePage-address-header">
                  <span>
                    {' '}
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="singlePageAddressIcon"
                    />{' '}
                    {locationName}
                  </span>
                </div>
              )}
              {address && (
                <div className="col-12 singlePage-address-header">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="singlePageAddressIcon"
                  />{' '}
                  {address}
                </div>
              )}
            </div>
            <div className="row singlePage-heading-contacts-container my-4">
              <div className="col-md-8 d-flex singlePage-heading-contacts row mb-3">
                <div className="row">
                  <div className="singlePage-website-header col-md-4 my-1 ">
                    {website && (
                      <a
                        className="website-link"
                        href={website}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={web}
                          className="singlePageIcon"
                          alt="singlePageIcon"
                        />
                        Visit hotel website
                      </a>
                    )}
                    {duration && (
                      <div>
                        <FontAwesomeIcon icon={faClock} />{' '}
                        <span>Duration: {duration}</span>
                      </div>
                    )}
                  </div>
                  {phone && (
                    <div className="singlePage-phone-header col-md-4 my-1">
                      <a href={`tel: ${phone}`} className="phone-link">
                        <img
                          src={telephone}
                          className="singlePageIcon"
                          alt="singlePageIcon"
                        />
                        {phone}
                      </a>
                    </div>
                  )}
                  {tours && (
                    <div className="singlePage-phone-header col-md-4 my-1">
                      <FontAwesomeIcon icon={faPersonRunning} />{' '}
                      <span>{tours}</span>
                    </div>
                  )}
                  <div className="singlePage-pen-header col-md-4 my-1">
                    {cancellation ? (
                      <div>
                        <FontAwesomeIcon icon={faTicketSimple} />{' '}
                        <span>{cancellation}</span>
                      </div>
                    ) : (
                      <div>
                        <img
                          src={pen}
                          className="singlePageIcon"
                          alt="singlePageIcon"
                        />
                        Write a review
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-3 availabilityButton-container">
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
                      <div className="col-md-8 px-0 mb-1">
                        <img
                          src={images[0]}
                          alt="singlePage-main-imag"
                          className="w-100 h-100"
                        />
                      </div>
                      <div className="col-md  -4 h-100 single-hotels-left-images">
                        {slidingImages.map((img, index) => (
                          <div
                            className="d-flex flex-column mb-1"
                            style={{ height: '150px' }}
                          >
                            <img
                              src={img}
                              alt={index}
                              style={{ height: '100%', width: '100%' }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </>
            </div>

            <div className="row d-flex justify-content-between my-4">
              {about || description ? (
                <div className="col-lg-6 bg-white px-4 py-3 about-single-hotels">
                  <h4 className="fw-bold mt-3 mb-3">About</h4>
                  {description && <p className="text-muted">{description}</p>}
                  {about && <p className="text-muted">{about}</p>}
                </div>
              ) : null}
              <div
                className={`${locationColumn} px-4 py-3 bg-white d-flex flex-column justify-content-evenly`}
              >
                <div>
                  {location && (
                    <div>
                      <h5 style={{ fontWeight: 'bold' }}>
                        Location and contact
                      </h5>
                      <iframe
                        src={locationAddress}
                        style={{
                          width: '100%',
                          height: '300px',
                          marginBottom: '20px',
                        }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="z"
                      ></iframe>
                    </div>
                  )}
                  {}
                </div>
                <div>
                  <div>
                    {location && (
                      <div className="singlePage-address-header mb-3">
                        <span>
                          {' '}
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            className="singlePageAddressIcon"
                            style={{ marginRight: '10px', marginLeft: '4px' }}
                          />{' '}
                          {locationName}
                        </span>
                      </div>
                    )}
                  </div>
                  {website && (
                    <div className="singlePage-website-header mb-3">
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
                  )}

                  <div className="singlePage-phone-header my-1">
                    {phone && (
                      <a href={`tel: ${phone}`} className="phone-link">
                        <img
                          src={telephone}
                          className="singlePageIcon"
                          alt="singlePageIcon"
                        />
                        {phone}
                      </a>
                    )}
                  </div>
                </div>
              </div>
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
