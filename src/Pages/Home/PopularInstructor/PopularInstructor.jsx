import React, { useEffect, useState } from "react";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructor/instructor")
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
        {instructors.slice(0,6).map((instructor, index) => (
          <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img
            className="object-cover w-full h-56"
            src={instructor?.image}
            alt="avatar"
          />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              tabindex="0"
              role="link"
            >
              {instructor?.name}
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
            {instructor?.email}
            </span>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
