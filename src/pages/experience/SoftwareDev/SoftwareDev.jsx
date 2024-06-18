import React from 'react';
import {  useNavigate } from 'react-router-dom';
import "./SoftwareDev.scss";

function SoftwareDev() {
  const data = [
    {
      id: 1,
      projtype: "Websites",
      image: "../assets/HomeImg/All_Websites.png",
      path: "jdraws-online.vercel.app/project/#websites"
    },
    {
      id: 2,
      projtype: "Mobile App",
      image: "../assets/HomeImg/All_mobileApp.png",
      path: "jdraws-online.vercel.app/project/#mobile"
    },
    {
      id: 3,
      projtype: "Graphic Designs",
      image: "../assets/HomeImg/All_others.png",
      path: "jdraws-online.vercel.app/project/#others"
    }
  ];

  const navigate = useNavigate();

  const handleProjectClick = (path) => {
    navigate(path);
  };

  return (
    <div className="projectSoftware" id="projectSoftware">
      <div className="container">
        <h1>Internship and Hands On Projects</h1>
        <div className="wrapper-projects">
          <div className="card">
            {data.map((project) => (
              <div
                className="image-container"
                key={project.id}
                onClick={() => handleProjectClick(project.path)}
              >
                <img src={project.image} alt="" />
                <h1>{project.projtype}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoftwareDev;
