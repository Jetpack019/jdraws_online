import React, { useState } from 'react'
import "./contact.scss"
import Menu from '../../components/menu/Menu'
import ContactForm from './contactForm/ContactForm'
import Footer from '../home/footer/Footer'
import NavbarContact from '../../components/navbarContact/navbarContact'

function Contact() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="contact">
        <NavbarContact menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
         <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
         

         <div className="sections">
            <ContactForm/>
            <Footer/>
         </div>
    </div>
  )
}

export default Contact
