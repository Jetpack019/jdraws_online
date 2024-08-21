import React from 'react'
import "./navbarHardware.scss"

function NavbarHardware({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#introProj" className='logo'>JDraws</a>
            </div>  
            <div className="itemContainer">
                <span><a href="#PCBuild">PC Build/Upgrade</a></span>
                <span><a href="#Repair">Hardware Repair</a></span>
                <span><a href="#SoftTroubleshoot">Software Troubleshoot</a></span>
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

export default NavbarHardware
