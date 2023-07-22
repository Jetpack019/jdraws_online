import React from 'react'
import "./NavbarAbout.scss"

function NavbarAbout({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className='logo'>JDraws</a>
            </div>  
            <div className="itemContainer">
                {/* <Person className="icon" /> */}
                <span><a href="#education">Education</a></span>
                <span><a href="#experience">Experience</a></span>
                <span><a href="#hobbies">Hobbies</a></span>
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

export default NavbarAbout
