import React from "react";
import bannerImg from "../assets/banner.png";
import { FaSearch } from "react-icons/fa";
const HeroBanner = () => {
  return (
    <div className="py-12">
      <img
        src={bannerImg}
        alt="banner Image"
        className="w-full
           mx-auto md:w-lg"
      />
      <div className="text-center">
        <h3 className="text-6xl font-normal text-gray-900 text-center pt-4">
          Browse, Search, View, Buy
        </h3>
        <p className="text-gray-500 font-thin py-4">
          Best place to browse, search, view details and purchase of top
          flagship phones <br />
          of the current time - FlagshipFaceOff
        </p>
        <input type="text" placeholder="Search a phone" className="bg-white border border-gray-50 rounded-lg shadow-md w-2/3 h-12 px-4 mb-3 focus:outline-none focus: shodow-outline md:mr-2 md:mb-0" />

        <button className="relative inline-flex items-center px-4 py-2 text-center\ ml-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-lg hover:text-white group hover:bg-gray-50">
    <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
    
    <span className="relative">Search</span>
</button>
      </div>
    </div>
  );
};

export default HeroBanner;
