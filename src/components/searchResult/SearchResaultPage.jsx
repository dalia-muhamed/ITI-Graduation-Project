import React, { useEffect, useState } from 'react';
import './SearchResultPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function SearchResultPage({
  name,
  description,
  phone,
  rating,
  address,
  image,
  reviews,
  rank,
  about,
  money,
  tours,
  categoryId,
  category,
}) {
  const [coloredCircles, setColoredCircles] = useState([]);
  useEffect(() => {
    const fullCirclesCount = Math.floor(rating);
    const hasHalfCircle = rating % 1 !== 0;

    const circles = new Array(5).fill(false).map((_, index) => {
      if (index < fullCirclesCount) {
        return (
          <div
            key={index}
            className="circle"
            style={{ backgroundColor: '#00AA6C' }}
          ></div>
        );
      } else if (index === fullCirclesCount && hasHalfCircle) {
        return (
          <div
            key={index}
            className="circle"
            style={{
              background: `conic-gradient(white 180deg, #00AA6C 180deg)`,
            }}
          ></div>
        );
      } else {
        return (
          <div
            key={index}
            className="circle"
            style={{ backgroundColor: 'transparent' }}
          ></div>
        );
      }
    });

    setColoredCircles(circles);
  }, [rating]);

  return (
    <Link
      to={`/get/${category}/details/${categoryId}`}
      className="search-result-card"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <div className="search-result">
        <div className="matched-hotels-img">
          <img src={image} alt={Math.random()} className="result-image" />
        </div>
        <div className="result-details">
          <h5 className="categories-name">{name}</h5>
          <div className="rate-section d-flex justify-content-start">
            <div className="rating">{coloredCircles}</div>
            <p className="my-0 mx-2">
              <span>{reviews}</span> reviews
            </p>
          </div>
          {address && <small className="address-style">{address}</small>}
          <br />
          <span>{tours && <span>{tours}</span>}</span>
          <br />
          <small>
            {phone && (
              <>
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ fontSize: '0.7rem' }}
                />
                <span style={{ marginLeft: '0.5rem' }}>{phone}</span>
              </>
            )}
          </small>
          {money && (
            <p style={{ fontWeight: 'bold', margin: '5px 0px' }}>{money}</p>
          )}

          <div className="d-flex">
            {description && (
              <>
                <div className="hotelElipsise">"{description}</div>"
              </>
            )}
            {rank && (
              <>
                <div className="hotelElipsise">{rank}</div>
              </>
            )}
            {about && (
              <>
                <div className="hotelElipsise">{about}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SearchResultPage;
