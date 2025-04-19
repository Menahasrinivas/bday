import React, { useEffect, useState } from 'react';
import './BirthdayWishes.css';
import FireworksDisplay from './FireworksDisplay';

const imageList = [
  '/image1.jpg',
  '/image2.jpg'
  
  
];

const BirthdayWishes = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="main-container">
      <h1 className="wish-text">🎉 Happy Birthday Lakshmi Akka ! 🎂💖</h1>
      <img
        src={imageList[currentImageIndex]}
        alt="Birthday Surprise"
        className="center-image rotating-image"
      />
      
      <div className="confetti">💐🍫🎂🎈🎉</div>
    </div>
  );
};


export default BirthdayWishes
