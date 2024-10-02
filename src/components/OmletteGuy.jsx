import React from 'react';
import { useState, useEffect } from 'react';
import CaricatureSculptTheBear from '../Assets/CaricatureSculptTheBear.png';
import EyeBall from '../Assets/EyeBall.png'

const OmletteGuy = () => {
  const [mousePosition,setMousePosition] = useState({ x: null, y: null });


  useEffect(() => {
    const updateMousePosition = ev => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

const eyeballPosition = (eyeCenterX, eyeCenterY) =>{
  const dx = mousePosition.x - eyeCenterX;
  const dy = mousePosition.y - eyeCenterY;
  const angle = Math.atan2(dy, dx);
  const x = 9;
  const y = 8;

  return {
    left: `${eyeCenterX + Math.cos(angle) * x}px`,
    top: `${eyeCenterY + Math.sin(angle) * y}px`,
  };
  
}


  return (
    <>
    <div className='relative'>
      

    <img src ={CaricatureSculptTheBear}
    className="relative z-10"
    />

    <img 
    src ={EyeBall} 
    className='h-12 w-12 absolute z-0'
    style={{
      top: '32%',
      left: '33%',
      ...eyeballPosition(400, 300), // Adjust based on the eye's initial position in the image

    }}
    />

    <img 
    src ={EyeBall}
    className='h-12 w-12 absolute z-0'
    style={{
      top: '32%',
      left: '26.5%',
      ...eyeballPosition(500, 300), // Adjust based on the eye's initial position in the image

    }}
    />
    
    </div>
    </>
  )

}
export default OmletteGuy