import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import slider1 from"../assets/slider1.jpeg"
// import slider2 from"../assets/slider2.jpeg"
// import slider3 from"../assets/slider3.png"
import slider4 from"../assets/main.jpg"
import slider5 from"../assets/ai2.jpg"
import slider6 from"../assets/slider.avif"
import slider7 from"../assets/app-development.avif"
import slider8 from"../assets/python.webp"
import slider9 from"../assets/prog.jpg"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
const SlideImage = ({ src }) => (
    <img className='w-full object-cover h-[500px]'  src={src} alt="" />
  );
const Slider = () => {
  return (
    <>
    <Swiper
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >
   <SwiperSlide>
          <SlideImage src={slider4} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage src={slider5} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage src={slider6} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage src={slider7} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage src={slider8} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage src={slider9} />
        </SwiperSlide>
        {/* <SwiperSlide>
          <SlideImage src={slider7} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage src={slider8} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage src={slider9} />
        </SwiperSlide> */}
  </Swiper>
</>
  )
}

export default Slider