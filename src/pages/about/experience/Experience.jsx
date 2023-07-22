import React, { useEffect, useRef, useState } from 'react';
import './Experience.scss';

function Experience() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const buttonData = [
    { id: 1, 
      title: 'Sofware Developer',
      image: '../assets/aboutImg/experience/AghimJuan.png', 
      backgroundcolor: '#FFB717',
      description: "Working for this start-up company gave me valuable experience in developing a mobile ecommerce application. As the software developer on the team, I was responsible for developing the Relay App mobile application. Through this project, I was able to enhance my skills in developing user interfaces and making progress by researching and implementing the necessary changes to my code. This experience taught me the importance of focus and determination in completing tasks. Overall, I am grateful for the opportunity to work on this project and to have gained valuable experience in mobile application development." 
    },
    { id: 2, 
      title: 'Programmer',
      image: '../assets/aboutImg/experience/Respiratory_main.png', 
      backgroundcolor: '#B9E5FE',
      description: "As a programmer in our thesis project, I took on the additional challenge of working on the hardware aspect of the project, which was not a typical part of my role. Despite encountering frustrating moments during the project, I utilized my multitasking ability to contribute effectively. I proactively sought solutions to the issues that arose, and I made an effort to quickly comprehend the problematic functions of the device. This project helped me to enhance my adaptability skills, and I discovered that making modifications was often necessary to achieve successful project outcomes. Overall, I am proud of our team's dedication to the project and grateful for the valuable experience I gained from it."
    },
    { id: 3,  
      title: 'Front End Developer',
      image: '../assets/aboutImg/experience/Sikligtas_main.png', 
      backgroundcolor: '#1D60A3',
      description: "As a front-end developer on my team, I take pride in my work developing the UI design for the Sikligtas app. Although the implementation of the main functions can be time-consuming, I always strive to deliver high-quality work in a timely manner. I am committed to making the necessary changes to improve the app, and I am always open to feedback and suggestions from my colleagues. Through my dedication and attention to detail, I strive to contribute to the success of our team and the overall success of the project."
    },
  ];
  const [activeButton, setActiveButton] = useState(buttonData[0].id);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };


  const slideIntervalRef = useRef(null);

  useEffect(() => {
 
    slideIntervalRef.current = setInterval(() => {
      const currentIndex = buttonData.findIndex((button) => button.id === activeButton);
      const nextIndex = (currentIndex + 1) % buttonData.length;
      setActiveButton(buttonData[nextIndex].id);
    }, 10000);

    return () => {
      // Clean up the interval on component unmount
      clearInterval(slideIntervalRef.current);
    };
  }, [activeButton, buttonData]);
  return (
    <div className="experience" id="experience">
      <div className="container-experience">
        <div className="left">
          <div className="experience-content">
            <div className="top">
            {buttonData.map((button) => (
              activeButton === button.id && (
                <div key={button.id}>
                  <h1>{button.title}</h1>
                  <p>{button.description}</p>
                </div>
              )
            ))}
            </div>


          </div>

          <div className="button-slide">
              {buttonData.map((button) => (
                <button
                  key={button.id}
                  className={activeButton === button.id ? 'active' : ''}
                  onClick={() => handleButtonClick(button.id)}
                  style={{ backgroundColor: activeButton === button.id ? button.backgroundcolor : '' }}
                >
                </button>
              ))}
            </div>
        </div>
        <div className="right">
          <div className="image-container">
            {buttonData.map((button) => (
              activeButton === button.id && <img key={button.id} src={button.image} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
