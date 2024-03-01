'use client'
import React, { useRef, useState } from 'react'
import Button from '../button'
import { LiaGripVerticalSolid } from 'react-icons/lia'
import { IoMdEye } from "react-icons/io";
import useClickOutside from '../helpers';

function Portfolio() {
     const [out, setOut] = useState(false)
     const [outTwo, setOutTwo] = useState(false)
     const [outThree, setOutThree] = useState(false)
     const [outFour, setOutFour] = useState(false)
     const [outFive, setOutFive] = useState(false)
     const [outSix, setOutSix] = useState(false)
     const page_ref = useRef(null)
     const page_refTwo = useRef(null)
     const page_refThree = useRef(null)
     const page_refFour = useRef(null)
     const page_refFive = useRef(null)
     const page_refSix = useRef(null)

     useClickOutside(page_ref, ()=>{
        setOut(false)
     });

     const handleClickEye = () =>{
        setOut(true)
     }
     useClickOutside(page_refTwo, ()=>{
        setOutTwo(false)
     });

     const handleClickEyeTwo = () =>{
        setOutTwo(true)
     }
     useClickOutside(page_refThree, ()=>{
        setOutThree(false)
     });

     const handleClickEyeThree = () =>{
        setOutThree(true)
     }
     
     useClickOutside(page_refFour, ()=>{
        setOutFour(false)
     });

     const handleClickEyeFour = () =>{
        setOutFour(true)
     }

     useClickOutside(page_refFive, ()=>{
        setOutFive(false)
     });

     const handleClickEyeFive = () =>{
        setOutFive(true)
     }

     useClickOutside(page_refSix, ()=>{
        setOutSix(false)
     });

     const handleClickEyeSix= () =>{
        setOutSix(true)
     }


  return (
    <div className='portfolio-part'>
      <Button><div><LiaGripVerticalSolid  className='port-icon'/></div> <div> My Portfolio</div></Button>
        <div className='port-head'>
            <p>Portfolio <span>Project</span> </p>
        </div>
        <div className=''></div>
      <div className='portfolio'>
        <div className='main-port'>
            <div className='portfolio-item'>
                <div className='overlay'>
                    <IoMdEye className='eye' onClick={handleClickEye}/>
                </div>
                <img src='./imgs/abias.jpg' alt='abias'/>
            </div>
        
            {
                out &&            
                <div className='inner-page' ref={page_ref}>
                <img src='./imgs/abias.jpg' alt='abias'/>
                <div className='content'>
                    <h2>Abias</h2>
                    <div className='button'>
                        <Button>html</Button>
                        <Button>css</Button>
                        <Button>bootstrap</Button>
                        <Button>jquery</Button>
                        <Button>javascript</Button>
                    </div>
                    <p>This Abias project is a very simple and good looking project. It is converted psd to html. </p>
                    <div className='link'>
                    <a href='/'><Button>Click Here</Button></a>
                    </div>
                    
                </div>
            </div>
            }
        </div>
        
        <div className='main-port'>
            <div className='portfolio-item'>
                <div className='overlay'>
                    <IoMdEye className='eye' onClick={handleClickEyeTwo}/>
                </div>
                <img src='./imgs/petco.jpg' alt='abias'/>
            </div>
        
            {
                outTwo &&            
                <div className='inner-page' ref={page_refTwo}>
                <img src='./imgs/petco.jpg' alt='abias'/>
                <div className='content'>
                    <h2>Petco</h2>
                    <div className='button'>
                        <Button>html</Button>
                        <Button>css</Button>
                        <Button>bootstrap</Button>
                        <Button>jquery</Button>
                        <Button>javascript</Button>
                    </div>
                    <p>This Abias project is a very simple and good looking project. It is converted psd to html. </p>
                    <div className='link'>
                    <a href='/'><Button>Click Here</Button></a>
                    </div>
                    
                </div>
            </div>
            }
        </div>
        <div className='main-port'>
            <div className='portfolio-item'>
                <div className='overlay'>
                    <IoMdEye className='eye' onClick={handleClickEyeThree}/>
                </div>
                <img src='./imgs/innovate.jpg' alt='abias'/>
            </div>
        
            {
                outThree &&            
                <div className='inner-page' ref={page_refThree}>
                <img src='./imgs/innovate.jpg' alt='abias'/>
                <div className='content'>
                    <h2>Innovate</h2>
                    <div className='button'>
                        <Button>html</Button>
                        <Button>css</Button>
                        <Button>bootstrap</Button>
                        <Button>jquery</Button>
                        <Button>javascript</Button>
                    </div>
                    <p>This Abias project is a very simple and good looking project. It is converted psd to html. </p>
                    <div className='link'>
                    <a href='/'><Button>Click Here</Button></a>
                    </div>
                    
                </div>
            </div>
            }
        </div>
        <div className='main-port'>
            <div className='portfolio-item'>
                <div className='overlay'>
                    <IoMdEye className='eye' onClick={handleClickEyeFour}/>
                </div>
                <img src='./imgs/fast_jao.png' alt='fastjao'/>
            </div>
        
            {
                outFour &&            
                <div className='inner-page' ref={page_refFour}>
                <img src='./imgs/fast_jao.png' alt='fastjao'/>
                <div className='content'>
                    <h2>Fast Jao</h2>
                    <div className='button'>
                        <Button>html</Button>
                        <Button>css</Button>
                        <Button>bootstrap</Button>
                        <Button>jquery</Button>
                        <Button>javascript</Button>
                    </div>
                    <p>This Abias project is a very simple and good looking project. It is converted psd to html. </p>
                    <div className='link'>
                    <a href='/'><Button>Click Here</Button></a>
                    </div>
                    
                </div>
            </div>
            }
        </div>
        <div className='main-port'>
            <div className='portfolio-item'>
                <div className='overlay'>
                    <IoMdEye className='eye' onClick={handleClickEyeFive}/>
                </div>
                <img src='./imgs/talknet.png' alt='talknet'/>
            </div>
        
            {
                outFive &&            
                <div className='inner-page' ref={page_refFive}>
                <img src='./imgs/talknet.png' alt='talknet'/>
                <div className='content'>
                    <h2>TalkNet</h2>
                    <div className='button'>
                        <Button>React Js</Button>
                        <Button>Sass</Button>
                        <Button>Firebase</Button>
                    </div>
                    <p>This Abias project is a very simple and good looking project. It is converted psd to html. </p>
                    <div className='link'>
                    <a href='/'><Button>Click Here</Button></a>
                    </div>
                    
                </div>
            </div>
            }
        </div>
        <div className='main-port'>
            <div className='portfolio-item'>
                <div className='overlay'>
                    <IoMdEye className='eye' onClick={handleClickEyeSix}/>
                </div>
                <img src='./imgs/natto.jpg' alt='natto'/>
            </div>
        
            {
                outSix &&            
                <div className='inner-page' ref={page_refSix}>
                <img src='./imgs/natto.jpg' alt='natto'/>
                <div className='content'>
                    <h2>Natto</h2>
                    <div className='button'>
                        <Button>Next Js</Button>
                        <Button>Sass</Button>
                        <Button>bootstrap</Button>
                        <Button>javascript</Button>
                    </div>
                    <p>This Abias project is a very simple and good looking project. It is converted psd to html. </p>
                    <div className='link'>
                    <a href='/'><Button>Click Here</Button></a>
                    </div>
                    
                </div>
            </div>
            }
        </div>
      </div> 
    </div>
  )
}

export default Portfolio
