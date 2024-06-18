import React from 'react';
import {  useNavigate } from 'react-router-dom';
import "./projectCard.scss";

function ProjectCard() {
  const data = [
    {
      id: 1,
      projtype: "Websites",
      image: "assets/HomeImg/All_Websites-Exp.png",
      path: "/project#websites"
    },
    {
      id: 2,
      projtype: "Mobile App",
      image: "../assets/HomeImg/All_mobileApp.png",
      path: "/project#mobile"
    },
    {
      id: 3,
      projtype: "Graphic Designs",
      image: "../assets/HomeImg/All_others.png",
      path: "/project#others"
    }
  ];

  const navigate = useNavigate();

  const handleProjectClick = (path) => {
    navigate(path);
  };

  return (
    <div className="projectCard" id="projectCard">
      <div className="container">
        <h1>Projects</h1>
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

export default ProjectCard;
