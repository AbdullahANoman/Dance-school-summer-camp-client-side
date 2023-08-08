import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("https://summer-camp-server-tau.vercel.app/popular")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  console.log(classes);
  // const {image, instructorName, enrolled} = classes || {};

  return (
    <>
      <div className="bg-[url(https://dance-studio.cmsmasters.net/wp-content/uploads/2015/04/heading-image-1.jpg)] my-10 max-h-[100%] text-white py-10">
        <p className="text-4xl text-center">Our Classes</p>
        <p className="text-center italic text-[#EA6045] mt-1">
          Choose your style
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center mx-auto">
          {classes.map((singleClass) => (
            <div
              className="w-72 h-72 mx-auto my-10 relative inline-block group"
              key={singleClass.id}
            >
              <img
                className=" object-cover w-72 h-72   "
                style={{ borderRadius: "50%" }}
                src={singleClass?.image}
                alt=""
              />
              <div
                className="opacity-0  group-hover:opacity-90 absolute top-0 right-0 left-0 bottom-0  transition-opacity duration-1000 ease-in-out transform  bg-gray-700 border border-gray-300 rounded p-2shadow"
                style={{ borderRadius: "50%" }}
              >
                <div className="my-20 text-center mx-2">
                  <p className="text-xl font-bold">Instructor Name : {singleClass?.instructorName}</p>
                  <p className="font-bold text-xl">Enrolled Student: {singleClass?.enrolled}</p>
                </div>
              </div>
              <p className="absolute -right-1 -skew-x-6 bottom-10 bg-[#EA6045] px-4 py-3 font-bold">
                {singleClass.classesName}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/classes">
            <button className="bg-[#EA6045] px-6 py-3 font-bold hover:scale-125 ">
              See More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PopularClasses;
