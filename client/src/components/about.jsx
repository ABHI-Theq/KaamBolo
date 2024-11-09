import React from 'react'
import Hero from './AboutCom/Hero'
import Contact from './AboutCom/Contact'
import Values from './AboutCom/Values'
function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <Hero />
    <Values />
    <Contact />
  </div>
  )
}

export default About
