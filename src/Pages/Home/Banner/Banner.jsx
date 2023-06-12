import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Bounce, Fade } from "react-awesome-reveal";
const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full text-white"
      >
        <SwiperSlide>
          <div className="carousel-item relative w-full">
            <img
              className="w-full md:h-[95vh] "
              src="https://www.dwcworld.com/img/slider/ballet_stretch_2.jpg"
              alt=""
            />
            
            <div className="absolute flex flex-row-reverse  gap-2  h-full w-full pl-96  items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl ">
              
              <div className="text-white  w-1/2 pl-5  ">
                <p
                  className="uppercase text-2xl mb-0 "
                  data-aos-duration="200"
                  data-aos="fade-right"
                >
                  Be in the{" "}
                </p>
                <p
                  className="uppercase text-7xl mt-0 font-bold text-[#571F9C] "
                  data-aos="flip-left"
                  data-aos-duration="500"
                >
                  Spotlight
                </p>
                <p
                  className="font-thin text-xl mb-10 transition duration-300"
                  data-aos-duration="700"
                  data-aos="flip-down"
                >
                  Learn from the Best-Dance Professionals
                </p>

               <Bounce>
               <div className="uppercase text-2xl">
                  <p>
                    {" "}
                    <span data-aos="fade-right" data-aos-duration="2500">
                      hip-hop-dance _ _ _ _ _ _ _ _ __{" "}
                    </span>{" "}
                    &nbsp; &nbsp;{" "}
                    <div
                      data-aos="zoom-out"
                      data-aos-duration="1200"
                      className="inline h-full w-full"
                    >
                      199.00/mo
                    </div>
                  </p>
                  <p>
                    {" "}
                    <span data-aos="fade-right" data-aos-duration="2500">
                      ballet _ _ _ _ _ _ _ _ _ _ _ _ _ __{" "}
                    </span>{" "}
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{" "}
                    <div
                      data-aos="zoom-out"
                      data-aos-duration="1200"
                      className="inline h-full w-full"
                    >
                      199.00/mo
                    </div>
                  </p>
                  <p>
                    {" "}
                    <span data-aos="fade-right" data-aos-duration="2500">
                      break dancing _ _ _ _ _ _ _ _ __{" "}
                    </span>{" "}
                    &nbsp; &nbsp;{" "}
                    <div
                      data-aos="zoom-out"
                      data-aos-duration="1200"
                      className="inline h-full w-full"
                    >
                      199.00/mo
                    </div>
                  </p>
                  <p>
                    {" "}
                    <span data-aos="fade-right" data-aos-duration="2500">
                      salsa _ _ _ _ _ _ _ _ __ _ _ _ _ _{" "}
                    </span>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    <div
                      data-aos="zoom-out"
                      data-aos-duration="1200"
                      className="inline h-full w-full"
                    >
                      199.00/mo
                    </div>
                  </p>
                </div>
               </Bounce>
                <div className="flex gap-10 uppercase mt-10">
                  <button data-aos="fade-up" data-aos-duration="1500" className="px-6 py-4 text-lg font-semibold uppercase   bg-[#571F9C]">
                    our service
                  </button>
                  <button data-aos="fade-up" data-aos-duration="2000"  className="px-6 py-4 text-lg font-semibold uppercase border   bg-transparent">
                    get a quote
                  </button>
                </div>
              </div>
            </div>
         
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item relative w-full">
            <img
              className="w-full md:h-[95vh]"
              src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <div className="absolute flex  gap-2  h-full w-full pl-10 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
              <div data-aos="fade-up" data-aos-duration="4000" className="text-white space-y-10 w-full">
                <p className="text-5xl text-center">Create the best moves for you</p>
                <Fade><p className="text-8xl font-bold text-center">
                  Dance to the beat
                </p></Fade>
                <div className="">
                <div className="flex gap-10 uppercase mt-10 justify-center">
                  <button data-aos="fade-up" data-aos-duration="1500" className="px-6 py-4 text-lg font-semibold uppercase   bg-[#571F9C]">
                    our service
                  </button>
                  <button data-aos="fade-up" data-aos-duration="2000"  className="px-6 py-4 text-lg font-semibold uppercase border   bg-transparent">
                    get a quote
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default Banner;
