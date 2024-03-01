import React from 'react'
import FooterLeft from './footerleft'
import FooterRight from './FooterRight'
import Button from '../button'
import { MdOutlineContactPhone } from 'react-icons/md'
import { SiFreelancer } from 'react-icons/si'
import { BiLogoUpwork } from 'react-icons/bi'
import { CiLinkedin } from 'react-icons/ci'
import { IoLogoGithub } from 'react-icons/io'

function Footer() {
  return (
    <div className='Footer-part'>
        <Button><MdOutlineContactPhone  className='Footer-icon'/>Contact</Button>
        <div className='footer-head'>
            <h3>Get in <span>Touch</span></h3>
        </div>
        <div className='both-side'>
            <div><FooterLeft/></div>
            <div><FooterRight/></div>
        </div>

        <div className='base-line'>
          <div className='left'>
          <div className='left-list'>
            <a href='https://www.freelancer.com/u/Ashik0123'> <SiFreelancer/> </a>
            <a href='https://www.upwork.com/freelancers/~01cddcdbe926813b2f'> <BiLogoUpwork/> </a>
            <a href='https://www.linkedin.com/in/mr-ashik-b8619b208/'> <CiLinkedin/> </a>
            <a href='https://github.com/mdhadiul0011'> <IoLogoGithub/> </a>
        </div>
          </div>
          <div className='right'><p>© 2022 Hadiul. All Rights Reserved</p></div>
        </div>
    </div>
  )
}

export default Footer
