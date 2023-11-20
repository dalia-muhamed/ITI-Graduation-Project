import React, { useRef, useState } from 'react';
import './VideoContainer.css';
// import video2 from '../media/partyVideo.mp4';

function VideoContainer({ video2 }) {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isPlayed, setIsPlayed] = useState(false);

  const handleMouseEnter = () => {
    setIsPlayed(true);
    if (videoRef.current.paused) {
      videoRef.current.play().catch(error => {
        // Handle play promise rejection, if needed
        console.error('Play failed:', error);
      });
      videoContainerRef.current.classList.remove('dark-overlay');
    }
  };

  const handleMouseLeave = () => {
    setIsPlayed(false);
    videoRef.current.pause();
    videoContainerRef.current.classList.add('dark-overlay');
  };
  return (
    <div
      className="col-3 video-container dark-overlay"
      // ref={videoContainerRef}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <video src={video2} loop muted width={300} height={200} />
    </div>
  );
}

export default VideoContainer;
