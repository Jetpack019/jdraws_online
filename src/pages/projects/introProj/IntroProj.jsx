import React, { useEffect, useRef } from 'react'
import "./introProj.scss"
import { motion } from 'framer-motion';
import { init } from 'ityped';

function IntroProj() {
    const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: false,
      backDelay:1500,
      backSpeed: 60,
      showCursor:true,
       strings: ['My Projects','Websites', 'Mobile Applications', 'Designing'] })
  },[])


  return (
    <div className="introProj" id="introProj">
       <div className="container" style={{ overflow: 'hidden' }}>
 

      <motion.div
        initial={{ x: '100vw', scale: 0 }}
        animate={{ x: 0, scale: 2 }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 10
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#000',
          background: 'linear-gradient(to right, #0000FF, #00FFFF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
        className="mobile-styles"
      >#
      <span ref={textRef}></span>
      </motion.div>
    </div>
    </div>
  )
}

export default IntroProj
