import React, { useState } from 'react';
import { BsFillPersonFill, BsFillHeartFill } from 'react-icons/bs';
import { RiUserFollowLine } from 'react-icons/ri';
import './hobbies.scss';

function Hobbies() {
  const buttonData = [
    {
      id: 1,
      title: 'Drawing',
      image: '../../assets/aboutImg/hobbies/AllDrawing.png',
      description:
        'Drawing is my preferred leisure activity because it brings me a sense of comfort and relaxation. It also encourages me to persevere even when I encounter mistakes, which ultimately enhances my creative skills. Drawing enables me to express myself and transform my ideas into reality. I take pleasure in trying out different approaches and materials, and each new drawing presents a unique obstacle to surmount. As a result, I appreciate the therapeutic and imaginative opportunities that drawing offers me.',
      icon: <BsFillPersonFill />,
    },
    {
      id: 2,
      title: 'Cycling',
      image: '../../assets/aboutImg/hobbies/cycling.jpg',
      description:
        'After going through a challenging semester, cycling has become my go-to activity for maintaining my overall well-being. Cycling provides me with a way to keep moving forward and staying active, even after working on difficult projects. It also serves as a way for me to find peace and clarity when I need it most. I have found that cycling helps me to recharge my energy and regain my focus, which has helped me perform better in both my academic and personal life. Overall, I am grateful for the physical and mental benefits that cycling offers, and I look forward to continuing this hobby for years to come.',
      icon: <BsFillHeartFill />,
    },
    {
      id: 3,
      title: 'Video Enthusiast',
      image: '../../assets/aboutImg/hobbies/Allwatch.png',
      description:
        'I enjoy watching videos for both educational and entertainment purposes. Videos allow me to visualize concepts and gain inspiration from a variety of perspectives, which helps me to continually improve myself. This hobby also satisfies my curiosity and encourages me to stay informed about various topics. Additionally, I appreciate that videos can transport me to different places and offer me the opportunity to explore new things. Overall, I find watching videos to be an enriching and enjoyable way to learn and grow.',
      icon: <RiUserFollowLine />,
    },
  ];

  const [activeButton, setActiveButton] = useState(buttonData[0].id);
  const activeButtonData = buttonData.find((button) => button.id === activeButton);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="hobbies" id='hobbies'>
      <div className="hobbies-container">
        <div className="left">
          <div className="image-container">
            <img src={activeButtonData.image} alt="" />
          </div>
        </div>

        <div className="right">
          <div className="container-right">
            <div className="top">
              <h1>{activeButtonData.title}</h1>
              <p>{activeButtonData.description}</p>
            </div>
            <div className="bottom">
              {buttonData.map((button) => (
                <button
                  key={button.id}
                  className={activeButton === button.id ? 'active' : ''}
                  onClick={() => handleButtonClick(button.id)}
                >
                  {button.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
