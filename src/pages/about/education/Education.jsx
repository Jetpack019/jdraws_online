import React, { useState } from 'react';
import './Education.scss';
import { FaGraduationCap } from 'react-icons/fa';
import { IoSchoolOutline } from 'react-icons/io5';
import { MdPeople } from 'react-icons/md';

function Education() {
  const timelineData = [
    {
      mystatus: 'College',
      title: 'Bachelor of Science in Computer Engineering',
      Institution: 'Bulacan State University',
      description: 'I completed a comprehensive computer engineering education that covered various aspects of programming and specialized areas. In the first year, I gained proficiency in C++ coding. The second year focused on Python and Computer-Aided Design (CAD). In the third year, I learned mobile development, including Flutter and Dart. The fourth year covered embedded systems and web development using HTML, CSS, JavaScript, and web frameworks. This diverse education equipped me with a wide range of skills, allowing me to excel in different areas of computer engineering.',
      backgroundcolor: '#fff',
      date: 'June 19, 2023',
      image: '../../assets/aboutImg/education/cover1.png',
      icons: <FaGraduationCap />
    },
    {
      mystatus: 'High School',
      title: 'STEM Strand Graduate',  
      Institution: 'Sta. Peregrina High School',
      description: 'During my high school years, I was able to enhance both my artistic and computational abilities. I made a concerted effort to push myself beyond my comfort zone and explore my strengths in these areas. As a result, I was able to discover new talents and hone my existing skills, which gave me a great sense of satisfaction and fulfillment. Looking back, I am grateful for the opportunities I had during those years and the enjoyable memories I made. I am excited to see where my future path will take me, equipped with the knowledge and skills I gained during my formative high school experience.',
      backgroundcolor: '#fff',
      date: 'April 3, 2019  ',
      honors: 'with Honors',
      image: '../../assets/aboutImg/education/high_school.png',
      icons: <IoSchoolOutline /> 
    },
    
    {
      mystatus: 'Seminars',

      seminar1: 'In-Progress Begin Your Journey to Data Preparation and Data Scarping in Machine Learning',
      dateSeminar1: 'March 25, 2023',
      speaker1: 'Engr. Jester Carlos',
      seminar2: '',
      dateSeminar2: '',
      speaker2: '',
      seminar3: 'Blockchain Metaverse Fundamentals: The Fundamentals of Blockchain Technology in the Metaverse',
      dateSeminar3: '',
      speaker3: 'Engr. Ronnel Agulto',
      seminar4: '',
      dateSeminar4: '',
      speaker4: '',
      seminar5: 'In-Progress: Start Over Again with Linux Fundamentals',
      dateSeminar5: 'February 20, 2023',
      speaker5: 'Engr. Christoper D.C. Dominguez',
      icons: <MdPeople />,
    
      backgroundcolor: '#fff', 
      image: '../../assets/aboutImg/education/seminars.png'
    },
    // Add more timeline data items as needed
  ];

  const [activeDay, setActiveDay] = useState(null);

  // const handleDayHover = (day) => {
  //   setActiveDay(day);
  // };
  const handleDayClick = (day) => {
    setActiveDay(day);
  };
  const renderDayInfo = () => {
    if (activeDay) {
      const { mystatus,honors,date, title,description, icons, image, 
        seminar1 ,seminar2 ,seminar3 ,seminar4 ,seminar5 ,
        speaker1, speaker2,speaker3,speaker4,speaker5,
        dateSeminar1,dateSeminar2,dateSeminar3,dateSeminar4,dateSeminar5,...rest } = activeDay;
      return (
        <div className="timeline-info" >
          <h3>{mystatus}</h3>
          <br />
          <h2>{title}</h2>
          <h4>{date}</h4>
          <p>{honors}</p>
          <p>{description}</p>

          <h4>{seminar1}</h4>
          <h5>{speaker1}</h5>
          <h5 className='date-seminar'>{dateSeminar1}</h5>

          
          <h4>{seminar3}</h4>
          <h5>{speaker3}</h5>
          <h5 className='date-seminar'>{dateSeminar3}</h5>


          <h4>{seminar5}</h4>
          <h5>{speaker5}</h5>
          <h5 className='date-seminar'>{dateSeminar5}</h5>

          <h4>{seminar5}</h4>
          <h5>{speaker5}</h5>
          <h5 className='date-seminar'>{dateSeminar5}</h5>
        
        </div>
      );
    }
    return null;
  };

  return (
    <div className="education" style={{ transition: '1s ease', backgroundColor: activeDay?.backgroundcolor }} id="education">
      <div className="container-education">
        <div className="left">
          <div className="image-container">
            {activeDay && (
              <img src={activeDay.image} alt=""  />
            )}
          </div>
        </div>
        <div className="right">
      <div className="container-timeline">
        <ul className="timeline-list">
          {timelineData.map((day, index) => (
            <li
              key={index}
              className={`timeline-item ${activeDay === day ? 'active' : ''}`}
             
            >
              <div className={`timeline-circle ${activeDay === day ? 'active' : ''}`}
               onClick={() => handleDayClick(day)}>
                {day.icons && <div className="timeline-icon">{day.icons}</div>}
              </div>
              {/* <span>{day.mystatus}</span> */}
            </li>
          ))}
        </ul>
      </div>
    </div>

        {renderDayInfo()}
      </div>
    </div>
  );
}

export default Education;
