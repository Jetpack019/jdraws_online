import React from 'react'
import "./introabout.scss"

function IntroAbout() {
  return (
    <div className='introAbout'>
        <div className="container-About">
            <div className="left">
                <h1>Aspiring Front End Developer</h1>
                <p>I create visually appealing and user-friendly interfaces for web applications. With a focus on problem-solving and staying up-to-date with industry trends, I am eager to contribute my skills and expertise to innovative web development projects and collaborate with dynamic teams. With a passion for web development and a commitment to delivering high-quality results, I am confident in adding significant value to any project.</p>
                <h2>Technology Stack</h2>
                <div className="row_tech_stack">
                    <h3>HTML</h3>
                    <h3>CSS</h3>
                    <h3>JAVASCRIPT</h3>
                    <h3>REACT.JS</h3>
                    <h3>SASS</h3>
                    <h3>BOOTSTRAP</h3>
                    <h3>DART</h3>
                    <h3>SQL</h3>
                    <h3>FIGMA</h3>
                </div>
  
            </div>
            <div className="right">
                <div className="img-container">
                    <img src="../assets/aboutImg/me.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default IntroAbout
