import React from 'react';
import './Footer.css';
import logo from '../components/navbar/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faMagic,
  faShopLock,
  faAnchor,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="container-fluid footer-wrapper-all px-3 py-4 p-md-4 px-lg-5">
      <div className="d-flex flex-wrap">
        <div className="footer-first-list ps-lg-5">
          <ul className="list-unstyled me-5">
            <li className="fs-6">About Travellia</li>
            <li>About Us</li>
            <li>Press</li>
            <li>Resources and Policies</li>
            <li>Careers</li>
            <li>Investor Relations</li>
            <li>Trust & Safety</li>
            <li>Contact us</li>
            <li>Accessibility Statement</li>
          </ul>
        </div>
        <div className="footer-second-list">
          <ul className="list-unstyled me-5">
            <li className="fs-6">Explore</li>
            <li>Write a review</li>
            <li>Add a Place</li>
            <li>Join</li>
            <li>Travelers' Choice</li>
            <li>GreenLeaders</li>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Travelia Plus</li>
            <li>Travel Articles</li>
          </ul>
        </div>
        <div className="footer-third-list">
          <ul className="list-unstyled me-5">
            <li className="fs-6">Do Business With Us</li>
            <li>Owners</li>
            <li>Business Advantage</li>
            <li>Sponsored Placements</li>
            <li>Advertise with Us</li>
            <li>Access our Content API</li>
            <li>Become an Affiliate</li>
            <li className="fs-6 pt-2">Get The App</li>
            <li>iPhone App</li>
            <li>Android App</li>
          </ul>
        </div>
        <div className="footer-fourth-list mx-xl-auto ps-lg-5">
          <ul className="list-unstyled">
            <li className="fs-6">Travelia Sites</li>
            <li>Discover your dream destination with Jetsetter</li>
            <li>Book the best restaurants with TheFork</li>
            <li>Book tours and attraction tickets on Viator</li>
            <li>Read cruise reviews on Cruise Critic</li>
            <li>Get airline seating charts on Seat Guru</li>
            <li>Find vacation rentals on FlipKey</li>
            <li>Search for holiday rentals on Holiday Lettings</li>
            <li>Plan and book your next trip with Reco Trip Designers</li>
          </ul>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        <div className="d-flex flex-column ps-lg-5 controlled-last-footer">
          <div className="d-flex">
            <div className="me-2 pt-2">
              <img src={logo} className="travellya rounded-circle" alt="logo" />
            </div>
            <div>
              <small>
                © {new Date().getFullYear()} Travelia LLC All rights reserved.
              </small>
              <ul className="list-unstyled fw-semibold text-decoration-underline footer-inlist">
                <li className="d-inline me-3">Terms of Use</li>
                <li className="d-inline me-3">Privacy and Cookies Statement</li>
                <li className="d-inline me-3">Cookie consent</li>
                <li className="d-inline me-3">Site Map</li>
                <li className="d-inline me-3">How the site works</li>
                <li className="d-inline">Contact us</li>
              </ul>
            </div>
          </div>
          <small className="lh-sm mb-3">
            This is the version of our website addressed to speakers of English
            in the United States. If you are a resident of another country or
            region, please select the appropriate version of Tripadvisor for
            your country or region in the drop-down menu.
          </small>
        </div>
        <div className="d-flex footer-drops">
          <div className="mb-3 me-lg-3 drops-cont">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue="United States">USD</option>
              <option value="EGP">EGP</option>
              <option value="POUND">POUND SERLING</option>
              <option value="EURO">EURO</option>
              <option value="SAUDI RIAL">SAUDI RIAL</option>
              <option value="ARGENTINE PISO">ARGENTINE PISO</option>
            </select>
          </div>
          <div className="d-flex flex-column drops-cont">
            <select
              className="form-select mb-3"
              aria-label="Default select example"
            >
              <option defaultValue="United States">United States</option>
              <option value="مصر">مصر</option>
              <option value="Italy">Italy</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Greece">Greece</option>
              <option value="Dubai">Dubai</option>
              <option value="France">France</option>
            </select>
            <div className="d-flex justify-content-between">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <FontAwesomeIcon icon={faMagic} />
              <FontAwesomeIcon icon={faShopLock} />
              <FontAwesomeIcon icon={faAnchor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
