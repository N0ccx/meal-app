import React from 'react';
import openImage from '../assets/opening.png';

const OpeningPage = () => {
  return (
    <div className="h-screen w-full bg-custom-gradient flex flex-col items-center justify-center animate-fade-in">
      <img 
        src={openImage} 
        alt="home_logo" 
        className="abosolute w-1/4 h-auto mb-4" // Adjust width and add margin below
      />
      <div className="font-poppins text-[calc(1px+1vw)] font-normal leading-[calc(1px+1vw)] text-center text-white">
        Ai Powered Nutrition & Meal Prep Partner
      </div>
    </div>
  );
};

export default OpeningPage;
