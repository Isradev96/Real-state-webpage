import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import React from "react";
import { cardItems } from "../constant/data";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

//swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const PopularProperties = () => {
  return (
    <section className='section'>
      <div className='container'>
        {/* Title Wrapper */}
       <div className='lg:flex lg:justify-between lg:items-center'>
         <div>
          <h2>Popular Properties</h2>
          <p className='max-w-[500px] mt-4 mb-7'>
            Lorem ipsum dolor sit amet consectetur. Faucibus tristique auctor
            mauris velit varius. Eu duis viverra.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className='flex items-center gap-5 mb-5'>
            <button className='bg-sky-600 text-white h-12 w-12 flex items-center justify-center rounded-full hover:bg-sky-800 transition-colors active:bg-sky-700 prev-btn'>
                <RiArrowLeftLine size={24} />
            </button>
            <button className='bg-sky-600 text-white h-12 w-12 flex items-center justify-center rounded-full hover:bg-sky-800 transition-colors active:bg-sky-700 next-btn'>
                <RiArrowRightLine size={24} />
            </button>
        </div>
       </div>

       {/* card Wrapper */}
       <Swiper
       modules={[Navigation,Autoplay,Pagination]}
       pagination={{clickable:true}}
       loop={true}
       autoplay={{
        disableOnInteraction:false,
        pauseOnMouseEnter:true,
        delay:5000
       }}
       navigation={{
        prevEl:'.prev-btn',
        nextEl:'.next-btn'
       }}
       spaceBetween={30}
       breakpoints={{
        575:{
          slidesPerView:2
        },
        993:{
          slidesPerView:3
        }
       }}
       className=''>
        {cardItems.map(item => (
            <SwiperSlide className='mb-20' key={item.id}>
                {/* card */}
                <div className='border border-gray-200'>
                    {/* card Image */}
                    <div className=''>
                        <img src={item.imgURL} alt={item.name} className='w-full h-full object-cover'/>
                    </div>

                    {/* card content */}
                    <div className='p-5'>
                        <b className='text-xl text-gray-900'>{item.price}</b>
                        <a href='#' className='block font-semibold text-xl leading-tight mt-2 text-gray-700 hover:text-sky-600 transition-colors'>{item.name}</a>
                        <p>{item.location}</p>

                        <div className='flex flex-wrap gap-4 mt-4 items-center'>
                            <p>{item.bed}</p> |
                            <p>{item.bath}</p> |
                            <p>{item.area}</p>
                            
                        </div>
                    </div>
                </div>

            </SwiperSlide>
        ))}
       </Swiper>
      </div>
    </section>
  );
};

export default PopularProperties;
