import React from 'react';
import video9 from './media/video9.mp4';
import video5 from './media/video5.mp4';
import video4 from './media/video4.mp4';
import video3 from './media/video3.mp4';
import video2 from './media/video2.mp4';
import video1 from './media/video1.mp4';
import video6 from './media/video6.mp4';
import video7 from './media/video7.mp4';
import video8 from './media/video8.mp4';
import video10 from './media/video10.mp4';
import video11 from './media/video11.mp4';
import video12 from './media/video12.mp4';
import './videoSection.css';
import VideoContainer from './VideoContainer';
import './VideoContainer.css';

function VideoSection() {

  return (
    <div className="container-fluid videoSection-main-container">
      <div className="container  ">
        <h1 className="video-section-header">Captured Experiences</h1>
        <div className="row videoSection-row">
          <VideoContainer video={video6} />
          <VideoContainer video={video5} />
          <VideoContainer video={video8} />
          <VideoContainer video={video3} />
          <VideoContainer video={video9} />
          <VideoContainer video={video7} />
          <VideoContainer video={video1} />
          <VideoContainer video={video10} />
          <VideoContainer video={video4} />
          <VideoContainer video={video2} />
          <VideoContainer video={video12} />
          <VideoContainer video={video11} />
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
