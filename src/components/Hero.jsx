import React from "react";
import bgVideo from "../assets/BG_Video.mp4";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-white px-4 text-balance">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 font-sans">
          Welcome to Ligovis
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-6 font-sans">
          Elevate Your Vision with Us
        </h2>
        <button className="explore-btn px-8 sm:px-12 py-3 mt-4 rounded-[25px] cursor-pointer text-[clamp(16px,2vw,18px)] font-[Poppins,sans-serif] font-medium bg-[#151515] text-[#ffa07a] border border-[rgba(255,160,122,0.3)] transition-all duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] relative overflow-hidden isolation-auto">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
