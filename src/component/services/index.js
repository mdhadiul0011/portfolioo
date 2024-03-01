import React from 'react'
import Button from '../button'
import { FaBarsStaggered } from 'react-icons/fa6'
import { TbKeyframesFilled } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { FaBezierCurve } from "react-icons/fa6";

function Services() {
  return (
    <div className='service-part'>
      <Button><div><FaBarsStaggered  className='service-icon'/></div><div>Services</div></Button>
      <div className='all-service'>
        <div className='service-item'>
            <div className='ser-icon'>
                <TbKeyframesFilled/>
            </div>
            <div className='ser-head'>
                <h3>Website Design</h3>
                <p>I created digital products with unique ideas use Figma , pdf to html, psd to html. I create this desgin with html5, css3, Bootstrap5, js, jquery pluggin etc.</p>
            </div>
        </div>
        <div className='service-item'>
            <div className='ser-icon'>
                <FaBezierCurve/>
            </div>
            <div className='ser-head'>
                <h3>Responsive Design</h3>
                <p>I created digital products with unique ideas use Figma , pdf to html, psd to html. I create this desgin with html5, css3, Bootstrap5, js, jquery pluggin, react.js next.js and responsive breakpoints.</p>
            </div>
        </div>
        <div className='service-item'>
            <div className='ser-icon'>
                <FaCode/>
            </div>
            <div className='ser-head'>
                <h3>Frontend Development</h3>
                <p>I created digital products with unique ideas use Figma , pdf to html, psd to html. I use in this technolodgy react.js, next.js, redux, matarial UI, chakro UI, sass, tailwind css and firebase also.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
