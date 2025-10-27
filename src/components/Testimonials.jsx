import React from "react";
import { testimonialItems } from "../constant/data";
import { RiArrowLeftSLine, RiArrowRightSLine,  RiStarFill } from "@remixicon/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

//swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="py-[90px] md:py-[150px] bg-neutral-200/60">
      <div className="container">
        <p className="subtitle">Testimonials</p>
        <h2>What our clients say</h2>

        {/* card wrapper */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2
            },
          }}
          navigation={{
            prevEl:'.prev-btn',
            nextEl:'.next-btn'
          }}
          className="mt-10 md:mt-12"
        >
          {testimonialItems.map((item) => (
            // card Swiper Slide
            <SwiperSlide
              className="bg-white p-6 rounded-xl mb-16"
              key={item.id}
            >
              {/* card */}
              <div>
                <div className="flex text-yellow-500 gap-1 items-center text-xl">
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                </div>

                <p className="mt-2 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  repellendus voluptatem deleniti animi, eum dicta quidem.
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-full aspect-square"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center mt-12 gap-6 max-md:hidden">
            <button className="bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-700 transition-colors h-12 w-12 prev-btn">
                <RiArrowLeftSLine />
            </button>
            <button className="bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-700 transition-colors h-12 w-12 next-btn">
                <RiArrowRightSLine />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
