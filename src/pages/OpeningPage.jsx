import React from 'react';
import openImage from '../assets/opening.png'
const OpeningPage = () => {
  return (
    <div className="bg-custom-gradient h-64 w-full">
      <div className="container">
         <img src={openImage} alt="home_logo" className="w-5 h-auto" />
         <div className="w-full font-poppins text-[calc(8px+0.5vw)] font-normal leading-[calc(15px+0.5vw)] text-center text-white mt-0 transform translate-x-[11px]">
          Ai Powered Nutrition & Meal Prep Partner
        </div>
      </div>
    </div>
  );
};

export default OpeningPage;
