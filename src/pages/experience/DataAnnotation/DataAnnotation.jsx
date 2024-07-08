import React, { useState } from 'react';
import './DataAnnotation.scss';

function DataAnnotation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      title: "Zebra Light Source Chunking/Sub Stitching",
      
      textcolor: "#232221",
      buttoncolor: "#28cdf7",
      description: "In this project, we annotate 100 frames using bounding boxes to classify the visible and non-visible vehicle lights, as well as road signs entering the frame, aiding in distinguishing between vehicle lights and road sign illuminations.",
      img: "../assets/expImg/Experience/RemotaskDataAnnotator/ZebraLightHouse/zebra1.PNG",
      img2: "../assets/expImg/Experience/RemotaskDataAnnotator/ZebraLightHouse/zebra2.PNG",
      img3: "../assets/expImg/Experience/RemotaskDataAnnotator/ZebraLightHouse/zebra3.PNG",
      backgroundColor: "#ffffff",
      work: "Video Playback Annotation", 
   

    },
    {
      id: "1",
      title: "Gorilla Rendlake/Spray Vision",
      textcolor: "#232221",

      description: "In this project, we annotate images using bounding boxes to identify whether they contain corn, other broadleaf plants, other grasses, volunteer corn, and soy, helping to assess the condition of the corn and differentiate between these various plant types.",
      img: "../assets/expImg/Experience/RemotaskDataAnnotator/GorillaRendlake/spray3.PNG",
      img2: "../assets/expImg/Experience/RemotaskDataAnnotator/GorillaRendlake/spray2.PNG",
      img3: "../assets/expImg/Experience/RemotaskDataAnnotator/GorillaRendlake/spray1.PNG",
      backgroundColor: "#ffffff",
      work: "Image Annotation", 
     

    },
    {
      id: "1",
      title: "Anteater 3D Road Irregularity",
      textcolor: "#232221",
      description: "In this project, we use Lidar Lite to annotate images in 200 frames, classifying road irregularities like manhole covers, bridge joints, speed bumps, potholes, and storm drains to pinpoint areas where the car might need to slow down.",
      img: "../assets/expImg/Experience/RemotaskDataAnnotator/AnteaterRoadIrregularities/ant1.PNG",
      img2: "../assets/expImg/Experience/RemotaskDataAnnotator/AnteaterRoadIrregularities/ant2.PNG",
      img3: "../assets/expImg/Experience/RemotaskDataAnnotator/AnteaterRoadIrregularities/ant3.PNG",
      backgroundColor: "#ffffff",
      work: "Sensorfusion",
      

    },
    {
      id: "1",
      title: "Bumble Bees",
      textcolor: "#232221",
      description: "In this project, we label food items using bounding boxes and polygons, categorizing each item based on its taxonomy as either a food, beverage, or non-food.",
      img: "../assets/expImg/Experience/RemotaskDataAnnotator/Bumblebees/bumblebee1.PNG",
      img2:"../assets/expImg/Experience/RemotaskDataAnnotator/Bumblebees/bumblebee2.jpg",
      img3:"../assets/expImg/Experience/RemotaskDataAnnotator/Bumblebees/bumblebee3.jpg",
      backgroundColor: "#ffffff",
      work: "Front End Web Design",
      imgLink: "https://happy-eat-in.vercel.app/",
  
    },


  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  const openLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="dataAnnotation" id="dataAnnotation">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((slide) => (
          <div
            key={slide.id}
            className="container"
            style={{ backgroundColor: slide.backgroundColor }}
          >
            <div className="item">
              <div className="left">
              <h1 style={{ color: slide.textcolor }}>{slide.title}</h1>
               <div className="webImgLeft">
               <img
                    src={slide.img}
                    alt=""
                    
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>
              <div className="right">
                <div className="topImages">
                  <img src={slide.img2} alt="" />
                  <img src={slide.img3} alt="" />
                </div>
                <div className="title">
                  <h1 style={{ color: slide.textcolor }}>{slide.description}</h1>
                  <div className="work_title" style={{ color: slide.textcolor }}>
                  <h1 >{slide.work}</h1>
                  </div>
                 

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="../assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="../assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}

export default DataAnnotation;
