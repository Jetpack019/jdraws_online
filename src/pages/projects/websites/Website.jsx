import React, { useState } from 'react';
import './websites.scss';

function Website() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      title: "Cozy Wears",
      
      textcolor: "#232221",
      buttoncolor: "#28cdf7",
      description: "Cozy Wear is a user-friendly front-end ecommerce application designed to provide customers with a seamless online shopping experience, offering a wide range of high-quality and stylish sweaters for sale at competitive prices.",
      img: "../assets/projectImg/websites/cozywear_website.png",
      img2: "../assets/projectImg/websites/cozy1.PNG",
      img3: "../assets/projectImg/websites/cozy2.PNG",
      backgroundColor: "#E97451",
      work: "Front End Web Design", 
      imgLink: "https://cozy-wears.vercel.app/",
      proglang1: "Javascript",
      proglang2: "BOOTSTRAP",
      proglang3: "CSS",
    },
    {
      id: "1",
      title: "Art Haven",
      textcolor: "#232221",
      buttoncolor: "#28cdf7",
      description: "Art Haven is an online community and marketplace for artists and art enthusiasts to connect and showcase their work.",
      img: "../assets/projectImg/websites/Website1.png",
      img2: "../assets/projectImg/websites/img1.PNG",
      img3: "../assets/projectImg/websites/img1.1.PNG",
      backgroundColor: "skyblue",
      work: "Front End Web Design", 
      imgLink: "https://art-haven.vercel.app/",
      proglang1: "HTML",
      proglang2: "CSS",
      proglang3: "JAVASCRIPT",
    },
    {
      id: "1",
      title: "Food Finder",
      textcolor: "#232221",
      description: "Food Finder is a single-page landing website designed to help users discover and explore nearby restaurants with its intuitive interface and user-friendly design.",
      img: "../assets/projectImg/websites/FoodFinder_Website.png",
      img2: "../assets/projectImg/websites/1.PNG",
      img3: "../assets/projectImg/websites/2.PNG",
      backgroundColor: "orange",
      work: "Front End Web Design",
      imgLink: "https://food-finder-two.vercel.app/",
      proglang1: "HTML",
      proglang2: "CSS",
      proglang3: "JAVASCRIPT",
    },
    {
      id: "1",
      title: "Happy Eat In",
      textcolor: "#232221",
      description: "Happy Eat In is an eatery that sources a carefully selected range of dishes from nearby restaurants. Our menu provides customers with a visually appealing display of available menu items and restaurant details, enabling them to conveniently peruse and select from a diverse array of choices.",
      img: "../assets/projectImg/websites/HappyEatIn_website.png",
      img2: "../assets/projectImg/websites/HPI_1.PNG",
      img3: "../assets/projectImg/websites/HPI_7.PNG",
      backgroundColor: "white",
      work: "Front End Web Design",
      imgLink: "https://happy-eat-in.vercel.app/",
      proglang1: "HTML",
      proglang2: "CSS",
      proglang3: "JAVASCRIPT",
    },
    {
      id: "1",
      title: "Creative Constructs",
      textcolor: "#131212",
      description: "Creative Constructs is a landing website that showcases a variety of unique and personalized art services, ranging from portraits to custom-made crafts, with a focus on providing customers with high-quality and affordable art options.",
      img: "../assets/projectImg/websites/Creative_Constructs_website.PNG",
      img2: "../assets/projectImg/websites/Creative_Constructs1.PNG",
      img3: "../assets/projectImg/websites/Creative_Constructs3.PNG",
      backgroundColor: "#fa347f",
      work: "Front End Web Design",
      imgLink: "https://craft-me.vercel.app/",
      proglang1: "HTML",
      proglang2: "CSS",
      proglang3: "JAVASCRIPT",
    },
    {
      id: "1",
      title: "One Piece Fan Page",
      textcolor: "#232221",
      description: "One Piece Fan Page is a static website offering in-depth theories, character analysis, and episode reviews for fans of the popular manga and anime series.",
      img: "../assets/projectImg/websites/OnePiece_website.png",
      img2: "../assets/projectImg/websites/onepiece1.PNG",
      img3: "../assets/projectImg/websites/onepiece5.PNG",
      backgroundColor: "#00f2fe",
      work: "Front End Web Design",
      imgLink: "https://one-piece-fan-page-two.vercel.app/",
      proglang1: "HTML",
      proglang2: "CSS",
      proglang3: "JAVASCRIPT",
    },
    {
      id: "1",
      title: "Guitar Play Central",
      textcolor: "#fff",
      description: "Guitar Play Central is a website I created that offers tuner sales, tutorial videos, and a blog. It's a resourceful platform for guitarists to find tools and information to improve their skills. The site caters to both novice and seasoned players with diverse content.",
      img: "../assets/projectImg/websites/Guitar-bg.PNG",
      img2: "../assets/projectImg/websites/Guitar-bg2.PNG",
      img3: "../assets/projectImg/websites/Guitar-bg3.PNG",
      backgroundColor: "#000",
      work: "Front End Web Design",
      imgLink: "https://one-piece-fan-page-two.vercel.app/",
      proglang1: "Javascript",
      proglang2: "HTML",
      proglang3: "CSS",
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
    <div className="websites" id="websites">
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
                 
                  <div className="row_useCodes" style={{ color: slide.title === "Guitar Play Central" ? "#000" : slide.textcolor }}>
                    <h3>{slide.proglang1}</h3>
                    <h3>{slide.proglang2}</h3>
                    <h3>{slide.proglang3}</h3>
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

export default Website;
