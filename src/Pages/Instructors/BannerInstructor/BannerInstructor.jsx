import React from 'react';

const BannerInstructor = () => {
    return (
        <div className="carousel-item relative w-full">
      <img
        className="w-full h-[150px] md:h-[250px]"
        src="https://i.ibb.co/173K8m4/photo-1621976498727-9e5d56476276.png"
        alt=""
      />
      <div className="absolute flex  gap-2  h-full w-full pl-10 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
        <div className="text-white space-y-10 w-full ">
          <h2 className="text-2xl md:text-4xl font-extrabold font-serif">
            <p className="text-center"> Our Instructors</p>
          </h2>
        </div>
      </div>
    </div>
    );
};

export default BannerInstructor;