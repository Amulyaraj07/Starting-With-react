import React from "react";

const LandLeaseBanner = () => {
  return (
    <div className="bg-green-500 h-screen flex items-center justify-center">
      {/* Container */}
      <div className="bg-white shadow-lg rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-8 text-center">
        {/* Top Section: Branding */}
        <h1 className="text-green-800 text-2xl md:text-3xl font-bold mb-4">VeggieTO!</h1>
        
        {/* Middle Section: Main Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Lease your land
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Register Your Land for Lease Opportunities
        </p>
        
        {/* CTA Button */}
        <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandLeaseBanner;
