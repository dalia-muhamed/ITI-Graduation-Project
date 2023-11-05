import React from 'react';
import './LoadingComponent.css';
const LoadingComponent = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '400px', width: '100%' }}
    >
      <span className="loader  loaderHandle"></span>
    </div>
  );
};

export default LoadingComponent;
