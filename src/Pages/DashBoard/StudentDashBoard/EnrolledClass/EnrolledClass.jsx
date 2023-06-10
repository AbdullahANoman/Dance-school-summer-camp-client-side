import React, { useContext } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";

const EnrolledClass = () => {
    const {user} = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();
  const { data: enrolledClasses = [], refetch } = useQuery(
    ["payments"],
    async () => {
      const res = await axiosSecure.get(`payments/${user?.email}`);
      return res.data;
    }
  );

  console.log(enrolledClasses);
  return (
    <div className="w-full">
      <p className="font-bold text-3xl m-5">
        My Enrolled Class {enrolledClasses?.length}
      </p>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-2/3 mx-auto mt-10">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {enrolledClasses.map((enrolledClass,index) => (
                <tr>
                  <th>{index+1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={enrolledClass?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {enrolledClass?.classesName}
                  </td>
                  <td>{enrolledClass?.instructorName}</td>
                  <th>
                    {enrolledClass?.price}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EnrolledClass;
