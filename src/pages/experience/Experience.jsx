import React, { useState } from 'react'
import "./Experience.scss"
import NavbarExperience from '../../components/navbarExperience/navbarExperience'
import Menu from '../../components/menu/Menu'

import DataAnnotation from './DataAnnotation/DataAnnotation'
import SoftwareDev from './SoftwareDev/SoftwareDev'
import TechExpertise from './TechExpertise/TechExpertise'


function Experience() {
    const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="experience">
    <NavbarExperience menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <div className="sections">
            <SoftwareDev/>
            <DataAnnotation/>
            <TechExpertise/>
        </div>
    </div>
  )
}

export default Experience
