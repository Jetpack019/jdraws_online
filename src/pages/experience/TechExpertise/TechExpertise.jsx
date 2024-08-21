import React from 'react'
import {  useNavigate } from 'react-router-dom';
import "./TechExpertise.scss";

const TechExpertiseData = [
    {
      image: "../assets/expImg/Experience/Tech Expertise/PC-build.jpg",
      title: "Building and Upgrading PC",
      text: "I've enjoyed building my own PCs, gaining experience in selecting compatible components and assembling them into functional machines.",
      path: "/hardware#PCBuild"
    },
    {
      image: "../assets/expImg/Experience/Tech Expertise/Repair.jpg",
      title: "Hardware Repair",
      text: "Dealing with basic hardware issues on PCs and other devices has helped me build basic problem-solving skills.",
      path: "/hardware#Repair"
    },
    {
      image: "../assets/expImg/Experience/Tech Expertise/Software.jpg",
      title: "Software Troubleshooting",
      text: "I've tackled software issues by diagnosing problems and applying solutions, which has improved my understanding of software behavior.",
      path: "/hardware#SoftTroubleshoot"
    },
  ];


 

function TechExpertise() {
  const navigate = useNavigate();

  const handleProjectClick = (path) => {
    navigate(path);
  };
  return (
    <div className="techExpertise" id="techExpertise">
      
    <div className="container">
      <div className="row">
              
              {TechExpertiseData.map((tech) =>(
                  <div className="techContentContainer">
                      <div className="techContent" onClick={() => handleProjectClick(tech.path)}>
                          <div className="image-container">
                          <img src={tech.image} alt="" />
                          </div>
                          <h1>{tech.title} </h1>
                          <p>{tech.text} </p>
                      </div>
                  </div>
              
              ))}
          </div>
    </div>
    </div>
  )
}

export default TechExpertise