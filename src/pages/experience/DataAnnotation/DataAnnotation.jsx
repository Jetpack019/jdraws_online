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
      description: "Cozy Wear is a user-friendly front-end ecommerce application designed to provide customers with a seamless online shopping experience, offering a wide range of high-quality and stylish sweaters for sale at competitive prices.",
      img: "../assets/projectImg/websites/cozywear_website.png",
      img2: "../assets/projectImg/websites/cozy1.PNG",
      img3: "../assets/projectImg/websites/cozy2.PNG",
      backgroundColor: "#ffffff",
      work: "Video Playback Annotation", 
      imgLink: "https://cozy-wears.vercel.app/",

    },
    {
      id: "1",
      title: "Gorilla Rendlake/Spray Vision",
      textcolor: "#232221",

      description: "Art Haven is an online community and marketplace for artists and art enthusiasts to connect and showcase their work.",
      img: "../assets/projectImg/websites/Website1.png",
      img2: "../assets/projectImg/websites/img1.PNG",
      img3: "../assets/projectImg/websites/img1.1.PNG",
      backgroundColor: "#ffffff",
      work: "Image Annotation", 
      imgLink: "https://art-haven.vercel.app/",

    },
    {
      id: "1",
      title: "Anteater 3D Road Irregularity",
      textcolor: "#232221",
      description: "Food Finder is a single-page landing website designed to help users discover and explore nearby restaurants with its intuitive interface and user-friendly design.",
      img: "../assets/projectImg/websites/FoodFinder_Website.png",
      img2: "../assets/projectImg/websites/1.PNG",
      img3: "../assets/projectImg/websites/2.PNG",
      backgroundColor: "#ffffff",
      work: "Sensorfusion",
      imgLink: "https://food-finder-two.vercel.app/",

    },
    {
      id: "1",
      title: "Bumble Bees",
      textcolor: "#232221",
      description: "Happy Eat In is an eatery that sources a carefully selected range of dishes from nearby restaurants. Our menu provides customers with a visually appealing display of available menu items and restaurant details, enabling them to conveniently peruse and select from a diverse array of choices.",
      img: "../assets/projectImg/websites/HappyEatIn_website.png",
      img2: "../assets/projectImg/websites/HPI_1.PNG",
      img3: "../assets/projectImg/websites/HPI_7.PNG",
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
                    onClick={() => openLink(slide.imgLink)}
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
