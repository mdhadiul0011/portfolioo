'use client'
import React, { useState } from 'react'
import Button from '../button'
import { VscHome  } from "react-icons/vsc";
import { Typewriter } from 'react-simple-typewriter';
import { FaArrowDownLong } from "react-icons/fa6";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function Intro() {
    const [countOn, setCountOn] = useState(false)
  return (
    <div className='intro'>
      <Button><div><VscHome className='home-icon'/></div> <div>Introduce</div></Button>
      <div className='intro-head'>
        <h3>Say Hi from <span> 
            <Typewriter
            words={['Hadiul']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            />
        </span> ,</h3>
        <p>Front-end Developer</p>
      </div>
      <div className='intro-parra'>
        <p>My design and code is beautifully simple things. My work is my passion. I love my work and honestly I do work. Just simple like that!</p>
      </div>
      <div  className='rounded-text'>
          <img className='rotating-img' src='./imgs/round-text.png' alt='rounded-text'/>
          <div>
            <FaArrowDownLong className='track-icon'/>
          </div>
          
      </div>
      <div className='all-count'>
        <div>
        <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
                <div className='count-part'>
                    <h3  className='countup'>
                        {
                            countOn && <CountUp start={0} end={2} duration={2} delay={0}/>
                        }    
                    +</h3>
                    
                    <p>2 years of experience</p>
                </div>
            </ScrollTrigger>
        </div>
        <div>
            <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
                <div className='count-part'>
                    <h3  className='countup'>
                        {
                            countOn && <CountUp start={0} end={10} duration={2} delay={0}/>
                        }    
                    +</h3>
                    
                    <p>Almost 10 project done</p>
                </div>
            </ScrollTrigger>
        </div>
      </div>
    </div>
  )
}

export default Intro
