import React from 'react';

const Banner = () => {
    return (
        <div
        className="hero  min-h-screen "
        style={{
          backgroundImage: "url(https://i.postimg.cc/XYjQLzNG/49159465-9201699.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Education</h1>
            <p className="mb-5">
              This is Educational related website. Here we provided assignment related issue.Assignment 
              is the basic of educational compartment
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;