import React from 'react'
import "./navbarContact.scss"

function NavbarContact({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#introProj" className='logo'>JDraws</a>
            </div>  
            <div className="itemContainer">
                {/* <Person className="icon" /> */}
               
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

export default NavbarContact
