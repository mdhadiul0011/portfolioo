import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaRegAddressCard } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function FooterLeft() {
  return (
    <div className='left-part'>
      <div className='left-head'>
        <h3>Contact me</h3>
      </div>
        <div className='icon-text'>
        <div className='icon-head'>
                <div className='left-icon'>
                    <HiOutlineMailOpen/>
                </div>
                <div className='left-text'>
                    <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new'>
                        <p>mdhadiul0011@gmail.com</p>
                    </a>
                </div>
             </div>
            <div className='icon-head'>
                <div className='left-icon'>
                    <FaPhoneAlt/>
                </div>
                <div className='left-text'>
                    <p>+8801706008512</p>
                </div>
             </div>
             <div className='icon-head'>
                <div className='left-icon'>
                    <FaRegAddressCard/>
                </div>
                <div className='left-text'>
                    <p>6250 Bagmara, Rajshahi, Bangladesh</p>
                </div>
             </div>
             <div className='icon-head'>
                <div className='left-icon'>
                    <CiLinkedin/>
                </div>
                <div className='left-text'>
                    <a href='https://www.linkedin.com/in/mr-ashik-b8619b208/'>
                        <p>linkedin Profile</p>
                    </a>
                </div>
             </div>
        </div>
        
    </div>
  )
}

export default FooterLeft
