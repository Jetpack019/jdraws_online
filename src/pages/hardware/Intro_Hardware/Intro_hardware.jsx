import React, { useState, useEffect } from 'react';
import './Intro_hardware.scss';

const images = [
  "/assets/hardwareImg/IMG_20240805_020929_256 1.png",
  "/assets/hardwareImg/IMG_20240710_195111_512 1.png",
  "/assets/hardwareImg/Group 1.png"
];

const texts = [
  {
    heading: "Building and Upgrading my PC",
    paragraph: "Elevate my computing experience with guide to building and upgrading my PC, where I walk through selecting components, assembling my system, and optimizing performance to create a powerful, future-proof machine tailored for my needs."
  },
  {
    heading: "Hardware Troubleshooting",
    paragraph: "Resolving basic Hardware issues swiftly using some guides to troubleshoot, offering step-by-step solutions for diagnosing and fixing common problems to keep your system running smoothly and efficiently."
  },
  {
    heading: "Software Troubleshooting",
    paragraph: "Quickly address software issues with our comprehensive guide to troubleshooting, providing clear, step-by-step solutions for diagnosing and resolving common software problems to ensure your programs and applications run seamlessly."
  }
];

function Intro_hardware() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="intro_hardware" id="intro_hardware">
      <div className="container-intro-hardware">
        <div className="slider">
          <img src={images[currentIndex]} alt="" className="fade" />
        </div>
        <div className="intro_hardware_text fade">
          <h4>{texts[currentIndex].heading}</h4>
          <p>{texts[currentIndex].paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default Intro_hardware;
