import React from 'react'
import "./body.css"
import About from './about/index'
import Projects from "./projects/index"
import Contact from "./contact/index"
import Skills from "./skills/index"
import Work from "./work/index"
function Body() {
  return (
    <div className='body'>
      <section id='about'>
        <About />
      </section>
      <section id='projects'>
      <Projects />
      </section>
      <section id='skills'>
      <Skills />
      </section>
      <section id='work'>
      <Work />
      </section>
      <section id='contact'>
      <Contact />
    </section>
    </div>
  )
}

///Till 52 : 30  

export default Body