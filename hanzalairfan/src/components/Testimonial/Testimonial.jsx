import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.css';

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="testimonial_card">
          
          <Slider {...settings}>
            <div className='test_card_adjustment'>
              <p> pargraph</p>
              <img src="" alt="" />
              <h4> title</h4>
            </div>
            
          </Slider>
        </div>
      );
}

export default Testimonial;
