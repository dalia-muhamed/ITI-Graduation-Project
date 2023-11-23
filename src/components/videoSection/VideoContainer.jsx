import React, { useRef, useState } from 'react';
import './VideoContainer.css';
// import video2 from "./media/partyVideo.mp4";

function VideoContainer({ video }) {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const handleMouseEnter = () => {
    if (videoRef.current.paused) {
      videoContainerRef.current.classList.remove('dark-overlay');
      videoRef.current.play().catch(error => {
        // Handle play promise rejection, if needed
        console.error('Play failed:', error);
      });
    }
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoContainerRef.current.classList.add('dark-overlay');
  };
  return (
    <div
      className="col-lg-3 mb-lg-0 col-md-1 video-section-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="dark-overlay" ref={videoContainerRef}></div>
      <video src={video} ref={videoRef} loop muted />
    </div>
  );
}

export default VideoContainer;
