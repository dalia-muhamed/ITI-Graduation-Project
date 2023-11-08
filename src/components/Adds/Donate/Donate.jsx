import React from "react";
import "./Donate.css";
import donate from "./donate.jpg";
import logo2 from "./logo.jpg";

function Donate() {
  return (
    <div className="container-donate bg-warning container">
      <div className="row">
        <div className=" parent-img col-md-6">
          <img src={donate} alt="Image" className="donate-img" />
        </div>
        <div className="col-md-6 p-3 d-flex justify-content-center align-items-center flex-column">
          <div className="donate-logo-container">
            <div className="donateLogoImageContainer">
              <img src={logo2} alt="Logo" className="donate-img-logo" />
            </div>
            <h6 className="donate-logo-name">Traveliya Foundation</h6>
          </div>
          <div className="details-head">
            <h2>Help Maui & others</h2>
            <h2>around the world</h2>
          </div>

          <div className="btn-donate-details">
            <p>
              The Tripadvisor Foundation is matching donations to World Central
              Kitchen’s Climate Disaster Fund. Your support helps disaster
              responses not only in Maui, but worldwide.
            </p>
            <button className="btn-donate">Donate Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Donate;
