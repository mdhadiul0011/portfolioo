import React from 'react'
import Intro from '../intro'
import About from '../about'
import Resume from '../resume'
import Services from '../services'
import Skills from '../skills'
import Portfolio from '../portfolio'
import Info from '../personalize'
import Testimonial from '../testimonial'
import Footer from '../Footer'

function Pageall() {
  return (
    <div className='page-all'>
        <Intro/>
        <About/>
        <Info/>
        <Resume/>
        <Services/>
        <Skills/>
        <Portfolio/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Pageall
