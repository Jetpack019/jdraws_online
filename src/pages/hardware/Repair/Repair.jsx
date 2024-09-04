import React, { useState, useEffect } from 'react';
import "./Repair.scss";

// Include image URLs in the data array
const repairData = [
  {
    title: "Replacing laptop components",
    description: "I often repair my laptop by watching instructional videos and reading forums or articles for guidance on proper techniques. I also rely on advice from experienced users to ensure I'm following the best practices. Over time, this approach has helped me become more confident in handling various repairs on my own.",
    images: [
      "/assets/hardwareImg/hardware repair/replace-laptop-components/replace-1.jpg",
      "/assets/hardwareImg/hardware repair/replace-laptop-components/replace-2.jpg"
    ]
  },
  {
    title: "Printer Troubleshooting",
    description: "I usually handle basic printer troubleshooting by watching tutorial videos and reading forums or articles for step-by-step guidance. Learning from the experiences of others helps me resolve common issues effectively.",
    images: [
      "/assets/hardwareImg/hardware repair/printer-troubleshoot/print-1.jpg", 
      "/assets/hardwareImg/hardware repair/printer-troubleshoot/print-2.jpg",
      "/assets/hardwareImg/hardware repair/printer-troubleshoot/print-3.jpg"  
    ]
  },
  {
    title: "Laptop Component Upgrade",
    description: "I typically replace laptop parts like RAM and SSDs by following instructional videos and reading online guides. This approach ensures that I install the components correctly and avoid potential issues.",
    images: [
      "/assets/hardwareImg/hardware repair/laptop parts upgrade/laptop-upgrade.jpg",
    ]
  },
  {
    title: "Basic Smartphone Parts Replacement",
    description: "When replacing basic laptop parts like batteries and screens, I rely on instructional guides and detailed online instructions. This approach helps me complete the replacements accurately and safely.",
    images: [
      "/assets/hardwareImg/hardware repair/cp-replace-parts/cp-replace-1.jpg",
      "/assets/hardwareImg/hardware repair/cp-replace-parts/cp-replace-2.jpg",
      "/assets/hardwareImg/hardware repair/cp-replace-parts/cp-replace-3.jpg"  
    ]
  }
];

function Repair() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % repairData[currentIndex].images.length);
    }, 3000);
    
    return () => clearInterval(interval); 
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % repairData.length);
    setImageIndex(0); 
  };

  const { title, description, images } = repairData[currentIndex];

  return (
    <div className="Repair" id="Repair">
      <div className="container">
        <div className="left_image_container">
          <img src={images[imageIndex]} alt={title} /> 
        </div>

        <div className="right_content_container">
          <h1>{title}</h1>
          <p>{description}</p>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Repair;
