import React from 'react';
import { Link } from 'react-router-dom';
import './Ads.css';
const Ads = ({ backgroundColor, header, text, imgPath, btnText }) => {
  return (
    <div className="container ads-section">
      <div
        className="ads-container"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className=" ads-text">
          <h3 className="ads-heading">{header}</h3>
          <p className="ads-paragraph text-muted">{text}</p>
          <Link className="ads-link">{btnText}</Link>
        </div>
        <div
          className="ad-image-container"
          style={{ backgroundImage: `url(${imgPath}` }}
        ></div>
      </div>
    </div>
  );
};

export default Ads;
