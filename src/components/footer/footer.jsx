import React from 'react'
import './footer.css'
import logo from '../navbar/logo.jpg'

const footer = () => {
  return (
    <div className='footer'>
      <div className='footer-table'>
        <table className='container table'>
          <thead>
            <tr>
              <th>About Travellia</th>
              <th>Explore</th>
              <th>Do Business With Us</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>About Us</td>
              <td>Write a review</td>
              <td>Owners</td>
            </tr>
            <tr>
              <td>Press</td>
              <td>Add a Place</td>
              <td>Business Advantage</td>
            </tr>
            <tr>
              <td>Resources and Policies</td>
              <td>Join </td>
              <td>Sponsored Placements</td>
            </tr>
            <tr>
              <td>Careers</td>
              <td>Travelers' Choice</td>
              <td>Advertise with Us</td>
            </tr>
            <tr>
              <td>Investor Relations</td>
              <td>GreenLeaders</td>
              <td>Access our Content API</td>
            </tr>
            <tr>
              <td>Trust & Safety</td>
              <td>Blog</td>
              <td>Become an Affiliate</td>
            </tr>
            <tr>
              <td>Contact us</td>
              <td>Help Center</td>
              <td>Accessibility Statement</td>
            </tr>
            <tr>
              <td>Tripadvisor Plus</td>
              <td>Travel Articles</td>
              <td></td>
            </tr>
            <tr>
              <th>Get The App</th>
              <td>iPhone App</td>
              <td>Android App</td>
            </tr>
          </tbody>
        </table>
        <div className='objective'>
          <h5>Travellia Sites</h5>
          <div>
            Discover your dream destination with Jetsetter
            Book the best restaurants with TheFork
            Book tours and attraction tickets on Viator
            Read cruise reviews on Cruise Critic
            Get airline seating charts on Seat Guru
            Find vacation rentals on FlipKey
            Search for holiday rentals on Holiday Lettings
            Plan and book your next trip with Reco Trip Designers.
          </div>
        </div>
        <br/>
      </div>
      <div className='icon-text'>
        <img src={logo} className="travellya" alt="logo" />
      </div>
      <div>
        <p>© 2023 Tripadvisor LLC All rights reserved.</p>
        <p>Terms of Use   Privacy and Cookies Statement   Cookie consent   Site Map   How the site works   Contact us</p>
      </div>
    </div>
  )
}

export default footer