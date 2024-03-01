import React from 'react'
import Button from '../button'
import { LuUser2 } from "react-icons/lu";

function About() {
  return (
    <div className='about-part'>
      <Button><div><LuUser2 className='about-icon'/></div><div>About</div></Button>
      <div className='about-head'>
          <h3>Every great design begin with an even <span>better story</span> and <span>deep thinking</span></h3>
          <p>I have always loved coding since childhood. But I didn't know what to start coding with. I was searching google youtube everywhere how to do coding. There are some ideas from these. I have been involved in coding for almost 2 years now. My first journey started with html, css. Then I did a course just for website design. There I learned html, css, bootstrap, js and jquery plugin. Then I learned react.js, next,js to become a frontend developer. Currently I am working as a frontend developer. I loves my work. I'm quietly confident, naturally curious, and perpetually working on improving my skill.</p>
      </div>
    </div>
  )
}

export default About
