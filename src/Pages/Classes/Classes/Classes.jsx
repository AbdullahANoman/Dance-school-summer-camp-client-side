import React from "react";
import BannerClasses from "../BannerClasses/BannerClasses";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Classes = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  const filteredClasses = classes.filter(
    (singleClass) => singleClass.status === "approve"
  );
  console.log("filtered class ", filteredClasses);


  const handleSelect = (item) =>{
    console.log(item)
  }
  return (
    <div>
      <BannerClasses></BannerClasses>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        {filteredClasses.map((classes) => (
          <div
            className={
              classes.seats == 0
                ? "bg-red-500 max-w-xs overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 mx-auto "
                : "bg-white max-w-xs overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 mx-auto "
            }
          >
            <div className="px-4 py-2">
              <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
                {classes?.classesName}
              </h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                quos quidem sequi illum facere recusandae voluptatibus
              </p>
            </div>

            <img
              className="object-cover w-full h-48 mt-2"
              src={classes?.image}
              alt="DANCE IMAGE"
            />

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
              <h1 className="text-lg font-bold text-white">
                ${classes?.price}
              </h1>
              <button
                onClick={() => handleSelect(classes)}
                disabled={classes?.seats == 0}
                className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
