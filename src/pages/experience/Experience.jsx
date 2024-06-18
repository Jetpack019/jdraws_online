import React, { useState } from 'react'
import "./Experience.scss"

import Menu from '../../components/menu/Menu'
import DataAnnotation from './DataAnnotation/DataAnnotation'
import NavbarExperience from '../../components/navbarExperience/navbarExperience'

import SoftwareDev from './SoftwareDev/SoftwareDev'


function Experience() {
    const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="experience">
    <NavbarExperience menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <div className="sections">
          <SoftwareDev/>
            <DataAnnotation/>
          
        </div>
    </div>
  )
}

export default Experience