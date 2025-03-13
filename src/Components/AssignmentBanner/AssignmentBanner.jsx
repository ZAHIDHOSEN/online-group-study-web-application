import React from 'react';

const AssignmentBanner = () => {
    return (
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.postimg.cc/k5DbJZ0X/20824724-6373884.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Assignments</h1>
            <p className="mb-5">
              You are a developer. You need to prove your self. so take assignment to improve your self
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default AssignmentBanner;