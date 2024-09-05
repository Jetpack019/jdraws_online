import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import "./SoftTroubleshoot.scss";

function SoftTroubleshoot() {
  const troubleshootData = [
    {
      title: "Check Disk Utility",
      description: "I ran chkdsk /f in Command Prompt with administrative privileges to scan and fix file system and disk errors.",
      img: "/assets/hardwareImg/software/software-1.png"
    },
    {
      title: "Task Manager",
      description: "I use Task Manager to monitor whether the program is running simultaneously and to check the resource usage of various applications, managing startup programs and troubleshoot system performance issues.",
      img: "/assets/hardwareImg/software/software-2.png"
    },
    {
      title: "Start Up",
      description: "I manage service startup behavior to configure whether they start automatically, manually, or are disabled, optimizing system resources and boot time.",
      img: "/assets/hardwareImg/software/software-3.png"
    },
    {
      title: "Virus Clean up",
      description: "I use Virus & Threat Protection to quickly delete viruses and scan for major threats within the folders of my downloaded applications, ensuring system security.",
      img: "/assets/hardwareImg/software/software-4.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true 
  });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % troubleshootData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + troubleshootData.length) % troubleshootData.length);
  };

  return (
    <div className="SoftTroubleshoot" id="SoftTroubleshoot" {...handlers}>
      <div className="container">
        <h1>{troubleshootData[currentIndex].title}</h1>
        <img src={troubleshootData[currentIndex].img} alt="" />
        <p>{troubleshootData[currentIndex].description}</p>
      </div>
    </div>
  );
}

export default SoftTroubleshoot;
