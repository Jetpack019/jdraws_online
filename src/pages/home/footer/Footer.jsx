import React from 'react';
import "./footer.scss"
import { useNavigate } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaGithubSquare, FaBehanceSquare } from 'react-icons/fa';

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
              <FaFacebookSquare />
            </a>
            <a href="https://www.instagram.com/korossu19/">
              <FaInstagramSquare />
            </a>
            <a href="https://github.com/Jetpack019">
              <FaGithubSquare />
            </a>
            <a href="https://www.behance.net/jaderossbanag">
              <FaBehanceSquare />
            </a>

          </div>
          <a className="address" href="/">905 Batasan St. Inaon, Pulilan, Bulacan</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
