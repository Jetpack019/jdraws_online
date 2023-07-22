import React, { useState } from 'react';
import './mobile.scss'; // Import CSS file for styling

function Mobile() {

  const mobile_desc = [
    {
      prog_language: 'The projects I work on are developed in the Android Studio IDE using the Java programming language. My responsibilities include designing the front-end of the app and assisting with other aspects of its functionality. By leveraging my skills and expertise, I strive to deliver high-quality solutions that provide an exceptional user experience.'
    },
    {
      prog_language: 'Using Flutter and programmed in Dart, I developed several projects in VSCode IDE, focusing primarily on front-end development with completing database integration for login authentication. As the sole developer, I was responsible for designing and implementing these projects, ensuring that they were visually appealing and user-friendly. Leveraging my skills and expertise, I create high-quality Flutter projects that meet the needs and expectations of the end-users.'
    },
    {
      prog_language: 'I developed an application using MIT App Inventor that displays data from our thesis device. The app was designed to provide users with a user-friendly way of accessing and viewing the received sensor data from respiratory diagnostic device. Utilizing my skills and expertise, I successfully delivered a functional and visually appealing application for our thesis project.'
    }
  ]
  const images = [
    {
      title: 'SikLigtas App',
      src: '../../assets/projectImg/mobile App/Sikligtas_FrontEnd.png',
      link: 'https://drive.google.com/drive/folders/1W60vN2HGFvC51VEZujFSXu8Cym8dKnZ7?usp=sharing',
    },
    {
      title: 'Pet Time',
      src: '../../assets/projectImg/mobile App/PetTime.png',
      link: 'https://drive.google.com/drive/folders/1gtR9W4DRN8WjODx96_wcdCuvR19wXBmx?usp=sharing',
    },
    {
      title: 'Battle Monsters',
      src: '../../assets/projectImg/mobile App/BattleMonsters.png',
      link: 'https://drive.google.com/drive/folders/1Pkuf5uJrH8xZY0Jkv3h2k4pV43hJh5kl?usp=sharing',
    },
    {
      title: 'Relay App',
      src: '../../assets/projectImg/mobile App/Relay.png',
      link: 'https://drive.google.com/drive/folders/1OTTN2DXKr1myefoYw12asocftraHYvw3?usp=sharing',
    },
    {
      title: 'Ride n Roll',
      src: '../../assets/projectImg/mobile App/Ride_n_Roll_img.png',
      link: 'https://drive.google.com/drive/folders/1HHy7mhIrQpAArIJmPajDpRVXayYdZCWL?usp=sharing',
    },
    {
      title: 'Pawstagram',
      src: '../../assets/projectImg/mobile App/Pawstagram_img.png',
      link: 'https://drive.google.com/drive/folders/1ioC56nEAg8PU9D4MyZB9NBhaoOGUPgBy?usp=sharing',
    },
    {
      title: 'Respiratory Diagnostic App',
      src: '../../assets/projectImg/mobile App/Respiratory Diagnostic App.png',
      link: 'https://example.com/image4',
    },

  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = Math.ceil(images.length / 3);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const renderSlides = () => {
    const startIndex = currentSlide * 3;
    const endIndex = startIndex + 3;

    return (
      <div className="slide-grid">
        {images.slice(startIndex, endIndex).map((image, index) => (
          <a href={image.link} target="_blank" rel="noopener noreferrer" className="slide-link">
           {image.title}
          <img className="slide" src={image.src} alt="Slider" />
        </a>
        ))}
      </div>
    );
  };


  const renderButtons = () => {
    const buttons = [];
    const buttonTexts = ['Android', 'Flutter', 'MIT App']; 
  
    for (let i = 0; i < totalSlides; i++) {
      buttons.push(
        <button
          key={i}
          className={`slider-button ${currentSlide === i ? 'active' : ''}`}
          onClick={() => goToSlide(i)}
        >
          {buttonTexts[i]}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="mobile" id="mobile">

        <div className="container-mobile">
          <div className="left">
          <h1 className="title">Mobile Application</h1>
          <div className="button-container">
            <div className="button-group">{renderButtons()}</div>
            </div>
            {mobile_desc.map((desc, index) => (
              <p key={index} className={currentSlide === index ? 'active' : ''}>
                {currentSlide === index ? desc.prog_language : ''}
              </p>
            ))} 

          </div>
          
          <div className="right">
          <div className="image-slider">
            <div className="slider-container">{renderSlides()}</div>
            
            
          </div>
          </div>
        </div>
    </div>
  );
}

export default Mobile;
