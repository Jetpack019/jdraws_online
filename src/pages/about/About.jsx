import React, { useState } from 'react'
import "./about.scss"
import NavbarAbout from '../../components/navbarAbout/NavbarAbout'
import Menu from '../../components/menu/Menu'
import Education from './education/Education'
import IntroAbout from './introAbout/IntroAbout'
import Experience from './experience/Experience'
import Footer from '../home/footer/Footer'
import Hobbies from './hobbies/Hobbies'

function About() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
 
    <div className="about">
         <NavbarAbout menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
         <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

         <div className="sections">
            <IntroAbout/>
            <Education/>
            <Experience/>
            <Hobbies/>
            <Footer/>
         </div>
    </div>
  )
}

export default About
