import React, { useContext } from "react";
import BannerInstructor from "../BannerInstructor/BannerInstructor";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Instructors = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors = [], refetch } = useQuery(
    ["instructor"],
    async () => {
      const res = await axiosSecure.get("/instructor/instructor");
      return res.data;
    }
  );

  console.log("instructor page : ", instructors);

  return (
    <div>
      <BannerInstructor></BannerInstructor>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-2xl py-10 mx-auto">
        {instructors.map((instructor) => (
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

export default Instructors;
