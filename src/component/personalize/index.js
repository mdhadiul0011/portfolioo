import React from 'react'
import { RiFileUserLine } from "react-icons/ri";
import Button from '../button';

function Info() {
  return (
    <div className='info-part'>
      <Button><div><RiFileUserLine className='info_icon'/></div><div>My Information</div></Button>
      <div className='info-body'>
        <h3>Personal <span>Information</span></h3>
        <div className='details'>
            <div className='d-name'>
                <span>Name</span>
            </div>
            <div className='d-color'>
                <span>:</span>
            </div>
            <div className='d-value'>
                <span>Hadiul Islam Ashik</span>
            </div>
        </div>
        <div className='details'>
            <div className='d-name'>
                <span>Date of Birth</span>
            </div>
            <div className='d-color'>
                <span>:</span>
            </div>
            <div className='d-value'>
                <span>8 July, 2002</span>
            </div>
        </div>
        <div className='details'>
            <div className='d-name'>
                <span>Email</span>
            </div>
            <div className='d-color'>
                <span>:</span>
            </div>
            <div className='d-value'>
                <span>mdhadiul0011@gmail.com</span>
            </div>
        </div>
        <div className='details'>
            <div className='d-name'>
                <span>Phone</span>
            </div>
            <div className='d-color'>
                <span>:</span>
            </div>
            <div className='d-value'>
                <span>+880-1706008512</span>
            </div>
        </div>
        <div className='details'>
            <div className='d-name'>
                <span>Address</span>
            </div>
            <div className='d-color'>
                <span>:</span>
            </div>
            <div className='d-value'>
                <span>Bagmara, Rajshahi, Bangladesh</span>
            </div>
        </div>
        <div className='details'>
            <div className='d-name'>
                <span>Religeon</span>
            </div>
            <div className='d-color'>
                <span>:</span>
            </div>
            <div className='d-value'>
                <span>Islam</span>
            </div>
        </div>
        <div className='details'>
            <div className='d-name'>
                <span>Nationality</span>
            </div>
            <div className='d-color'>
                <span>:</span>
            </div>
            <div className='d-value'>
                <span>Bagnladeshi</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Info
