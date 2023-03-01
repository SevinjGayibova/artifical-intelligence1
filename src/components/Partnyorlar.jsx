import React from 'react'
import Partnyor from './Partnyor'
import { Swiper, SwiperSlide } from 'swiper/react';

import partnyor1 from '../assets/images/Group 400.png'
import partnyor2 from '../assets/images/Group 401.png'
import partnyor3 from '../assets/images/Group 402.png'
import partnyor4 from '../assets/images/Group 403.png'

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper';

const Partnyorlar = () => {
  return (
    <>
    <Swiper
        slidesPerView={3}
        spaceBetween={30}

        breakpoints={{
            327: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        autoplay={{
            delay: 1500,
            
          }}
        modules={[Autoplay]}
    
        className="mySwiper"
      >
        <SwiperSlide><Partnyor shirketinLogosu={partnyor1} /></SwiperSlide>
        <SwiperSlide><Partnyor shirketinLogosu={partnyor2} /></SwiperSlide>
        <SwiperSlide><Partnyor shirketinLogosu={partnyor3} /></SwiperSlide>
        <SwiperSlide><Partnyor shirketinLogosu={partnyor4} /></SwiperSlide>
        
        
        
      </Swiper>
    
    
    
    
    
    </>
  )
}

export default Partnyorlar