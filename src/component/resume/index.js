import React from 'react'
import Button from '../button'
import { IoFileTrayFullOutline } from 'react-icons/io5'

function Resume() {
  return (
    <div className='resume-part'>
      <Button><div><IoFileTrayFullOutline  className='resume-icon'/></div> <div>Resume</div></Button>

      <div className='resume-head'>
        <h3>My <span>Education</span> & <span>Experience</span></h3>
      </div>
      <div className='ecducation-part'>
        <div className='school-part'>
          <div  className='year'>
            <span>2022-2024</span>
          </div>
          <h3>Website Design & Frontend Development</h3>
          <p className='institute'>Creative IT Institute</p>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className='ecducation-part'>
        <div className='school-part'>
          <div  className='year'>
            <span>2019-2023</span>
          </div>
          <h3>Bachelor of Arts (Honourse)</h3>
          <p className='institute'>Rajshahi College</p>
          <p>Rajshahi, Bangladesh</p>
        </div>
      </div>
      <div className='ecducation-part'>
        <div className='school-part'>
          <div  className='year'>
            <span>2017-2018</span>
          </div>
          <h3>Higher School Certificate(HSC)</h3>
          <p className='institute'>Gazipur Cantonment College</p>
          <p>Gazipur, Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className='ecducation-part'>
        <div className='school-part'>
          <div  className='year'>
            <span>2015-2016</span>
          </div>
          <h3>Secondary School Certificate(SSC)</h3>
          <p className='institute'>Kanthal Bari High School</p>
          <p>Bagmara, Rajshahi, Bangladesh</p>
        </div>
      </div>
    </div>
  )
}

export default Resume
