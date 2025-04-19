import React, { useEffect, useState } from 'react';
import './BirthdayWishes.css';
import FireworksDisplay from './FireworksDisplay';

function BirthdayWishes() {
  const [count, setCount] = useState(10);
  const [showWishes, setShowWishes] = useState(false);

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

  return (
    <div className="main-container">
      {!showWishes ? (
        <h1 className="countdown">{count}</h1>
      ) : (
        <>
          <div className="wishes-box">
            <h1 className="wish-text">🎉 Happy Birthday lakshmi akka! 🎂💖</h1>
            <img src="./public/image1.jpg" alt="Birthday" className="center-image" />
            <div className="confetti">💐🍫🎂🎈🎉</div>
          </div>
          <FireworksDisplay />
        </>
      )}
    </div>
  );
}
export default BirthdayWishes
