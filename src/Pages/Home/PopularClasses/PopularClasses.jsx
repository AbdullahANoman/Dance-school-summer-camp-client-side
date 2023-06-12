import React, { useEffect, useState } from "react";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/popular")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  console.log(classes);

  return (
    <div className="mx-auto py-10">
      <p className="text-center text-5xl font-semibold py-10">
        Popular Classes
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-10 ">
        {classes.map((popularClass, index) => (
          <>
            <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
            <div
              class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
              style={{backgroundImage: `url(${popularClass.image})`}}
            ></div>

            <div class="w-96 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white" >
                {popularClass?.classesName}
              </h3>

              <div class="text-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span class="font-bold text-center text-gray-800 dark:text-gray-200">
                  <p className="text-center">Enrolled Student : {popularClass?.enrolled}</p>
                </span>
  
              </div>
            </div>
          </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
