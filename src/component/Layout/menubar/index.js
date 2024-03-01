'use client'
import React, { useEffect, useRef, useState } from 'react'
import '../menubar/menubar.css'
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { VscHome  } from "react-icons/vsc";
import { LuUser2 } from "react-icons/lu";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { LuShapes } from "react-icons/lu";
import { LiaGripVerticalSolid } from "react-icons/lia";
import { MdOutlineComment } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
import { LuFacebook } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import useClickOutside from '@/component/helpers';

function Menubar() {
    const[open, setOpen] = useState()
    const menu_ref = useRef(null)

    useClickOutside(menu_ref, ()=>{
        setOpen(false)
    })

    const handleOpen = ()=>{
        setOpen(true)
    }

    const handleDelete = () => {
        setOpen(false)
    }

  return (
    <div>
        <div className='menubar-part'    >
        <div className='menubar-icon' onClick={handleOpen}>
            <RiBarChartHorizontalLine className='menu-bar'/>
        </div>
        </div>
        
            <div>
                {
                    open && 
                    <div className='sidebar-menu' >
                        <div className='menu-list'  ref={menu_ref}>
                            <div className='cross' onClick={handleDelete}><RxCross2/></div>
                        <h3>Menu</h3>
                        <ul>
                            <li><a href='/'><VscHome className='sidebar-icon'/><span>Home</span></a></li>
                            <li><a href='/'><LuUser2 className='sidebar-icon'/><span>About</span></a></li>
                            <li><a href='/'><IoFileTrayFullOutline className='sidebar-icon'/><span>Resume</span></a></li>
                            <li><a href='/'><FaBarsStaggered className='sidebar-icon'/><span>Service</span></a></li>
                            <li><a href='/'><LuShapes className='sidebar-icon'/><span>Skill</span></a></li>
                            <li><a href='/'><LiaGripVerticalSolid className='sidebar-icon'/><span>Portfolio</span></a></li>
                            <li><a href='/'><MdOutlineComment className='sidebar-icon'/><span>Testimonial</span></a></li>
                            <li><a href='/'><MdOutlineContactPhone className='sidebar-icon'/><span>Contact</span></a></li>
                        </ul>
                            <div className='social'>
                                <h3>Social</h3>
                                <div className='social-icon'>
                                    <div className='icons'>
                                    <a href='https://www.facebook.com/profile.php?id=100056085061568' ><LuFacebook /></a>
                                    </div>
                                    <div   className='icons'>
                                    <a href='https://www.linkedin.com/in/mr-ashik-b8619b208/'  ><CiLinkedin/></a>
                                    </div>
                                    <div   className='icons'>
                                    <a href='https://github.com/mdhadiul0011'><FaGithub/></a>
                                    </div>
                                    
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        
    </div>

  )
}

export default Menubar
