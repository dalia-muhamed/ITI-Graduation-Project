import React, { useEffect, useState } from "react";

function Rating({rating, reviews, rank }) {
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
            style={{ backgroundColor: "#00AA6C" }}
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
            style={{ backgroundColor: "transparent" }}
          ></div>
        );
      }
    });

    setColoredCircles(circles);
  }, [rating]);

  return (
    <div className="">
        <div className="rate-section d-flex justify-content-start mb-2">
          <div className="rating">{coloredCircles}</div>
          <p className="my-0 mx-2">
            <span>{reviews} reviews</span>
          </p>
        </div>
        <div className="d-flex">
          <div className="hotelElipsise">{rank}</div>
        </div>
    </div>
  );
}

export default Rating;
