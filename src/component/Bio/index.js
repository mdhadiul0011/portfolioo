import React from 'react'
import { SiFreelancer } from "react-icons/si";
import { BiLogoUpwork } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";

function Bio() {
  return (
    <div className='bio-part'>
        <div className='my_name_position'>
            <span className='name'>Hadiul</span>
            <span className='position'>Front-end Developer</span>
        </div>
        <div className='my-img'>
            <img src='./imgs/hadiul.jpg' alt='hadiul-img' />
        </div>
        <div className='email-add'>
            <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new'>mdhadiul0011@gmail.com</a>
            <p>Bagmara, Rajshahi, Bangladesh</p>
            <span>© 2022 Hadiul. All Rights Reserved</span>
        </div>
        <div className='icon-list'>
            <a href='https://www.freelancer.com/u/Ashik0123'> <SiFreelancer/> </a>
            <a href='https://www.upwork.com/freelancers/~01cddcdbe926813b2f'> <BiLogoUpwork/> </a>
            <a href='https://www.linkedin.com/in/mr-ashik-b8619b208/'> <CiLinkedin/> </a>
            <a href='https://github.com/mdhadiul0011'> <IoLogoGithub/> </a>
        </div>
        <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new'>
        <div className='btn'>
            <button >Hire Me</button>
        </div>
        </a>
    </div>
  )
}

export default Bio
