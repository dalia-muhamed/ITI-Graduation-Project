import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css';

const NotFound = () => {
  return (
    <div className="container notfound-container" style={{}}>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 notfound-column">
              <div className="col-sm-10 col-sm-offset-1 text-center ">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">Look like you're lost</h3>

                  <p>the page you are looking for not avaible!</p>

                  <Link to="/" className='"link_404"'>
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    // <div style={{ textAlign: "center", paddingTop: "100px" }}>
    //   <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
    //     Page Under Preparation
    //   </h1>
    //   <p style={{ fontSize: "18px" }}>
    //     Sorry, this page is currently under preparation. Please check back
    //     later.
    //   </p>
    // </div>
  );
};

export default NotFound;
