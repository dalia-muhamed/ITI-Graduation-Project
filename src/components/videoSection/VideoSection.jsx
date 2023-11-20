import React, { useRef, useState } from 'react';
import video2 from './media/partyVideo.mp4';
import './videoSection.css';
import VideoContainer from './videoContainer/VideoContainer';

function VideoSection() {
  return (
    <div className="container-fluid videoSection-main-container">
      <div className="conatiner">
        <div className="row videoSection-row">
          <VideoContainer video={video2} />
          <VideoContainer video={video2} />
          <VideoContainer video={video2} />
        </div>
        <div className="row  videoSection-row">
          <VideoContainer video={video2} />
          <VideoContainer video={video2} />
          <VideoContainer video={video2} />
        </div>
        <div className="row videoSection-row">
          <VideoContainer video={video2} />
          <VideoContainer video={video2} />
          <VideoContainer video={video2} />
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
