import data from './data'
import "./education.css"
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Education = () => {
  return (
    <section id='ُEducation'>
      <h2 className=' education__name'>Certificates</h2>
      <div>
      <Swiper className= 'container education__container' 
     
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        800:{
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
      }}
    >
        {data.map( item =>
          <SwiperSlide className='education__item' key={item.id}>
            <div className="education__item-img">
              <img src={item.image} alt="education image" />
            </div>
            <div className="education__content">
              <h4>{item.title}</h4>
           
              <div className="education__item-cta alone">
               <a href={item.github} className='btn primary ' target='_blank'>Confirmation Link</a>
              </div>
              
            </div>
          </SwiperSlide> 
        )}
        </Swiper>
      </div>
    </section>
  )
}

export default Education