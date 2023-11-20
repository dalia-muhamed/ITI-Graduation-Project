import React from "react";
import "./Donate.css";
import donate from "./donate.jpg";
import logo2 from "./logo.png";

function Donate() {
  return (
    <div className="container d-flex justify-content-center ">
      <div className="row container-donate bg-warning">
        <div className=" parent-img col-md-6">
          <img src={donate} alt="Image" className="donate-img" />
        </div>
        <div className="col-md-6 p-3 d-flex justify-content-center align-items-center flex-column">
          <div
            className="donate-logo-container"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="donateLogoImageContainer">
              <img src={logo2} alt="Logo" className="donate-img-logo" />
            </div>
            <h6 className="donate-logo-name">Travelia Foundation</h6>
          </div>
          <div
            className="details-head"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2>Help Maui & others</h2>
            <h2>around the world</h2>
          </div>

          <div className="btn-donate-details">
            <p
              className="donate-text"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Travelia Foundation is matching donations to World Central
              Kitchen’s Climate Disaster Fund. Your support helps disaster
              responses not only in Maui, but worldwide.
            </p>
            <button
              className="btn-donate"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Donate;
