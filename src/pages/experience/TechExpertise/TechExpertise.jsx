import React from 'react'

import "./TechExpertise.scss";

const TechExpertiseData = [
    {
      image: "../assets/expImg/Experience/Tech Expertise/PC-build.png",
      title: "Building and Upgrading PC",
      text: "I've enjoyed building my own PCs, gaining experience in selecting compatible components and assembling them into functional machines."
    },
    {
      image: "../assets/expImg/Experience/Tech Expertise/Repair.png",
      title: "Hardware Repair",
      text: "Dealing with hardware issues on PCs and other devices has helped me build basic problem-solving skills."
    },
    {
      image: "../assets/HomeImg/All_Websites.png",
      title: "Software Troubleshooting",
      text: "I've tackled software issues by diagnosing problems and applying solutions, which has improved my understanding of software behavior."
    },
  ];
function TechExpertise() {
  return (
    <div className="techExpertise" id="techExpertise">
      
    <div className="container">
      <div className="row">
              
              {TechExpertiseData.map((tech) =>(
                  <div className="techContentContainer">
                      <div className="techContent">
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