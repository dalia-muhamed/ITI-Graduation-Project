import React, { useState } from "react";
import "./Reviews.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function Reviews() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="reviews-component">
        <h1>Numbers of this Month</h1>
        <div className="container">
          <div className="row gap-4 justify-content-center">
            <div
              className="reviews-counter-item col-lg-3 d-flex justify-content-center align-items-center flex-column"
    
            >
              <p className="counting-number">
                {counterOn && (
                  <CountUp start={0} end={4500} duration={2} delay={0} />
                )}
              </p>
              <p className="review-paragraph">Travellers</p>
            </div>
            <div
              className="reviews-counter-item col-lg-3 d-flex justify-content-center align-items-center flex-column"
             
            >
              <p className="counting-number">
                {counterOn && (
                  <CountUp start={0} end={3600} duration={1} delay={0} />
                )}
              </p>
              <p className="review-paragraph">Reviews</p>
            </div>
            <div
              className="reviews-counter-item col-lg-3 d-flex justify-content-center align-items-center flex-column"
            
            >
              <p className="counting-number">
                {counterOn && (
                  <CountUp start={0} end={5700} duration={3} delay={0} />
                )}
              </p>
              <p className="review-paragraph">Reservations</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default Reviews;
