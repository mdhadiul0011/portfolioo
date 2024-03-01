'use client'
import React from 'react'
import { MdOutlineComment } from 'react-icons/md'
import Button from '../button'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SamplePrevArrow from './prev';
import SampleNextArrow from './next';

function Testimonial() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
      };
  return (
    <div className='testimonial'>
      <Button><div className='test-icon'><MdOutlineComment/></div><div>Testimonial</div></Button>
      <div className='test-content'>
        <h3>Trusted by some <span>Client</span></h3>
      </div>

      <Slider {...settings}>
      <div className='client-cmnt'>
        <div className='cmnt-item'>
            <div className='img'>
                <div className='client-img'>
                    <img src='./imgs/test-1.jpg' alt='client-pic'/>
                </div>
                <div className='client-name'>
                    <h3>Lalit B.</h3>
                    <p>CEO of <span>Envato LLC</span></p>
                </div>
            </div>
            <div className='cmnt-details'>
                <p>"Hadiul- A developer with the creativite, proffesional and master of code. Very good freelancer by heart and nature technical skills good"</p>
            </div>
        </div>
      </div>
      <div className='client-cmnt'>
        <div className='cmnt-item'>
            <div className='img'>
                <div className='client-img'>
                    <img src='./imgs/test-2.png' alt='client-pic'/>
                </div>
                <div className='client-name'>
                    <h3>Paublo Dybala</h3>
                    <p>CEO of <span>Envato LLC</span></p>
                </div>
            </div>
            <div className='cmnt-details'>
                <p>“Extremely profressional and fast service!. Hadiul is a master of code and he also very creative. We done 3 projects with him and certain will continue.”</p>
            </div>
        </div>
      </div>
      <div className='client-cmnt'>
        <div className='cmnt-item'>
            <div className='img'>
                <div className='client-img'>
                    <img src='./imgs/test-3.jpg' alt='client-pic'/>
                </div>
                <div className='client-name'>
                    <h3>Chirstiana Morillo</h3>
                    <p>Product Manager of <span>Invision App Inc</span></p>
                </div>
            </div>
            <div className='cmnt-details'>
                <p>"Hadiul was a real pleasure to work with and we look forward to working with him again. He's definitely the kind of designer that you can trust with any project from A-Z.”</p>
            </div>
        </div>
      </div>
      </Slider>
    </div>
  )
}

export default Testimonial
