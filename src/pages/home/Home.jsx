import React, { useState } from 'react'
import Intro from './intro/Intro'
import "./home.scss"
import ProjectCard from './projectcards/ProjectCard'
import Certificates from './certificates/Certificates'

import Navbar from '../../components/navbar/Navbar'
import Menu from '../../components/menu/Menu'
import Footer from './footer/Footer'


function Home() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="home">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
            <Intro/>
            <ProjectCard/>
            <Certificates/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home
