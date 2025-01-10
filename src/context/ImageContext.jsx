// context/ImageContext.js
import React, { createContext, useContext } from "react";
import * as images from "../assets/food"; // Import all images dynamically

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  return (
    <ImageContext.Provider value={images}>{children}</ImageContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImages must be used within an ImageProvider");
  }
  return context;
};
