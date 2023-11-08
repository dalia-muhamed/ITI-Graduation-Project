import React from 'react';
import { Link } from 'react-router-dom';
import './Ads.css';
const Ads = () => {
  return (
    <div className="container ads-section">
      <div className="ads-container">
        <div className=" ads-text">
          <h3 className="ads-heading">Discover Bermoda</h3>
          <p className="ads-paragraph">
            Find out why travelers like you are raving about Bermoda.
          </p>
          <Link className="ads-link"> explore more</Link>
        </div>
        <div className="ad-image-container"></div>
      </div>
    </div>
  );
};

export default Ads;
