import React from "react";

const BannerClasses = () => {
  return (
    <div className="carousel-item relative w-full">
      <img
        className="w-full h-[150px] md:h-[250px]"
        src="https://i.ibb.co/zQ3kgJm/photo-1535525153412-5a42439a210d-1.png"
        alt=""
      />
      <div className="absolute flex  gap-2  h-full w-full pl-10 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
        <div className="text-white space-y-10 w-full ">
          <h2 className="text-2xl md:text-4xl font-extrabold font-serif">
            <p className="text-center"> All Classes</p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BannerClasses;
