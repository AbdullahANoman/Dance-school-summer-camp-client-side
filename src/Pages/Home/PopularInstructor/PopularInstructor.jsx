import React, { useEffect, useState } from "react";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("instructors.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  console.log(instructors);
  return (
    <div className="py-10 ">
      <p className="text-5xl font-semibold text-center py-5">
        Popular Instructors
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
        {instructors.map((instructor, index) => (
          <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
            <div
              class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
              style={{backgroundImage: `url(${instructor?.image})`}}
            ></div>

            <div class="w-96 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white" >
                {instructor?.name}
              </h3>

              <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span class="font-bold text-[14px] text-gray-800 dark:text-gray-200">
                  Number Of Class : {instructor?.number_of_classes}
                </span>
                <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                  See Classes 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
