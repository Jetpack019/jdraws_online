import React, { useState } from 'react'
import Home from './pages/home/Home'
import { Route, Routes} from "react-router-dom"

import About from './pages/about/About';
import Project from './pages/projects/Project';
import Contact from './pages/contact/Contact';
import Footer from './pages/home/footer/Footer';
import Experience from './pages/experience/Experience';


function App() {

  return (
    
    <div className="app">
       <Routes>
       <Route path="/" element={<Home/>}></Route>
        <Route path="/project/" element={<Project/>}></Route>
        <Route path="/experience/" element={<Experience/>}></Route>
        <Route path="/about/" element={<About/>}></Route>
        <Route path="/contact/" element={<Contact/>}></Route>
      </Routes>

    </div>
  )
}

export default App
