import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
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
            className="w-full md:h-[95vh]"
            src="https://www.dwcworld.com/img/slider/ballet_stretch_2.jpg"
            alt=""
          />
            <div className="absolute flex  gap-2  h-full w-full pl-10 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
              <div className="text-white space-y-10 w-1/2 ">
                <h2 className="text-2xl md:text-6xl font-extrabold font-serif">
                  Fun Toys For <p className="mt-2">Your Kids</p>
                </h2>
                <p>
                  Browse through our huge collection of fun toys, dolls, puzzle
                  games and more for your kids. Shop, play and create fond
                  memories with your little ones!
                </p>
                <div className="">
                  <button className="btn bg-[#32BDF2] border-none hover:bg-[#FF6A98] mr-5">
                    Shop Now
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
              <div className="text-white space-y-10 w-1/2 ">
                <h2 className="text-2xl md:text-6xl font-extrabold font-serif">
                  Fun Toys For <p className="mt-2">Your Kids</p>
                </h2>
                <p>
                  Browse through our huge collection of fun toys, dolls, puzzle
                  games and more for your kids. Shop, play and create fond
                  memories with your little ones!
                </p>
                <div className="">
                  <button className="btn bg-[#32BDF2] border-none hover:bg-[#FF6A98] mr-5">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
