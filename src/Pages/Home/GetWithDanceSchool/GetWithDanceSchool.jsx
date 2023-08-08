import React from "react";
import { FaHeart, FaStar, FaPeopleArrows } from "react-icons/fa";
const GetWithDanceSchool = () => {
  return (
    <div className="md:max-w-[70%] mx-auto my-10 md:flex items-center justify-center">
      <div>
        <img
          src="https://dance-studio.cmsmasters.net/wp-content/uploads/2015/07/Depositphotos_69248507_original-1.jpg"
          alt=""
          height={600}
          width={800}
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-4xl ">What you'll get with Dance School</p>
        <p className="text-[#EA6045] italic mb-10">
          Benefits of being a dancer
        </p>
        <div className="flex items-center gap-5">
          <div
            className="bg-[#EA6045] w-[100px]   h-[100px] flex items-center "
            style={{ borderRadius: "50%" }}
          >
            <FaHeart className="text-white mx-auto" size={26}></FaHeart>
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold">Healthy Body & Mind</h1>
            <p className="text-gray-500 mt-2">
              Cum sociis natoque penatibus et magnis dis parturient ntesmus.
              Proin vel nibh et elit mollis commodo parturient montesmus.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 mt-5">
          <div
            className="bg-[#EA6045] w-[100px]   h-[100px] flex items-center "
            style={{ borderRadius: "50%" }}
          >
            <FaStar className="text-white mx-auto" size={26}></FaStar>
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold">Great Music & Costumes</h1>
            <p className="text-gray-500 mt-2">
              Cum sociis natoque penatibus et magnis dis parturient ntesmus.
              Proin vel nibh et elit mollis commodo parturient montesmus.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 mt-5">
          <div
            className="bg-[#EA6045] w-[100px]   h-[100px] flex items-center "
            style={{ borderRadius: "50%" }}
          >
            <FaPeopleArrows
              className="text-white mx-auto"
              size={26}
            ></FaPeopleArrows>
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold">Creative & Fun People</h1>
            <p className="text-gray-500 mt-2">
              Cum sociis natoque penatibus et magnis dis parturient ntesmus.
              Proin vel nibh et elit mollis commodo parturient montesmus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetWithDanceSchool;
