import React from "react";
import { Link } from "react-router-dom";
import "./FoodAdd.css";
import falafel from "./falafel.jpg";
export const FoodAdd = () => {
  const handleLinkClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="falafel-container container">
      <div className="row falafel-row">
        <div className="col-md-6 falafel-left-side">
          <div className="ads-content">
            <h3>Exploring Cairo's Street Food Scene</h3>
            <p>
              After three bites of macarona bechamel, I returning to my room at
              the Steigenberge...
            </p>
            <Link to="/FoodArticle" onClick={handleLinkClick}>
              <button className="btn-falafel">Read More</button>
            </Link>
          </div>
        </div>
        <div className="col-md-6 falafel-right-side">
          <div className="ads-image d-flex justify-content-center">
            <img src={falafel} alt="falafel Image" className="img-falafel" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodAdd;
