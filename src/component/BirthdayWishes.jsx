import React, { useEffect, useState } from 'react';
import './BirthdayWishes.css';
import FireworksDisplay from './FireworksDisplay';

const imageList = [
  'public/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpg'
];

function BirthdayWishes() {
  const [count, setCount] = useState(10);
  const [showWishes, setShowWishes] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Countdown logic
  useEffect(() => {
    const countdown = async () => {
      for (let i = 10; i > 0; i--) {
        setCount(i);
        await new Promise((res) => setTimeout(res, 1000));
      }
      setShowWishes(true);
    };
    countdown();
  }, []);

  // Rotate images only after countdown finishes
  useEffect(() => {
    let interval;
    if (showWishes) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds
    }
    return () => clearInterval(interval);
  }, [showWishes]);

  return (
    <div className="main-container">
      {!showWishes ? (
        <h1 className="countdown">{count}</h1>
      ) : (
        <>
          <div className="wishes-box">
            <h1 className="wish-text">🎉 Happy Birthday Lakshmi Akka! 🎂💖</h1>
            <img
              src={imageList[currentImageIndex]}
              alt="Birthday"
              className="center-image"
            />
            <div className="confetti">💐🍫🎂🎈🎉</div>
          </div>
          <FireworksDisplay />
        </>
      )}
    </div>
  );
}






























export default BirthdayWishes
