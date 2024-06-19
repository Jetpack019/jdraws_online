import React from 'react'

import "./TechExpertise.scss";

const TechExpertiseData = [
    {
      image: "../assets/HomeImg/All_Websites.png",
      title: "Building and Upgrading PC",
      text: "I've enjoyed building my own PCs, gaining experience in selecting compatible components and assembling them into functional machines."
    },
    {
      image: "../assets/HomeImg/All_Websites.png",
      title: "Hardware Repair",
      text: "Troubleshooting and fixing hardware issues on PCs and other devices has helped me develop practical problem-solving skills."
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
      
        <div className="row">
            
            {TechExpertiseData.map((tech,index) =>(
                <div className="techContentContainer">
                    <div className="techContent">
                        <img src={tech.image} alt="" />
                        <h1>{tech.title} </h1>
                        <p>{tech.text} </p>
                    </div>
                </div>
            
            ))}
        </div>
    </div>
  )
}

export default TechExpertise