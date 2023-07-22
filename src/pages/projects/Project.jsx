import React, { useState } from 'react'
import "./project.scss"
import NavbarProject from '../../components/navbarProject/NavbarProject'
import Menu from '../../components/menu/Menu'
import Website from './websites/Website'
import Mobile from './mobile/Mobile'
import Others from './others/Others'
import IntroProj from './introProj/IntroProj'
import Footer from '../home/footer/Footer'


function Project() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="projecthome">
      <NavbarProject menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <div className="sections"> 
        <IntroProj/>
        <Website/>
        <Mobile/>
        <Others/>
        <Footer/>
      </div>
    </div>
  )
}

export default Project
