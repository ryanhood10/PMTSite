import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../PMTphotos/subcontractorStock-transformed.png';

const Hero3 = () => {
  const navigate = useNavigate();

  const handleViewContact = () => {
    navigate("/Contact");
  };

  return (
    <div
      className="relative bg-black overflow-hidden "
      style={{ height: "65vh" }}
    >
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r to-blue-500 via-transparent from-[#84BD00] opacity-75"></div>
      <div className="absolute inset-0 bg-black opacity-25"></div>

      {/* Text Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center font-bold">
  <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold">
    Streamline Your Construction Projects
    <br />
    with Trusted Subcontractors
  </h2>
  <hr className="border-t-2 border-gray-300 w-3/4 my-4" />
  <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto mt-4">
    Nashville's Source for Reliable and Experienced Construction Experts
  </p>

        <button
        aria-label="View Contact Information"
          onClick={handleViewContact}
          className="mt-6 bg-[#001489] hover:bg-blue-800 text-white font-medium py-2 px-6 rounded transition duration-300"
        >
          Get a Free Quote Today!
        </button>
      </div>
    </div>
  );
};

export default Hero3;
