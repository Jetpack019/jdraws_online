import React from 'react'
import "./navbarExperience.scss"

function NavbarExperience({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#introProj" className='logo'>JDraws</a>
            </div>  
            <div className="itemContainer">
                <span><a href="#projectSoftware">Software Development</a></span>
                <span><a href="#dataAnnotation">Artificial Intelligence</a></span>
                <span><a href="#techExpertise">Tech Expertise</a></span>
            </div>
              
            <div className="right">
              <div className="hamburger" onClick={(e)=>setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default NavbarExperience
