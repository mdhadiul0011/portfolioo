import React from 'react'
import './navber.css'
import { VscHome  } from "react-icons/vsc";
import { LuUser2 } from "react-icons/lu";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { LuShapes } from "react-icons/lu";
import { LiaGripVerticalSolid } from "react-icons/lia";
import { MdOutlineComment } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";

function Navber() {
  return (
    <div className='navber-part'>
      <div className='nav-icons'>
        <div className='icon-details'>
          <a href='/'>
            <VscHome  className='icon'/>
          </a>
          <div className='icon-name'>
            <p>Home</p>
          </div>
        </div>
        <div className='icon-details'>
          <a href='/'>
            <LuUser2  className='icon'/>
          </a>
          <div className='icon-name'>
            <p>About</p>
          </div>
        </div>
        <div className='icon-details'>
          <a href='/'>
            <IoFileTrayFullOutline  className='icon'/>
          </a>
          <div className='icon-name'>
            <p>Resume</p>
          </div>
        </div>
        <div className='icon-details'>
          <a href='/'>
            <FaBarsStaggered  className='icon'/>
          </a>
          <div className='icon-name'>
            <p>Service</p>
          </div>
        </div>
        <div className='icon-details'>
          <a href='/'>
            <LuShapes  className='icon'/>
          </a>
          <div className='icon-name'>
            <p>Skill</p>
          </div>
        </div>
        <div className='icon-details'>
          <a href='/'>
            <LiaGripVerticalSolid  className='icon'/>
          </a>
          <div className='icon-name'>
            <p>Portfolio</p>
          </div>
        </div>
        <div className='icon-details'>
          <a href='/'>
            <MdOutlineComment  className='icon'/>
          </a>
          <div className='icon-name'>
            <p>Testimonial</p>
          </div>
        </div>
        <div className='icon-details'>
          <a href='/'>
            <MdOutlineContactPhone  className='icon'/>
          </a>
          <div className='icon-name'>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navber

