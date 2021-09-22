import React from 'react'
import Slider from "react-slick";
import './skills.css';
const Skills = () => {

   var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className='skills_sliders container'>
      
        <Slider {...settings}>
          <div id='center'>
            <h3>html</h3>
          </div>
          <div id='center'>
            <h3>css</h3>
          </div>
          <div id='center'>
            <h3>bootstrap</h3>
          </div>
          <div id='center'>
            <h3>javascript</h3>
          </div>
          <div id='center'>
            <h3>React</h3>
          </div>
          <div id='center'>
            <h3>Redux</h3>
          </div>
          <div id='center'>
            <h3>Nodejs</h3>
          </div>
          <div id='center'>
            <h3>Express</h3>
          </div>
        </Slider>
      </div>
    );
}
export default Skills
