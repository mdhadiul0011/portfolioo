'use client'
import React, { useState } from 'react'
import Button from '../button'
import { LuShapes } from 'react-icons/lu'
import { GrHtml5 } from "react-icons/gr";
import { FaCss3 } from "react-icons/fa";
import { TbBrandBootstrap } from "react-icons/tb";
import { DiJavascript } from "react-icons/di";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { FiFigma } from "react-icons/fi";
import { IoLogoFirebase } from "react-icons/io5";
import { DiPhotoshop } from "react-icons/di";
import { SiVisualstudiocode } from "react-icons/si";

function Skills() {
    const [countOn, setCountOn] = useState(false)
  return (
    <div className='skill-part'>
      <Button><div><LuShapes  className='skill-icon'/></div><div>Skills</div></Button>
      <h3>My <span className='text'>Skills</span> & <span className='text'>Tools</span></h3>
      <div className='all-skill'>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <GrHtml5/>
                </div>
                <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
                    <div className='count-part'>
                        <h3>
                            {
                                countOn && <CountUp start={0} end={70} duration={2} delay={0}/>
                            }    
                        %</h3>
                    </div>
                </ScrollTrigger>
            </div>
            <h3>Html</h3>
        </div>
        <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <FaCss3/>
                </div>
                <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
                    <div className='count-part'>
                        <h3>
                            {
                                countOn && <CountUp start={0} end={85} duration={2} delay={0}/>
                            }    
                        %</h3>
                    </div>
                </ScrollTrigger>
            </div>
            <h3>Css</h3>
       </div>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <TbBrandBootstrap/>
                </div>
                <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
                    <div className='count-part'>
                        <h3>
                            {
                                countOn && <CountUp start={0} end={80} duration={2} delay={0}/>
                            }    
                        %</h3>
                    </div>
                </ScrollTrigger>
            </div>
            <h3>Bootstrap</h3>
       </div>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <DiJavascript/>
                </div>
                <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
                    <div className='count-part'>
                        <h3>
                            {
                                countOn && <CountUp start={0} end={75} duration={2} delay={0}/>
                            }    
                        %</h3>
                    </div>
                </ScrollTrigger>
            </div>
            <h3>Javascript</h3>
       </div>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <BiLogoTailwindCss/>
                </div>
                <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
                    <div className='count-part'>
                        <h3>
                            {
                                countOn && <CountUp start={0} end={80} duration={2} delay={0}/>
                            }    
                        %</h3>
                    </div>
                </ScrollTrigger>
            </div>
            <h3>Tailwind Css</h3>
       </div>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <IoLogoReact/>
                </div>
                <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
                    <div className='count-part'>
                        <h3>
                            {
                                countOn && <CountUp start={0} end={75} duration={2} delay={0}/>
                            }    
                        %</h3>
                    </div>
                </ScrollTrigger>
            </div>
            <h3>Reactjs</h3>
       </div>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <TbBrandNextjs/>
                </div>
                <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
                    <div className='count-part'>
                        <h3>
                            {
                                countOn && <CountUp start={0} end={75} duration={2} delay={0}/>
                            }    
                        %</h3>
                    </div>
                </ScrollTrigger>
            </div>
            <h3>NextJs</h3>
       </div>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <IoLogoFirebase/>
                </div>
                <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
                    <div className='count-part'>
                        <h3>
                            {
                                countOn && <CountUp start={0} end={80} duration={2} delay={0}/>
                            }    
                        %</h3>
                    </div>
                </ScrollTrigger>
            </div>
            <h3>Firebase</h3>
       </div>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <FiFigma/>
                </div>
                <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
                    <div className='count-part'>
                        <h3>
                            {
                                countOn && <CountUp start={0} end={80} duration={2} delay={0}/>
                            }    
                        %</h3>
                    </div>
                </ScrollTrigger>
            </div>
            <h3>Figma</h3>
       </div>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <DiPhotoshop/>
                </div>
                <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
                    <div className='count-part'>
                        <h3>
                            {
                                countOn && <CountUp start={0} end={75} duration={2} delay={0}/>
                            }    
                        %</h3>
                    </div>
                </ScrollTrigger>
            </div>
            <h3>Photoshop</h3>
       </div>
       <div className='skills'>
            <div className='skill-item'>
                <div className='skill-icons'>
                    <SiVisualstudiocode/>
                </div>
                <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
                    <div className='count-part'>
                        <h3>
                            {
                                countOn && <CountUp start={0} end={75} duration={2} delay={0}/>
                            }    
                        %</h3>
                    </div>
                </ScrollTrigger>
            </div>
            <h3>VS Code</h3>
       </div>
      </div>
    </div>
  )
}

export default Skills
