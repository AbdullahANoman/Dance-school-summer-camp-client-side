import React, { useContext } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors = [], refetch } = useQuery(
    ["classes"],
    async () => {
      const res = await axiosSecure.get(`/classes/${user?.email}`);
      return res.data;
    }
  );
  console.log('instructors are here' , instructors)
  const { data: enrolledStudents = [],  } = useQuery(
    ["enrolled"],
    async () => {
      const res = await axiosSecure.get(`/enrolled/${user?.email}`);
      return res.data;
    }
  );

  console.log("enrolledStudents are here", enrolledStudents)

  console.log("instructors in my class", instructors);
  return (
    <div className="w-full">
      <p className="font-bold text-2xl m-5">
        My Total Added Class {instructors?.length}
      </p>
      <p className="font-bold text-xl m-5">Total Enrolled students {enrolledStudents?.length}</p>
      <div className="mx-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Image</th>
                <th>Class Name</th>
                <th>Status</th>
                <th>FeedBack</th>
              </tr>
            </thead>
            <tbody>
              {instructors.map((instructor,index) => (
                <tr>
                  <th>
                    {index+1}
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={instructor?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {instructor.classesName}
                  </td>
                  <td ><span className={`px-2  text-white py-1 font-semibold rounded ${instructor?.status == 'pending' && 'bg-yellow-400'} ${instructor?.status== 'approve' && 'bg-blue-400'} ${instructor?.status == 'deny' && 'bg-red-400'}`}>{instructor?.status}</span></td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
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

export default MyClass;
