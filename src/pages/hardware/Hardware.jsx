import React, { useState } from 'react'
import "./Hardware.scss"
import Menu from '../../components/menu/Menu'
import NavbarHardware from '../../components/navbarHardware/navbarHardware'

import PCBuild from './PCBuild/PCBuild'
import Repair from './Repair/Repair'
import SoftTroubleshoot from './SoftwareTroubleshoot/SoftTroubleshoot'
import Intro_hardware from './Intro_Hardware/Intro_hardware'

function Hardware() {
    const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="hardware" >
    <NavbarHardware menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro_hardware/>
        <PCBuild/>
        <Repair/>
        <SoftTroubleshoot/>
      </div>
    </div>
  )
}

export default Hardware
