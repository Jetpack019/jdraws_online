import React, { useEffect, useRef } from 'react'
import "./intro.scss";
import { init } from 'ityped'

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: false,
      backDelay:1500,
      backSpeed: 60,
      showCursor:true,
       strings: ['Front End Developer' ] })
  },[])

  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="../assets/HomeImg/introImg/Me1.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi, I am</h2>
            <h1>Jade Ross D. Banag</h1>
            <h3>Aspiring <span ref={textRef}></span></h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
    </div>
  )
}

export default Intro
