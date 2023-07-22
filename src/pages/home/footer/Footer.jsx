import "./footer.scss"
import React from 'react'
import {useNavigate } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="left">
                <a href="#intro" className="logo">JDraws</a>
                 <div className="container-bottom">
                <a href="">+63 9169973136</a>
                <a href="">banagjadeross@gmail.com</a>
                 </div>
            </div>
            <div className="center">
                <a href="/">Home</a>
                <a href="/project/">Projects</a>
                <a href="/about/">About Me</a>
                <a href="/contact">Contact</a>

            </div>
            <div className="right">
                <div className="container-icons">
                <a href="https://www.facebook.com/jade.banag.9">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com/korossu19/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="https://github.com/Jetpack019">
                <i className="fa-brands fa-github-square"></i>
                </a>
                <a href="https://www.behance.net/jaderossbanag">
                <i className="fa-brands fa-behance-square"></i>
                </a>
                
                </div>
                <a className="address" href="/">905 Batasan St. Inaon, Pulilan, Bulacan</a>
            </div>
        </div>
    </div>
  )
}

export default Footer