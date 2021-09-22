import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.css';

import { testimonials } from "./testimonial";

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="testimonial_card">
          <Slider {...settings}>
          {
            testimonials.map((testimonial)=>{
              return(
          
            <div key={testimonial.id} className='test_card_adjustment'>
              <p>{testimonial.paragraph}</p>
              <div className="image">
                <img src={testimonial.image} alt="aa raha hy" />
              </div>
              <h4>{testimonial.client_name}</h4>
            </div> 
         
              )
            })
          }
           </Slider>
          
          
        </div>
      );
}

export default Testimonial;
