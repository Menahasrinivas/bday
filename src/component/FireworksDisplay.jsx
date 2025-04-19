import { useEffect, useRef } from 'react';
import { Fireworks } from 'fireworks-js';

const FireworksDisplay = () => {
    const ref = useRef(null);
  
    useEffect(() => {
      const container = ref.current;
      if (!container) return;
      <canvas
  ref={canvasRef}
  className="fireworks-canvas"
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 1, // canvas stays behind image
    pointerEvents: 'none',
  }}
></canvas>

  
      const fireworks = new Fireworks(container, {
        speed: 2,
        acceleration: 1.05,
        friction: 0.95,
        gravity: 1.5,
        particles: 80,
        trace: 3,
        explosion: 5,
        intensity: 30,
        flickering: 50,
        rocketsPoint: { min: 0, max: 100 },
      });
  
      fireworks.start();
  
      return () => fireworks.stop();
    }, []);
  
    return (
      <div
        ref={ref}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      />
    );
  };
export default FireworksDisplay
